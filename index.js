const Global = document.querySelector('#Global');
const Gupdate = document.querySelector('#Gupdate');
const GNewConfirmed = document.querySelector('#GNewConfirmed');
const GNewDeaths = document.querySelector('#GNewDeaths');
const GNewRecovered = document.querySelector('#GNewRecovered');
const GTotalConfirmed = document.querySelector('#GTotalConfirmed');
const GTotalDeaths = document.querySelector('#GTotalDeaths');
const GTotalRecovered = document.querySelector('#GTotalRecovered');
const myinput = document.getElementById('input');

// -------------------------------------------------------------

const myserach = document.querySelector('#serach');
const countryData = document.querySelector('#country');
let realData = '';
let x = 0;

const getGlobalCases = () => {
  const GarrayData = realData.Global;
  Global.innerHTML = 'Global';
  Gupdate.innerHTML = `<b> Last Update : </b> ${GarrayData.Date} `;
  GNewConfirmed.innerHTML = GarrayData.NewConfirmed;
  GNewDeaths.innerHTML = GarrayData.NewDeaths;
  GNewRecovered.innerHTML = GarrayData.NewRecovered;
  GTotalConfirmed.innerHTML = GarrayData.TotalConfirmed;
  GTotalDeaths.innerHTML = GarrayData.TotalDeaths;
  GTotalRecovered.innerHTML = GarrayData.TotalRecovered;
};

const getNewCovidCases = () => {
  let inpVal =
    myinput.value[0].toUpperCase() + myinput.value.slice(1).toLowerCase();
  x = realData.Countries.findIndex(e => e.Country === inpVal);
  const arrayData = realData.Countries[x];
  if (x < 0) {
    alert('Country Not Found');
  } else if (x >= 0) {
    countryData.innerHTML = ` <div class="d-flex justify-content-between my-4">
    <h5>  Country : <b> ${arrayData.Country} </b></h5>
    <div> <b> Last Update : </b> ${arrayData.Date} </div>
  </div>
  <table class="table table-responsive shadow">
    <thead class="bg-dark text-white">
      <tr>
        <th scope="col">New Confirmed</th>
        <th scope="col">New Deaths</th>
        <th scope="col">New Recovered</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td> ${arrayData.NewConfirmed} </td>
        <td> ${arrayData.NewDeaths} </td>
        <td> ${arrayData.NewRecovered} </td>
      </tr>
      <tr>
        <th scope="col">Total Confirmed</th>
        <th scope="col">Total Deaths</th>
        <th scope="col">Total Recovered</th>
      </tr>
      <tr>
        <td> ${arrayData.TotalConfirmed} </td>
        <td> ${arrayData.TotalDeaths} </td>
        <td> ${arrayData.TotalRecovered} </td>
      </tr>
    </tbody>
  </table>`;
  }
};

const getCovidCases = async () => {
  const api = 'https://api.covid19api.com/summary';
  try {
    const data = await fetch(api);
    realData = await data.json();
    console.log(realData.Countries);
    console.log(realData.Global);
    getGlobalCases();
    getNewCovidCases();
  } catch (error) {}
};

myserach.addEventListener('click', getNewCovidCases);
getCovidCases();
