import "../../../styles/app.scss";
import cls from "./ourproducts.module.scss";
import Product from "../../Common/Product/Product.jsx";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import products from "../../../store/products.js";

export default function OurProducts() {
  const [slice, setSlice] = useState(8);
  const visibleProducts = products.slice(0, slice);
  const isShowingAll = visibleProducts.length === products.length;

  const showMore = () => {
    setSlice((prevSlice) => prevSlice + 4);
  };

  const Products = visibleProducts.map((product, index) => (
    <Product i={index} key={product._id} product={product} />
  ));

  return (
    <section className={`${cls.wrapper} ${"container"}`}>
      <h1>our products</h1>
      <div className={cls.productsGrid}>{Products}</div>
      <div className={cls.buttonsContainer}>
        <div
          className={`${cls.showMore} ${isShowingAll ? cls.disabled : ""}`}
          onClick={!isShowingAll ? showMore : undefined}
        >
          <p className={cls.showBtn}>Show More</p>
          <Icon className={cls.showIcon} icon="raphael:arrowdown" />
        </div>
      </div>
    </section>
  );
}
