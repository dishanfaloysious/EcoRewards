//Lets HTML load before running the JS
document.addEventListener("DOMContentLoaded", () => {

    //Back button
    const backButton = document.getElementById("backButton");
    backButton.addEventListener("click", () => {
        //Takes user to entry page once clicked
        window.location.href = "../entry/entry.html";
    });

    //Login form
    document.getElementById("loginForm").addEventListener("submit", async function(event){
        event.preventDefault(); //prevent page reload

    //stores user input
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    //Makes sure email and password fields are filled
    if (!email || !password) {
          alert("Please enter email and password");
          return;
    }

    //Sends user data to backend
    try{
        const response = await fetch("/login", { //REPLACE WITH ACTUAL BACKEND ENDPOINT
            method: "POST", //Sends data
            headers: {"Content-Type": "application/json"}, //Tells backend to expect JSON
            body: JSON.stringify({email, password}) //Convert object to string (JSON)
        });

        const result = await response.json();


        //Backend Response
        if (result.success) {
            // if logins successful should send user to the homepage
            window.location.href = "../homepage.html"; //MAKE SURE ITS THE NAME OF THE HOMEPAGE HTML
        } else{
            //login failed, shows error message
            alert(result.message);
        }

    } catch (error) {
      //alerts us of errors (network or unexpected)
      console.error("Error:", error);
      alert("Something went wrong. Please try again")

    }
   });
});