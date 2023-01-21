import { forwardRef } from 'react'
import SlickSlider, { Settings } from 'react-slick'

import * as S from './styles'

export type SliderProps = {
  children: React.ReactNode
}

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children },
  ref
) => {
  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }
  return (
    <S.Wrapper>
      <SlickSlider ref={ref} {...settings}>
        {children}
      </SlickSlider>
    </S.Wrapper>
  )
}
export default forwardRef(Slider)
