import './ProductManager.css'

function ProductManager(){
    
    return(
        <>
        <div>
            <h1>Nuestros Productos</h1>
            <section>
            <div className="container text-center">
                <div className="row">
                    <div className="col ziseProds">
                        <img alt="Medialunas" src="https://imagenes.elpais.com/resizer/v2/INZ56BGP3JD5RAO6LYSJHEUFYI.jpg?auth=e2da655500aeed1486f1da59759adcdd29baea285f60b17c1597f2355dd037e9&width=1200" />
                        <p>Facturas</p>
                    </div>
                    <div className="col ziseProds">
                        Column
                    </div>
                    <div className="col ziseProds">
                        Column
                    </div>
                </div>
                </div>
            </section>
        </div>
        </>
)
}
export default ProductManager