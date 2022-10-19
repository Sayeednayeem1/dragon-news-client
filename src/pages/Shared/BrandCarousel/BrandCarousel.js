import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../../../assets/brands/Img1.jpg';
import Img2 from '../../../assets/brands/Img2.jpg';

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Slider</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={Img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Slider</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;