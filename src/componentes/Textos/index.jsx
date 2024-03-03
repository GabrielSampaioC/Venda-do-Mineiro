import styled from "styled-components"

const TextoEstilizado = styled.p`
    font-size: 20px;
    color: black;
    font-weight: 400;
    text-align: justify;
    margin:0;
    text-decoration: none;
    line-height: 1.5em;
`

export default function Textos({children}){
    return(
        <TextoEstilizado>{children}</TextoEstilizado>
    )
}