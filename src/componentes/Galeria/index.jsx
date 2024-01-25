import styled from "styled-components";

import fotos from "../../fotos.json"

const CardContainer = styled.div`
    background-color: #ffee00;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    flex-wrap: wrap;
`
const CardEstilizado = styled.div`
    display: flex;
`

const Galeria = () => {

    return (
        <>
            <CardEstilizado>
                {fotos.map(foto =>
                    <CardContainer key={foto.id}>
                        <img src={foto.path} width="100px" />
                        <h2>{foto.titulo}</h2>
                    </CardContainer>)}
            </CardEstilizado>
        </>
    )
}

export default Galeria;