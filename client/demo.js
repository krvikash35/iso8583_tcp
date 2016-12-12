var conf = require('./lib/configlib');
// console.log( conf.read_config('ser_host') );
// conf.write_config('ser_fld_def', 'iso8583_1993_cmn')
// console.log( conf.read_config('ser_fld_def').f1 );


console.log( conf.read_config('cli_fldn_max',2) );
conf.write_config('cli_fldn_max', 16, 2)
console.log( conf.read_config('cli_fldn_max',2) );
console.log( conf.read_config('ser_fldn_max',2) );
