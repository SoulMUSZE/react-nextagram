import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Loader from '../components/Loader';
import axios from 'axios';
import Image from 'react-graceful-image';

class UserImages extends React.Component {
    state = {
        userImg: [],
        isLoading: true
    }

    componentDidMount() {
        // performing a GET request
        axios.get('https://insta.nextacademy.com/api/v1/images?userId=' + this.props.userId)
            .then(result => {
                // If successful, we do stuffs with 'result'
                //console.log(result.data);
                this.setState({ 
                    userImg: result.data, 
                    isLoading: false
                })
            })
            .catch(error => {
                // If unsuccessful, we notify users what went wrong
                console.log('ERROR: ', error)
            })
    }

    render() {

        //console.log(this.state.users)

        return (
            <div>

            {this.state.isLoading ? 
                <Loader size={'100px'}/>
            :
            <div>
                <Row>
                    {this.state.userImg.map((imgURL, index) =>
                        <Col xs="6">
                            <Image className ='user-images' width='100%' src = {imgURL} />
                        </Col>
                    )}
                </Row>
            </div>
            }
    
            </div>
        )
    }
}

export default UserImages;