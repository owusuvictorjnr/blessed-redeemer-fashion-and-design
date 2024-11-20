import axios from "axios";

export const getCurrencyRate = async (currencyCode: string) => {
  try {
    const response = await axios.get(
      `${process.env.EXT_PUBLIC_OPENEXCHANGE_BASE_URL}?app_id=${process.env.OPENEXCHANGE_APP_ID}`
    );
    return response.data.rates[currencyCode] || 1;
  } catch (error) {
    console.log("Error fetching currency rate: ", error);
    return 1;
  }
};
