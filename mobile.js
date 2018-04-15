// Main navigation menu
function ShowSection(nav_id) {
    // Button press command differentiation from the URL
    // INTENDENT USAGE www.shmulman.co.il/index.html?Cost
    // var Command = URL_Command();
    // document.getElementById("Output4").innerHTML = "Command = " + Command;
    // if (Command == 'Home') {nav_id = 'Home';}
    // if (Command == 'About') {nav_id = 'About';}
    // if (Command == 'Cost') {nav_id = 'Cost';}
    // if (Command == 'Contacts') {nav_id = 'Contacts';}    
    
    document.getElementById("Home").style.display="none";
    document.getElementById("About").style.display="none";
    document.getElementById("Cost").style.display="none";
    document.getElementById("Contacts").style.display="none";
    document.getElementById(nav_id).style.display = "block";
}

// 'Cost' button initiation from external URL
function URL_Command() {
    var FullURL = window.location.search.substring(1);    
    var ParameterArray = FullURL.split('?'); // Slits one string into words and removes & sign
    var ParameterValue = ParameterArray[0];

    if (ParameterValue == 'About' || ParameterValue == 'Cost' || ParameterValue == 'Contacts') 
    {
         return ParameterValue;
    }
    else
    {
         ParameterValue = 'Home';
         return ParameterValue;
    }    
}

// Questions workflow functions ***********************
// OnLoad sequence for Home Terms & Questions
function ClearText_ru() {
    document.getElementById("t1").style.display="none";
    document.getElementById("t2").style.display="none";
    document.getElementById("t3").style.display="none";
    document.getElementById("t4").style.display="none";
    document.getElementById("q1").style.display="none";
    document.getElementById("q2").style.display="none";
    document.getElementById("q3").style.display="none";
    document.getElementById("q4").style.display="none";
    document.getElementById("q5").style.display="none";
    document.getElementById("q6").style.display="none";
}
function ClearText_he() {
    document.getElementById("q1").style.display="none";
    document.getElementById("q2").style.display="none";
    document.getElementById("q3").style.display="none";
}
// Choose Home Terms & Questions ********************************
function ShowQuery_ru(nav_id) {
    document.getElementById("t1").style.display="none";
    document.getElementById("t2").style.display="none";
    document.getElementById("t3").style.display="none";
    document.getElementById("t4").style.display="none";
    document.getElementById("q1").style.display="none";
    document.getElementById("q2").style.display="none";
    document.getElementById("q3").style.display="none";
    document.getElementById("q4").style.display="none";
    document.getElementById("q5").style.display="none";
    document.getElementById("q6").style.display="none";
    document.getElementById(nav_id).style.display = "block";
}
function ShowQuery_he(nav_id) {
    document.getElementById("q1").style.display="none";
    document.getElementById("q2").style.display="none";
    document.getElementById("q3").style.display="none";
    document.getElementById(nav_id).style.display = "block";
}

