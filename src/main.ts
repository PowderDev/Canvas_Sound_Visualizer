import draw5 from "./drawStyles/draw5"
import { getHueBrightness } from "./helpers"
import "./style.css"

let audioSource: MediaElementAudioSourceNode
let analyser: AnalyserNode

const container = document.querySelector(".container")!
const canvas = document.querySelector("canvas")!
canvas.width = container.clientWidth
canvas.height = container.clientHeight
const ctx = canvas.getContext("2d")!

canvas.addEventListener("click", main)

function main() {
  const audio = document.querySelector("audio")!
  const audioCtx = new AudioContext()

  audio.volume = 0.05

  audio.play()
  audioSource = audioCtx.createMediaElementSource(audio)
  analyser = audioCtx.createAnalyser()

  audioSource.connect(analyser)
  analyser.connect(audioCtx.destination)
  analyser.fftSize = 256

  const bufferLength = analyser.frequencyBinCount
  const dataArray = new Uint8Array(bufferLength)

  const barWidth = 10 || canvas.width / bufferLength
  let barHeight: number

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    analyser.getByteFrequencyData(dataArray)

    draw5(bufferLength, barWidth, barHeight, dataArray, audio.volume, ctx, canvas)

    requestAnimationFrame(animate)
  }

  animate()
}
