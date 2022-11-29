//position: Object {x: number, y: number}

export function convertToAppPosition(position){
    const { x, y } = position
    
    if(x === 0){
        return `A${y}`
    }else if(x === 1){
        return `B${y}`
    }else if(x === 2){
        return `C${y}`
    }else if(x === 3){
        return `D${y}`
    }else if(x === 4){
        return `E${y}`
    }else if(x === 5){
        return `F${y}`
    }else if(x === 6){
        return `G${y}`
    }else if(x === 7){
        return `H${y}`
    }
}