/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { StoryFn, Meta, ArgTypes } from '@storybook/react';
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

const Template: StoryFn<StoryProps> = ({ ...props }) => (
  <MainArticle {...props} />
);

export const Default = {
  render: Template,
  args: {},
};
