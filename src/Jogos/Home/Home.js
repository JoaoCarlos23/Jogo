

import React from 'react';
import App from '../../Calculadora/app/app'
import './home.css'

export default props => {

    return (

        <>
            <div></div><br/>

            <h1 className='text-center'> Catálogo de jogos</h1>
            {/* <img src="/images/nayan.gif" width="70%" height="70%" /> */}
            <br/>
            <div className="row text-center">
                <div class="card cardinho col-lg-3 col-md-6 col-sm-12 text-center">
                    <img class="card-img-top imagem" src="/images/velha.gif" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Jogo da velha</h5>
                        <p class="card-text">Divirta-se com o tradicional jogo da velha!</p>
                        <div class="text-center">
                        <a href="#/velha" class="text-center btn btn-primary btn-lg btn-block">Jogar</a>
                        </div>
                    </div>
                </div>
                </div>

        </>


    )
}










