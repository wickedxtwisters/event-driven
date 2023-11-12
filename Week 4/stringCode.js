function checkCreds(){
    //input validation for week 3
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "Status of Login";
    //variables we need
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;
    //fill in the variables
    //working on inputting first name
    firstName = document.getElementById("fName").value;
    console.log("The first name was inputted as " + firstName);

    lastName = document.getElementById("lName").value;
    console.log("The last name was inputted as " + lastName);

    zipCode = document.getElementById("zipCode").value;
    console.log("The zipCode was inputted as " + zipCode);

    fullName = firstName + " " + lastName;
    console.log("The full name was inputted as " + fullName);

    fullNameLength = fullName.length;
    console.log("The full name has " + fullNameLength + " characters.");

    zipCodeNumb = parseInt(zipCode);
    console.log("The zip code number is" + zipCodeNumb);

    //Things to check for: fullNameLength is less than 20 characters,
    //zipcode has only 5 digits
    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML = "Invalid full name";
    } else if(zipCode.length != 5){
        document.getElementById("loginStatus").innerHTML = "Invalid zipcode";
    } else{
        alert("User credentials passed, welcome to the site, " + fullName);
    }
}

function checkPalin(){
    console.log("checkPalin() started");
    //record the string into a variable
    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("entStr is " + entStr);

    //take away any spaces
    var entStrNoSpace;
    entStrNoSpace = entStr.split(" ").join("");
    console.log("entStr with no spaces is " + entStrNoSpace);

    //create reverse array variable and reverse string
    var revStr;
    const revArray = [];
    var length = entStrNoSpace.length - 1;
    console.log("string length is " + length);

    //input into array and reverse it
    for(var i = length; i >= 0; i--){
        revArray.push(entStrNoSpace[i]);
    }

    //convert to a string from an array
    revStr = revArray.join("");
    console.log("reversed is " + revStr)

    //compare rev to string and write to status
    var equal = 0;
    equal = (entStrNoSpace === revStr);
    console.log("the ent and reverse being equal is: " + equal);

    //write to palindrome status
    if(equal == true){
        document.getElementById("palinStatus").innerHTML = entStr + "<b>is</b> a palindrome"
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + "is <b>not</b> a palindrome"
    }
}

function playStation(){
    //write to the log for debugging
    console.log("playStation() started");
    mySound = new sound("us-lab-background-1.mp3");
    console.log("playing us-lab-background-1.mp3 using the sound () function");
    mySound.play();
}

function sound(srcFile){
    //create a instance of the audio class
    this.sound = document.createElement("audio");
    //sets the source for the srcFile
    this.sound.src = srcFile
    //loads everything needed for aydio
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    document.body.appendChild(this.sound);
    //play audio
    this.play = function(){
        this.sound.play();
    }
    //stop audio
    this.stop = function(){
        this.sound.pause();
    }
}