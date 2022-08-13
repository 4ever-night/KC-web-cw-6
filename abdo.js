
// لغة الجافاسكربت ليست لغة الجافا

alert ("مرحبا بك في موقعي الذي سيحسب درجتك");

let grade = prompt("ادخل درجتك بلأرقام");

console.log(grade)

if ( grade > 100  ){
    console.log("%cشكله عندك واسطة؟😉" , 'color : red ; font-wieght: bold; font-size: 30px');
}
else if ( grade >= 90  ) {
    console.log("%cلقد حصلت على امتياز 🥳" , 'color : green ; font-wieght: bold; font-size: 30px')

}else if ( grade >= 80  ) {
    
    console.log("%cلقد حصلت على جيد جداً🤩" , 'color : red ; font-wieght: bold; font-size: 30px');

} 
else if ( grade  >= 70  ) {
    console.log("%cلقد حصلت على جيد🙂" , 'color :green ; font-wieght: bold; font-size: 30px');

}

else if ( grade >= 60  ) {
    console.log("%cلقد حصلت على مقبول😕" , 'color : red ; font-wieght: bold; font-size: 30px');

}
   
else if ( grade >= 50  ){
    console.log("%cلقد حصلت على ضعيف☹️" , 'color : green ; font-wieght: bold; font-size: 30px');
    
}
else {
    console.log("%cراسب💔" , 'color : red ; font-wieght: bold; font-size: 30px');

}