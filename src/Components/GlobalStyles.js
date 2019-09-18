import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Background from '../Images/Background.png';

const GlobalStyles = createGlobalStyle`
    ${reset};
    
    * {
        box-sizing: border-box;
        color: #333;
    }

    body {
        font-family: "Open Sans", "Apple SD Gothic Neo", "Nanum Gothic","나눔고딕","Malgun Gothic","맑은고딕","돋움","굴림","Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 14px;
        background-image: url(${Background});
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    
    button {
        border: none;
        &:focus {
             outline: none;
            border: none;
        }
    }

    input {
        border: none;
        background: none;
        background-color: transparent;
        box-shadow: none;
        &:focus {
            outline: none;
        }
    }
`;

export default GlobalStyles;
