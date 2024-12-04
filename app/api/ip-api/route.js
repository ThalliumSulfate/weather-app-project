export async function Get() {
    let ipapi = require('ipapi.co')

    let callback = function(res) {
        console.log(res);
    }

    return ipapi.location(callback);
}
