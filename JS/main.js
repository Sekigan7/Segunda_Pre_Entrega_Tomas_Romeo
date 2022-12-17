
//                                     Por pura formalidad le perdimos al profesor su nombre

let namep = prompt("Ingrese su nombre profesor: ");
    alert("Bienvenido profesor "+ namep + " \n " + "Espero que tenga una buena jornada!");

//       Definimos las variables, le ponemos el nombre del alumno en el array y de paso separamos en aprobados y desaprobados
//                                  y creamos un bucle por si el profesor desea salir o cargar a un alumno mas

    const listNames = [];
    const listNames2 = [];
    let exam1, exam2, exam3, final, gpa; 
    const notes = [exam1, exam2, exam3, final];
    let confirmation=1;
    while (confirmation!=2) { 

    let namei = prompt("ingrese el nombre del alumno: ");

//                                      Mostramos por pantalla el nombre del alumno en cuestion.

    alert("El alumno cargado es: " + namei);

//                                                      Cargamos las notas 


    exam1 = parseFloat(prompt("Parcial numero 1: "));
    exam2 = parseFloat(prompt("Parcial numero 2: "));
    exam3 = parseFloat(prompt("Parcial numero 3: "));
    final = parseFloat(prompt("Final: "));
    gpa = (exam1+exam2+exam3+final)/4;

//                          Calculamos si la suma de los parciales hace al promedio desaprobado o aprobado
//                                y almacenamos los nombres en los arrays dependiendo el promedio
        
if(gpa >= 6.7){
    alert("El promedio de "+ namei + " es " + gpa +  " \n " + "Logro alcanzar la nota esperada para aprobar 👍" + " \n " + "😁 APROBADO 😁");
    listNames.push(namei.toUpperCase());
    console.log(listNames);
}else{
    alert("El promedio de "+ namei + " es " + gpa + " \n " + "No logro alcanzar la nota esperada. 👎" + " \n " + "😔 DESAPROBADO 😔");
    listNames2.push(namei.toUpperCase());
    console.log(listNames2);
}

//                        Guardamos el porcentaje de los alumnos para tener un registro en la consola
console.log(gpa, namei);


//                              Confirmamos si el profesor quiere cargar a otro alumno

do{
confirmation = prompt("Desea ingresar otro alumno profesor " + namep + "?" + " (1 para si y 2 para no)");
} while ((confirmation !=1) && (confirmation !=2));

//                                      Nos despedimos del profesor!
    if (confirmation != 1) {
    alert("Hasta la proxima " + namep + "!");

//                              Separamos con la lista dependiendo los aprobados y desaprobados

    alert ("✔️ Los alumnos aprobados fueron: " + listNames + "\n" + "❌ Los alumnos desaprobados fueron: " + listNames2);
    }else {
    alert("Muy bien, continuemos!");
}
}

