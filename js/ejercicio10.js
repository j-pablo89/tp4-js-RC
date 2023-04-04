// 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, 
// esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, 
// además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, 
// si no lo encontró indicar con un mensaje.
// Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, 
// lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero 
// suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje
// que indique que el avión está lleno.

// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", 
// crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, 
// buscar un avión y usar el método abordar.

class Aeropuerto {
    #nombreAeropuerto;
    #listaAviones;
    constructor(nombreAeropuerto,listaAviones){
        this.#nombreAeropuerto = nombreAeropuerto;
        this.#listaAviones = listaAviones;
    }
    agregarAvion(nuevoAvion){
        this.#listaAviones.push(nuevoAvion);
    }
    buscarAvion(buscarAvion){
        return this.#listaAviones.find(avion => avion == buscarAvion);
    }
    mostrarLista(){
        return this.#listaAviones;
    }
}

class Avion {
    #nombre;
    #capacidad;
    #destino;
    #listaPasajeros;

    constructor(nombre,capacidad,destino,listaPasajeros){
        this.#nombre = nombre;
        this.#capacidad = capacidad;
        this.#destino = destino;
        this.#listaPasajeros = listaPasajeros;
    }
    abordar(){
        if(this.#capacidad > 0){
            document.write(`<p>Pasajero abordado con éxito</p>`);
        }else{
            document.write(`<p>El avion está lleno</p>`);
        }
    }
}

let nuevoAeropuerto = new Aeropuerto('Aeropuerto Internacional',[]);

let avion1 = new Avion('boeing 787',0,'New York',[]);
let avion2 = new Avion('boeing 747',4,'Boston',[]);
let avion3 = new Avion('boeing 777',5,'Miami',[]);

console.log(avion1);

nuevoAeropuerto.agregarAvion(avion1);
nuevoAeropuerto.agregarAvion(avion2);
nuevoAeropuerto.agregarAvion(avion3);

const encontrado = nuevoAeropuerto.buscarAvion('boeing');

document.write(`Avion buscado: ${encontrado === undefined ? 'Avion no encontrado' : 'Avion encontrado'}`);

console.log(nuevoAeropuerto.mostrarLista());

avion1.abordar();
avion2.abordar();
avion3.abordar();


