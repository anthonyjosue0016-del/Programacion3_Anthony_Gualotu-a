// src/AppLab_mp.tsx

import { useState } from 'react'
import LabRbButtons from './lab/LabRbButtons'
import LabRbAlert from './lab/LabRbAlert'
import LabRbCard from './lab/LabRbCard'
import LabRbForm from './lab/LabRbForm'
import LabRbTable from './lab/LabRbTable'
import AppHome from './AppHome'

type LabKey = 'buttons' | 'alert' | 'card' | 'form' | 'table' | 'page'

export default function AppLab() {
  const [lab, setLab] = useState<LabKey>('buttons')

  return (
    <div>
      <div className="border-bottom bg-light px-3 py-2 d-flex align-items-center gap-3">
        <span className="fw-bold">React-Bootstrap LAB</span>
        <select
          className="form-select form-select-sm"
          style={{ maxWidth: 180 }}
          value={lab}
          onChange={e => setLab(e.target.value as LabKey)}
        >
          <option value="buttons">Buttons</option>
          <option value="alert">Alert</option>
          <option value="card">Cards</option>
          <option value="form">Form</option>
          <option value="table">Table</option>
          <option value="page">Page</option>
        </select>
      </div>


      {lab === 'buttons' && <LabRbButtons />}
      {lab === 'alert' && <LabRbAlert />}
      {lab === 'card' && <LabRbCard />}
      {lab === 'form' && <LabRbForm />}
      {lab === 'table' && <LabRbTable />}
      {lab === 'page' && <AppHome />}
    </div>
  )
}
