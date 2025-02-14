let initialDisplay="0";
let resultDisplay=false;
function showingDisplay(value)
{
    if(initialDisplay == "0" || resultDisplay)
    {
        initialDisplay=value;
    }
    else
    {
        initialDisplay+=value;
    }
    resultDisplay=false;
    updateDisplay();
}
function updateDisplay()
{
    const displayElement=document.getElementById("display");
    displayElement.textContent=initialDisplay;
}
function calculate()
{
    try
    {
        const result=eval(initialDisplay);
        initialDisplay+=" = "+result.toString();
        updateDisplay();
        }catch (error){
    initialDisplay += "\nError";
    updateDisplay();
    }
    resultDisplay = true;
}
function clearLastElement() 
{
    initialDisplay = initialDisplay.slice(0, -1);
      if (initialDisplay === "") {
      initialDisplay = "0";
    }
    updateDisplay();
}
function clearDisplay() 
{
    initialDisplay = "0";
    resultDisplay = false;
    updateDisplay();
}
