'LoadFunctionLibrary "..\SUB_SOF.qfl"
pSleep = 2
'userLogin = "mate03"
userLogin = "automate4"

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

AIUtil.SetContext Device("micclass:=Device")
AIUtil.FindTextBlock("Pay").Click
wait(pSleep)
AIUtil.FindTextBlock("Send Money").Click
wait(pSleep)
AIUtil("down_triangle").Click
wait(pSleep)
Device("Device").App("App").MobileButton("Icon Search").Tap
Device("Device").App("App").MobileEdit("et_search").Set "XTRA SAVERS"
wait(pSleep)

'Call SUB_SOF.SOFDOFQR

UUID = "id:=" & GetUUID

with Device(UUID,"ostype:=ANDROID").App("identifier:=id.co.cimbniaga.mobile.android.release","instrumented:=true")
	getmcindex = 12 ''user mate03
'	getmcindex = 10 ''user automate4
	plus = 9
	getBalance = 0
	CustomText = "text:=XTRA SAVERS.*"
	for Iterator = 1 To 3
		If Iterator>1 Then
			getmcindex = getmcindex + plus
		End If
		SetMcindex = "mcindex:=" & getmcindex
		
		RetrieveMcindex = Device(UUID,"ostype:=ANDROID").App("identifier:=id.co.cimbniaga.mobile.android.release","instrumented:=true").MobileLabel("nativeclass:=com.google.android.material.textview.MaterialTextView","resourceid:=tv_balance_sof").GetROProperty("mcindex")
		MsgBox RetrieveMcindex '-> value empty
		
		getBalance = Device(UUID,"ostype:=ANDROID").App("identifier:=id.co.cimbniaga.mobile.android.release","instrumented:=true").MobileLabel("nativeclass:=com.google.android.material.textview.MaterialTextView","resourceid:=tv_balance_sof",SetMcindex).GetROProperty("text")
		MsgBox getBalance

		getBalance = 0
		
	Next
end with

function GetUUID
	Set pShell = CreateObject("WScript.Shell")
	Set pCommandUUID = pShell.Exec("cmd /C cd ""C:\Program Files\Digital Lab Lite for Local Devices\server\android-sdk-windows\platform-tools"" && adb devices -l")
	LineNumber = 1
	Do While Not pCommandUUID.StdOut.AtEndOfStream
		UUID = pCommandUUID.StdOut.ReadLine()
		If LineNumber = 2 Then
			UUID = trim(split(UUID," ")(0))
			Exit do
		End If
		LineNumber = LineNumber+1
	loop
	GetUUID = UUID
End function
