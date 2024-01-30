import styled from "styled-components"

const CabecalhoEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: rgb(169, 199, 99);
    padding: 1em;
    align-items: center;
    z-index: 1;
`;
const ListaEstilizada = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
`
const ItemEstilizado = styled.a`
    font-size: 18px;
    font-weight: 600;
    color: black;
    font-weight: bold;
    text-decoration: none;

`;
const ListaItem = styled.li`
    margin: 10px;
`

const BotaoEstilizado = styled.button`
    background-color: #fff200;
    border-radius: 15px;
    padding: 10px;
    border: transparent;

    & :hover {
        cursor: pointer;
    }

`

export default function Banner(){
    return(
        <CabecalhoEstilizado>
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
                        <BotaoEstilizado> <ItemEstilizado>Contatos</ItemEstilizado> </BotaoEstilizado>
                    </ListaItem>
                </ListaEstilizada>
            </nav>
        </CabecalhoEstilizado>
    )
}