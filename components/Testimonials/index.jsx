import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import '../Testimonials/base.css'
import '../Testimonials/sandbox.css'
import '../Testimonials/embla.css'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const Testimonials = () => (
  <>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </>
)

export default Testimonials