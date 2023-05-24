import _ from 'lodash'

export default function solution(content){
  // BEGIN
  let data = content.split('\n').slice(1);
  data.length = data.length-1;
  console.log('Count:', data.length);
  console.log(data);
  let cities = data.map((row) => row.split(',').at(7));
  cities = _.uniq(cities).sort().join(', ');
  console.log(`Cities: ${cities}`);
  // END

}