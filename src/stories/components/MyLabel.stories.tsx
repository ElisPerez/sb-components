import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';


export default {
  title: 'UI/MyLabel',
  // title: 'UI/otherTag/MyLabel', // this creates a sub-section in the UI of the component group
  component: MyLabel,
  argTypes: {
    size: {control: 'select', options: ['normal', 'h1']},
    color: {control: 'select', options: ['primary', 'secondary', 'tertiary']},
    allCaps: {control: 'boolean'},
    label: {control: 'text'},
    fontColor: {control: 'color'},
  }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
  allCaps: false,
  size: 'normal',
}

export const AllCaps = Template.bind({});
AllCaps.args = {
  allCaps: true,
  size: 'normal',
}
export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  size: 'normal',
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  color: 'tertiary',
  size: 'normal',
}

export const CustomColor = Template.bind({});
CustomColor.args = {
  fontColor: '#ff0000',
  size: 'h1',
}