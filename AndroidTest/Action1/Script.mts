pSleep = 2

Device("Device").App("App").MobileLabel("Login or Create Account").Tap
Device("Device").App("App").MobileButton("Login").Tap
wait(pSleep)
if Device("Device").App("App").MobileButton("OK").Exist(3) then
	Device("Device").App("App").MobileButton("OK").Tap
End If
Device("Device").App("App").MobileEdit("et_enteruserid").SetFocus
Device("Device").App("App").MobileEdit("et_enteruserid").Set "automate6"
Device("Device").App("App").MobileButton("Login").Tap
wait(pSleep)
Device("Device").App("App").MobileObject("gamification button").Tap
wait(pSleep)

Device("Device").App("App").MobileLabel("All Menu").Tap

wait(pSleep)

Device("Device").App("App").MobileLabel("Edit").Tap
wait(pSleep)
'retrieve x & y property
'start-> Transfer
'end-> Cardless
AIUtil.SetContext Device("micclass:=Device")
startX = AIUtil.FindTextBlock("Transfer").GetObjectProperty("x")
startY = AIUtil.FindTextBlock("Transfer").GetObjectProperty("y")
endX = AIUtil.FindTextBlock("Cardless").GetObjectProperty("x")
endY = AIUtil.FindTextBlock("Cardless").GetObjectProperty("y")

Device("Device").App("App").MobileObject("touch_outside").LongPress startX,startY
Device("Device").App("App").MobileObject("touch_outside").Pan startX,startY,endX,endY
'Device("Device").Pan startX,startY,endX,endY


