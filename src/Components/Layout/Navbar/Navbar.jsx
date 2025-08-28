/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import brandLogo from "../../../../public/title-icon.webp";
import cls from "./nav.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import "../../../styles/app.scss";
import { useEffect, useState } from "react";

export default function Navbar({ handleOpen }) {
  const [isInTop, setIsInTop] = useState(true);
  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) setIsInTop(false);
      else setIsInTop(true);
    });
  }, []);

 

  return (
    <nav className={`${cls.wrapper} ${isInTop ? "" : cls.scrolled}`}>
      <div className="container">
        <div className={cls.content}>
          <Link className={cls.brand}>
            <img className={cls.brandLogo} src={brandLogo} alt="furniro logo" />
            <h1 className={cls.brandName}>furniro</h1>
          </Link>
          <div className={cls.links}>
            <NavLink className={cls.link} to="/">Home</NavLink>
            <NavLink className={cls.link} to="/shop">Shop</NavLink>
            <NavLink className={cls.link} to="/about">About</NavLink>
            <NavLink className={cls.link} to="/contact">Contact</NavLink>
          </div>
          <div className={cls.icons}>
            <div onClick={handleOpen} className={`${cls.burgerIcon}`}>
              <Icon icon="stash:burger-classic" />
            </div>
            <div
              data-tooltip="Contact"
              className={`${cls.icon} ${cls.contactIcon}`}
            >
              <Icon icon="arcticons:fossify-contacts"  />
            </div>
            <div data-tooltip="Search" className={cls.icon}>
              <Icon icon="iconamoon:search-thin" />
            </div>
            <div data-tooltip="Liked" className={cls.icon}>
              <Icon icon="icon-park-outline:like" />
            </div>
            <div data-tooltip="Cart" className={cls.icon}>
              <Icon icon="mdi:cart-outline" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
