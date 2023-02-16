import React from 'react'
// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CartHeader from './CartHeader'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line storybook/story-exports
export default {
  title: 'Component/CartHeader',
  component: CartHeader
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CartHeader>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CartHeader> = () => <CartHeader />

export const Primary = Template.bind({})
