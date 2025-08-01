const core = require('@actions/core');

try {
  const nombre = core.getInput('nombre');
  const apellido = core.getInput('apellido');
  const edad = parseInt(core.getInput('edad'), 10);

  let mayorEdad;
  if (edad < 18) {
    mayorEdad = 18 - edad;
    console.log(`${nombre} ${apellido} cumplirá la mayoría de edad en ${mayorEdad} años y le faltan ${Math.max(0, 100 - edad)} años para cumplir 100 años`);
  } else {
    mayorEdad = edad - 18;
    console.log(`${nombre} ${apellido} cumplió la mayoría de edad hace ${mayorEdad} años y le faltan ${Math.max(0, 100 - edad)} años para cumplir 100 años`);

    core.setOutput('multiplicacion', edad * 100);
  }
} catch (error) {
  core.setFailed(error.message);
}