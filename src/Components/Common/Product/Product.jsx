/* eslint-disable react/prop-types */
import { useState } from "react";
import cls from "./product.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";

export default function Product({ product }) {
  const {
    title,
    image,
    description,
    newPrice,
    oldPrice,
    liked,
    discount,
    _id,
  } = product;

  const [isLiked, setIsliked] = useState(liked);

  const handleAddToWishlist = async () => {
    setIsliked(true);
    try {
      const response = await axios.put(
        `https://furniro-backend-production-1e15.up.railway.app/products/${_id}/liked`,
        { liked: true } // 👈 true أو false
      );

      console.log("تم تحديث اللايك:", response.data);
    } catch (error) {
      console.error("حصل خطأ أثناء التحديث:", error);
    }

    try {
      const response = await axios.post(
        "https://furniro-backend-production-1e15.up.railway.app/productswishlist",
        {
          prodId: _id,
          title: title,
          image: image,
          price: newPrice,
          description: description,
        }
      );

      console.log("تمت الإضافة:", response.data);
    } catch (error) {
      console.error("حصل خطأ:", error);
    }
  };

  const handleRemoveFromWishlist = async () => {
    setIsliked(false);
    try {
      const response = await axios.put(
        `https://furniro-backend-production-1e15.up.railway.app/products/${_id}/liked`,
        { liked: false } // 👈 true أو false
      );

      console.log("تم تحديث اللايك:", response.data);
    } catch (error) {
      console.error("حصل خطأ أثناء التحديث:", error);
    }

    try {
      const response = await axios.delete(
        `https://furniro-backend-production-1e15.up.railway.app/productswishlist/${_id}`
      );
      console.log("تم الحذف:", response.data);

      // تحديث الواجهة بعد الحذف
    } catch (error) {
      console.error("حصل خطأ أثناء الحذف:", error);
    }
  };

  const likeButton = (
    <div onClick={handleAddToWishlist} className={cls.action}>
      <Icon className={cls.icon} icon="icon-park-outline:like" />
      <span>Like</span>
    </div>
  );
  const dislikeButton = (
    <div onClick={handleRemoveFromWishlist} className={cls.action}>
      <Icon className={cls.icon} icon="icon-park-outline:like" />
      <span>UnLike</span>
    </div>
  );

  return (
    <div className={cls.wrapper}>
      <div>
        <Icon
          className={`${cls.likeIcon} ${isLiked ? cls.liked : ""}`}
          icon="icon-park-solid:like"
        />
      </div>
      <div className={`${cls.state} ${discount ? cls.sale : cls.new}`}>
        {discount ? `-${discount}%` : "New"}
      </div>
      <div className={cls.imageContainer}>
        <img className={cls.image} src={`/${image}`} alt="product-image" />
      </div>
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
          {!isLiked ? likeButton : dislikeButton}
        </div>
      </div>
    </div>
  );
}
