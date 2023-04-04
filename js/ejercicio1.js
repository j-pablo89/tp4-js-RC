// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, 
// modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// Output:

// objeto.encender();  auto encendido
// objeto.apadar(); El auto se apagó

let auto = {
    color: 'blanco',
    marca: 'Toyota',
    modelo: 'Etios',
    encender: function(){
        document.write(`Auto encendido<br>`);
    },
    apagar: function(){
        document.write(`El auto se apagó<br>`);
    }
}

auto.encender();
auto.apagar();
