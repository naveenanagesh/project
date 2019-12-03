import React from 'react'
import Redirect from 'react-dom';
import {Grid,Form,Header} from 'semantic-ui-react';
import {Helmet} from 'react-helmet';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
    
        };
        this.handleChange=this.handleChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onSubmit(e){
        // e.preventDefaults();
        const{username,password}=this.state;
        console.log(e.target.val)
        if(username==="hruday@gmail.com" && password=== "hruday123"){
           console.log("success")
           
        }
        else{
            console.log("fail")
        }
        
    }
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
      }
    render(){
    
    return(
        <Grid>
            <Helmet>
                <title>Login</title>
            </Helmet>
        
        
        <Grid.Column width={4}>
<Form onSubmit={this.onSubmit} >
    <Header as="h1">Login</Header>
    <Form.Input  label="Username" name="username" onChange={this.haundleChange}/>
    <Form.Input  label="Password" name="password" type="password" onChange={this.haundleChange}/>
<Form.Button type="submit">Login</Form.Button>
        </Form>
        </Grid.Column>
        </Grid>
    )

    }
};

export default Login;