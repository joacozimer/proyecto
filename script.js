function convert(){
  let dec = document.getElementById('input').value;
  //console.log(dec);
  let bin = parseInt(dec).toString(2);
  let oct = parseInt(dec).toString(8);
  let hex = parseInt(dec).toString(16);
  document.getElementById('bin').innerHTML = bin;
  document.getElementById('oct').innerHTML = oct;
  document.getElementById('hex').innerHTML = hex;
}
