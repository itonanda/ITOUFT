
Device("Device").App("Release").MobileEdit("MobileEdit_Above").Tap
Device("Device").EnterKeys 0,"10000"
Device("Device").App("Release").MobileButton("Done").Tap
Device("Device").App("Release").MobileObject("MobileObject").Swipe "up",208,0
Device("Device").App("Release").MobileEdit("MobileEdit_Below").Tap
Device("Device").EnterKeys 0,"3000"
Device("Device").App("Release").MobileButton("Done").Tap
