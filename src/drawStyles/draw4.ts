export default function draw4(
  bufferLength: number,
  barWidth: number,
  barHeight: number,
  dataArray: Uint8Array,
  volume: number,
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) {
  ctx.shadowOffsetX = 2
  ctx.shadowOffsetY = 5
  ctx.shadowBlur = 0
  ctx.shadowColor = "white"

  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * (1 + (1 - volume)) * 1.35
    ctx.save()
    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.rotate(i * bufferLength * 3.991)
    const hue = 250 + i * 2
    ctx.fillStyle = `hsl(${hue},100%,${50}%)`

    ctx.beginPath()
    ctx.arc(10, barHeight, barHeight / 10, 0, Math.PI * 2)
    ctx.arc(10, barHeight / 1.5, barHeight / 20, 0, Math.PI * 2)
    ctx.arc(10, barHeight / 2, barHeight / 30, 0, Math.PI * 2)
    ctx.arc(10, barHeight / 3, barHeight / 40, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }
}
