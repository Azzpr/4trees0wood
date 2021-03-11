//internals
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//importing components "should be moved tho"


//importing pages
import Main from './Pages/Main/Main';

//importing styling
import './app.css'

const App = () =>(
    <Router>
        <Route path="/" exact component={Main} />
    </Router>
);

export default App;