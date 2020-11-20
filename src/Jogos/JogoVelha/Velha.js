

import React, {Component} from 'react';
import Swal from 'sweetalert2';



// const initialState = { numero: 0 }
//constante setando zero, so chamar pra zerar o valor

var dispo = 0;


const initialstate={

     ValorDisplay: '0',
        LimparDisplay: false,
        valores: [0,0], //ou valor 1 e valor 2
        atual: 0, //valor atual no display
        Operacao: null,
        Clicado: 0,
        esquerda: false,
        ponto:false
     
 }



export default class CompClasse extends Component
{

     gravarJogadores = () =>{

       
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Próximo &rarr;',
            showCancelButton: false,
            allowOutsideClick: false,
            progressSteps: ['P1', 'P2',]
          }).queue([
            {
              title: 'Jogador 1',
              text: 'Escolha o nome do jogador 1:'
            },
            'Jogador 2'
          ]).then((result) => {
            if (result.value) {
              const answers = JSON.stringify(result.value)
              localStorage.setItem("Jogadores",answers)
              Swal.fire({
                title: 'Beleza, bora jogar!',
                html: `
                  Your answers:
                  <pre><code>${answers}</code></pre>
                `,
                confirmButtonText: 'JOGAR!'
                
              })



              
            }

            let currentURL = window.location.href;
            let domain = currentURL.split("/");

              window.location.replace(domain[0] + "#/displayplayer");

              window.location.reload(false);

          } )


     }

     








                     

 render(){ 
     
    
    return(
    

        
           <div class="container">
               
               <h1 class="text-center">Jogo da Velha</h1><br/>

                <h3>Selecione o modo de jogo:</h3><br/>

                <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <input id="checkate20" type="radio" aria-label="Checkbox for following text input"/>
                        </div>
                      </div>
                      <h6 class="tipo">Jogar com 2 pessoas</h6><br/>
                    </div>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <input id="checkate20" type="radio" aria-label="Checkbox for following text input"/>
                        </div>
                      </div>
                      <h6 class="tipo">Jogar contra ROBÔ</h6><br/>
                    </div>

                    <a   onClick={() =>this.gravarJogadores()} class="text-center btn btn-primary btn-lg">JOGAR </a>


           </div>




        )


    }

}




















