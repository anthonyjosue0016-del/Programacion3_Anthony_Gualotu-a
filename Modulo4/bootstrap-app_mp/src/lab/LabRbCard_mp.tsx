// src/lab/LabRbCard_mp.tsx

import { Container, Card, Button, Row, Col, Badge } from 'react-bootstrap'

interface ProductCardProps {
  title:    string
  price:    string
  category: string
  active:   boolean
}

function ProductCard({ title, price, category, active }: ProductCardProps) {
  return (
    <Card className="h-100 shadow border-0">
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
        <Card.Text>
          <Badge bg={active ? 'primary' : 'warning'} className="me-2">
            {active ? 'Activo' : 'Inactivo'}
          </Badge>
          <strong>{price}</strong>
        </Card.Text>
        <Button variant="primary" size="sm">Ver detalle</Button>
      </Card.Body>
    </Card>
  )
}

export default function LabRbCard() {
  const products = [
    { title: 'Teclado mecÃ¡nico',  price: '$89.99',  category: 'PerifÃ©ricos', active: true  },
    { title: 'Monitor 27"',       price: '$349.99', category: 'Pantallas',   active: true  },
    { title: 'Mouse inalÃ¡mbrico', price: '$29.99',  category: 'PerifÃ©ricos', active: false },
  ]

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Cards</h2>
      <p className="text-secondary mb-3">Grid responsivo con cards tipadas.</p>
      <Row className="g-5">
        {products.map(p => (
          <Col key={p.title} xs={12} sm={6} md={6}>
            <ProductCard {...p} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
