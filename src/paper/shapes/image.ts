import { ImageOptions } from "../interfaces"
import Object from "./object"

class Image extends Object<ImageOptions> {
  img: HTMLImageElement
  constructor(options: ImageOptions, img: HTMLImageElement) {
    super(options)
    this.img = img
  }
  public render(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.img,
      this.options.left,
      this.options.top,
      this.options.width,
      this.options.height
    )
    if (this.isActive) {
      this.drawBorder(ctx)
    }
  }
}

export default Image
