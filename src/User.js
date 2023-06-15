import Card from 'react-bootstrap/Card';

function User(props) {

  const user = props.user;

  return (
    <Card style={{ width: '10rem' }} className="mb-5">
      <Card.Img variant="left" src={user.avatar} />
      <Card.Body>
        <Card.Text>
          <b>{user.first_name}{" "+ user.last_name}</b>
        </Card.Text>
        <Card.Footer>
          {user.email}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default User;