function EstudianteConstructor(nombre, edad, escuela) {
    this.nombre = nombre;
    this.edad = edad;
    this.escuela = escuela;
}

function ProfesorConstructor(nombre, materia, escuela) {
    this.nombre = nombre;
    this.materia = materia;
    this.escuela = escuela;
}



const estudianteProto = {
  duerme() {
    return  this.nombre+" esta dormid@ a sus "+this.edad+" annos"
  },
   estudia() {
    return  "hola soy "+this.nombre+" y estudio en el"+this.escuela 
  },
};


const profesorProto = {
  califica() {
    return  "Yo soy "+this.nombre+" y estoy calificando a los pendejos del  "+this.escuela+" de la materia de"+this.materia 
  },
   ensena() {
    return  "hola soy "+this.nombre+", un placer" 
  },
};




const personaProto = {
  camina() {
    return  "soy "+this.nombre+" y estoy en camino hacia el "+this.escuela 
  },
   saluda() {
    return  "hola soy "+this.nombre+", un placer personas del "+this.escuela 
  },
 comer() {
    return  this.nombre+" estoy comiendo" 
  },
};


const estudiante = new EstudianteConstructor('Bryan',21,"cetav");
const estudiante2 = new EstudianteConstructor('andria',21,"cetav");
const profe = new ProfesorConstructor('Ann'," web","cetav");
const profe2 = new ProfesorConstructor('juan',"mate","octavi");


estudiante.__proto__ = estudianteProto;
estudiante2.__proto__ = estudianteProto;
estudianteProto.__proto__ = personaProto;
profe.__proto__  = profesorProto;
profe2.__proto__  = profesorProto;
profesorProto.__proto__  = personaProto;

console.log(profe.califica(),estudiante2.duerme(),estudiante.camina(),profe2.saluda())