let group = []
let option = ""
do {
   
   let patient = ""
   for (let c = 0 ; c < group.length ; c++) { 
     patient += ((c + 1) + "° - " + group[c] + "\n")

   }
    option = prompt(`the list of patients:\n${patient} \n \n 1 - add patient \n 2 - consult patient \n 3 - Quit`)

    if (option == 1 ){ 
       let newPatient = prompt("Who is the new patient ?")
      group.push(newPatient)

   }
   else if (option == 2) { 
      if (group.length > 0){ 
        alert (`the patient consulted was : ${group[0]} . `)
        group.shift(patient) 
      } 
      else {
         alert("There is no patient waiting for the appointment . ")
      }
   }
  

} while (option != 3) 