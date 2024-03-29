import styled from "styled-components"
import Titulos from "../Titulos"
import Textos from "../Textos"
import BordaEstilizada from "../BarraEstilizada"

const ContainerProdutos = styled.section`
    padding: 2em 1em;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    @media (max-width:768px) {
        margin:0;
    }
`

export default function Produtos({children}) {
    return (
        <ContainerProdutos id="produtos">
            <div>
            <Titulos>
                Produtos
            </Titulos>
            <BordaEstilizada/>
            </div>
            <Textos>
                Venha descobrir a magia além dos nossos derivados de tradição mineira, explore a variedade e o sabor único de todos os nossos produtos.
            </Textos>
            {children}
        </ContainerProdutos>
    )
}