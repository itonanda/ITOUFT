xDevice = "ostype:=ANDROID"
xAppIdentifier = "identifier:=com.Advantage.aShopping"
xInstrumented = "instrumented:=false"
xMainMenu = "resourceid:=com.Advantage.aShopping:id/imageViewMenu"
username = "itouser"
password = "Axent123"

Product = ("HP S9500 BLUETOOTH,HP Z4000 WIRELESS MOUSE,LOGITECH USB HEADSET H390")
arrProduct = split(Product,",")
Total = UBound(arrProduct)

SUB_AdvantageShopping.Login username,password

For Iterator = 0 To Total
	SearchProduct = arrProduct(Iterator)
	SUB_AdvantageShopping.ProductSearch(SearchProduct)
	SUB_AdvantageShopping.AddToCart
	SUB_AdvantageShopping.ClickCart
	SUB_AdvantageShopping.CheckOut
	SUB_AdvantageShopping.PayNow
	SUB_AdvantageShopping.ValidateOrderPayment	
Next

SUB_AdvantageShopping.SignOut
