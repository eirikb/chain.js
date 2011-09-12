function chain(obj) {
    var property, self = {},
    add = function(self, obj, property) {
        self[property] = function() {
            var result = obj[property].apply(obj, arguments);
            return typeof result === 'undefined' ? self: result;
        };
    };
    for (property in obj) {
        add(self, obj, property);
    }
    return self;
}

