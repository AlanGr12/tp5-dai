Estructura del proyecto index.html,estructura de la página style.css,estilos y animaciones  index.js, consumo de la API

 Decisiones tomadas  Se usó .then() y .catch() para manejar las promesas del fetch. El manejo de errores se hace verificando response.ok antes de convertir a JSON, para detectar correctamente los errores 404. El loading se muestra antes del fetch y se oculta cuando llegan los datos o cuando hay un error. 

 Dificultades encontradas :  Entender cómo funcionaba fetch y como encadenar los .then() correctamente.  Comprender que un error 404 no es capturado automáticamente por .catch() y que hay que verificar response.ok manualmente.
