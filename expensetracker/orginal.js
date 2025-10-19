    // add
    function add(){
        //get all data
        let title=document.getElementById("title").value;
        let amount=document.getElementById("amount").value;
        let date=document.getElementById("date").value;
        console.log(title,amount,date);
        if(!title ||!amount ||!date){
            alert("fill all fields")
        }
        else{
            const expense={
                title:title,
                amount:amount,
                date:date
            }
            console.log(expense)
            localStorage.setItem(title,JSON.stringify(expense));
            alert("data added successfully");
            datadisplay(title)
            
            
        document.getElementById("title").value='';
        document.getElementById("amount").value='';
        document.getElementById("date").value='';
        }
    }
    //datadisplay
    function datadisplay(title){
       let data=localStorage.getItem(title);
       
       let expense=JSON.parse(data)
       console.log(expense)
       let tdata=expense.title
       let adata=expense.amount
       let ddata=expense.date
       document.getElementById('displayoutput').innerHTML+=`
       <tr >
        
                    <td id="titlename">${tdata}</td>
                    <td id="amountdata">${adata}</td>
                    <td id="datedata">${ddata}</td>
                    <td><button type="button" class="btn btn-primary" onclick="edit()">edit</button>
                        
                    </td>
                    </tr>
       `

    }

    function edit(){
      let editkey=document.getElementById("titlename").innerHTML;
      console.log(editkey);
       
      
      let data=localStorage.getItem(editkey);
      console.log(data)
      if(data){
        let expensedata=JSON.parse(data);
        let titlenew=expensedata.title;       
        let amountnew=expensedata.amount
        let datenew=expensedata.date

        document.getElementById("title").value=titlenew;
        document.getElementById("amount").value=amountnew;
        document.getElementById("date").value=datenew;
        document.getElementById('displayoutput').innerHTML=''  
      }
    
    }

   function deletedata(){
  
    document.getElementById("title").value='';
    document.getElementById("amount").value='';
    document.getElementById("date").value='';
     let deletekey=document.getElementById('remove').value;
     
     console.log(deletekey);
     let data=localStorage.getItem(deletekey);
      console.log(data);
      if(data){
        localStorage.removeItem(deletekey);
        alert('data removed successfully');
        document.getElementById('displayoutput').innerHTML=''  
             
      }
        
    }
    

    