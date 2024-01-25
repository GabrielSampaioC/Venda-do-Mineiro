import styled from "styled-components"

const CabecalhoEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: rgb(169, 199, 99);
    padding: 1em;
    align-items: center;
`;
const ListaEstilizada = styled.ul`
    display: flex;
    list-style: none;
`
const ItemEstilizado = styled.a`
    font-size: 18px;
    font-weight: 600;
    color: black;
    font-weight: bold;
    text-decoration: none;
`
const ListaItem = styled.li`
    margin: 10px;
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
                        <ItemEstilizado href="">Sobre</ItemEstilizado>
                    </ListaItem>
                    <ListaItem>
                        <ItemEstilizado href="">Produtos</ItemEstilizado>
                    </ListaItem>
                    <ListaItem>
                        <ItemEstilizado href="">Contatos</ItemEstilizado>
                    </ListaItem>
                </ListaEstilizada>
            </nav>
        </CabecalhoEstilizado>
    )
}