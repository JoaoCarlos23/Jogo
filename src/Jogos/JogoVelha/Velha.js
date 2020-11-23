

import React, {Component} from 'react';
import Swal from 'sweetalert2';
import './velha.css'



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


    componentDidMount(){


        let checkate20 = document.getElementById('pessoas')
        let checkate40 = document.getElementById('maquina')

        checkate20.addEventListener('change',function() {                
            checkate20.checked=true;
            checkate40.checked=false;
            

        });

        checkate40.addEventListener('change',function() {                
            checkate20.checked=false;
            checkate40.checked=true;
            

        });






    }




     gravarJogadores = () =>{

       if(document.getElementById('pessoas').checked==true){
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Próximo &rarr;',
            cancelButtonText: 'Cancelar',
            showCancelButton: true,
            allowOutsideClick: false,
            progressSteps: ['P1', 'P2',]
          }).queue([
            {
              title: 'Jogador 1',
              text: 'Escolha o nome do jogador 1:',
              
            },
            'Jogador 2'
          ]).then((result) => {
            if (result.value) {
              const answers = JSON.stringify(result.value)
              localStorage.setItem("Jogadores",answers)
              

              let currentURL = window.location.href;
              let domain = currentURL.split("/");
  
                window.location.replace(domain[0] + "#/displayplayer");
  
                window.location.reload(false);


              
            }

           

          } )

        }
        else{

            
            Swal.mixin({
                input: 'text',
                confirmButtonText: 'Jogar!',
                cancelButtonText: 'Cancelar',
                showCancelButton: true,
                allowOutsideClick: false,
                progressSteps: ['P1']
              }).queue([
                {
                  title: 'Nome do Jogador',
                  text: 'Digite seu nome:',
                  
                }
                
              ]).then((result) => {
                if (result.value) {
                  const answers = JSON.stringify(result.value)
                  localStorage.setItem("Jogadores",answers)
                  
    
                  let currentURL = window.location.href;
                  let domain = currentURL.split("/");
      
                    window.location.replace(domain[0] + "#/displaybot");
      
                    window.location.reload(false);
    
    
                  
                }
    
               
    
              } )






        }

     }

     








                     

 render(){ 
     
    
    return(
    

        
           <div class="container text-center">
               
               <h1 class="text-center">Jogo da Velha</h1><br/>

                <h3>Selecione o modo de jogo:</h3><br/>

                <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <input id="pessoas" type="radio" aria-label="Checkbox for following text input"/>
                        </div>
                      </div>
                      <h6 class="tipo">Jogar com 2 pessoas</h6><br/>
                    </div>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <input id="maquina" type="radio" aria-label="Checkbox for following text input"/>
                        </div>
                      </div>
                      <h6 class="tipo">Jogar contra ROBÔ</h6><br/>
                    </div>

                    <a  onClick={() =>this.gravarJogadores()} class="text-center btn btn-primary btn-lg">JOGAR </a>


           </div>




        )


    }

}




















