import { useEffect } from "react"
import Paper, { Rect, Circle, Text, Image as CoreImage } from "./paper"

function App() {
  useEffect(() => {
    const paper = new Paper("canvas")
    const rect = new Rect({
      fill: "#f1c40f",
      height: 100,
      width: 100,
      id: "1",
      left: 0,
      top: 0,
      strokeStyle: "#f1c40f",
      strokeWidth: 1,
      type: "rect",
      zIndex: 1,
    })
    const circle = new Circle({
      radius: 55,
      fill: "#27ae60",
      height: 100,
      width: 100,
      id: "1",
      left: 0,
      top: 0,
      strokeStyle: "#27ae60",
      strokeWidth: 1,
      type: "rect",
      zIndex: 1,
    })
    const text = new Text({
      id: "1",
      height: 100,
      width: 100,
      left: 0,
      top: 0,
      font: "Times New Roman",
      fontSize: 24,
      fontWeight: "normal",
      text: "fly to moon",
      lineHeight: 1.3,
      baseline: "top",
      fill: "black",
      strokeStyle: "",
      strokeWidth: 0,
      type: "text",
      zIndex: 2,
    })
    const image = new Image()
    image.src = "https://i.ibb.co/VQP8cR7/demo5.png"
    image.onload = () => {
      const img = new CoreImage(
        {
          fill: "#f1c40f",
          height: 200,
          width: 200,
          id: "1",
          left: 0,
          top: 0,
          strokeStyle: "#f1c40f",
          strokeWidth: 1,
          type: "rect",
          zIndex: 1,
        },
        image
      )
      paper.add(img)
    }
    paper.add(rect)
    paper.add(circle)
    paper.add(text)
  }, [])
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
      }}
    >
      <canvas
        style={{ background: "#ffffff" }}
        height="500"
        width="800"
        id="canvas"
      ></canvas>
    </div>
  )
}

export default App
