

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then(res => console.log(res))

async function getData() {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    data = await data.json()
    return data
}
getData()


//napisać metodę POST
//wysłać na https://jsonplaceholder.typicode.com/posts