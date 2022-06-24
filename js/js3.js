//switch
// var counter = 11;
// var numberchar = '';

// switch (counter) {
//     case 0:
//         numberchar = 'zero'; 
//          break;
//     case 1: 
//         numberchar = 'one';
//         break;
//     default:
//         numberchar = 'not identified'
//         break;

// }
// console.log(numberchar);

var car=['toyota', 'suzuki','audi']
var mixed = [1,
    'name',
    2,
    {s:'aa',b:'bb'},
    null,
    2.2,
    true,
    false,
];


mixed.push ('cat');
mixed.push ('akshay');
mixed.push ('health');
console.log(mixed)
mixed.map(function (item,index)
{ console.log(item);
    if (item === 1){
        return 'one at place'+index
    }
    return item ;
});
console.log(mixed);