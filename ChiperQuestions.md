# Cuestionario Chiper

## ¿Cuál es su diagnóstico del sitio web?

En mi opinión esta landing tiene un diseño aceptable, aunque de por sí no tiene un diseño responsive para tablets, algo que se ha tenido que trabajar en esta prueba. No obstante, el responsive para dispositivos de tamaño medio no está depurado al 100% debido a el propio diseño de la página no está concebido para tamaños intermedios de pantalla, aunque al menos se ha conseguido mantener una estructura razonablemente ordenada en este tipo de pantallas.

## ¿Qué haría para mejorarlo?

Como he mencionado en la anterior pregunta, lo primero que habría que mejorar, y se ha mejorado notablemente en esta prueba respecto a la versión original, es un diseño plenamente responsive desde dispositivos móviles hasta pantallas amplias, además de evitar demasiada dependencia de recursos en el lado del cliente. Para ello me he basado en tres tecnologías, CSS-in-JS con Styled Components, que permite inyectar CSS en cada componente previniendo muchas problemas de scope y escalabilidad; Gatsby, que es el starter sobre el que está construida esta prueba y que con su SSR permite cargar páginas muy rápido, y @artsy/fresnel para crear layouts reactivos basados en media queries, lo cual permite, por poner un ejemplo, reusar y combinar de distintas maneras un mismo componente cuya forma se actualiza inmediatamente en función del tamaño de la pantalla. En este sentido, conocer en detalle el funcionamiento del virtual DOM en React y algunas de sus API nativas como React Memo puede mejorar notablemente la performance de una aplicación.
En esta ocasión, al usar SSR, he prescindido de emplear un _loader_ para cargar la pantalla, ya que Gatsby como comentaba ofrece un plugin _out-of-the-box_ para realizar _lazy-loading_ en las imágenes, lo cual si cabe reduce aún más los tiempos de carga de la página.

## En su criterio ¿Cuál es el secreto para que una maquetación sea “pixel perfect” en función del diseño que se esté trabajando?

En mi opinión depende mucho de unos buenos mockups con las guías de estilo bien predefinidas antes siquiera de organizar toda arquitectura de una webapp, la cual se puede ver muy afectada a largo plazo si antes no se hizo un buen trabajo de lineamiento corporativo. A partir de ahi un buen equipo de front traslada al código las guías de estilo o los _themes_ de la aplicación, con una arquitectura escalable. No hay un secreto mágico pues para un diseño "pixel perfect", debe de haber una cadena de mano sólida entre el equipo de diseño y de desarrollo.

## ¿Cuál es su aplicación web favorita y por qué?

Mis dos webapps favoritas son Netflix y Spotify porque combinan un altísimo nivel de diseño, eficiencia y performance, y también porque ambas están construidas con React y su ecosistema de tecnologías anejas. Para mí marcan un estándar muy elevado de calidad, que las distingue muy por encima de sus competidores.
