

Device("Device").App("App").MobileLabel("Login or Create Account").Tap
Device("Device").App("App").MobileEdit("et_enteruserid").SetFocus
Device("Device").App("App").MobileEdit("et_enteruserid").SetSecure "665feb0fdc7ac8566e8f1b62af39aec6090ad08866a843ea"
Device("Device").App("App").MobileButton("Login").Tap
Device("Device").App("App").MobileLabel("Close").Tap
Device("Device").App("App").MobileObject("gamification button").Tap
Device("Device").App("App").MobileList("rv_dynamic_menu").Select 7
Device("Device").App("App").MobileLabel("Edit").Tap
Device("Device").App("App").MobileObject("filled_container").LongPress
Device("Device").App("App").MobileObject("filled_container_2").LongPress
Device("Device").App("App").MobileObject("filled_container_5").LongPress
Device("Device").App("App").MobileObject("filled_container_3").LongPress
Device("Device").App("App").MobileObject("filled_container").LongPress
