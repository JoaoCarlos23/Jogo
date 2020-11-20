
import React, {Component} from 'react';
import Botao from './botao';
import display from './display.css';
import Display from './Display';
import botao from './botao.css';
import csscalculadora from './calculadora.css';
import App from './app/app'; 



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

     

     state={...initialstate}

    //sem 0 a esquerda, e nao pode ter 2 pontos


    //atribui tudo pro estado inicial, limpar memoria
     // state = { ...initialState}

    //da pra usar 

    
  


    aumentar =() => {this.setState({numero: this.state.numero + 1}) }
    //funcao de aumentar

    diminuir = () => {
        
        if(this.state.numero >0){
             this.setState({numero: this.state.numero - 1})
        }
    
    }


    somar = () => {

     this.setState({valores0: this.state.ValorDisplay})




    }


    clearMemory = () => {  }


    //o SPREAD OPERATION {...VALORES} CLONA O VALOR INICIAL LA EM CIMA,SOMENTE O VALOR


    setOperation = (Operacao) => {  
    //operaçao pega pela label, todos deve ser tipo botao entao!
    
          if(this.state.atual ===0){

                    this.setState({Operacao, atual: 1, LimparDisplay: true})
                    //aqui no limpa display: true vai limpar quando colocar na opração mais, menos, vezes
                    
          }
          else{
               const equals = Operacao === '='; //expressao booleana
               const currentOperation = this.state.Operacao

               const valores = [...this.state.valores]; //pega o valor processado, nao é o inicial

               switch(currentOperation){ //aqui ele pega o valor 1 e faz com ele mesmo, pra fazer varias contas
                    case '+': 
                         valores[0] += valores[1];
                         break;
                    case '-': 
                     valores[0] -= valores[1];
                    break;
                    case '*': 
                         valores[0] *= valores[1];
                         break;
                    case '/': 
                     valores[0] /= valores[1];
                    break;
                    default:

               }

               valores[1] =0;

               this.setState({ValorDisplay: valores[0],
               Operacao: equals ? null : Operacao,
               valores: [...valores],
               atual: equals ? 0 : 1,
               LimparDisplay: true

               })

          }


    }




    AdicionarDigito = (num) => { 


          if(num=='.' && this.state.ValorDisplay.includes('.'))
          {
               return 
          }

          const LimparDisplay = this.state.ValorDisplay==='0' || this.state.LimparDisplay;  //se o estado for thue ou false
          const atual = LimparDisplay ? '': this.state.ValorDisplay //vai receber se clear dispolay for true ou false, vai receber o valor do display
          const ValorDisplay = atual + num; //concatenar o valor atual mais o valor digitado
          this.setState({ValorDisplay, LimparDisplay :false})

          if(num!= '.'){
               const i = this.state.atual;
               const newValue = parseFloat(ValorDisplay);
               const valores = [...this.state.valores]; //adiconando no array o valor no array
               valores[i] = newValue;
               this.setState({valores});

          }






          // if(this.state.ValorDisplay=='0'){
          
          // this.setState({ValorDisplay: num})       

          // }


               // this.setState({esquerda: false})

               // if(num=='.' && this.state.esquerda==false ){

               //      this.setState({ValorDisplay: '0'})

               // }
               // else if(num=='.')

               // this.setState({ponto: true});
               // this.setState({esquerda: true});
               // this.setState({ValorDisplay: this.state.ValorDisplay+num});

               // if(num=='.' && this.state.ponto==true){

               //      this.setState({ValorDisplay: this.state.ValorDisplay})
               // }



     }



    zerar = () => {this.setState({...initialstate})}


                     

 render(){ 
     
    
    return(
    

        
           <div class="container">
                <App /> 
                <div><h1>Calculadora React</h1></div>
                <Display valor={this.state.ValorDisplay} />
               <div>
                    <button  class="largo" onClick={this.zerar}>AC</button>
                    <Botao  classe='oper' label='+' valor={this.setOperation}></Botao> 

               </div>
               <div>
                    <Botao label='9' valor={this.AdicionarDigito}></Botao> 
                    <Botao label='8' valor={this.AdicionarDigito}></Botao>
                    <Botao label='7' valor={this.AdicionarDigito}></Botao>
                    <Botao classe='oper' label='-' valor={this.setOperation}></Botao>                 
               </div>
               <div>
                    <Botao label='6' valor={this.AdicionarDigito}></Botao>
                    <Botao label='5' valor={this.AdicionarDigito}></Botao>
                    <Botao label='4' valor={this.AdicionarDigito}></Botao>
                    <Botao classe='oper' label='*' valor={this.setOperation}></Botao>                  
               </div>
               <div>
                    <Botao label='3' valor={this.AdicionarDigito}></Botao>
                    <Botao label='2' valor={this.AdicionarDigito}></Botao>
                    <Botao label='1' valor={this.AdicionarDigito}></Botao>
                    <Botao classe='oper' label='/' valor={this.setOperation}></Botao>                  
               </div>
               <div>
                    <Botao classe='zero' label='0' valor={this.AdicionarDigito}></Botao>
                    <Botao label='.' valor={this.AdicionarDigito}></Botao>

                    <Botao classe='oper' label='=' valor={this.setOperation}></Botao>               
               </div>


           </div>




        )


    }

}










