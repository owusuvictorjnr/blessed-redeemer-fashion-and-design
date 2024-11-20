import ipinfo from "node-ipinfo";


const token = process.env.NEXT_PUBLIC_IPINFO_TOKEN || "";

export const getCountryInfo = async (ip: string) => {
  const ipinfoClient = new ipinfo(token);

  try {
    const data = await ipinfoClient.lookupIp(ip);
    return data.country;
  } catch (error) {
    console.log("Error fetching country info: ", error);
    return null;
  }
};
