export function convertToAppPosition(position: string){
    let object;

    if(position[0] === 'A'){
        object = {
            x: 0,
            y: Number(position[1])-1,
        }
    }else if(position[0] === 'B'){
        object = {
            x: 1,
            y: Number(position[1])-1,
        }
    }else if(position[0] === 'C'){
        object = {
            x: 2,
            y: Number(position[1])-1,
        }
    }else if(position[0] === 'D'){
        object = {
            x: 3,
            y: Number(position[1])-1,
        }
    }else if(position[0] === 'E'){
        object = {
            x: 4,
            y: Number(position[1])-1,
        }
    }else if(position[0] === 'F'){
        object = {
            x: 5,
            y: Number(position[1])-1,
        }
    }else if(position[0] === 'G'){
        object = {
            x: 6,
            y: Number(position[1])-1,
        }
    }else if(position[0] === 'H'){
        object = {
            x: 7,
            y: Number(position[1])-1,
        }
    }
    
    return object
}