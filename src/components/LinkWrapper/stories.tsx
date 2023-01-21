import { StoryObj, Meta } from '@storybook/react'
import LinkWrapper, { LinkWrapperProps } from '.'

export default {
  title: 'LinkWrapper',
  component: LinkWrapper,
  args: {
    href: '/',
    children: 'Ver mais'
  }
} as Meta

export const Default: StoryObj<LinkWrapperProps> = {}
