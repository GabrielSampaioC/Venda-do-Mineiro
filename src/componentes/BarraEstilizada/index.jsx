import styled from "styled-components"

export default function BordaEstilizada(){

    const BarraEstilizada = styled.hr`
	width: 8%;
	text-align: left;
	margin: 0 auto 0 0;
    height: 5px;
    background-color: var(--marrom);
    border-radius: 20px;
    margin: 10px 0;
`
    return(
        <>
        <BarraEstilizada/>
        </>
    )
}