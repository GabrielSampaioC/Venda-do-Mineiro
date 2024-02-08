import React from 'react';
import styled from 'styled-components';
import Tags from "../Produtos/Tags";
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
    background-color: var(--amarelo);
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    flex-wrap: wrap;
    border-radius:20px;
    box-sizing: border-box;
    overflow:hidden;

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
        margin-left: 10px;
        font-weight: 600;
        font-size: 26px;
    }
`
const CardEstilizado = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    box-sizing: border-box;
`

const Galeria = ({ fotos = [], setTag }) => {

    return (
        <>
            <Tags setTag={setTag} />
            <CardEstilizado>
                {fotos.map(foto =>
                    <CardContainer key={foto.id}>
                        <Link to={`/${foto.categoria}`}>
                            <img src={foto.path} alt={foto.titulo} />
                            <h2>{foto.titulo}</h2>
                        </Link>

                    </CardContainer>
                )}
            </CardEstilizado>
        </>
    )
}

export default Galeria;
