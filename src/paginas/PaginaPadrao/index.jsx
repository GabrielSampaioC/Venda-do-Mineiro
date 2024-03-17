import { Outlet } from "react-router-dom";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import styled from "styled-components";
import EstilosGlobais from "../../componentes/EstilosGlobais";

const FundoEstilizado = styled.div`
    
`

export default function PaginaPadrao() {
    return (
        <>
            <EstilosGlobais />
            <FundoEstilizado>
                <Cabecalho />
            </FundoEstilizado>
            <Outlet />
            <Rodape />
        </>
    );
}
