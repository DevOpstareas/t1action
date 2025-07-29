const core = require('@actions/core');

try {
  const nombre = core.getInput('nombre');
  const apellido = core.getInput('apellido');
  const edad = parseInt(core.getInput('edad'), 10);

  const mayorEdad = Math.max(0, edad - 18);
  const tiempo = 100 - edad;

  console.log(`${nombre} ${apellido} cumplio la mayoria de edad hace ${mayorEdad} años y le faltan ${tiempo} años para cumplir 100 años`);
} catch (error) {
  core.setFailed(error.message);
}