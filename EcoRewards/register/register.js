//Lets HTML load before running the JS
document.addEventListener("DOMContentLoaded", () => {

    //Back button
    const backButton = document.getElementById("backButton");
    backButton.addEventListener("click", () => {
        //Takes user to entry page once clicked
        window.location.href = "../entry/entry.html";
    });

    //Register form
    const registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", async function(event){
        event.preventDefault(); //prevent page reload

    //collects user input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    //makes sure name, email and password fields are filled in
    if (!name || !email || !password) {
          alert("Please fill in all the fields");
          return;
    }

    //send user data to backend
    try {
        const response = await fetch("/register", { //REPLACE WITH ACTUAL BACKEND ENDPOINT
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, email, password}) //Convert object to json string
        });

        const result = await response.json();
        // if registration is successful it sends user to the homepage
        if (result.success){
        window.location.href = "../homepage.html";

        } else {
            //login failed, shows error message
            alert(result.message);
        }

    } catch (error) {
        //alerts us of errors (network or unexpected)
        console.error("Error:", error);
        alert("Somethings went wrong, try again");
    }
    });
});