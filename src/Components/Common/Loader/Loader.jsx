import cls from "./loader.module.scss";

const visibleProducts = [0, 0, 0, 0, 0, 0, 0, 0];

export default function Loader() {
  return (
    <div className={cls.wrapper}>
      {visibleProducts.map((product, i) => (
        <div className={cls.productShadow} key={i}></div>
      ))}
    </div>
  );
}
