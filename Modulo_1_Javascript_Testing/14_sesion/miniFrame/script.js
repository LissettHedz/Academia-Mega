function expect(actual){
    return{
        toBe(expected){
            if ( actual=== expected ){
                console.log(`Pasó ${actual} === ${expected}`);
            }else{
                console.log(`Falló: se esperaba ${expected}, pero se obtuvo ${actual}`);
            }
        },
        toEqual(expected){
            const passed = JSON.stringify(actual) === JSON.stringify(expected);
            if( passed){
                console.log(`Pasó: Objetos iguales`)
            }else{
                console.log(`Falló: Objetos Diferentes`)
            }            

        }
    }
}

function sumar(a,b){
    return a+b;
}

function validarUsuario(usuario){
    return usuario.nombre &&  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario.correo)
}


const usuarioValido = {nombre:"Lissette", correo:"liss@hotmail.com"};
const usuarioValido2 = {nombre:"Lissette", correo:"herli@hotmail.com"};
const usuarioinValido = {nombre:"Kis", correo:"herli16@hotmailcom"};

expect( usuarioValido).toEqual(usuarioValido2);
//expect( validarUsuario(usuarioValido) ).toBe(true);
//expect( validarUsuario(usuarioinValido) ).toBe(false);

//expect ( sumar(1,3) ).toBe(6);
//expect ( sumar(10,0) ).toBe(10);