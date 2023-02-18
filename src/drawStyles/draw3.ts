export default function draw3(
  bufferLength: number,
  barWidth: number,
  barHeight: number,
  dataArray: Uint8Array,
  volume: number,
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) {
  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * (1 + (1 - volume)) * 2
    ctx.save()
    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.rotate(i * 4)
    const hue = 120 + i * 0.05
    ctx.fillStyle = `hsl(${hue},100%,${50}%)`
    ctx.beginPath()
    const y = barHeight / 2 > 450 ? 450 : barHeight / 2
    ctx.arc(50, y, y, 0, Math.PI / 4)
    ctx.fill()
    ctx.stroke()
    ctx.restore()
  }
}
