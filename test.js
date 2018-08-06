function validatePIN(pin) {
    var arr = pin.split();
    if (arr.length != 4 || arr.length != 6) {
        return false;
    } else if (arr.length == 4 || arr.length == 6) {
        for (var i = 0; i < arr.length; i++) {
            if (!Number.isInteger(arr[i])) {
                return false;
            }
            return;
        }
    } else {
        return true;
    }
}
validatePIN(1234);
