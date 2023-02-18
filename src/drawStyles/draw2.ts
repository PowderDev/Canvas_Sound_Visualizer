import { getHueBrightness } from "../helpers"

export default function draw2(
  bufferLength: number,
  barWidth: number,
  barHeight: number,
  dataArray: Uint8Array,
  volume: number,
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) {
  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * (1 + (1 - volume)) * 1.2
    ctx.save()
    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.rotate(i * 4.184)
    const hue = 120 + i * 0.05
    let brightness = getHueBrightness(barHeight)
    ctx.fillStyle = `hsl(${hue},100%, ${brightness}%)`
    ctx.fillRect(15, 0, barWidth, barHeight > 270 ? 270 : barHeight)
    ctx.restore()
  }
}
