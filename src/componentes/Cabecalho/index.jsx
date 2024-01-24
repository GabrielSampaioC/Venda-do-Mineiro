import styled from "styled-components"

const CabecalhoEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: rgb(169, 199, 99);
    padding: 1em;
    max-width: 1500px;
    margin: auto;
    align-items: center;
`;
const ListaEstilizada = styled.nav`
    display: flex;
    gap: 20px;
    list-style: none;
`
const ItemEstilizado = styled.a`
    font-size: 16px;
    color: brown;
    font-weight: bold;
    text-decoration: none;
`

export default function Banner(){
    return(
        <CabecalhoEstilizado>
            <img src="./public/imagens/logo.svg" alt="logo-site" width="50px"/>
            <nav>
                <ListaEstilizada>
                    <li>
                        <ItemEstilizado href="">Início</ItemEstilizado>
                    </li>
                    <li>
                        <ItemEstilizado href="">Sobre</ItemEstilizado>
                    </li>
                    <li>
                        <ItemEstilizado href="">Produtos</ItemEstilizado>
                    </li>
                    <li>
                        <ItemEstilizado href="">Contatos</ItemEstilizado>
                    </li>
                </ListaEstilizada>
            </nav>
        </CabecalhoEstilizado>
    )
}