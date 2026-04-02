'use client'

import { useState, useEffect } from 'react'
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'

export interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [mounted, setMounted] = useState(false)

  // ローカルストレージから復元
  useEffect(() => {
    const saved = localStorage.getItem('todos')
    if (saved) {
      try {
        const parsedTodos = JSON.parse(saved).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
        }))
        setTodos(parsedTodos)
      } catch (error) {
        console.error('Failed to parse todos:', error)
      }
    }
    setMounted(true)
  }, [])

  // ローカルストレージに保存
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }, [todos, mounted])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
    }
    setTodos([newTodo, ...todos])
    // 追加したタスクを通知
    showNotification(`「${text}」を追加しました`)
  }

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  const deleteTodo = (id: string) => {
    const todoToDelete = todos.find((t) => t.id === id)
    setTodos(todos.filter((todo) => todo.id !== id))
    if (todoToDelete) {
      showNotification(`「${todoToDelete.text}」を削除しました`)
    }
  }

  const showNotification = (message: string) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('ToDoアプリ', {
        body: message,
        icon: '✓',
      })
    }
  }

  const requestNotificationPermission = async () => {
    if ('Notification' in window && Notification.permission === 'default') {
      await Notification.requestPermission()
    }
  }

  if (!mounted) {
    return null
  }

  const completedCount = todos.filter((t) => t.completed).length
  const totalCount = todos.length

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">ToDoアプリ</h1>
          <p className="text-gray-600">シンプルにタスク管理</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-600">タスク進度</p>
              <p className="text-2xl font-bold text-blue-600">
                {completedCount} / {totalCount}
              </p>
            </div>
            <button
              onClick={requestNotificationPermission}
              className="text-sm px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
            >
              🔔 通知を有効
            </button>
          </div>
        </div>

        <TodoForm onAdd={addTodo} />

        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />

        {todos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              タスクを追加して始めましょう✨
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
