export interface ObjectOptions {
  id: string
  left: number
  top: number
  fill: string
  type: string
  width: number
  height: number
  strokeStyle: string
  strokeWidth: number
  zIndex: number
}

export interface RectOptions extends ObjectOptions {}
export interface ImageOptions extends ObjectOptions {}
export interface TextOptions extends ObjectOptions {
  font: string
  fontSize: number
  fontWeight: string
  lineHeight: number
  baseline: string
  text: string
}
export interface CircleOptions extends ObjectOptions {
  radius: number
}
export interface Coordinate {
  x: number
  y: number
}

export interface IObject {
  isActive: boolean
  options: ObjectOptions
  drawBorder: (ctx: CanvasRenderingContext2D) => void
}
