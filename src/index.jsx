import React from "react";
import ReactDOM from "react-dom/client";
import App from "page/app/index";
import GlobalStyle from "styles/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
