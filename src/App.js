import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage'
import Header from './Header/Header'
import RegisterForm from './RegisterForm/RegisterForm'
import LoginForm from './LoginForm/LoginForm';
import ShoeList from './ShoeList/ShoeList'
import CreatePost from './CreatePost/CreatePost'

function App() {
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
            component={RegisterForm}
          />
          <Route 
            path='/login'
            component={LoginForm}
          />
          <Route 
            path='/list'
            component={ShoeList}
          />
          <Route 
            path='/create'
            component={CreatePost}
          />
        </Switch>
      </main>
    </section>
  );
}

export default App;
