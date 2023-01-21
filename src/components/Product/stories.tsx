import { StoryObj, Meta } from '@storybook/react'
import Product, { ProductProps } from '.'

export default {
  title: 'Product',
  component: Product,
  args: {
    name: 'Air Max 90',
    price: 300.0,
    image: '/produto.png'
  },
  decorators: [
    (Story) => (
      <div style={{ width: '370px' }}>
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<ProductProps> = {}
