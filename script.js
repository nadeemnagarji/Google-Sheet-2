const table = document.getElementById("row-section")
const column = document.getElementById("columns")


/// <===========this function creates the first top row===========================>
function createMainRow(columnNumber){
    const row = document.createElement("div")
    row.id = `row-${columnNumber}`
    row.className="row"
    for(let i=65;i<=90;i++){
        const div =   document.createElement("div")
        const letter = String.fromCharCode(i)
        div.innerText = `${letter}`
        div.id = `${letter}`
       row.appendChild(div)
    }
    
  table.appendChild(row)
}

createMainRow(0)

/// t<================================               ======================================>


function createRow(columnNumber){
    const row = document.createElement("div")
    row.id = `row-${columnNumber}`
    row.className="columnRows"
    for(let i=64;i<=90;i++){
        const letter = String.fromCharCode(i)
        if(i===64){
            const cell =   document.createElement("b")
            cell.innerText = `${columnNumber}`
       
            row.appendChild(cell)
            cell.className="columnFirst"
            cell.id=`${columnNumber}`
        }else{
            const cell =   document.createElement("div")
            cell.innerText =""
            cell.id = `${letter}-${columnNumber}`
       
           row.appendChild(cell)
           cell.setAttribute("contenteditable",true)
           cell.style.minWidth = "100px"
           cell.style.maxHeight="20px"
           cell.addEventListener("focus",oncellFocus)
           cell.addEventListener("blur",offcellFocus)
        }
     
    }
    column.appendChild(row)
}


for(let i=1 ;i<=100;i++){
   createRow(i)
}