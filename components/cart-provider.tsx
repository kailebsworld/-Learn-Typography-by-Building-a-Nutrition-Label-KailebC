'use client'

import { createContext, useContext, useEffect, useReducer, type Dispatch } from 'react'

type CartItem = {
  sku: string
  title: string
  price: number
  quantity: number
  image?: string
  variant?: string
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

type CartAction =
  | { type: 'ADD'; item: CartItem }
  | { type: 'REMOVE'; sku: string }
  | { type: 'INCREMENT'; sku: string }
  | { type: 'DECREMENT'; sku: string }
  | { type: 'TOGGLE'; value?: boolean }
  | { type: 'RESET'; payload?: CartState }

const CartContext = createContext<{
  state: CartState
  dispatch: Dispatch<CartAction>
} | null>(null)

const STORAGE_KEY = '621-archival-cart'

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find((item) => item.sku === action.item.sku)
      const items = existing
        ? state.items.map((item) =>
            item.sku === action.item.sku
              ? { ...item, quantity: item.quantity + action.item.quantity }
              : item
          )
        : [...state.items, action.item]
      return { ...state, items }
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter((item) => item.sku !== action.sku) }
    case 'INCREMENT':
      return {
        ...state,
        items: state.items.map((item) =>
          item.sku === action.sku ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
    case 'DECREMENT':
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.sku === action.sku ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
          )
          .filter((item) => item.quantity > 0)
      }
    case 'TOGGLE':
      return { ...state, isOpen: action.value ?? !state.isOpen }
    case 'RESET':
      if (action.payload) {
        return action.payload
      }
      return { items: [], isOpen: false }
    default:
      return state
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false })

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CartState
        dispatch({ type: 'RESET', payload: { ...parsed, isOpen: false } })
      } catch (error) {
        console.error('Failed to parse cart from storage', error)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const payload = JSON.stringify({ items: state.items, isOpen: false })
    window.localStorage.setItem(STORAGE_KEY, payload)
  }, [state.items])

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}

export type { CartItem, CartState }
