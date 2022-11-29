//position: Object {x: number, y: number}

export function convertToEnginePosition(position){
    const { x, y } = position
    
    if(x === 0){
        return `A${y+1}`
    }else if(x === 1){
        return `B${y+1}`
    }else if(x === 2){
        return `C${y+1}`
    }else if(x === 3){
        return `D${y+1}`
    }else if(x === 4){
        return `E${y+1}`
    }else if(x === 5){
        return `F${y+1}`
    }else if(x === 6){
        return `G${y+1}`
    }else if(x === 7){
        return `H${y+1}`
    }
}