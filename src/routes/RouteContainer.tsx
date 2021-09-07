import React from 'react';
import Register from 'components/auth/Register';
import Login from 'components/auth/Login';
import Share from 'components/Share';
import Posts from 'components/article/Posts';
import Post from 'components/article/Post';
import About from 'components/About';
import Profile from 'components/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppLayout from 'layouts/AppLayout';


const RouteContainer: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route exact path="/" component={Posts} />
          {/* <Route exact path="/post/:id" render={(props) => <Post {...props}/> } /> */}
          <Route exact path="/signup" render={() => <Register />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/share" render={() => <Share />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/profile" render={() => <Profile />} />
        </Switch>
      </AppLayout>
    </Router>
  )
}

export default RouteContainer;
