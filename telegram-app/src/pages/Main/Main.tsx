import { useContext, useEffect, useState } from "react";
import getAllHoroscope, { Horoscope } from "../../API/api";
import Item from "../Item/Item";
import { LanguageContext } from "../../utils/context";

export default function Main() {
  const language = useContext(LanguageContext);
  const [data, setData] = useState<Horoscope | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const dataApi = await getAllHoroscope(
          language === "ru" ? "original" : "translated"
        );
        if (dataApi) {
          setData(dataApi.horoscopes);
        }
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    }
    fetchData();
  }, [language]);
  return (
    <main>
      {data ? (
        <div className='item_div'>
          {Array.from(Object.keys(data)).map((x) => {
            return <Item id={x} key={x} />;
          })}
        </div>
      ) : (
        <div>Загрузка...</div>
      )}
    </main>
  );
}
