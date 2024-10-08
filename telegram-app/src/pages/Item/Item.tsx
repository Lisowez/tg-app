import { useContext, useEffect, useState } from "react";
import dataArray from "../../data/data";
import style from "./Item.module.css";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../utils/context";

interface Props {
  id: string;
}

const Item = (props: Props) => {
  const language = useContext(LanguageContext);
  const [data, setData] = useState<(typeof dataArray)[0] | null>(null);
  const [img, setImg] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const foundData = dataArray.find((item) => item[1] === props.id);
    if (foundData) {
      setData(foundData);

      import(`../../img/${props.id}.png`)
        .then((module) => setImg(module.default))
        .catch(() => setImg(null));
    }
  }, [props.id]);

  return (
    <div
      className={style.item}
      onClick={() => {
        navigate(`/zodiac/${props.id}`);
      }}
      id={props.id}
    >
      <div className={style.img_div}>
        {img && <img style={{ width: "50px" }} src={img} alt={props.id} />}
      </div>
      <div className={style.info}>
        <h2 className={style.title}>
          {data && language === "ru" ? data![0] : props.id}
        </h2>
        <p className={style.date}>{data && data[2]}</p>
      </div>
    </div>
  );
};

export default Item;
