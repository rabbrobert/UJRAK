
function getDay() {
  var weekDay = new Date().getDay();
  var dayName = '';
  switch (weekDay) {
    case 0:
      dayName = 'Vas';
      break;
    case 1:
      dayName = 'Het';
      break;
    case 2:
      dayName = 'Ked';
      break;
    case 3:
      dayName = 'Sze';
      break;
    case 4:
      dayName = 'Csu';
      break;
    case 5:
      dayName = 'Pen';
      break;
    case 6:
      dayName = 'Szo';
      break;
  }
  return dayName;
}


//
function massModify(selector, attribute, value) {
  let allNodes = document.querySelectorAll(selector);
  for (i = 0; i < allNodes.length; i++) {
    allNodes[i][attribute] = value;
  }
}

//megrendeles
function sendOrder() {
  console.log(" Megrendeles");
}


// Megrendelis 1 es 10 kozott
function validateNumber(obj) {
  //console.log(obj.value);
  if (obj.value > 10) {
    obj.value = 10;
  } else if (obj.value < 1) {
    obj.value = 1;
  }
  showSumPrice(undefined, parseInt(obj.value));
}

function showSumPrice(price = 1000, amountNr = 1) {
  let showAmount = document.querySelector("span.show-amount");
  let summ = parseInt(price) * amountNr;
  showAmount.innerHTML = summ;
}


Element.prototype.setBorder = function () {
  this.style.border = "thick solid red";
}

let topPings = [
  "Szalonna",
  "Hagyma",
  "Tojas",
  "Sonka"
];

window.onbeforeunload = function () {



}

window.onload = function () {

  toppingSelect = document.querySelector("#topInput");
  let index = 0;
  console.log(toppingSelect);
  
  while ( toppingSelect && index < topPings.length) {
    let option = document.createElement("option");
    option.value = topPings[index];
    option.innerHTML = topPings[index];
    toppingSelect.appendChild(option);
    index++;
  }
  

  document.querySelector("#amountInput").addEventListener(
    "input", function (ev) {
      //console.log(this.value);
      validateNumber(this);
    }, false
  );

  showSumPrice();

  let orderForm = document.querySelector("#orderForm");

  /// add  tobb esemenukezelo is adhato egy objecthez
  orderForm.addEventListener("submit", function (ev) {
    ev.preventDefault();

    let inputs = this.querySelectorAll("input");
    let values = {};
    for (i = 0; i < inputs.length; i++) {
      values[inputs[i].name] = inputs[i].value;
      //console.log(inputs[i]);    
      //document.querySelector("input[name='topInput']").setBorder(); 
      inputs[i].setBorder();
    }
    // massModify("input","placeholder","VALAMI");
    ///document.querySelector("input[name='topInput']").setBorder(); 
  });

  ///
  let sendButton = document.querySelector("form .btn.btn-primary");
  /// csak egy esemenykezelo  a buttonhoz, nem fut mellette masik
  /* sendButton.onclick = sendOrder; */
  // tobb esemenykezelot is megenged, nem mukodik ha megadjuk -> sendButton.onclick = sendOrder; 
  sendButton.addEventListener("click", function (ev) {
    sendOrder();
  })



  let helpText = document.createElement("small");
  helpText.className = "form-text text-muted";
  helpText.innerHTML = "Adja meg a felteteket!";
  let parent = document.querySelector("div.form-group:nth-child(1)");
  parent.appendChild(helpText);

 
  // becsukja  a parent div - jet es annak a tobbi child - jat, 
  function alertCloseFunction() {
    this.parentElement.style.display = "none";
  }
  let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
  for (i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertCloseFunction);
  }



}


// akkor fut le ha valtozik a window merete
window.addEventListener("resize", function () {
  console.log(this.innerHeight, this.innerWidth);
});
