///////////container////////////////

var continer=document.createElement("div");
continer.setAttribute("class","container");

/////////////pad//////////////

var pad=document.createElement("div");
pad.setAttribute("class","pad");

//////////text right////////////

var textright=document.createElement("span");
textright.setAttribute("class","text-right");
textright.setAttribute("id","span");
var br1=brack("br");

/////////////p/////////

var p=document.createElement("p");

////////////////input for textright///////////////////

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","input");
input.setAttribute("class","text-right form-control");
var br2=brack("br");
var br3=brack("br");

////////////////button////////////////
var button7=button("button","type","button","value","7","id","seven","class","bg-warning text-dark","7");
var button8=button("button","type","button","value","8","id","eight","class","bg-warning text-dark","8");
var button9=button("button","type","button","value","9","id","nine","class","bg-warning text-dark","9");
var buttonadd =button("button","type","button","value","+","id","add","class","bg-dark text-light","+");
var br4=brack("br");


var button4=button("button","type","button","value","4","id","four","class","bg-warning text-dark","4");
var button5=button("button","type","button","value","5","id","five","class","bg-warning text-dark","5");
var button6=button("button","type","button","value","6","id","six","class","bg-warning text-darkt","6");
var buttonsub =button("button","type","button","value","-","id","sub","class","bg-dark text-light","-");
var br5=brack("br");


var button1=button("button","type","button","value","1","id","one","class","bg-warning text-dark","1");
var button2=button("button","type","button","value","2","id","two","class","bg-warning text-dark","2");
var button3=button("button","type","button","value","3","id","three","class","bg-warning text-dark","3");
var buttonmul=button("button","type","button","value","*","id","mul","class","bg-dark text-light","*");
var br6=brack("br");


var buttonclear=button("button","type","button","value","","id","clear","class","bg-danger text-light","C");
var button0=button("button","type","button","value","0","id","zero","class","bg-warning text-dark","0");
var buttonequal=button("button","type","button","value","","id","equal","class","bg-success text-light","=");
var buttondiv =button("button","type","button","value","/","id","div","class","bg-dark text-light","/");
var br7=brack("br");

///////////////////////append/////////////////

textright.append(p);
pad.append(textright,br1,input,br2,br3,button7,button8,button9,buttonadd,br4,button4,button5,button6,buttonsub,br5,button1,button2,button3,buttonmul,br6,buttonclear,button0,buttonequal,buttondiv,br7);

continer.append(pad);
document.body.append(continer);


/////////////button////////////////////////////
function button(tagname,atname1,atval1,atname2,atval2,atname3,atval3,atname4,atval4,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(atname1,atval1);
    ele.setAttribute(atname2,atval2);
    ele.setAttribute(atname3,atval3);
    ele.setAttribute(atname4,atval4);
    ele.innerHTML=content;
    return ele;
}



////////////line breaker//////////////////
function brack(tagname){
    var ele=document.createElement("br");
    return ele
}

////////////////////////////////////////////////////js////////////////////////////////////////////
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
let add = document.getElementById("add")
let sub = document.getElementById("sub")
let mul = document.getElementById("mul")
let div = document.getElementById("div")
let clear = document.getElementById("clear")
let clear_last = document.getElementById("clear_last")
let memory_plus = document.getElementById("memory_plus")
let memory_minus = document.getElementById("memory_minus")
let equal = document.getElementById("equal")
pad = document.querySelector(".pad")


pad.addEventListener("click", display)
clear.addEventListener("click",clearHistory)
equal.addEventListener("click",result)


input = document.querySelector(".pad")
let finalResult = document.querySelector("#input")
result.finalResult = ""

document.body.addEventListener("keypress",keypress)

////////////////////functions///////////////////////////////////////////
function display(e){
    let span = document.querySelector("#span")
    if(e.target.value===undefined){
        span.innerHTML = span.innerHTML+""
    }else{
        span.innerHTML = span.innerHTML+e.target.value;
    }
    
}

function clearHistory(){
    let span = document.querySelector("#span")
    let finalResult = document.querySelector("#input")
    span.innerHTML=""
    finalResult.value = "0"
}


function result(){
    let span = document.querySelector("#span"); 
    let finalResult = document.querySelector("#input")
    finalResult.value = eval(span.innerText); 
}

function calculation(num1,operator,num2){
    if(operator === "+"){
        return[num1+num2]
    }else if(operator === "-"){
        return num1-num2    
    }else if(operator === "*"){
        return num1*num2
    }else if(operator === "/"){
        return num1/num2
    }
}

function keypress(e){
    let span = document.querySelector("#span");
    if((e.key<10 && e.key>=0) || e.key==="*" || e.key==="-" || e.key==="+" || e.key==="/" ){
        span.innerText += e.key
    }else if(e.key==="Enter"){
        result()
    }
}



