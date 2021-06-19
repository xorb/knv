import {
  isTargetHit,
  windowToCanvas,
  getTargetObject,
  clampToCanvas,
} from "./utils/mouse"
import Paper from "./paper"
import { ShapeObject } from "./shapes/rect"
import { Coordinate } from "./interfaces"
class EventsManager {
  public isDragging: boolean
  paper: Paper
  dragHold: Coordinate
  constructor(paper: Paper) {
    this.isDragging = false
    this.dragHold = {
      x: 0,
      y: 0,
    }
    this.paper = paper
    this.paper.canvas.addEventListener("mousedown", this, false)
    this.paper.canvas.addEventListener("mousemove", this, false)
  }
  public handleEvent(event: MouseEvent) {
    switch (event.type) {
      case "mousedown":
        this.mouseDownListener(event)
        break
      case "mousemove":
        this.mouseMoveListener(event)
        break
      case "mouseup":
        this.mouseUpListener(event)
        break
    }
    this.paper.reDrawObjects()
  }

  private mouseDownListener(event: MouseEvent) {
    const coordinates = windowToCanvas(event, this.paper.canvas)
    const object = getTargetObject(coordinates, this.paper.canvasObjects)
    this.isDragging = object ? true : false
    this.paper.clearActiveObject()
    if (object) {
      this.mouseDownObject(event, object)
    }

    if (object && this.isDragging) {
      this.dragStartObject(event, object, coordinates, this.dragHold)
    }
    window.addEventListener("mouseup", this, false)
  }

  private mouseMoveListener(event: MouseEvent) {
    const object = this.paper.getHitObject()
    const coordinates = windowToCanvas(event, this.paper.canvas)
    let newObject

    if (this.isDragging && object) {
      this.dragObject(event, object, coordinates, this.dragHold)
    }
  }

  private mouseUpListener(event: MouseEvent) {
    const coordinates = windowToCanvas(event, this.paper.canvas)
    const object = getTargetObject(coordinates, this.paper.canvasObjects)

    if (object && this.isDragging) {
      this.isDragging = false
    }
  }

  private dragObject(
    event: MouseEvent,
    object: ShapeObject,
    coordinate: Coordinate,
    dragHold: Coordinate
  ) {
    const options = object.options
    const position = clampToCanvas(
      coordinate,
      object,
      this.paper.canvas,
      dragHold
    )
    options.left = position.x
    options.top = position.y
  }
  public dragStartObject(
    event: MouseEvent,
    object: ShapeObject,
    coordinate: Coordinate,
    dragHold: Coordinate
  ) {
    dragHold.x = coordinate.x - object.options.left
    dragHold.y = coordinate.y - object.options.top
    window.addEventListener("mousemove", this, false)
  }

  public mouseDownObject(event: MouseEvent, object: ShapeObject) {
    this.paper.setHitObject(object)
    this.paper.setActiveObject(object)
  }
}

export default EventsManager
