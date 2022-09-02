(function (App) {
    App.getClientElement = function(client){
        const allAccounts = App.getAccounts();
        const clientAccounts = [];
        
        for (let account of allAccounts) {
            if (account.clientId === client.id) {
            clientAccounts.push(account);
            }
        }
    
        const node = App.getClientNode(client);
        const ul = App.getClientAccountsElement(clientAccounts);
    
        node.appendChild(ul);
    
        return node;
    }
})(window.App || (window.App = {}));

(function (App) {
    App.getClientNode = function(client){
        const li = document.createElement("li");
        li.append(App.getFullName(client));
    
        return li;
    }
})(window.App || (window.App = {}));

(function (App) {
    App.getFullName = function(client){
        return client.first_name + " " + client.last_name;
    }
})(window.App || (window.App = {}));