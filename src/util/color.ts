export interface IColor {
  light: string
  main: string
  dark: string
}

const hexToRgb = (hexValue: string): number[] => {
  const hex = hexValue.replace('#', '')
  const r = Number.parseInt(hex.substring(0, 2), 16)
  const g = Number.parseInt(hex.substring(2, 4), 16)
  const b = Number.parseInt(hex.substring(4, 6), 16)
  return [r, g, b]
}

export const getColor = (colorValue = '#6C65E5'): IColor => {
  let r: number
  let g: number
  let b: number

  if (colorValue.startsWith('#')) {
    [r, g, b] = hexToRgb(colorValue)
  } else {
    const tempEl = document.createElement('div')
    tempEl.style.color = colorValue
    document.body.appendChild(tempEl)
    const computedColor = window.getComputedStyle(tempEl).color
    document.body.removeChild(tempEl)
    const matches = computedColor.match(/rgba?\((\d+), (\d+), (\d+)/)
    if (matches) {
      [r, g, b] = matches.slice(1).map(Number.parseFloat)
    } else {
      [r, g, b] = [0, 0, 0]
    }
  }

  const rgb = `${r}, ${g}, ${b}`
  return {
    light: `rgba(${rgb}, .1)`,
    main: `rgba(${rgb}, .5)`,
    dark: `rgba(${rgb}, 1)`
  }
}
