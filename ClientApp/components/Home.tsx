import { fetch, addTask } from 'domain-task';
import * as React from 'react';
import { Link, RouteComponentProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { ApplicationState } from '../store';
import { Alert, Button } from "react-bootstrap";
import * as HomeStore from '../store/Home';
type HomeProps =
    HomeStore.showAlert
    & typeof HomeStore.actionCreators
    & RouteComponentProps<{}>;

interface HomeState {
    shows: boolean;
    Name: string;
    Password: string;
}
class Home extends React.Component<HomeProps, HomeState> {
    constructor() {
        super();
        this.state = {
            shows: true,
            Name: "",
            Password: ""
        }
        this.showHideAlert = this.showHideAlert.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

    }
    public handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ Password: event.target.value })
    }

    public handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ Name: event.target.value })
    }
    public showHideAlert() {
        axios.post<boolean>(`/api/UserLogin`,
            { Username: this.state.Name, UserPassword: this.state.Password }).then(response => {
                this.setState({ shows: response.data });
                if (response.data == true) {
                    window.location.href = "/UserProfile";
                }
            })

    }


    public render() {
        return <div className="buttonAlert">
            <span>Username:</span>
            <input type="text" onChange={this.handleChange} className="inputName" />
            <span>Password:</span>
            <input type="password" onChange={this.handleChangePassword} className="inputPassword" />
            <Button bsStyle="warning" onClick={() => this.showHideAlert()}>Salvar</Button>
            {!this.state.shows ?
               <Alert bsStyle="danger"> Usuario invalido!</Alert>:null}
        </div>;
    }
}
export default connect(
    (state: ApplicationState) => state.show,
    HomeStore.actionCreators
)(Home) as typeof Home;
