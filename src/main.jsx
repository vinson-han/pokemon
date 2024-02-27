import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { SWRConfig } from "swr";
import App from "./App.jsx";

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />
    </SWRConfig>
  </React.StrictMode>
);
