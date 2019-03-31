import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Segment, Input, Button } from 'semantic-ui-react'

class View extends React.Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            user:'',
            password:'',
        }
        this.userChange = this.userChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.submit = this.submit.bind(this);
        this.getSuspend = this.getSuspend.bind(this);
    }

    userChange(e){
        this.setState({ user : e.target.value })
    }

    passwordChange(e){
        this.setState({ password : e.target.value })
    }

    submit(){
        window.alert(this.state.user)
        window.alert(this.state.password)
    }
    handle(){
        const w=window.open('about:blank');
        w.location.href='http://localhost:63344/my-lgoin-app/src/welcome.html?_ijt=3g0gjm926fl7aqdecmkirtle7j'
    }

    getSuspend(){
        let user = this.state.user;
        let password = this.state.password;
        //user.value = '';
        //password.value = '';   681594
        user= "";
        password = "";
        //window.alert(user)
        this.userChange=user;
    }

    render(){

        return(
            <div style={{margin:'300px'}}>
                <Segment style={{textAlign:'center'}}>
                    <h2>请登录</h2>
                    <Input
                        id='user'
                        placeholder='用户名'
                        style={{marginBottom:'10px'}}
                        onChange={this.userChange}
                    /><br/>
                    <Input
                        id='password'
                        type='password'
                        placeholder='密码'
                        style={{marginBottom:'10px'}}
                        onChange={this.passwordChange}
                    /><br/>

                    <Button
                        primary
                        content='登录'
                        style={{marginBottom:'10px'}}
                        onClick={this.handle}
                    />

                    <Button
                        content='重置'
                        style={{marginLeft:'20px'}}
                      //  onClick={this.getSuspend}
                    />
                </Segment>
            </div>
        )
    }
}
export default View;