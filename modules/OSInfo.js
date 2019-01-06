var os = require('os');
var timeCount = require('./timeCount');
var colors = require('colors');
function getOSInfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.blue, type);
    console.log('Release:'.yellow, release);
    console.log('CPU model:'.bgRed, cpu);
    console.log('Uptime: ~'.bgGreen, timeCount.print(uptime));
    console.log('User name:'.rainbow, userInfo.username);
    console.log('Home dir:'.zebra, userInfo.homedir);
}
exports.print = getOSInfo;