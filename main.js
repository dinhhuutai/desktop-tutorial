
let Ronaldo = new SoccerPlayer("Ronaldo", 36, "Nam", 187, 80, "Bồ Đào Nha", "bóng đá", 95, 100, 95, 95, 80);

let Messi = new SoccerPlayer("Messi", 34, "Nam", 169, 67, "Argentina", "bóng đá", 90, 98, 100, 90, 80);

let Santos = new VolleyballPlayer("Santos", 28, "Nam", 184, 80, "Brazil", "bóng chuyền", 320, 300, 100);

let James = new BasketballPlayer("James", 36, "Nam", 206, 95, "Anh", "bóng rổ",95, 98, 90, 100);

let Mike = new BaseballPlayer("Mike", 32, "Nam", 188, 90, "Mỹ", "bóng chày ",80, 100, 87,97);

let AnhVien = new Swimmers("Ánh Viên ", 25, "Nữ", 173, 53, "Việt Nam", "Bơi lội ", 178, 98, 96, 95);


 function lua_chon(){
    //  lấy giá trị trong thẻ input người dùng nhập
       var x = document.querySelector('#txt').value;
       x = parseFloat(x); //chuyển kiểu dữ liệu về dạng số
    if(x <= 0  ){
        alert('Bạn đã Nhập sai, mời bạn nhập lại! ')
    }
    switch (x) {
        case 1:
            Ronaldo.ThongTin();
            deLete();
            setTimeout(function() {
                opImg.classList.add('js-open-ro');
            }, (100));
            break;
        case 2: 
            Messi.ThongTin();
            deLete();
            setTimeout(function() {
                opImg.classList.add('js-open-si');
            }, (100));
            break;
        case 3:
            Santos.ThongTin();
            deLete();
            setTimeout(function() {
                opImg.classList.add('js-open-sa');
            }, (100));
            break;
        case 4:                
            James.ThongTin();
            deLete();
            setTimeout(function() {
                opImg.classList.add('js-open-ja');
            }, (100));
            break;
        case 5:  
            Mike.ThongTin();
            deLete();
            setTimeout(function() {
                opImg.classList.add('js-open-mi');
            }, (100));
            break;  
        case 6:
            AnhVien.ThongTin();
            deLete();
            setTimeout(function() {
                opImg.classList.add('js-open-anh');
            }, (100));
            break;
    } 
}

const opImg = document.querySelector('.img-avdv');

const matchRo = document.querySelector('.js-match-ro');
matchRo.addEventListener('click', function(){ 
    deLete();
    setTimeout(function() {
        opImg.classList.add('js-open-ma-ro');
    }, (100));
    Ronaldo.Match();
})
const praRo = document.querySelector('.js-pra-ro');
praRo.addEventListener('click', function(){  
    deLete();
    setTimeout(function() {
        opImg.classList.add('js-open-pr-ro');
    }, (100));
    Ronaldo.Practice();
})

const matchSi = document.querySelector('.js-match-si');
matchSi.addEventListener('click', function(){  
    deLete();
    setTimeout(function() {
        opImg.classList.add('js-open-ma-si');
    }, (100));
    Messi.Match();
})
const praSi = document.querySelector('.js-pra-si');
praSi.addEventListener('click', function(){  
    deLete();
    setTimeout(function() {
        opImg.classList.add('js-open-pr-si');
    }, (100));
    Messi.Practice();
})

const matchSa = document.querySelector('.js-match-sa');
matchSa.addEventListener('click', function(){  
    deLete();
    setTimeout(function() {
        opImg.classList.add('js-open-ma-sa');
    }, (100));
    Santos.Match();
})
const praSa = document.querySelector('.js-pra-sa');
praSa.addEventListener('click', function(){  
    deLete();
    setTimeout(function() {
        opImg.classList.add('js-open-pr-sa');
    }, (100));
    Santos.Practice();
})

const matchJa = document.querySelector('.js-match-ja');
matchJa.addEventListener('click', function(){  
    deLete();
    setTimeout(function() {
        opImg.classList.add('js-open-ma-ja');
    }, (100));
    James.Match();
})
const praJa = document.querySelector('.js-pra-ja');
praJa.addEventListener('click', function(){  
    deLete();
    setTimeout(function() {
        opImg.classList.add('js-open-pr-ja');
    }, (100));
    James.Practice();
})

const matchMi = document.querySelector('.js-match-mi');
matchMi.addEventListener('click', function(){  
    deLete();
    setTimeout(function() {
        opImg.classList.add('js-open-ma-mi');
    }, (100));
    Mike.Match();
})
const praMi = document.querySelector('.js-pra-mi');
praMi.addEventListener('click', function(){  
    deLete();
    setTimeout(function() {
        opImg.classList.add('js-open-pr-mi');
    }, (100));
    Mike.Practice();
})

const matchAnh = document.querySelector('.js-match-anh');
matchAnh.addEventListener('click', function(){ 
    deLete();
    setTimeout(function() {
        opImg.classList.add('js-open-ma-anh');
    }, (100)); 
    AnhVien.Match();
})
const praAnh = document.querySelector('.js-pra-anh');
praAnh.addEventListener('click', function(){  
    deLete();
    setTimeout(function() {
        opImg.classList.add('js-open-pr-anh');
    }, (100));
    AnhVien.Practice();
})


function deLete(){
    opImg.classList.remove('js-open-ma-ro');
    opImg.classList.remove('js-open-pr-ro');
    opImg.classList.remove('js-open-ma-si');
    opImg.classList.remove('js-open-pr-si');
    opImg.classList.remove('js-open-ma-sa');
    opImg.classList.remove('js-open-pr-sa');
    opImg.classList.remove('js-open-ma-ja');
    opImg.classList.remove('js-open-pr-ja');
    opImg.classList.remove('js-open-ma-mi');
    opImg.classList.remove('js-open-pr-mi');
    opImg.classList.remove('js-open-ma-anh');
    opImg.classList.remove('js-open-pr-anh');
    opImg.classList.remove('js-open-ro');
    opImg.classList.remove('js-open-si');
    opImg.classList.remove('js-open-sa');
    opImg.classList.remove('js-open-ja');
    opImg.classList.remove('js-open-mi');
    opImg.classList.remove('js-open-anh');
}