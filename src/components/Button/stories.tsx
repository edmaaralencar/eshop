import { StoryObj, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'
import { FiArrowRight } from 'react-icons/fi'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Comprar',
    size: 'medium'
  }
} as Meta

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    icon: <FiArrowRight size={22} color="#ffffff" />
  },
  decorators: [
    (Story) => (
      <div style={{ width: '22rem' }}>
        <Story />
      </div>
    )
  ]
}

export const Outlined: StoryObj<ButtonProps> = {
  args: {
    variant: 'outlined'
  }
}

export const Anchor: StoryObj<ButtonProps> = {
  args: {
    as: 'a'
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small'
  }
}

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: 'medium'
  }
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
    fullWidth: true
  },
  decorators: [
    (Story) => (
      <div style={{ width: '20rem' }}>
        <Story />
      </div>
    )
  ]
}
