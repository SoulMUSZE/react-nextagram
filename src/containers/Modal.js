import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

class MyModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            baseState: this.props.isLogin,
            isLogin: null,
            formType: this.props.formType
        };

        this.toggle = this.toggle.bind(this);
    }

    componentDidMount(){
        if (this.state.formType=='Login'){
            this.setState({isLogin: true})
        } else {
            this.setState({isLogin: false})
        }
    }

    switchForm = () => {
        this.setState({ isLogin: !this.state.isLogin })
    }

    updateSignedIn = (value) => this.props.updateSignedIn(value)

    getLoggedinCredentials = (id, username, profilePic) => this.props.getLoggedinCredentials (id, username, profilePic)

    toggle() {
        this.setState(prevState => ({
            isLogin: this.state.baseState,
            //isLogin: null,
            modal: !prevState.modal    
        }));
    }

    render() {
        return (
            <div>
                <Button className='ml-2' color={this.state.formType == 'Login' ? 'success' : 'primary'} onClick={this.toggle}>{this.state.formType}</Button>
                {/* <Modal isOpen={this.state.modal} className={this.props.className}> */}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.state.isLogin? 'Login' : 'Signup'}</ModalHeader>
                    {/* <ModalHeader>Modal title</ModalHeader> commenting out toggle removes the x button from header*/}
                    <ModalBody>
 

                        {this.state.isLogin ?
                        <LoginForm isLogin={this.state.isLogin} toggle={this.toggle} updateSignedIn={this.updateSignedIn} getLoggedinCredentials={this.getLoggedinCredentials}/>
                        :
                        <SignupForm isLogin={this.state.isLogin} toggle={this.toggle} updateSignedIn={this.updateSignedIn}/>
                        }

                        
                        {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}

                        {/* Switch Form? {` `} <a href='#' onClick={this.switchForm}>Click here</a>  */}
                      

                    </ModalBody>
                    <ModalFooter>
                        {this.state.isLogin ? 
                        <span className='footer-span'>Not A Member? <a href='#' onClick={this.switchForm}>Signup here</a></span>
                        : 
                        <span className='footer-span'>Already A Member? <a href='#' onClick={this.switchForm}>Login here</a></span>
                        }
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default MyModal;