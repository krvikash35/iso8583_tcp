var fld_def_list = require('./field_def_list');
var usr_data = require('../data/data')

var prop = {
    enable_debug: false,
    usr_data: usr_data,
    server: {
        host: '10.66.118.36', //localhost:6969, 10.66.118.36:16702(agd),   10.66.118.51:7021(chlk) 10.66.118.27:35502(vasuda)
        port: "16702", //6969 16902
        field_def: fld_def_list.iso8583_1987_kdh,
        encode: {
          header_encode: 'hex', //  hex, ascii
          mti_encode: 'ascii', //  hex, ascii
          bitmap_encode: 'hex', //  hex, ascii
          field_encode: 'ascii' //  ascii
        },
        header: {
            include_header: true,
            include_header_for_msglen_cal: true,
            header_len: 2,
        }
    },
    client: {
        field_def: fld_def_list.iso8583_1993_cmn,
        encode: {
            header_encode: 'hex', //  hex, ascii
            mti_encode: 'ascii', //  hex, ascii
            bitmap_encode: 'hex', //  hex, ascii
            field_encode: 'ascii' //  ascii
        },
        header: {
            include_header: true,
            include_header_for_msglen_cal: true,
            header_len: 2,
        }
    }
}

module.exports = prop;
