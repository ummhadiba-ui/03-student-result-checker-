let studentName = document.getElementById("studentname");
let marks = document.getElementById("percentage");
let button = document.querySelector("button");
let result = document.getElementById("result");


button.addEventListener("click", checkResult);


function checkResult(){

    let name = studentName.value;
    let score = Number(marks.value);

    result.innerHTML = "";

    let message = document.createElement("p");


    if(name === ""){

        message.textContent = "Please enter your name.";

    }

    else if(marks.value === ""){

        message.textContent = "Please enter your marks.";

    }

    else if(score < 0 || score > 100){

        message.textContent = "Please enter marks between 0 and 100.";

    }

    else if(score >= 90){

        message.textContent = "Excellent, " + name + "! 🌟 You achieved an outstanding result!";

    }

    else if(score >= 75){

        message.textContent = "Great job, " + name + "! 🎉 You performed very well!";

    }

    else if(score >= 50){

        message.textContent = "Congratulations, " + name + "! ✅ You passed. Keep improving!";

    }

    else{

        message.textContent = "Keep practicing, " + name + "! 💪 You can improve!";

    }


    result.appendChild(message);

}
