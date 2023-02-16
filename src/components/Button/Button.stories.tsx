import React from 'react'
// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line storybook/story-exports
export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    isLoading: {
      description: 'Show loading icon'
    }
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (props) => <Button {...props} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'Submit',
  className:
    'flex w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600',
  isLoading: false
}

export const Secondary = Template.bind({})

Secondary.args = {
  children: 'Submit',
  className:
    'flex w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600',
  isLoading: true,
  disabled: true
}
