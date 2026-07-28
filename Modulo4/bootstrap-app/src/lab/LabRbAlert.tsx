// src/lab/LabRbAlert.tsx

import { Container, Alert, Button } from 'react-bootstrap'

export default function LabRbAlert() {
  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Alert</h2>
      <p className="text-secondary mb-3">Con estilo visual y sin cierre manual.</p>

      <Alert variant="info" className="mt-3">
        <p className="fw-semibold mb-2">Operación exitosa</p>
        <p className="mb-0">El formulario se envió correctamente (demo).</p>
      </Alert>

      <Button variant="outline-secondary" className="mt-3">Mostrar alerta</Button>
    </Container>
  )
}