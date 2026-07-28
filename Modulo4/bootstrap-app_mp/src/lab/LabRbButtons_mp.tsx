// src/lab/LabRbButtons_mp.tsx

import { Container, Button, Stack } from 'react-bootstrap'

export default function LabRbButtons() {
  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Buttons</h2>
      <p className="text-secondary mb-3">Variantes, outline y tamaÃ±os.</p>

      <Stack direction="vertical" gap={4} className="flex-wrap mb-3">
        <Button variant="success">Primary</Button>
        <Button variant="outline-danger">Outline</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="secondary">Secondary</Button>
      </Stack>

      <Stack direction="vertical" gap={4}>
        <Button variant="primary" size="sm" className="w-100">Large</Button>
        <Button variant="primary" disabled>Normal</Button>
        <Button variant="primary" size="sm">Small</Button>
      </Stack>
    </Container>
  )
}
