function PrimeiraFase (){

var question = (prompt (" 1 - Pega o bandolim para atacar o guarda.\n 2 - Puxa sua faca para tentar matá-lo."))



if (question == 1){
   
    window.location.href = "Dandelion-segunda-fase.html"
   
}else if (question == 2){
    
     window.location.href = "Dandelion-game over fase 1.html"
    
}else{
    
    alert("digite 1 ou 2")
}

}

