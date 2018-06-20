import { fetch, addTask } from 'domain-task';
import * as React from 'react';
import { withRouter, RouteProps } from 'react-router';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { ApplicationState } from '../store';
import { Alert, Button } from "react-bootstrap";


export default class UserProfile extends React.Component<RouteComponentProps<any>>{

    public render() {
        return <div className="buttonAlert">
            <Alert bsStyle="danger"> Em desenvolvimento!</Alert>
        </div>;
    }
}

