'use client'

import { useState } from 'react'

interface TodoFormProps {
  onAdd: (text: string) => void
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onAdd(input.trim())
      setInput('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="新しいタスクを入力..."
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition shadow-md hover:shadow-lg"
        >
          追加
        </button>
      </div>
    </form>
  )
}
