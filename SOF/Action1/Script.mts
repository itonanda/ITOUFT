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
'Device("Device").App("App").MobileObject("gamification button").Tap
'wait(pSleep)
'
'Device("Device").App("App").MobileLabel("All Menu").Tap

wait(pSleep)

'Device("Device").App("App").MobileLabel("Edit").Tap
'wait(pSleep)
'retrieve x & y property
'start-> Transfer
'end-> Cardless
AIUtil.SetContext Device("micclass:=Device")
AIUtil.FindTextBlock("My Account").Click

wait(pSleep)

Device("Device").App("App").MobileButton("Icon Search").Tap
Device("Device").App("App").MobileEdit("et_search").Set "FLEXI"
wait(pSleep)

Call SUB_SOF.SOFDOF

'with Device("id:=21306e453e027ece","ostype:=ANDROID").App("identifier:=id.co.cimbniaga.mobile.android.release","instrumented:=true")
'with Device("id:=21306e453e027ece","ostype:=ANDROID").App("identifier:=id.co.cimbniaga.mobile.android.release","instrumented:=true")
'	getmcindex = 102
'	plus = 7
'	getBalance = 0
'	For Iterator = 1 To 3
'		If Iterator>1 Then
'			getmcindex = getmcindex + plus
'		End If
'		MsgBox getmcindex
'		SetMcindex = "mcindex:=" & getmcindex
'		'MobileLabel("nativeclass:=com.google.android.material.textview.MaterialTextView","resourceid:=tv_amount",SetMcindex).Highlight
'		'getBalance = MobileLabel("nativeclass:=com.google.android.material.textview.MaterialTextView","resourceid:=tv_amount",SetMcindex).GetROProperty("text")
'		getBalance = Device("id:=21306e453e027ece","ostype:=ANDROID").App("identifier:=id.co.cimbniaga.mobile.android.release","instrumented:=true").MobileLabel("nativeclass:=com.google.android.material.textview.MaterialTextView","resourceid:=tv_amount","mcindex:=" & getmcindex).GetROProperty("text")
'		Device("id:=21306e453e027ece","ostype:=ANDROID").App("identifier:=id.co.cimbniaga.mobile.android.release","instrumented:=true").MobileLabel("nativeclass:=com.google.android.material.textview.MaterialTextView","resourceid:=tv_amount",SetMcindex).Highlight
'		Device("Device").App("App").MobileLabel("1,200").Highlight
'		MsgBox getBalance
'		getBalance = 0
'	Next
'	
'end with 
