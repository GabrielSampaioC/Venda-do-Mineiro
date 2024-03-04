import styled from "styled-components";

const TituloEstilizado = styled.h1`
    font-size: 3.75rem;
    line-height: 1;
    margin: 10px 0;
    font-weight: bold;
    color: var(--marrom);
`
export default function Titulos({children}){
    return(
        <TituloEstilizado>{children}</TituloEstilizado>
    )
};