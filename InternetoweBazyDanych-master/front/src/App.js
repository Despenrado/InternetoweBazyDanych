import React, {useState, useEffect, Component} from 'react';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
// Styles
import './styles/css/main.css';
// Components
import Navbar from './components/Navbar';
// Pages
import Homepage from './pages/Homepage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Stats from './pages/Stats';
import Organizer from "./pages/Organizer";
import OrganizerRuns from "./pages/OrganizerRuns";
import OrganizerUsers from "./pages/OrganizerUsers";
import EditProfile from './pages/editProfile';
import FinishRun from './pages/FinishRun';
import AddRoute from './pages/AddRoute';
import decode from 'jwt-decode';
// Data
const guestMenu =[{name: 'Sign in', url: '/login'}, {name: 'Sign up', url: '/register'}];
const runnerMenu = [{name: 'Profile', url: '/profile'}, {name: 'Sign out',url:'/',logout:1}];
const organizerMenu = [{name: 'Profile', url: '/profile'}, {name: 'Organizer', url: '/organizer'}, {name: 'Sign out',url: '/',logout:1}];


const App = () => {
    const checkAuth = () =>{
        const token = localStorage.getItem('token');
        const refreshToken = localStorage.getItem('refreshToken');
        if(!token || !refreshToken){
            return false;
        }

        try{
          const {exp}=decode(refreshToken);

          if(exp < new Date().getTime()/1000){
              return false;
          }
        }  catch (e){
       return true;
       }
       return true;
    }

    const AuthRoute = ({ component: Component, ...rest}) => (
        <Route {...rest} render ={props => (
            checkAuth() ? (
                <Component {...props} />
            ) : ( 
                <Redirect to={{pathname: '/'}} />
            )
        )} />
    )

        const [menu, changeMenu] = useState(guestMenu);
       
        useEffect(() => {
            console.log(localStorage.getItem('type'))
            if(localStorage.getItem('type') === 'guest')
                changeMenu(guestMenu);
            else if(localStorage.getItem('type') === 'biegacz')
                changeMenu(runnerMenu);
            else if(localStorage.getItem('type') === 'organizator')
                changeMenu(organizerMenu);
            else
                changeMenu(guestMenu);
        }, [menu])

        return (
            <BrowserRouter>
                <Navbar items={menu}/>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Homepage/>
                        </Route>
                        <Route exact path="/login">
                            <Signin/>
                        </Route>
                        <Route exact path="/register">
                            <Signup/>
                        </Route>
                        <AuthRoute exact path ="/profile" component={Profile} />
                        <AuthRoute  exact path="/profile/stats" component={Stats}/>
                        <AuthRoute  exact path="/profile/edit" component={EditProfile}/>
                        <AuthRoute exact path="/organizer" component ={Organizer}/>   
                        <AuthRoute exact path="/organizer/runs" component ={OrganizerRuns}/>                          
                        <AuthRoute exact path="/organizer/runners" component={OrganizerUsers}/>
                        <AuthRoute exact path='/organizer/route' component={AddRoute}/>                        
                        <AuthRoute exact path="/organizer/finishrun/:id" component={FinishRun}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
}

export default App;
