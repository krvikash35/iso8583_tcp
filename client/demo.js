(function(){
    var oldLog = console.log;
    console.log = function (message) {
        // DO MESSAGE HERE.
        oldLog(message);
        oldLog.apply(console, arguments);
    };
    var phone = 123
    oldLog("hello %d ",phone)
})();
