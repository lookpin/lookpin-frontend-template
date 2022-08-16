/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { Story, Meta, ArgTypes } from '@storybook/react';
import { MainArticle } from '../MainArticle';

interface StoryProps extends ComponentProps<typeof MainArticle> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypesSetting: MyArgTypes = {};

export default {
  title: 'root/MainArticle',
  component: MainArticle,
  argTypes: argTypesSetting,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<StoryProps> = ({ ...props }) => (
  <MainArticle {...props} />
);

export const Default = Template.bind({});
Default.args = {};
