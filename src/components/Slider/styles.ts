import styled from 'styled-components'

export const Wrapper = styled.section`
  height: 100%;

  .slick-slider {
    position: relative;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;

    height: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  }

  .slick-list {
    position: relative;
    overflow: hidden;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }
  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
  }
  .slick-arrow {
    display: none !important;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;
    content: '';
  }

  .slick-dots {
    display: flex !important;
    justify-content: center;
    list-style: none;
    gap: 1.6rem;

    li {
      width: 1.2rem;
      height: 1.2rem;
      background: ${({ theme }) => theme.colors.primary.light};
      border-radius: 50%;

      &.slick-active {
        background: ${({ theme }) => theme.colors.primary.main};
      }
    }

    button {
      opacity: 0;
    }
  }

  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }
  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 0px;
  }
  [dir='rtl'] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
`
