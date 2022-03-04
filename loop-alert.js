function myRepeater() {
    for (let i = 0; i <= 10; i++);
    console.log ("I want a chocolate chip cookie with milk");
}

function myAlert() {
  var alerted = localStorage.getItem('alerted') || '';
  if (alerted != 'yes') {
    alert("Get ready for the suprises!!!");
    localStorage.setItem('alerted', 'yes');
  }
}
