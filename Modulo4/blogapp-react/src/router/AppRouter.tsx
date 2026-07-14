// src/router/AppRouter.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicLayout from '@/layouts/PublicLayout'
import DashboardLayout from '@/layouts/DashboardLayout'
import NotFoundPage from '@/pages/NotFoundPage'
import { publicRoutes } from './publicRoutes'
import { privateRoutes } from './privateRoutes'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>{publicRoutes}</Route>
        <Route element={<DashboardLayout />}>{privateRoutes}</Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}