function questionOne() {
    var hiit = document.getElementById('hiit');
    var strength = document.getElementById('strength');

    //If "HIIT" is selected, question 2 needs to ask user about height and weight. 
    hiit.onclick = document.getElementById('form2').style.display='block';
    //If "Strength" is selected, question 2 needs to ask what muscle group(s) user wants to exercise.
    strength.onclick = document.getElementById('form3').style.display='block';
}

window.onload = questionOne();

//Limit number of muscle group selections to 2.
function validateMuscleGroupSelections() {
    var checkboxes = document.getElementsByName("muscleGroup");
    var numberOfCheckedItems = 0;
    var muscleGroup1;
    var muscleGroup2;
    for(var i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            muscleGroup1 = checkboxes[i].id;
            numberOfCheckedItems++;
        }
        //When at 2, the unchecked checkboxes need to have attribute of "grayed out" so that they are no longer selectable. 
        if(numberOfCheckedItems == 2) {
            muscleGroup2 = checkboxes[i].id;
            
        }
    }
}