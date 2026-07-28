import * as React from 'react'

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className="block text-sm font-medium text-muted-foreground" {...props} />
}

