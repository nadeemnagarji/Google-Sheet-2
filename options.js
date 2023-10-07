const bold = document.getElementById("bold")
const italic = document.getElementById("italic")
const underline = document.getElementById("underline")
const textAlignElement = document.getElementsByClassName("AlignItems")

const activeCellElement = document.getElementById("curr-cell")
let activeOptionsState
let activeCell = null


function  highlightedOptionsButtonsOnFocus(){
       
    // check if the active cell is bold or not 
        if(activeOptionsState.isBoldSelected){
             bold.classList.add("active-options")
        }else{
             bold.classList.remove("active-options")
        }

     // check if the active cell is italic or not 
        if(activeOptionsState.isItalicSelected){
        italic.classList.add("active-options")
        }else{
        italic.classList.remove("active-options")
        }

    // check if the active cell is italic or not 
        if(activeOptionsState.isUnderlineSelected){
           
            underline.classList.add("active-options")
            }else{
            underline.classList.remove("active-options")
            }
            console.log(activeOptionsState.textAlign);
    // we call this function again and give it the current textAlign condition value
    // so this function will automatically highlight the respective button
    
            highlightTextAlignButtons(activeOptionsState.textAlign)
  
}








function oncellFocus (e){
    const columnId = e.target.id.slice(0,1)

activeCellElement.innerText =`${e.target.id}`
// we access the row in which the cell we clicked is located to highlight it
const parentRowId = `${e.target.parentNode.id}`
const parentRow = document.getElementById(parentRowId)
 
// now we have to highlight the first element i.e.e child of this row 
const firstChild = parentRow.firstChild
// console.log(firstChild);
//to hightlight respective row and column
document.getElementById(firstChild.id).style.backgroundColor = "#D3E3FD"
document.getElementById(columnId).style.backgroundColor ="#D3E3FD"

// now we capture all the styles of cell

activeCell = e.target
activeCell.style.overflowY ="auto"
console.log(activeCell.style.overflowY);


const computedStyle = getComputedStyle(activeCell)

activeOptionsState = {
    isBoldSelected: computedStyle.fontWeight ==="600",
    isItalicSelected: computedStyle.fontStyle ==="italic",
    isUnderlineSelected: computedStyle.textDecoration.includes("underline"),
    textAlign:computedStyle.textAlign,
    textColor:computedStyle.color,
    backgroundColor:computedStyle.backgroundColor,
    fontSize:computedStyle.fontSize
}

highlightedOptionsButtonsOnFocus()
// console.log(activeOptionsState);

}







function offcellFocus(e){
    
    // first we remove the innerText of cell which is display currentactive cell
    activeCellElement.innerText =`none`
    

    //// we use this blur event to remove the highlighted row 
    const parentRowId = `${e.target.parentNode.id}`
    const parentRow = document.getElementById(parentRowId)
    const firstChild = parentRow.firstChild
    document.getElementById(firstChild.id).style.backgroundColor = "white"


    // now doing same for parentColumn
    const columnId = e.target.id.slice(0,1)
    document.getElementById(columnId).style.backgroundColor ="white"
}





function onClickBold(button){
    button.classList.toggle("active-options")

if(activeCell){
   if(activeOptionsState.isBoldSelected===false){
    activeCell.style.fontWeight = "600"
   }else{
    activeCell.style.fontWeight = "400"
   }
   activeOptionsState.isBoldSelected = !activeOptionsState.isBoldSelected
}

}
function onClickItalic(button){
    button.classList.toggle("active-options")

if(activeCell){
  
   if(activeOptionsState.isItalicSelected===false){
    activeCell.style.fontStyle = "italic"
   }else{
    activeCell.style.fontStyle = "normal"
   }
   activeOptionsState.isItalicSelected = !activeOptionsState.isItalicSelected
}

}

function onClickUnderline(button){
   
    button.classList.toggle("active-options")
  
if(activeCell){
   if(activeOptionsState.isUnderlineSelected===false){
    activeCell.style.textDecoration = "underline"
   }else{
    activeCell.style.textDecoration= "none"
   }
   activeOptionsState.isUnderlineSelected = !activeOptionsState.isUnderlineSelected
}
console.log(activeOptionsState.isUnderlineSelected);
}


function highlightTextAlignButtons(textAlignValue){
        // if textAlignValue is left we highlight leftAlignButton
        // if rightAlignValue is left we highlight rightAlignButton

        
    for(let i=0;i<textAlignElement.length;i++){
        if(textAlignElement[i].getAttribute("data-value")===textAlignValue){
            textAlignElement[i].classList.toggle("active-options")
            console.log(textAlignElement[i]);
        }else{
            textAlignElement[i].classList.remove("active-options")
        }
    }
}


function onclickTextAlign(button){
    const alignType = button.getAttribute("data-value");
    // this value helps us identify which button was clicked amoungst the three

    // we cant change the bg of button because if we do it will change value of all 3 buttons
    // to handle this we make another function which handles the bg change of each button
    // with the help of attribute value
    highlightTextAlignButtons(alignType)
   if(activeCell){
   
    activeCell.style.textAlign = alignType
    activeOptionsState.textAlign=alignType
   }

}



function onColorChange(textColorInput){
    // console.log(textColorInput.value);

    if(activeCell){
        activeCell.style.color = textColorInput.value
        activeOptionsState.textColor = textColorInput.value
    }
}

function onColorBgChange(textColorInput){
    // console.log(textColorInput.value);
    if(activeCell){
        activeCell.style.backgroundColor = textColorInput.value
        activeOptionsState.backgroundColor = textColorInput.value
    }
}
