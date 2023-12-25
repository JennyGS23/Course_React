//Async

//aincrónico, el await funciona para que la línea siguiente se ejecute hasta que termine la línea que tiene 
//la palabra await.
const getImagen = async() => {
    try{
        const apiKey = 'VqJk4mZCl24OS5ZB50KPDSeJgzIXwMwQ';

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();

        const {url} = data.images.original;

            const img = document.createElement('img');
            img.src = url;

            document.body.append(img);
    }catch (error){
        //manejo del error
        console.log(error);
    }

}
getImagen();


