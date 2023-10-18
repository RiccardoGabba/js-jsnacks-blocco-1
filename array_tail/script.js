function casuali() {
   let riomare = [];
   
    n = parseInt(document.getElementById("quanti").value);
    if (n > 0 && n <= 100) {
      str = "";
      for (i = 0; i < n; i++) {
           num = Math.round(Math.random()*100 + 1);
           
           riomare.push(num);
       }
      console.log(riomare) 
      document.getElementById("casuali").innerHTML = riomare.slice(riomare.length - 5, riomare.length);
     } 
     else {
        document.getElementById("casuali").innerHTML = "Inserisci un numero maggiore di 0 e inferiore a 100";
     }
  }