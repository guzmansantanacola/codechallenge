
    formulario.addEventListener("submit", (e)=> {
        let usuario= document.getElementById("nombre").value
        let apellido= document.getElementById("apellido").value
        let fecha= document.getElementById("date").value

        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Nombre: usuario,
          Apellido: apellido,
          FechaDeNacimiento: fecha,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error('Error:', error))
} )