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
  const expense = food + rent + clothes;
  const balance =incomeValue  - expense;
  if (isNaN(incomeValue) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
    alert("please input valid numer");
  } else if (incomeValue < expense) {
    alert("you expense is begest then income");
  } else {
    setValue("total", expense);
    setValue("balance", balance);
  }
});

// add saving button
document.getElementById("saveBtn").addEventListener("click", function () {
  const income =document.getElementById("income");
  const incomeString = income.value;
  const incomeValue = parseFloat(incomeString);
  const balance =document.getElementById("balance");
  const balanceString = balance.innerText;
  const balanceValue = parseFloat(balanceString);
  console.log(balanceString)
  const saving = getInputValue("save");
  if(isNaN(saving)){
    alert("please valid saving number")
    return;
  }else{
    const savingMoney = incomeValue * (saving / 100);
    const remainBalance = balanceValue - savingMoney;
    setValue("savingAmount",savingMoney);
    setValue("remain",remainBalance)
    income.value = "";
  }
 
});
