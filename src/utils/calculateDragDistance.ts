import { ref } from 'vue'

export const useCalculateDragDistance = () => {
  const pointDistance = ref<number>(0)
  const xDistance = ref<number>(0)
  const yDistance = ref<number>(0)
  const isMouseDown = ref<boolean>(false)

  const init = (el: HTMLElement | null) => {
    if (!el) return
    let startX = 0
    let startY = 0
    el.addEventListener('mousedown', (e) => {
      isMouseDown.value = true
      startX = e.clientX
      startY = e.clientY
    })

    window.addEventListener('mousemove', (e) => {
      if (!isMouseDown.value) return
      const dx = e.clientX - startX
      const dy = e.clientY - startY
      xDistance.value = dx
      yDistance.value = dy

      pointDistance.value = Math.sqrt(dx * dx + dy * dy)
    })
    window.addEventListener('mouseup', () => {
      isMouseDown.value = false
    })
  }

  return {
    pointDistance,
    xDistance,
    yDistance,
    init,
    isMouseDown,
  }
}
