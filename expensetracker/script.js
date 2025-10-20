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
    datadisplay();
  }

}


//   //datadisplay
function datadisplay() {

    //get the table body
    let tablebody=document.getElementById('displayoutput') ;

    //clear previous rows
    tablebody.innerHTML='';

    //get all expenses from the local storage
    let existing=JSON.parse(localStorage.getItem("expenses"))||[];

    //loop and show each expenses as table row
    existing.forEach((item)=>{
        let row=`
       <tr >
        
                    <td id="titlename">${item.title}</td>
                    <td id="amountdata">${item.amount}</td>
                    <td id="datedata">${item.date}</td>
                    <td><button type="button" class="btn btn-primary" onclick="edit()">edit</button>
                        
                    </td>
                    </tr>
       `;

       //add it to the table body
       tablebody.innerHTML+=row
       
    });
    
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


