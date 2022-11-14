function ClickEventHandler(event)
{
    if (("" + event.target.className).indexOf("class3") != -1)
    {
        alert("Primary button pressed");
    }
}

window.addEventListener('click', ClickEventHandler,true);