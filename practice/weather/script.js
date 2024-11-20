async function getWeatherInfo() {
  try {
    
    const url = 'http://api.weatherapi.com/v1/current.json?key=0b50e3f195ad4a2cb76102322241911&q=bangalore&aqi=no'; //url to fetch data from API

    const data = await fetch(url, {                                   //fetch() will gwt data form url.
      mode: 'cors',                                                   // Default value
    });
    console.log(data.json());                                        //data cannot be read directly, it os converted to json
  } 
  catch (error) {
    console.error('cannot get data');
  }
}

getWeatherInfo();