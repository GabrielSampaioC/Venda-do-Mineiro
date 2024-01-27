import styled from "styled-components";

import fotos from "../../fotos.json"

const CardContainer = styled.div`
    background-color: #fff700;
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
        box-sizing: border-box;
        height: 350px;
    }
    &:hover img{
        opacity: 0.7;
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
    padding: 2em;
    gap: 30px;
    box-sizing: border-box;
`

const Galeria = () => {

    return (
        <>
            <CardEstilizado>
                {fotos.map(foto =>
                    <CardContainer key={foto.id}>
                        <img src={foto.path} />
                        <h2>{foto.titulo}</h2>
                    </CardContainer>)}
            </CardEstilizado>
        </>
    )
}

export default Galeria;