import { getHueBrightness } from "../helpers"

export default function draw5(
  bufferLength: number,
  barWidth: number,
  barHeight: number,
  dataArray: Uint8Array,
  volume: number,
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) {
  ctx.lineWidth = 3
  ctx.globalCompositeOperation = "difference"

  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * (1 + (1 - volume)) * 1.4
    ctx.save()
    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.rotate(i * 3.2)
    const hue = i * 0.1
    ctx.strokeStyle = `hsl(${hue},100%,${barHeight / 3}%)`

    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(0, barHeight)
    ctx.stroke()

    if (i > bufferLength * 0.5) {
      ctx.beginPath()

      let radius = barHeight * 2

      if (radius > 120) radius = 120
      else if (radius < 60) radius = 60 * Math.random()

      ctx.arc(0, 0, radius, 0, Math.PI * 2)

      const brightness = getHueBrightness(barHeight * 10 + 10, 80, 35)

      ctx.strokeStyle = `hsl(${hue},100%,${brightness}%)`
      ctx.stroke()
    }

    ctx.restore()
  }
}
