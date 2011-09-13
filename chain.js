function chain(obj) {
    var property, self = {};
    for (property in obj) {
       (function(self, obj, property) {
            self[property] = function() {
                var result = obj[property].apply(obj, arguments);
                return typeof result === 'undefined' ? self: result;
            }
        })(self, obj, property);
    }
    return self;
}

