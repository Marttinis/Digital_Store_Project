import 'bootstrap/dist/css/bootstrap.min.css';


const CircleOption = () => {
    return (
        <div className="container my-5" style={{backgroundColor:'#F5F5F5'}}>
            <div className="row text-center">
                {/* <!-- Item 1 --> */}
                <div className="col">
                    <div className="icon-circle">
                        <img src="src\images\tshirt-_1_.svg" alt="Camisetas" className="img-fluid"/>
                    </div>
                    <p className="mt-2">Camisetas</p>
                </div>

                {/* <!-- Item 2 --> */}
                <div className="col">
                    <div className="icon-circle">
                        <img src="src\images\calca.svg" alt="Calças" className="img-fluid"/>
                    </div>
                    <p className="mt-2">Calças</p>
                </div>

                {/* <!-- Item 3 --> */}
                <div className="col">
                    <div className="icon-circle">
                        <img src="src\images\calca.svg" alt="Bonés" className="img-fluid"/>
                    </div>
                    <p className="mt-2">Bonés</p>
                </div>

                {/* <!-- Item 4 --> */}
                <div className="col">
                    <div className="icon-circle">
                        <img src="src\images\headphone.svg" alt="Headphones" className="img-fluid"/>
                    </div>
                    <p className="mt-2">Headphones</p>
                </div>

                {/* <!-- Item 5 --> */}
                <div className="col">
                    <div className="icon-circle">
                        <img src="src\images\tenis.svg" alt="Tênis" className="img-fluid"/>
                    </div>
                    <p className="mt-2">Tênis</p>
                </div>
            </div>
        </div>

    );
}

export default CircleOption;