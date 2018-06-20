import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';

import React, {Component} from 'react';
import {Query} from "react-apollo";
import gql from "graphql-tag";
import '../index.css'

import DeleteUser from './DeleteUser'
import UpdateUser from './UpdateUser'


const styles = theme => ({
    root: {
        height: 180,
    },
    container: {
        display: 'flex',
        flexGrow: 1,
        padding: theme.spacing.unit ,

    },
    paper: {
        margin: theme.spacing.unit,
    },
});

class SimpleZoom extends Component {
    state = {
        checked: false,
    };

    handleChange = () => {
        this.setState({checked: !this.state.checked});
    };

    userQuery = gql`
        {
            users {
                id
                name
                email
                password
            }
        }
    `;

    render() {
        const {classes} = this.props;
        const {checked} = this.state;

        return (
            <div className={classes.root}>
                <Switch checked={checked} onChange={this.handleChange} aria-label="collapse"/>

                <Query query={this.userQuery}>
                    {({loading, error, data}) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>;

                        return data.users.map(({id, name, email, password}) => (
                            <div className={classes.container}>
                                <Zoom in={checked}>
                                    <Paper elevation={24} className={classes.paper} key={id}>
                                        <h2>{`Name: ${name}`}</h2>
                                        <p>{`EMAIL: ${email}`}</p>
                                        <p>{`PASSWORD: ${password}`}</p>
                                        <UpdateUser id={id}
                                                    name={name}
                                                    email={email}
                                                    password={password}
                                        />
                                        <DeleteUser id={id}/>
                                    </Paper>
                                </Zoom>
                            </div>
                        ));
                    }}
                </Query>
            </div>
        );
    }
}

SimpleZoom.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleZoom);