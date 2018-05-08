//this application will get a string of a given time, then we convert that time into military time
//military time is usually 12 hours greater than regular time
//12:00PM = 12:00 military time
//12:00AM = 00:00 military time



function printer(number) {
    return number+12;
    var jack = 5;

}
function convert(time,other) {
    console.log(other(3));
    time = time.split(":");

    if(time[2].charAt(2) == "P"){
        time[0] = parseInt(time[0]) + 12;
    }
    if (time[0] == 24 && time[2].charAt(2) == "P"){
        time[0] = '12';
    }

    if (time[0] == 12 && time[2].charAt(2) == "A"){
        time[0] = '00';
    }

    return time[0] + ':' + time[1] + ':' + time[2].substr(0,2);
}

console.log(convert("12:00:00PM", printer));

var triple = function printer(number){
    return number*3
    };

function infiniteArgs() {
    myList = [];
    for (i = 0; i < arguments.length; i++){
        myList.push(arguments[i]);
    }
    console.log(myList)
}

console.log(triple(2));
infiniteArgs(1,2,3,4,5,7,5,32,2,3);