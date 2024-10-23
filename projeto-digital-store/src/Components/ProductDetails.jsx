import '../css/style.css'

const ProdutoDetalhado = () => {
    return (
        <>
            <main style={{ backgroundColor: '#F5F5F5', height: 'auto', marginTop: '20px', paddingLeft: '100px' }}>
                <nav><ul style={{ listStyle: 'none', display: 'flex', gap: '8px' }}>
                    <li>Home / </li>
                    <li>  Produtos / </li>
                    <li>  Tênis / </li>
                    <li>  Nike / </li>
                    <li>  Tênis Nike Revolution 6 Next Nature Masculino</li>
                </ul></nav>
                <section className="painel-produtos" style={{ display: 'flex' }}>
                    <div className="tenis">
                        <div className="tenis-principal tenis-1" style={{ width: '700px', height: '471px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '30px' }}>
                            <img src="src\images\Vector 2.png" alt="Seta Esquerda" className="vector-1" style={{ width: '11px', height: '22px', marginLeft: '10px' }} />
                            <img src="src\images\tenis-details-big.png" alt="Tenis Modelo" style={{ width: '500px', height: '248px' }} />
                            <img src="src\images\Vector 1.png" alt="Seta Direita" className="vector-2" style={{ width: '11px', height: '22px', marginRight: '10px' }} />
                        </div>
                        <ul className="tipos-de-tenis" style={{ listStyle: 'none', display: 'flex', gap: '28px' }}>
                            <li><div className="tenis-1" style={{ marginTop: '20px', width: '118px', height: '50px', borderRadius: '4px' }}>
                                <img src="src\images\tenis-details-smart.png" alt="" style={{ marginTop: '6px', marginLeft: '15px' }} />
                            </div></li>
                            <li><div className="tenis-2" style={{ marginTop: '20px', width: '118px', height: '50px', borderRadius: '4px' }}>
                                <img src="src\images\tenis-details-smart.png" alt="" style={{ marginTop: '6px', marginLeft: '15px' }} />
                            </div></li>
                            <li><div className="tenis-3" style={{ marginTop: '20px', width: '118px', height: '50px' }}>
                                <img src="src\images\tenis-details-smart.png" alt="" style={{ marginTop: '6px', marginLeft: '15px' }} />
                            </div></li>
                            <li><div className="tenis-4" style={{ marginTop: '20px', width: '118px', height: '50px', borderRadius: '4px' }}>
                                <img src="src\images\tenis-details-smart.png" alt="" style={{ marginTop: '6px', marginLeft: '15px' }} />
                            </div></li>
                            <li><div className="tenis-5" style={{ marginTop: '20px', width: '118px', height: '50px', borderRadius: '4px' }}>
                                <img src="src\images\tenis-details-smart.png" alt="" style={{ marginTop: '6px', marginLeft: '15px' }} />
                            </div></li>
                        </ul>
                    </div>
                    <div className="informacoes-tenis" style={{ marginLeft: '40px' }}>
                        <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700', fontSize: '32px', width: '440px' }}>Tênis Nike Revolution 6 Next Nature Masculino</h3>
                        <span style={{ fontSize: '12px', fontFamily: 'Inter, sans-serif', fontWeight: '500', color: '#666666', marginTop: '10px' }}>Casual | Nike | REF:38416711s</span>
                        <div className="classificacao" style={{ marginTop: '10px' }}>
                            <img src="src\images\Stars.png" alt="Estrelas recebidas pelo produto" />
                            <img src="src\images\Group 1103.png" alt="Classificaçao do produto" />
                        </div>
                        <div className="span" style={{ marginTop: '25px' }}>
                            <span style={{ fontSize: '16px', color: '#1F1F1F' }}>-R$</span> <span style={{ fontSize: '32px', fontFamily: 'Inter, sans-serif', color: '#474747', fontWeight: '700' }}>219,</span><span style={{ fontSize: '16px', fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>00</span> <span> 219,00</span>
                        </div>
                        <h6 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '700', color: '#8F8F8F', marginTop: '20px' }}>Descrição do produto</h6>
                        <p style={{ width: '440px', fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: '500', color: '#474747' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum veritatis hic, rerum dolorem culpa voluptas. Aliquid quaerat perferendis eligendi ratione numquam possimus ab! Quod, perferendis dolores quas deleniti earum asperiores.</p>

                        <h6 style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: '700', lineHeight: '22px', color: '#8F8F8F', marginTop: '30px' }}>Tamanho</h6>
                        <ul style={{ listStyle: 'none', display: 'flex', width: '280px', gap: '10px' }}>
                            <li><div style={{ border: 'solid, 1px, #CCCCCC', borderRadius: '4px', padding: '12px' }}>34</div></li>
                            <li><div style={{ border: 'solid, 1px, #CCCCCC', borderRadius: '4px', padding: '12px' }}>40</div></li>
                            <li><div style={{ border: 'solid, 1px, #CCCCCC', borderRadius: '4px', padding: '12px' }}>41</div></li>
                            <li><div style={{ border: 'solid, 1px, #CCCCCC', borderRadius: '4px', padding: '12px' }}>42</div></li>
                            <li><div style={{ border: 'solid, 1px, #CCCCCC', borderRadius: '4px', padding: '12px' }}>43</div></li>
                        </ul>
                        <h6 style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: '700', lineHeight: '22px', color: '#8F8F8F', marginTop: '30px' }}>Tamanho</h6>

                        <ul style={{ listStyle: 'none', display: 'flex', gap: '14PX' }}>
                            <li><div style={{ backgroundColor: '#6FEEFF', borderRadius: '50%', width: '31px', height: '31px' }}></div></li>
                            <li><div style={{ backgroundColor: '#FF6969', borderRadius: '50%', width: '31px', height: '31px' }}></div></li>
                            <li><div style={{ backgroundColor: '#5E5E5E', borderRadius: '50%', width: '31px', height: '31px' }}></div></li>
                            <li><div style={{ backgroundColor: '#6D70B7', borderRadius: '50%', width: '31px', height: '31px' }}></div></li>
                        </ul>
                        <button style={{ width: '220px', height: '48px', textTransform: 'uppercase', backgroundColor: '#FFB31F', border: 'none', borderRadius: '11%', color: '#F5F5F5', fontSize: '16px' }}>Comprar</button>
                    </div>
                </section>
                <section className="relacionados">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginRight: '144px', alignItems: 'center' }}> <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700', fontSize: '24px', color: '#474747', paddingLeft: '30px' }}>Produtos Relacionados</h4>
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: '400', lineHeight: '34px', color: '#C92071' }}>Ver todos <img src="src\images\Line.png" alt="" /></span></div>
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '24px' }}>
                        <li>
                            <div className='item-relacionado'>
                                <div style={{ width: '292px', height: '321px', backgroundColor: '#FFFFFF', position: 'relative' }}>
                                    <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', marginLeft: '25px', marginTop: '20px', backgroundColor: '#E7FF86', width: '96px', height: '32px', borderRadius: '29px', fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>30% OFF</p>
                                    <img src="src\images\Tenis-relacionado.png" alt="Tenis branco, com detalhes preto e laranja" /></div>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '700', color: '#8F8F8F' }}>Tênis</p>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '400', color: '#474747' }}>K-Swiss V8 - Masculino</p>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '700', color: '#8F8F8F' }}><s>$200 </s> <span style={{ color: '#1F1F1F' }}>$100</span> </p>

                            </div></li>

                        <li>
                            <div className='item-relacionado'>
                                <div style={{ width: '292px', height: '321px', backgroundColor: '#FFFFFF', position: 'relative' }}>
                                    <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', marginLeft: '25px', marginTop: '20px', backgroundColor: '#E7FF86', width: '96px', height: '32px', borderRadius: '29px', fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>30% OFF</p><img src="src\images\Tenis-relacionado.png" alt="Tenis branco, com detalhes preto e laranja" /></div>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '700', color: '#8F8F8F' }}>Tênis</p>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '400', color: '#474747' }}>K-Swiss V8 - Masculino</p>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '700', color: '#8F8F8F' }}><s>$200 </s> <span style={{ color: '#1F1F1F' }}>$100</span> </p>

                            </div>
                        </li>

                        <li>
                            <div className='item-relacionado'>
                                <div style={{ width: '292px', height: '321px', backgroundColor: '#FFFFFF' }}>
                                    <img src="src\images\Tenis-relacionado.png" alt="Tenis branco, com detalhes preto e laranja" />
                                </div>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '700', color: '#8F8F8F' }}>Tênis</p>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '400', color: '#474747' }}>K-Swiss V8 - Masculino</p>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '700', color: '#8F8F8F' }}><s>$200 </s> <span style={{ color: '#1F1F1F' }}>$100</span> </p>

                            </div>

                        </li>

                        <li>
                            <div className='item-relacionado'>
                                <div style={{ width: '292px', height: '321px', backgroundColor: '#FFFFFF' }}>
                                    <img src="src\images\Tenis-relacionado.png" alt="Tenis branco, com detalhes preto e laranja" />
                                </div>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '700', color: '#8F8F8F' }}>Tênis</p>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '400', color: '#474747' }}>K-Swiss V8 - Masculino</p>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '700', color: '#8F8F8F' }}><s>$200 </s> <span style={{ color: '#1F1F1F' }}>$100</span> </p>

                            </div>
                        </li>
                    </ul>
                </section>
            </main>

        </>
    )
}
export default ProdutoDetalhado;