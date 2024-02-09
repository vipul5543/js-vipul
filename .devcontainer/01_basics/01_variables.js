const accountId = 12345
let accountEmail = "vipul@google.com"
var accountPassword = "12345"
accountCity = "jaipur"

//accountId = 2 // not allowed

accountEmail ="vip@vip"
accountPassword = "8372"
accountCity = "azamgarh"
let accountState;

console.table([accountEmail, accountPassword, accountCity, accountId, accountState])

console.log(accountId);

/*
prefer not to use var
bcoz of issue in block scope and functional scope
*/