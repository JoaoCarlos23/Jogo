

import React, {Component} from 'react';
import './DisplayPlayer.css'
import BotaoCalc from '../components/Botao'
import Swal from 'sweetalert2';



// JSON.stringify
let jogadores = JSON.parse(localStorage.getItem('Jogadores'))
let vez = 0
let ganhou = false
// const initialState = { numero: 0 }
//constante setando zero, so chamar pra zerar o valor

var dispo = 0;

const initialstate={

    simbolo: '',
    campo1 : '',
    campo2 : '',
    campo3 : '',
    campo4 : '',
    campo5 : '',
    campo6 : '',
    campo7 : '',
    campo8 : '',
    campo9 : '',
    
}




export default class CompClasse extends Component
{

    state={

        ...initialstate
        
    }
   
    componentDidMount() {

      
        




    }




    zerar = () => {
        
        this.setState({...initialstate})

        document.getElementById('b1').innerHTML = "1"
        document.getElementById('b2').innerHTML = "2"
        document.getElementById('b3').innerHTML = "3"
        document.getElementById('b4').innerHTML = "4"
        document.getElementById('b5').innerHTML = "5"
        document.getElementById('b6').innerHTML = "6"
        document.getElementById('b7').innerHTML = "7"
        document.getElementById('b8').innerHTML = "8"
        document.getElementById('b9').innerHTML = "9"
}




     
    mudaSimbolo =(num) => {
        
        

        if(this.state.simbolo=='' || this.state.simbolo=='O'){
            vez=1;
             document.getElementById(num).innerHTML = "X"
             this.setState({simbolo: 'X'})
             switch(num){
                case "b1":
                    this.setState({campo1: 'X'})
                    break;
                case "b2":
                        this.setState({campo2: 'X'})
                        break;
                case "b3":
                    this.setState({campo3: 'X'})
                    break;
                case "b4":
                    this.setState({campo4: 'X'})
                    break;
                case "b5":
                        this.setState({campo5: 'X'})
                        break;
                case "b6":
                    this.setState({campo6: 'X'})
                    break;
                case "b7":
                    this.setState({campo7: 'X'})
                    break;
                case "b8":
                        this.setState({campo8: 'X'})
                        break;
                case "b9":
                    this.setState({campo9: 'X'})
                    break;

                default:



             }
            
             
        }
        if(this.state.simbolo=='X'){
            vez=2
            document.getElementById(num).innerHTML = "O"
            this.setState({simbolo: 'O'})
            switch(num){
                case "b1":
                    this.setState({campo1: 'O'})
                    break;
                case "b2":
                        this.setState({campo2: 'O'})
                        break;
                case "b3":
                    this.setState({campo3: 'O'})
                    break;
                case "b4":
                    this.setState({campo4: 'O'})
                    break;
                case "b5":
                        this.setState({campo5: 'O'})
                        break;
                case "b6":
                    this.setState({campo6: 'O'})
                    break;
                case "b7":
                    this.setState({campo7: 'O'})
                    break;
                case "b8":
                        this.setState({campo8: 'O'})
                        break;
                case "b9":
                    this.setState({campo9: 'O'})
                    break;

                default:



             }
           
       }
     

         this.verificaGanhador()
        


        return
    }


    verificaGanhador = () =>{

        if((this.state.campo1=='X' && this.state.campo2=='X' && this.state.campo3=='X') || ( this.state.campo1=='O' && this.state.campo2=='O' && this.state.campo3=='O')){
            
            ganhou = true
            Swal.fire({
                title: 'PARABÉNS '+jogadores[0]+' !!',
                text: 'Moscou demais em '+jogadores[1]+'zeira KKKKKKKKKKK',
                width: 500,
                padding: '2em',
                background: '#fff url(/images/back.gif)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nayan.gif")
                  left top
                  no-repeat
                `
              })




            this.zerar()

            //recuperar nome dos jogadores do localstorage e zerar em seguida
            
         }
         else if((this.state.campo4=='X' && this.state.campo5=='X' && this.state.campo6=='X') || ( this.state.campo4=='O' && this.state.campo5=='O' && this.state.campo6=='O')){
            this.setState({ganhou:true})
            alert("Parabens")
            this.zerar()
            
         }
         else if((this.state.campo7=='X' && this.state.campo8=='X' && this.state.campo9=='X') || ( this.state.campo7=='O' && this.state.campo8=='O' && this.state.campo9=='O')){
            this.setState({ganhou:true})
            alert("Parabens")

            this.zerar()
            
         }
         else if((this.state.campo1=='X' && this.state.campo4=='X' && this.state.campo7=='X') || ( this.state.campo1=='O' && this.state.campo4=='O' && this.state.campo7=='O')){
            this.setState({ganhou:true})
            alert("Parabens")
            this.zerar()
            
         }
         else if((this.state.campo2=='X' && this.state.campo5=='X' && this.state.campo8=='X') || ( this.state.campo2=='O' && this.state.campo5=='O' && this.state.campo8=='O')){
            this.setState({ganhou:true})
            alert("Parabens")
            this.zerar()
            
         }
         else if((this.state.campo3=='X' && this.state.campo6=='X' && this.state.campo9=='X') || ( this.state.campo3=='O' && this.state.campo6=='O' && this.state.campo9=='O')){
            this.setState({ganhou:true})
            alert("Parabens")
            this.zerar()
            
         }
         else if((this.state.campo1=='X' && this.state.campo5=='X' && this.state.campo9=='X') || ( this.state.campo1=='O' && this.state.campo5=='O' && this.state.campo9=='O')){
            this.setState({ganhou:true})
            alert("Parabens")
            this.zerar()
            
         }
         else if((this.state.campo3=='X' && this.state.campo5=='X' && this.state.campo7=='X') || ( this.state.campo3=='O' && this.state.campo5=='O' && this.state.campo7=='O')){
            this.setState({ganhou:true})
            alert("Parabens")
            this.zerar()
            
         }
         



    }

   
    reivindicar = ()=>
    {

       
            Swal.fire({
                
                text: 'Para de meter o loko, ninguem ganhou ainda!',
                width: 500,
                padding: '2em'
               
              })

              
        }




    verificarVez = () =>{


 
        if( vez==1 ){

             return jogadores[1]

        }
        else if(vez==2){
            return jogadores[0]
        }
        else{ return jogadores[0]}





}



                     

 render(){ 
     
    
    return(
    

        
           <div class="container">
               
               <h1 class="text-center">Jogo da Velha</h1>

                <br/>
                    {this.verificaGanhador()}
                <div class="d-flex justify-content-between">
                
                    <a href="#/home" class="text-center btn btn-primary btn-lg" >Sair do jogo</a>
               
                    <BotaoCalc valor={this.reivindicar} label='Reivindicar Vitória' classe="revindicar text-center btn btn-success btn-lg"/>
                </div>

                <h3 className='text-center'>Sua vez <b>{this.verificarVez()}</b></h3>
                <div class="grupobotoes">                
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group btn-group-lg mr-2" role="group" aria-label="First group">
                                    <BotaoCalc id="b1" valor={this.mudaSimbolo} label='1' classe="botao btn btn-secondary"/>
                                    <BotaoCalc id="b2" valor={this.mudaSimbolo} label='2' classe="botao btn btn-secondary"/>
                                    <BotaoCalc id="b3" valor={this.mudaSimbolo} label='3' classe="botao btn btn-secondary"/>
                                
                                </div>
                                
                            </div>
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group btn-group-lg mr-2" role="group" aria-label="First group">
                                    <BotaoCalc id="b4" valor={this.mudaSimbolo} label='4' classe="botao btn btn-secondary"/>
                                    <BotaoCalc id="b5" valor={this.mudaSimbolo} label='5' classe="botao btn btn-secondary"/>
                                    <BotaoCalc id="b6" valor={this.mudaSimbolo} label='6' classe="botao btn btn-secondary"/>
                                
                                </div>
                                
                            </div>
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group btn-group-lg mr-2" role="group" aria-label="First group">
                                <BotaoCalc id="b7" valor={this.mudaSimbolo} label='7' classe="botao btn btn-secondary"/>
                                <BotaoCalc id="b8" valor={this.mudaSimbolo} label='8' classe="botao btn btn-secondary"/>
                                <BotaoCalc id="b9" valor={this.mudaSimbolo} label='9' classe="botao btn btn-secondary"/>
                                
                                </div>
                                
                            </div>

                 </div>
           </div>




        )


    }

}










