/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { Story, Meta, ArgTypes } from '@storybook/react';
import { MainImage } from '../MainImage';

interface StoryProps extends ComponentProps<typeof MainImage> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypesSetting: MyArgTypes = {};

export default {
  title: 'root/MainImage',
  component: MainImage,
  argTypes: argTypesSetting,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<StoryProps> = ({ ...props }) => <MainImage {...props} />;

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Image = Template.bind({});
Image.args = {
  image:
    'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop',
};
