document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const theDoctor = document.querySelector('input').value
    try{
        const res = await fetch(`/api/${theDoctor}`)
        const data = await res.json()

        console.log(data)
        document.querySelector('#placeToPutResult').innerText = data.portrayedBy
    }catch(error){
        console.log(error)
    }
}