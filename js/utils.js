export const slct = (selector) => document.querySelector(selector)
export const secondsToMinutes = (sec) => {
  return `${Math.floor(sec / 60)}:${Math.round(sec % 60).toString().padStart(2, `0`)}`
}
