// src/components/private/UserFormDialog.tsx
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { createUser, updateUser } from '@/api/users.api'
import type { User, CreateUserPayload } from '@/types/user.types'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const createSchema = z.object({
  username: z.string().min(2, 'Mínimo 2 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
})

const editSchema = z.object({
  username: z.string().min(2, 'Mínimo 2 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().optional().refine((p) => !p || p.length >= 6, { message: 'Mínimo 6 caracteres' }),
})

type CreateForm = z.infer<typeof createSchema>
type EditForm = z.infer<typeof editSchema>

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  user: User | null
  onSaved: () => void
}

export default function UserFormDialog({ open, onOpenChange, user, onSaved }: Props) {
  const isEdit = Boolean(user)
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm<CreateForm | EditForm>({ resolver: zodResolver(isEdit ? editSchema : createSchema) })

  useEffect(() => {
    reset({ username: user?.username ?? '', email: user?.email ?? '', password: '' })
  }, [user, open, reset])

  const onSubmit = async (values: CreateForm | EditForm) => {
    if (isEdit && user) {
      const payload: { username?: string; email?: string; password?: string } = {
        username: (values as EditForm).username,
        email: (values as EditForm).email,
      }
      const pw = (values as EditForm).password
      if (pw) payload.password = pw
      await updateUser(user.id, payload)
    } else {
      const payload: CreateUserPayload = values as CreateForm
      await createUser(payload)
    }
    onOpenChange(false)
    onSaved()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEdit ? 'Editar usuario' : 'Nuevo usuario'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <Label htmlFor="username">Usuario</Label>
            <Input id="username" {...register('username')} />
            {errors.username && <p className="text-sm text-destructive">{errors.username.message}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" {...register('email')} />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="password">Contraseña{isEdit ? ' (dejar en blanco para mantener)' : ''}</Label>
            <Input id="password" type="password" {...register('password')} />
            {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Guardando...' : 'Guardar'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
// src/components/private/UserFormDialog.tsx
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { createUser, updateUser } from '@/api/users.api'
import type { User } from '@/types/user.types'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const schema = z.object({
  username: z.string().min(3, 'Mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.union([z.string().min(6, 'Mínimo 6 caracteres'), z.literal('')]),
})
type FormValues = z.infer<typeof schema>

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  user: User | null
  onSaved: () => void
}

export default function UserFormDialog({ open, onOpenChange, user, onSaved }: Props) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm<FormValues>({ resolver: zodResolver(schema) })

  useEffect(() => {
    reset({ username: user?.username ?? '', email: user?.email ?? '', password: '' })
  }, [user, open, reset])

  const onSubmit = async (values: FormValues) => {
    if (user) {
      const payload = { username: values.username, email: values.email, ...(values.password && { password: values.password }) }
      await updateUser(user.id, payload)
    } else {
      await createUser({ username: values.username, email: values.email, password: values.password })
    }
    onOpenChange(false)
    onSaved()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{user ? 'Editar usuario' : 'Nuevo usuario'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <Label htmlFor="username">Usuario</Label>
            <Input id="username" {...register('username')} />
            {errors.username && <p className="text-sm text-destructive">{errors.username.message}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register('email')} />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder={user ? 'Dejar en blanco para no cambiarla' : undefined}
              {...register('password')}
            />
            {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Guardando...' : 'Guardar'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}