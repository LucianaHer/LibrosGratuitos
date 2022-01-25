import React, { lazy, Suspense } from "react";
import "./Home.css";
import Menu from "../Menu/Menu";
import MenuCategories from "../MenuCategories/MenuCategories";
import Spinner from "../Spinner/Spinner.js";
const List = lazy(() => import("../List/List"));

function Home() {
  return (
    <div >
      <Menu />
      <Suspense fallback={<Spinner />}>
        <div className="space">
          <MenuCategories />
          <List className="lista" />
        </div>
      </Suspense>
    </div>
  );
}

export default Home;
