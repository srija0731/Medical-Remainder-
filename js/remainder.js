// =====================================
// Medical Reminder System
// reminder.js
// =====================================


// Save medicine data
function saveMedicine(medicine) {

    let medicines = JSON.parse(
        localStorage.getItem("medicines")
    ) || [];


    medicines.push(medicine);


    localStorage.setItem(
        "medicines",
        JSON.stringify(medicines)
    );

}



// Get all medicines

function getMedicines(){

    return JSON.parse(
        localStorage.getItem("medicines")
    ) || [];

}



// Delete medicine

function deleteMedicine(index){

    let medicines = getMedicines();


    medicines.splice(index,1);


    localStorage.setItem(
        "medicines",
        JSON.stringify(medicines)
    );


    alert("Medicine deleted");

    location.reload();

}



// Display medicines on dashboard

function displayMedicines(){


    const container =
    document.getElementById("medicineContainer");


    if(!container) return;



    let medicines = getMedicines();



    if(medicines.length === 0){

        container.innerHTML =
        `
        <h3>
        No medicines added yet
        </h3>
        `;

        return;

    }



    container.innerHTML="";



    medicines.forEach((medicine,index)=>{


        container.innerHTML +=

        `
        <div class="medicine-card">


        <h3>
        ${medicine.name}
        </h3>


        <p>
        💊 Dosage: ${medicine.dosage}
        </p>


        <p>
        ⏰ Time: ${medicine.time}
        </p>


        <p>
        📅 ${medicine.frequency}
        </p>


</div>


<div>

<button 
onclick="takeMedicine(${index})"
style="
background:#22c55e;
color:white;
border:none;
padding:10px;
border-radius:8px;
cursor:pointer;">
Taken ✓
</button>


<button 
onclick="deleteMedicine(${index})"
style="
background:#ef4444;
color:white;
border:none;
padding:10px;
border-radius:8px;
cursor:pointer;">
Delete
</button>


</div>


</div>
`;

    });


}




// Reminder Notification

function checkReminder(){


    let medicines = getMedicines();


    let currentTime =
    new Date()
    .toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
    });



    medicines.forEach(medicine=>{


        if(medicine.time === currentTime){


            alert(
            "🔔 Reminder: Take "
            + medicine.name
            );


        }


    });


}



// Check every minute

setInterval(
    checkReminder,
    60000
);
function takeMedicine(index){


let medicines = getMedicines();


medicines[index].status="Taken";


medicines[index].takenAt =
new Date().toLocaleString();


localStorage.setItem(
"medicines",
JSON.stringify(medicines)
);


alert("Medicine marked as taken ✅");


displayMedicines();

}
