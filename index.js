require('dotenv').config()

async function hello(){

    // newsdata.io
    // https://newsdata.io/api/1/news?apikey=pub_32093dc794d90f43d14a271328776d3845ecf&q=weather
    //https://newsdata.io/api/1/news?apikey=pub_32093dc794d90f43d14a271328776d3845ecf
    const response = await fetch(`https://newsdata.io/api/1/news?apikey=${process.env.API_KEY}&qInTitle=weather`);
    console.log(response)
    // const response = await fetch("https://newsdata.io/api/1/news?apikey=pub_32093dc794d90f43d14a271328776d3845ecf&qInTitle=weather");
    
    const apiData = await response.json()
    console.log(apiData)
}
hello()