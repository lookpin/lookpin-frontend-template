/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { StoryFn, StoryObj, Meta, ArgTypes } from '@storybook/react';
import { MainArticle } from '@features/root/components/MainArticle';
import { MainLogo } from '@features/root/components/MainLogo';
import { PageTemplate } from '../PageTemplate';

interface StoryProps extends ComponentProps<typeof PageTemplate> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypesSetting: MyArgTypes = {};

export default {
  title: 'common/PageTemplate',
  component: PageTemplate,
  argTypes: argTypesSetting,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: StoryFn<StoryProps> = ({ ...props }) => (
  <PageTemplate {...props} />
);

export const Default: StoryObj<StoryProps> = {
  render: Template,
  args: {
    children: <h1 style={{ textAlign: 'center' }}>페이지 템플릿</h1>,
  },
};

export const RootPage: StoryObj<StoryProps> = {
  render: Template,

  args: {
    ...Default.args,
    children: (
      <>
        <MainLogo />
        <MainArticle />
      </>
    ),
  },
};
