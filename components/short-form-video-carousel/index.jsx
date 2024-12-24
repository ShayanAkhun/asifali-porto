import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import '../Long Form Video carousel/base.css'
import '../Long Form Video carousel/sandbox.css'
import '../Long Form Video carousel/embla.css'

const OPTIONS = { dragFree: true  }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const ShortFormCarousel = () => (
  <>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </>
)

export default ShortFormCarousel ;