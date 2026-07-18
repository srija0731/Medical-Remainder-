// =================================
// Medical Reminder Notifications
// notification.js
// =================================


// Request notification permission

function requestNotificationPermission(){

    if("Notification" in window){

        Notification.requestPermission()
        .then(permission=>{

            if(permission==="granted"){

                console.log(
                "Notification permission granted"
                );

            }

        });

    }

}




// Send notification

function sendNotification(title,message){


    if(Notification.permission==="granted"){


        new Notification(title,{

            body:message,

            icon:"../assets/logo.png"

        });


    }

}




// Check medicine time

function checkMedicineTime(){


    let medicines =
    JSON.parse(
        localStorage.getItem("medicines")
    ) || [];



    let currentTime =
    new Date()
    .toLocaleTimeString([],{

        hour:"2-digit",
        minute:"2-digit"

    });



    medicines.forEach(medicine=>{


        if(medicine.time === currentTime){


            sendNotification(

                "💊 Medicine Reminder",

                "Time to take " 
                + medicine.name

            );


        }


    });



}



// Check every minute

setInterval(

checkMedicineTime,

60000

);
