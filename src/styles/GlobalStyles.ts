import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

html {
	--red: #ff0000;
	--blue: #61A7DB;
	--lightBlue: #B6E2F6 ;
	--lighterGrey: #DCE2E5;

	/* --maxwidth: 1000px; */
	--bs: 0 12px 24px 0 rgba(0,0,0,0.09);
	box-sizing: border-box;
	/* font-size: 62.5%; */
}

*, *:before, *:after {
	box-sizing: inherit;
}

body {
	margin: 0;
    padding:0;
	/* background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%); */
	/* background: url('/miika-laaksonen-unsplash.jpg') no-repeat 12% 70%; */
	background-color: #ff9704;
	background-repeat: no-repeat;
	height: 100vh;
	/* overflow-y: hidden; */




    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

Link {
	text-decoration: none;
}



`;
