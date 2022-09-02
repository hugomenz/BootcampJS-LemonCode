(function (App) {
    App.getClientAccountsElement = function(accounts){
        const ul = document.createElement("ul");
        for (let account of accounts) {
            ul.append(App.getAccountElement(account));
        }
        return ul;
    }
})(window.App || (window.App = {}));

(function (App) {
    App.getAccountElement = function(account){
        const li = document.createElement("li");
    
        li.style = App.getNodeStyle(account);
    
        li.append("[Saldo: " + account.money + "] IBAN: " + account.iban);
        return li;
    }
})(window.App || (window.App = {}));