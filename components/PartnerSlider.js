import React, { Component } from 'react'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

export default class PartnerSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 10000,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 0,
      slidesToShow: 4,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    }
    return (
      <div className="container">
        <Slider {...settings}>
          <div className="p-2 sm:p-0 flex flex-col w-1/3">
            <Image
              src="/images/partners/deleon-logo-white.png"
              alt="DeLeon Safety Solutions"
              height={100}
              width={100}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <Image
              src="/images/partners/ultra-logo-white.png"
              alt="Ultra Demolition"
              height={100}
              width={150}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <Image
              src="/images/partners/edge-logo-white.png"
              alt="Edge196"
              height={80}
              width={80}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <Image
              src="/images/partners/tlwc-logo-white.png"
              alt="TLWC"
              height={80}
              width={80}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <Image
              src="/images/partners/hackmania-logo-white.png"
              alt="Hackmania"
              height={80}
              width={80}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <Image
              src="/images/partners/mhp-logo-white.png"
              alt="MH Photography"
              height={80}
              width={150}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <Image
              src="/images/partners/dcrafts-logo-white.png"
              alt="Digital Crafts"
              height={80}
              width={120}
            />
          </div>
        </Slider>
      </div>
    )
  }
}
