var nomeHamburger = document.getElementById('nome-hamburger');
var listeIngredienti = document.getElementsByClassName('liste')[0].getElementsByTagName('input');
var cupon = document.getElementById('cupon');
var go = document.getElementsByTagName('button')[0];
var total =document.getElementsByClassName('costo-totale')[0];
var totaleSelezionato = 0;
go.addEventListener('click',function() {
// ----------------------------------------------------------------------------------------------------
  // dobbiamo far si che il nome sia obbligatorio,in caso la stinga dell'input sia vuota Alert()
  if (nomeHamburger.value == '') {
    alert('Inserire')
  }
// ----------------------------------------------------------------------------------------------------
  // dobbiamo far si che l'utente selezioni almeno due ingredienti,attribuire un valore a ogni ingrediente che serviranno poi per la somma del totale
  var flag = 0;
  var ingredientiSelezionati =[];
  for (var i = 0; i < listeIngredienti.length; i++) {
    if (listeIngredienti[i].checked === true) {
      flag += 1;
      ingredientiSelezionati.push(parseInt(listeIngredienti[i].value));
    }
  }
  for (var i = 0; i < ingredientiSelezionati.length; i++) {
  totaleSelezionato += ingredientiSelezionati[i]
  }

  if (flag < 2) {
    alert('scegli');
  }
// ----------------------------------------------------------------------------------------------------
// devo creare un array di stringhe contenenti coupon,se quello che inserisce l'utente è tra questi sconto secco del 20%
var listaCoupon = ['MARTEDI20','LUNEDI20','MERCOLEDI20']
var cuponEsistente = false;
for (var i = 0; i < listaCoupon.length; i++) {
  if (cupon.value === listaCoupon[i]) {
    cuponEsistente = true
  }
}
// ----------------------------------------------------------------------------------------------------
// sul pulsante ci sarà una forma onclick che darà via alla somma del prezzo degli ingredienti scelti e riporterà il toytale nel div presente nel footer, in caso ci sia anche il copon,darà il valore scontato;
 var sconto;
 if (cuponEsistente !== true) {
   total.innerText = 50 + totaleSelezionato;
 }else{
   sconto = ((50 + totaleSelezionato) * 20) / 100;
   total.innerText = 50 + totaleSelezionato - sconto;
 }
 totaleSelezionato = 0;
});