import { StoryObj, Meta } from '@storybook/react'
import * as HoverCard from '@radix-ui/react-hover-card'
import FavoriteDropdown from '.'

export default {
  title: 'FavoriteDropdown',
  component: FavoriteDropdown,
  decorators: [
    (Story) => (
      <HoverCard.Root openDelay={0} closeDelay={0}>
        <Story />
        <HoverCard.Trigger asChild>
          <button>Abrir wishlist</button>
        </HoverCard.Trigger>
      </HoverCard.Root>
    )
  ]
} as Meta

export const Default: StoryObj = {}
