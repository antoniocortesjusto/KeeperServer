
/*
 * GET home page.
 */

var MailChimpAPI = require('mailchimp').MailChimpAPI;
var apiKey = 'b129b31bdc33e77c3c2a9d1d5979c162-us7';
var listId = '95c1bab1e9';
var groupingId ='6305';

try { 
    var api = new MailChimpAPI(apiKey, { version : '2.0' });
} catch (error) {
    console.log(error.message);
}


exports.ping = function(callback){

    var sendData = {};

    api.call('helper', 'ping', sendData, function (error, data) {
        if (error){
                console.log("Services ping error: " + error.message);
                callback(error);
        }
        else{
            console.log("Services ping success: " + JSON.stringify(data)); 
            callback(null, data);
        }
    });

};



exports.saveGroup = function(groupName, callback){

    var sendData = { id: listId, group_name: groupName, grouping_id: groupingId };

    api.call('lists', 'interest-group-add', sendData, function (error, data) {
        if (error){
                console.log("Services saveGroup error: groupName: " + groupName + ": " + error);
                callback(error);
        }
        else{
            console.log("Services saveGroup success: groupName: " + groupName + ": " + JSON.stringify(data)); 
            callback(null, data);
        }
    });


};


exports.checkEmail = function(email, callback){

    var sendData = { id: listId, emails: [{email: email}] };

    api.call('lists', 'member-info', sendData, function (error, data) {
        if (error){
                console.log("Services checkEmail error: email: " + email + ": " + error.message);
                
        }
        else{
            console.log("Services checkEmail success: email: " + email + ": " + JSON.stringify(data)); 
            callback(null,data);
        }
    });

};




exports.subscribe = function(email, groupName, callback){

    var sendData = {
        id: listId,
        email: {email: email},
        merge_vars: {group: groupName, groupings: [{id: groupingId, groups:[groupName]}]},
        double_optin: true 
      };

    api.call('lists', 'subscribe', sendData, function (error, data) {
        if (error){
                console.log("Services subscribe error: email: " + email + " groupName :" + groupName + ": " + error.message);
                callback(error);
        }
        else{
            console.log("Services subscribe success: email: " + email + " groupName: " + groupName +": " + JSON.stringify(data)); 
            callback(null, data);
        }
    });

};

