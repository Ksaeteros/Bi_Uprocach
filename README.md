# Plantilla creada con Remix !

- [Remix Docs](https://remix.run/docs)

## Desarrollo

Para la consola/terminal:

```sh
npm install
```

```sh
npm run dev
```

Esto inicia su aplicación en modo de desarrollo, la reconstrucción de los assets en los cambios de archivo.

## Despliegue

Primero, se construye la app en production:

```sh
npm run build
```

Entonces, la app se ejecuta en modo produccion:

```sh
npm start
```

Ahora tendrás que elegir un host en el que desplegarlo.

### DIY

Si estás familiarizado con el despliegue de aplicaciones node, el servidor de aplicaciones Remix incorporado está listo para la producción.

Asegúrate de desplegar la salida de `remix build`

- `build/`
- `public/build/`
