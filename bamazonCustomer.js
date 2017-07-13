var mysql = require('mysql');
var prompt = require('prompt');
var inquirer = require('inquirer');
var Table = require('cli-table');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'Viper25$',
	database:'bamazon',
});

var checkAndBuy2 = function() {
    connection.query('SELECT * FROM products', function(err, res) {
        var table = new Table({
            head: ['ID', 'Product Name', 'Department', 'Price', 'Stock Quantity']
        });

        console.log("HERE ARE ALL THE ITEMS AVAILABLE FOR SALE: ");
        console.log("===========================================");
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].Item_id, res[i].Product_Name, res[i].Department_Name, res[i].Price.toFixed(2), res[i].Stock_Quantity]);
        }
        console.log("-----------------------------------------------");
        console.log(table.toString());
        inquirer.prompt([{
            name: "itemId",
            type: "input",
            message: "What is the item ID you would like to buy?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "Quantity",
            type: "input",
            message: "How many of this item would you like to buy?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
//         }]).then(function(answer) {
//             var chosenId = answer.Item_id - 1
//             var chosenProduct = res[chosenId]
//             var chosenQuantity = answer.Quantity
//             if (chosenQuantity < res[chosenId].Stock_Quantity) {
//                 console.log("Your total for " + "(" + answer.Quantity + ")" + " - " + res[chosenId].Product_Name + " is: " + res[chosenId].Price.toFixed(2) * chosenQuantity);
//                 connection.query("UPDATE products SET ? WHERE ?", [{
//                     StockQuantity: res[chosenId].StockQuantity - chosenQuantity
//                 }, {
//                     id: res[chosenId].id
//                 }], function(err, res) {
//                     //console.log(err);
//                     checkAndBuy2();
//                 });

//             } else {
//                 console.log("Sorry, insufficient Quanity at this time. All we have is " + res[chosenId].Stock_Quantity + " in our Inventory.");
//                 checkAndBuy2();
//             }
        })
    })
}

checkAndBuy2();