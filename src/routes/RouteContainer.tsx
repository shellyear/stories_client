import React from 'react';
import Register from 'components/auth/Register';
import Login from 'components/auth/Login';
import Navbar from 'components/header/Navbar';
import Main from 'components/Main';
import Share from 'components/Share';
import Footer from 'components/footer/Footer';
import PostPage from 'components/article/PostPage';
import About from 'components/About';
import Profile from 'components/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const RouteContainer = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/post/:id" component={PostPage} />
        <Route exact path="/signup" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/share" component={Share} />
        <Route exact path="/about" component={About} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default RouteContainer;
