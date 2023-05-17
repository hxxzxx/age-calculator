let date = document.getElementById('birthday');
let result = document.getElementsByClassName('result');
let submit = document.getElementById('age-submit');
let Textage = document.querySelectorAll('.highligt');

const today = new Date();

submit.addEventListener('click',agecalculator);

function agecalculator(){
    let birthday = new Date(date.value);

    if(!(isNaN(birthday.getFullYear())))
    {
        if (today.getFullYear() == birthday.getFullYear()){
            age = 1;
        }
        else if ( today.getMonth() > birthday.getMonth() || 
            (today.getMonth() == birthday.getMonth()) 
                && (today.getDate() >= birthday.getDate()) ) 
        {
            age = today.getFullYear()-birthday.getFullYear();
        }
        else {
            age = today.getFullYear()-birthday.getFullYear()-1;
        }

        let animal = birthday.getFullYear() % 12;

        if (animal == 0){
            animal = "원숭이";
        }
        else if (animal == 1)
        {
            animal = "닭";
        }
        else if (animal ==2)
        {
            animal = "개";
        }
        else if (animal == 3 )
        {
            animal = "돼지";
        }
        else if (animal == 4)
        {
            animal = "쥐";
        }
        else if (animal == 5)
        {
            animal = "소";
        }
        else if (animal == 6)
        {
            animal = "호랑이";
        }
        else if (animal == 7)
        {
            animal = "토끼";
        }
        else if (animal == 8)
        {
            animal = "용";
        }
        else if (animal == 9)
        {
            animal = "뱀";
        }
        else if (animal == 10)
        {
            animal = "말";
        }
        else {
            animal="양";
        }
        result[0].style.display="block";
        result[1].style.display="block";


        Textage[0].innerText=`${age}세`;
        Textage[1].innerText=`${animal}띠`;
    }

}