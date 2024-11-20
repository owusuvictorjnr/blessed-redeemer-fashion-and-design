import axios from "axios";

export const getCurrencyRate = async (currencyCode: string) => {
  try {
    const response = await axios.get(
      `https://api.exchangerate-api.com/v4/latest.json?app_id=${process.env.NEXT_PUBLIC_OPENEXCHANGE_APP_ID}base=USD`
    );
    return response.data.rates[currencyCode] || 1;
  } catch (error) {
    console.log("Error fetching currency rate: ", error);
    return 1;
  }
};
