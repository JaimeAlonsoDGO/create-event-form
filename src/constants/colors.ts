export type ColorShades = {
  [key: number]: string
}

export type Colors = {
  dark: ColorShades
  light: ColorShades
  purple: ColorShades
  green: ColorShades
  red: ColorShades
}

export type ColorKeys = keyof Colors

const dark: ColorShades = {
  100: '#2F2F31',
  200: '#1D1D1F',
  300: '#141416',
  400: '#000000',
}

const light: ColorShades = {
  100: '#FFFFFF',
  200: '#A3A3A3',
}

const purple: ColorShades = {
  100: '#4323FF',
}
const green: ColorShades = {
  100: '#4FF6B1',
}

const red: ColorShades = {
  100: '#E74C3C',
  200: '#FF6A55',
}

export const COLORS: Colors = {
  dark,
  light,
  purple,
  green,
  red,
}
