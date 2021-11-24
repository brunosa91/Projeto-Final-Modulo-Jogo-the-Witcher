function segundaFase (){
    var cont = 0
    var tent = 1
    while(cont < 3 ){

        var question = (prompt ("Responda o enigma!"))
    
    
        if (question == "fogo"){
       
            window.location.href = "Dandelion-terceira-fase.html"

        break;
       
        
        }

        else if(tent < 3)
            {
            
            alert("Resposta errada!\n Senha incorreta")

        
            }

        else
            {

            window.location.href = "Dandelion-game over fase 2.html"
            /*break;*/
            
            }


        cont ++
        tent ++
    }
    
}


    