(function (App) {
    App.getNodeStyle = function(account){
        if (account.money < 0) {
            return "color: red";
        }
    
        return "color: blue";
    }
})(window.App || (window.App = {}));