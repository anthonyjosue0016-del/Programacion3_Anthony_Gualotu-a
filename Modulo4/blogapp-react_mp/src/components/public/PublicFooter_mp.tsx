// src/components/public/PublicFooter_mp.tsx
export default function PublicFooter() {
  return (
    <footer className="border-t p-4 text-center text-sm text-muted-foreground">
      Â© {new Date().getFullYear()} BlogApp
    </footer>
  )
}
