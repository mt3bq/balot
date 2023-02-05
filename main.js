let box_1=document.querySelector('.box_1');
let box_2=document.querySelector('.box_2');
console.log(box_1);
let box=document.querySelector('.box');
let res=document.querySelector('.res');











let gear=document.getElementById('gear');
let closee=document.getElementById('close');
console.log(closee);


//for(let i=0;i<10;i++){
  //  box_1.innerHTML+=`<p>777  ${i}</p>`;
//}

gear.onclick=()=>{
box.classList.add('show');
}
closee.onclick=()=>{
    box.classList.remove('show');
}

box.let

res.addEventListener('click',e=>{
    
 let viled=false;
 let total_2=document.querySelector('.total_2');
  let me=document.getElementById('me').value;
  let him=document.getElementById('him').value;
 if(me!=''|| him!='' && me.length>=3){
  
  box_1.innerHTML+=`<p>${me}</p>`;
  box_2.innerHTML+=`<p>${him}</p>`;
  total_2.innerText=him;
  me.value='';
  him.value='';
  
  total_2.style.display="flex";
  viled=true;
 }

    if(viled==false){
      e.preventDefault();
    }
 
})
    
  
    
  
    

