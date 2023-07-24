/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { StoryFn, Meta, ArgTypes } from '@storybook/react';
import { MainLogo } from '../MainLogo';

interface StoryProps extends ComponentProps<typeof MainLogo> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypesSetting: MyArgTypes = {};

export default {
  title: 'root/MainLogo',
  component: MainLogo,
  argTypes: argTypesSetting,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: StoryFn<StoryProps> = ({ ...props }) => <MainLogo {...props} />;

export const Default = {
  render: Template,
  args: {},
};
