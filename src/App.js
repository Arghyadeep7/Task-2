import { useState } from "react";

import { Container, Navbar, Button,
          Spinner, Row, Col} from "react-bootstrap";

import User from "./User";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(0);

  const fetchData = async () =>{

    setData([]);

    setLoading(true);

    const p = page===0 ? 1 : page===1 ? 2 : 1;

    const url = "https://reqres.in/api/users?page="+ p;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => res.json());

    if(page===2){
      setPage(1);
    }else{
      setPage(page + 1);
    }

    setData(response.data);

    setLoading(false);
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>userX</Navbar.Brand>
          <Button variant="outline-light" onClick={fetchData}>
            {page === 0 && "Get users"}
            {page === 1 && "Get next page"}
            {page === 2 && 'Get previous page'}
          </Button>
        </Container>
      </Navbar>
      <Container className="text-center mt-4 mb-5">
        {!loading && !data && <b>Please click on the button to see the users!</b>}
        {loading && 
          <>
            <Spinner animation="grow" variant="primary" />&nbsp;
            <Spinner animation="grow" variant="secondary" />&nbsp;
            <Spinner animation="grow" variant="success" />&nbsp;
            <Spinner animation="grow" variant="danger" />&nbsp;
            <Spinner animation="grow" variant="warning" />&nbsp;
            <Spinner animation="grow" variant="info" />&nbsp;
            <Spinner animation="grow" variant="dark" />
          </>
        }
        {data && 

          <Row>
          {
            data.map((user)=>(
              <Col xs ={6} sm={4} md={3} lg={2} key={user.id}>
                <User user={user}/>
              </Col>
            ))
          }
          </Row>
        }
      </Container>
    </>
  );
}

export default App;
