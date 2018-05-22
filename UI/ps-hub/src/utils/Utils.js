//@flow
var Utils = {
    objIsEmpty: function isEmpty(obj: ?Object) {
        for(var prop: string in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }
    
        return true;
    }
}

export default Utils;