var NetValue = prompt ("Please input your netprice here")
var Tax = 0.19
var TaxPercent = (Tax*100)
var GrossValue = (NetValue*(1+Tax))
var TaxValue = (NetValue*Tax)
alert("With a Tax of "+TaxPercent+"% will have a Tax value of "+TaxValue+"EUR and a Gross Value of "+GrossValue+"EUR")
