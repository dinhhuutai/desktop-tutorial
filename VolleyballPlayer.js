class VolleyballPlayer extends Athlete{
    #_attackpower;
    #_turnOnInPlace;
    #_hitTheball;

    #_kythuat = Enum.kyThuat;
    #_theluc = Enum.theLuc;

    get Kythuat(){
        return this.#_kythuat;
    }

    get Theluc(){
        return this.#_theluc;
    }
    set Attackpower(attackpower){
        if(attackpower > 0){
            this.#_attackpower = attackpower;
        }
        else{
            throw new Error("Error attackpower Volleyball Player!");
        }
    }
    get Attackpower(){
        return this.#_attackpower;
    }

    set TurnOnInPlace(turnOnInPlace){
        if(turnOnInPlace > 0){
            this.#_turnOnInPlace = turnOnInPlace;
        }
        else{
            throw new Error("Error turnOnInPlace Volleyball Player!");
        }
    }
    get TurnOnInPlace(){
        return this.#_turnOnInPlace;
    }

    set HitTheball(hitTheball){
        if(hitTheball > 0 && hitTheball <=100){
            this.#_hitTheball = hitTheball;
        }
        else{
            throw new Error("Error hitTheball Volleyball Player!");
        }
    }
    get HitTheball(){
        return this.#_hitTheball;
    }
    constructor(name, age, sex, height, weight, nationality, sport, attackpower, turnOnInPlace, hitTheball){
        super(name, age, sex, height, weight, nationality, sport);
        this.Attackpower = attackpower;
        this.TurnOnInPlace = turnOnInPlace;
        this.HitTheball = hitTheball;
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
                                                    +"Sức bật tấn công: " + this.Attackpower +  "<br>"
                                                    +"Bật tại chỗ: " + this.TurnOnInPlace+  "<br>"
                                                    +"Lực đánh bóng: " + this.HitTheball+"<br>"
                                                    +"Kỹ thuật: "  + this.Kythuat+"<br>"
                                                    +"Thể lực: "  + this.Theluc+"<br>"
                                                    
    }


}