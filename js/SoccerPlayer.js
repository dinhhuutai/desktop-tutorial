class SoccerPlayer extends Athlete{
    #_speed;
    #_shoot;
    #_pass;
    #_strength;
    #_obstacle;
    #_kythuat = Enum.kyThuat;
    #_theluc = Enum.theLuc;

    get Kythuat(){
        return this.#_kythuat;
    }

    get Theluc(){
        return this.#_theluc;
    }

    set Speed(speed){
        if(speed > 0 && speed <=100){
            this.#_speed = speed;
        }
        else{
            throw new Error("Error speed Soccer Player!");
        }
    }
    get Speed(){
        return this.#_speed;
    }

    set Shoot(shoot){
        if(shoot > 0 && shoot <=100){
            this.#_shoot = shoot;
        }
        else{
            throw new Error("Error shoot Soccer Player!");
        }
    }
    
    get Shoot(){
        return this.#_shoot;
    }

    set Pass(pass){
        if(pass > 0 && pass <=100){
            this.#_pass = pass;
        }
        else{
            throw new Error("Error pass Soccer Player!");
        }
    }
    get Pass(){
        return this.#_pass;
    }

    set Strength(strength){
        if(strength > 0 && strength <=100){
            this.#_strength = strength;
        }
        else{
            throw new Error("Error strength Soccer Player!");
        }
    }
    get Strength(){
        return this.#_strength;
    }

    set Obstacle(obstacle){
        if(obstacle > 0 && obstacle <=100){
            this.#_obstacle = obstacle;
        }
        else{
            throw new Error("Error obstacle Soccer Player!");
        }
    }
    get Obstacle(){
        return this.#_obstacle;
    }

    constructor(name, age, sex, height, weight, nationality, sport, speed, shoot, pass, strength, obstacle){
        super(name, age, sex, height, weight, nationality, sport);
        this.Speed = speed;
        this.Shoot = shoot;
        this.Pass = pass;
        this.Strength = strength;
        this.Obstacle = obstacle;
    }

    Match(){
        if(this.#_theluc > 50){
            this.#_theluc = this.#_theluc - (this.#_theluc * 20/100);
            this.#_kythuat += 3;
        }
        else{
            alert('Không đủ thể lực');
        }
    }

    Practice(){
        if(this.#_kythuat < 100){
            this.#_kythuat += 4;
        }
    }

    
    
    ThongTin(){
        super.ThongTin();
        document.querySelector('#index').innerHTML  ="Chiều cao: " + this.Height+  "<br>"
                                                    +"Tốc độ: "    + this.Speed +  "<br>"
                                                    +"Chuyền: "    + this.Pass  +  "<br>"
                                                    +"Sức mạnh: "  + this.Strength+"<br>"
                                                    +"Truy cản: "  + this.Obstacle+"<br>"
                                                    +"Kỹ thuật: "  + this.Kythuat+"<br>"
                                                    +"Thể lực: "  + this.Theluc+"<br>"
        
    }
}
