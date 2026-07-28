import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { createUser, updateUser } from '@/api/users.api'
import { useToastStore } from '@/store/toast.store'
import type { User, CreateUserPayload } from '@/types/user.types'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const createSchema = z.object({
  username: z.string().min(3, 'MÃ­nimo 3 caracteres'),
  email: z.string().email('Email invÃ¡lido'),
  password: z.string().min(6, 'MÃ­nimo 6 caracteres'),
})

const editSchema = z.object({
  username: z.string().min(3, 'MÃ­nimo 3 caracteres'),
  email: z.string().email('Email invÃ¡lido'),
  password: z.string().optional().refine((p) => !p || p.length >= 6, { message: 'MÃ­nimo 6 caracteres' }),
})

type CreateForm = z.infer<typeof createSchema>
type EditForm = z.infer<typeof editSchema>

type FormValues = CreateForm | EditForm

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  user: User | null
  onSaved: () => void
}

export default function UserFormDialog({ open, onOpenChange, user, onSaved }: Props) {
  const isEdit = Boolean(user)
  const showToast = useToastStore((s) => s.show)
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm<FormValues>({ resolver: zodResolver(isEdit ? editSchema : createSchema) })

  useEffect(() => {
    reset({ username: user?.username ?? '', email: user?.email ?? '', password: '' })
  }, [user, open, reset])

  const onSubmit = async (values: FormValues) => {
    if (isEdit && user) {
      const payload: { username?: string; email?: string; password?: string } = {
        username: (values as EditForm).username,
        email: (values as EditForm).email,
      }
      const pw = (values as EditForm).password
      if (pw) payload.password = pw
      await updateUser(user.id, payload)
      showToast('Usuario actualizado', 'success')
    } else {
      const payload: CreateUserPayload = values as CreateForm
      await createUser(payload)
      showToast('Usuario creado', 'success')
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
            <Input id="email" type="email" {...register('email')} />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="password">ContraseÃ±a{isEdit ? ' (dejar en blanco para mantener)' : ''}</Label>
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

