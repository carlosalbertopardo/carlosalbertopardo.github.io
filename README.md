<h1>Front end test - Mercadolibre.com</h1>
<h2>Developer: Carlos Alberto Pardo</h2>

<h3>Tareas realizadas</h3>

<ul>
	<li>Se desarrolló la página para desktop / mobile y tablet utilizando los breakpoint:
		<ul>
			<li>Mobile: 0 - 767px</li>
			<li>Tablet: 768px - 959px</li>
			<li>Desktop: 959px - max-width</li>
		</ul>
	</li>
	<li>Se eligió trabajar con grunt</li>
	<li>
		Las dependencias instaladas con node y utilizadas en el desarrollos de la pag son:
		<ul>
			<li>Stylus - Preprocesador css</li>
			<li>Stylus - Post-procesador css</li>
			<li>Concat - Concatenacion de archivos js y css</li>
			<li>Clean - Para borrar archivos concatenados</li>
			<li>Csslint - Revisar errores en css</li>
			<li>jshint - Revisar errores en js </li>
			<li>Cssmin - Minificación del css</li>
			<li>Imagemin - Optimización de las imagenes utilizadas en el sitio</li>
			<li>Htmlmin - Minificación del html</li>
		</ul>
	</li>
	<li>
		No se instaló la dependencia watch. Se configuraron 2 tareas:
		<ul>
			<li>grunt (default) para correr las siguientes tareas en orden: 
				<ul>
					<li>Compilar stylus</li>
					<li>Revisar errores css</li>
					<li>Revisar errores js</li>
					<li>Limpiar archivos concatenados (app.min.js y app.min.css)</li>
					<li>Minificar css</li>
					<li>Minificar js</li>
				</ul>
			</li>
			<li>grunt build: para minificar las imagenes y comprimir el html final </li>
		</ul>
	</li>
	<li>
		Se eligió utilizar stylus como pre-procesador en combinación con 'nib' como postprocesador por una cuestion de gustos y confiaza. La configuración del mismo se encuentra principalmente en el archivo config.styl.
	</li>
	<li>
		No se utilizó la libreria de grilla para las columnas ya que no era necesario. Se utilizó un componente propio que flota los elementos y los apila para mobile.
	</li>
	<li>Generalmente los css y js que son propios de librerias desarrolladas por otros sitios las cargo en un archivo aparte, pero en este caso por estar especificado en la consigna, se concatenaron todos los archivos de css en un solo archivo y todos los de js en otro (incluso con jquery), de manera que se hacen solo 2 llamadas desde el html.</li>
	<li>Las tabs funcionan solo con css, tratando de evitar :target para viejos browsers. Se utilizaron roles y  states de WAI-ARIA para esta sección, pero no se manejó su funcionamiento con los tags para no utilizar js.</li>
	<li>Se utilizó microdata para la sección del producto.</li>
	<li>Se utilizaron las versiones minificadas de chico.js y chico.css. Fueron concatenadas en el app.min.css y app.min.js</li>
	<li>Se minificó el html final</li>
	<li>Testeado en Chrome, firefox e IE9.</li>
</ul>