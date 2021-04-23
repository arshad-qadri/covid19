const conutry_name = document.querySelector('#conutry_name');
const NewConfirmed = document.querySelector('#NewConfirmed');
const NewDeaths = document.querySelector('#NewDeaths');
const NewRecovered = document.querySelector('#NewRecovered');
const TotalConfirmed = document.querySelector('#TotalConfirmed');
const TotalDeaths = document.querySelector('#TotalDeaths');
const TotalRecovered = document.querySelector('#TotalRecovered');

const getCovidCases = async () => {
  const api = 'https://api.covid19api.com/summary';
  try {
    const data = await fetch(api);
    const realData = await data.json();
    console.log(realData.Countries);
    const arrayData = realData.Countries[76];
    conutry_name.innerHTML = `Country : ${arrayData.Country} (${arrayData.CountryCode})`;
    NewConfirmed.innerHTML = arrayData.NewConfirmed;
    NewDeaths.innerHTML = arrayData.NewDeaths;
    NewRecovered.innerHTML = arrayData.NewRecovered;
    TotalConfirmed.innerHTML = arrayData.TotalConfirmed;
    TotalDeaths.innerHTML = arrayData.TotalDeaths;
    TotalRecovered.innerHTML = arrayData.TotalRecovered;
  } catch (error) {}
};
getCovidCases();
