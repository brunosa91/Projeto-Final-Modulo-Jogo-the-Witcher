function terceiraFase (){
    var cont = 0
    var tent = 1
    while(cont < 3 ){

        var question = (prompt ("Responda exatamente o número, ex: 404"))
    
    
        if (question == 20){
       
            window.location.href = "Ciri-Final.html"

        break;
       
        
        }

        else if(tent < 3)
            {
            
            alert("Resposta errada!\n Metragem errada")

        
            }

        else
            {

            window.location.href = "Ciri-game over fase 3.html"
            /*break;*/
            
            }


        cont ++
        tent ++
    }
    
}


    