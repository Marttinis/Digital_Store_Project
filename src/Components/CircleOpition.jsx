import 'bootstrap/dist/css/bootstrap.min.css';


const CircleOption = () => {
    return (
        <div class="container my-5">
            <div class="row text-center">
                {/* <!-- Item 1 --> */}
                <div class="col">
                    <div class="icon-circle">
                        <img src="src\images\tshirt-_1_.svg" alt="Camisetas" class="img-fluid"/>
                    </div>
                    <p class="mt-2">Camisetas</p>
                </div>

                {/* <!-- Item 2 --> */}
                <div class="col">
                    <div class="icon-circle">
                        <img src="src\images\calca.svg" alt="Calças" class="img-fluid"/>
                    </div>
                    <p class="mt-2">Calças</p>
                </div>

                {/* <!-- Item 3 --> */}
                <div class="col">
                    <div class="icon-circle">
                        <img src="src\images\calca.svg" alt="Bonés" class="img-fluid"/>
                    </div>
                    <p class="mt-2">Bonés</p>
                </div>

                {/* <!-- Item 4 --> */}
                <div class="col">
                    <div class="icon-circle">
                        <img src="src\images\headphone.svg" alt="Headphones" class="img-fluid"/>
                    </div>
                    <p class="mt-2">Headphones</p>
                </div>

                {/* <!-- Item 5 --> */}
                <div class="col">
                    <div class="icon-circle">
                        <img src="src\images\tenis.svg" alt="Tênis" class="img-fluid"/>
                    </div>
                    <p class="mt-2">Tênis</p>
                </div>
            </div>
        </div>

    );
}

export default CircleOption;