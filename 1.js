function myBiodata(nama='', umur=0){
 var biodata={
   name:nama,
   age:umur,
   address:'Jalan Pales 7, Medan',
   hobbies:['Futsal','Badminton','Coding'],
   is_married:false,
   list_school:[{
	 name:'SD Budi Murni 2',
     year_in:'2003',
     year_out:'2009',
     major:null     
   },
   {
     name:'SMP Santo Thomas 1',
     year_in:'2009',
     year_out:'2012',
     major:null 
   },
   {
     name:'SMA 6',
     year_in:'2012',
     year_out:'2015',
     major:'Science' 
   },
   {
     name:'Politeknik Negeri Medan',
     year_in:'2016',
     year_out:'2019',
     major:'Computer Science' 
   }],
   skills:[
   {
   	name:'Programming',
    level:'Beginner'
   },
   {
   	name:'Programming2',
    level:'Intermediete'
   },
   ],
   interest_in_coding: true
 }
  return biodata;
}
console.log('Hasil Function',myBiodata('Andro',21));