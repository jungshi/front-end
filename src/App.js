import React from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { createGlobalStyle } from "styled-components";
import Main from "./pages/Main";
import Room from "./pages/Room";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

axios.defaults.withCredentials = true;

function App() {
    return ( <
        >
        <
        RecoilRoot >
        <
        GlobalStyle / >
        <
        Routes >
        <
        Route path = "/"
        exact element = { < Main / > }
        />{" "} <
        Route path = "/:roomId"
        element = { < Room / > }
        />{" "} < /
        Routes > { " " } <
        /RecoilRoot> < / >
    );
}

export default App;

const GlobalStyle = createGlobalStyle `
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;