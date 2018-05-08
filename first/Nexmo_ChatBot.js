const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: "3cb5304b",
    apiSecret: "r1ZdsEy5cDIFPwJ9"
});



const from = '12013779027';
const to = '16787073386';
const text = 'Please Tell me how you feel';
// callback = 'http://580aa297.ngrok.io/'

nexmo.message.sendSms(from, to, text, function(error, response) {
    if(error) {
        throw error;
    } else if(response.messages[0].status != '0') {
        console.error(response);
        console.log(response.messages[0])
        console.log("Second Block___________________")
        throw 'Nexmo returned back a non-zero status';
    } else {
        console.log(response);
    }
});

