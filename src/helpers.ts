export const getHueBrightness = (barHeight: number, max = 80, min = 15) => {
  let brightness = barHeight / 3

  if (brightness > max) {
    brightness = max
  } else if (brightness < min) {
    brightness = min
  }

  return brightness
}
