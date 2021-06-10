const request=require('request');

const url ='http://api.weatherstack.com/current?access_key=7568fdf42683ba24011f9fef4c2624d6&query=37.8267,-122.4233'

request({url:url},(err,response)=>{

   // console.log(response);

    const data=JSON.parse(response.body);

    console.log(data.current);

})