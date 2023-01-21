import { StoryObj, Meta } from '@storybook/react'
import * as Dialog from '@radix-ui/react-dialog'
import Cart from '.'

export default {
  title: 'Cart',
  component: Cart,
  decorators: [
    (Story) => (
      <Dialog.Root>
        <Story />
        <Dialog.Trigger asChild>
          <button>Abrir carrinho</button>
        </Dialog.Trigger>
      </Dialog.Root>
    )
  ]
} as Meta

export const Default: StoryObj = {}
