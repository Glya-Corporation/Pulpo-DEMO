const categoria0 = document.getElementById('categoria0');
const categoria1 = document.getElementById('categoria1');
const categoria2 = document.getElementById('categoria2');
const categoria3 = document.getElementById('categoria3');
const categoria4 = document.getElementById('categoria4');
const categoria5 = document.getElementById('categoria5');
const categoria6 = document.getElementById('categoria6');
const categoria7 = document.getElementById('categoria7');
const categoria8 = document.getElementById('categoria8');

const cargarImagen = (entradas, observador) => {
	// console.log(entradas)
	// console.log(observador)

	entradas.forEach((entrada) => {
		if (entrada.isIntersecting) {
			entrada.target.classList.add('visible');
		} else {
			// entrada.target.classList.remove('visible');
		}
	});
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '500px 0px 100px 0px',
	threshold: 1.0
});

observador.observe(categoria0);
observador.observe(categoria1);
observador.observe(categoria2);
observador.observe(categoria3);
observador.observe(categoria4);
observador.observe(categoria5);
observador.observe(categoria6);
observador.observe(categoria7);
observador.observe(categoria8);