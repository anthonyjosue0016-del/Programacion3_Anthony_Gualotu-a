// src/components/StyledComponentsDemo.tsx

import styled from 'styled-components'

// Props con nombre normal — se pasan al DOM si no se filtran
interface BtnProps {
  variant?: 'primary' | 'outline' | 'danger'
}

const Card = styled.div`
  border:        1px solid var(--border);
  background:    var(--card);
  border-radius: 10px;
  padding:       16px;
  font-size:     18px;
`

const Title = styled.h3`
  margin:      0 0 8px 0;
  color:       var(--accent);
  font-weight: 800;
`

const Btn = styled.button<BtnProps>`
  padding:       8px 16px;
  border-radius: 8px;
  cursor:        pointer;
  font-weight:   600;
  border:        1px solid var(--accent);
  background:    ${p => p.variant === 'danger' ? '#dc2626' : p.variant === 'outline' ? 'transparent' : 'var(--accent)'};
  color:         ${p => p.variant === 'outline' ? 'var(--accent)' : 'white'};
  transition:    filter 0.15s;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(0.97);
  }
`

export default function StyledComponentsDemo() {
  return (
    <Card>
      <Title>Styled-components v6</Title>
      <p style={{ margin: '0 0 12px', color: 'var(--muted)' }}>
        CSS-in-JS con scope automático. Props transient con prefijo <code>$</code>
        en v6 para no contaminar el DOM.
      </p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Btn variant="primary">Primary</Btn>
        <Btn variant="primary">Primary</Btn>
        <Btn variant="danger">Danger</Btn>
      </div>
    </Card>
  )
}