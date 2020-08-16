/*<tbody>
                        <tr>
                            <td>1</td>
                            <td>Bob</td>
                            <td>Marley</td>
                            <td>64</td>
                            <td>
                                <div class="btn-group">
                                    <button class="btn-info btn">
                                        Modify
                                    </button>
                                    <button class="btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>                        
                        
                    </tbody>
*/

let users=[
 {firstName:"Joe", surName: "Burger", age:87 },
 {firstName:"Brian", surName: "Adams", age:61 },
 {firstName:"Julie", surName: "Andrews", age:85 },
 {firstName:"Peter", surName: "Sellers", age:53 },
 {firstName:"Adam", surName: "Sandler", age:57 }


];


let tableBody = document.querySelector("#userTable tbody");

let createTD = (content, parent ) =>{
    let td = document.createElement("td");
    td.innerHTML = content; // parseInt(content) +  1;
    parent.appendChild(td);
    return td;     
};

let createButtonGroup =  parent => {
    /*<div class="btn-group">
        <button class="btn-info btn">
            <i class="fas fa-sync-alt"></i>
        </button>
        <button class="btn btn-danger">
            <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    */

    let group = document.createElement("div");
    group.className = "btn-group";
    let btn1 = document.createElement("button");
    btn1.className = "btn-info btn";
    btn1.innerHTML = '<i class="fa fa-refresh"></i>';
    let btn2 = document.createElement("button");
    btn2.className = "btn btn-danger";
    btn2.innerHTML = '<i class="fa fa-trash"></i>';
    group.appendChild(btn1);
    group.appendChild(btn2);

    let td = document.createElement("td");
    td.appendChild(group)
    
    parent.appendChild(td);


};

for (let u in users) {
   let tr = document.createElement("tr");
   createTD(parseInt(u)+1,  tr);
   for (val of Object.values(users[u])) {
    createTD(val,  tr);    
   }
   
   createButtonGroup(tr);
   //createTD(users[u].firstName,  tr);
   //createTD(users[u].lastName,  tr);
   //createTD(parseInt(users[u].age),  tr);
   tableBody.appendChild(tr);     
}


