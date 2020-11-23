

import React, {Component} from 'react';
import './DisplayBot.css'
import BotaoCalc from '../components/Botao'
import Swal from 'sweetalert2';



// JSON.stringify
let jogadores = JSON.parse(localStorage.getItem('Jogadores'))
let vez = 0
let ganhou = false
// const initialState = { numero: 0 }
//constante setando zero, so chamar pra zerar o valor

var dispo = 0;

var estrategia = false
var jafoi1 = false
var jafoi2 = false
var jafoi3 = false
var jafoi4 = false
var jafoi5 = false
var jafoi6 = false
var jafoi7 = false
var jafoi8 = false
var jafoi9 = false
var jafoi10 = false
var jafoi11 = false
var jafoi12 = false
var jafoi13 = false

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


    analise = ()=>{

        if(jafoi1==false){
            if(document.getElementById('b1').innerHTML == "X" && document.getElementById('b2').innerHTML == "X" ){
                setTimeout(function(){
                    document.getElementById('b3').innerHTML = "O"
                    document.getElementById('b3').disabled =true
                },999);
                    this.setState({campo3: 'O'})
                    this.setState({simbolo: 'O'})                      
            
                vez=2
                estrategia=true
                jafoi1 = true

                return

            }
        }
        if(jafoi2==false){
            if(document.getElementById('b1').innerHTML == "X" && document.getElementById('b4').innerHTML == "X" ){
                setTimeout(function(){
                    document.getElementById('b7').innerHTML = "O"
                    document.getElementById('b7').disabled =true
                },999);
                    this.setState({campo7: 'O'})
                    this.setState({simbolo: 'O'})                      
            
                    vez=2
                    estrategia=true
                    jafoi2=true
                    return

            }
        }
        if(jafoi3==false){
                if(document.getElementById('b4').innerHTML == "X" && document.getElementById('b5').innerHTML == "X" ){
                    setTimeout(function(){
                        document.getElementById('b6').innerHTML = "O"
                        document.getElementById('b6').disabled =true
                    },999);
                        this.setState({campo6: 'O'})
                        this.setState({simbolo: 'O'})                      
                
                        vez=2
                        estrategia=true
                        jafoi3=true
                        return

                }
        
            }
        if(jafoi4==false){    
                if(document.getElementById('b8').innerHTML == "X" && document.getElementById('b5').innerHTML == "X" ){
                    setTimeout(function(){
                        document.getElementById('b2').innerHTML = "O"
                        document.getElementById('b2').disabled =true
                    },999);
                        this.setState({campo2: 'O'})
                        this.setState({simbolo: 'O'})                      
                
                        vez=2
                        estrategia=true
                        jafoi4=true
                        return

                }
        
            }
        if(jafoi5==false){    
                if(document.getElementById('b2').innerHTML == "X" && document.getElementById('b5').innerHTML == "X" ){
                    setTimeout(function(){
                        document.getElementById('b8').innerHTML = "O"
                        document.getElementById('b8').disabled =true
                    },999);
                        this.setState({campo8: 'O'})
                        this.setState({simbolo: 'O'})                      
                
                        vez=2
                        estrategia=true
                        jafoi5=true
                        return

                }
            }
        if(jafoi6==false){
                if(document.getElementById('b3').innerHTML == "X" && document.getElementById('b5').innerHTML == "X" ){
                    setTimeout(function(){
                        document.getElementById('b7').innerHTML = "O"
                        document.getElementById('b7').disabled =true
                    },999);
                        this.setState({campo7: 'O'})
                        this.setState({simbolo: 'O'})                      
                
                        vez=2
                        estrategia=true
                        jafoi6=true
                        return

                }
            }
        
        if(jafoi7==false){
                if(document.getElementById('b6').innerHTML == "X" && document.getElementById('b5').innerHTML == "X" ){
                    setTimeout(function(){
                        document.getElementById('b4').innerHTML = "O"
                        document.getElementById('b4').disabled =true
                    },999);
                        this.setState({campo4: 'O'})
                        this.setState({simbolo: 'O'})                      
                
                        vez=2
                        estrategia=true
                        jafoi7 = true
                        return

                }
            }
            if(jafoi8==false){
                if(document.getElementById('b1').innerHTML == "X" && document.getElementById('b7').innerHTML == "X" ){
                    setTimeout(function(){
                        document.getElementById('b4').innerHTML = "O"
                        document.getElementById('b4').disabled =true
                    },999);
                        this.setState({campo4: 'O'})
                        this.setState({simbolo: 'O'})                      
                
                        vez=2
                        estrategia=true
                        jafoi8 = true
                        return

                }
            }
            if(jafoi9==false){
                if(document.getElementById('b2').innerHTML == "X" && document.getElementById('b8').innerHTML == "X" ){
                    setTimeout(function(){
                        document.getElementById('b5').innerHTML = "O"
                        document.getElementById('b5').disabled =true
                    },999);
                        this.setState({campo5: 'O'})
                        this.setState({simbolo: 'O'})                      
                
                        vez=2
                        estrategia=true
                        jafoi9 = true
                        return

                }
            }
            if(jafoi10==false){
                if(document.getElementById('b3').innerHTML == "X" && document.getElementById('b9').innerHTML == "X" ){
                    setTimeout(function(){
                        document.getElementById('b6').innerHTML = "O"
                        document.getElementById('b6').disabled =true
                    },999);
                        this.setState({campo6: 'O'})
                        this.setState({simbolo: 'O'})                      
                
                        vez=2
                        estrategia=true
                        jafoi10 = true
                        return

                }
            }
            if(jafoi11==false){
                if(document.getElementById('b1').innerHTML == "X" && document.getElementById('b3').innerHTML == "X" ){
                    setTimeout(function(){
                        document.getElementById('b2').innerHTML = "O"
                        document.getElementById('b2').disabled =true
                    },999);
                        this.setState({campo2: 'O'})
                        this.setState({simbolo: 'O'})                      
                
                        vez=2
                        estrategia=true
                        jafoi11 = true
                        return

                }
            }
            if(jafoi12==false){
                if(document.getElementById('b4').innerHTML == "X" && document.getElementById('b6').innerHTML == "X" ){
                    setTimeout(function(){
                        document.getElementById('b5').innerHTML = "O"
                        document.getElementById('b5').disabled =true
                    },999);
                        this.setState({campo5: 'O'})
                        this.setState({simbolo: 'O'})                      
                
                        vez=2
                        estrategia=true
                        jafoi12 = true
                        return

                }
            }
            if(jafoi13==false){
                if(document.getElementById('b7').innerHTML == "X" && document.getElementById('b9').innerHTML == "X" ){
                    setTimeout(function(){
                        document.getElementById('b8').innerHTML = "O"
                        document.getElementById('b8').disabled =true
                    },999);
                        this.setState({campo8: 'O'})
                        this.setState({simbolo: 'O'})                      
                
                        vez=2
                        estrategia=true
                        jafoi13 = true
                        return

                }
            }







    }





    jogadamaquina = ()=>{

        

            if(vez==1){

                
                document.getElementById('b1').disabled =true
                document.getElementById('b2').disabled =true
                document.getElementById('b3').disabled =true
                document.getElementById('b4').disabled =true
                document.getElementById('b5').disabled =true
                document.getElementById('b6').disabled =true
                document.getElementById('b7').disabled =true
                document.getElementById('b8').disabled =true
                document.getElementById('b9').disabled =true
               this.verificarVez()
                    //esperar um tempo

                    var delay=1000; //1 seconds
                    setTimeout(function(){
                            console.log('pensando....');

                            if(document.getElementById('b1').innerHTML != "1"){
                                document.getElementById('b1').disabled =true
                            }else{
                                document.getElementById('b1').disabled =false
                            }
                            if(document.getElementById('b2').innerHTML != "2"){
                                document.getElementById('b2').disabled =true
                            }
                            else{
                                document.getElementById('b2').disabled =false
                            }
                            if(document.getElementById('b3').innerHTML != "3"){
                                document.getElementById('b3').disabled =true
                            }
                            else{
                                document.getElementById('b3').disabled =false
                            }
                            if(document.getElementById('b4').innerHTML != "4"){
                                document.getElementById('b4').disabled =true
                            }
                            else{
                                document.getElementById('b4').disabled =false
                            }
                            if(document.getElementById('b5').innerHTML != "5"){
                                document.getElementById('b5').disabled =true
                            }
                            else{
                                document.getElementById('b5').disabled =false
                            }
                            if(document.getElementById('b6').innerHTML != "6"){
                                document.getElementById('b6').disabled =true
                            }
                            else{
                                document.getElementById('b6').disabled =false
                            }
                            if(document.getElementById('b7').innerHTML != "7"){
                                document.getElementById('b7').disabled =true
                            }
                            else{
                                document.getElementById('b7').disabled =false
                            }
                            if(document.getElementById('b8').innerHTML != "8"){
                                document.getElementById('b8').disabled =true
                            }
                            else{
                                document.getElementById('b8').disabled =false
                            }
                            if(document.getElementById('b9').innerHTML != "9"){
                                document.getElementById('b9').disabled =true
                            }
                            else{
                                document.getElementById('b9').disabled =false
                            }

                          
                            
                    },1000);

                   //modulo de analise da jogada do robo(desabilite se tiver dificil)

                    this.analise()
                    
                    if(estrategia==false){
                            if(document.getElementById('b1').innerHTML == "1"){
                                setTimeout(function(){
                                        document.getElementById('b1').innerHTML = "O"
                                        document.getElementById('b1').disabled =true
                                },999);
                                this.setState({campo1: 'O'})
                                this.setState({simbolo: 'O'})                      
                            
                                vez=2
                            }
                            else if(document.getElementById('b9').innerHTML == "9"){
                                setTimeout(function(){
                                    document.getElementById('b9').innerHTML = "O"
                                    document.getElementById('b9').disabled =true
                            },999);
                                
                                this.setState({campo9: 'O'})
                                this.setState({simbolo: 'O'})                      
                                
                                vez=2
                            }
                            else if(document.getElementById('b7').innerHTML == "7"){
                                setTimeout(function(){
                                    document.getElementById('b7').innerHTML = "O"
                                    document.getElementById('b7').disabled =true
                            },999);
                            
                                this.setState({campo7: 'O'})
                                this.setState({simbolo: 'O'})                      
                                
                                vez=2
                            }
                            else if(document.getElementById('b3').innerHTML == "3"){
                                setTimeout(function(){
                                    document.getElementById('b3').innerHTML = "O"
                                    document.getElementById('b3').disabled =true
                            },999);
                                
                                this.setState({campo3: 'O'})
                                this.setState({simbolo: 'O'})                      
                                
                                vez=2
                            }
                            else if(document.getElementById('b8').innerHTML == "8"){
                                setTimeout(function(){
                                    document.getElementById('b8').innerHTML = "O"
                                    document.getElementById('b8').disabled =true
                            },999);
                                
                                this.setState({campo8: 'O'})
                                this.setState({simbolo: 'O'})                      
                            
                                vez=2
                            }
                            else if(document.getElementById('b4').innerHTML == "4"){
                                setTimeout(function(){
                                    document.getElementById('b4').innerHTML = "O"
                                    document.getElementById('b4').disabled =true
                            },999);
                            
                                this.setState({campo4: 'O'})
                                this.setState({simbolo: 'O'})                      
                                
                                vez=2
                            }
                            else if(document.getElementById('b2').innerHTML == "2"){
                                setTimeout(function(){
                                    document.getElementById('b2').innerHTML = "O"
                                    document.getElementById('b2').disabled =true
                            },999);
                            
                                this.setState({campo2: 'O'})
                                this.setState({simbolo: 'O'})                      
                                
                                vez=2
                            }
                            else if(document.getElementById('b6').innerHTML == "6"){
                                setTimeout(function(){
                                    document.getElementById('b6').innerHTML = "O"
                                    document.getElementById('b6').disabled =true
                            },999);
                                
                                this.setState({campo6: 'O'})
                                this.setState({simbolo: 'O'})                      
                            
                                vez=2
                            }
                            else if(document.getElementById('b5').innerHTML == "5"){
                                setTimeout(function(){
                                    document.getElementById('b5').innerHTML = "O"
                                    document.getElementById('b5').disabled =true
                            },999);
                            
                                this.setState({campo5: 'O'})
                                this.setState({simbolo: 'O'})                      
                                
                                vez=2
                            }

              
                    }



            }


    }





    reiniciarPag = () => {

            this.zerar()
            let currentURL = window.location.href;
            let domain = currentURL.split("/");

              window.location.replace(domain[0] + "#/displaybot");

              window.location.reload(false);


    }


    zerar = () => {
        
        this.setState({...initialstate})

        vez=""
        document.getElementById('b1').innerHTML = "1"
        document.getElementById('b2').innerHTML = "2"
        document.getElementById('b3').innerHTML = "3"
        document.getElementById('b4').innerHTML = "4"
        document.getElementById('b5').innerHTML = "5"
        document.getElementById('b6').innerHTML = "6"
        document.getElementById('b7').innerHTML = "7"
        document.getElementById('b8').innerHTML = "8"
        document.getElementById('b9').innerHTML = "9"
        
        document.getElementById('b1').disabled =false
        document.getElementById('b2').disabled =false
        document.getElementById('b3').disabled =false
        document.getElementById('b4').disabled =false
        document.getElementById('b5').disabled =false
        document.getElementById('b6').disabled =false
        document.getElementById('b7').disabled =false
        document.getElementById('b8').disabled =false
        document.getElementById('b9').disabled =false

        estrategia=false

        jafoi1 = false
        jafoi2 = false
         jafoi3 = false
        jafoi4 = false
         jafoi5 = false
         jafoi6 = false
         jafoi7 = false
         jafoi8= false
         jafoi9 = false
         jafoi10 = false
          jafoi11 = false
            jafoi12 = false
            jafoi13 = false
}




     
    mudaSimbolo =(num) => {
        
             vez=1;
            estrategia=false
             document.getElementById(num).innerHTML = "X"
             this.setState({simbolo: 'X'})
             switch(num){
                case "b1":
                    this.setState({campo1: 'X'})
                    document.getElementById('b1').disabled =true
                   
                    vez=1;
                    break;
                case "b2":
                        this.setState({campo2: 'X'})
                        document.getElementById('b2').disabled =true
                        
                        vez=1;
                        break;
                case "b3":
                    this.setState({campo3: 'X'})
                    document.getElementById('b3').disabled =true
                    
                    vez=1;
                    break;
                case "b4":
                    this.setState({campo4: 'X'})
                    document.getElementById('b4').disabled =true
                    
                    vez=1;
                    break;
                case "b5":
                        this.setState({campo5: 'X'})
                        document.getElementById('b5').disabled =true
                        
                        vez=1;
                        break;
                case "b6":
                    this.setState({campo6: 'X'})
                    document.getElementById('b6').disabled =true
                    
                    vez=1;
                    break;
                case "b7":
                    this.setState({campo7: 'X'})
                    document.getElementById('b7').disabled =true
                    
                    vez=1;
                    break;
                case "b8":
                        this.setState({campo8: 'X'})
                        document.getElementById('b8').disabled =true
                       
                        vez=1;
                        break;
                case "b9":
                    this.setState({campo9: 'X'})
                    document.getElementById('b9').disabled =true
                    
                    vez=1;
                    break;

                default:



             }
            
             
        

         this.verificaGanhador()
        
         estrategia=false

        return
    }


    verificaGanhador = () =>{

        if(this.state.campo1=='X' && this.state.campo2=='X' && this.state.campo3=='X'){  
            
            ganhou = true
            Swal.fire({
                title: 'PARABÉNS '+jogadores[0]+' !!',
                text: 'Você derrotou o brabo!!',
                width: 500,
                confirmButtonText: `Ok`,
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
            
         }else if( this.state.campo1=='O' && this.state.campo2=='O' && this.state.campo3=='O'){
            ganhou = true
            Swal.fire({
                title: 'Você perdeu pro Robô KKKKKKK',
                
                width: 500,
                confirmButtonText: `Ok`
                
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  
                    this.reiniciarPag()
                } 
              })

            this.zerar()
            

         }


         else if(this.state.campo4=='X' && this.state.campo5=='X' && this.state.campo6=='X') { 
            this.setState({ganhou:true})
            Swal.fire({
                title: 'PARABÉNS '+jogadores[0]+' !!',
                text: 'Você derrotou o brabo!!',
                width: 500,
                confirmButtonText: `Ok`,
                padding: '2em',
                background: '#fff url(/images/back.gif)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nayan.gif")
                  left top
                  no-repeat
                `
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  
                    this.reiniciarPag()
                } 
              })
            this.zerar()
            
         }
        else if( this.state.campo4=='O' && this.state.campo5=='O' && this.state.campo6=='O'){
            this.setState({ganhou:true})
            Swal.fire({
                title: 'Você perdeu pro Robô KKKKKKK',
                width: 500,
                
                confirmButtonText: `Ok`
                
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  
                    this.reiniciarPag()
                } 
              })
            this.zerar()
            

        }

         else if(this.state.campo7=='X' && this.state.campo8=='X' && this.state.campo9=='X'){ 
            this.setState({ganhou:true})
            Swal.fire({
                title: 'PARABÉNS '+jogadores[0]+' !!',
                text: 'Você derrotou o brabo!!',
                width: 500,
                confirmButtonText: `Ok`,
                padding: '2em',
                background: '#fff url(/images/back.gif)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nayan.gif")
                  left top
                  no-repeat
                `
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  
                    this.reiniciarPag()
                } 
              })

            this.zerar()
            this.zerar()
            
         }
         else if ( this.state.campo7=='O' && this.state.campo8=='O' && this.state.campo9=='O'){
            this.setState({ganhou:true})
            Swal.fire({
                title: 'Você perdeu pro Robô KKKKKKK',
                width: 500,
                
                confirmButtonText: `Ok`
                
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  
                    this.reiniciarPag()
                } 
              })

            this.zerar()
            

         }
         else if(this.state.campo1=='X' && this.state.campo4=='X' && this.state.campo7=='X') { 
            this.setState({ganhou:true})
            Swal.fire({
                title: 'PARABÉNS '+jogadores[0]+' !!',
                text: 'Você derrotou o brabo!!',
                width: 500,
                confirmButtonText: `Ok`,
                padding: '2em',
                background: '#fff url(/images/back.gif)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nayan.gif")
                  left top
                  no-repeat
                `
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  
                    this.reiniciarPag()
                } 
              })
            this.zerar()
            this.zerar()
            
         }
         else if( this.state.campo1=='O' && this.state.campo4=='O' && this.state.campo7=='O'){
            this.setState({ganhou:true})
            Swal.fire({
                title: 'Você perdeu pro Robô KKKKKKK',
                width: 500,
                
                confirmButtonText: `Ok`
                
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  
                    this.reiniciarPag()
                } 
              })
            this.zerar()
           
         }
         else if(this.state.campo2=='X' && this.state.campo5=='X' && this.state.campo8=='X') { 
            this.setState({ganhou:true})
            Swal.fire({
                title: 'PARABÉNS '+jogadores[0]+' !!',
                text: 'Você derrotou o brabo!!',
                width: 500,
                confirmButtonText: `Ok`,
                padding: '2em',
                background: '#fff url(/images/back.gif)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nayan.gif")
                  left top
                  no-repeat
                `
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  
                    this.reiniciarPag()
                } 
              })
            this.zerar()
            this.zerar()
            
         }
         else if( this.state.campo2=='O' && this.state.campo5=='O' && this.state.campo8=='O'){
            this.setState({ganhou:true})
            Swal.fire({
                title: 'Você perdeu pro Robô KKKKKKK',
                width: 500,
                
                confirmButtonText: `Ok`
                
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  
                    this.reiniciarPag()
                } 
              })
            this.zerar()
            
         }
         else if(this.state.campo3=='X' && this.state.campo6=='X' && this.state.campo9=='X') { 
            this.setState({ganhou:true})
            Swal.fire({
                title: 'PARABÉNS '+jogadores[0]+' !!',
                text: 'Você derrotou o brabo!!',
                width: 500,
                confirmButtonText: `Ok`,
                padding: '2em',
                background: '#fff url(/images/back.gif)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nayan.gif")
                  left top
                  no-repeat
                `
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  
                    this.reiniciarPag()
                } 
              })
            this.zerar()
            this.zerar()
            
         }
         else if( this.state.campo3=='O' && this.state.campo6=='O' && this.state.campo9=='O'){
            this.setState({ganhou:true})
            Swal.fire({
                title: 'Você perdeu pro Robô KKKKKKK',
                width: 500,
                
                confirmButtonText: `Ok`
                
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  
                    this.reiniciarPag()
                } 
              })
            this.zerar()
            
         }
         else if(this.state.campo1=='X' && this.state.campo5=='X' && this.state.campo9=='X') { 
            this.setState({ganhou:true})
            Swal.fire({
                title: 'PARABÉNS '+jogadores[0]+' !!',
                text: 'Você derrotou o brabo!!',
                width: 500,
                confirmButtonText: `Ok`,
                padding: '2em',
                background: '#fff url(/images/back.gif)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nayan.gif")
                  left top
                  no-repeat
                `
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  
                    this.reiniciarPag()
                } 
              })
            this.zerar()
            this.zerar()
            
         }
         else if( this.state.campo1=='O' && this.state.campo5=='O' && this.state.campo9=='O'){
            this.setState({ganhou:true})
            Swal.fire({
                title: 'Você perdeu pro Robô KKKKKKK',
                width: 500,
                
                confirmButtonText: `Ok`
                
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  
                    this.reiniciarPag()
                } 
              })
            this.zerar()
            
         }
         else if(this.state.campo3=='X' && this.state.campo5=='X' && this.state.campo7=='X') { 
            this.setState({ganhou:true})
            Swal.fire({
                title: 'PARABÉNS '+jogadores[0]+' !!',
                text: 'Você derrotou o brabo!!',
                width: 500,
                confirmButtonText: `Ok`,
                padding: '2em',
                background: '#fff url(/images/back.gif)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nayan.gif")
                  left top
                  no-repeat
                `
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  
                    this.reiniciarPag()
                } 
              })
            this.zerar()
            this.zerar()
            
         }
         else if( this.state.campo3=='O' && this.state.campo5=='O' && this.state.campo7=='O'){
            this.setState({ganhou:true})
            Swal.fire({
                title: 'Você perdeu pro Robô KKKKKKK',
                width: 500,
                
                confirmButtonText: `Ok`
                
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  
                    this.reiniciarPag()
                } 
              })
            this.zerar()
            
         }
         else if(
             (this.state.campo1=='X' || this.state.campo1=='O') && 
             (this.state.campo2=='X' || this.state.campo2=='O') &&
             (this.state.campo3=='X' || this.state.campo3=='O') &&
             (this.state.campo4=='X' || this.state.campo4=='O') &&
             (this.state.campo5=='X' || this.state.campo5=='O') &&
             (this.state.campo6=='X' || this.state.campo6=='O') &&
             (this.state.campo7=='X' || this.state.campo7=='O') &&
             (this.state.campo8=='X' || this.state.campo8=='O') &&
             (this.state.campo9=='X' || this.state.campo9=='O')
             
             ){

                Swal.fire({
                    title: 'Deu velha ',
                    text: 'O jogo será reiniciado!',
                    confirmButtonText: `Ok`,
                    width: 500,
                    padding: '2em'
                  
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      
                        this.reiniciarPag()
                    } 
                  })
                this.zerar()
                this.zerar()


             }



    }






    verificarVez = () =>{


 
        if( vez==1 ){

             return " Robô"

        }
        else if(vez==2){
            return jogadores[0]
        }
        else{ return jogadores[0]}





}



                     

 render(){ 
     
    
    return(
    

        
           <div class="container">
               
               <h1 class="text-center">Jogo da Velha com BOT</h1>

                <br/>
                {this.jogadamaquina()}
                    {this.verificaGanhador()}
                
                
                    <a href="#/home" class="text-center btn btn-primary btn-lg col-lg-3 col-md-6 col-sm-12 text-center" >Sair do jogo</a>
                    
                    {/* <BotaoCalc valor={this.reiniciarPag} label='Reiniciar Partida' classe="revindicar text-center btn btn-success btn-lg col-lg-3 col-md-6 col-sm-12"/> */}
                    
                

                {/* <h3 className='text-center'>Vez do <b>{this.verificarVez()}</b></h3> */}
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


















