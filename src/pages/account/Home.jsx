import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Bem-vindo à Intranet!</h1>
      <Row className="mt-4">
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Número de Clientes</Card.Title>
              <Card.Text>1,234</Card.Text>
              <Card.Text style={{ color: 'green' }}>+5% desde o mês passado</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Número de Pedidos</Card.Title>
              <Card.Text>567</Card.Text>
              <Card.Text style={{ color: 'red' }}>-2% desde o mês passado</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Clientes Ativos</Card.Title>
              <Card.Text>890</Card.Text>
              <Card.Text style={{ color: 'green' }}>+8% desde o mês passado</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Receita</Card.Title>
              <Card.Text>$10,245</Card.Text>
              <Card.Text style={{ color: 'green' }}>+12% desde o mês passado</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
