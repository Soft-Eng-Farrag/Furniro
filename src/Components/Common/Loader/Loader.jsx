import cls from "./loader.module.scss";

const visibleProducts = [0, 0, 0, 0, 0, 0, 0, 0];

export default function Loader() {
  return (
    <div className={cls.wrapper}>
      {visibleProducts.map((product) => (
        <div className={cls.productShadow} key={product.id}></div>
      ))}
    </div>
  );
}
