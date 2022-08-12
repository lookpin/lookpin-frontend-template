/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { Story, Meta, ArgTypes } from '@storybook/react';
import { MainLogo } from '@features/root/components/MainLogo';
import { MainArticle } from '@features/root/components/MainArticle';
import { PageTemplate } from '../PageTemplate';

interface StoryProps extends ComponentProps<typeof PageTemplate> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypesSetting: MyArgTypes = {};

export default {
  title: 'shared/PageTemplate',
  component: PageTemplate,
  argTypes: argTypesSetting,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<StoryProps> = ({ ...props }) => (
  <PageTemplate {...props} />
);

export const Default = Template.bind({});
Default.args = {
  children: <h1 style={{ textAlign: 'center' }}>페이지 템플릿</h1>,
};

export const RootPage = Template.bind({});
RootPage.args = {
  children: (
    <>
      <MainLogo />
      <MainArticle />
    </>
  ),
};
