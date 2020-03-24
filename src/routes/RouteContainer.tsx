import React from 'react';
import Register from 'components/auth/Register';
import Login from 'components/auth/Login';
import Main from 'components/Main';
import Share from 'components/Share';
import PostPage from 'components/article/PostPage';
import About from 'components/About';
import Profile from 'components/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppLayout from 'layouts/AppLayout';


const RouteContainer: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route exact path="/" render={(props) => <PostPage {...props}/>}/>
          <Route exact path="/post/:id" render={(props) => <PostPage {...props}/> } />
          <Route exact path="/signup" render={() => <Register />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/share" render={() => <Share />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/profile" render={() => <Profile />} />
          {/* <Route component={NoMatchRouteRedirect} */}
        </Switch>
      </AppLayout>
    </Router>
  )
}

export default RouteContainer;
