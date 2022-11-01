let btn=document.querySelector("button")

// btn.addEventListener("click",()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response =>{
//         response.json()
//         .then(value =>{
//             let data = ` <tr>
//             <th scope="col">id</th>
//             <th scope="col">name</th>
//             <th scope="col">username</th>
//             <th scope="col">email</th>
//             <th scope="col">street</th>
//             <th scope="col">suite</th>
//             <th scope="col">city</th>
//             <th scope="col">zipcode</th>
//             <th scope="col">lat</th>
//             <th scope="col">Ing</th>
//             <th scope="col">phone</th>
//             <th scope="col">website</th>
//             <th scope="col">company name</th>
//             <th scope="col">catchPhrase</th>
//             <th scope="col">bs</th>
    
// </tr>`
//            for (let i = 0; i < value.length; i++) {
//                data += `<tr>
//                <th scope="row">${value[i].id}</th>
//            <th scope="row">${value[i].name}</th> 
//       <th scope="row">${value[i].username}</th>
//       <th scope="row">${value[i].email}</th>
//       <th scope="row">${value[i].address.street}</th>
//       <th scope="row">${value[i].address.suite}</th>
//       <th scope="row">${value[i].address.city}</th>
//       <th scope="row">${value[i].address.zipcode}</th>
//       <th scope="row">${value[i].address.geo.lat}</th>
//       <th scope="row">${value[i].address.geo.lng}</th>
//       <th scope="row">${value[i].phone}</th>
//       <th scope="row">${value[i].website}</th>
//       <th scope="row">${value[i].company.name}</th>
//       <th scope="row">${value[i].company.catchPhrase}</th>
//       <th scope="row">${value[i].company.bs}</th>
   

//  </tr>`
//            }
//            document.querySelector("table").innerHTML = data
//         })
//     })

// })




btn.addEventListener("click",async()=>{
 let f=  await fetch("https://jsonplaceholder.typicode.com/users")
    let response=await f
    let value= await response.json()
            let data = ` <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">street</th>
            <th scope="col">suite</th>
            <th scope="col">city</th>
            <th scope="col">zipcode</th>
            <th scope="col">lat</th>
            <th scope="col">Ing</th>
            <th scope="col">phone</th>
            <th scope="col">website</th>
            <th scope="col">company name</th>
            <th scope="col">catchPhrase</th>
            <th scope="col">bs</th>
    
</tr>`
           for (let i = 0; i < value.length; i++) {
               data += `<tr>
               <th scope="row">${value[i].id}</th>
           <th scope="row">${value[i].name}</th> 
      <th scope="row">${value[i].username}</th>
      <th scope="row">${value[i].email}</th>
      <th scope="row">${value[i].address.street}</th>
      <th scope="row">${value[i].address.suite}</th>
      <th scope="row">${value[i].address.city}</th>
      <th scope="row">${value[i].address.zipcode}</th>
      <th scope="row">${value[i].address.geo.lat}</th>
      <th scope="row">${value[i].address.geo.lng}</th>
      <th scope="row">${value[i].phone}</th>
      <th scope="row">${value[i].website}</th>
      <th scope="row">${value[i].company.name}</th>
      <th scope="row">${value[i].company.catchPhrase}</th>
      <th scope="row">${value[i].company.bs}</th>
   

 </tr>`
           }
           document.querySelector("table").innerHTML = data
        })
 