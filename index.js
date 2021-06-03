
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
  ] 


function isWin(recordInstance){
    return recordInstance.result === "W"
}

function superbowlWin(array){
    const win = array.find(isWin);
    if (!!win === true) {
        return array.find(isWin).year
    } else {
        return undefined
    }
}



console.log(superbowlWin(record));