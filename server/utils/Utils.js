
var Utils = {
    objIsEmpty: function (obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    },
    objHasProperty: function(obj, property) {
        if(obj.hasOwnProperty(property)) {
            return true;
        }
        return false;
    }
}

exports.utils = Utils;