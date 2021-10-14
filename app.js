import {Person,Film,Message } from './index.js'
import {start,info_about,eye_color,height,gender} from './index.js'
import { get_planet,planet_show,spin_planets } from './planet.js';
// 

const block = document.getElementById('block');
const info_people = document.getElementById('info');
const films = document.getElementById('films');
const film_title = document.getElementById('film_title');
const spinner = document.getElementById('spinner');
const planet = document.getElementById('planet');
const planets = document.getElementById('planets');
const spinner_planets = document.getElementById('spinner_planets');
const about = document.getElementById('about');
const film_names = document.getElementById('film_names');

//variables
let spin = false;
//addEventListener
info_people.addEventListener('click',(e)=>{
    block.style.display = 'block'
    planets.style.display = 'none'
     spin === false ? (spinner.style.display = 'block', data())  : '' ;
});
planet.addEventListener('click',(e)=>{
    block.style.display = 'none'
    planets.style.display = 'block'
    films.style.display = 'none'
    film_title.style.display = 'none'
    about.style.display = 'none'
    film_names.style.display = 'none'
    spin_planets === false ? (spinner_planets.style.display = 'block',get_planet()): '';
    
})

//returns list of people
const data = () => {
  return axios("https://swapi.dev/api/people").then((response)=>{
        list_people(response.data.results)
  }).catch((error)=>{console.log(error)})}


const list_people = (data)=>{ 
    spinner.style.display = 'none'
    spin = true; 
    data.map((item)=>{
        console.log(item)
        block.innerHTML += `<div class='person'>${item.name}</div>`;
        return block.innerHTML;
    })
        const arr = Array.from(block.children)
         arr.forEach((item,index) => {
        item.addEventListener('click',(e)=>{
            films.innerHTML = ""
            getFilms(index,data)
        })  
    });
}

// returns list of films
const getFilms = (index,data)=>{
    film_names.style.display = 'block'
    console.log(films)
    films.style.display = 'block'
    const people_data = new Film(data[index-1].name,data[index-1].eye_color,data[index-1].height,data[index-1].gender)
    people_data.sayHi();
    film_title.innerHTML = start + info_about ;
    about.style.display = 'block'
    // closure
    let sms = Message(height)
   film_title.innerHTML +=`<p class='massage'>${sms(data[index-1].name)}</p>`
    about.innerHTML = `<p>descriptions: 1. eye color: ${eye_color}</p>
    <p>2.height: ${height} </p>
    <p>3.gender: ${gender} </p>`;
    const store = data[index].films
    film_title.style.display = 'block'
    store.map((item)=>{
        axios(item).then((response)=>{
            console.log(response.data.title)
            films.innerHTML += `<div class='film'>${response.data.title}</div>`
        }).catch((error)=>{console.log(error)})
        })
        
}


