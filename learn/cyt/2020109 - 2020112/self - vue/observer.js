function Observer(data) {
    this.data = data;
    this.walk(data);
}

Observer.prototype = {
    walk: function(data) {
        var self = this;
        Object.keys(data).forEach(function(key){ 
            self.defineReactive(data, key, data[key]);
        }) ;
    },
    defineReactive: function(data, key, val) {
        var dep = new dep();
        var childObj = observe(val);
        Object.defineProperty(data, key, {
            enumerable: true,      //属性是否可以枚举
            configurable: true,    //属性是否可以删除
            get: function getter () {
                if (dep.target) {
                    dep.addSub(Dep.target);
                }
                return val;
            },
            set: function setter (newVal) {
                if(newVal === val) {
                    return;
                }
                val = newVal;
                dep.notify();
            }
        });
    }
};