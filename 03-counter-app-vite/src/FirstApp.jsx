import PropTypes from 'prop-types';


//export const FirstApp = () => <h1>Jennifer González</h1>

//rafc   se usa para escribir la función de forma rápida.

//<> </> funciona para cuando queremos escribir varias cosas sin necesidad de un div
//es equivalente a poner <fragment> </fragment>



// export const FirstApp = () => {
//   const newMessage = 'Jennifer';
//   return (
//     <>
//     <h1> {newMessage} </h1> //*Mandando una frase, no puede ser un objeto porque daría error*//
//     <p>Soy un subtítulo</p>
//     </>
    
//   )
// }

const newMessage = {
  Nombrre: 'Jennifer',
  edad: 18 
};

const getSuma = (num, num2) =>{
  if(num > num2){
    return num + " es mayor que " + num2;
  }
  else{
    return num2 + " es mayor que " + num;
  }
  
}



//Para mandar un objeto se bedería hacer de esta forma:
export const FirstApp = ( { title, subtitle} ) => {
  
  return (
    <>
    {/* <h1> {JSON.stringify(newMessage)} </h1>  */}
    <h1>{title}</h1>
    <h1>{subtitle}</h1>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired
}

//Las defaultProps van primero que las proptypes por lo que no se evalua el isRequired de las proptypes
FirstApp.defaultProps = {
  title: 'No hay título',
  subtitle: 'No hay subtítlo',
  name: 'Jennifer Gonzalez'
}
