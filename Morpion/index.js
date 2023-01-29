let grid = [null,null,null,null,null,null,null,null,null,]

let turn = false
const win = false

const cases = document.querySelectorAll(".cases");

cases.forEach(function(case_jeux) {
    case_jeux.addEventListener('click', function(){
        if(grid[case_jeux.dataset.index] == null) {
            if(turn){
                case_jeux.classList.add("red")
                grid[case_jeux.dataset.index] = "red"
                turn = false
            } else {
                case_jeux.classList.add("blue")
                grid[case_jeux.dataset.index] = "blue"
                turn = true
                console.log(turn)
            }
        } else {
            console.log("t con")
        }

        win = You_Win(grid)
    })
})

function You_Win (grid){
    let check_win = false
    // let possibilite = [
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6]
    // ]

    You_Win.forEach(function(possibilite) {
        
        if(grid){
            return check_win = true
        } else{
            
        }
    })
    
}

