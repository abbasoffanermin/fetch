let btn=document.querySelector("button")
btn.addEventListener("click",async()=>{
    let f=await fetch("https://jsonplaceholder.typicode.com/posts")
    // f
    // .then((response)=>{
    //  response.json()
    //  .then(value =>{
    //     let data=` <tr>
    //     <th scope="col">userid</th>
    //     <th scope="col">id</th>
    //     <th scope="col">title</th>
    //     <th scope="col">body</th>
    //     </tr>`
    //     for(let i=0;i<value.length;i++){
    //       data+=`<tr>
    //       <th scope="row">${value[i].userId}</th>
    //       <th scope="row">${value[i].id}</th>
    //       <th scope="row">${value[i].title}</th>
    //       <th scope="row">${value[i].body}</th>
    //       </tr>`
    //     }
    //     document.querySelector("table").innerHTML=data
    //  })
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })

   let response=await f
   let value=await response.json()
   let data=` <tr>
        <th scope="col">userid</th>
        <th scope="col">id</th>
        <th scope="col">title</th>
        <th scope="col">body</th>
        </tr>`
        for(let i=0;i<value.length;i++){
          data+=`<tr>
          <th scope="row">${value[i].userId}</th>
          <th scope="row">${value[i].id}</th>
          <th scope="row">${value[i].title}</th>
          <th scope="row">${value[i].body}</th>
          </tr>`
        }
        document.querySelector("table").innerHTML=data
   


})