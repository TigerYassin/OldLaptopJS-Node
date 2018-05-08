/*
take in a given year and return the Day of the Programmer dd.mm.yyyy.
The Julian Calender(adopted in Russia from 1700 to 1917) is 13 days behind the Gregorian Calendar(adopted in Russia from 1919 to current)
The next day after January 31st was February 14th, which was the 32nd day of the year.
In the Julian Calender, leap years are divisible by 4, but in the Gregorian calendar, leap years are not divisible by 100,
but are divisible by 4 and 400.
 */


function solve(year){

    if (year > 1917){
        if (isLeap(year)){
            return("12.09.%d".replace("%d", year))
        }else return("13.09.%d".replace("%d", year))

    }else {
        if (isLeap2(year)){
            return("30.08.%d".replace("%d", year))
        }
        return("31.08.%d".replace("%d", year))
    }


}


//check to see if the given gregorian year is a leap year or not
function isLeap(year) {
    if (year % 400 == 0 || (year % 4 ==0 && !(year %100 ==0))){
        return true;
    }
}

function isLeap2(year) {
    if (year %4==0) return true
    else return false
}



console.log(solve(2008))
