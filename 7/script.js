// let form=document.querySelector('form')
// form.addEventListener("submit",async(e)=>{
//     e.preventDefault()
// document.querySelector("img").src = "https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif"
//     let inp=document.querySelector("input").value
//  let f=await fetch(`https://source.unsplash.com/random/900×700/?${inp}`)
//  let response=await f.url
//  document.querySelector("img").src=response
// })


let form = document.querySelector('form')
form.addEventListener("submit", (e) => {
    e.preventDefault()
    document.querySelector("img").src = "https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif"
    let inp = document.querySelector("input").value
    fetch(`https://source.unsplash.com/random/900×700/?${inp}`)
        .then(response => {

            document.querySelector("img").src = response.url
        })



})