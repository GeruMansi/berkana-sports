import React, { Component } from "react";
import Slider from "react-slick";
import { dataProductos } from "../data-productos";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardDestacados from "./cardDestacados";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems:"center", right:"-0.5rem", zIndex: 1}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems:"center", left:"-0.5rem", zIndex: 1}}
      onClick={onClick}
    />
  );
}


export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 9,
      slidesToScroll: 8,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1660,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 7,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1485,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 7,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1298,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1204,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 5,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1145,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 815,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 650,
          settings: {
            className:"center",
            centerMode: true, 
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
            dots: false
          }
        }//,
        // {
        //   breakpoint: 480,
        //   settings: {
        //     className:"center",
        //     centerMode: true,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     // infinite: true,
        //     dots: false
        //   }
        // }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          {dataProductos.map((item) => item.destacado === true ? 
                <div key={item.id} className="carouselContainerSlide">
                  <CardDestacados product={item} />
                </div>
           : "" )}
        </Slider>
      </div>
    );
  }
}