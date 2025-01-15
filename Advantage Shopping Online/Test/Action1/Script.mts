
Device("Device").App("App").MobileObject("Main Menu").Tap
Device("Device").App("App").MobileLabel("LOGIN").Tap
Device("Device").App("App").MobileLabel("USER NAME").Tap
Device("Device").EnterKeys 0,"itouser"
Device("Device").App("App").MobileLabel("PASSWORD").Tap
Device("Device").EnterKeys 0,"Axent123"
Device("Device").App("App").MobileButton("LOGIN").Tap
Device("Device").App("App").MobileObject("Main Menu").Tap
Device("Device").App("App").MobileLabel("SIGN OUT").Tap
Device("Device").App("App").MobileButton("YES").Tap
