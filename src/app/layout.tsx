import '@/styles/globals.scss'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"dark"}>{children}</body>
    </html>
  )
}
