import { css } from "styled-components";

export const mobile =(props) => {
    return css`
        @media only screen and (max-width:380px){
            ${props};
        }
    `
}

export const tabletLarge =(props) => {
    return css`
        @media only screen and (max-width:912px){
            ${props};
        }
    `
}

export const tablet =(props) => {
    return css`
        @media only screen and (max-width:796px){
            ${props};
        }
    `
}
