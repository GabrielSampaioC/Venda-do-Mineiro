import styled from "styled-components"
import Card from "../../componentes/Card"
import { Link } from "react-router-dom"

export default function Cardapio(){

    const CardapioContainer = styled.section`
        
    `
    const BotaoVoltar = styled.button`
    `

    return(
        <>
        <CardapioContainer>
            <h1>funcionou</h1>
            <BotaoVoltar><Link to="/">Voltar</Link></BotaoVoltar>
            <Card/>
        </CardapioContainer>
        </>
    )
}