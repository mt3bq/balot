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



let gear=document.getElementById('gear');
let closee=document.getElementById('close');
console.log(closee);



gear.onclick=()=>{
box.classList.add('show');
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

    console.log(me_data);
    
    console.log(him_data);

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
    //him_data_data.forEach(el=>{})
    total_1.innerHTML=f_d;
    total_2.innerHTML=s_d;
   
    total_2.style.display='flex';
    
    total_1.style.display='flex';
    if(f_d<50){
      total_1.style.background='red';
    }if(f_d>100){
      total_1.style.background='forestgreen';
    }else{
      total_1.style.background='#fff';
    }
    switch(total_1.innerHTML){
     
    }
   }
 
  

    
  
    










