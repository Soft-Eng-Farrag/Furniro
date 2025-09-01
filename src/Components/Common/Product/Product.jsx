/* eslint-disable react/prop-types */
import { useState } from "react";
import cls from "./product.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";

export default function Product({ product }) {
  const [isLiked, setIsLiked] = useState(false);
  const [wishlistId, setWishlistId] = useState(null);

  const { title, image, description, newPrice, oldPrice, discount } = product;

  const handleAddToWishlist = async () => {
    console.log(product._id);

    setIsLiked(true);
    try {
      const response = await axios.post(
        "https://furniro-backend-production-1e15.up.railway.app/wishlist",
        {
          title: title,
          price: newPrice,
          image: image,
          description: description,
        }
      );

      console.log("تمت الإضافة:", response.data);
      setWishlistId(response.data._id);
    } catch (error) {
      console.error("حصل خطأ:", error);
    }
  };

  const handleRemoveFromWishlist = async () => {
    setIsLiked(false);
    try {
      const response = await axios.delete(
        `https://furniro-backend-production-1e15.up.railway.app/wishlist/${wishlistId}`
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
