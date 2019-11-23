function arkademy(theNumber){
var numberRules = /^\d*$/;
if(!numberRules.test(theNumber))
{
   return 'Input Harus Angka';
}
var theResult='';
for(i=1;i<=theNumber;i++)
{
  if(i%3==0&i%7==0)
  {
    theResult+='Arkademy';
  }
  else if(i%3==0)
  {
    theResult+='Arka';
  }
  else if(i%7==0)
  {
    theResult+='Demy';
  }
  else
  {
    theResult+=i;
  }
  if(i!=theNumber)
  {
    theResult+=', ';
  } 
}
  return theResult;
}
console.log('Hasil Function: ', arkademy('21'));