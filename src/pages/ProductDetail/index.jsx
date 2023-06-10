import Header from "../../components/Header";
import "./index.scss";
import { PRODUCTS_MOCK } from "../../api/products.mock.js";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  let { id } = useParams();
  const [products] = useState(PRODUCTS_MOCK);

  const product = products.find((element) => element.id == id);

  return (
    <div className="ProductDetail">
      <Header />
      <div className="ProductDetail__detail">
        <img src={product.imgPath} alt="" />
        <h1>{product.title}</h1>
        <h4>{product.price}</h4>
      </div>
    </div>
  );
}
