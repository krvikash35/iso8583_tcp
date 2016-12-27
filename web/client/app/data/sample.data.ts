export const REQDATA: any = {
  f0: '1200',
  f3: '400000',
  f11: '000000000042',
  f12: '20161106183420',
  f56: '1200000000045353201610211010101100000004535',
  f102: '           102     RAVISB007          ',
  f17: '20161206',
  // f24: '200',
  // f32: '23',
  // f34: 'COR',
  // f49: 'INR',
  //   f4: '0000000000000106',
  // f103: '             102     RETACHSB1          ',
  // f123: 'COR'
  // f125: 'this Funds Transfer transaction was posted by FI'

}


export const RESDATA: any = {
  f0: '1200',
  f3: '400000',
  f4: '0000000000000106',
  f11: '000000000042',
  f12: '20161106183420',
  f17: '20161206',
  f24: '200',
  f32: '23',
  f34: 'COR',
  f49: 'INR',
  f56: '1200000000045353201610211010101100000004535',
  f102: '           102     RAVISB007          ',
  f103: '             102     RETACHSB1          ',
  f123: 'COR',
  f125: 'this Funds Transfer transaction was posted by FI'
}


export const REQFIELDDEF: any = {
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
    f104: {
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
    f126: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved Field 2'
    },
    f127: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved Field 3'
		}
}

export const RESFIELDDEF: any = {
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
    f104: {
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
    f126: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved Field 2'
    },
    f127: {
        'type': 'ANS',
        'maxlen': 999,
        'lentype': 'LLLVAR',
        'desc': 'Reserved Field 3'
		}
}
