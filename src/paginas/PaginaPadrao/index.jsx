import { Outlet } from "react-router-dom";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import styled from "styled-components";
import EstilosGlobais from "../../componentes/EstilosGlobais";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MenuHamburguer from "../../componentes/MenuHamburguer";

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

const FundoEstilizado = styled.div``;

export default function PaginaPadrao() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    return (
        <>
            <MenuHamburguer
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
            <ScrollToTopOnMount />
            <EstilosGlobais />
            <FundoEstilizado>
                <Cabecalho setMenuIsVisible={setMenuIsVisible} />
            </FundoEstilizado>
            <Outlet />
            <Rodape />
        </>
    );
}
