let btn=document.querySelector("button")

// btn.addEventListener("click",()=>{
//     fetch("https://jsonplaceholder.typicode.com/comments")
//     .then(response =>{
//      response.json()
//      .then(value =>{
    
//         let data=` <tr>
//         <th scope="col">postId</th>
//         <th scope="col">id</th>
//         <th scope="col">name</th>
//         <th scope="col">email</th>
//         <th scope="col">body</th>
//         </tr>`
//         for(let i=0;i<value.length;i++){
//           data+=`<tr>
//           <th scope="row">${value[i].postId}</th>
//           <th scope="row">${value[i].id}</th>
//           <th scope="row">${value[i].name}</th>
//           <th scope="row">${value[i].email}</th>
//           <th scope="row">${value[i].body}</th>
//           </tr>`
//         }
//         document.querySelector("table").innerHTML=data
//      })
//      .catch(err =>{
//         console.log(err);
//      })
//     })
//     .catch(err =>{
//         console.log(err);
//     })
// })








btn.addEventListener("click",async()=>{
      let f= await fetch("https://jsonplaceholder.typicode.com/comments")
       let response= await f
       let value= await response.json()
       let data=` <tr>
               <th scope="col">postId</th>
               <th scope="col">id</th>
               <th scope="col">name</th>
               <th scope="col">email</th>
               <th scope="col">body</th>
               </tr>`
               for(let i=0;i<value.length;i++){
                 data+=`<tr>
                 <th scope="row">${value[i].postId}</th>
                 <th scope="row">${value[i].id}</th>
                 <th scope="row">${value[i].name}</th>
                 <th scope="row">${value[i].email}</th>
                 <th scope="row">${value[i].body}</th>
                 </tr>`
               }
               document.querySelector("table").innerHTML=data
    
    })