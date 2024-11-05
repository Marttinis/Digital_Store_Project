import '../css/productListingPage.css';

import React, { useState } from 'react';

function ProductFilter() {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedGenders, setSelectedGenders] = useState([]);
    const [selectedCondition, setSelectedCondition] = useState("Novo");

    const handleCheckboxChange = (setStateFunc, selectedArray, value) => {
        if (selectedArray.includes(value)) {
            setStateFunc(selectedArray.filter(item => item !== value));
        } else {
            setStateFunc([...selectedArray, value]);
        }
    };

    return (
        <div style={{ width: '200px', padding: '10px', border: '1px solid #e0e0e0', borderRadius: '5px' }}>
            <h3>Filtrar por</h3>

            {/* Marca */}
            <div>
                <h4>Marca</h4>
                {["Adiddas", "Calenciaga", "K-Swiss", "Nike", "Puma"].map((brand) => (
                    <div key={brand}>
                        <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleCheckboxChange(setSelectedBrands, selectedBrands, brand)}
                        />
                        <label>{brand}</label>
                    </div>
                ))}
            </div>

            {/* Categoria */}
            <div>
                <h4>Categoria</h4>
                {["Esporte e lazer", "Casual", "Utilitário", "Corrida"].map((category) => (
                    <div key={category}>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCheckboxChange(setSelectedCategories, selectedCategories, category)}
                        />
                        <label>{category}</label>
                    </div>
                ))}
            </div>

            {/* Gênero */}
            <div>
                <h4>Gênero</h4>
                {["Masculino", "Feminino", "Unisex"].map((gender) => (
                    <div key={gender}>
                        <input
                            type="checkbox"
                            checked={selectedGenders.includes(gender)}
                            onChange={() => handleCheckboxChange(setSelectedGenders, selectedGenders, gender)}
                        />
                        <label>{gender}</label>
                    </div>
                ))}
            </div>

            {/* Estado */}
            <div>
                <h4>Estado</h4>
                {["Novo", "Usado"].map((condition) => (
                    <div key={condition}>
                        <input
                            type="radio"
                            name="condition"
                            value={condition}
                            checked={selectedCondition === condition}
                            onChange={() => setSelectedCondition(condition)}
                        />
                        <label>{condition}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductFilter;
