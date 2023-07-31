import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  const [data, setData] = useState([]);
  console.log(data);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:8080/all_assets");
    return res;
  };

  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container style={{height:"70vh", marginTop:"40px"}}>
      <Row style={{ display: "flex", gap: 20 }}>
        {data.map((item) => {
          return (
            <Col key={item.id}>
              <Card>
                <Card.Img
                  variant="top"
                  style={{
                    height: "200px",
                    width: "auto",
                    objectFit: "scale-down",
                    overflow: "hidden",
                  }}
                  src={item.image}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <span>{item.format}</span>.<span>{item.duration}</span>.
                    <span>{item.createdat}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Home;
