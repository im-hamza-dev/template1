import React from "react";
import Header from "../header/header";
import Footer from "../Footer/footer";
import "@fontsource/mulish/800.css"; // Defaults to weight 400.
import "@fontsource/mulish/700.css"; // Defaults to weight 400.
import "@fontsource/mulish/500.css"; // Defaults to weight 400.

import "./layout.scss";

const Layout = ({ children }) => (
  <>
    <Header  />
    <main className="layout__main">{children}</main>
    <Footer />
  </>
);

export default Layout;
