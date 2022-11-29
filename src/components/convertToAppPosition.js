//position: string
export function convertToAppPosition(position){
    let object;

    if(position[0] === 'A'){
        object = {
            x: 0,
            y: position[1]-1,
        }
    }else if(position[0] === 'B'){
        object = {
            x: 1,
            y: position[1]-1,
        }
    }else if(position[0] === 'C'){
        object = {
            x: 2,
            y: position[1]-1,
        }
    }else if(position[0] === 'D'){
        object = {
            x: 3,
            y: position[1]-1,
        }
    }else if(position[0] === 'E'){
        object = {
            x: 4,
            y: position[1]-1,
        }
    }else if(position[0] === 'F'){
        object = {
            x: 5,
            y: position[1]-1,
        }
    }else if(position[0] === 'G'){
        object = {
            x: 6,
            y: position[1]-1,
        }
    }else if(position[0] === 'H'){
        object = {
            x: 7,
            y: position[1]-1,
        }
    }
    
    return object
}