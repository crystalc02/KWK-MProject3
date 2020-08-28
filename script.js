//console.log(01<5);
var submit = $('button');
var container = $('.container');
var month = $('.month');
var day = $('.day');
var year = $('.year');
submit.on("click", addZodiac);
function addZodiac(){
  event.preventDefault();
  var zodiac;
  var chineseZodiac;
  var name = $('.name').val();
  console.log(month);
  
  //Zodiac Alg
  
  if(month.val() === "03"){
    if(day.val()>=21){
      zodiac = "Aries";
    }
    else{
      zodiac = "Pisces";
    }
  }else if(month.val()==="04"){
    if(day.val()<=19){
      zodiac = "Aries";
    }
    else{
      zodiac = "Taurus";
    }
  } else if(month.val()==="05"){
    if(day.val()<=20){
      zodiac = "Taurus";
    }
    else{
      zodiac = "Gemini";
    }
  }else if(month.val()==="06"){
    if(day.val()<=20){
      zodiac = "Gemini";
    }
    else{
      zodiac = "Cancer";
    }
  }else if(month.val()==="07"){
    if(day.val()<=22){
      zodiac = "Cancer";
    }
    else{
      zodiac = "Leo";
    }
  }else if(month.val()==="08"){
    if(day.val()<=22){
      zodiac = "Leo";
    }
    else{
      zodiac = "Virgo";
    }
  }else if(month.val()==="09"){
    if(day.val()<=22){
      zodiac = "Virgo";
    }
    else{
      zodiac = "Libra";
    }
  }else if(month.val()==="10"){
    if(day.val()<=22){
      zodiac = "Libra";
    }
    else{
      zodiac = "Scorpio";
    }
  }else if(month.val()==="11"){
    if(day.val()<=21){
      zodiac = "Scorpio";
    }
    else{
      zodiac = "Sagittarius";
    }
  }else if(month.val()==="12"){
    if(day.val()<=21){
      zodiac = "Sagittarius";
    }
    else{
      zodiac = "Capricorn";
    }
  }else if(month.val()==="01"){
    if(day.val()<=19){
      zodiac = "Capricorn";
    }
    else{
      zodiac = "Aquarius";
    }
  }else if(month.val()==="02"){
    if(day.val()<=18){
      zodiac = "Aquarius";
    }
    else{
      zodiac = "Pisces";
    }
  }else{
    zodiac = "***invalid birth month/day entered***";
  }
  
  //Chinese Zodiac Alg
  
  if(year.val()%12===10){
    chineseZodiac = "horse";
  }else if(year.val()%12===9){
    chineseZodiac = "snake";
  }else if(year.val()%12===8){
    chineseZodiac = "dragon";
  }else if(year.val()%12===7){
    chineseZodiac = "rabbit";
  }else if(year.val()%12===6){
    chineseZodiac = "tiger";
  }else if(year.val()%12===5){
    chineseZodiac = "ox";
  }else if(year.val()%12===4){
    chineseZodiac = "rat";
  }else if(year.val()%12===3){
    chineseZodiac = "pig";
  }else if(year.val()%12===2){
    chineseZodiac = "dog";
  }else if(year.val()%12===1){
    chineseZodiac = "rooster";
  }else if(year.val()%12===0){
    chineseZodiac = "monkey";
  }else if(year.val()%12===11){
    chineseZodiac = "goat";
  }else{
    chineseZodiac = "***invalid year entered***";
  }
  container.append(`<div class="card">
  <p class="message"> Hello ${name}! Your zodiac sign is ${zodiac} and your Chinese zodiac animal is the ${chineseZodiac}! </p> <br>
  <button class="delete">Clear!</button> <br>
  </div>`);

  var deleteBtn = $('.delete');
  deleteBtn.on("click", deletezodiac);
  function deletezodiac(){
    if(event.target.className==="delete"){
      event.target.parentNode.remove();
    }
  }
}
