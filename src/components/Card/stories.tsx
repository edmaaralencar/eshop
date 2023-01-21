import { StoryObj, Meta } from '@storybook/react'
import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card
} as Meta

export const Default: StoryObj<CardProps> = {
  args: {
    size: 'normal',
    title: 'Veja a coleção masculina de roupas',
    image:
      'data:image/jpeg;base64,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'
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
    image:
      'data:image/jpeg;base64,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',
    description:
      'Compre os melhores sapatos do mercado Compre os melhores sapatos do mercado. Os melhores sapatos do mercado.'
  }
}
