
export let planet_show = false;
export let spin_planets = false;


// return list of planets
export const get_planet = ()=>{
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



