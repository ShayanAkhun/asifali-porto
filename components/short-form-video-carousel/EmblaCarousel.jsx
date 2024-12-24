import React from 'react';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from './EmblaCarouselSelectedSnapDisplay';
import useEmblaCarousel from 'embla-carousel-react';

const EmblaCarousel = (props) => {
  const { options } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const videoLinks = [
    "https://www.youtube.com/embed/hdBI2gvVxzM", 
    "https://www.youtube.com/embed/PMQwJqHSKqw", 
    "https://www.youtube.com/embed/-uaVPnZNYPM"  
];

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);
  

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {videoLinks.map((videoLink, index) => (
           
            <div className="embla__slide" key={index}   style={{
                overflow: 'hidden',
                width: '900px',
                height: '550px',
                position: 'relative',
              }}>
            <div className="embla__slide__number">{index + 1}</div>
              <iframe
                src={videoLink}
                title={`Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                ></iframe>
                </div>
          
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </section>
  );
};

export default EmblaCarousel;
