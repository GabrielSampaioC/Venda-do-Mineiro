import React from 'react';
import styled from 'styled-components';
import Tags from "../Produtos/Tags";
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";

const CardContainer = styled(Link)`
    position: relative;
    background-color: var(--marrom);
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    flex-wrap: wrap;
    border-radius:20px;
    box-sizing: border-box;
    overflow:hidden;
    text-decoration: none;

    & img{
        width:100%;
        height: 350px;
        object-fit: cover;
    }
    &:hover img{
        cursor: pointer;
    }
    & h2{
        text-align: left;
        margin-left: 15px;
        font-weight: 600;
        font-size: 2em;
        text-decoration: none;
        color: var(--amarelo-claro);
    }
`
const CardEstilizado = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    box-sizing: border-box;
`

const TextoEstilizado = styled(Link)`
    text-decoration: none;
    position: relative;
`
const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 99%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    display: flex;
    gap: 10px;

    ${CardContainer}:hover & {
        opacity: 1;
    }

    & a {
        color: var(--amarelo-claro);
        text-decoration: none;
        font-size: 1.2em;
        font-weight: bold;
    }
`

const Icone = styled(GoArrowRight)`
    color: var(--amarelo-claro);
    font-size: 24px;
    font-weight: bold;
`

const Galeria = ({ fotos = [], setTag }) => {
    return (
        <>
            <Tags setTag={setTag} />
            <CardEstilizado>
                {fotos.map(foto =>
                    <CardContainer  to={`/${foto.categoria}`} key={foto.id} >
                        <TextoEstilizado to={`/${foto.categoria}`}>
                            <img src={foto.path} alt={foto.titulo} />
                            <Overlay>
                                <a href="#">Visualizar produto</a>
                                <Icone />
                            </Overlay>
                        </TextoEstilizado>
                        <h2>{foto.titulo}</h2>
                    </CardContainer>
                )}
            </CardEstilizado>
        </>
    )
}

export default Galeria;
