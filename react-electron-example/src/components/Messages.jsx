import React from "react";
import { observer } from "mobx-react";
import Settings from "./Settings";
import { Button, Table } from "semantic-ui-react";
import Fake from "./Fake";

async function createData(props) {
  const data = await Fake.getRandomData();
  props.store.addUser(data);
}

const TableStyle = {
  display: "block",
  overflowY: "scroll",
  maxHeight: "400px"
};

const About = props =>
  <div>
    <Button onClick={() => createData(props)} content="Create User" />
    <div style={TableStyle}>
      <Table color={"blue"} key={"blue"} inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Food</Table.HeaderCell>
            <Table.HeaderCell>Calories</Table.HeaderCell>
            <Table.HeaderCell>Protein</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.store.users.map(e =>
            <Table.Row>
              <Table.Cell>{e.id}</Table.Cell>
              <Table.Cell>{e["birthday"].toString()}</Table.Cell>
              <Table.Cell>{e.email}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  </div>;

export default observer(About);
