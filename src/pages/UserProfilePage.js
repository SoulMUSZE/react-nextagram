import React, { Component } from 'react'
import UserImages from "../containers/userImages";
import PeopleCard from '../components/PeopleCard';
import { Container, Row, Col } from 'reactstrap';

class UserProfilePage extends React.Component {

    state = {
        usersList: this.props.users,
        idFromMatchParams: this.props.match.params.id,
        userProfileImage: null,
        username: null
    }

    componentDidMount() {

        this.state.usersList.forEach(user => {
            if (user.id == this.state.idFromMatchParams) {
                //this.setState({ currentUsername: user.username })
                this.setState({
                    userProfileImage: user.profileImage,
                    username: user.username
                })
            }
        })

    }

    render() {
        return (
            <div>
                
                    <Container>
                        <Row className='border m-3'>
                            <Col xs="3">
                                <PeopleCard userName={this.state.username} userImg={this.state.userProfileImage} />
                            </Col>

                            <Col xs="9">
                                <UserImages userId={this.state.idFromMatchParams} />
                            </Col>
                        </Row>
                    </Container>
                
            </div>
        )
    }
}
export default UserProfilePage;

// const UserProfilePage = ({ match, users }) => {

//     const idFromMatchParams = match.params.id;
//     users.forEach(user => {
//         console.log(users)
//         if (user.id === idFromMatchParams) {
//             //this.setState({ currentUsername: user.username })
//         }
//     })

//     return (
//         <div>
//             {/* <h1>User Profile Page For User {this.state.currentUsername}</h1> */}
//             <UserImages userId={idFromMatchParams} />
//         </div>
//     );
// }
// export default UserProfilePage