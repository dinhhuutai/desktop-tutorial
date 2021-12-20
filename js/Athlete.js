class Athlete{
    #_name;
    #_age;
    #_sex;
    #_height;
    #_weight;
    #_nationality;
    #_sport;
    set Name(name){
        if(name.length > 0){
            this.#_name = name;
        }
        else{
            throw new Error("Error name!");
        }
    }
    get Name(){
        return this.#_name;
    }

    set Age(age){
        if(age > 0){
            this.#_age = age;
        }
        else{
            throw new Error("Error age!");
        }
    }
    get Age(){
        return this.#_age;
    }

    set Sex(sex){
        if(sex === "Nam" || sex === "Nữ"){
            this.#_sex = sex;
        }
        else{
            throw new Error("Error sex!");
        }
    }
    get Sex(){
        return this.#_sex;
    }


    set Height(height){
        if(height > 0){
            this.#_height = height;
        }
        else{
            throw new Error("Error height!");
        }
    }
    get Height(){
        return this.#_height;
    }

    set Weight(weight){
        if(weight > 0){
            this.#_weight = weight;
        }
        else{
            throw new Error("Error weight!");
        }
    }
    get Weight(){
        return this.#_weight;
    }

    set Nationality(nationality){
        if(nationality.length > 0){
            this.#_nationality = nationality;
        }
        else{
            throw new Error("Error nationality!");
        }
    }
    get Nationality(){
        return this.#_nationality;
    }


    set Sport(sport){
        if(sport.length > 0){
            this.#_sport = sport;
        }
        else{
            throw new Error("Error sport!");
        }
    }
    get Sport(){
        return this.#_sport;
    }


    constructor(name, age, sex, height, weight, nationality, sport){
        this.Name = name;
        this.Age = age;
        this.Sex = sex;
        this.Height = height;
        this.Weight = weight;
        this.Nationality = nationality;
        this.Sport = sport;
    }
    ThongTin(){
        document.querySelector('#name').innerHTML =  `${this.Name} là vận động viên ${this.Sport}`+"<br>"
                                                  + `Tuổi: ${this.Age}` + "<br>"
                                                  + `Quốc gia: ${this.Nationality}`+ "<br>";         
                                                                        
}}  

const Enum ={
    kyThuat: 60,
    theLuc: 100
}