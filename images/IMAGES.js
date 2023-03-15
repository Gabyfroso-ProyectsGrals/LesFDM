import imgObj from '../json/objetos.json';
import imgPlt from '../json/plantas.json';

function SearchIMG(filtrado) {
    let p = Object.entries(imgPlt).flatMap(x => x[1]);
    let o = Object.entries(imgObj).flatMap(x => x[1]);
    let All = [...p, o];
    All = All.flat();
    
    let filtradoImagenes = All.filter(item=> {
        if (item.id == filtrado.id && item.name == filtrado.name && item.srcIMG[0] == '.') {
            return item;
        }
    });
    let item = require('./example.jpg');
    if (filtradoImagenes[0] !== undefined) {
        filtradoImagenes = filtradoImagenes[0].srcIMG
        //item = require(filtradoImagenes);

        item = require('./Objetos/Llaveros/1001-a1a-26229665_190768228328251_836186005599505585_n.jpg');
        console.log(true);
    }

    return item;
}

export default SearchIMG;