import styled from "styled-components"
import Titulos from "../Titulos"
import Textos from "../Textos"
import Tags from "./Tags"
import Galeria from "../Galeria"

const ContainerProdutos = styled.section`
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export default function Produtos() {
    return (
        <ContainerProdutos>
            <Titulos>
                Produtos
            </Titulos>
            <Textos>
                Venha descobrir a magia além dos nossos derivados de tradição mineira, explore a variedade e o sabor único de todos os nossos produtos.
            </Textos>
            <Tags />
            <Galeria/>
        </ContainerProdutos>
    )
}