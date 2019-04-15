import React from "react"
import { Route, Link } from "react-router-dom"
import NavBar from './components/Navbar'
import HomePage from './pages/HomePage'
import UserProfilePage from './pages/UserProfilePage'
import MyProfilePage from './pages/MyProfilePage'
import axios from 'axios'
import Loader from './components/Loader'

import './App.css'

class App extends React.Component {
  state = {
    loginId: '',
    loginUsername: '',
    loginProfilePic: '',
    userList: null,
    isLoading: true
  }

  componentDidMount() {
    // performing a GET request
    axios.get('https://insta.nextacademy.com/api/v1/users')
      .then(result => {
        // If successful, we do stuffs with 'result'
        //console.log(result.data);
        this.setState({
          userList: result.data,
          isLoading: false
        })
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log('ERROR: ', error)
      })
  }

  getLoggedinCredentials = (id, username, profilePic) => {
    console.log(`Value in App.js: ${id}, ${username}, ${profilePic}`)
    this.setState({
      loginId: id,
      loginUsername: username,
      loginProfilePic: profilePic
    })
  }

  render() {

    //console.log(this.state.userList)

    return (
      <div>

        <NavBar getLoggedinCredentials={this.getLoggedinCredentials} />

        {this.state.isLoading ?
          <Loader size={'200px'} />
          :
          <div>

            <Route
              exact path='/'
              render={(props) => <HomePage {...props} users={this.state.userList} />}
            />

            <Route
              exact path='/profile'
              render={(props) => <MyProfilePage {...props} loginId={this.state.loginId} loginUsername={this.state.loginUsername} loginProfilePic={this.state.loginProfilePic} />}
            />

            <Route
              path='/users/:id'
              render={(props) => <UserProfilePage {...props} users={this.state.userList} />}
            />
            <Route
              exact path='/users'
              render={(props) => <HomePage {...props} users={this.state.userList} />}
            />

          </div>
        }

      </div>
    )
  }
}

export default App