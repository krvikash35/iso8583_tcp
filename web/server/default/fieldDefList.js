var iso8583_1993_generic = {
    f0: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
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
        'lentype': 'LLVAR',
        'desc': 'Primary Account Number'
    },
    f3: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Processing Code'
    },
    f4: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Amount, Txn'
    },
    f5: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Amount, Settlement'
    },
    f6: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Amount, Cardholder Billing'
    },
    f7: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Date and Time, Transmission MMDDhhmmss'
    },
    f8: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Amount, Cardholder Billing Fee'
    },
    f9: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Conversion Rate, Settlement'
    },
    f10: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Conversion Rate, Cardholder Billing'
    },
    f11: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Systems Trace Audit Number'
    },
    f12: {
        'type': 'N',
        'maxlen': 14,
        'lentype': 'FIXED',
        'desc': 'Time, Local Txn YYYYMMDDhhmmss'
    },
    f13: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date local transaction MMDD'
    },
    f14: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date expiration YYMM'
    },
    f15: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date settlement MMDD'
    },
    f16: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date conversion MMDD'
    },
    f17: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Date capture YYYYMMDD'
    },
    f18: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Merchant type'
    },
    f19: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Acquiring institution country code'
    },
    f20: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Primary account number (PAN) extended country code'
    },
    f21: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Forwarding institution country code'
    },
    f22: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Point of service entry mode'
    },
    f23: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Card sequence number'
    },
    f24: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Function code'
    },
    f25: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 'FIXED',
        'desc': 'Point of service condition code'
    },
    f26: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 'FIXED',
        'desc': 'Point of service capture code'
    },
    f27: {
        'type': 'N',
        'maxlen': 1,
        'lentype': 'FIXED',
        'desc': 'Authorisation identification response length'
    },
    f28: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Amount transaction fee'
    },
    f29: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Amount settlement fee'
    },
    f30: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Amount transaction processing fee'
    },
    f31: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Amount settlement processing fee'
    },
    f32: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Acquiring institution identification code'
    },
    f33: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Forwarding institution identification code'
    },
    f34: {
        'type': 'N',
        'maxlen': 32,
        'lentype': 'LLVAR',
        'desc': 'Primary account number extended'
    },
    f35: {
        'type': 'Z',
        'maxlen': 37,
        'lentype': 'LLVAR',
        'desc': 'Track 2 data'
    },
    f36: {
        'type': 'Z',
        'maxlen': 104,
        'lentype': 'LLLVAR',
        'desc': 'Track 3 data'
    },
    f37: {
        'type': 'AN',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Retrieval reference number'
    },
    f38: {
        'type': 'AN',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Approval Code'
    },
    f39: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Response code'
    },
    f40: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Service restriction code'
    },
    f41: {
        'type': 'ANS',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Card acceptor terminal identification'
    },
    f42: {
        'type': 'ANS',
        'maxlen': 15,
        'lentype': 'FIXED',
        'desc': 'Card acceptor identification code'
    },
    f43: {
        'type': 'ANS',
        'maxlen': 40,
        'lentype': 'FIXED',
        'desc': 'Card acceptor name/location'
    },
    f44: {
        'type': 'AN',
        'maxlen': 25,
        'lentype': 'LLVAR',
        'desc': 'Additional response data'
    },
    f45: {
        'type': 'AN',
        'maxlen': 76,
        'lentype': 'LLVAR',
        'desc': 'Track 1 data'
    },
    f46: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Additional data ISO'
    },
    f47: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Additional data national'
    },
    f48: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Additional data private'
    },
    f49: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Currency code transaction'
    },
    f50: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Currency code settlement'
    },
    f51: {
        'type': 'A',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Currency code card holder billing'
    },
    f52: {
        'type': 'B',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Personal identification number (PIN) data'
    },
    f53: {
        'type': 'N',
        'maxlen': 18,
        'lentype': 'FIXED',
        'desc': 'Security related control information'
    },
    f54: {
        'type': 'AN',
        'maxlen': 120,
        'lentype': 'LLLVAR',
        'desc': 'Additional amounts'
    },
    f55: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f56: {
        'type': 'ANS',
        'maxlen': 43,
        'lentype': 'LLVAR',
        'desc': 'Original Data Elements'
    },
    f57: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for national  use'
    },
    f58: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for national  use'
    },
    f59: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for national  use'
    },
    f60: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for private use'
    },
    f61: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for private use'
    },
    f62: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for private use'
    },
    f63: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for private use'
    },
    f64: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Message authentication code (MAC) field'
    },
    f65: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Reserved for ISO use'
    },
    f66: {
        'type': 'N',
        'maxlen': 1,
        'lentype': 'FIXED',
        'desc': 'Settlement code'
    },
    f67: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 'FIXED',
        'desc': 'Extended payment code'
    },
    f68: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Receiving institution country code'
    },
    f69: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Settlement institution country code'
    },
    f70: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Network management information code'
    },
    f71: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Message number'
    },
    f72: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Data record'
    },
    f73: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Date action YYMMDD'
    },
    f74: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Credits number'
    },
    f75: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Credits reversal number'
    },
    f76: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Debits number'
    },
    f77: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Debits reversal number'
    },
    f78: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Transfer number'
    },
    f79: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Transfer reversal number'
    },
    f80: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Inquiries number'
    },
    f81: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Authorisations number'
    },
    f82: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Credits processing fee amount'
    },
    f83: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Credits transaction fee amount'
    },
    f84: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Debits processing fee amount'
    },
    f85: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Debits transaction fee amount'
    },
    f86: {
        'type': 'N',
        'maxlen': 15,
        'lentype': 'FIXED',
        'desc': 'Credits amount'
    },
    f87: {
        'type': 'N',
        'maxlen': 15,
        'lentype': 'FIXED',
        'desc': 'Credits reversal amount'
    },
    f88: {
        'type': 'N',
        'maxlen': 15,
        'lentype': 'FIXED',
        'desc': 'Debits amount'
    },
    f89: {
        'type': 'N',
        'maxlen': 15,
        'lentype': 'FIXED',
        'desc': 'Debits reversal amount'
    },
    f90: {
        'type': 'N',
        'maxlen': 42,
        'lentype': 'FIXED',
        'desc': 'Original data elements'
    },
    f91: {
        'type': 'AN',
        'maxlen': 1,
        'lentype': 'FIXED',
        'desc': 'File update code'
    },
    f92: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 'FIXED',
        'desc': 'File security code'
    },
    f93: {
        'type': 'N',
        'maxlen': 5,
        'lentype': 'FIXED',
        'desc': 'Response indicator'
    },
    f94: {
        'type': 'AN',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Service indicator'
    },
    f95: {
        'type': 'AN',
        'maxlen': 42,
        'lentype': 'FIXED',
        'desc': 'Replacement amounts'
    },
    f96: {
        'type': 'AN',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Message security code'
    },
    f97: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Amount net settlement'
    },
    f98: {
        'type': 'ANS',
        'maxlen': 25,
        'lentype': 'FIXED',
        'desc': 'Payee'
    },
    f99: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Settlement institution identification code'
    },
    f100: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Receiving institution identification code'
    },
    f101: {
        'type': 'ANS',
        'maxlen': 99,
        'lentype': 'LLVAR',
        'desc': 'File name'
    },
    f102: {
        'type': 'ANS',
        'maxlen': 38,
        'lentype': 'LLVAR',
        'desc': 'Account identification 1'
    },
    f103: {
        'type': 'ANS',
        'maxlen': 40,
        'lentype': 'LLVAR',
        'desc': 'Account identification 2'
    },
    f104: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Transaction description'
    },
    f105: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f106: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f107: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f108: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f109: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f110: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f111: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f112: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f113: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f114: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f115: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f116: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f117: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f118: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f119: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f120: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f121: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f122: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f123: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'LLLVAR',
        'desc': 'DCC Id'
    },
    f124: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Terminal Type'
    },
    f125: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved Field 1'
    },
    f126: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved Field 1'
    },
    f127: {
        'type': 'ANS',
        'maxlen': 999999,
        'lentype': 'LLLLLLVAR',
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
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
            'f3': {
                'type': 'ANS',
                'maxlen': 6,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f4': {
                'type': 'ANS',
                'maxlen': 22,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f5': {
                'type': 'ANS',
                'maxlen': 73,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f6': {
                'type': 'ANS',
                'maxlen': 2,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f7': {
                'type': 'ANS',
                'maxlen': 50,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f8': {
                'type': 'ANS',
                'maxlen': 999,
                'lentype': 'LLLVAR',
                'desc': 'Reserved Field 1'
            },
      'f9': {
                'type': 'ANS',
                'maxlen': 255,
                'lentype': 'LLLVAR',
                'desc': 'Reserved Field 1'
            },
      'f10': {
                'type': 'ANS',
                'maxlen': 3,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f11': {
                'type': 'ANS',
                'maxlen': 32,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f12': {
                'type': 'ANS',
                'maxlen': 25,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f13': {
                'type': 'ANS',
                'maxlen': 17,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f14': {
                'type': 'ANS',
                'maxlen': 8,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f15': {
                'type': 'ANS',
                'maxlen': 29,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f16': {
                'type': 'ANS',
                'maxlen': 1,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f17': {
                'type': 'ANS',
                'maxlen': 50,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f18': {
                'type': 'ANS',
                'maxlen': 50,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f19': {
                'type': 'ANS',
                'maxlen': 31,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f20': {
                'type': 'ANS',
                'maxlen': 8,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f21': {
                'type': 'ANS',
                'maxlen': 12,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f22': {
                'type': 'ANS',
                'maxlen': 99999,
                'lentype': 'LLLLLVAR',
                'desc': 'Reserved Field 1'
            },
      'f23': {
                'type': 'ANS',
                'maxlen': 253,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f24': {
                'type': 'ANS',
                'maxlen': 28,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f25': {
                'type': 'ANS',
                'maxlen': 8000,
                'lentype': 'LLLLVAR',
                'desc': 'Reserved Field 1'
            },
      'f26': {
                'type': 'ANS',
                'maxlen': 12,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f27': {
                'type': 'ANS',
                'maxlen': 1,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f28': {
                'type': 'ANS',
                'maxlen': 4,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f29': {
                'type': 'ANS',
                'maxlen': 40,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f30': {
                'type': 'ANS',
                'maxlen': 1,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f31': {
                'type': 'ANS',
                'maxlen': 11,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f32': {
                'type': 'ANS',
                'maxlen': 33,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f33': {
                'type': 'ANS',
                'maxlen': 4,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f34': {
                'type': 'ANS',
                'maxlen': 2,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f35': {
                'type': 'ANS',
                'maxlen': 11,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f36': {
                'type': 'ANS',
                'maxlen': 25,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f37': {
                'type': 'ANS',
                'maxlen': 4,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
        }
    },
    f128: {
        'type': 'B',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Message authentication code (MAC) field'
    }
}



var iso8583_1987_generic = {
    f0: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
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
        'lentype': 'LLVAR',
        'desc': 'Primary Account Number'
    },
    f3: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Processing Code'
    },
    f4: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Amount, Txn'
    },
    f5: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Amount, Settlement'
    },
    f6: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Amount, Cardholder Billing'
    },
    f7: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Date and Time, Transmission MMDDhhmmss'
    },
    f8: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Amount, Cardholder Billing Fee'
    },
    f9: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Conversion Rate, Settlement'
    },
    f10: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Conversion Rate, Cardholder Billing'
    },
    f11: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Systems Trace Audit Number'
    },
    f12: {
        'type': 'N',
        'maxlen': 14,
        'lentype': 'FIXED',
        'desc': 'Time, Local Txn YYYYMMDDhhmmss'
    },
    f13: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date local transaction MMDD'
    },
    f14: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date expiration YYMM'
    },
    f15: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date settlement MMDD'
    },
    f16: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date conversion MMDD'
    },
    f17: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Date capture YYYYMMDD'
    },
    f18: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Merchant type'
    },
    f19: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Acquiring institution country code'
    },
    f20: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Primary account number (PAN) extended country code'
    },
    f21: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Forwarding institution country code'
    },
    f22: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Point of service entry mode'
    },
    f23: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Card sequence number'
    },
    f24: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Function code'
    },
    f25: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 'FIXED',
        'desc': 'Point of service condition code'
    },
    f26: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 'FIXED',
        'desc': 'Point of service capture code'
    },
    f27: {
        'type': 'N',
        'maxlen': 1,
        'lentype': 'FIXED',
        'desc': 'Authorisation identification response length'
    },
    f28: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Amount transaction fee'
    },
    f29: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Amount settlement fee'
    },
    f30: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Amount transaction processing fee'
    },
    f31: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Amount settlement processing fee'
    },
    f32: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Acquiring institution identification code'
    },
    f33: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Forwarding institution identification code'
    },
    f34: {
        'type': 'N',
        'maxlen': 32,
        'lentype': 'LLVAR',
        'desc': 'Primary account number extended'
    },
    f35: {
        'type': 'Z',
        'maxlen': 37,
        'lentype': 'LLVAR',
        'desc': 'Track 2 data'
    },
    f36: {
        'type': 'Z',
        'maxlen': 104,
        'lentype': 'LLLVAR',
        'desc': 'Track 3 data'
    },
    f37: {
        'type': 'AN',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Retrieval reference number'
    },
    f38: {
        'type': 'AN',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Approval Code'
    },
    f39: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Response code'
    },
    f40: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Service restriction code'
    },
    f41: {
        'type': 'ANS',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Card acceptor terminal identification'
    },
    f42: {
        'type': 'ANS',
        'maxlen': 15,
        'lentype': 'FIXED',
        'desc': 'Card acceptor identification code'
    },
    f43: {
        'type': 'ANS',
        'maxlen': 40,
        'lentype': 'FIXED',
        'desc': 'Card acceptor name/location'
    },
    f44: {
        'type': 'AN',
        'maxlen': 25,
        'lentype': 'LLVAR',
        'desc': 'Additional response data'
    },
    f45: {
        'type': 'AN',
        'maxlen': 76,
        'lentype': 'LLVAR',
        'desc': 'Track 1 data'
    },
    f46: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Additional data ISO'
    },
    f47: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Additional data national'
    },
    f48: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Additional data private'
    },
    f49: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Currency code transaction'
    },
    f50: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Currency code settlement'
    },
    f51: {
        'type': 'A',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Currency code card holder billing'
    },
    f52: {
        'type': 'B',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Personal identification number (PIN) data'
    },
    f53: {
        'type': 'N',
        'maxlen': 18,
        'lentype': 'FIXED',
        'desc': 'Security related control information'
    },
    f54: {
        'type': 'AN',
        'maxlen': 120,
        'lentype': 'LLLVAR',
        'desc': 'Additional amounts'
    },
    f55: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f56: {
        'type': 'ANS',
        'maxlen': 43,
        'lentype': 'LLVAR',
        'desc': 'Original Data Elements'
    },
    f57: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for national  use'
    },
    f58: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for national  use'
    },
    f59: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for national  use'
    },
    f60: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for private use'
    },
    f61: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for private use'
    },
    f62: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for private use'
    },
    f63: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for private use'
    },
    f64: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Message authentication code (MAC) field'
    },
    f65: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Reserved for ISO use'
    },
    f66: {
        'type': 'N',
        'maxlen': 1,
        'lentype': 'FIXED',
        'desc': 'Settlement code'
    },
    f67: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 'FIXED',
        'desc': 'Extended payment code'
    },
    f68: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Receiving institution country code'
    },
    f69: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Settlement institution country code'
    },
    f70: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Network management information code'
    },
    f71: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Message number'
    },
    f72: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Data record'
    },
    f73: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Date action YYMMDD'
    },
    f74: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Credits number'
    },
    f75: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Credits reversal number'
    },
    f76: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Debits number'
    },
    f77: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Debits reversal number'
    },
    f78: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Transfer number'
    },
    f79: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Transfer reversal number'
    },
    f80: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Inquiries number'
    },
    f81: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Authorisations number'
    },
    f82: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Credits processing fee amount'
    },
    f83: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Credits transaction fee amount'
    },
    f84: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Debits processing fee amount'
    },
    f85: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Debits transaction fee amount'
    },
    f86: {
        'type': 'N',
        'maxlen': 15,
        'lentype': 'FIXED',
        'desc': 'Credits amount'
    },
    f87: {
        'type': 'N',
        'maxlen': 15,
        'lentype': 'FIXED',
        'desc': 'Credits reversal amount'
    },
    f88: {
        'type': 'N',
        'maxlen': 15,
        'lentype': 'FIXED',
        'desc': 'Debits amount'
    },
    f89: {
        'type': 'N',
        'maxlen': 15,
        'lentype': 'FIXED',
        'desc': 'Debits reversal amount'
    },
    f90: {
        'type': 'N',
        'maxlen': 42,
        'lentype': 'FIXED',
        'desc': 'Original data elements'
    },
    f91: {
        'type': 'AN',
        'maxlen': 1,
        'lentype': 'FIXED',
        'desc': 'File update code'
    },
    f92: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 'FIXED',
        'desc': 'File security code'
    },
    f93: {
        'type': 'N',
        'maxlen': 5,
        'lentype': 'FIXED',
        'desc': 'Response indicator'
    },
    f94: {
        'type': 'AN',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Service indicator'
    },
    f95: {
        'type': 'AN',
        'maxlen': 42,
        'lentype': 'FIXED',
        'desc': 'Replacement amounts'
    },
    f96: {
        'type': 'AN',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Message security code'
    },
    f97: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Amount net settlement'
    },
    f98: {
        'type': 'ANS',
        'maxlen': 25,
        'lentype': 'FIXED',
        'desc': 'Payee'
    },
    f99: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Settlement institution identification code'
    },
    f100: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Receiving institution identification code'
    },
    f101: {
        'type': 'ANS',
        'maxlen': 99,
        'lentype': 'LLVAR',
        'desc': 'File name'
    },
    f102: {
        'type': 'ANS',
        'maxlen': 38,
        'lentype': 'LLVAR',
        'desc': 'Account identification 1'
    },
    f103: {
        'type': 'ANS',
        'maxlen': 40,
        'lentype': 'LLVAR',
        'desc': 'Account identification 2'
    },
    f104: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Transaction description'
    },
    f105: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f106: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f107: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f108: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f109: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f110: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f111: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f112: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f113: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f114: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f115: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f116: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f117: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f118: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f119: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f120: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f121: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f122: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f123: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'LLLVAR',
        'desc': 'DCC Id'
    },
    f124: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Terminal Type'
    },
    f125: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved Field 1'
    },
    f126: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved Field 1'
    },
    f127: {
        'type': 'ANS',
        'maxlen': 999999,
        'lentype': 'LLLLLLVAR',
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
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
            'f3': {
                'type': 'ANS',
                'maxlen': 6,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f4': {
                'type': 'ANS',
                'maxlen': 22,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f5': {
                'type': 'ANS',
                'maxlen': 73,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f6': {
                'type': 'ANS',
                'maxlen': 2,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f7': {
                'type': 'ANS',
                'maxlen': 50,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f8': {
                'type': 'ANS',
                'maxlen': 999,
                'lentype': 'LLLVAR',
                'desc': 'Reserved Field 1'
            },
      'f9': {
                'type': 'ANS',
                'maxlen': 255,
                'lentype': 'LLLVAR',
                'desc': 'Reserved Field 1'
            },
      'f10': {
                'type': 'ANS',
                'maxlen': 3,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f11': {
                'type': 'ANS',
                'maxlen': 32,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f12': {
                'type': 'ANS',
                'maxlen': 25,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f13': {
                'type': 'ANS',
                'maxlen': 17,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f14': {
                'type': 'ANS',
                'maxlen': 8,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f15': {
                'type': 'ANS',
                'maxlen': 29,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f16': {
                'type': 'ANS',
                'maxlen': 1,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f17': {
                'type': 'ANS',
                'maxlen': 50,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f18': {
                'type': 'ANS',
                'maxlen': 50,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f19': {
                'type': 'ANS',
                'maxlen': 31,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f20': {
                'type': 'ANS',
                'maxlen': 8,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f21': {
                'type': 'ANS',
                'maxlen': 12,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f22': {
                'type': 'ANS',
                'maxlen': 99999,
                'lentype': 'LLLLLVAR',
                'desc': 'Reserved Field 1'
            },
      'f23': {
                'type': 'ANS',
                'maxlen': 253,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f24': {
                'type': 'ANS',
                'maxlen': 28,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f25': {
                'type': 'ANS',
                'maxlen': 8000,
                'lentype': 'LLLLVAR',
                'desc': 'Reserved Field 1'
            },
      'f26': {
                'type': 'ANS',
                'maxlen': 12,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f27': {
                'type': 'ANS',
                'maxlen': 1,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f28': {
                'type': 'ANS',
                'maxlen': 4,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f29': {
                'type': 'ANS',
                'maxlen': 40,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f30': {
                'type': 'ANS',
                'maxlen': 1,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f31': {
                'type': 'ANS',
                'maxlen': 11,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f32': {
                'type': 'ANS',
                'maxlen': 33,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f33': {
                'type': 'ANS',
                'maxlen': 4,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f34': {
                'type': 'ANS',
                'maxlen': 2,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
      'f35': {
                'type': 'ANS',
                'maxlen': 11,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f36': {
                'type': 'ANS',
                'maxlen': 25,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
      'f37': {
                'type': 'ANS',
                'maxlen': 4,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
        }
    },
    f128: {
        'type': 'B',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Message authentication code (MAC) field'
    }
}



var iso8583_1993_cmn = {
    f0: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
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
        'lentype': 'LLVAR',
        'desc': 'Primary Account Number'
    },
    f3: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Processing Code'
    },
    f4: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Amount, Txn'
    },
    f5: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Amount, Reconciliation'
    },
    f9: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Conversion Rate'
    },
    f11: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Systems Trace Audit Number'
    },
    f12: {
        'type': 'N',
        'maxlen': 14,
        'lentype': 'FIXED',
        'desc': 'Time, Local Txn YYYYMMDDhhmmss'
    },
    f14: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date expiration YYMM'
    },
    f15: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Date settlement MMDD'
    },
    f16: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Date conversion MMDD'
    },
    f17: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Date capture YYYYMMDD'
    },
    f24: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Function code'
    },
    f30: {
        'type': 'N',
        'maxlen': 32,
        'lentype': 'FIXED',
        'desc': 'Original Amounts'
    },
    f32: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Acquiring institution identification code'
    },
    f33: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Forwarding institution identification code'
    },
    f34: {
        'type': 'N',
        'maxlen': 32,
        'lentype': 'LLVAR',
        'desc': 'Primary account number extended'
    },
    f37: {
        'type': 'AN',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Retrieval reference number'
    },
    f38: {
        'type': 'AN',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Approval Code'
    },
    f39: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Action Code'
    },
    f41: {
        'type': 'ANS',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Card acceptor terminal identification'
    },
    f42: {
        'type': 'ANS',
        'maxlen': 15,
        'lentype': 'FIXED',
        'desc': 'Card acceptor identification code'
    },
    f43: {
        'type': 'ANS',
        'maxlen': 99,
        'lentype': 'LLVAR',
        'desc': 'Card acceptor name/location'
    },
    f46: {
        'type': 'AN',
        'maxlen': 300,
        'lentype': 'LLLVAR',
        'desc': 'Amounts,Fees'
    },
    f47: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Additional data national'
    },
    f48: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Additional data private'
    },
    f49: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Currency code transaction'
    },
    f50: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Currency, Reconciliation'
    },
    f53: {
        'type': 'N',
        'maxlen': 48,
        'lentype': 'LLVAR',
        'desc': 'Security related control information'
    },
    f56: {
        'type': 'ANS',
        'maxlen': 43,
        'lentype': 'LLVAR',
        'desc': 'Original Data Elements'
    },
    f59: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Transport Data'
    },
    f62: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Cheque Details'
    },
    f63: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Consumer Number'
    },
    f66: {
        'type': 'N',
        'maxlen': 300,
        'lentype': 'LLLVAR',
        'desc': 'Amounts, original fees'
    },
    f72: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Additional User Data'
    },
    f93: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Txn Destination Inst ID Code'
    },
    f94: {
        'type': 'AN',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Txn Originator Inst ID Code'
    },
    f102: {
        'type': 'ANS',
        'maxlen': 38,
        'lentype': 'LLVAR',
        'desc': 'Account identification 1'
    },
    f103: {
        'type': 'ANS',
        'maxlen': 40,
        'lentype': 'LLVAR',
        'desc': 'Account identification 1'
    },
    f123: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'LLLVAR',
        'desc': 'DCC Id'
    },
    f124: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Terminal Type'
    },
    f125: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved Field 1'
    },
    f127: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved Field 3'
		}
}



var iso8583_1987_kdh = {
    f0: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
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
        'lentype': 'LLVAR',
        'desc': 'Primary Account Number'
    },
    f3: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Processing Code'
    },
    f4: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Amount, Txn'
    },
    f5: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Amount, Settlement'
    },
    f6: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Amount, Cardholder Billing'
    },
    f7: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Date and Time, Transmission MMDDhhmmss'
    },
    f8: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Amount, Cardholder Billing Fee'
    },
    f9: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Conversion Rate, Settlement'
    },
    f10: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Conversion Rate, Cardholder Billing'
    },
    f11: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Systems Trace Audit Number'
    },
    f12: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Time, Local Txn YYYYMMDDhhmmss'
    },
    f13: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date local transaction MMDD'
    },
    f14: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date expiration YYMM'
    },
    f15: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date settlement MMDD'
    },
    f16: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date conversion MMDD'
    },
    f17: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date capture YYYYMMDD'
    },
    f18: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Merchant type'
    },
    f19: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Acquiring institution country code'
    },
    f20: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Primary account number (PAN) extended country code'
    },
    f21: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Forwarding institution country code'
    },
    f22: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Point of service entry mode'
    },
    f23: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Card sequence number'
    },
    f24: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Function code'
    },
    f25: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 'FIXED',
        'desc': 'Point of service condition code'
    },
    f26: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 'FIXED',
        'desc': 'Point of service capture code'
    },
    f27: {
        'type': 'N',
        'maxlen': 1,
        'lentype': 'FIXED',
        'desc': 'Authorisation identification response length'
    },
    f28: {
        'type': 'N',
        'maxlen': 9,
        'lentype': 'FIXED',
        'desc': 'Amount transaction fee'
    },
    f29: {
        'type': 'N',
        'maxlen': 9,
        'lentype': 'FIXED',
        'desc': 'Amount settlement fee'
    },
    f30: {
        'type': 'N',
        'maxlen': 9,
        'lentype': 'FIXED',
        'desc': 'Amount transaction processing fee'
    },
    f31: {
        'type': 'N',
        'maxlen': 9,
        'lentype': 'FIXED',
        'desc': 'Amount settlement processing fee'
    },
    f32: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Acquiring institution identification code'
    },
    f33: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Forwarding institution identification code'
    },
    f34: {
        'type': 'N',
        'maxlen': 28,
        'lentype': 'LLVAR',
        'desc': 'Primary account number extended'
    },
    f35: {
        'type': 'Z',
        'maxlen': 37,
        'lentype': 'LLVAR',
        'desc': 'Track 2 data'
    },
    f36: {
        'type': 'Z',
        'maxlen': 104,
        'lentype': 'LLLVAR',
        'desc': 'Track 3 data'
    },
    f37: {
        'type': 'AN',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Retrieval reference number'
    },
    f38: {
        'type': 'AN',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Approval Code'
    },
    f39: {
        'type': 'AN',
        'maxlen': 2,
        'lentype': 'FIXED',
        'desc': 'Response code'
    },
    f40: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Service restriction code'
    },
    f41: {
        'type': 'ANS',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Card acceptor terminal identification'
    },
    f42: {
        'type': 'ANS',
        'maxlen': 15,
        'lentype': 'FIXED',
        'desc': 'Card acceptor identification code'
    },
    f43: {
        'type': 'ANS',
        'maxlen': 40,
        'lentype': 'FIXED',
        'desc': 'Card acceptor name/location'
    },
    f44: {
        'type': 'AN',
        'maxlen': 25,
        'lentype': 'LLVAR',
        'desc': 'Additional response data'
    },
    f45: {
        'type': 'AN',
        'maxlen': 76,
        'lentype': 'LLVAR',
        'desc': 'Track 1 data'
    },
    f46: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Additional data ISO'
    },
    f47: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Additional data national'
    },
    f48: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Additional data private'
    },
    f49: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Currency code transaction'
    },
    f50: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Currency code settlement'
    },
    f51: {
        'type': 'A',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Currency code card holder billing'
    },
    f52: {
        'type': 'B',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Personal identification number (PIN) data'
    },
    f53: {
        'type': 'N',
        'maxlen': 48,
        'lentype': 'FIXED',
        'desc': 'Security related control information'
    },
    f54: {
        'type': 'AN',
        'maxlen': 120,
        'lentype': 'LLLVAR',
        'desc': 'Additional amounts'
    },
    f55: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f56: {
        'type': 'ANS',
        'maxlen': 4,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f57: {
        'type': 'ANS',
        'maxlen': 3,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for national  use'
    },
    f58: {
        'type': 'ANS',
        'maxlen': 11,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for national  use'
    },
    f59: {
        'type': 'ANS',
        'maxlen': 255,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for national  use'
    },
    f60: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for private use'
    },
    f61: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for private use'
    },
    f62: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for private use'
    },
    f63: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for private use'
    },
    f64: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Message authentication code (MAC) field'
    },
    f65: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Reserved for ISO use'
    },
    f66: {
        'type': 'N',
        'maxlen': 1,
        'lentype': 'FIXED',
        'desc': 'Settlement code'
    },
    f67: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 'FIXED',
        'desc': 'Extended payment code'
    },
    f68: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Receiving institution country code'
    },
    f69: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Settlement institution country code'
    },
    f70: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Network management information code'
    },
    f71: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Message number'
    },
    f72: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Data record'
    },
    f73: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Date action YYMMDD'
    },
    f74: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Credits number'
    },
    f75: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Credits reversal number'
    },
    f76: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Debits number'
    },
    f77: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Debits reversal number'
    },
    f78: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Transfer number'
    },
    f79: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Transfer reversal number'
    },
    f80: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Inquiries number'
    },
    f81: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Authorisations number'
    },
    f82: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Credits processing fee amount'
    },
    f83: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Credits transaction fee amount'
    },
    f84: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Debits processing fee amount'
    },
    f85: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Debits transaction fee amount'
    },
    f86: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Credits amount'
    },
    f87: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Credits reversal amount'
    },
    f88: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Debits amount'
    },
    f89: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Debits reversal amount'
    },
    f90: {
        'type': 'N',
        'maxlen': 42,
        'lentype': 'FIXED',
        'desc': 'Original data elements'
    },
    f91: {
        'type': 'AN',
        'maxlen': 1,
        'lentype': 'FIXED',
        'desc': 'File update code'
    },
    f92: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 'FIXED',
        'desc': 'File security code'
    },
    f93: {
        'type': 'N',
        'maxlen': 5,
        'lentype': 'FIXED',
        'desc': 'Response indicator'
    },
    f94: {
        'type': 'AN',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Service indicator'
    },
    f95: {
        'type': 'AN',
        'maxlen': 42,
        'lentype': 'FIXED',
        'desc': 'Replacement amounts'
    },
    f96: {
        'type': 'AN',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Message security code'
    },
    f97: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Amount net settlement'
    },
    f98: {
        'type': 'ANS',
        'maxlen': 25,
        'lentype': 'FIXED',
        'desc': 'Payee'
    },
    f99: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Settlement institution identification code'
    },
    f100: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Receiving institution identification code'
    },
    f101: {
        'type': 'ANS',
        'maxlen': 17,
        'lentype': 'LLVAR',
        'desc': 'File name'
    },
    f102: {
        'type': 'ANS',
        'maxlen': 28,
        'lentype': 'LLVAR',
        'desc': 'Account identification 1'
    },
    f103: {
        'type': 'ANS',
        'maxlen': 28,
        'lentype': 'LLVAR',
        'desc': 'Account identification 2'
    },
    f104: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Transaction description'
    },
    f105: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f106: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f107: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f108: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f109: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f110: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f111: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f112: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f113: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f114: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f115: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f116: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f117: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f118: {
        'type': 'ANS',
        'maxlen': 10,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f119: {
        'type': 'ANS',
        'maxlen': 10,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f120: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f121: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f122: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f123: {
        'type': 'AN',
        'maxlen': 15,
        'lentype': 'LLLVAR',
        'desc': 'DCC Id'
    },
    f124: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Terminal Type'
    },
    f125: {
        'type': 'ANS',
        'maxlen': 40,
        'lentype': 'LLLVAR',
        'desc': 'Reserved Field 1'
    },
    f126: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved Field 1'
    },
    f127: {
        'type': 'ANS',
        'maxlen': 999999,
        'lentype': 'LLLLLLVAR',
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
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
            'f3': {
                'type': 'ANS',
                'maxlen': 48,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
			'f4': {
                'type': 'ANS',
                'maxlen': 22,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
			'f5': {
                'type': 'ANS',
                'maxlen': 73,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
			'f6': {
                'type': 'ANS',
                'maxlen': 2,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
			'f7': {
                'type': 'ANS',
                'maxlen': 50,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
			'f8': {
                'type': 'ANS',
                'maxlen': 999,
                'lentype': 'LLLVAR',
                'desc': 'Reserved Field 1'
            },
			'f9': {
                'type': 'ANS',
                'maxlen': 255,
                'lentype': 'LLLVAR',
                'desc': 'Reserved Field 1'
            },
			'f10': {
                'type': 'ANS',
                'maxlen': 3,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
			'f11': {
                'type': 'ANS',
                'maxlen': 32,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
			'f12': {
                'type': 'ANS',
                'maxlen': 25,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
			'f13': {
                'type': 'ANS',
                'maxlen': 17,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
			'f14': {
                'type': 'ANS',
                'maxlen': 8,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
			'f15': {
                'type': 'ANS',
                'maxlen': 29,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
			'f16': {
                'type': 'ANS',
                'maxlen': 1,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
			'f17': {
                'type': 'ANS',
                'maxlen': 50,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
			'f18': {
                'type': 'ANS',
                'maxlen': 50,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
			'f19': {
                'type': 'ANS',
                'maxlen': 31,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
			'f20': {
                'type': 'ANS',
                'maxlen': 8,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
			'f21': {
                'type': 'ANS',
                'maxlen': 12,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
			'f22': {
                'type': 'ANS',
                'maxlen': 99999,
                'lentype': 'LLLLLVAR',
                'desc': 'Reserved Field 1'
            },
			'f23': {
                'type': 'ANS',
                'maxlen': 253,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
			'f24': {
                'type': 'ANS',
                'maxlen': 28,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
			'f25': {
                'type': 'ANS',
                'maxlen': 8000,
                'lentype': 'LLLLVAR',
                'desc': 'Reserved Field 1'
            },
			'f26': {
                'type': 'ANS',
                'maxlen': 12,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
			'f27': {
                'type': 'ANS',
                'maxlen': 1,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
			'f28': {
                'type': 'ANS',
                'maxlen': 4,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
			'f29': {
                'type': 'ANS',
                'maxlen': 40,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
			'f30': {
                'type': 'ANS',
                'maxlen': 1,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
			'f31': {
                'type': 'ANS',
                'maxlen': 11,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
			'f32': {
                'type': 'ANS',
                'maxlen': 33,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
			'f33': {
                'type': 'ANS',
                'maxlen': 4,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
			'f34': {
                'type': 'ANS',
                'maxlen': 2,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
			'f35': {
                'type': 'ANS',
                'maxlen': 11,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
			'f36': {
                'type': 'ANS',
                'maxlen': 25,
                'lentype': 'LLVAR',
                'desc': 'Reserved Field 1'
            },
			'f37': {
                'type': 'ANS',
                'maxlen': 4,
                'lentype': 'FIXED',
                'desc': 'Reserved Field 1'
            },
        }
    },
    f128: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Message authentication code (MAC) field'
    }
}


var iso8583_1987_adg = {
    f0: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
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
        'lentype': 'LLVAR',
        'desc': 'Primary Account Number'
    },
    f3: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Processing Code'
    },
    f4: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Amount, Txn'
    },
    f5: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Amount, Settlement'
    },
    f6: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Amount, Cardholder Billing'
    },
    f7: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Date and Time, Transmission MMDDhhmmss'
    },
    f8: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Amount, Cardholder Billing Fee'
    },
    f9: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Conversion Rate, Settlement'
    },
    f10: {
        'type': 'N',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Conversion Rate, Cardholder Billing'
    },
    f11: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Systems Trace Audit Number'
    },
    f12: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Time, Local Txn YYYYMMDDhhmmss'
    },
    f13: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date local transaction MMDD'
    },
    f14: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date expiration YYMM'
    },
    f15: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date settlement MMDD'
    },
    f16: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date conversion MMDD'
    },
    f17: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Date capture YYYYMMDD'
    },
    f18: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Merchant type'
    },
    f19: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Acquiring institution country code'
    },
    f20: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Primary account number (PAN) extended country code'
    },
    f21: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Forwarding institution country code'
    },
    f22: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Point of service entry mode'
    },
    f23: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Card sequence number'
    },
    f24: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Function code'
    },
    f25: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 'FIXED',
        'desc': 'Point of service condition code'
    },
    f26: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 'FIXED',
        'desc': 'Point of service capture code'
    },
    f27: {
        'type': 'N',
        'maxlen': 1,
        'lentype': 'FIXED',
        'desc': 'Authorisation identification response length'
    },
    f28: {
        'type': 'N',
        'maxlen': 9,
        'lentype': 'FIXED',
        'desc': 'Amount transaction fee'
    },
    f29: {
        'type': 'N',
        'maxlen': 9,
        'lentype': 'FIXED',
        'desc': 'Amount settlement fee'
    },
    f30: {
        'type': 'N',
        'maxlen': 9,
        'lentype': 'FIXED',
        'desc': 'Amount transaction processing fee'
    },
    f31: {
        'type': 'N',
        'maxlen': 9,
        'lentype': 'FIXED',
        'desc': 'Amount settlement processing fee'
    },
    f32: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Acquiring institution identification code'
    },
    f33: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Forwarding institution identification code'
    },
    f34: {
        'type': 'N',
        'maxlen': 28,
        'lentype': 'LLVAR',
        'desc': 'Primary account number extended'
    },
    f35: {
        'type': 'Z',
        'maxlen': 37,
        'lentype': 'LLVAR',
        'desc': 'Track 2 data'
    },
    f36: {
        'type': 'Z',
        'maxlen': 104,
        'lentype': 'LLLVAR',
        'desc': 'Track 3 data'
    },
    f37: {
        'type': 'AN',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Retrieval reference number'
    },
    f38: {
        'type': 'AN',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Approval Code'
    },
    f39: {
        'type': 'AN',
        'maxlen': 2,
        'lentype': 'FIXED',
        'desc': 'Response code'
    },
    f40: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Service restriction code'
    },
    f41: {
        'type': 'ANS',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Card acceptor terminal identification'
    },
    f42: {
        'type': 'ANS',
        'maxlen': 15,
        'lentype': 'FIXED',
        'desc': 'Card acceptor identification code'
    },
    f43: {
        'type': 'ANS',
        'maxlen': 40,
        'lentype': 'FIXED',
        'desc': 'Card acceptor name/location'
    },
    f44: {
        'type': 'AN',
        'maxlen': 25,
        'lentype': 'LLVAR',
        'desc': 'Additional response data'
    },
    f45: {
        'type': 'AN',
        'maxlen': 76,
        'lentype': 'LLVAR',
        'desc': 'Track 1 data'
    },
    f46: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Additional data ISO'
    },
    f47: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Additional data national'
    },
    f48: {
        'type': 'AN',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Additional data private'
    },
    f49: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Currency code transaction'
    },
    f50: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Currency code settlement'
    },
    f51: {
        'type': 'A',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Currency code card holder billing'
    },
    f52: {
        'type': 'B',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Personal identification number (PIN) data'
    },
    f53: {
        'type': 'N',
        'maxlen': 48,
        'lentype': 'FIXED',
        'desc': 'Security related control information'
    },
    f54: {
        'type': 'AN',
        'maxlen': 120,
        'lentype': 'LLLVAR',
        'desc': 'Additional amounts'
    },
    f55: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f56: {
        'type': 'ANS',
        'maxlen': 4,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f57: {
        'type': 'ANS',
        'maxlen': 3,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for national  use'
    },
    f58: {
        'type': 'ANS',
        'maxlen': 11,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for national  use'
    },
    f59: {
        'type': 'ANS',
        'maxlen': 255,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for national  use'
    },
    f60: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for private use'
    },
    f61: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for private use'
    },
    f62: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for private use'
    },
    f63: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for private use'
    },
    f64: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Message authentication code (MAC) field'
    },
    f65: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Reserved for ISO use'
    },
    f66: {
        'type': 'N',
        'maxlen': 1,
        'lentype': 'FIXED',
        'desc': 'Settlement code'
    },
    f67: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 'FIXED',
        'desc': 'Extended payment code'
    },
    f68: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Receiving institution country code'
    },
    f69: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Settlement institution country code'
    },
    f70: {
        'type': 'N',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Network management information code'
    },
    f71: {
        'type': 'N',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Message number'
    },
    f72: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Data record'
    },
    f73: {
        'type': 'N',
        'maxlen': 6,
        'lentype': 'FIXED',
        'desc': 'Date action YYMMDD'
    },
    f74: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Credits number'
    },
    f75: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Credits reversal number'
    },
    f76: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Debits number'
    },
    f77: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Debits reversal number'
    },
    f78: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Transfer number'
    },
    f79: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Transfer reversal number'
    },
    f80: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Inquiries number'
    },
    f81: {
        'type': 'N',
        'maxlen': 10,
        'lentype': 'FIXED',
        'desc': 'Authorisations number'
    },
    f82: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Credits processing fee amount'
    },
    f83: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Credits transaction fee amount'
    },
    f84: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Debits processing fee amount'
    },
    f85: {
        'type': 'N',
        'maxlen': 12,
        'lentype': 'FIXED',
        'desc': 'Debits transaction fee amount'
    },
    f86: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Credits amount'
    },
    f87: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Credits reversal amount'
    },
    f88: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Debits amount'
    },
    f89: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Debits reversal amount'
    },
    f90: {
        'type': 'N',
        'maxlen': 42,
        'lentype': 'FIXED',
        'desc': 'Original data elements'
    },
    f91: {
        'type': 'AN',
        'maxlen': 1,
        'lentype': 'FIXED',
        'desc': 'File update code'
    },
    f92: {
        'type': 'N',
        'maxlen': 2,
        'lentype': 'FIXED',
        'desc': 'File security code'
    },
    f93: {
        'type': 'N',
        'maxlen': 5,
        'lentype': 'FIXED',
        'desc': 'Response indicator'
    },
    f94: {
        'type': 'AN',
        'maxlen': 4,
        'lentype': 'FIXED',
        'desc': 'Service indicator'
    },
    f95: {
        'type': 'AN',
        'maxlen': 42,
        'lentype': 'FIXED',
        'desc': 'Replacement amounts'
    },
    f96: {
        'type': 'AN',
        'maxlen': 8,
        'lentype': 'FIXED',
        'desc': 'Message security code'
    },
    f97: {
        'type': 'N',
        'maxlen': 16,
        'lentype': 'FIXED',
        'desc': 'Amount net settlement'
    },
    f98: {
        'type': 'ANS',
        'maxlen': 25,
        'lentype': 'FIXED',
        'desc': 'Payee'
    },
    f99: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Settlement institution identification code'
    },
    f100: {
        'type': 'N',
        'maxlen': 11,
        'lentype': 'LLVAR',
        'desc': 'Receiving institution identification code'
    },
    f101: {
        'type': 'ANS',
        'maxlen': 17,
        'lentype': 'LLVAR',
        'desc': 'File name'
    },
    f102: {
        'type': 'ANS',
        'maxlen': 28,
        'lentype': 'LLVAR',
        'desc': 'Account identification 1'
    },
    f103: {
        'type': 'ANS',
        'maxlen': 28,
        'lentype': 'LLVAR',
        'desc': 'Account identification 2'
    },
    f104: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Transaction description'
    },
    f105: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f106: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f107: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f108: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f109: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f110: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f111: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f112: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f113: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f114: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f115: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f116: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f117: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f118: {
        'type': 'ANS',
        'maxlen': 10,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f119: {
        'type': 'ANS',
        'maxlen': 10,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f120: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f121: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f122: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved for ISO use'
    },
    f123: {
        'type': 'AN',
        'maxlen': 15,
        'lentype': 'LLLVAR',
        'desc': 'DCC Id'
    },
    f124: {
        'type': 'AN',
        'maxlen': 3,
        'lentype': 'FIXED',
        'desc': 'Terminal Type'
    },
    f125: {
        'type': 'ANS',
        'maxlen': 40,
        'lentype': 'LLLVAR',
        'desc': 'Reserved Field 1'
    },
    f126: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved Field 1'
    },
    f127: {
        'type': 'ANS',
        'maxlen': 999999,
        'lentype': 'LLLLLLVAR',
        'desc': 'Reserved Field 1'
    },
    f128: {
        'type': 'B',
        'maxlen': 16,
        'lentype': 'FIXED',
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
