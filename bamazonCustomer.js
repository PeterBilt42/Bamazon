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
        }])
    })
}

checkAndBuy2();