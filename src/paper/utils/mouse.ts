import { Coordinate } from "../interfaces"
import { ShapeObject } from "../shapes/rect"

export function windowToCanvas(event: MouseEvent, canvas: HTMLCanvasElement) {
  const boundingBox = canvas.getBoundingClientRect()
  return {
    x: event.clientX - boundingBox.left * (canvas.width / boundingBox.width),
    y: event.clientY - boundingBox.top * (canvas.height / boundingBox.height),
  }
}

export function clampToCanvas(
  coordinate: Coordinate,
  object: ShapeObject,
  canvas: HTMLCanvasElement,
  dragHold: Coordinate
) {
  let options = object.options,
    minX = 0,
    minY = 0,
    maxX = canvas.width - options.width,
    maxY = canvas.height - options.height,
    posX,
    posY
  posX = coordinate.x - dragHold.x
  posX = posX < minX ? minX : posX > maxX ? maxX : posX
  posY = coordinate.y - dragHold.y
  posY = posY < minY ? minY : posY > maxY ? maxY : posY

  return {
    x: posX,
    y: posY,
  }
}

export function isTargetHit(object: ShapeObject, coordinate: Coordinate) {
  const options = object.options
  return (
    options.left <= coordinate.x &&
    coordinate.x <= options.left + options.width &&
    options.top <= coordinate.y &&
    coordinate.y <= options.top + options.height
  )
}

export function getTargetObject(
  coordinate: Coordinate,
  canvasObjects: ShapeObject[]
) {
  const matchObjects: any[] = []
  for (const canvasObject of canvasObjects) {
    const isHit = isTargetHit(canvasObject, coordinate)
    if (isHit) {
      matchObjects.push(canvasObject)
    }
  }
  return matchObjects[matchObjects.length - 1]
}
