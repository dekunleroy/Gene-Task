import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  :root{
    --color-brand-1: #65ABEF;
    --color-brand-2: #2D2D2D;
    --color-brand-3: #3D3D3D;
    --color-brand-4: #3d3d3d;    
    --border-radius: 0.4em;
    --font-brand-1: 'Open Sans', Regular;
    --font-brand-2: 'Sans Serif Plus 7', Regular;
  }
  body{
    margin: 0;
    font-family: 'Open Sans', Regular;
    font-size: 15px;
  }
  a {
    text-decoration: none;
  }
  img{
    width: 100%;
  }
  i{
    color: #eee;
    background: --color-brand-1;
  }
`;

export default GlobalStyle;
