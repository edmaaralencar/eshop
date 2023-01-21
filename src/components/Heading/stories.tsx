import { Meta, StoryObj } from '@storybook/react'
import { Heading } from '.'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lançamentos'
  }
} as Meta

export const Default: StoryObj<typeof Heading> = {}
