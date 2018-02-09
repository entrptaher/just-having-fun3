import Chance from "chance";
const chance = new Chance();
const keyList = [
  "paragraph",
  "sentence",
  "syllable",
  "word",
  "age",
  "birthday",
  "first",
  "gender",
  "last name",
  "prefix",
  "color",
  "domain",
  "email",
  "fbid",
  "google_analytics",
  "hashtag",
  "ip",
  "ipv6",
  "klout",
  "tld",
  "twitter",
  "address",
  "areacode",
  "city",
  "coordinates",
  "latitude",
  "longitude",
  "phone",
  "postal",
  "province",
  "radio",
  "state",
  "street",
  "tv",
  "zip",
  "ampm",
  "date",
  "hammertime",
  "hour",
  "millisecond",
  "minute",
  "month",
  "second",
  "timestamp",
  "year",
  "cc",
  "cc_type",
  "dollar",
  "exp",
  "exp_month",
  "exp_year"
];
async function getRandomData() {
  const newData = {
    id: chance.hash()
  };
  for (let [index, key] of keyList.entries()) {
    if (chance[key]) {
      newData[key] = chance[key]();
    }
  }
  return newData;
}
export default { getRandomData };
