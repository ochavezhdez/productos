# Productos
Es un API Reest que nos permite guardar productos alimenticios que encontraremos en los mercados cuando vayamos de compras, así como los precios de los mismos; también podremos consultar los diferentes productos alimenticios y sus precios, así como en los mercados donde se encuentran a la venta.

# Modelo de datos
Tabla product
name:         almacena el nombre del producto.                Cadena
description:  almacena la descripción del producto.           Cadena

Tabla market
name:         almacena el nombre del mercado.                 Cadena
addres:       almacena la dirección postal del mercado.       Cadena
latitude:     almacena la latitud geográfica del mercado.     Numérico
longitude:    almacena la longitud geográfica del mercado.    Numérico

Tabla markedProduct
product:      almacena la referencia al producto.             Identificador
market:       almacena la referencia al mercado.              Identificador
price:        almacena el precio del producto en el mercado.  Numérico
