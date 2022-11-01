let btn=document.querySelector("button")

// btn.addEventListener("click",()=>{
//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(response =>{
//         response.json()
//         .then(value =>{
//             let data = ` <tr>
//             <th scope="col">userId</th>
//             <th scope="col">id</th>
//             <th scope="col">title</th>
//             <th scope="col">completed</th>
    
// </tr>`
//            for (let i = 0; i < value.length; i++) {
//                data += `<tr>
//  <th scope="row">${value[i].userId}</th>
//       <th scope="row">${value[i].id}</th>
//       <th scope="row">${value[i].title}</th>
//       <th scope="row">${value[i].completed}</th>

//  </tr>`
//            }
//            document.querySelector("table").innerHTML = data
//         })
//     })

// })






btn.addEventListener("click",async()=>{
  let f= await fetch("https://jsonplaceholder.typicode.com/todos")
  let response= await f
  let value=await response.json()
            let data = ` <tr>
            <th scope="col">userId</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">completed</th>
    
</tr>`
           for (let i = 0; i < value.length; i++) {
               data += `<tr>
 <th scope="row">${value[i].userId}</th>
      <th scope="row">${value[i].id}</th>
      <th scope="row">${value[i].title}</th>
      <th scope="row">${value[i].completed}</th>

 </tr>`
           }
           document.querySelector("table").innerHTML = data
        })
    
