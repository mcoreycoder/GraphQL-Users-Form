import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';

// import React, {Component} from 'react';
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
    },
    paper: {
        margin: theme.spacing.unit,
    },
    svg: {
        width: 100,
        height: 100,
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
});

class SimpleCollapse extends React.Component {
    state = {
        checked: false,
    };

    handleChange = () => {
        this.setState({ checked: !this.state.checked });
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
        const { classes } = this.props;
        const { checked } = this.state;

        return (
            <div className={classes.root}>
                <Switch checked={checked} onChange={this.handleChange} aria-label="collapse" />
                <div className={classes.container}>
                    <Query query={this.userQuery}>
                        {({loading, error, data}) => {
                            if (loading) return <p>Loading...</p>;
                            if (error) return <p>Error :(</p>;

                            return data.users.map(({id, name, email, password}) => (
                                <div className={classes.container}>
                                    <Collapse in={checked}>
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
                                    </Collapse>
                                </div>
                            ));
                        }}
                    </Query>
                </div>
            </div>
        );
    }
}

SimpleCollapse.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCollapse);