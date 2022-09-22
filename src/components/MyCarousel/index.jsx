import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    swipeToSlide: true,
    edgeFriction: 0.15,
};

const images = [{ id: 1, src: '../../assets/1.jpeg' },
{ id: 2, src: '../../assets/2.jpeg' },
{ id: 3, src: '../../assets/3.jpeg' },
{ id: 4, src: '../../assets/4.jpeg' },
{ id: 5, src: '../../assets/5.jpeg' },
{ id: 6, src: '../../assets/6.jpeg' }]

const MyCarousel = () => {


    return (
        <Slider {...settings} >
            {images.map((image, i) => (
                <Image key={i}
                    id={image}
                    src={image}
                    alt="image" />
            ))}
        </Slider>

    );
};

export default MyCarousel;