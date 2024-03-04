import styled from "styled-components"

const CabecalhoEstilizado = styled.header`
    background-color: var(--marrom);
    z-index: 1;
    padding: 10px 0;
    position: fixed;
    width: 100%;
`;
const CabecalhoWrapper = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ListaEstilizada = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    margin: 0;
    padding: 0;
    gap: 15px;
`
const ItemEstilizado = styled.a`
    font-size: 18px;
    font-weight: 400;
    color: var(--amarelo-claro);
    text-decoration: none;
    margin: 0;

`;
const ListaItem = styled.li`
    margin: 0 10px;
`

const BotaoEstilizado = styled.button`
    background-color: var(--amarelo-claro);
    border-radius: 40px;
    padding: 12px 22px;
    border: transparent;
    color: var(--marrom);
    font-weight: bold;

    & :hover {
        cursor: pointer;
    }

`

export default function Banner(){
    return(
        <CabecalhoEstilizado>
            <CabecalhoWrapper>
            <img src="./public/imagens/logo.svg" alt="logo-site" width="50px"/>
            <nav>
                <ListaEstilizada>
                    <ListaItem>
                        <ItemEstilizado href="">Início</ItemEstilizado>
                    </ListaItem>
                    <ListaItem>
                        <ItemEstilizado href="#entregas">Entregas</ItemEstilizado>
                    </ListaItem>
                    <ListaItem>
                        <ItemEstilizado href="#produtos">Produtos</ItemEstilizado>
                    </ListaItem>
                    <ListaItem>
                        <BotaoEstilizado> Contato </BotaoEstilizado>
                    </ListaItem>
                </ListaEstilizada>
            </nav>
            </CabecalhoWrapper>
        </CabecalhoEstilizado>
    )
}