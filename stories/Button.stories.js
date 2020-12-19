import React from 'react';

import Button from "../components/button"

export default {
  title: 'Button',
  component: Button,
  
};

const Template = (args) => <Button {...args} />;

export const Emoji = () => (
  <Button>
    Hello World
  </Button>
)


