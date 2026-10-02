class Cancion {

    constructor(titulo, artista, duracionSegundos, album) {

        this.titulo = titulo;
        this.artista = artista;
        this.duracionSegundos = duracionSegundos;
        this.album = album;

    }

    mensaje() {

        console.log("El titulo de la cancion: " + this.titulo);
        console.log("El artista es: " + this.artista);
        console.log("La duracion de la cancion es: " + this.duracionSegundos);
        console.log("Album: " + this.album);

    }

}

const miCancion = new Cancion("NORMAL", "BTS", 332, "ARIRANG");

miCancion.mensaje();