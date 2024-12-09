export function Footer() {
    return (
      <footer className="border-t py-6 md:py-0">
        <div className="container flex h-14 items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }
  
  