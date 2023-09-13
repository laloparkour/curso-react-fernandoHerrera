const persona = {
    nombre: 'Isaac',
    apellido: 'Emiliano',
    edad: 30,
    direccion: {
        ciudad: 'Mexico',
        cp: 23030,
    }
};

const persona2 = { ...persona };
persona2.nombre = 'Eduardo'

/* console.table(persona) */
console.log(persona)
console.log(persona2)