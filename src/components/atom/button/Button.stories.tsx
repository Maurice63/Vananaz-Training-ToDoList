import  Button  from "./";
import colors from "../../../constants/config/theme/colors";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

const onClick = (e:any): void => {
  console.log("clicked");
};

const button = () => {
    return (
  <Button
    onClick={onClick}
    type={select("Type", ["primary", "secondary"], "primary")}
    disabled={boolean("Disabled", false)}
    size={select("Size", ["large","middle", "small"], "small")}
    color={select("color", [colors.bluePrimary,colors.redPrimary], colors.bluePrimary)}
  >
    {text("Title", "Im button")}
  </Button>);
}

storiesOf("Atoms/Button", module)
  .addDecorator(withKnobs)
  .add("Button", () => button())