import { defineUnoSetup } from '@slidev/types'
import {
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineUnoSetup(() => ({
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  rules: [
    ['bg-bottom', { 'background-position': 'bottom' }],
  ],
  theme: {
    colors: {
      bechtle: {
        grün: '#008a4f',
        schwarz: '#000000',
        weiß: '#ffffff',
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
        zukunftsblau: '#155195',
        shamrock: '#36ceaf',
      },
    },
  },
}))
