import axios from 'axios'

async function verificarSorteo() {
    try {
        const response = await axios.get('https://libros.deno.dev/premios');
        const data = response.data;
        let ganaste = false
        if (data.premio) {
            ganaste = true
        }
        return ganaste
    } catch (error) {
        return {"errorMsg: ": error}
    }
  }
  
  export {verificarSorteo}

  
  
  
  
  