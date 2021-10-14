//Class
export let start,info_about,eye_color,height,gender ;
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

export {Person ,Film,Message }

