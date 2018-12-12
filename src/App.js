import React, {
  Component
} from 'react';
import {BrowserRouter,Route} from "react-router-dom"
import './App.css';
import {All} from "./components/All"
import {Root} from "./components/Root"
 import {Active} from "./components/active"
import {Done} from "./components/done" 
class App extends Component {
  render()
  {
    
    return( 
 <BrowserRouter> 
 <div>
 <Route path="/" exact component={Root}/>
   <Route path="/all" component={All} />
   <Route path="/done" component={Done} />
   <Route path="/active" component={Active} />

   </div>
 </BrowserRouter>)
 }
}

export default App;