
// let tasks = [];
// if (localStorage.getItem("tasks")) {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
//     displaylists();
// }

// function adding() {
//     const inputs = document.getElementById("add");
//     const uservalue = inputs.value.trim();

//     if (uservalue !== "") {
//         tasks.push(uservalue);
//         inputs.value = "";
//         displaylists();
//         saveToLocalStorage();
//     }
// }

// function displaylists() {
//     const listing = document.getElementById("to-do-list");
//     listing.innerHTML = "";

//     tasks.forEach(task => {
//         const item = document.createElement("li");
//         item.textContent = task;
//         listing.appendChild(item);
//         item.classList.add(
//             "list-group-item",
//             "p-2",
//             "list-group-item-action"
//         );

//         const clearbutton = document.createElement("button");
//         clearbutton.textContent = "clear";
//         clearbutton.onclick = function () {
//             const index = tasks.indexOf(task);
//             if (index !== -1) {
//                 tasks.splice(index, 1);
//                 displaylists(); 
//                 saveToLocalStorage();
//             }
//         };
        
//         item.appendChild(clearbutton);
//         listing.appendChild(item);
//     });
// }

// function saveToLocalStorage() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }


let tasks=[];
function adding() {
    const inputs = document.getElementById("add");
    const uservalue = inputs.value.trim();
    if (uservalue !== "") {
        tasks.push(uservalue);
        const stringdata =JSON.stringify(tasks)
        

        inputs.value ="";
        displaylists();
        }
    }

function displaylists() {
    const listing = document.getElementById("to-do-list");
    listing.innerHTML = "";

    tasks.forEach(task => {
        const item = document.createElement("li");
        item.textContent = task;
        listing.appendChild(item);
        const clearbutton = document.createElement("button");
        clearbutton.textContent = "clear";
        clearbutton.onclick = function () {
        listing.removeChild(item);
    }
    item.appendChild(clearbutton);
    listing.appendChild(item);
    });
}





// tasks =JSON.stringify("tasks")

// if (a>=80 && a<=100 )
// {
//      console.log("you are in merit")
//     } else if (a>=60 && a<=70 )
//     { 
//         console.log("you are in 1st div")
//     }
//      else if (a>=40 && a<=50 )
//      {
//          console.log("you are in 2st div")
//         } else if (a>=33 && a<=39 )
//         {
//              console.log("you are in 3rd div")} 
             
//              else{ 
//                 cosole.log("invalid")
//             }


// thats the correct code 

