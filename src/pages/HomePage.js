import React, { Component } from 'react'
import PeopleCard from '../components/PeopleCard';
import UserImages from '../containers/userImages';
import { Container, Row, Col } from 'reactstrap';


class HomePage extends React.Component {
  state = {
    users: this.props.users,
  }

  render() {       
    return (
      <div>
        <Container>
          {
            this.state.users.map((user, index) => (            
              <Row className='border m-3'>
                <Col xs="3">
                  <PeopleCard userName = {user.username} userImg = {user.profileImage} />
                </Col>

                <Col xs="9">
                  <UserImages userId = {user.id}/>
                </Col>
              </Row>
            ))
          }
        </Container>
      </div>
    )
  }
}

export default HomePage;
