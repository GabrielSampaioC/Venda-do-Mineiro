import styled from "styled-components"

export default function Rodape(){

const RodapeEstilizado = styled.footer`
        background: var(--amarelo);
        display: flex;
        justify-content: center;
    `

    return(
        <RodapeEstilizado>
            all rights reserved
        </RodapeEstilizado>
    )
}
