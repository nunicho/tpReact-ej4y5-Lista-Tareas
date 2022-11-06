
const URL = 'http://localhost:4004/apitareas/tareas';

export const consultarAPI = async()=>{
    try{
        const respuesta = await fetch(URL);
        const listaTareas = await respuesta.json()
        return listaTareas;
    }catch(error){
        console.log(error);
    }
}

export const crearTareaAPI = async(tarea)=>{
    try{
        const respuesta = await fetch(URL, {
            method: "POST", 
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tarea)
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}

export const borrarTareaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

