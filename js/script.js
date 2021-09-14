
const API_KEY = `fede87bbe590b4160103272601bf610a`;
const searchTemparature = () => {
    const city = document.getElementById('city-name').value;
    const url =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemparature(data))

}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemparature = temparature => {
setInnerText('city', temparature.name);
setInnerText('temperature', temparature.main.temp);
setInnerText('condition', temparature.weather[0].main);
// set weather icon
const url = ` http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
const imgicon = document.getElementById('w-icon');
imgicon.setAttribute('src', url);

console.log(temparature);
}
