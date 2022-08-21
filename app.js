// console.log('money master connected')

// decleare function to get input value
function getInputValue(id) {
  const input = document.getElementById(id);
  const inputValueString = input.value;
  const inputValue = parseFloat(inputValueString);
  input.value = "";
  return inputValue;
}

// decleare function to set value to body
function setValue(id, value) {
  const getValue = document.getElementById(id);
  getValue.innerText = value;
}
 // error handle message
 const errorMassege = "please input value to input field or enter 0";
 const error = document.getElementById("error");

// add eventlistener to calculet button
const calculetBtn = document.getElementById("cal");

calculetBtn.addEventListener("click", function () {
   
  // get all input value
  const income =document.getElementById("income");
  const incomeString = income.value;
  const incomeValue = parseFloat(incomeString);
  const food = getInputValue("food");
  const rent = getInputValue("rent");
  const clothes = getInputValue("cloth");
//   get total value
  const expense = food + rent + clothes;
//   get reaming balance
  const balance =incomeValue  - expense;
//   check all value in number or not
  if (isNaN(incomeValue) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
    error.innerText = errorMassege 
  } else if (incomeValue < expense) {
    alert("you expense is begest then income");
  } else {
    setValue("total", expense);
    setValue("balance", balance);
    error.innerText = "";
  }
});

// add saving button
document.getElementById("saveBtn").addEventListener("click", function () {
    // get income value
  const income =document.getElementById("income");
  const incomeString = income.value;
  const incomeValue = parseFloat(incomeString);
//   get total balnce remaing
  const balance =document.getElementById("balance");
  const balanceString = balance.innerText;
  const balanceValue = parseFloat(balanceString);
//   get saving value
  const saving = getInputValue("save");
//   check input value is NaN or not;
  if(isNaN(saving)){
    error.innerText = errorMassege;
    return;
  }else{
    const savingMoney = incomeValue * (saving / 100);
    const remainBalance = balanceValue - savingMoney;
    setValue("savingAmount",savingMoney);
    setValue("remain",remainBalance)
    income.value = "";
    error.innerText = "";
  }
 
});
