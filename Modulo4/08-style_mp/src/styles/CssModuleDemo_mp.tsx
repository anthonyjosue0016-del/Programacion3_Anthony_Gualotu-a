// src/components/CssModuleDemo_mp.tsx

import styles from '../styles/card.module_mp.css'

export default function CssModuleDemo() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>CSS Modules</h3>
      <p className={styles.highlight} style={{ margin: '0 0 12px', color: 'var(--muted)' }}>
        Cada clase recibe un nombre Ãºnico generado en build time.
        Elimina colisiones sin necesitar BEM ni prefijos manuales.
      </p>
      <button className={styles.btn}>BotÃ³n con mÃ³dulo</button>
    </div>
  )
}
