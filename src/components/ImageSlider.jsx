import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, DashLg } from "react-bootstrap-icons";

const sliderStyles = {
    height: "100%",
    position: "relative"
}

const slideStyles = {
    width: '100%',
    height: '100%',
    //borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: "cover",
    //backgroundImage: `url(${slides[currentIndex].url})`
}

const leftArrowStyles = {
    position: "absolute",
    top: '50%',
    transform: 'translate(0, -50%)', 
    left: "32px",
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: "pointer"
}

const rightArrowStyles = {
    position: "absolute",
    top: '50%',
    transform: 'translate(0, -50%)', 
    right: "32px",
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: "pointer"
}
const dotsContainerContainerStyles = {
    position: "absolute",
    bottom: "20px",
    width: "100%"
}

const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
}

const dotStyles = {
    margin: '0 3px',
    cursor: 'pointer',
    fontSize: '25px',
    color: "white",
    zIndex: 1
}

const slidesContainerStyles = {
    display: "flex",
    height: "100%",
    transition: "transform ease-out 0.3s",
};

const slidesContainerOverflowStyles = {
    overflow: "hidden",
    height: "100%",
};

const ImageSlider = ({slides, parentWidth}) => {
    const[currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        console.log(currentIndex)
    }, [currentIndex])


    const goToNext = useCallback( ()=> {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
        console.log(slides[newIndex].url)
        //console.log(currentIndex)
    }, [currentIndex, slides])

    const timeRef = useRef(null)

    useEffect(()=>{
        if(timeRef.current) {
            clearTimeout(timeRef.current)
        }

        console.log("use effect")
        timeRef.current = setTimeout(() => {
            goToNext();
        }, 8000);

        return () => clearTimeout(timeRef.current);
    }, [goToNext])

    const getSlideStylesWithBackground = (slideIndex) => ({
        ...slideStyles,
        backgroundImage: `url(${slides[slideIndex].url})`,
        width: `${parentWidth}px`,
    });

    const getSlidesContainerStylesWithWidth = () => ({
        ...slidesContainerStyles,
        width: parentWidth * slides.length,
        transform: `translateX(${-(currentIndex * parentWidth)}px)`,
    });

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex)
        //console.log(currentIndex)
    }

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex)
    }

     return(
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}><ChevronLeft/></div>
            <div style={rightArrowStyles} onClick={goToNext}><ChevronRight/></div>
 {/*           <div style={slideStyles}></div>                               */}
            <div style={slidesContainerOverflowStyles}>
                <div style={getSlidesContainerStylesWithWidth()}>
                    {slides.map((_, slideIndex) => (
                        <div
                        key={slideIndex}
                        style={getSlideStylesWithBackground(slideIndex)}
                        ></div>
                    ))}
                </div>
            </div>
            <div style={dotsContainerContainerStyles}>
                <div style={dotsContainerStyles}>
                    {slides.map((slide, slideIndex) =>(
                        <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}><DashLg/></div>
                    ))}
                </div>
            </div>
        </div>
     )
}

export default ImageSlider;