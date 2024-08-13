export interface Horoscope {
  aquarius: string;
  aries: string;
  cancer: string;
  capricorn: string;
  gemini: string;
  leo: string;
  libra: string;
  pisces: string;
  sagittarius: string;
  scorpio: string;
  taurus: string;
  virgo: string;
}
export interface Data {
  horoscopes: Horoscope;
  language: "original" | "translated";
}

async function getAllHoroscope(language: string): Promise<Data | null> {
  try {
    const data = await fetch("https://poker247tech.ru/get_horoscope/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ language: language }),
    });
    const response = await data.json();
    return response;
  } catch (error) {
    throw error;
  }
}

export default getAllHoroscope;
