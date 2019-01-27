function getCreditCardType(accountNumber)
{

  //start without knowing the credit card type
  var result = "unknown";

  //MasterCard numbers either start with the numbers 51 through 55 or with the numbers 2221 through 2720. All have 16 digits.
  if (/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}/.test(accountNumber))
  {
    result = "Mastercard";
  }

  //All Visa card numbers start with a 4. New cards have 16 digits. Old cards have 13.
  else if (/^4[0-9]{12}(?:[0-9]{3})?/.test(accountNumber)) 
  {
    result = "Visa";
  }

  //American Express card numbers start with 34 or 37 and have 15 digits.
  else if (/^3[47][0-9]{13}/.test(accountNumber))
  {
    result = "AmEx";
  }
  //Diners Club card numbers begin with 300 through 305, 36 or 38. All have 14 digits. There are Diners Club cards that begin with 5 and have 16 digits. These are a joint venture between Diners Club and MasterCard, and should be processed like a MasterCard.
  else if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}/.test(accountNumber))
  {
    result = "Diners";
  }
  //Discover card numbers begin with 6011 or 65. All have 16 digits.
  else if (/^6(?:011|5[0-9]{2})[0-9]{12}/.test(accountNumber))
  {
    result = "Discover";
  }
  //JCB cards beginning with 2131 or 1800 have 15 digits. JCB cards beginning with 35 have 16 digits.
  else if (/^(?:2131|1800|35\d{3})\d{11}/.test(accountNumber))
  {
    result = "JCB";
  }

  return result;
} 