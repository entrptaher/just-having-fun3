import React from "react";
import { observer } from "mobx-react";
import Settings from "./Settings";
import { Button } from "semantic-ui-react";
import Chance from "chance";
const chance = new Chance();
const keyList = ['paragraph', 'sentence', 'syllable', 'word', 'age', 'birthday', 'first', 'gender', 'last name', 'prefix', 'color', 'domain', 'email', 'fbid', 'google_analytics', 'hashtag', 'ip', 'ipv6', 'klout', 'tld', 'twitter', 'address', 'areacode', 'city', 'coordinates', 'latitude', 'longitude', 'phone', 'postal', 'province', 'radio', 'state', 'street', 'tv', 'zip', 'ampm', 'date', 'hammertime', 'hour', 'millisecond', 'minute', 'month', 'second', 'timestamp', 'year', 'cc', 'cc_type', 'dollar', 'exp', 'exp_month', 'exp_year'];

async function getRandomData(){
  const newData = {
    id: chance.hash()
  };
  for(let [index, key] of keyList.entries()){
    if(chance[key]){
      newData[key] = chance[key]()
    }
  }
  return newData;
}

async function createData(props) {
  const newData = {
    id: chance.hash(),
    data: []
  };
  for(let i = 0; i< 1; i++){
    const data = await getRandomData()
    newData.data.push(data)
  }
  console.log(newData);
  props.store.addUser(newData);
}

const About = props =>
  <div>
    <Button onClick={() => createData(props)} content="Create User"/>
    {props.store.users.map(e => <li>{e.id} {e.data.length}</li>)}
  </div>;

export default observer(About);

