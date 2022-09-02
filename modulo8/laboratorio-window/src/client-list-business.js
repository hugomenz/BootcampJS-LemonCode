(function (App) {
    App.printClientsAccounts = function(){
        const clients = App.getClients();
        const ul = document.createElement("ul");
        for (let client of clients) {
            const element = App.getClientElement(client);
            ul.appendChild(element);
        }
        document.getElementById("root").appendChild(ul);
    }
})(window.App || (window.App = {}));

