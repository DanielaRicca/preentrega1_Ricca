import Carrousel from "./Carrousel";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <Carrousel />
                    <h1 className="display-3">{greeting}</h1>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;