// server/server.js
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

const app = express();

const jsxToHtml = (component) => {
  return ReactDOMServer.renderToStaticMarkup(
      component,
      {
        bootstrapScripts: ["/main.js"],
      }
  );
}

console.log(jsxToHtml(<>
    <App />
</>));

app.get("/*", (req, res) => {
  const html = jsxToHtml(<>
    <App />
  </>);
  res.setHeader("content-type", "text/html")
  res.send(html);
});

app.listen(3002, () => {
  console.log("App is running on http://localhost:3002");
});
