import type { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react'

export function Table(props: TableHTMLAttributes<HTMLTableElement>) {
  return <table className="min-w-full divide-y divide-border" {...props} />
}

export function TableHeader(props: HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className="bg-muted text-left text-sm font-semibold text-muted-foreground" {...props} />
}

export function TableBody(props: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className="divide-y divide-border" {...props} />
}

export function TableRow(props: HTMLAttributes<HTMLTableRowElement>) {
  return <tr {...props} />
}

export function TableHead(props: ThHTMLAttributes<HTMLTableCellElement>) {
  return <th className="px-4 py-3 text-sm font-medium" {...props} />
}

export function TableCell(props: TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className="px-4 py-3 text-sm" {...props} />
}

