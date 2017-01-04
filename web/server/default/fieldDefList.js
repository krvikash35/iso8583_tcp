var iso8583_1993_generic = {
    f0: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Message Type Indicator'
    },
    f1: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 'CONTVAR',
        'desc': 'Bitmap'
    },
    f2: {
        'type': 'N',
        'maxlen': 19,
        'lentype': 2,
        'desc': 'Primary Account Number'
    },
    f3: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Processing Code'
    },
    f4: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Amount, Txn'
    },
    f5: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Amount, Settlement'
    },
    f6: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Amount, Cardholder Billing'
    },
    f7: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Date and Time, Transmission MMDDhhmmss'
    },
    f8: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Amount, Cardholder Billing Fee'
    },
    f9: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Conversion Rate, Settlement'
    },
    f10: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Conversion Rate, Cardholder Billing'
    },
    f11: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Systems Trace Audit Number'
    },
    f12: {
        'type': 'N',
        'maxlen': 14,
        'lentype': 0,
        'desc': 'Time, Local Txn YYYYMMDDhhmmss'
    },
    f13: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date local transaction MMDD'
    },
    f14: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date expiration YYMM'
    },
    f15: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date settlement MMDD'
    },
    f16: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date conversion MMDD'
    },
    f17: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Date capture YYYYMMDD'
    },
    f18: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Merchant type'
    },
    f19: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Acquiring institution country code'
    },
    f20: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Primary account number (PAN) extended country code'
    },
    f21: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Forwarding institution country code'
    },
    f22: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Point of service entry mode'
    },
    f23: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Card sequence number'
    },
    f24: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Function code'
    },
    f25: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 0,
        'desc': 'Point of service condition code'
    },
    f26: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 0,
        'desc': 'Point of service capture code'
    },
    f27: {
        'type': 'N',
        'maxlen': 1,
        'lentype': 0,
        'desc': 'Authorisation identification response length'
    },
    f28: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Amount transaction fee'
    },
    f29: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Amount settlement fee'
    },
    f30: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Amount transaction processing fee'
    },
    f31: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Amount settlement processing fee'
    },
    f32: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Acquiring institution identification code'
    },
    f33: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Forwarding institution identification code'
    },
    f34: {
        'type': 'N',
        'maxlen': 32,
        'lentype': 2,
        'desc': 'Primary account number extended'
    },
    f35: {
        'type': 'Z',
        'maxlen': 37,
        'lentype': 2,
        'desc': 'Track 2 data'
    },
    f36: {
        'type': 'Z',
        'maxlen': 104,
        'lentype': 3,
        'desc': 'Track 3 data'
    },
    f37: {
        'type': 'AN',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Retrieval reference number'
    },
    f38: {
        'type': 'AN',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Approval Code'
    },
    f39: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Response code'
    },
    f40: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Service restriction code'
    },
    f41: {
        'type': 'ANS',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Card acceptor terminal identification'
    },
    f42: {
        'type': 'ANS',
        'maxlen': 15,
        'lentype': 0,
        'desc': 'Card acceptor identification code'
    },
    f43: {
        'type': 'ANS',
        'maxlen': 40,
        'lentype': 0,
        'desc': 'Card acceptor name/location'
    },
    f44: {
        'type': 'AN',
        'maxlen': 25,
        'lentype': 2,
        'desc': 'Additional response data'
    },
    f45: {
        'type': 'AN',
        'maxlen': 76,
        'lentype': 2,
        'desc': 'Track 1 data'
    },
    f46: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Additional data ISO'
    },
    f47: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Additional data national'
    },
    f48: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Additional data private'
    },
    f49: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Currency code transaction'
    },
    f50: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Currency code settlement'
    },
    f51: {
        'type': 'A',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Currency code card holder billing'
    },
    f52: {
        'type': 'B',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Personal identification number (PIN) data'
    },
    f53: {
        'type': 'N',
        'maxlen': 18,
        'lentype': 0,
        'desc': 'Security related control information'
    },
    f54: {
        'type': 'AN',
        'maxlen': 120,
        'lentype': 3,
        'desc': 'Additional amounts'
    },
    f55: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f56: {
        'type': 'ANS',
        'maxlen': 43,
        'lentype': 2,
        'desc': 'Original Data Elements'
    },
    f57: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for national  use'
    },
    f58: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for national  use'
    },
    f59: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for national  use'
    },
    f60: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for private use'
    },
    f61: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for private use'
    },
    f62: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for private use'
    },
    f63: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for private use'
    },
    f64: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Message authentication code (MAC) field'
    },
    f65: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Reserved for ISO use'
    },
    f66: {
        'type': 'N',
        'maxlen': 1,
        'lentype': 0,
        'desc': 'Settlement code'
    },
    f67: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 0,
        'desc': 'Extended payment code'
    },
    f68: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Receiving institution country code'
    },
    f69: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Settlement institution country code'
    },
    f70: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Network management information code'
    },
    f71: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Message number'
    },
    f72: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Data record'
    },
    f73: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Date action YYMMDD'
    },
    f74: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Credits number'
    },
    f75: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Credits reversal number'
    },
    f76: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Debits number'
    },
    f77: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Debits reversal number'
    },
    f78: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Transfer number'
    },
    f79: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Transfer reversal number'
    },
    f80: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Inquiries number'
    },
    f81: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Authorisations number'
    },
    f82: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Credits processing fee amount'
    },
    f83: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Credits transaction fee amount'
    },
    f84: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Debits processing fee amount'
    },
    f85: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Debits transaction fee amount'
    },
    f86: {
        'type': 'N',
        'maxlen': 15,
        'lentype': 0,
        'desc': 'Credits amount'
    },
    f87: {
        'type': 'N',
        'maxlen': 15,
        'lentype': 0,
        'desc': 'Credits reversal amount'
    },
    f88: {
        'type': 'N',
        'maxlen': 15,
        'lentype': 0,
        'desc': 'Debits amount'
    },
    f89: {
        'type': 'N',
        'maxlen': 15,
        'lentype': 0,
        'desc': 'Debits reversal amount'
    },
    f90: {
        'type': 'N',
        'maxlen': 42,
        'lentype': 0,
        'desc': 'Original data elements'
    },
    f91: {
        'type': 'AN',
        'maxlen': 1,
        'lentype': 0,
        'desc': 'File update code'
    },
    f92: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 0,
        'desc': 'File security code'
    },
    f93: {
        'type': 'N',
        'maxlen': 5,
        'lentype': 0,
        'desc': 'Response indicator'
    },
    f94: {
        'type': 'AN',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Service indicator'
    },
    f95: {
        'type': 'AN',
        'maxlen': 42,
        'lentype': 0,
        'desc': 'Replacement amounts'
    },
    f96: {
        'type': 'AN',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Message security code'
    },
    f97: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Amount net settlement'
    },
    f98: {
        'type': 'ANS',
        'maxlen': 25,
        'lentype': 0,
        'desc': 'Payee'
    },
    f99: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Settlement institution identification code'
    },
    f100: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Receiving institution identification code'
    },
    f101: {
        'type': 'ANS',
        'maxlen': 99,
        'lentype': 2,
        'desc': 'File name'
    },
    f102: {
        'type': 'ANS',
        'maxlen': 38,
        'lentype': 2,
        'desc': 'Account identification 1'
    },
    f103: {
        'type': 'ANS',
        'maxlen': 40,
        'lentype': 2,
        'desc': 'Account identification 2'
    },
    f104: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Transaction description'
    },
    f105: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f106: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f107: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f108: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f109: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f110: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f111: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f112: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f113: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f114: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f115: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f116: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f117: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f118: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f119: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f120: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f121: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f122: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f123: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 3,
        'desc': 'DCC Id'
    },
    f124: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Terminal Type'
    },
    f125: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved Field 1'
    },
    f126: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved Field 1'
    },
    f127: {
        'type': 'ANS',
        'maxlen': 999999,
        'lentype': 6,
        'desc': 'Reserved Field 1',
        'subfield': {
            'f1': {
                'encode': 'hex',
                'maxlen': 8,
                'lentype': 'CONTVAR',
                'desc': 'Bitmap'
            },
            'f2': {
                'type': 'ANS',
                'maxlen': 32,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
            'f3': {
                'type': 'ANS',
                'maxlen': 6,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f4': {
                'type': 'ANS',
                'maxlen': 22,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f5': {
                'type': 'ANS',
                'maxlen': 73,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f6': {
                'type': 'ANS',
                'maxlen': 2,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f7': {
                'type': 'ANS',
                'maxlen': 50,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f8': {
                'type': 'ANS',
                'maxlen': 999,
                'lentype': 3,
                'desc': 'Reserved Field 1'
            },
      'f9': {
                'type': 'ANS',
                'maxlen': 255,
                'lentype': 3,
                'desc': 'Reserved Field 1'
            },
      'f10': {
                'type': 'ANS',
                'maxlen': 3,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f11': {
                'type': 'ANS',
                'maxlen': 32,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f12': {
                'type': 'ANS',
                'maxlen': 25,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f13': {
                'type': 'ANS',
                'maxlen': 17,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f14': {
                'type': 'ANS',
                'maxlen': 8,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f15': {
                'type': 'ANS',
                'maxlen': 29,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f16': {
                'type': 'ANS',
                'maxlen': 1,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f17': {
                'type': 'ANS',
                'maxlen': 50,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f18': {
                'type': 'ANS',
                'maxlen': 50,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f19': {
                'type': 'ANS',
                'maxlen': 31,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f20': {
                'type': 'ANS',
                'maxlen': 8,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f21': {
                'type': 'ANS',
                'maxlen': 12,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f22': {
                'type': 'ANS',
                'maxlen': 99999,
                'lentype': 5,
                'desc': 'Reserved Field 1'
            },
      'f23': {
                'type': 'ANS',
                'maxlen': 253,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f24': {
                'type': 'ANS',
                'maxlen': 28,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f25': {
                'type': 'ANS',
                'maxlen': 8000,
                'lentype': 4,
                'desc': 'Reserved Field 1'
            },
      'f26': {
                'type': 'ANS',
                'maxlen': 12,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f27': {
                'type': 'ANS',
                'maxlen': 1,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f28': {
                'type': 'ANS',
                'maxlen': 4,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f29': {
                'type': 'ANS',
                'maxlen': 40,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f30': {
                'type': 'ANS',
                'maxlen': 1,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f31': {
                'type': 'ANS',
                'maxlen': 11,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f32': {
                'type': 'ANS',
                'maxlen': 33,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f33': {
                'type': 'ANS',
                'maxlen': 4,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f34': {
                'type': 'ANS',
                'maxlen': 2,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f35': {
                'type': 'ANS',
                'maxlen': 11,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f36': {
                'type': 'ANS',
                'maxlen': 25,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f37': {
                'type': 'ANS',
                'maxlen': 4,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
        }
    },
    f128: {
        'type': 'B',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Message authentication code (MAC) field'
    }
}



var iso8583_1987_generic = {
    f0: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Message Type Indicator'
    },
    f1: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 'CONTVAR',
        'desc': 'Bitmap'
    },
    f2: {
        'type': 'N',
        'maxlen': 19,
        'lentype': 2,
        'desc': 'Primary Account Number'
    },
    f3: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Processing Code'
    },
    f4: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Amount, Txn'
    },
    f5: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Amount, Settlement'
    },
    f6: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Amount, Cardholder Billing'
    },
    f7: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Date and Time, Transmission MMDDhhmmss'
    },
    f8: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Amount, Cardholder Billing Fee'
    },
    f9: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Conversion Rate, Settlement'
    },
    f10: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Conversion Rate, Cardholder Billing'
    },
    f11: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Systems Trace Audit Number'
    },
    f12: {
        'type': 'N',
        'maxlen': 14,
        'lentype': 0,
        'desc': 'Time, Local Txn YYYYMMDDhhmmss'
    },
    f13: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date local transaction MMDD'
    },
    f14: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date expiration YYMM'
    },
    f15: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date settlement MMDD'
    },
    f16: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date conversion MMDD'
    },
    f17: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Date capture YYYYMMDD'
    },
    f18: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Merchant type'
    },
    f19: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Acquiring institution country code'
    },
    f20: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Primary account number (PAN) extended country code'
    },
    f21: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Forwarding institution country code'
    },
    f22: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Point of service entry mode'
    },
    f23: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Card sequence number'
    },
    f24: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Function code'
    },
    f25: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 0,
        'desc': 'Point of service condition code'
    },
    f26: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 0,
        'desc': 'Point of service capture code'
    },
    f27: {
        'type': 'N',
        'maxlen': 1,
        'lentype': 0,
        'desc': 'Authorisation identification response length'
    },
    f28: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Amount transaction fee'
    },
    f29: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Amount settlement fee'
    },
    f30: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Amount transaction processing fee'
    },
    f31: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Amount settlement processing fee'
    },
    f32: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Acquiring institution identification code'
    },
    f33: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Forwarding institution identification code'
    },
    f34: {
        'type': 'N',
        'maxlen': 32,
        'lentype': 2,
        'desc': 'Primary account number extended'
    },
    f35: {
        'type': 'Z',
        'maxlen': 37,
        'lentype': 2,
        'desc': 'Track 2 data'
    },
    f36: {
        'type': 'Z',
        'maxlen': 104,
        'lentype': 3,
        'desc': 'Track 3 data'
    },
    f37: {
        'type': 'AN',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Retrieval reference number'
    },
    f38: {
        'type': 'AN',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Approval Code'
    },
    f39: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Response code'
    },
    f40: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Service restriction code'
    },
    f41: {
        'type': 'ANS',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Card acceptor terminal identification'
    },
    f42: {
        'type': 'ANS',
        'maxlen': 15,
        'lentype': 0,
        'desc': 'Card acceptor identification code'
    },
    f43: {
        'type': 'ANS',
        'maxlen': 40,
        'lentype': 0,
        'desc': 'Card acceptor name/location'
    },
    f44: {
        'type': 'AN',
        'maxlen': 25,
        'lentype': 2,
        'desc': 'Additional response data'
    },
    f45: {
        'type': 'AN',
        'maxlen': 76,
        'lentype': 2,
        'desc': 'Track 1 data'
    },
    f46: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Additional data ISO'
    },
    f47: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Additional data national'
    },
    f48: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Additional data private'
    },
    f49: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Currency code transaction'
    },
    f50: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Currency code settlement'
    },
    f51: {
        'type': 'A',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Currency code card holder billing'
    },
    f52: {
        'type': 'B',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Personal identification number (PIN) data'
    },
    f53: {
        'type': 'N',
        'maxlen': 18,
        'lentype': 0,
        'desc': 'Security related control information'
    },
    f54: {
        'type': 'AN',
        'maxlen': 120,
        'lentype': 3,
        'desc': 'Additional amounts'
    },
    f55: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f56: {
        'type': 'ANS',
        'maxlen': 43,
        'lentype': 2,
        'desc': 'Original Data Elements'
    },
    f57: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for national  use'
    },
    f58: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for national  use'
    },
    f59: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for national  use'
    },
    f60: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for private use'
    },
    f61: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for private use'
    },
    f62: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for private use'
    },
    f63: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for private use'
    },
    f64: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Message authentication code (MAC) field'
    },
    f65: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Reserved for ISO use'
    },
    f66: {
        'type': 'N',
        'maxlen': 1,
        'lentype': 0,
        'desc': 'Settlement code'
    },
    f67: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 0,
        'desc': 'Extended payment code'
    },
    f68: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Receiving institution country code'
    },
    f69: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Settlement institution country code'
    },
    f70: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Network management information code'
    },
    f71: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Message number'
    },
    f72: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Data record'
    },
    f73: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Date action YYMMDD'
    },
    f74: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Credits number'
    },
    f75: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Credits reversal number'
    },
    f76: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Debits number'
    },
    f77: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Debits reversal number'
    },
    f78: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Transfer number'
    },
    f79: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Transfer reversal number'
    },
    f80: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Inquiries number'
    },
    f81: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Authorisations number'
    },
    f82: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Credits processing fee amount'
    },
    f83: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Credits transaction fee amount'
    },
    f84: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Debits processing fee amount'
    },
    f85: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Debits transaction fee amount'
    },
    f86: {
        'type': 'N',
        'maxlen': 15,
        'lentype': 0,
        'desc': 'Credits amount'
    },
    f87: {
        'type': 'N',
        'maxlen': 15,
        'lentype': 0,
        'desc': 'Credits reversal amount'
    },
    f88: {
        'type': 'N',
        'maxlen': 15,
        'lentype': 0,
        'desc': 'Debits amount'
    },
    f89: {
        'type': 'N',
        'maxlen': 15,
        'lentype': 0,
        'desc': 'Debits reversal amount'
    },
    f90: {
        'type': 'N',
        'maxlen': 42,
        'lentype': 0,
        'desc': 'Original data elements'
    },
    f91: {
        'type': 'AN',
        'maxlen': 1,
        'lentype': 0,
        'desc': 'File update code'
    },
    f92: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 0,
        'desc': 'File security code'
    },
    f93: {
        'type': 'N',
        'maxlen': 5,
        'lentype': 0,
        'desc': 'Response indicator'
    },
    f94: {
        'type': 'AN',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Service indicator'
    },
    f95: {
        'type': 'AN',
        'maxlen': 42,
        'lentype': 0,
        'desc': 'Replacement amounts'
    },
    f96: {
        'type': 'AN',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Message security code'
    },
    f97: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Amount net settlement'
    },
    f98: {
        'type': 'ANS',
        'maxlen': 25,
        'lentype': 0,
        'desc': 'Payee'
    },
    f99: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Settlement institution identification code'
    },
    f100: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Receiving institution identification code'
    },
    f101: {
        'type': 'ANS',
        'maxlen': 99,
        'lentype': 2,
        'desc': 'File name'
    },
    f102: {
        'type': 'ANS',
        'maxlen': 38,
        'lentype': 2,
        'desc': 'Account identification 1'
    },
    f103: {
        'type': 'ANS',
        'maxlen': 40,
        'lentype': 2,
        'desc': 'Account identification 2'
    },
    f104: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Transaction description'
    },
    f105: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f106: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f107: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f108: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f109: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f110: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f111: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f112: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f113: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f114: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f115: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f116: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f117: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f118: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f119: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f120: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f121: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f122: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f123: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 3,
        'desc': 'DCC Id'
    },
    f124: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Terminal Type'
    },
    f125: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved Field 1'
    },
    f126: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved Field 1'
    },
    f127: {
        'type': 'ANS',
        'maxlen': 999999,
        'lentype': 6,
        'desc': 'Reserved Field 1',
        'subfield': {
            'f1': {
                'encode': 'hex',
                'maxlen': 8,
                'lentype': 'CONTVAR',
                'desc': 'Bitmap'
            },
            'f2': {
                'type': 'ANS',
                'maxlen': 32,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
            'f3': {
                'type': 'ANS',
                'maxlen': 6,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f4': {
                'type': 'ANS',
                'maxlen': 22,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f5': {
                'type': 'ANS',
                'maxlen': 73,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f6': {
                'type': 'ANS',
                'maxlen': 2,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f7': {
                'type': 'ANS',
                'maxlen': 50,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f8': {
                'type': 'ANS',
                'maxlen': 999,
                'lentype': 3,
                'desc': 'Reserved Field 1'
            },
      'f9': {
                'type': 'ANS',
                'maxlen': 255,
                'lentype': 3,
                'desc': 'Reserved Field 1'
            },
      'f10': {
                'type': 'ANS',
                'maxlen': 3,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f11': {
                'type': 'ANS',
                'maxlen': 32,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f12': {
                'type': 'ANS',
                'maxlen': 25,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f13': {
                'type': 'ANS',
                'maxlen': 17,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f14': {
                'type': 'ANS',
                'maxlen': 8,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f15': {
                'type': 'ANS',
                'maxlen': 29,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f16': {
                'type': 'ANS',
                'maxlen': 1,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f17': {
                'type': 'ANS',
                'maxlen': 50,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f18': {
                'type': 'ANS',
                'maxlen': 50,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f19': {
                'type': 'ANS',
                'maxlen': 31,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f20': {
                'type': 'ANS',
                'maxlen': 8,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f21': {
                'type': 'ANS',
                'maxlen': 12,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f22': {
                'type': 'ANS',
                'maxlen': 99999,
                'lentype': 5,
                'desc': 'Reserved Field 1'
            },
      'f23': {
                'type': 'ANS',
                'maxlen': 253,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f24': {
                'type': 'ANS',
                'maxlen': 28,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f25': {
                'type': 'ANS',
                'maxlen': 8000,
                'lentype': 4,
                'desc': 'Reserved Field 1'
            },
      'f26': {
                'type': 'ANS',
                'maxlen': 12,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f27': {
                'type': 'ANS',
                'maxlen': 1,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f28': {
                'type': 'ANS',
                'maxlen': 4,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f29': {
                'type': 'ANS',
                'maxlen': 40,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f30': {
                'type': 'ANS',
                'maxlen': 1,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f31': {
                'type': 'ANS',
                'maxlen': 11,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f32': {
                'type': 'ANS',
                'maxlen': 33,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f33': {
                'type': 'ANS',
                'maxlen': 4,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f34': {
                'type': 'ANS',
                'maxlen': 2,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
      'f35': {
                'type': 'ANS',
                'maxlen': 11,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f36': {
                'type': 'ANS',
                'maxlen': 25,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
      'f37': {
                'type': 'ANS',
                'maxlen': 4,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
        }
    },
    f128: {
        'type': 'B',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Message authentication code (MAC) field'
    }
}



var iso8583_1993_cmn = {
    f0: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 1,
        'desc': 'Message Type Indicator'
    },
    f1: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 'CONTVAR',
        'desc': 'Bitmap'
    },
    f2: {
        'type': 'N',
        'maxlen': 19,
        'lentype': 2,
        'desc': 'Primary Account Number'
    },
    f3: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Processing Code'
    },
    f4: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Amount, Txn'
    },
    f5: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Amount, Reconciliation'
    },
    f9: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Conversion Rate'
    },
    f11: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Systems Trace Audit Number'
    },
    f12: {
        'type': 'N',
        'maxlen': 14,
        'lentype': 0,
        'desc': 'Time, Local Txn YYYYMMDDhhmmss'
    },
    f14: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date expiration YYMM'
    },
    f15: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Date settlement MMDD'
    },
    f16: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Date conversion MMDD'
    },
    f17: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Date capture YYYYMMDD'
    },
    f24: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Function code'
    },
    f30: {
        'type': 'N',
        'maxlen': 32,
        'lentype': 0,
        'desc': 'Original Amounts'
    },
    f32: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Acquiring institution identification code'
    },
    f33: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Forwarding institution identification code'
    },
    f34: {
        'type': 'N',
        'maxlen': 32,
        'lentype': 2,
        'desc': 'Primary account number extended'
    },
    f37: {
        'type': 'AN',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Retrieval reference number'
    },
    f38: {
        'type': 'AN',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Approval Code'
    },
    f39: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Action Code'
    },
    f41: {
        'type': 'ANS',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Card acceptor terminal identification'
    },
    f42: {
        'type': 'ANS',
        'maxlen': 15,
        'lentype': 0,
        'desc': 'Card acceptor identification code'
    },
    f43: {
        'type': 'ANS',
        'maxlen': 99,
        'lentype': 2,
        'desc': 'Card acceptor name/location'
    },
    f46: {
        'type': 'AN',
        'maxlen': 300,
        'lentype': 3,
        'desc': 'Amounts,Fees'
    },
    f47: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Additional data national'
    },
    f48: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Additional data private'
    },
    f49: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Currency code transaction'
    },
    f50: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Currency, Reconciliation'
    },
    f53: {
        'type': 'N',
        'maxlen': 48,
        'lentype': 2,
        'desc': 'Security related control information'
    },
    f56: {
        'type': 'ANS',
        'maxlen': 43,
        'lentype': 2,
        'desc': 'Original Data Elements'
    },
    f59: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Transport Data'
    },
    f62: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Cheque Details'
    },
    f63: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Consumer Number'
    },
    f66: {
        'type': 'N',
        'maxlen': 300,
        'lentype': 3,
        'desc': 'Amounts, original fees'
    },
    f72: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Additional User Data'
    },
    f93: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Txn Destination Inst ID Code'
    },
    f94: {
        'type': 'AN',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Txn Originator Inst ID Code'
    },
    f102: {
        'type': 'ANS',
        'maxlen': 38,
        'lentype': 2,
        'desc': 'Account identification 1'
    },
    f103: {
        'type': 'ANS',
        'maxlen': 40,
        'lentype': 2,
        'desc': 'Account identification 1'
    },
    f123: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 3,
        'desc': 'DCC Id'
    },
    f124: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Terminal Type'
    },
    f125: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved Field 1'
    },
    f127: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved Field 3'
		}
}



var iso8583_1987_kdh = {
    f0: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Message Type Indicator'
    },
    f1: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 'CONTVAR',
        'desc': 'Bitmap'
    },
    f2: {
        'type': 'N',
        'maxlen': 19,
        'lentype': 2,
        'desc': 'Primary Account Number'
    },
    f3: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Processing Code'
    },
    f4: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Amount, Txn'
    },
    f5: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Amount, Settlement'
    },
    f6: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Amount, Cardholder Billing'
    },
    f7: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Date and Time, Transmission MMDDhhmmss'
    },
    f8: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Amount, Cardholder Billing Fee'
    },
    f9: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Conversion Rate, Settlement'
    },
    f10: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Conversion Rate, Cardholder Billing'
    },
    f11: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Systems Trace Audit Number'
    },
    f12: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Time, Local Txn YYYYMMDDhhmmss'
    },
    f13: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date local transaction MMDD'
    },
    f14: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date expiration YYMM'
    },
    f15: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date settlement MMDD'
    },
    f16: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date conversion MMDD'
    },
    f17: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date capture YYYYMMDD'
    },
    f18: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Merchant type'
    },
    f19: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Acquiring institution country code'
    },
    f20: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Primary account number (PAN) extended country code'
    },
    f21: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Forwarding institution country code'
    },
    f22: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Point of service entry mode'
    },
    f23: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Card sequence number'
    },
    f24: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Function code'
    },
    f25: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 0,
        'desc': 'Point of service condition code'
    },
    f26: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 0,
        'desc': 'Point of service capture code'
    },
    f27: {
        'type': 'N',
        'maxlen': 1,
        'lentype': 0,
        'desc': 'Authorisation identification response length'
    },
    f28: {
        'type': 'N',
        'maxlen': 9,
        'lentype': 0,
        'desc': 'Amount transaction fee'
    },
    f29: {
        'type': 'N',
        'maxlen': 9,
        'lentype': 0,
        'desc': 'Amount settlement fee'
    },
    f30: {
        'type': 'N',
        'maxlen': 9,
        'lentype': 0,
        'desc': 'Amount transaction processing fee'
    },
    f31: {
        'type': 'N',
        'maxlen': 9,
        'lentype': 0,
        'desc': 'Amount settlement processing fee'
    },
    f32: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Acquiring institution identification code'
    },
    f33: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Forwarding institution identification code'
    },
    f34: {
        'type': 'N',
        'maxlen': 28,
        'lentype': 2,
        'desc': 'Primary account number extended'
    },
    f35: {
        'type': 'Z',
        'maxlen': 37,
        'lentype': 2,
        'desc': 'Track 2 data'
    },
    f36: {
        'type': 'Z',
        'maxlen': 104,
        'lentype': 3,
        'desc': 'Track 3 data'
    },
    f37: {
        'type': 'AN',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Retrieval reference number'
    },
    f38: {
        'type': 'AN',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Approval Code'
    },
    f39: {
        'type': 'AN',
        'maxlen': 2,
        'lentype': 0,
        'desc': 'Response code'
    },
    f40: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Service restriction code'
    },
    f41: {
        'type': 'ANS',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Card acceptor terminal identification'
    },
    f42: {
        'type': 'ANS',
        'maxlen': 15,
        'lentype': 0,
        'desc': 'Card acceptor identification code'
    },
    f43: {
        'type': 'ANS',
        'maxlen': 40,
        'lentype': 0,
        'desc': 'Card acceptor name/location'
    },
    f44: {
        'type': 'AN',
        'maxlen': 25,
        'lentype': 2,
        'desc': 'Additional response data'
    },
    f45: {
        'type': 'AN',
        'maxlen': 76,
        'lentype': 2,
        'desc': 'Track 1 data'
    },
    f46: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Additional data ISO'
    },
    f47: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Additional data national'
    },
    f48: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Additional data private'
    },
    f49: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Currency code transaction'
    },
    f50: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Currency code settlement'
    },
    f51: {
        'type': 'A',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Currency code card holder billing'
    },
    f52: {
        'type': 'B',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Personal identification number (PIN) data'
    },
    f53: {
        'type': 'N',
        'maxlen': 48,
        'lentype': 0,
        'desc': 'Security related control information'
    },
    f54: {
        'type': 'AN',
        'maxlen': 120,
        'lentype': 3,
        'desc': 'Additional amounts'
    },
    f55: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f56: {
        'type': 'ANS',
        'maxlen': 4,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f57: {
        'type': 'ANS',
        'maxlen': 3,
        'lentype': 3,
        'desc': 'Reserved for national  use'
    },
    f58: {
        'type': 'ANS',
        'maxlen': 11,
        'lentype': 3,
        'desc': 'Reserved for national  use'
    },
    f59: {
        'type': 'ANS',
        'maxlen': 255,
        'lentype': 3,
        'desc': 'Reserved for national  use'
    },
    f60: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for private use'
    },
    f61: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for private use'
    },
    f62: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for private use'
    },
    f63: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for private use'
    },
    f64: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Message authentication code (MAC) field'
    },
    f65: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Reserved for ISO use'
    },
    f66: {
        'type': 'N',
        'maxlen': 1,
        'lentype': 0,
        'desc': 'Settlement code'
    },
    f67: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 0,
        'desc': 'Extended payment code'
    },
    f68: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Receiving institution country code'
    },
    f69: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Settlement institution country code'
    },
    f70: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Network management information code'
    },
    f71: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Message number'
    },
    f72: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Data record'
    },
    f73: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Date action YYMMDD'
    },
    f74: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Credits number'
    },
    f75: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Credits reversal number'
    },
    f76: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Debits number'
    },
    f77: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Debits reversal number'
    },
    f78: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Transfer number'
    },
    f79: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Transfer reversal number'
    },
    f80: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Inquiries number'
    },
    f81: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Authorisations number'
    },
    f82: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Credits processing fee amount'
    },
    f83: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Credits transaction fee amount'
    },
    f84: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Debits processing fee amount'
    },
    f85: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Debits transaction fee amount'
    },
    f86: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Credits amount'
    },
    f87: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Credits reversal amount'
    },
    f88: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Debits amount'
    },
    f89: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Debits reversal amount'
    },
    f90: {
        'type': 'N',
        'maxlen': 42,
        'lentype': 0,
        'desc': 'Original data elements'
    },
    f91: {
        'type': 'AN',
        'maxlen': 1,
        'lentype': 0,
        'desc': 'File update code'
    },
    f92: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 0,
        'desc': 'File security code'
    },
    f93: {
        'type': 'N',
        'maxlen': 5,
        'lentype': 0,
        'desc': 'Response indicator'
    },
    f94: {
        'type': 'AN',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Service indicator'
    },
    f95: {
        'type': 'AN',
        'maxlen': 42,
        'lentype': 0,
        'desc': 'Replacement amounts'
    },
    f96: {
        'type': 'AN',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Message security code'
    },
    f97: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Amount net settlement'
    },
    f98: {
        'type': 'ANS',
        'maxlen': 25,
        'lentype': 0,
        'desc': 'Payee'
    },
    f99: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Settlement institution identification code'
    },
    f100: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Receiving institution identification code'
    },
    f101: {
        'type': 'ANS',
        'maxlen': 17,
        'lentype': 2,
        'desc': 'File name'
    },
    f102: {
        'type': 'ANS',
        'maxlen': 28,
        'lentype': 2,
        'desc': 'Account identification 1'
    },
    f103: {
        'type': 'ANS',
        'maxlen': 28,
        'lentype': 2,
        'desc': 'Account identification 2'
    },
    f104: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Transaction description'
    },
    f105: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f106: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f107: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f108: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f109: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f110: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f111: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f112: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f113: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f114: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f115: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f116: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f117: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f118: {
        'type': 'ANS',
        'maxlen': 10,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f119: {
        'type': 'ANS',
        'maxlen': 10,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f120: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f121: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f122: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f123: {
        'type': 'AN',
        'maxlen': 15,
        'lentype': 3,
        'desc': 'DCC Id'
    },
    f124: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Terminal Type'
    },
    f125: {
        'type': 'ANS',
        'maxlen': 40,
        'lentype': 3,
        'desc': 'Reserved Field 1'
    },
    f126: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved Field 1'
    },
    f127: {
        'type': 'ANS',
        'maxlen': 999999,
        'lentype': 6,
        'desc': 'Reserved Field 1',
        'subfield': {
            'f1': {
                'encode': 'hex',
                'maxlen': 8,
                'lentype': 'CONTVAR',
                'desc': 'Bitmap'
            },
            'f2': {
                'type': 'ANS',
                'maxlen': 32,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
            'f3': {
                'type': 'ANS',
                'maxlen': 48,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
			'f4': {
                'type': 'ANS',
                'maxlen': 22,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
			'f5': {
                'type': 'ANS',
                'maxlen': 73,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
			'f6': {
                'type': 'ANS',
                'maxlen': 2,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
			'f7': {
                'type': 'ANS',
                'maxlen': 50,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
			'f8': {
                'type': 'ANS',
                'maxlen': 999,
                'lentype': 3,
                'desc': 'Reserved Field 1'
            },
			'f9': {
                'type': 'ANS',
                'maxlen': 255,
                'lentype': 3,
                'desc': 'Reserved Field 1'
            },
			'f10': {
                'type': 'ANS',
                'maxlen': 3,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
			'f11': {
                'type': 'ANS',
                'maxlen': 32,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
			'f12': {
                'type': 'ANS',
                'maxlen': 25,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
			'f13': {
                'type': 'ANS',
                'maxlen': 17,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
			'f14': {
                'type': 'ANS',
                'maxlen': 8,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
			'f15': {
                'type': 'ANS',
                'maxlen': 29,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
			'f16': {
                'type': 'ANS',
                'maxlen': 1,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
			'f17': {
                'type': 'ANS',
                'maxlen': 50,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
			'f18': {
                'type': 'ANS',
                'maxlen': 50,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
			'f19': {
                'type': 'ANS',
                'maxlen': 31,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
			'f20': {
                'type': 'ANS',
                'maxlen': 8,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
			'f21': {
                'type': 'ANS',
                'maxlen': 12,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
			'f22': {
                'type': 'ANS',
                'maxlen': 99999,
                'lentype': 5,
                'desc': 'Reserved Field 1'
            },
			'f23': {
                'type': 'ANS',
                'maxlen': 253,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
			'f24': {
                'type': 'ANS',
                'maxlen': 28,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
			'f25': {
                'type': 'ANS',
                'maxlen': 8000,
                'lentype': 4,
                'desc': 'Reserved Field 1'
            },
			'f26': {
                'type': 'ANS',
                'maxlen': 12,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
			'f27': {
                'type': 'ANS',
                'maxlen': 1,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
			'f28': {
                'type': 'ANS',
                'maxlen': 4,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
			'f29': {
                'type': 'ANS',
                'maxlen': 40,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
			'f30': {
                'type': 'ANS',
                'maxlen': 1,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
			'f31': {
                'type': 'ANS',
                'maxlen': 11,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
			'f32': {
                'type': 'ANS',
                'maxlen': 33,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
			'f33': {
                'type': 'ANS',
                'maxlen': 4,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
			'f34': {
                'type': 'ANS',
                'maxlen': 2,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
			'f35': {
                'type': 'ANS',
                'maxlen': 11,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
			'f36': {
                'type': 'ANS',
                'maxlen': 25,
                'lentype': 2,
                'desc': 'Reserved Field 1'
            },
			'f37': {
                'type': 'ANS',
                'maxlen': 4,
                'lentype': 0,
                'desc': 'Reserved Field 1'
            },
        }
    },
    f128: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Message authentication code (MAC) field'
    }
}


var iso8583_1987_adg = {
    f0: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Message Type Indicator'
    },
    f1: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 'CONTVAR',
        'desc': 'Bitmap'
    },
    f2: {
        'type': 'N',
        'maxlen': 19,
        'lentype': 2,
        'desc': 'Primary Account Number'
    },
    f3: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Processing Code'
    },
    f4: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Amount, Txn'
    },
    f5: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Amount, Settlement'
    },
    f6: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Amount, Cardholder Billing'
    },
    f7: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Date and Time, Transmission MMDDhhmmss'
    },
    f8: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Amount, Cardholder Billing Fee'
    },
    f9: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Conversion Rate, Settlement'
    },
    f10: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Conversion Rate, Cardholder Billing'
    },
    f11: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Systems Trace Audit Number'
    },
    f12: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Time, Local Txn YYYYMMDDhhmmss'
    },
    f13: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date local transaction MMDD'
    },
    f14: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date expiration YYMM'
    },
    f15: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date settlement MMDD'
    },
    f16: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date conversion MMDD'
    },
    f17: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Date capture YYYYMMDD'
    },
    f18: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Merchant type'
    },
    f19: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Acquiring institution country code'
    },
    f20: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Primary account number (PAN) extended country code'
    },
    f21: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Forwarding institution country code'
    },
    f22: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Point of service entry mode'
    },
    f23: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Card sequence number'
    },
    f24: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Function code'
    },
    f25: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 0,
        'desc': 'Point of service condition code'
    },
    f26: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 0,
        'desc': 'Point of service capture code'
    },
    f27: {
        'type': 'N',
        'maxlen': 1,
        'lentype': 0,
        'desc': 'Authorisation identification response length'
    },
    f28: {
        'type': 'N',
        'maxlen': 9,
        'lentype': 0,
        'desc': 'Amount transaction fee'
    },
    f29: {
        'type': 'N',
        'maxlen': 9,
        'lentype': 0,
        'desc': 'Amount settlement fee'
    },
    f30: {
        'type': 'N',
        'maxlen': 9,
        'lentype': 0,
        'desc': 'Amount transaction processing fee'
    },
    f31: {
        'type': 'N',
        'maxlen': 9,
        'lentype': 0,
        'desc': 'Amount settlement processing fee'
    },
    f32: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Acquiring institution identification code'
    },
    f33: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Forwarding institution identification code'
    },
    f34: {
        'type': 'N',
        'maxlen': 28,
        'lentype': 2,
        'desc': 'Primary account number extended'
    },
    f35: {
        'type': 'Z',
        'maxlen': 37,
        'lentype': 2,
        'desc': 'Track 2 data'
    },
    f36: {
        'type': 'Z',
        'maxlen': 104,
        'lentype': 3,
        'desc': 'Track 3 data'
    },
    f37: {
        'type': 'AN',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Retrieval reference number'
    },
    f38: {
        'type': 'AN',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Approval Code'
    },
    f39: {
        'type': 'AN',
        'maxlen': 2,
        'lentype': 0,
        'desc': 'Response code'
    },
    f40: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Service restriction code'
    },
    f41: {
        'type': 'ANS',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Card acceptor terminal identification'
    },
    f42: {
        'type': 'ANS',
        'maxlen': 15,
        'lentype': 0,
        'desc': 'Card acceptor identification code'
    },
    f43: {
        'type': 'ANS',
        'maxlen': 40,
        'lentype': 0,
        'desc': 'Card acceptor name/location'
    },
    f44: {
        'type': 'AN',
        'maxlen': 25,
        'lentype': 2,
        'desc': 'Additional response data'
    },
    f45: {
        'type': 'AN',
        'maxlen': 76,
        'lentype': 2,
        'desc': 'Track 1 data'
    },
    f46: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Additional data ISO'
    },
    f47: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Additional data national'
    },
    f48: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Additional data private'
    },
    f49: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Currency code transaction'
    },
    f50: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Currency code settlement'
    },
    f51: {
        'type': 'A',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Currency code card holder billing'
    },
    f52: {
        'type': 'B',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Personal identification number (PIN) data'
    },
    f53: {
        'type': 'N',
        'maxlen': 48,
        'lentype': 0,
        'desc': 'Security related control information'
    },
    f54: {
        'type': 'AN',
        'maxlen': 120,
        'lentype': 3,
        'desc': 'Additional amounts'
    },
    f55: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f56: {
        'type': 'ANS',
        'maxlen': 4,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f57: {
        'type': 'ANS',
        'maxlen': 3,
        'lentype': 3,
        'desc': 'Reserved for national  use'
    },
    f58: {
        'type': 'ANS',
        'maxlen': 11,
        'lentype': 3,
        'desc': 'Reserved for national  use'
    },
    f59: {
        'type': 'ANS',
        'maxlen': 255,
        'lentype': 3,
        'desc': 'Reserved for national  use'
    },
    f60: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for private use'
    },
    f61: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for private use'
    },
    f62: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for private use'
    },
    f63: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for private use'
    },
    f64: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Message authentication code (MAC) field'
    },
    f65: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Reserved for ISO use'
    },
    f66: {
        'type': 'N',
        'maxlen': 1,
        'lentype': 0,
        'desc': 'Settlement code'
    },
    f67: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 0,
        'desc': 'Extended payment code'
    },
    f68: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Receiving institution country code'
    },
    f69: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Settlement institution country code'
    },
    f70: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Network management information code'
    },
    f71: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Message number'
    },
    f72: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Data record'
    },
    f73: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 0,
        'desc': 'Date action YYMMDD'
    },
    f74: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Credits number'
    },
    f75: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Credits reversal number'
    },
    f76: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Debits number'
    },
    f77: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Debits reversal number'
    },
    f78: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Transfer number'
    },
    f79: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Transfer reversal number'
    },
    f80: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Inquiries number'
    },
    f81: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 0,
        'desc': 'Authorisations number'
    },
    f82: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Credits processing fee amount'
    },
    f83: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Credits transaction fee amount'
    },
    f84: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Debits processing fee amount'
    },
    f85: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 0,
        'desc': 'Debits transaction fee amount'
    },
    f86: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Credits amount'
    },
    f87: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Credits reversal amount'
    },
    f88: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Debits amount'
    },
    f89: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Debits reversal amount'
    },
    f90: {
        'type': 'N',
        'maxlen': 42,
        'lentype': 0,
        'desc': 'Original data elements'
    },
    f91: {
        'type': 'AN',
        'maxlen': 1,
        'lentype': 0,
        'desc': 'File update code'
    },
    f92: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 0,
        'desc': 'File security code'
    },
    f93: {
        'type': 'N',
        'maxlen': 5,
        'lentype': 0,
        'desc': 'Response indicator'
    },
    f94: {
        'type': 'AN',
        'maxlen': 4,
        'lentype': 0,
        'desc': 'Service indicator'
    },
    f95: {
        'type': 'AN',
        'maxlen': 42,
        'lentype': 0,
        'desc': 'Replacement amounts'
    },
    f96: {
        'type': 'AN',
        'maxlen': 8,
        'lentype': 0,
        'desc': 'Message security code'
    },
    f97: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Amount net settlement'
    },
    f98: {
        'type': 'ANS',
        'maxlen': 25,
        'lentype': 0,
        'desc': 'Payee'
    },
    f99: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Settlement institution identification code'
    },
    f100: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 2,
        'desc': 'Receiving institution identification code'
    },
    f101: {
        'type': 'ANS',
        'maxlen': 17,
        'lentype': 2,
        'desc': 'File name'
    },
    f102: {
        'type': 'ANS',
        'maxlen': 28,
        'lentype': 2,
        'desc': 'Account identification 1'
    },
    f103: {
        'type': 'ANS',
        'maxlen': 28,
        'lentype': 2,
        'desc': 'Account identification 2'
    },
    f104: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Transaction description'
    },
    f105: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f106: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f107: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f108: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f109: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f110: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f111: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f112: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f113: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f114: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f115: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f116: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f117: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f118: {
        'type': 'ANS',
        'maxlen': 10,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f119: {
        'type': 'ANS',
        'maxlen': 10,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f120: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f121: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f122: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved for ISO use'
    },
    f123: {
        'type': 'AN',
        'maxlen': 15,
        'lentype': 3,
        'desc': 'DCC Id'
    },
    f124: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 0,
        'desc': 'Terminal Type'
    },
    f125: {
        'type': 'ANS',
        'maxlen': 40,
        'lentype': 3,
        'desc': 'Reserved Field 1'
    },
    f126: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 3,
        'desc': 'Reserved Field 1'
    },
    f127: {
        'type': 'ANS',
        'maxlen': 999999,
        'lentype': 6,
        'desc': 'Reserved Field 1'
    },
    f128: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 0,
        'desc': 'Message authentication code (MAC) field'
    }
}


var field_def_list = {
    iso8583_1993_generic: iso8583_1993_generic,
    iso8583_1987_generic: iso8583_1987_generic,
    iso8583_1993_cmn:  iso8583_1993_cmn,
    iso8583_1987_kdh:  iso8583_1987_kdh,
    iso8583_1987_adg:  iso8583_1987_adg
}

module.exports = field_def_list;
