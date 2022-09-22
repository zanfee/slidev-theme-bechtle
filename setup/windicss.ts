import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'

export default defineWindiSetup(() => ({
  extract: {
    include: [
      resolve(__dirname, '../**/*.{vue,ts}'),
    ],
  },
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  theme: {
    extend: {
      colors: {
        bechtle: {
          grün: '#008a4f',
          schwarz: '#000000',
          weiß: '#ffffff',
          zukunftsblau: '#155195',
          zukunftsblauHover: '#0f4c7d',
          blattgrün: '#6bc756',
          blattgrünHover: '#50b03a',
          flächengrau: '#dbdcde',
          hellgrau: '#f7f7f7',
          grau: '#acacac',
          wintergrau: '#6b7a83',
          wintergrauHover: '#566761',
          knallgelb: '#fddc03',
          orange: '#f5960e',
          karminrot: '#db6254',
          karminrotHover: '#c44b4b',
          zartblau: '#87d7e0',
          taubenblau: '#6c98b5',
          mittelgrau: '#969986',
          dunkelgrau: '#4b4d3b',
          mausgrau: '#9f8f7f',
          sandbeige: '#d7c2b1',
          saharabeige: '#f0C072',
          flamingo: '#db6254',
          shamrock: '#36ceaf',
        },
      },
    },
  },
}))
