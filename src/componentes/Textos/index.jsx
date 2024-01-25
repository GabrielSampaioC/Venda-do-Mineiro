import styled from "styled-components"

const TextoEstilizado = styled.p`
    font-size: 20px;
    color: black;
    font-weight: 600;
    text-align: left;
    margin:0;
`

export default function Textos({children}){
    return(
        <TextoEstilizado>{children}</TextoEstilizado>
    )
}