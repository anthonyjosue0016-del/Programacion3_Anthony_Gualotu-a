// src/App_mp.tsx â€” rutas anidadas
import { Routes, Route } from 'react-router-dom'
import RootLayout       from './layouts/RootLayout'
import DashboardLayout  from './layouts/DashboardLayout'
import HomePage         from './pages/HomePage'
import ProductsPage     from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import AboutPage        from './pages/AboutPage'
import LoginPage        from './pages/LoginPage'
import NotFoundPage     from './pages/NotFoundPage'
import ZodRegistrationForm from './pages/ZodRegistrationForm'

// PÃ¡ginas del dashboard (simples por ahora)
function Overview()   { return <h2>Resumen</h2> }
function Analytics()  { return <h2>AnalÃ­tica</h2> }
function SettingsPage(){ return <h2>ConfiguraciÃ³n</h2> }

export default function App() {
  return (
    <Routes>
      {/* Layout raÃ­z â€” todas las pÃ¡ginas comparten header */}
      <Route element={<RootLayout />}>
        <Route index          element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
        <Route path="about"   element={<AboutPage />} />
        <Route path="login"   element={<LoginPage />} />
        <Route path="register" element={<ZodRegistrationForm />} />
        {/* Dashboard con su propio layout anidado */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index          element={<Overview />} />
          <Route path="analytics"  element={<Analytics />} />
          <Route path="settings"   element={<SettingsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
} 
