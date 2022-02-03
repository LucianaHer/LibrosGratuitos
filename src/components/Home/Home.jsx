import React, { lazy, Suspense } from "react";
import "./Home.css";
import Menu from "../Menu/Menu";

import Spinner from "../Spinner/Spinner.js";
const List = lazy(() => import("../List/List"));

function Home() {
  return (
    <div className="home">
      <Menu />
      <Suspense fallback={<Spinner />}>
        <List />
        {/* <footer>Hola</footer> */}
      </Suspense>
    </div>
  );
}

export default Home;
