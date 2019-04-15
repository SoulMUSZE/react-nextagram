import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import LoginModal from '../containers/loginModal'
// import SignupModal from '../containers/signupModal'
import MyModal from '../containers//Modal'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //modal: false,
      isLogin: null,
      isOpen: false,
      signedIn: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // hideModal = () => {
  //   this.setState({
  //     modal: false,
  //     isLogin: null
  //   })
  // }

  // resetLoginState = () => {
  //   this.setState({isLogin: null})
  // }

  // showModal = () => {
  //   this.setState({modal: true})
  // }

  getLoggedinCredentials = (id, username, profilePic) => this.props.getLoggedinCredentials (id, username, profilePic)

  updateSignedIn = (value) => {
    this.setState({ signedIn: value })
  }

  logOut = () => {
    console.log(`JWT ${localStorage.getItem('myJWT')} removed from Local Storage`)
    localStorage.removeItem('myJWT')
    
    this.setState({ signedIn: false })
  }

  render() {

    //console.log(this.state.modal)

    return (
      <div>
        <Navbar color="light" light expand="md">

          <NavbarBrand tag={Link} to='/'>
            <img src='https://insta.nextacademy.com/static/favicon.png' width='30' height='30' />
            Nextagram
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink tag={Link} to='/profile'>My Profile</NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={Link} to='/users'>Users</NavLink>
              </NavItem>


              {this.state.signedIn ?
                <NavItem>
                  <Button color="danger" onClick={this.logOut}>Log Out</Button>
                </NavItem>
                :
                <>
                <NavItem>
                  {/* <MyModal modalType='Login' resetLoginState={this.resetLoginState} isLogin={true}/>
                <Button color="danger" onClick={this.showModal}>Login</Button>
                {this.state.modal && <MyModal hideModal={this.hideModal} FormType='Login'/>} */}
                  <MyModal formType='Login' isLogin={true} updateSignedIn={this.updateSignedIn} getLoggedinCredentials={this.getLoggedinCredentials}/>
                  {/* <MyModal formType='Login'/> */}
                </NavItem>

                <NavItem>
                  <MyModal formType='Signup' isLogin={false} updateSignedIn={this.updateSignedIn} />
                </NavItem>
                </>
              }





              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}