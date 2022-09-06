'use strict';

require( 'dotenv' ).config();

// console.log("hello from index.js")

const server = require( './server' );
server.start(process.env.PORT || 4000);