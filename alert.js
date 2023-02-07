// let num = 29
// for(i = 22; i < num; i++){
//     alert(i)
// }
// function howManydays(month){
//     var days;
//     switch (month){
//       case 1:
//       days = 31
//         break;
//       case 2:
//         days = 28;
//         break;
//       case 3:
//         days = 31;
//         break;
//       case 4:
//         days = 30
//         break;
//       case 12:
//         days = 31;
//     }
//     return days;
//   }
//   console.log(howManydays(2))

function howManydays(month){
    var days;
    switch (month) {
        case 4,6,9,11:
            days = 31;
            break;
        case 2:
            days = 28;
            break;
        case 1,3,5,7,8,10,13:
            days = 30;
            break;
            
    }
    return days;
}
console.log(howManydays(10))