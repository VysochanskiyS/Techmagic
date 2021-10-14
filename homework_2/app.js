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


//
let spin = false;
let planet_show = false;
let spin_planets = false;


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
// return list of planets
const get_planet = ()=>{
    axios('https://swapi.dev/api/planets').then((response)=>{
        block.style.display = 'none'
        films.style.display = 'none'
        film_title.style.display = 'none'
        spinner_planets.style.display = 'none'
        planet_show = true; 
        spin_planets = true;
        response.data.results.forEach((item)=>{
        planets.innerHTML += `<div>${item.name}</div>`
         console.log(item)
     })
    }).catch((error)=>{console.log(error)})
}

let info_about;
let start ;
let eye_color;
let height;
let gender;


//Class
class Person {
    constructor(color,height,gender){
        this.color = color;
        this.height = height;
        this.gender = gender
    };
    sayAbout(){
      start = "Hello "
    };
}


class Film extends Person{
constructor(name,color,height,male){
    super(color,height,male)
    this.name = name
}

sayHi(){
    super.sayAbout()
    info_about = `<span class='info_about_person' >${this.name}</span>`;
    eye_color = this.color
    height = this.height;
    gender = this.gender;
}
}

// closure
const Message = (height)=>{
  const message = ( height <150 ? " are small ": " are tall")
    return function(name){
        return name+message
    }
}


