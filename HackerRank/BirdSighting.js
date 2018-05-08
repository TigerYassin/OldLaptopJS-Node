/*
The first line contains an integer denoting , the number of birds sighted and reported in the array .
The second line describes AR as N space-separated integers representing the type numbers of each bird sighted.
 */


function migratoryBirds(n, ar) {

    var max = {}
    var highestNum = 0
    var highestCount = 0;

    for (var x = 0; x < ar.length; x++){

        var key = ar[x]

        if (isNaN(max[key])){
            max[key] = 0
        }
        max[key] = max[key] + 1

        if (highestCount < max[key]){
            highestCount++
            highestNum = key;
        }
    }
    for (var t in max){
        if (max[t] == highestCount){
            return t
        }
    }

}


console.log(migratoryBirds(4, [2,1,3,1,3]))
