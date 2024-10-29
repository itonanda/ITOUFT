Set qtApp = CreateObject("QuickTest.Application")
'qtApp.Options.Run.RunMode = "Fast"
Setting.Item("WebFastRunMode")=True

'For Iterator = 1 To 10
	CheckExist = false
	SystemUtil.Run "firefox.exe","http://advantageonlineshopping.com"
	MercuryTimers(SyncTimer).Start
	Browser("Advantage Shopping").Page("Advantage Shopping").Sync
	Browser("title:=Advantage Shopping").Page("title:=Advantage Shopping").Sync
	MercuryTimers(SyncTimer).Stop
	Reporter.ReportEvent micDone,"Mercury Timer Check Sync","Timer in seconds : " & MercuryTimers(SyncTimer)/1000
	'MercuryTimers(ExecuteTimer).Reset
	MercuryTimers(ExecuteTimer).Start
	TimeOutSeconds = 1
	CheckExist = UIAWindow("name:=.*Mozilla Firefox").UIAButton("name:=(Not Now)|(Dismiss)").Exist(TimeOutSeconds)
	MercuryTimers(ExecuteTimer).Stop
	Reporter.ReportEvent micDone,"Mercury Timer Check Object Exist","Timer in seconds : " & MercuryTimers(ExecuteTimer)/1000
	If CheckExist Then
		UIAWindow("name:=.*Mozilla Firefox").UIAButton("name:=(Not Now)|(Dismiss)").Click	
	End If
	MercuryTimers(NotExistsTimer).Start
	CheckExist = UIAWindow("name:=.*Mozilla Firefox").UIAButton("name:=(Not Now)|(Dismiss)").Exist(TimeOutSeconds)
	MercuryTimers(NotExistsTimer).Stop
	Reporter.ReportEvent micDone,"Mercury Timer Check Object Not Exist","Timer in seconds : " & MercuryTimers(NotExistsTimer)/1000
'	Browser("creationtime:=0").Close	
'Next

