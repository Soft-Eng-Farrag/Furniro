/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import cls from "./sidenav.module.scss";
import logo from "/title-icon.webp";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function SideNav({ active, handleclose }) {
  const asideRef = useRef(null);

  useEffect(() => {
    function handleCloseOutside(event) {
      if (
        active &&
        asideRef.current &&
        !asideRef.current.contains(event.target)
      ) {
        handleclose();
      }
    }
    document.addEventListener("mousedown", handleCloseOutside);

    return () => {
      document.removeEventListener("mousedown", handleCloseOutside);
    };
  }, [active, handleclose]);

  return (
    <aside
      ref={asideRef}
      className={`${cls.wrapper} ${active ? cls.active : ""}`}
    >
      <div className={cls.brand}>
        <img className={logo} src={logo} alt="furniro-logo" />
        <p className={cls.brandName}>Furniro</p>
      </div>
      <div className={cls.links}>
        <Link className={cls.link}>Home</Link>
        <Link className={cls.link}>Shop</Link>
        <Link className={cls.link}>About</Link>
        <Link className={cls.link}>Contact</Link>
      </div>
      <div className={cls.icons}>
        <div
          data-tooltip="Contact"
          className={`${cls.icon} ${cls.contactIcon}`}
        >
          <Icon icon="arcticons:fossify-contacts" />
        </div>
        <div data-tooltip="Search" className={cls.icon}>
          <Icon icon="iconamoon:search-thin" />
        </div>
        <div data-tooltip="Like" className={cls.icon}>
          <Icon icon="icon-park-outline:like" />
        </div>
        <div data-tooltip="Cart" className={cls.icon}>
          <Icon icon="mdi:cart-outline" />
        </div>
      </div>
      <div onClick={handleclose}>
        <Icon className={cls.closeIcon} icon="gg:close-r" />
      </div>
    </aside>
  );
}
