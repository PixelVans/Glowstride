export const settings = {

    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
   
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
        {
            breakpoint: 10000,
            settings: {
                slidesToShow: 6,
              slidesToScroll: 4,
              autoplay: false,
              infinite: true,
              arrows: true,
              autoplaySpeed: 10000,
            }
        },
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              autoplay: false,
                slidesToScroll: 2,
              initialSlide: 2,
              arrows: true,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
            }
        }
    ]
}
