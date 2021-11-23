function segundaFase (){

    var question = (prompt (" 1-Atacar com catapultas à longa distância.\n 2- Avançar para um confronto na praça central de Novigrad."))
    
    
    
    if (question == 1){
       
        window.location.href = "Ciri-game over fase 2.html"
       
    }else if (question == 2){
        
         window.location.href = "Ciri-terceira-fase.html"
        
    }else{
        
        alert("digite 1 ou 2")
    }
    
    }
    
    