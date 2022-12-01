import { convertToEnginePosition } from '../components/convertToEnginePos'
import { convertToAppPosition } from '../components/convertToAppPosition'

export function setHintsToMove(position, boardArray, setHints, appearHints, boardEngine){
    for(let elem of boardArray){
        elem.setDot = undefined;
    }

    const possibleMoves = boardEngine.moves(convertToEnginePosition(position))
    console.log(boardEngine.board)

    for(let elem of boardArray){
        for(let pos of possibleMoves){
            if(elem.position.x === convertToAppPosition(pos).x && elem.position.y === convertToAppPosition(pos).y){
                if(elem.whatPlaced !== undefined){
                    const dotObject = {position: elem.position, id: 'dot', figurePosition: position, type: 'circle'};
                    elem.setDot = dotObject;
                }else{
                    const dotObject = {position: elem.position, id: 'dot', figurePosition: position, type: 'dot'};
                    elem.setDot = dotObject;
                }
            }
        }
    }

    setHints(!appearHints)
}