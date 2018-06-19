import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const UserView = () => (
    <div>
        <h2>UserView</h2>
    </div>
)

const CreateUser = () => (
    <div>
        <h2>Create User</h2>
    </div>
)

const UpdateUser = () => (
    <div>
        <h2>Update User</h2>
    </div>
)

const DeleteUser = () => (
    <div>
        <h2>Delete User</h2>
    </div>
)



const Nav = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/userview">User View</Link></li>
                <li><Link to="/createuser">Create User</Link></li>
                <li><Link to="/deleteuser">Delete User</Link></li>
                <li><Link to="/updateuser">Update User</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/userview" component={UserView}/>
            <Route path="/createuser" component={CreateUser}/>
            <Route path="/deleteuser" component={DeleteUser}/>
            <Route path="/updateuser" component={UpdateUser}/>
        </div>
    </Router>
)


export default Nav
