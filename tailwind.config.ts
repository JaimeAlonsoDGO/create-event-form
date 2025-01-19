import type { Config } from 'tailwindcss'
import { COLORS } from './src/constants/colors'

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...COLORS,
      },
    },
  },
}

export default config
