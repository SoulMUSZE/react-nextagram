import React from 'react';
import Image from 'react-graceful-image';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

//destructure props directly. 
//if no explicit class naming, don't need to use this.props
//can destructure props directly in parameter location
  const PeopleCard = ({userImg, userName}) => {
  return (
    <div>
      <Card>
        <CardImg top width='100%' src= {userImg} />
        <CardBody>
          {/* <CardTitle>{props.userName}</CardTitle> */}
          <h3>{userName}</h3>
          <CardSubtitle>I'm Awesome</CardSubtitle>
          <CardText>Lorem Ipsum</CardText>
          <Button color="primary">Follow</Button>
        </CardBody>
      </Card>
    </div>
  );
};

// //------Alternative 1--------------
//class declaration as function don't need this keyword
// const PeopleCard = (props) => {
//   return (
//     <div>
//       <Card>
//         <CardImg top width="100%" src= {props.userImg} />
//         <CardBody>
//           {/* <CardTitle>{props.userName}</CardTitle> */}
//           <h3>{props.userName}</h3>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//     </div>
//   );


// //------Alternative 2--------------
// classic class declaration
// class PeopleCard extends React.Component{
//   render () {
//     return (
//       <div>
//         <Card>
//           <CardImg top width="100%" src= {this.props.userImg} />
//           <CardBody>
//             {/* <CardTitle>{props.userName}</CardTitle> */}
//             <h3>{this.props.userName}</h3>
//             <CardSubtitle>Card subtitle</CardSubtitle>
//             <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//             <Button>Button</Button>
//           </CardBody>
//         </Card>
//       </div>
//     )
//   }
// }
  

export default PeopleCard;