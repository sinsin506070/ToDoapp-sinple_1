'use client'

import { Todo } from '@/app/page'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
}: TodoItemProps) {
  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-lg transition ${
        todo.completed
          ? 'bg-gray-100 border border-gray-200'
          : 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 hover:border-blue-300'
      }`}
    >
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition flex items-center justify-center ${
          todo.completed
            ? 'bg-green-500 border-green-500'
            : 'border-gray-300 hover:border-green-400'
        }`}
      >
        {todo.completed && (
          <span className="text-white text-sm">✓</span>
        )}
      </button>

      <span
        className={`flex-1 text-lg font-medium transition ${
          todo.completed
            ? 'text-gray-500 line-through'
            : 'text-gray-800'
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 px-3 py-2 text-red-500 hover:bg-red-50 rounded-lg transition text-sm font-medium"
      >
        削除
      </button>
    </div>
  )
}
