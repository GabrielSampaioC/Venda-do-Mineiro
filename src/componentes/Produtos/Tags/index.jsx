import React, { useState } from 'react';
import styled from 'styled-components';
import tags from './tags.json';

const BotaoTags = styled.button`
    border-radius: 20px;
    margin: 0 5px;
    padding: 10px 20px;
    border: 2px solid var(--amarelo);
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    background: ${(props) => (props.$ativo ? "var(--amarelo)" : '#ffffff')};
    color: ${(props)=> (props.$ativo ? "var(--marrom)" : "var(--amarelo)" )};
    transform: ${(props)=> (props.$ativo ? "scale(0.95)" : "scale(1)")}

`;

const BarraTags = styled.div`
    display: flex;
    margin: 1em 0;
`;

const Tags = ({ setTag }) => {

    const [botaoAtivo, setBotaoAtivo] = useState(0);
    const AlterarBotaoAtivo = (index) => {
        setBotaoAtivo(index === botaoAtivo ? index : index);
    };

    return (
        <BarraTags>
            {tags.map((tag, index) => (
                <BotaoTags key={tag.id}
                    onClick={() => {
                        setTag(tag.tag);
                        AlterarBotaoAtivo(index);
                    }}
                    $ativo={index === botaoAtivo}>
                    {tag.titulo}
                </BotaoTags>
            ))}
        </BarraTags>
    );
};

export default Tags;
