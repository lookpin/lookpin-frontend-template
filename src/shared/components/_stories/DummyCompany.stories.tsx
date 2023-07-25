/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { StoryFn, StoryObj, Meta, ArgTypes } from '@storybook/react';
import { DummyCompany } from '../DummyCompany';

interface StoryProps extends ComponentProps<typeof DummyCompany> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypesSetting: MyArgTypes = {};

export default {
  title: 'shared/DummyCompany',
  component: DummyCompany,
  argTypes: argTypesSetting,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: StoryFn<StoryProps> = ({ ...props }) => (
  <DummyCompany {...props} />
);

export const Default: StoryObj<StoryProps> = {
  render: Template,
  args: {
    value: '룩핀!',
  },
};

export const Loading: StoryObj<StoryProps> = {
  render: Template,

  args: {
    ...Default.args,

    loading: true,
  },
};
