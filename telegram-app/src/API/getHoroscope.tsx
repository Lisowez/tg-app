export interface Data {
  horoscope: string;
  language: "original" | "translated";
  sings: string;
}

async function getHoroscope(
  language: string,
  sign: string
): Promise<Data | null> {
  try {
    const data = await fetch("https://poker247tech.ru/get_horoscope/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ language: language, sign: sign, period: "today" }),
    });
    const response = await data.json();
    return response;
  } catch (error) {
    throw error;
  }
}

export default getHoroscope;
