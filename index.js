var today = new Date();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var dayName = days[today.getDay()];
console.log(dayName)

var date = dayName+' '+today.getDate()+' '+monthNames[today.getMonth()]+', '+today.getFullYear();
document.getElementById('text_block-130-19').innerHTML = '';
document.getElementById('text_block-130-19').innerHTML = date;
