const countries = () =>{
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => displayCountries(data));
}

countries()

const displayCountries = (countries) => {
const container = document.getElementById('countries');

const countriesHTML = countries.map(country =>{
   return `
    <div class="country">
    <h3>${country?.name?.common} </h3>
    <img src=${country.flags.png} alt=""/>
    <p>${country.population}</p>
    <span>${country.region}</span>
    </div>
    `;
});
const AllHTML = countriesHTML.join(" ")
container.innerHTML = AllHTML;
};




