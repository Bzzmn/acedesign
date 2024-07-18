import { useRef, useEffect } from 'react';


export default function Carousel ({slides}) {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const params = {
      speed: 1500,
      injectStyles: [`
        .swiper-pagination-bullet-active{
          background: #131313;
        }

      `],
    }

    Object.assign(swiperElRef.current, params)
    swiperElRef.current.initialize();
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail;
    });

    swiperElRef.current.addEventListener('swiperslidechange', (e) => {


    });
  }, []);

  return (
    <swiper-container 
      id="headerSlider"
      ref={swiperElRef}
      slides-per-view="1"
      navigation="false"
      pagination="true"
      pagination-clickable="true"
      autoplay-delay="8000" 
      autoplay-disable-on-interaction="false"
      loop="true"
      init="false"
    >


      {slides.map( (slide, index) => (
            <swiper-slide  key={index}>
              <img loading="lazy" src={slide} alt="image of our amazing work" />
            </swiper-slide>
      ))} 
    </swiper-container>
  );
};


