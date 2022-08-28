/**
 * In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of 
 * the relative number of high and low cards remaining in the deck. This is called Card Counting.
 */
// passed
 let count = 0;

 function cc(card) {
   // Only change code below this line
   let array1 = [2, 3, 4, 5, 6];
   let array2 = [7, 8, 9];
   let array3 = [10, 'J', 'Q', 'K', 'A'];
   
   for (let index = 0; index < array1.length; index++) {
     if(array1[index] == card){
         count+=1;
     }
 }
 for (let index = 0; index < array2.length; index++) {
     if(array2[index] == card){
         count+=0;
     }
 }
 for (let index = 0; index < array3.length; index++) {
     if(array3[index] == card){
         count-=1;
     }
 }
   if(count<=0){
     return (count+' '+'Hold');
   }
   return count+" "+'Bet';
   // Only change code above this line
 }
 
 console.log(cc(2));console.log(cc(9)); cc(7); cc('K'); cc('A');