// add
function add() {
  //read allvalues from form
  let title = document.getElementById("title").value;
  let amount = document.getElementById("amount").value;
  let date = document.getElementById("date").value;
  console.log(title, amount, date);

  //make sure all fileds are filled
  if (!title || !amount || !date) {

    alert("fill all fields");
    return;//stop here if validation failed

  }

  else 
    {

    //create an expense object
    const expense = {
      id: Date.now(),
      title: title,
      amount: amount,
      date: date

    }


    //|| [] = “If there’s nothing in localStorage, start with an empty array.”
    // Get existing expenses array from localStorage, or empty array if nothing yet
    let existing = JSON.parse(localStorage.getItem("expenses")) || [];

    //add new expense to array
    existing.push(expense);

    //save back to local storage
    localStorage.setItem("expenses", JSON.stringify(existing));

    //feedback and clear input fileds
    alert("expenses added successfully");
    document.getElementById("title").value = '';
    document.getElementById("amount").value = '';
    document.getElementById("date").value = '';

  }

}


//   //datadisplay
function datadisplay() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let data = localStorage.getItem(key);


    let expense = JSON.parse(data)
    console.log(expense)
    let tdata = expense.title
    let adata = expense.amount
    let ddata = expense.date
    document.getElementById('displayoutput').innerHTML = `
       <tr id="expenserow">
        
                    <td id="titlename">${tdata}</td>
                    <td id="amountdata">${adata}</td>
                    <td id="datedata">${ddata}</td>
                    <td><button type="button" class="btn btn-primary" onclick="edit()">edit</button>
                        
                    </td>
                    </tr>
       `
  }
}


function edit() {
  let editkey = document.getElementById("titlename").innerHTML;
  console.log(editkey);


  let data = localStorage.getItem(editkey);
  console.log(data)
  if (data) {
    let expensedata = JSON.parse(data);
    let titlenew = expensedata.title;
    let amountnew = expensedata.amount
    let datenew = expensedata.date

    document.getElementById("title").value = titlenew;
    document.getElementById("amount").value = amountnew;
    document.getElementById("date").value = datenew;
    localStorage.removeItem(editkey);
    document.getElementById('displayoutput').innerHTML = ''
  }

}

function deletedata() {

  document.getElementById("title").value = '';
  document.getElementById("amount").value = '';
  document.getElementById("date").value = '';
  let deletekey = document.getElementById('remove').value;

  console.log(deletekey);
  let data = localStorage.getItem(deletekey);
  console.log(data);
  if (data) {
    localStorage.removeItem(deletekey);
    alert('data removed successfully');
    document.getElementById('displayoutput').innerHTML = ''

  }

}


