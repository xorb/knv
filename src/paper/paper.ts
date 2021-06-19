import { ShapeObject } from "./shapes/rect"
import EventsManager from "./events-manager"

class Paper {
  public id: string
  canvas: HTMLCanvasElement
  canvasObjects: ShapeObject[]
  activeObject: ShapeObject | null
  ctx: CanvasRenderingContext2D
  eventsManager: EventsManager
  hitObject: ShapeObject | null

  constructor(id: string) {
    this.id = id
    this.canvas = document.getElementById("canvas") as HTMLCanvasElement
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D
    this.canvasObjects = []
    this.eventsManager = new EventsManager(this)
    this.activeObject = null
    this.hitObject = null
  }

  public getCanvasId(): string {
    return this.id
  }

  public getCanvas(): HTMLCanvasElement {
    return this.canvas
  }

  public getContext(): CanvasRenderingContext2D {
    return this.ctx
  }
  public getObjectCount(): number {
    return this.canvasObjects.length
  }
  public setHitObject(object: ShapeObject) {
    this.hitObject = object
  }
  public getHitObject() {
    return this.hitObject
  }

  public setActiveObject(object: ShapeObject) {
    this.activeObject = object
    object.isActive = true
  }
  public getActiveObject() {
    return this.activeObject
  }

  public clearActiveObject() {
    this.activeObject = null
    for (const canvasObject of this.canvasObjects) {
      canvasObject.isActive = false
    }
  }

  public toDataURL(type: string) {
    return this.canvas.toDataURL(type)
  }

  public remove(object: ShapeObject) {
    const index = this.canvasObjects.indexOf(object)
    if (index !== -1) {
      this.canvasObjects.splice(index, 1)
      this.reDrawObjects()
    }
    return this
  }

  public add(object: ShapeObject) {
    object.render(this.ctx)
    object.options.zIndex = this.getObjectCount() + 1
    this.canvasObjects.push(object)
  }

  public reDrawObjects() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for (const canvasObject of this.canvasObjects) {
      canvasObject.render(this.ctx)
    }
  }
}

export default Paper
