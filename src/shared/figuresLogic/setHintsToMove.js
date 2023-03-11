import { convertToEnginePosition } from 'shared/utils/convertToEnginePos'
import { convertToAppPosition } from 'shared/utils/convertToAppPosition'

export function setHintsToMove(position, boardArray, boardEngine, setBoardArray){
    setBoardArray(
        boardArray.map((obj) => {
            obj.setDot = undefined
            return obj
        })
    )

    const possibleMoves = boardEngine.moves(convertToEnginePosition(position))

    for(let elem of boardArray){
        for(let pos of possibleMoves){
            let convertPos = convertToAppPosition(pos)
            if(elem.position.x === convertPos.x && elem.position.y === convertPos.y){
                if(elem.whatPlaced !== undefined){
                    const dotObject = {position: elem.position, id: 'dot', figurePosition: position, type: 'circle'};
                    let index = boardArray.indexOf(elem)
                    setBoardArray(
                        boardArray.map((obj, i) => {
                            if(index === i){
                                obj.setDot = dotObject
                            }

                            return obj
                        })
                    )
                }else{
                    const dotObject = {position: elem.position, id: 'dot', figurePosition: position, type: 'dot'};
                    let index = boardArray.indexOf(elem)
                    setBoardArray(
                        boardArray.map((obj, i) => {
                            if(index === i){
                                obj.setDot = dotObject
                            }

                            return obj
                        })
                    )
                }
            }
        }
    }
}