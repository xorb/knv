import Object from "./object"
import { ObjectOptions, RectOptions } from "../interfaces"

class Rect extends Object<RectOptions> {
  constructor(options: ObjectOptions) {
    super(options)
  }
  public render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.options.fill
    ctx.fillRect(
      this.options.left,
      this.options.top,
      this.options.width,
      this.options.height
    )
    ctx.strokeStyle = this.options.strokeStyle
    ctx.lineWidth = this.options.strokeWidth
    if (this.options.strokeWidth) {
    }
    if (this.isActive) {
      this.drawBorder(ctx)
    }
  }
}

export type ShapeObject = Rect

export default Rect
