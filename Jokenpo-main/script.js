
    var cont1 = 0;
	var cont2 = 0;
	function iniciar(){
	var jogador1 =  Math.floor(Math.random() * 3);
	var jogador2 =  Math.floor(Math.random() * 3);



    if(jogador1 == 0 ){
        document.querySelector('img.img1').src="images/pedra1.png"
        }
    if(jogador1 == 1){
        document.querySelector('img.img1').src="images/papel1.png"
    }
    if(jogador1 == 2){
        document.querySelector('img.img1').src="images/tesoura1.png"
    }
    if(jogador2 == 0 ){
        document.querySelector('img.img2').src="images/pedra2.png"
    }
    if(jogador2 == 1 ){
        document.querySelector('img.img2').src="images/papel2.png"
    }
    if(jogador2 == 2){
        document.querySelector('img.img2').src="images/tesoura2.png"
    }

    if((jogador1 == 0) && (jogador2 == 1)){
    	cont2 +=1;
    	document.querySelector('h1').innerHTML = "Jogador 2 CAMPEÃO";
    	document.getElementById('P2').innerHTML = "Jogador 2 = " + cont2 + " Pontos";
    	
    }
    if((jogador1 == 1) && (jogador2 == 0)){
    	cont1 +=1;
    	document.querySelector('h1').innerHTML = "Jogador 1 CAMPEÃO";
    	document.getElementById('P1').innerHTML = "Jogador 1 = " + cont1 + " Pontos";
    	
    }
    if((jogador1 == 1) && (jogador2 == 2)){
    	cont2 +=1;
    	document.querySelector('h1').innerHTML = "Jogador 2 CAMPEÃO";
    	document.getElementById('P2').innerHTML = "Jogador 2 = " + cont2 + " Pontos";
    	
    }
    if((jogador1 == 0) && (jogador2 == 2)){
    	cont2 +=1;
    	document.querySelector('h1').innerHTML = "Jogador 2 CAMPEÃO";
    	document.getElementById('P2').innerHTML = "Jogador 2 = " + cont2 + " Pontos";
    	
    }
    if((jogador1 == 2) && (jogador2 == 0)){
    	cont2 +=1;
    	document.querySelector('h1').innerHTML = "Jogador 2 CAMPEÃO";
    	document.getElementById('P2').innerHTML = "Jogador 2 = " + cont2 + " Pontos";
    	
    }    
    if((jogador1 == 2) && (jogador2 == 1)){
    	cont1 +=1;
    	document.querySelector('h1').innerHTML = "Jogador 1 CAMPEÃO";
    	document.getElementById('P1').innerHTML = "Jogador 1 = " + cont1 + " Pontos";
    	
    }
    if(jogador1 == jogador2){
    	document.querySelector('h1').innerHTML = "EMPATE";
    }

}    
function zerar(){

    cont1= 0;
    cont2 = 0;

    document.getElementById('P1').innerHTML = "Jogador 1 = " + cont1 + " Pontos";
    document.getElementById('P2').innerHTML = "Jogador 2 = " + cont2 + " Pontos";
        
    }