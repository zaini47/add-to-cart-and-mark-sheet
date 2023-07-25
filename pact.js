

function adding(){
    let user_input = document.getElementById("add").value ;
    let carry= document.getElementById("to-do-list");
    const  item= document.createElement("li");
    var closeing = document.createTextNode("\u00D7");
    carry.appendChild(item);
    item.append(user_input);
    item.appendChild(closeing);
}

