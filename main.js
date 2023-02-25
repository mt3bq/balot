let box_1=document.querySelector('.box_1');
let box_2=document.querySelector('.box_2');

let box=document.querySelector('.box');
let res=document.querySelector('.res');
let me_list=document.querySelector('.me_list');

let him=document.getElementById('him');
let me=document.getElementById('me');
let him_list=document.querySelector('.him_list');
let total_1=document.querySelector('.total_1');
let total_2=document.querySelector('.total_2');
let back_2=document.getElementById('back_2');
let new_game_1=document.getElementById('new_game_2');
let box_4=document.querySelector('.box_4');


let win=document.getElementById('win');


let gear=document.getElementById('gear');
let closee=document.getElementById('close');








gear.onclick=()=>{
box.classList.toggle('show');
}
closee.onclick=()=>{
    box.classList.remove('show');
}

let me_data=[];
let him_data=[];


res.onclick=(e)=>{

  let viled=false;
  
  if(me.value!=''&& him.value!=''){
   add_number_me_to_arry(me.value,him.value);
    //add_number_him_to_arry(him.value);  
    me.value="";
    him.value="";
    
    viled=true;
  }
 
  if(viled===false){
    e.preventDefault();
  }

  
}

   add_number_me_to_arry=(me_num,him_num)=>{

    me_data.push(+me_num);
    him_data.push(+him_num);

    
    
ي 

    add_number_me_to_page(me_data,him_data);
    update_total(total_1,total_2);
   }

   add_number_me_to_page=(me_data,him_data)=>{

    me_list.innerHTML='';
    him_list.innerHTML='';

    me_data.forEach(element => {
      me_list.innerHTML+=`<li>${element}</li>`;
    });
    
    him_data.forEach(element=>{
      him_list.innerHTML+=`<li>${element}</li>`;
    })
   }
   
 

   update_total=(total_1,total_2)=>{

    let f_d=me_data[0];
   
    let s_d=him_data[0];
    
   
   
    for(let el=1;el<me_data.length;el++){
     f_d+=me_data[el];
     s_d+=him_data[el];
     
    }
    
    total_1.innerHTML=f_d;
    total_2.innerHTML=s_d;
   
    total_2.style.display='flex';
    
    total_1.style.display='flex';
   

    if(f_d>=152 &&f_d>s_d){
      box_4.style.display='flex';
      win.innerText='مبروك';
    }if(s_d>=152&&s_d>f_d){
      box_4.style.display='flex';
      win.innerText=' لقد خسرت';
    }
    if(f_d>=152 &&s_d>=152&&f_d==s_d){
      box_4.style.display='flex';
      win.innerText='المشتري هو الفائز';
    }

    
 
      
   
   }
 

  
  

    function new_game(){
      box.classList.remove('show');
      box_4.style.display='none';
     
     me_data=[];
     him_data=[];
     add_number_me_to_page(me_data,him_data);
     total_1.innerText='';
     total_1.style.display='none';
     total_2.innerText='';
     total_2.style.display='none';
     
      
    };


    function back(){
      
      me_data.pop();
      him_data.pop();
      add_number_me_to_page(me_data,him_data);
      update_total(total_1,total_2);
      
      if(total_1.innerText=='undefined'&&total_2.innerText=='undefined'){
        total_1.style.display='none';
        total_2.style.display='none';
      }
      box.classList.remove('show');
      box_4.style.display='none';
    }
  
    










