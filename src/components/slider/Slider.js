import { useState, useEffect } from 'react'
import './Slider.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faQuoteLeftAlt, faQuoteRightAlt } from '@fortawesome/free-solid-svg-icons'
import { sliderData } from './slider-data'


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide ===  0 ? slideLength - 1 : currentSlide - 1)
    }

    const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto()
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

  return (
    <div className="slider">
        <FontAwesomeIcon icon={faArrowLeft} className='arrow prev' onClick={prevSlide}/>
        <FontAwesomeIcon icon={faArrowRight} className='arrow next' onClick={nextSlide}/>

        {sliderData.map((slide, index) => {
            return(
                <div 
                className={ index === currentSlide ? 'slide current' : 'slide'} 
                key={index}
                >
                    {index === currentSlide && (
                        <>
                            <img src={slide.image} alt="slide" />
                            <div className="content">
                                <h2>{slide.heading === '' ? '' : <><FontAwesomeIcon icon={faQuoteLeftAlt} />{' '}{slide.heading}</>}</h2>
                                <h2><b>{slide.desc}</b>{slide.desc === '' ? '' : <>{' '}<FontAwesomeIcon icon={faQuoteRightAlt} /></>}</h2>
                            </div>
                        </>
                    )}
                </div>
            )
        })}
    </div>
  )
}

export default Slider