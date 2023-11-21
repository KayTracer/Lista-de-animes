var listaAnimes = ["https://upload.wikimedia.org/wikipedia/pt/5/51/Shingeki_no_Kyojin_1%C2%AA_temporada.jpg","https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg","https://br.web.img3.acsta.net/c_310_420/pictures/17/02/27/17/41/046707.jpg"];

                   //listaAnimes[0] = "https://upload.wikimedia.org/wikipedia/pt/5/51/Shingeki_no_Kyojin_1%C2%AA_temporada.jpg"

//for (var i=0; i<listaAnimes.length; i++){
  //document.write("<img src=" + listaAnimes[i] + ">")}//

listaAnimes.forEach(function(filme) {
                    document.write("<img src=" + filme + ">")
                    })