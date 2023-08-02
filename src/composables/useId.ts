// reload the app if error ts(6307)
let id = 0
export function useId() {
  id++
  return id.toString()
}
