let btn = document.querySelector("button")


// btn.addEventListener("click",async()=>{
//     let f= await fetch("https://jsonplaceholder.typicode.com/photos")
//      let response= await f
//      let value= await response.json()
//      let data=` <tr>
//              <th scope="col">albumId</th>
//              <th scope="col">id</th>
//              <th scope="col">title</th>
//              <th scope="col">url</th>
//              <th scope="col">thumbnailUrl</th>
//              </tr>`
//              for(let i=0;i<value.length;i++){
//                data+=`<tr>
//                <th scope="row">${value[i].albumId}</th>
//                <th scope="row">${value[i].id}</th>
//                <th scope="row">${value[i].title}</th>
//                <th scope="row">${value[i].url}</th>
//                <th scope="row">${value[i].thumbnailUrl}</th>
//                </tr>`
//              }
//              document.querySelector("table").innerHTML=data

//   })



btn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/commentshttps://jsonplaceholder.typicode.com/photos")
        .then(response => {
       
            response.json()
          
                .then(value => {
                   console.log(value);
                    let data = ` <tr>
                     <th scope="col">albumId</th>
                     <th scope="col">id</th>
                     <th scope="col">title</th>
                     <th scope="col">url</th>
                     <th scope="col">thumbnailUrl</th>
        </tr>`
                    for (let i = 0; i < value.length; i++) {
                        data += `<tr>
          <th scope="row">${value[i].albumId}</th>
               <th scope="row">${value[i].id}</th>
               <th scope="row">${value[i].title}</th>
               <th scope="row">${value[i].url}</th>
               <th scope="row">${value[i].thumbnailUrl}</th>
          </tr>`
                    }
                    document.querySelector("table").innerHTML = data
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => {
            console.log(err);
        })
})