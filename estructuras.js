function arreglos(){
    var frutas = ["manzana", "mango", "limon", "higo", "kiwi", "fresa"];
    var result = "";

    for(var i=0; i<frutas.length ; i++){
        result = result + "<div>" + frutas[i] + "</div>";
    }

    document.getElementById("frutero").innerHTML = result;
}

function objetos(){
    var datos = { 
        name:"Jose Luis", 
        street:"Evergreen St.", 
        number: 742,
        phone: "5512341234", 
        mail: "mail@example", 
        year: 1992
    };

    document.getElementById("name").innerHTML = datos.name;
    document.getElementById("address").innerHTML = datos.street + datos.number;
    document.getElementById("age").innerHTML = 2023-datos.year;
}

function biblioteca() { 
    var libros = [
        {title:"Harry Potter",author:"JK Rowling", pages:234, genre:"fantasy"}, 
        {title:"TLOTR",author:"JRR Tolkien", pages:345, genre:"fantasy"}, 
        {title:"Eso",author:"Stephen King", pages:456, genre: "horror" },
        {title:"1984",author:"George Orwell", pages:567, genre: "scify"},
        {title:"Spider-man",author:"Stan Lee", pages:123, genre: "adventure"},
        {title:"American Gods",author:"Neil Gaiman", pages:1567, genre: "fantasy"}
    ];

    var result = "";
    var constructorLibro = "";

    for(var i=0; i<libros.length; i++){
        constructorLibro =  "<div class='book " + libros[i].genre + " '>";
        constructorLibro +=     "<div class='title'>" + libros[i].title + "</div>";
        constructorLibro +=     "<div class='author'>" + libros[i].author + "</div>";
        constructorLibro +=     "<div class='pages'>" + libros[i].pages + "</div>";
        constructorLibro += "</div>";

        result += constructorLibro;
    }

    document.getElementById("librero").innerHTML = result;

}