import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage'
import Header from './Header/Header'
import RegisterRoute from './Routes/RegisterRoute'
import LoginRoute from './Routes/LoginRoute';
import ShoeList from './ShoeList/ShoeList'
import CreateRoutes from './Routes/CreateRoute'
import PostPage from './Routes/PostPage'

class App extends Component {
  render() {
  return (
    <section className="App">
      <Header />
      <main>
        <Switch>
          <Route 
            exact path='/'
            component={LandingPage}
          />
          <Route
            path='/register'
            component={RegisterRoute}
          />
          <Route 
            path='/login'
            component={LoginRoute}
          />
          <Route 
            path='/list'
            component={ShoeList}
          />
          <Route 
            path='/create'
            component={CreateRoutes}
          />
          <Route 
            path='/post/:postId'
            component={PostPage}
          />
        </Switch>
      </main>
    </section>
  );
}
}

export default App;
