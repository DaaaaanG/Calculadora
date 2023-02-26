let boton1 = document.getElementById('sumar');
let boton2 = document.getElementById('restar');
let boton3 = document.getElementById('multiplicar');
let boton4 = document.getElementById('dividir');
let respuesta1 = document.getElementById('respuesta1');
let respuesta2 = document.getElementById('respuesta2');
let respuesta3 = document.getElementById('respuesta3');
let respuesta4 = document.getElementById('respuesta4');

boton1.addEventListener('click', hacersuma);
function hacersuma(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1+n2;
    respuesta1.innerHTML=`El resultado de la suma es: ${n3}`;
}

boton2.addEventListener('click', hacerresta);
function hacerresta(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n4 = n1-n2;
    respuesta2.innerHTML=`El resultado de la resta es: ${n4}`;
}

boton3.addEventListener('click', hacermultiplicacion);
function hacermultiplicacion(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n5 = n1*n2;
    respuesta3.innerHTML=`El resultado de la multiplicación es: ${n5}`;
}

boton4.addEventListener('click', hacerdivision);
function hacerdivision(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n6 = n1/n2;
    respuesta4.innerHTML=`El resultado de la multiplicación es: ${n6}`;
}