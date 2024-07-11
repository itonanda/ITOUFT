LoadFunctionLibrary "..\SUB_SOF.qfl"
pSleep = 2
userLogin = "automate6"

If Device("Device").App("App").MobileButton("Get Started").Exist(1) Then
	Device("Device").App("App").MobileButton("Get Started").Tap
	Device("Device").App("App").MobileButton("Close").Tap
End If

If Device("Device").App("App").MobileLabel("Close").Exist(1) Then
	Device("Device").App("App").MobileLabel("Close").Tap	
End If

Device("Device").App("App").MobileLabel("Login or Create Account").Tap
'Device("Device").App("App").MobileButton("Login").Tap
wait(pSleep)
if Device("Device").App("App").MobileButton("OK").Exist(3) then
	Device("Device").App("App").MobileButton("OK").Tap
End If
Device("Device").App("App").MobileEdit("et_enteruserid").SetFocus
Device("Device").App("App").MobileEdit("et_enteruserid").Set userLogin
Device("Device").App("App").MobileButton("Login").Tap
wait(pSleep)
Device("Device").App("App").MobileLabel("Close").Tap


AIUtil.SetContext Device("micclass:=Device")
AIUtil.FindTextBlock("Transfer").Click
wait(pSleep)
AIUtil.FindTextBlock("Own Account").Click
wait(pSleep)
Device("Device").App("App").MobileLabel("•••").Tap
Device("Device").App("App").MobileLabel("XTRA Savers USD").Tap
Device("Device").App("App").MobileList("rv_rekpon").Select 0
Device("Device").App("App").MobileEdit("et_phone_number").SetFocus
Device("Device").App("App").MobileEdit("et_phone_number").Set "1,0000"
Device("Device").App("App").MobileButton("Continue").Tap
Device("Device").App("App").MobileButton("Confirm").Tap
Device("Device").App("App").MobileButton("Later").Tap
Device("Device").App("App").MobileLabel("Transfer to").Tap

Device("Device").App("App").MobileLabel("MB13060000201912").Tap

