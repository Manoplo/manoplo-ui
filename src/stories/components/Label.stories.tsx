import { ComponentStory, ComponentMeta } from "@storybook/react";
import Label from "../../components/Label/Label";

export default {
  title: "Components/Label",
  component: Label,
};

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  label: "Label",
  size: "h2",
};

export const Small = Template.bind({});
Small.args = {
  label: "Label",
  size: "normal",
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  label: "Label",
  allCaps: true,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  label: "Label",
  customColor: "tomato",
};
