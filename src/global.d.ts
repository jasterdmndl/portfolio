declare module '*.css'
declare module '*.scss'
declare module '*.png'
declare module '*.jpg'
declare module '*.svg'
declare module '*?raw'
declare module '*.svg?raw'

interface Window {
  __addTech?: (name: string) => void
}
