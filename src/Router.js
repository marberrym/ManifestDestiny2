import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Homepage from './App.js';
import CharacterInfo from './CharacterInfo';

class Router extends React.Component {
    render() {
        return <HashRouter>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/character/:platform/:destinyId/:characterId" component={CharacterInfo}/>
            </Switch>
        </HashRouter>
    }
}

export default Router;