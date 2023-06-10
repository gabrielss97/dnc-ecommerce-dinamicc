/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./index.scss";

export default function Card({ data }) {
  return (
    <div className="Card">
      <img src={data.imgPath} alt={data.title} />
      <div className="Card__text">
        <span>{data.title}</span>
        <Link to={`product/${data.id}`}>
          <button>Comprar Look</button>
        </Link>
      </div>
    </div>
  );
}
