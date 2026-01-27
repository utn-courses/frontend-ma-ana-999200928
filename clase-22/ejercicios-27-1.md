# Ejercicios de React 27/1

## Tema: Componentes, Props y Renderizado Condicional

Estos ejercicios están pensados para practicar los conceptos básicos de **React** vistos en clase:
- Componentes
- Props
- Renderizado condicional

---

## Ejercicio 1: Saludo condicional

### Objetivo
Practicar **props** y **renderizado condicional simple**.

### Consigna
Crear un componente `Saludo` que reciba las siguientes props:
- `nombre` (string)
- `esMañana` (boolean)

### Comportamiento esperado
- Si `esMañana` es `true` → mostrar:  
  **"Buenos días, {nombre}"**
- Si `esMañana` es `false` → mostrar:  
  **"Buenas tardes, {nombre}"**

### Ejemplo de uso
```jsx
<Saludo nombre="Gabriel" esMañana={true} />
```

---

## Ejercicio 2: Estado de stock

### Objetivo
Usar **props** junto con el **operador ternario**.

### Consigna
Crear un componente `StockProducto` que reciba:
- `nombre` (string)
- `hayStock` (boolean)

### Comportamiento esperado
- Mostrar el nombre del producto
- Si `hayStock` es `true` → mostrar **"Disponible"**
- Si `hayStock` es `false` → mostrar **"Sin stock"**

### Extra
Reemplazar el texto por un botón:
- Con stock → botón habilitado
- Sin stock → botón deshabilitado

---

## Ejercicio 3: Botón de acceso

### Objetivo
Practicar renderizado condicional usando el operador `&&`.

### Consigna
Crear un componente `Acceso` que reciba:
- `logueado` (boolean)

### Comportamiento esperado
- Si `logueado` es `true` → mostrar **"Acceso concedido"**
- Si `logueado` es `false` → mostrar un botón **"Iniciar sesión"**

### Ejemplo de uso
```jsx
<Acceso logueado={false} />
```

---

## Ejercicio 4: Mensaje con children

### Objetivo
Usar la prop especial **`children`**.

### Consigna
Crear un componente `Mensaje` que reciba:
- `visible` (boolean)
- `children`

### Comportamiento esperado
- Si `visible` es `false` → no renderizar nada
- Si `visible` es `true` → mostrar el contenido dentro de un `<div>`

### Ejemplo de uso
```jsx
<Mensaje visible={true}>
  Operación realizada con éxito ✅
</Mensaje>
```

---

## Ejercicio 5: Card de usuario (Integrador)

### Objetivo
Integrar **componentes**, **props** y **renderizado condicional**.

### Consigna
Crear un componente `UsuarioCard` que reciba:
- `nombre` (string)
- `edad` (number)
- `activo` (boolean)

### Comportamiento esperado
- Mostrar el nombre y la edad del usuario
- Si `activo` es `true` → mostrar **"Usuario activo"**
- Si `activo` es `false` → mostrar **"Usuario inactivo"**
- Mostrar un botón:
  - Usuario activo → **"Desactivar"**
  - Usuario inactivo → **"Activar"**

### Ejemplo de uso
```jsx
<UsuarioCard nombre="Gabriel" edad={25} activo={true} />
```
