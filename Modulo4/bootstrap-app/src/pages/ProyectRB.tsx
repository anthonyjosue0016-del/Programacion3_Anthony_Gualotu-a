// src/pages/AboutRB.tsx

import { Container, Card, ListGroup } from 'react-bootstrap'

export default function AboutRB() {
  return (
    <Container className="py-5" style={{ maxWidth: 600 }}>
      <h1 className="h3 fw-bold mb-4">Mis Proyectos</h1>
      <Card className="shadow-sm">
        <Card.Header className="fw-semibold">Proyectos Full Stack </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>despliegues AWS, GoogleCloud</ListGroup.Item>
          <ListGroup.Item>ERP Contable</ListGroup.Item>
          <ListGroup.Item>Point Cloud Sale</ListGroup.Item>
          <ListGroup.Item>Vite 8</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  )
}