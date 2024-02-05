import styled from "styled-components"
import Textos from "../Textos"


const RodapeEstilizado = styled.footer`
background: var(--amarelo);
display: flex;
justify-content: center;
`

export default function Rodape() {



    return (
        <>
            <RodapeEstilizado>
                <Textos>all rights reserved</Textos>
            </RodapeEstilizado>
        </>
    )
}
