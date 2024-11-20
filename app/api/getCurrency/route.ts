import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const ipInfoToken = process.env.IPINFO_TOKEN;
    const ip =
      (req.headers as Headers).get("x-forwarded-for") ||
      (req.headers as Headers).get("cf-connecting-ip") ||
      "8.8.8.8"; // Default to a public IP for testing
    const ipInfoUrl = `https://ipinfo.io/${ip}?token=${ipInfoToken}`;

    const ipInfoResponse = await fetch(ipInfoUrl);
    const ipInfoData = await ipInfoResponse.json();

    const country = ipInfoData.country || "US";
    const currency = country === "IE" ? "EUR" : "USD";

    return NextResponse.json({ currency });
  } catch (error) {
    console.error("Error fetching country info: ", error);
    return NextResponse.json({
      currency: "USD",
      error: "Unable to detect currency",
    });
  }
}
