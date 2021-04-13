var UserInput = prompt ("Please input your netvalue here")

CalculateGrossValue(UserInput);

function CalculateGrossValue (NetValue) {
var NetValue;
var Tax = 0.19;
var TaxPercent = (Tax*100);
var GrossValue = (NetValue*(1+Tax));
var TaxValue = (NetValue*Tax);
alert("With a Net Value of "+NetValue+"EUR and a Tax Value of "+TaxPercent+"% will have a Tax value of "+TaxValue+"EUR and a Gross Value of "+GrossValue+"EUR");
}