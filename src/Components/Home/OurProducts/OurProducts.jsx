import "../../../styles/app.scss";
import axios from "axios";
import cls from "./ourproducts.module.scss";
import Product from "../../Common/Product/Product.jsx";
import Loader from '../../Common/Loader/Loader.jsx'
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useEffect } from "react";

export default function OurProducts() {
  const [products, setProducts] = useState([]); // state فاضي في البداية
  const [loading, setLoading] = useState(true); // عشان نعرف لو لسه محمّل
  const [error, setError] = useState(null);
  const [slice, setSlice] = useState(4);

  useEffect(() => { // here we get the data once component mounts 
    setTimeout(() => {
      axios
        .get("http://localhost:5000/products")
        .then((res) => {
          console.log(res.data);

          setProducts(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, 2000);
  }, []);

  const visibleProducts = products.slice(0, slice);
  const isShowingAll = visibleProducts.length === products.length;

  const showMore = () => {
    setSlice((prevSlice) => prevSlice + 4);
  };

  if (loading) return <Loader />;
  if (error) return <p>Error : {error}</p>;

  return (
    <section className={`${cls.wrapper} ${"container"}`}>
      <h1>our products</h1>
      <div className={cls.productsGrid}>
        {visibleProducts.map((product) => (
          <div className={cls.content} key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
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
