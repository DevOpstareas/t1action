const core = require('@actions/core');

try {
  const nombre = core.getInput('nombre');
  const apellido = core.getInput('apellido');
  const edad = parseInt(core.getInput('edad'), 10);

  const tiempo = 100 - edad

  console.log(`${nombre} ${apellido} cumplio la mayoria de edad hace ${edad} años y le faltan ${tiempo} años para cumplir 100 años`);
} catch (error) {
  core.setFailed(error.message);
}