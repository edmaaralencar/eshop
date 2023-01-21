import { StoryObj, Meta } from '@storybook/react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import IconButton from '.'

export default {
  title: 'Form/IconButton',
  component: IconButton,
  args: {
    icon: <AiOutlineShoppingCart size={24} color="#6C6CFF" />
  }
} as Meta

export const Default: StoryObj = {}
