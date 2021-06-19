import { CircleOptions } from "../interfaces"
import Object from "./object"

class Circle extends Object<CircleOptions> {
  constructor(options: CircleOptions) {
    const updatedOptions = {
      ...options,
      width: options.radius * 2,
      height: options.radius * 2,
    }
    super(updatedOptions)
  }
  public render(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.arc(
      this.options.left + this.options.radius,
      this.options.top + this.options.radius,
      this.options.radius,
      0,
      2 * Math.PI,
      false
    )
    ctx.fillStyle = this.options.fill
    ctx.fill()
    if (this.isActive) {
      this.drawBorder(ctx)
    }
  }
}

export default Circle
