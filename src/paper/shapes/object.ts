import { ObjectOptions, IObject, CircleOptions } from "../interfaces"

class Object<T extends ObjectOptions> {
  options: T
  isActive: boolean
  constructor(options: T) {
    this.isActive = false
    this.options = options
  }
  public drawBorder(ctx: CanvasRenderingContext2D) {
    const borderWidth = 3
    ctx.save()
    ctx.strokeStyle = "skyblue"
    ctx.lineWidth = borderWidth
    ctx.strokeRect(
      this.options.left,
      this.options.top,
      this.options.width,
      this.options.height
    )
    ctx.restore()
  }
  public on() {
    // console.log("ON")
  }
  public set() {
    // console.log("SET")
  }

  public trigger() {
    // console.log("TRIGGER")
  }
  public render(ctx: CanvasRenderingContext2D) {
    throw new TypeError("render() is not implemented.")
  }
}

export default Object
