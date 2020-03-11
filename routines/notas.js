function calcMedia(n1, n2, sc, fn){
    var media;

    if(n1 !== null && n2 !== null){
        media = ((n1+n2)/2);
    } else{
        if(sc !== null){
            if(n1 === null && n2 !== null){
                media = ((n2+sc)/2);
            }
    
            if(n2 === null && n1 !== null){
                media = ((n1+sc)/2);
            }

            if(n2 === null && n1 === null){
                media = (sc/2);
            }
        }
    }

    if(media >= 3 && media <= 6){
        if(fn !== undefined){
            if(fn !== null){
                media = (media + fn)/2;
            } 
            else {
                media = media + 0;
            }            
        }
    }

    return media;
}

module.exports.calcMedia = calcMedia;