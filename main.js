// Fetch API

useEffect (() => {
    // recibe lo q va a hacer
    // es como el comonentDidMound
    console.log("Despues de renderizar el Componente")
    getPosts("http://jsonplaceholder.typicode.com/posts");

    return () => {
        //like componentWillUnmount
        console.log("Cambiando de Componente")
    }
})

const getPosts = url => {

    fetch(URL, { //optional 
        method: "GET", //  GET, POST, PUT, DELETE. por defautl va por GET
        //body: JSON.stringinfy(persona), // recibe la informacion q voy a enviar POST, PUT  
        headers: { //puedo mandar distintos tipos d info en el mensaje
            "Content.type": "application/json" //tipo de resp del servidor
        }
    })

        //se ejecuta y para capturar la respuesta del servidor se usa .then
        .then((response) => {
            //Resp del servidor
            console.log(response.status);
            return response.json();
        })

        .then(data => {
            //Info de la peticion
            console.log(data); // es la informacion q estoy recibiendo
        })

        .catch (error => {
            // Errores de la peticion
            console.log(error) 
        })

}



// el endpoint es el URL
// API permite q al entregar un objeto en formato json y se puede usar en cualquier tecnologia
// son peticiones al servidor y por defecto es GET (permite ejecutar o buscar el recurso), 
// POST (manda info), PUT (manda info), DELETE (borro lo q estoy pidiendo)
// data es la informacion que quiero mandar

// la informacion se guardara dentro del state si estoy trabajando con componente

//GET solo pide informacion, no pide por lo q el body no se usa