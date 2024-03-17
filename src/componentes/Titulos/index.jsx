import styled from "styled-components";

const TituloEstilizado = styled.h1`
    font-size: 3.75rem;
    line-height: 1;
    margin: 0;
    font-weight: bold;
    color: var(--marrom);
    margin-top: 15px;

    @media (max-width:768px){
        text-align: center;
    }  
`
export default function Titulos({children}){
    return(
        <TituloEstilizado>{children}</TituloEstilizado>
    )
};