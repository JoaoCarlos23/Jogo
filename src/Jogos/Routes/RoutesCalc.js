
import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Velha from '../JogoVelha/Velha'
import Home from '../Home/Home'
import Player from '../JogoVelha/DisplayPlayer'

export default props => {

return(

<Router history={hashHistory}>
    <Route path='/velha' component={Velha}/>
    <Route path='/home' component={Home}/>
    <Route path='/displayplayer' component={Player}/>
    
    <Redirect from='*' to='/home' /> 
    {/* se acessar algo que nao tenha, ele direciona pra rota de todo */}

</Router>

)

}








