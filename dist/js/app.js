const btn_number = document.querySelectorAll(".btn-number");
const input = document.querySelector('.console');
const btn_cal = document.querySelectorAll('.btn-cal');
const history = document.querySelector('.history');

input.value = "";
var string_number="";

btn_number.forEach(element => {
    element.addEventListener('click', function(){
        let number = element.textContent; 
        input.value = "" +input.value + number;
    });
});

btn_cal.forEach(element => {
    element.addEventListener('click', function(){
        if(check() == 0 || input.value != ""){
            string_number += input.value;
            clear_number();
            let value = element.textContent;
            if(value == "X")
                value = "*";
            string_number += value;
            history.textContent = string_number;
        }
        else{
            string_number += input.value;
            clear_number();
            let value = element.textContent;
            if(value == "X")
                value = "*";
            string_number = remove_last(string_number) + value;
            history.textContent = string_number;
            console.log("remove"); 
        }
    });
});


function clear_number(){
    input.value = "";
}

const btn_clear = document.querySelector(".btn-clear");
btn_clear.addEventListener('click', function() {
    clear_number();
    string_number = "";
    input.value = "";
    history.textContent = "";
});

const btn_kq = document.querySelector('.btn-kq');
btn_kq.addEventListener('click',function(){
    string_number += input.value;
    history.textContent = string_number;
    clear_number();
    try {
        string_number ="" + eval(string_number);   
        input.value += string_number; 
    } catch (error) {
        input.value = "Lỗi Phép Tính";
    }
    string_number ="";
});

function check() {
    if(string_number[string_number.length-1] == "*"||string_number[string_number.length-1] == "/"||string_number[string_number.length-1] =="+"||string_number[string_number.length-1] =="-"){
        return 1;
    }
    return 0;
}

function remove_last(params) {
    let term = "";
    for (let index = 0; index < params.length-1; index++) {
        term += params[index];
    }
    return term;
}

const btn_float = document.querySelector(".btn-float");
btn_float.addEventListener('click', function(element){
    input.value += ".";
});

function isNumberKey(evt)
    {
       var charCode = evt.which;
       if (charCode > 31 && (charCode < 42 || charCode > 57))
          return false;
       return true;
    }