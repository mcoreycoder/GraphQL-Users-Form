import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import CreateUser from "../Users/CreateUser"
import UserView from '../Users/UserView';
import ZoomView from '../Users/ZoomView';




const Home = () => (
    <div>
        <h2>Home</h2>
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

const UserUpdate = () => (
    <div>
        <h2>Update User</h2>
    </div>
)

const UserDelete = () => (
    <div>
        <h2>Delete User</h2>
    </div>
)

const ViewZoom = () => (
    <div>
        <h2>Zoom View</h2>
        <ZoomView/>
    </div>
)


const Nav = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/viewuser">User View</Link></li>
                <li><Link to="/usercreate">Create User</Link></li>
                <li><Link to="/userupdate">Update User</Link></li>
                <li><Link to="/userdelete">Delete User</Link></li>

                <li><Link to="/zoomview">Zoom View</Link></li>

            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/viewuser" component={ViewUser}/>
            <Route path="/usercreate" component={UserCreate}/>
            <Route path="/userupdate" component={UserUpdate}/>
            <Route path="/userdelete" component={UserDelete}/>

            <Route path="/zoomview" component={ViewZoom}/>


        </div>
    </Router>
)


export default Nav
