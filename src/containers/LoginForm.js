import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Container, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'

class LoginForm extends React.Component {
  state = {
    //username: '',
    email: '',
    password: '',
  }

  handleSubmit = event => {
    event.preventDefault()
    //alert(`Username: ${this.state.username} Email: ${this.state.email} Password: ${this.state.password}`)
    axios.post('https://insta.nextacademy.com/api/v1/login',
      {
        //username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
    )
      .then(response => {
        if (response.data.status == 'success') {
          //pass returned value up along the tree to App.js
          this.props.getLoggedinCredentials(response.data.user.id, response.data.user.username, response.data.user.profile_picture)
          
          localStorage.setItem('myJWT', response.data.auth_token)
          console.log(`JWT ${localStorage.getItem('myJWT')} stored in Local Storage`)
          //close the modal in parent method upon submit
          this.props.toggle()
          //this.setState({ status: response.data.status })
          this.props.updateSignedIn(true)

        }
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        // console.log(error.reponse)
        console.log(error.response)
        alert('ERROR: ', error)
      })
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <Container className="App">
        <Form onSubmit={this.handleSubmit} className="form text-left">

          {/* <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                name="username"
                id="exampleUsername"
                onChange={this.handleInput}
                value={this.state.username}
                placeholder="BlakeSoLively"
              />
            </FormGroup>
          </Col> */}

          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                onChange={this.handleInput}
                value={this.state.email}
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                onChange={this.handleInput}
                value={this.state.password}
                placeholder="********"
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Button className='ml-2 d-inline' color={this.props.isLogin ? 'success' : 'primary'} type="submit" value="Submit">{this.props.isLogin ? 'Login' : 'Signup'}</Button>
              <Button className='ml-2 d-inline' color="secondary" onClick={() => this.props.toggle()}>Cancel</Button>

            </FormGroup>
          </Col>
        </Form>

        {/* <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>  //works the same */}
      </Container>
    )
  }
}


export default LoginForm;