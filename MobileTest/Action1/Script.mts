﻿'With Device("ostype:=IOS","id:=00008101-001C34E83A82001E").App("identifier:=com.cimbniaga.CIMB.Revamp.RELEASE","instrumented:=false")
''	'In this label, using 1 property, able to execute the object
'	.MobileLabel("text:=Login atau buat rekening pertama").Tap
'end With
Device("Device").App("Release").MobileLabel("Login or Create an Account Now").Tap
wait(2)
Device("Device").App("Release").MobileEdit("MobileEdit").Tap
Device("Device").EnterKeys 0,"automate7"
Device("Device").App("Release").MobileButton("Login").Tap
wait(2)
Device("Device").App("Release").MobileButton("icon pay").Tap
'Device("Device").App("Release").MobileLabel("Transfer").Tap
wait(2)
'Device("Device").App("Release").MobileLabel("Rekening Sendiri").Tap
'wait(5)

With Device("ostype:=IOS","id:=00008101-001C34E83A82001E").App("identifier:=com.cimbniaga.CIMB.Revamp.RELEASE","instrumented:=false")
'	if .MobileLabel("accessibilityid:=My Accounts").Exist(10) then
'		'Button Back
'		.MobileButton("accessibilityid:=Transfer").Tap
'	else
'		ExitTestIteration
'	End If
	
'	'In this label, using 1 property, able to execute the object
'	.MobileLabel("text:=Login atau buat rekening pertama").Tap
'	wait(2)
'	'In this button, using 1 property, unable to execute the object
''	.MobileButton("accessibilityid:=Login").Tap
'	'have to use more than 1 property to be able to execute the object
'	.MobileButton("text:=Login","nativeclass:=XCUIElementTypeButton").Tap
'	'In this label, using 1 property, not able to execute the object
''	.MobileLabel("text:=Login").Tap
	
End With
'Device("Device").App("Release").MobileButton("Transfer").Tap

'Device("Device").App("Release").MobileLabel("Login atau buat rekening").Tap
'Device("Device").App("Release").MobileButton("Login").Tap
