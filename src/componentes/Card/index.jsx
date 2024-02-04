import cardapio from "../../paginas/Cardapio/cardapio.json";

export default function Card() {
    return (
        <>
            {cardapio.subcategoria.map(subcategoria => (
                <div key={subcategoria.titulo}>
                    <h2>{subcategoria.titulo}</h2>
                    {subcategoria.itens.map(item => (
                        <ul key={item.id}>
                            <li>{item.nome}</li>
                        </ul>
                    ))}
                </div>
            ))}
        </>
    );
}
