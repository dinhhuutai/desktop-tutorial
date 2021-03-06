class Swimmers extends Athlete{
    #_arm_length;
    #_freestyle_stroke;
    #_backstroke;
    #_dive;
    #_kythuat = Enum.kyThuat;
    #_theluc = Enum.theLuc;

    get Kythuat(){
        return this.#_kythuat;
    }

    get Theluc(){
        return this.#_theluc;
    }
    set Arm_length(arm_length){
        if(arm_length > 0 && arm_length <=200){
                this.#_arm_length = arm_length;
            }
            else{
                throw new Error("Error arm length Swimmers !");
            }
        }
    get Arm_length(){
        return this.#_arm_length;
        }

    set Freestyle_stroke(freestyle_stroke){
        if(freestyle_stroke > 0 && freestyle_stroke <=100){
                this.#_freestyle_stroke = freestyle_stroke;
            }
            else{
                throw new Error("Error freestyle stroke Swimmers !");
            }
        }
    get Freestyle_stroke(){
            return this.#_freestyle_stroke;
         }

    set Backstroke(backstroke){
        if(backstroke > 0 && backstroke <=100){
                this.#_backstroke = backstroke;
            }
            else{
                throw new Error("Error Backstroke Swimmers !");
            }
        }
    get Backstroke(){
            return this.#_backstroke;
        }

    set Dive(dive){
        if(dive > 0 && dive <=100){
                this.#_dive = dive;
            }
            else{
                throw new Error("Error Dive Swimmers !");
            }
        }
    get Dive(){
            return this.#_dive;
        }

    constructor(name, age, sex, height, weight, nationality, sport, arm_length, freestyle_stroke,backstroke, dive){
        super(name, age, sex, height, weight, nationality, sport);
        this.Arm_length = arm_length;
        this.Freestyle_stroke = freestyle_stroke;
        this.Backstroke = backstroke;
        this.Dive = dive;
        }
    Match(){
        if(this.#_theluc > 50){
            this.#_theluc = this.#_theluc - (this.#_theluc * 20/100);
            this.#_kythuat += 3;
        }
        else{
            alert('Kh??ng ????? th??? l???c');
        }
    }
    
    Practice(){
        if(this.#_kythuat < 100){
            this.#_kythuat += 4;
        }
    }
    ThongTin(){
        super.ThongTin();
        document.querySelector('#index').innerHTML  ="Chi???u cao: " + this.Height+  "<br>"
                                                    +"S???i tay : "    + this.Arm_length +  "<br>"
                                                    +"B??i t??? do : "     + this.Freestyle_stroke+  "<br>"
                                                    +"B??i ng???a : "  + this.Backstroke+ "<br>"
                                                    +"B??i l???n : " + this.Dive+"<br>"
                                                    +"K??? thu???t: "  + this.Kythuat+"<br>"
                                                    +"Th??? l???c: "  + this.Theluc+"<br>"
       
         }
}
