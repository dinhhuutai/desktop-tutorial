class BaseballPlayer extends Athlete{
    #_throwingforce;
    #_hitTheball;
    #_speed;
    #_obstacle;
    #_kythuat = Enum.kyThuat;
    #_theluc = Enum.theLuc;

    get Kythuat(){
        return this.#_kythuat;
    }

    get Theluc(){
        return this.#_theluc;
    }
    set Throwingforce(throwingforce){
        if(throwingforce > 0 && throwingforce <= 100){
            this.#_throwingforce = throwingforce;
        }
        else{
            throw new Error("Error throwingforce Baseball Player!");
        }
    }
    get Throwingforce(){
        return this.#_throwingforce;
    }

    set HitTheball(hitTheball){
        if(hitTheball > 0 && hitTheball <= 100){
            this.#_hitTheball = hitTheball;
        }
        else{
            throw new Error("Error hitTheball Baseball Player!");
        }
    }
    get HitTheball(){
        return this.#_hitTheball;
    }
    set Speed(speed){
        if(speed > 0 && speed <=100){
            this.#_speed = speed;
        }
        else{
            throw new Error("Error speed Baseball Player!");
        }
    }
    get Speed(){
        return this.#_speed;
    }
    set Obstacle(obstacle){
        if(obstacle > 0 && obstacle <=100){
            this.#_obstacle = obstacle;
        }
        else{
            throw new Error("Error speed Baseball Player!");
        }
    }
    get Obstacle(){
        return this.#_obstacle;
    }

    constructor(name, age, sex, height, weight, nationality, sport,speed, throwingforce,obstacle, hitTheball){
        super(name, age, sex, height, weight, nationality, sport);
        this.Speed = speed;
        this.Throwingforce = throwingforce;
        this.HitTheball = hitTheball;
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
                                                    +"Ném bóng: "  + this.Throwingforce+  "<br>"
                                                    +"Truy cản: "  + this.Obstacle+"<br>"
                                                    +"Đánh bóng: " + this.HitTheball+"<br>"
                                                    +"Kỹ thuật: "  + this.Kythuat+"<br>"
                                                    +"Thể lực: "  + this.Theluc+"<br>"

    }
    

}