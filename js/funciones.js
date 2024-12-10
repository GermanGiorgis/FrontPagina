function mostrar (desc) {
   let i = desc;
   i.style.transition = ' all 1500ms ease';
   i.style.height='250px';
   i.style.visibility='visible';
   i.style.padding='20px';
   return i;
}


function ocultar (desc) {
   let i = desc;
   i.style.height = '0px';
   i.style.visibility='hidden';
   i.style.padding='0px';
   return i;
}
