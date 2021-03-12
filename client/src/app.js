//internals
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//importing components "should be moved tho"


//importing pages
import Main from './Pages/Main/Main';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

//importing styling
import './app.css'


const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Projects" component={Projects} />
            <Route path="/About" component={About} />

            <Route component={PageNotFound} />
        </Switch>
    </Router>
);

export default App;