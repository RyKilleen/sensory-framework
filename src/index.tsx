import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";
import { Global } from "@emotion/react";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
      <Global
        styles={{
          body: {
            background: "#3A474F",
            color: "white",
            fontFamily: "Roboto, Arial, sans-serif"
          },
          h1: {
            marginBottom: 0
          },
          "[type=checkbox]": {
            height: "20px",
            width: "20px"
          },
          a: {
            color: "white",
            "&:visited": {
              color: "#c9c9c9"
            }
          }
        }}
      />
    </StyledEngineProvider>
  </React.StrictMode>
);
