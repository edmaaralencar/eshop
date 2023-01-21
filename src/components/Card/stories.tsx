import { StoryObj, Meta } from '@storybook/react'
import Card, { CardProps } from '.'

import img from '../../../public/produto.png'

export default {
  title: 'Card',
  component: Card
} as Meta

export const Default: StoryObj<CardProps> = {
  args: {
    size: 'normal',
    title: 'Veja a coleção masculina de roupas',
    image: img
  },
  decorators: [
    (Story) => (
      <div style={{ width: 570 }}>
        <Story />
      </div>
    )
  ]
}

export const Big: StoryObj<CardProps> = {
  args: {
    size: 'large',
    title: 'Veja a coleção masculina de roupas',
    image: img,
    description:
      'Compre os melhores sapatos do mercado Compre os melhores sapatos do mercado. Os melhores sapatos do mercado.'
  }
}
