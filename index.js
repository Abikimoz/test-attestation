import _ from 'lodash'

export default function solution(content){
  // BEGIN
  let data = content.split('\n').slice(1);
  data.length = data.length-1;
  console.log('Count:', data.length);

  let cities = data.map((row) => row.split(',').at(7));
  let citiesResult = _.uniq(cities).sort().join(', ');
  console.log(`Cities: ${citiesResult}`);

  let humid = data.map((row) => row.split(',').at(3));

  let humidMax = Math.max(...humid);
  let humidMin = Math.min(...humid);

  console.log(`Humidity: Min: ${humidMin}, Max: ${humidMax}`);

  let temp = data.map((row) => row.split(',').at(1));
  let tempMax = Math.max(...temp)
  let tempMaxIndex = temp.indexOf(String(tempMax));
  let HottestDay = data[tempMaxIndex];
  let HottestDayArr = HottestDay.split(',');

  console.log(`HottestDay: ${HottestDayArr[0]} ${HottestDayArr[7]}`);

  // console.log(data);
  // console.log(cities);
  // console.log(temp);

  // const value = _.uniq(cities);
  // const storage = [[],[],[],[],[]];
  // const maxTemps = citiesResult.map(city=>[])

  // console.log(value);
  

  
  // let value = 

  // let rows = data.map((row) => row.split(','));
  // let HottestCities = rows.map((row) => {
  //   const city = row[7];
  //   const temp = row[1];
  //   return {[city]: temp}
  // });
  // console.log(HottestCities);


  // END

}