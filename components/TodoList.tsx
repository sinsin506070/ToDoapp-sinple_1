'use client'

import { Todo } from '@/app/page'
import TodoItem from './TodoItem'

interface TodoListProps {
  todos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TodoList({
  todos,
  onToggle,
  onDelete,
}: TodoListProps) {
  const activeTodos = todos.filter((t) => !t.completed)
  const completedTodos = todos.filter((t) => t.completed)

  return (
    <div className="space-y-4">
      {activeTodos.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
            実行中のタスク
          </h2>
          <div className="space-y-2 bg-white rounded-xl shadow-md p-4">
            {activeTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      )}

      {completedTodos.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
            完了したタスク
          </h2>
          <div className="space-y-2 bg-gray-50 rounded-xl shadow-sm p-4 border border-gray-200">
            {completedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
