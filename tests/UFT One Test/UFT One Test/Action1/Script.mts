SystemUtil.Run "C:\Program Files\Mozilla Firefox\firefox.exe","","C:\Program Files\Mozilla Firefox",""
Browser("\").Navigate "https://moonmaster.github.io/DemoSimple/v2/index.html"
Browser("\").Page("Simple Demo").Sync @@ hightlight id_;_264512_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("\").Page("Simple Demo").WebButton("Button").Click @@ script infofile_;_ZIP::ssf18.xml_;_
message = Browser("\").GetDialogText()
StrComp message,"Primary button pressed",1
Browser("\").HandleDialog micOK @@ hightlight id_;_264512_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("\").CloseAllTabs
