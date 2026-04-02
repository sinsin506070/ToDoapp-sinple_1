import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'シンプルToDoアプリ',
  description: 'タスク管理をシンプルに',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
