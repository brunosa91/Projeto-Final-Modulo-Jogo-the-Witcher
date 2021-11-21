function segundaFase (){
    var cont = 0
    var tent = 1
    while(cont < 3 ){

        var question = (prompt ("Responda exatamente o número, ex: 404"))
    
    
        if (question == 3){
       
            window.location.href = "terceira fase geralt.html"

        break;
       
        
        }

        else if(tent < 3)
            {
            
            alert("Resposta errada!\nNúmero errado de nilfigardianos")

        
            }

        else
            {

            alert("game over")
            /*break;*/
            
            }


        cont ++
        tent ++
    }
    
}


    