import { Outlet } from "react-router-dom";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import styled from "styled-components";
import EstilosGlobais from "../../componentes/EstilosGlobais";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopOnMount() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return null;
}

const FundoEstilizado = styled.div`
    
`

export default function PaginaPadrao() {
    return (
        <>
            <ScrollToTopOnMount/>
            <EstilosGlobais />
            <FundoEstilizado>
                <Cabecalho />
            </FundoEstilizado>
            <Outlet />
            <Rodape />
        </>
    );
}
