import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

import {Query} from "react-apollo";
import gql from "graphql-tag";
import '../index.css'

import DeleteUser from './DeleteUser'
import UpdateUser from './UpdateUser'

const styles = theme => ({
    root: {
        height: 180,
    },
    wrapper: {
        width: 100 + theme.spacing.unit * 2,
    },
    paper: {
        zIndex: 1,
        position: 'relative',
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

class SimpleSlide extends Component {
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
                <div className={classes.wrapper}>
                    <Switch checked={checked} onChange={this.handleChange} aria-label="collapse" />
                    <Query query={this.userQuery}>
                        {({loading, error, data}) => {
                            if (loading) return <p>Loading...</p>;
                            if (error) return <p>Error :(</p>;

                            return data.users.map(({id, name, email, password}) => (
                                <div className={classes.container}>
                                    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
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
                                    </Slide>
                                </div>
                            ));
                        }}
                    </Query>
                </div>
            </div>
        );
    }
}

SimpleSlide.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSlide);