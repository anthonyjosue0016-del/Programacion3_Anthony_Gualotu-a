// dom12-sueldo-trabajador.js
// Asignaciones : sueldo base + bono por antigÃ¼edad
// Deducciones  : aporte IESS (% del sueldo base) + descuento prÃ©stamo


function fmt(valor) {
   return '$ ' + valor.toFixed(2);
}


function calcularSueldo() {
   const sueldoBase  = parseFloat(document.getElementById('inSueldoBase').value);
   const bono        = parseFloat(document.getElementById('inBonoAntigÃ¼edad').value);
   const porcentajeIESS = parseFloat(document.getElementById('inIESS').value);
   const prestamo    = parseFloat(document.getElementById('inPrestamo').value);


   const divError     = document.getElementById('error');
   const divResultado = document.getElementById('resultado');


   divError.style.display     = 'none';
   divResultado.style.display = 'none';


   // ValidaciÃ³n de campos obligatorios
   if (isNaN(sueldoBase) || sueldoBase <= 0) {
       divError.textContent   = 'Ingresa un sueldo base vÃ¡lido (mayor que cero).';
       divError.style.display = 'block';
       return;
   }


   if (isNaN(porcentajeIESS) || porcentajeIESS < 0 || porcentajeIESS > 100) {
       divError.textContent   = 'El porcentaje del IESS debe estar entre 0 y 100.';
       divError.style.display = 'block';
       return;
   }


   // Valores opcionales: si estÃ¡n vacÃ­os se toman como 0
   const bonoVal    = isNaN(bono)     ? 0 : Math.max(0, bono);
   const prestamoVal = isNaN(prestamo) ? 0 : Math.max(0, prestamo);


   // CÃ¡lculos
   const totalIngresos    = sueldoBase + bonoVal;
   const deduccionIESS    = sueldoBase * (porcentajeIESS / 100);
   const totalDeducciones = deduccionIESS + prestamoVal;
   const sueldoNeto       = totalIngresos - totalDeducciones;


   // Llenar rol de pagos
   document.getElementById('rSueldoBase').textContent    = fmt(sueldoBase);
   document.getElementById('rBono').textContent          = fmt(bonoVal);
   document.getElementById('rTotalIngresos').textContent = fmt(totalIngresos);
   document.getElementById('rPorcentajeIESS').textContent = porcentajeIESS.toFixed(2);
   document.getElementById('rIESS').textContent          = '- ' + fmt(deduccionIESS);
   document.getElementById('rPrestamo').textContent      = '- ' + fmt(prestamoVal);
   document.getElementById('rTotalDeducciones').textContent = '- ' + fmt(totalDeducciones);


   const spanNeto = document.getElementById('rSueldoNeto');
   spanNeto.textContent = fmt(sueldoNeto);
   spanNeto.style.color = sueldoNeto >= 0 ? '#1e8449' : '#c0392b';


   divResultado.style.display = 'block';
}


function limpiar() {
   ['inSueldoBase', 'inBonoAntigÃ¼edad', 'inPrestamo'].forEach(id => {
       document.getElementById(id).value = '';
   });
   document.getElementById('inIESS').value = '9.45';
   document.getElementById('error').style.display     = 'none';
   document.getElementById('resultado').style.display = 'none';
   document.getElementById('inSueldoBase').focus();
}


// Enter en cualquier campo dispara el cÃ¡lculo
window.onload = () => {
   ['inSueldoBase', 'inBonoAntigÃ¼edad', 'inIESS', 'inPrestamo'].forEach(id => {
       document.getElementById(id).addEventListener('keydown', e => {
           if (e.key === 'Enter') calcularSueldo();
       });
   });
};

