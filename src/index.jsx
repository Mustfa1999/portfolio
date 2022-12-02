import React from "react";
import ReactDOM from "react-dom/client";
import App from "pages/app/index";
import GlobalStyle from "styles/global";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import reduxStore from "store/reduxStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={reduxStore}>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </Provider>
);
