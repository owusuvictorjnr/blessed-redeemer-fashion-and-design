import { getCurrencyRate } from "./getCurrencyRate";
import ipinfo from "node-ipinfo";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getCurrencyProps(req: any) {
  const token = process.env.IPINFO_TOKEN || "";
  const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;

  let country = "Ghana"; // default country
  try {
    const ipInfo = new ipinfo(token);
    const { country: userCountry } = await ipInfo.lookupIp(ip);
    country = userCountry || "Ghana";
  } catch (error) {
    console.log("Error fetching user location: ", error);
  }

  const currency = country === "US" ? "USD" : "GHS";
  const rate = await getCurrencyRate(currency);
  const currencySymbol = country === "US" ? "$" : "₵";

  return {
    currency,
    rate,
    currencySymbol,
  };
}
