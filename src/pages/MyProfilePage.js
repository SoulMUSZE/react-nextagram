import React, { Component } from 'react'
import UserImages from "../containers/userImages";
import PeopleCard from '../components/PeopleCard';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import Loader from '../components/Loader';

class MyProfilePage extends React.Component {

    state = {
        username: this.props.loginUsername,
        id: this.props.loginId,
        userProfileImage: this.props.loginProfilePic,
        isLoading: true
    }

    componentDidMount() {
        // performing a GET request
        axios.get('https://insta.nextacademy.com/api/v1/images/me',
            { headers: { Authorization: `Bearer ${localStorage.getItem('myJWT')}` } }
        )
            .then(result => {
                // If successful, we do stuffs with 'result'
                console.log(result.data);
                this.setState({
                    isLoading: false
                })
            })
            .catch(error => {
                // If unsuccessful, we notify users what went wrong
                console.log(error.response)
                //alert('ERROR: ', error.response.data.message)
            })
    }

    render() {
        //console.log(this)

        return (
            <div>
                {this.state.isLoading ?
                    <Loader size={'100px'} />
                    :
                    <Container>
                        <Row className='border m-3'>
                            <Col xs="3">
                                <PeopleCard userName={this.state.username} userImg={'http://next-curriculum-instagram.s3.amazonaws.com/' + this.state.userProfileImage} />
                            </Col>

                            <Col xs="9">
                                <UserImages userId={this.state.id} />
                            </Col>
                        </Row>
                    </Container>
                }
            </div>
        )
    }
}
export default MyProfilePage;