function abbreviation(theString)
{
  var theResult='';
  var c='';
  var stringLength=theString.length;
  for(i = 0; i<stringLength; i++)
  {
    c = theString.charAt(i);
    if(/^[A-Z]*$/.test(c))
    {
      theResult+=c;
    }
  }
  return theResult;
}
console.log('Hasil Function: ', abbreviation('Negara Kesatuan Republik Indoneia'));