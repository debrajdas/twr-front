import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import axios from 'axios';
import base_url from './bootApi';
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Registration() {
  let navigate = useNavigate();
    useEffect(()=>{
        document.title="Register user"
    },[])
    const[SignupRequest,setSignupRequest]=useState({});
    const handleForm=(e)=>
    {
        
       console.log(SignupRequest);
       console.log(JSON.stringify(SignupRequest));
       postDatatoServer(JSON.stringify(SignupRequest));
       e.preventDefault();
    };
    const postDatatoServer=(data)=>
    {
        axios.post(`${base_url}/register`,data,{
            headers: {
            'Content-Type': 'application/json'
            }
          }).then(
            (response)=>
            {
                console.log(response);
                console.log("success");
                navigate("/login");
            },
            (error)=>
            {
                console.log(error);
                console.log("error");
            }
        );

    };
  return (
    <Container
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
      height: '100vh',
        width:'500vw'
      
    }}
    >
    <Form onSubmit={handleForm} style={{width:'40%',flexdirection: 'column'}} >
    <Row className="mb-4 text-center">
                <h1 className="text-success">Sign Up</h1>
              </Row>
    <Row>          
    <FormGroup as={Col} md="12"> 
      <Label for="firstName">First Name</Label>
      <Input required type="text"  id="firstName" placeholder="Enter firstname" 
      onChange={(e)=>{setSignupRequest({...SignupRequest,firstName: e.target.value});}}
      
      />
    </FormGroup>
    </Row>
    <Row>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input required type="text" id="lastName" placeholder="Enter lastname" 
          onChange={(e)=>{setSignupRequest({...SignupRequest,lastName: e.target.value});}}
          />
        </FormGroup>
        </Row>
        <Row>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input required type="email"  id="email" placeholder="Enter email" 
          onChange={(e)=>{setSignupRequest({...SignupRequest,email: e.target.value});}}
          
          />
        </FormGroup>
        </Row>
        <Row>
        <FormGroup>
          <Label for="username">username</Label>
          <Input required type="text" id="username" placeholder="Enter username"
          onChange={(e)=>{setSignupRequest({...SignupRequest,username: e.target.value});}} />
        </FormGroup>
        </Row>
        <Row>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input required type="password"  id="password" placeholder="Enter password" 
          onChange={(e)=>{setSignupRequest({...SignupRequest,password: e.target.value});}}/>
        </FormGroup>
        </Row>
        <Row>
        <FormGroup>
          <Label for="contactNumber">ContactNumber</Label>
          <Input required type="text"  id="contactNumber" placeholder="Enter phone number" 
          onChange={(e)=>{setSignupRequest({...SignupRequest,contactNumber: e.target.value});}}/>
        </FormGroup>
        </Row>
        <div>
        <Button color="success"> Register
            </Button>
        </div>
        

        </Form>
        </Container>
    
  )
}
