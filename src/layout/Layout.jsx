import { Outlet } from "react-router-dom";
import Navbar from "../Components/Layout/Navbar/Navbar";

import SideNav from "../Components/Layout/SideNav/SideNav";
import { useState } from "react";

export default function Layout() {
  const [active, setActive] = useState(false);

  const handleclose = () => {
    setActive(false);
  };

  const handleOpen = () => {
    setActive(true);
  };

  return (
    <>
      <Navbar handleOpen={handleOpen} />
      <SideNav active={active} handleclose={handleclose} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
