import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// import UserView from './Users/UserView';
// import CreateUser from "./Users/CreateUser"

import Nav from './Routing/Routes'

const client = new ApolloClient({
    uri: "https://us1.prisma.sh/fishincorey/prisma-practice/dev"
});


const App = () => (
    <ApolloProvider client={client}>
        <div className="background">
            {/*<div>*/}
                {/*<h1>*/}
                    {/*🤪*/}
                    {/*🤬*/}
                    {/*💩*/}
                {/*</h1>*/}
            {/*</div>*/}
            <Nav />
            {/*<CreateUser/>*/}
            {/*<hr/>*/}
            {/*<h2>User list</h2>*/}
            {/*<UserView/>*/}
        </div>
    </ApolloProvider>
);


ReactDOM.render(<App/>, document.getElementById('root'));