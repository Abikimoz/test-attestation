import _ from 'lodash'

export default function solution(content){
  // BEGIN
  let array = content.split('\n').slice(1);
  array.length = array.length-1;
  console.log('Count:', array.length);
  // END

}