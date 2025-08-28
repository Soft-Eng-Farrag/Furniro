/* eslint-disable react/prop-types */

import cls from "./product.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";


export default function Product({ product }) {
  const { title, image, description, newPrice, oldPrice, discount } = product;
  return (
    <div className={cls.wrapper}>
      <div className={`${cls.state} ${discount ? cls.sale : cls.new}`}>
        {discount ? `-${discount}%` : "New"}
      </div>
      <img className={cls.image} src={`../../../${image}`} alt="product-image" />
      <div className={cls.productInfo}>
        <p className={cls.title}>{title}</p>
        <span className={cls.description}>{description}</span>
        <div className={cls.prices}>
          <span className={cls.newPrice}>{newPrice} EGP</span>
          <span className={cls.oldPrice}>{oldPrice} EGP</span>
        </div>
      </div>
      <div className={cls.actions}>
        <button className={cls.addtoCart}>add to cart</button>
        <div className={cls.actionIcons}>
          <div className={cls.action}>
            <Icon className={cls.icon} icon="ic:baseline-share" />
            <span>Share</span>
          </div>
          <div className={cls.action}>
            <Icon
              className={cls.icon}
              icon="material-symbols:compare-arrows-rounded"
            />
            <span>Compare</span>
          </div>
          <div className={cls.action}>
            <Icon className={cls.icon} icon="icon-park-outline:like" />
            <span>Like</span>
          </div>
        </div>
      </div>
    </div>
  );
}


