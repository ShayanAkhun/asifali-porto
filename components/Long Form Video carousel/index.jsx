import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import '../Long Form Video carousel/base.css'
import '../Long Form Video carousel/sandbox.css'
import '../Long Form Video carousel/embla.css'

const OPTIONS = { dragFree: true ,slidesToShow: 4, slidesToScroll: 1, align: 'start',skipSnaps: false, }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const LongFormCarousel = () => (
  <>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </>
)

export default LongFormCarousel ;