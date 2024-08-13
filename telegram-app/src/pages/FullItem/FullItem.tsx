import { useNavigate, useParams } from "react-router-dom";
import style from "./FullItem.module.css";
import { useContext, useEffect, useState } from "react";
import dataArray from "../../data/data";
import getHoroscope from "../../API/getHoroscope";
import { LanguageContext } from "../../utils/context";

export function FullItem() {
  const language = useContext(LanguageContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<(typeof dataArray)[0] | null>(null);
  const [dataInfo, setDataInfo] = useState<string | null>(null);
  const [img, setImg] = useState<string | null>(null);
  useEffect(() => {
    const foundData = dataArray.find((item) => item[1] === id);
    if (foundData) {
      setData(foundData);

      import(`../../img/${id}.png`)
        .then((module) => setImg(module.default))
        .catch(() => setImg(null));
    }
  }, [id]);

  useEffect(() => {
    async function fetchData() {
      try {
        const dataApi = await getHoroscope(
          language === "ru" ? "original" : "translated",
          id!
        );
        if (dataApi) {
          setDataInfo(dataApi.horoscope);
        }
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    }
    fetchData();
  }, [language]);

  const handleBackButton = () => {
    //@ts-ignore
    window.Telegram.WebApp.BackButton.onClick(navigate("/"));
  };

  return (
    <div className='fullItem'>
      <div className={style.img_div} style={{ marginTop: "50px" }}>
        {img && <img style={{ width: "200px" }} src={img} alt={id} />}
      </div>
      <div className={style.info}>
        <h2 className={style.title} style={{ fontSize: "50px" }}>
          {data && language === "ru" ? data![0] : id}
        </h2>
        <p className={style.date} style={{ fontSize: "30px" }}>
          {data && data[2]}
        </p>
        <h3 style={{ maxWidth: "500px", margin: "20px auto" }}>{dataInfo}</h3>
      </div>
      <button
        style={{
          margin: "20px auto",
          display: "flex",
          width: "60px",
          height: "30px",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleBackButton}
      >
        {language! === "ru" ? "Назад" : "Back"}
      </button>
    </div>
  );
}
