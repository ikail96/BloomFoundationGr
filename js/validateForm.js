
    const name = document.getElementById("name");
    const surName = document.getElementById("surname");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const form  = document.getElementById("form");
    
    const name_Err = document.getElementById("name_Err");
    const email_Err = document.getElementById("email_Err");
    const surname_Err = document.getElementById("surname_Err");
    const message_Err = document.getElementById("message_Err");
    

    


    form.addEventListener("submit", (e) =>{

      var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (name.value === "" || name.value == null)
        {
            e.preventDefault();
            name_Err.innerHTML = "Name is required"
        }
        else {
            name_Err.innerHTML = ""
        }


        if (surName.value === "" || surName.value == null)
            {
                e.preventDefault();
                surname_Err.innerHTML = "Surname is required"
            }
            else{
                surname_Err.innerHTML = ""
            }

        if (!email.value.match((email_check))){
            e.preventDefault();
            email_Err.innerHTML = "Valid email  is required"
        }
        else{
            email_Err.innerHTML = ""
        }

        if (message.value === "" || message.value == null){
             e.preventDefault();
            message_Err.innerHTML = "Please write your message"
        } 
        else {
            message_Err.innerHTML = ""
        }



    })

   

