import ImageComponentity from '../ImageComponentity'
import Link from 'next/link'
import React, { Component } from 'react'
import SVGArrow from './../SVG/SVGArrow'

export default function TeamWidget({ team }) {
  class CarouselLeftArrow extends Component {
    render() {
      return (
        <span
          className='bg-gray-900 py-1 px-4 text-white group cursor-pointer flex'
          onClick={this.props.onClick}
        >
          <SVGArrow classes={'w-4 text-white mr-2 group-hover:-ml-1 transform rotate-180'} />{' '}
          <span>Prev</span>
        </span>
      )
    }
  }

  class CarouselRightArrow extends Component {
    render() {
      return (
        <span
          className='bg-gray-900 py-1 px-4 text-white group cursor-pointer flex'
          onClick={this.props.onClick}
        >
          <span>Next</span>
          <SVGArrow classes={'w-4 text-white ml-2 group-hover:-mr-1'} />
        </span>
      )
    }
  }
  class CarouselSlide extends Component {
    render() {
      return (
        <li className={this.props.index == this.props.activeIndex ? 'block' : 'hidden'}>
          {this.props.slide.featured_media != 0 && this.props.slide.featured_media != null ? (
            <ImageComponentity
              src={this.props.slide._embedded['wp:featuredmedia'][0].source_url}
              classes={'sm:h-96 bg-gray-300 filter grayscale'}
              alt={this.props.slide.title.rendered}
            />
          ) : (
            <div className='sm:h-96 bg-gray-300' />
          )}
          <div className='p-8 flex flex-col justify-between'>
            <span className='uppercase text-xs mb-1'>{this.props.slide.designation[0]}</span>
            <h3
              className='font-bold uppercase text-2xl'
              dangerouslySetInnerHTML={{ __html: this.props.slide.title.rendered }}
            />
            <div className='mt-6'>
              <div
                className='text-gray-700 mb-2 line-clamp-4'
                dangerouslySetInnerHTML={{ __html: this.props.slide.content.rendered }}
              />
            </div>
          </div>
        </li>
      )
    }
  }

  // Carousel wrapper component
  class Carousel extends Component {
    constructor(props) {
      super(props)

      this.goToSlide = this.goToSlide.bind(this)
      this.goToPrevSlide = this.goToPrevSlide.bind(this)
      this.goToNextSlide = this.goToNextSlide.bind(this)

      this.state = {
        activeIndex: 0
      }
    }

    goToSlide(index) {
      this.setState({
        activeIndex: index
      })
    }

    goToPrevSlide(e) {
      e.preventDefault()

      let index = this.state.activeIndex
      let { slides } = this.props
      let slidesLength = slides.length

      if (index < 1) {
        index = slidesLength
      }

      --index

      this.setState({
        activeIndex: index
      })
    }

    goToNextSlide(e) {
      e.preventDefault()

      let index = this.state.activeIndex
      let { slides } = this.props
      let slidesLength = slides.length - 1

      if (index === slidesLength) {
        index = -1
      }

      ++index

      this.setState({
        activeIndex: index
      })
    }

    render() {
      return (
        <div className='order-4 col-span-1 sm:col-span-6 lg:col-span-3 bg-gray-100'>
          <div className='p-8'>
            <h3 className='uppercase font-bold text-2xl'>Core Team</h3>
          </div>
          <ul className='carousel__slides'>
            {this.props.slides.map((slide, index) => (
              <CarouselSlide
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                slide={slide}
              />
            ))}
          </ul>
          <div className='mx-8 flex justify-between items-center'>
            <CarouselLeftArrow onClick={(e) => this.goToPrevSlide(e)} />
            <CarouselRightArrow onClick={(e) => this.goToNextSlide(e)} />
          </div>
        </div>
      )
    }
  }
  return <Carousel slides={team} />
}
