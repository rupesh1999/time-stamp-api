const moment = require('moment');

function convert(time) {
    let object;
    let timeString = time.toString();
    if(moment(time , "M-D-YYYY" , true).isValid()) {
        let unix =  moment(timeString, "M-D-YYYY").valueOf();
        let utc;
        object = {
            unix: unix,
            utc: moment(time).format("dddd , MMM Do YYYY ") + " 00:00:00 GMT"
        }
        return object;
    }else if(time>0) {
        let utc = moment.unix(time/1000).format("dddd , MMM Do YYYY hh:mm:ss ") + "GMT";
        let unix;

        object = {
            unix: parseInt(time),
            utc: utc
        }

        return object;
    }else {
        return {
            error: "Invalid Date"
        }
    }
}

module.exports = {
    convert
};