export default function draw(
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
    ctx.rotate((i * Math.PI * 4) / bufferLength)

    // const red = (i * barHeight) / 20
    // const green = i
    // const blue = barHeight / 2

    // ctx.fillStyle = `rgb(${red},${green},${blue})`

    const hue = i * 2
    ctx.fillStyle = `hsl(${hue},100%,50%)`
    ctx.fillRect(15, 0, barWidth, barHeight)
    ctx.restore()
  }
}
