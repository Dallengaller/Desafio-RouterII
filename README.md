#Proyecto Router II - PokeApi
#Se crea una APP que obtiene los datos de un caracter de Pokemon.
#El caracter es selecionado a traves de un selector, que consulta la info en la API.
#El resultado es mostrar la imagen del pokemon asociado junto a los datos estadisticos.
#La app trabaja con dos vistas: Home y Pokemones.
#Se ha agregado una tercera vista Notfound, para cuando el usuario intente acceder a una ruta inexsitente.
#Al consultar la ruta NavLink, se activa la clase, encerrando la vista actual en un rectangulo rojo (cuando esta activo).
#Se utiliza el hook 'useNavigate' para redireccionar programaticamente en el componente 'PokemonPage'. Tambien se utiliza el hook useParams en el mismo componente.
#He variado un poco el diseño y la cantidad de elementos en al lista, puesto que no era un requisito.