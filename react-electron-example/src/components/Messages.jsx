import React from "react";
import { observer } from "mobx-react";
import Settings from "./Settings";
import { Button, Table } from "semantic-ui-react";
import {initGetPost} from './../actions';

import Fake from "./Fake";
async function createData(props) {
  const data = await Fake.getRandomData();
  props.store.addUser({
    id: data.id,
    title: data["address"],
    author: data["first"]
  });
}

const TableStyle = {
  display: "block",
  overflowY: "scroll",
  maxHeight: "400px"
};

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    initGetPost().then(data => {
      this.props.store.users = [...data.json];
    });
  }

  render() {
    return (
      <div>
        <Button onClick={() => createData(this.props)} content="Create User" />
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
              {this.props.store.users.map(e =>
                <Table.Row>
                  <Table.Cell>{e.id}</Table.Cell>
                  <Table.Cell>{e.title}</Table.Cell>
                  <Table.Cell>{e.author}</Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default observer(Messages);
