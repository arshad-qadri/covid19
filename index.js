const conutry_name = document.querySelector('#conutry_name');
const update = document.querySelector('#update');
const NewConfirmed = document.querySelector('#NewConfirmed');
const NewDeaths = document.querySelector('#NewDeaths');
const NewRecovered = document.querySelector('#NewRecovered');
const TotalConfirmed = document.querySelector('#TotalConfirmed');
const TotalDeaths = document.querySelector('#TotalDeaths');
const TotalRecovered = document.querySelector('#TotalRecovered');
const input = document.querySelector('#input');
const myserach = document.querySelector('#serach');
let realData = '';
let x = 76;
const getNewCovidCases = () => {
  x = realData.Countries.findIndex(e => e.Country === input.value);
  console.log(`x value ${x}`);
  const arrayData = realData.Countries[x];
  conutry_name.innerHTML = `Country : ${arrayData.Country} (${arrayData.CountryCode})`;
  update.innerHTML = `<b> Last Update : </b> ${arrayData.Date} `;
  NewConfirmed.innerHTML = arrayData.NewConfirmed;
  NewDeaths.innerHTML = arrayData.NewDeaths;
  NewRecovered.innerHTML = arrayData.NewRecovered;
  TotalConfirmed.innerHTML = arrayData.TotalConfirmed;
  TotalDeaths.innerHTML = arrayData.TotalDeaths;
  TotalRecovered.innerHTML = arrayData.TotalRecovered;
  console.log(realData);
  console.log(input.value);
  console.log(x);
};
const getCovidCases = async () => {
  const api = 'https://api.covid19api.com/summary';
  try {
    const data = await fetch(api);
    realData = await data.json();
    console.log(realData.Countries);
    getNewCovidCases();
  } catch (error) {}
};

myserach.addEventListener('click', getNewCovidCases);
getCovidCases();
