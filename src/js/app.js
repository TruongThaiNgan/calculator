const btn_number = document.querySelectorAll(".btn-number");
const input = document.querySelector('.console');
const btn_cal = document.querySelectorAll('.btn-cal');
const history = document.querySelector('.history');
input.value = "0";
var string_number="";
var number2=0;
btn_number.forEach(element => {
    element.addEventListener('click', function(){
        let number = parseInt(element.textContent); 
        input.value = "" + (parseInt(input.value + number));
    });
});

btn_cal.forEach(element => {
    element.addEventListener('click', function(){
        // if(check() == 0){
            string_number += input.value;
            clear_number();
            let value = element.textContent;
            if(value == "X")
                value = "*";
            string_number += value;
            history.textContent = string_number;
    });
});


function clear_number(){
    input.value = "";
}

const btn_clear = document.querySelector(".btn-clear");
btn_clear.addEventListener('click', function() {
    clear_number();
    string_number = "";
    input.value = "0";
});

const btn_kq = document.querySelector('.btn-kq');
btn_kq.addEventListener('click',function(){
    string_number += input.value;
    history.textContent = string_number;
    clear_number();
    string_number ="" + eval(string_number);
    console.log(string_number);
    input.value += string_number;
    string_number ="";
});

function check() {
    if(string_number[string_number.length-1] == "*"||string_number[string_number.length-1] == "/"||string_number[string_number.length-1] =="+"||string_number[string_number.length-1] =="-"){
        return 1;
    }
    return 0;
}