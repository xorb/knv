import Object from "./object"
import { TextOptions } from "../interfaces"

class Text extends Object<TextOptions> {
  constructor(options: TextOptions) {
    const updatedOptions = {
      ...options,
      height: options.fontSize * options.lineHeight,
    }

    super(updatedOptions)
  }

  public getLineHeight() {
    return this.options.fontSize * this.options.lineHeight
  }
  public render(ctx: CanvasRenderingContext2D) {
    ctx.font = this.options.fontSize + "px " + this.options.font
    ctx.fillStyle = this.options.fill
    ctx.textBaseline = "top"
    var measure = ctx.measureText(this.options.text)
    var width = measure.width
    var height = this.options.height || this.getLineHeight()
    this.options.width = width
    this.options.height = height
    ctx.fillText(this.options.text, this.options.left, this.options.top)
    if (this.options.strokeWidth) {
      ctx.strokeRect(
        this.options.left,
        this.options.top,
        this.options.width,
        this.options.height
      )
    }
    if (this.isActive) {
      this.drawBorder(ctx)
    }
  }
}
export default Text
