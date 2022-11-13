
function controlemdp(mdp)
{
	
if(mdp.value.length<8){
 alert("le mot de passe doit contenir au moins 8 caractéres");
 mdp.focus();

return false;}
else  return true;
}


 function verif(t,t1,mdp1,mdp2,check)
  {
	  var test=true;
 if (t.value.length<3)
      test=false;
   else if( t1.value.length<3)
      test=false;
    else if(!controlemdp(mdp1))
      test=false;
    else if(!controlemdp(mdp2))
    test=false;
else if(mdp1.value!==mdp2.value)
   {alert("mots de passe différents");
      mdp1.focus();}
 else if(!check1.checked ){
   alert ("vous devez cocher");
   test=false;
 }
  }
  function verif1(A,B,mdp1,mdp2)
  {
	
	  var test=true;
 if (A.value.length<3)
      test=false;
   else if( B.value.length<3)
      test=false;
    else if(!controlemdp(mdp1))
      test=false;
    else if(!controlemdp(mdp2))
    test=false;
else (mdp1.value!==mdp2.value)
   {alert("mots de passe différents");
      mdp1.focus();
	  test=false;} 

}	
  }
  