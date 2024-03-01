//importando una dependencia usando ecma script
import pc from "picocolors"

import nombre from "./nombre.js"
import {suma, resta, PI} from "./operaciones.js"
//importando una dependencia usando common js
//const pc = require("picocolors")

console.log(
  pc.blue(`How are ${pc.italic(`you`)} doing?`)
)

console.log(
    pc.green(`Hola ${nombre}`)
  )

console.log(suma(PI , 3));
console.log(resta(PI , 3));