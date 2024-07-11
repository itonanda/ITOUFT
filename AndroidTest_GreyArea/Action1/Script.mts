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
'Click QR
Device("Device").App("App").MobileButton("fab qr payment").Tap

wait(pSleep)

AIUtil.SetContext Device("micclass:=Device")

startX = AIUtil.FindTextBlock("QR").GetObjectProperty("x")
startY = AIUtil.FindTextBlock("QR").GetObjectProperty("y")

Device("Device").App("App").MobileObject("IC Info").Tap

'Close via object behind the TouchOutside-> Failed
'Device("Device").App("App").MobileLabel("QR").Tap


'Close via coordinates behind the TouchOutside
Device("Device").App("App").MobileObject("touch_outside").Tap startX,startY
''retrieve x & y property
''start-> Transfer
''end-> Cardless
'AIUtil.SetContext Device("micclass:=Device")
'startX = AIUtil.FindTextBlock("Transfer").GetObjectProperty("x")
'startY = AIUtil.FindTextBlock("Transfer").GetObjectProperty("y")
'endX = AIUtil.FindTextBlock("Cardless").GetObjectProperty("x")
'endY = AIUtil.FindTextBlock("Cardless").GetObjectProperty("y")
'
'Device("Device").App("App").MobileObject("touch_outside").LongPress startX,startY
'Device("Device").App("App").MobileObject("touch_outside").Pan startX,startY,endX,endY
'Device("Device").Pan startX,startY,endX,endY


