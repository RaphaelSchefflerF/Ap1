programa {
  funcao inicio() {
    inteiro numero, contador, nf, soma #Variaveis ineteiras
    soma=0 #Variavel soma recebe 0
   escreva ("digite o numero inteiro positivo:") #Escreva na tela
   leia (numero) #Leia o numero
   escreva ("digite o numero final inteiro positivo:") #Escreva na tela
   leia (nf) #Leia o numero final
   para  ( contador=1; contador <=nf; contador ++ ) {
    se (contador %2==0) #Se o contador for par
    soma=soma+contador  #Soma recebe soma mais contador
   } 
   escreva (soma) #Escreva na tela o resultado da soma
  
  }
}
