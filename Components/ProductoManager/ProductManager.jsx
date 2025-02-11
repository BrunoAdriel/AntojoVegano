import './ProductManager.css'

function ProductManager(){
    
    //Funcion para scrolear desde las secciones hacia los productos.
    const handleScroll = (categoryID) => {
        const section = document.getElementById(`category-${categoryID}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return(
        <>
        <div>
            <h1 className='container'>Nuestros Productos</h1>
            <section>
            <div className="container text-center">
                <div className="row">
                        <div className='containerZise' onClick={() => handleScroll(1)} >
                            <div className="col ziseProds">
                                <img alt="Medialunas" src="https://imagenes.elpais.com/resizer/v2/INZ56BGP3JD5RAO6LYSJHEUFYI.jpg?auth=e2da655500aeed1486f1da59759adcdd29baea285f60b17c1597f2355dd037e9&width=1200" />
                            </div>
                            <section className='fontManager'>
                                <p>Facturas</p>
                            </section>
                        </div>
                    <div className='containerZise' onClick={() => handleScroll(2)} >
                        <div className="col ziseProds">
                            <img alt="Budines" src="https://cuk-it.com/wp-content/uploads/2021/09/budin-chocolate.webp" />
                        </div>
                        <section className='fontManager'>
                            <p>Budines</p>
                        </section>
                    </div>
                    <div className='containerZise' onClick={() => handleScroll(3)} >
                        <div className="col ziseProds">
                            <img alt="Salados" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3ulHXSeoL16TfAgLaU7iRNEyTOcTQ74N8A&s" />
                        </div>
                        <section className='fontManager'>
                            <p>Salado</p>
                        </section>
                    </div>
                </div>
                </div>
            </section>
        </div>
        </>
)
}
export default ProductManager