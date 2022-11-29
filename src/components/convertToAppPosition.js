//position: string
export function convertToAppPosition(position){
    if(position[0] === 'A'){
        return {
            x: 0,
            y: position[1],
        }
    }else if(position[0] === 'B'){
        return {
            x: 1,
            y: position[1],
        }
    }else if(position[0] === 'C'){
        return {
            x: 2,
            y: position[1],
        }
    }else if(position[0] === 'D'){
        return {
            x: 3,
            y: position[1],
        }
    }else if(position[0] === 'E'){
        return {
            x: 4,
            y: position[1],
        }
    }else if(position[0] === 'F'){
        return {
            x: 5,
            y: position[1],
        }
    }else if(position[0] === 'G'){
        return {
            x: 6,
            y: position[1],
        }
    }else if(position[0] === 'H'){
        return {
            x: 7,
            y: position[1],
        }
    }
}