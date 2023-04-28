import React from 'react'
import Home from './pages/Home'
import ListOrders from './pages/ListOrders'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

function Routes(){
    
    return(

        <Router>
            <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/AllOrders' component={ListOrders}/>
            </Switch>
        </Router>
    )
}

export default Routes