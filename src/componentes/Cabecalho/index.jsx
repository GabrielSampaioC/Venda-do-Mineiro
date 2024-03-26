import styled from "styled-components"
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const CabecalhoEstilizado = styled.header`
    background-color: var(--marrom);
    z-index: 1;
    padding: 15px 0;
    position: fixed;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
`;
const CabecalhoWrapper = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`
const ListaEstilizada = styled.nav`
    display: flex;
    list-style: none;
    align-items: center;
    margin: 0;
    padding: 0;
    gap: 15px;

    @media (max-width:768px){
        display: none;
    }   
`
const ItemEstilizado = styled(Link)`
    font-size: 18px;
    font-weight: 400;
    color: var(--amarelo-claro);
    text-decoration: none;
    margin: 0;

`;
const ListaItem = styled.li`
    margin: 0 10px;
`

const BotaoEstilizado = styled(Link)`
    background-color: var(--amarelo-claro);
    border-radius: 40px;
    padding: 12px 22px;
    border: transparent;
    color: var(--marrom);
    font-weight: bold;
    text-decoration: none;

    & :hover {
        cursor: pointer;
    }

`
const IconeEstilizado = styled(MdMenu)`
    color: var(--amarelo-claro);
    font-size: 2em;

    @media  (min-width: 768px) {
        display: none;


    }

`
export default function Cabecalho({setMenuIsVisible}){

    return(

        <CabecalhoEstilizado>
            <CabecalhoWrapper>
            <img src="./imagens/galeria/logo.png" alt="logo-site" width="50px"/>
            <IconeEstilizado onClick={() => setMenuIsVisible(true)} />
                <ListaEstilizada>
                    <ListaItem>
                        <ItemEstilizado to="/#Inicio">Início</ItemEstilizado>
                    </ListaItem>
                    <ListaItem>
                        <ItemEstilizado to="/#Sobre">Sobre</ItemEstilizado>
                    </ListaItem>
                    <ListaItem>
                        <ItemEstilizado to="/#produtos">Produtos</ItemEstilizado>
                    </ListaItem>
                    <ListaItem>
                        <BotaoEstilizado to="#contato"> Contato </BotaoEstilizado>
                    </ListaItem>
                </ListaEstilizada>
            </CabecalhoWrapper>
        </CabecalhoEstilizado>
    )
}