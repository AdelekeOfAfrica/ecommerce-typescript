"use client"

import React,{useState} from 'react';
import {Plus, X} from 'lucide-react';

export default function ArrayItemInput({setItems,items=[] ,itemTitle}) {

      
      const[item,setItem]=useState([]);
      const[showTagForm,setShowTagForm]=useState(false);
    
    
      function addItem(){
        setItems([...items,item]);
        setItem('');
      }
    
      function removeItem(index){
        const newItems =[...items];
        newItems.splice(index,1);
        setItems(newItems);
    
      }


  return (
    <div className="sm:grid-cols-2">

    {
       !showTagForm ? (  // Change to !showTagForm so button shows initially
         <button onClick={() => setShowTagForm(true)} 
           type="button" className="flex items-center space-x-2 text-slate-800 dark:text-slate-300 py-2 px-4"
         >
           <Plus/>
           <span>Add {itemTitle}</span>
         </button>
       ) : (
         <div className="flex items-center w-full justify-start mt-4">
           {/* Your search bar and other UI here */}
           <div className="relative w-full max-w-lg ml-4">
         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           
         </div>
         <input 
         value={item}
         onChange={(e)=>setItem(e.target.value)} type="text" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder={`create a ${itemTitle}`} />

           </div>

           <button onClick={addItem} type="button" className=" shrink-0 ml-2 inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
               <Plus className="w-4 h-4 me-2"/> Add
           </button>  

           <button
           type="button"
           onClick = {()=>setShowTagForm(false)}className=" ml-3 shrink-0 w-8 h-8 bg-red-400 rounded-full
           flex items-center justify-center">
             <X className="w-4 h-4 "/>
           </button>    
         </div>
       )
     }

     <div className="flex flex-wrap gap-4 mt-4">
         {
           items.map((item,i)=>{
             return(
               <div 
               onClick={()=>removeItem(i)}
               key={i} className="bg-slate-200 flex space-x-2 items-center dark:bg-slate-600 px-4 py-2 rounded-lg cursor-pointer
               dark:text-slate-300 text-slate-800">
                 <p>{item }</p>
                 <X className="w-4 h-4"/>
               </div>
             );
           })
         }
     </div>




     </div>
  )
}
