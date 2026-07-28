// src/components/CssGlobalDemo_mp.tsx

import '../styles/global_mp.css'

export default function CssGlobalDemo() {
  return (
    <div className="globalCard">
      <h3 className="title">CSS Global</h3>
      <p className="globalSubtitle" style={{ margin: 0 }}>
        Clases definidas en un archivo <code>.css</code> importado en el componente.
        Scope global â€” pueden colisionar si dos componentes usan el mismo nombre de clase.
      </p>
    </div>
  )
}
