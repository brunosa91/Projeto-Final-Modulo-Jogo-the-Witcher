function segundaFase (){
    var cont = 0
    var tent = 1
    while(cont < 3 ){

        var question = (prompt ("Responda exatamente o número, ex: 404"))
    
    
        if (question == 3){
       
            window.location.href = "Ciri-terceira-fase.html"

        break;
       
        
        }

        else if(tent < 3)
            {
            
            alert("Resposta errada!\nNúmero errado de nilfigardianos")

        
            }

        else
            {

            window.location.href = "Ciri-game over fase 2.html"
            /*break;*/
            
            }


        cont ++
        tent ++
    }
    
}


    