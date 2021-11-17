import React from 'react'

export default function Estudiante() {
    return (
        <div>
            Pagina de estudiante
            <div>
            <form name="formulario" action="#" onsubmit="return comprobar()">
  <input type="radio" name="estacion" value="primavera" />Nombre<br/>
  <input type="radio" name="estacion" value="verano" />Apellido <br/>
  <input type="radio" name="estacion" value="otoño" />Ru <br/>
  <input type="radio" name="estacion" value="invierno" />Registrar <br/>
  <input type="submit" />
</form>
            </div>
        </div>
    )
}
