import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Chamados from './pages/Chamados';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Chamados} ></Route>
            </Switch>
        </BrowserRouter>
    );
}