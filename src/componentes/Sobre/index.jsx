import styled from "styled-components"
import Titulos from "../Titulos"
import Textos from "../Textos"
import BordaEstilizada from "../BarraEstilizada"

const ContainerEstilizado = styled.section`
margin: 3em 0 2em 0;
padding: 1rem;

@media  (max-width: 768px) {
    padding: 1rem;
}
`

const ContainerBannerPrincipal = styled.div`
overflow: hidden;
border-radius: 20px;
`
const ImagemBanner = styled.img`
width: 100%;
max-height: 24rem;
overflow: hidden;
object-fit: cover;
transition: transform 0.2s ease-in-out;
@media  (max-width: 768px) {
    max-height: 7rem;
    margin: 1em 0;
    border-radius: 20px;
}
&:hover{
transform: scale(1.1);
}
`
const TextoEstilizado = styled.p`
    font-size: 20px;
    color: black;
    font-weight: 400;
    text-align: justify;
    margin: 2rem 0 0 0;
    text-decoration: none;
    line-height: 1.5rem;
`
export default function Sobre() {


    return (
        <>
            <ContainerEstilizado id="Sobre">
                <ContainerBannerPrincipal>
                    <ImagemBanner src="../imagens/galeria/sobreBanner.jpg" />
                </ContainerBannerPrincipal>

            <Titulos>Sobre nós</Titulos>
            <BordaEstilizada/>
            <TextoEstilizado>
                
                Há mais de duas décadas, temos o prazer de levar até você o verdadeiro sabor da tradição mineira.
                Somos uma empresa mineira de coração, mergulhada na rica herança culinária de nossa terra. Nosso compromisso é oferecer o melhor de Minas.
                <br/>
                <br/>
                Nossos produtos são mais do que alimentos, são uma experiência sensorial que conecta você às raízes de nossa cultura.
                <br/>
                <br/>
                Então, venha se juntar a nós nessa jornada deliciosa e descubra por que somos a escolha preferida dos que buscam o verdadeiro sabor de Minas. Prepare-se para uma aventura gastronômica única e inesquecível com a L.C Jorge Comércio de Alimentos!
            </TextoEstilizado>
            </ContainerEstilizado>
        </>
    )
}