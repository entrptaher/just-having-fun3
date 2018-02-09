import React from "react";
import { Form, Button } from "semantic-ui-react";
import { observer } from "mobx-react";
const Sample = props => {
  const options = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" }
  ];
  return (
    <div>
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid label="First name" placeholder="First name" />
          <Form.Input fluid label="Last name" placeholder="Last name" />
        </Form.Group>
        <Form.Select options={options} placeholder="Gender" />
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default observer(Sample);
