'use strict';

module.exports = () => {
    return (req, res, next) => {

        const num = req.query.num
        
        if(!isNaN(num)) {
            // console.log("in valid-num")
            next();
        } else {
            // console.log("error")
            next(`${num} is not a number`)
        }
    }
};
