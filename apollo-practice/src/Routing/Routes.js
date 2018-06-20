import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import CreateUser from "../Users/CreateUser"
import UserView from '../Users/UserView';

import ZoomView from '../Users/ZoomView';
import SlideView from '../Users/SlideView';
import GrowView from '../Users/GrowView';
import FadeView from '../Users/FadeView';
import CollapseView from '../Users/CollapseView';


const Home = () => (
    <div>
        {/*<h2>Home</h2>*/}
        <h1>
        🤪
        🤬
        💩
            About to come with the other links!
        </h1>
    </div>
)

const ViewUser = () => (
    <div>
        <h2>User View</h2>
        <UserView/>
    </div>
)

const UserCreate = () => (
    <div>
        <h2>Create User</h2>
        <CreateUser/>
    </div>
)

const ViewZoom = () => (
    <div>
        <h2>Zoom View</h2>
        <ZoomView/>
    </div>
)

const ViewSlide = () => (
    <div>
        <h2>Slide View</h2>
        <SlideView/>
    </div>
)

const ViewGrow = () => (
    <div>
        <h2>Grow View</h2>
        <GrowView/>
    </div>
)

const ViewFade = () => (
    <div>
        <h2>Fade View</h2>
        <FadeView/>
    </div>
)

const ViewCollapse = () => (
    <div>
        <h2>Collapse View</h2>
        <CollapseView/>
    </div>
)

const Nav = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/viewuser">User View</Link></li>
                <li><Link to="/usercreate">Create User</Link></li>

                <li><Link to="/zoomview">Zoom View</Link></li>
                <li><Link to="/slideview">Slide View</Link></li>
                <li><Link to="/growview">Grow View</Link></li>
                <li><Link to="/fadeview">Fade View</Link></li>
                <li><Link to="/collapseview">Collapse View</Link></li>

            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/viewuser" component={ViewUser}/>
            <Route path="/usercreate" component={UserCreate}/>

            <Route path="/zoomview" component={ViewZoom}/>
            <Route path="/slideview" component={ViewSlide}/>
            <Route path="/growview" component={ViewGrow}/>
            <Route path="/fadeview" component={ViewFade}/>
            <Route path="/collapseview" component={ViewCollapse}/>


        </div>
    </Router>
)


export default Nav
