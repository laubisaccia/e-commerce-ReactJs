import React from 'react';

export default function Footer() {

    return (
        <div style={{ backgroundColor: '#f8f9fa', alignSelf: "flex-end" }}>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <h4>Visitanos</h4>
                            <ul className='list-unstyled'>
                                <li>Mario bravo 251</li>
                                <li>Almagro</li>
                                <li>C.A.B.A.</li>
                                <li>Buenos Aires</li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-sm-4">
                            <h4>FAQ's</h4>
                            <ul className='list-unstyled'>
                                <li>Pedidos</li>
                                <li>Talles</li>
                                <li>Envios</li>
                                <li>Sugerencias</li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-sm-4">
                            <h4>Sobre MDT</h4>
                            <ul className='list-unstyled'>
                                <li>Sobre nosotras</li>
                                <li>Trabaja con nosotras</li>
                                <li>busacodr de tiendas</li>
                                <li>terminos y condiciones</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="p text-sm-center">
                            &copy;{new Date().getFullYear()} Lau Bisaccia - All rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

