function pairSocks(theSocks)
{
  result=0;
  while(theSocks.length>0)
  {
    compVal=theSocks[0];
    socksFiltered=theSocks.filter(sock=>sock==compVal);
  	var pair=parseInt(socksFiltered.length/2);
    result+=pair;
    for( var i = 0; i < theSocks.length; i++){ 
   	if ( theSocks[i] == compVal) {
     theSocks.splice(i, 1); 
     i--;
   }  
	}
  }
  return result;
}
console.log('Hasil Function: ', pairSocks([5,13,7,5,9,20,9,5,14,5]));