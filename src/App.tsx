import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { brightTheme } from "./theme";
import ToDoList from "./components/ToDoList";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&family=Noto+Serif+Khojki:wght@600&display=swap');
html, body, div, span, applet, object, iframe,
 p, blockquote, pre,
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
*{
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color:inherit
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button{

	cursor: pointer;
}




body{
	font-family: 'Noto Sans KR', sans-serif;
font-family: 'Noto Serif Khojki', serif;
  background-color: ${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor}
}
`;

function App() {
  return (
    <>
      <ThemeProvider theme={brightTheme}>
        <GlobalStyle />
        <ToDoList />
      </ThemeProvider>
    </>
  );
}

export default App;