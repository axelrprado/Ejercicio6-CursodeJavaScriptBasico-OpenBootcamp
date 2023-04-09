//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
let lstCompras = ["Lecha", "Coca", "Aceite", "Formula", "Pollo"];

//- Modifica la lista de la compra y añádele "Aceite de Girasol"
lstCompras.push("Aceite de Girasol");
console.log(lstCompras);
//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lstCompras.pop();
console.log(lstCompras);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const lstPeliculasFavorite = [
    {titulo: "Interestellar", director: "Ni idea",  fecha : new Date(2015,1,1)},
    {titulo: "Avengers", director: "Marvel", fecha : new Date(2012,1,1)},
    {titulo: "Avatar", director: "Carlos", fecha : new Date(2009,1,1)}
];
console.log(lstPeliculasFavorite);
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const lstFilter2010 = lstPeliculasFavorite.filter(pelicula => pelicula.fecha > new Date(2010,1,1))
console.log(lstFilter2010);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const lstDirectoresmap = lstPeliculasFavorite.map(pelicula => pelicula.director);
console.log(lstDirectoresmap);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const lstTitulos = lstPeliculasFavorite.map(pelicula => pelicula.titulo);
console.log(lstTitulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const lstConcat = lstDirectoresmap.concat(lstTitulos);
console.log(lstConcat);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const lstPropagacion = [...lstTitulos,...lstDirectoresmap];
console.log(lstPropagacion);
