import React from "react";
import { storiesOf } from "@storybook/react";
import { ShowButton } from "./DisplayButton";

var stories = storiesOf("Make a button", module);

stories.addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>);

stories.add("buttons", () => <ShowButton />);
