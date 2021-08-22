import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Route, useLocation, Link} from 'react-router-dom';
import { Switch } from 'react-router';

import Background from './food-bg.jpg';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>
            <Switch>
                <Route path="/" component={MainPage} exact/>
                <Route path="/cart" component={CartPage}/>
                {/* <Route path='/menu/:id' render={
                  ({match}) => {
                      const {id} = match.params;
                      return <BookItem bookId={id} />
                  }
                } /> */}
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </div>
    )
}

// export default WithRestoService()(App);
export default App;

function NotFound() {
    let location = useLocation();
  
    return (
      <div>
        <h3>
          No match for "{location.pathname}"
        </h3>
        <Link id='redir' to='/'>Go to Main</Link>
      </div>
    );
}