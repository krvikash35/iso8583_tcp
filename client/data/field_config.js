var iso8583_1993_fields = [
/*   0 */ "N  ,  4,FIXED  ", // Message Type Indicator
/*   1 */ "BMP, 16,CONTVAR", // Bitmap
/*   2 */ "N  , 19,LLVAR  ", // Primary Account Number
/*   3 */ "N  ,  6,FIXED  ", // Processing Code
/*   4 */ "N  , 12,FIXED  ", // Amount, Txn
/*   5 */ "N  , 12,FIXED  ", // Amount, Reconciliation
/*   6 */ "N  , 12,FIXED  ", // Amount, Cardholder Billing
/*   7 */ "N  , 10,FIXED  ", // Date and Time, Transmission
/*   8 */ "N  ,  8,FIXED  ", // Amount, Cardholder Billing Fee
/*   9 */ "N  ,  8,FIXED  ", // Conversion Rate, Reconciliation
/*  10 */ "N  ,  8,FIXED  ", // Conversion Rate, Cardholder Billing
/*  11 */ "N  ,  6,FIXED  ", // Systems Trace Audit Number
/*  12 */ "N  , 12,FIXED  ", // Date and Time, Local Txn
/*  13 */ "N  ,  4,FIXED  ", // Date, Effective
/*  14 */ "N  ,  4,FIXED  ", // Date, Expiration
/*  15 */ "N  ,  6,FIXED  ", // Date, Settlement
/*  16 */ "N  ,  4,FIXED  ", // Date, Conversion
/*  17 */ "N  ,  4,FIXED  ", // Date, Capture
/*  18 */ "N  ,  4,FIXED  ", // Merchant Type
/*  19 */ "N  ,  3,FIXED  ", // Country Code, Acquiring Inst
/*  20 */ "N  ,  3,FIXED  ", // Country Code, Primary Account Number
/*  21 */ "N  ,  3,FIXED  ", // Country Code, Forwarding Inst
/*  22 */ "AN , 12,FIXED  ", // Point of Service Data Code
/*  23 */ "N  ,  3,FIXED  ", // Card Sequence Number
/*  24 */ "N  ,  3,FIXED  ", // Function Code
/*  25 */ "N  ,  4,FIXED  ", // Message Reason Code
/*  26 */ "N  ,  4,FIXED  ", // Card Acceptor Business Code
/*  27 */ "N  ,  1,FIXED  ", // Approval Code Length
/*  28 */ "N  ,  6,FIXED  ", // Date, Reconciliation
/*  29 */ "N  ,  3,FIXED  ", // Reconciliation Indicator
/*  30 */ "N  , 24,FIXED  ", // Amounts, Original
/*  31 */ "ANS, 99,LLVAR  ", // Acquirer Reference Data
/*  32 */ "N  , 11,LLVAR  ", // Acquirer Inst Id Code
/*  33 */ "N  , 11,LLVAR  ", // Forwarding Inst Id Code
/*  34 */ "NS , 28,LLVAR  ", // Primary Account Number, Extended
/*  35 */ "Z  , 37,LLVAR  ", // Track 2 Data
/*  36 */ "Z  ,104,LLLVAR ", // Track 3 Data
/*  37 */ "ANP, 12,FIXED  ", // Retrieval Reference Number
/*  38 */ "ANP,  6,FIXED  ", // Approval Code
/*  39 */ "N  ,  3,FIXED  ", // Action Code
/*  40 */ "N  ,  3,FIXED  ", // Service Code
/*  41 */ "ANS,  8,FIXED  ", // Card Acceptor Terminal Id
/*  42 */ "ANS, 15,FIXED  ", // Card Acceptor Id Code
/*  43 */ "ANS, 99,LLVAR  ", // Card Acceptor Name/Location
/*  44 */ "ANS, 99,LLVAR  ", // Additional Response Data
/*  45 */ "ANS, 76,LLVAR  ", // Track 1 Data
/*  46 */ "ANS,204,LLLVAR ", // Amounts, Fees
/*  47 */ "ANS,999,LLLVAR ", // Additional Data - National
/*  48 */ "ANS,999,LLLVAR ", // Additional Data - Private
/*  49 */ "AN ,  3,FIXED  ", // Currency Code, Txn
/*  50 */ "AN ,  3,FIXED  ", // Currency Code, Reconciliation
/*  51 */ "AN ,  3,FIXED  ", // Currency Code, Cardholder Billing
/*  52 */ "B  ,  8,FIXED  ", // Personal Id Number (PIN) Data
/*  53 */ "B  , 48,LLVAR  ", // Security Related Control Information
/*  54 */ "ANS,120,LLLVAR ", // Amounts, Additional
/*  55 */ "B  ,255,LLLVAR ", // IC Card System Related Data
/*  56 */ "N  , 35,LLVAR  ", // Original Data Elements
/*  57 */ "N  ,  3,FIXED  ", // Authorization Life Cycle Code
/*  58 */ "N  , 11,LLVAR  ", // Authorizing Agent Inst Id Code
/*  59 */ "ANS,999,LLLVAR ", // Transport Data
/*  60 */ "ANS,999,LLLVAR ", // Reserved for National use
/*  61 */ "ANS,999,LLLVAR ", // Reserved for National use
/*  62 */ "ANS,999,LLLVAR ", // Reserved for Private use
/*  63 */ "ANS,999,LLLVAR ", // Reserved for Private use
/*  64 */ "B  ,  8,FIXED  ", // Message Authentication Code Field
/*  65 */ "B  ,  8,FIXED  ", // Reserved for ISO use
/*  66 */ "ANS,204,LLLVAR ", // Amounts, Original Fees
/*  67 */ "N  ,  2,FIXED  ", // Extended Payment Data
/*  68 */ "N  ,  3,FIXED  ", // Country Code, Receiving Inst
/*  69 */ "N  ,  3,FIXED  ", // Country Code, Settlement Inst
/*  70 */ "N  ,  3,FIXED  ", // Country Code, Authorizing Agent Inst
/*  71 */ "N  ,  6,FIXED  ", // Message Number
/*  72 */ "ANS,999,LLLVAR ", // Data Record
/*  73 */ "N  ,  6,FIXED  ", // Date, Action
/*  74 */ "N  , 10,FIXED  ", // Credits, Number
/*  75 */ "N  , 10,FIXED  ", // Credits, Reversal Number
/*  76 */ "N  , 10,FIXED  ", // Debits, Number
/*  77 */ "N  , 10,FIXED  ", // Debits, Reversal Number
/*  78 */ "N  , 10,FIXED  ", // Transfer, Number
/*  79 */ "N  , 10,FIXED  ", // Transfer, Reversal Number
/*  80 */ "N  , 10,FIXED  ", // Inquiries, Number
/*  81 */ "N  , 10,FIXED  ", // Authorizations, Number
/*  82 */ "N  , 10,FIXED  ", // Inquiries, Reversal Number
/*  83 */ "N  , 10,FIXED  ", // Payments, Number
/*  84 */ "N  , 10,FIXED  ", // Payments, Reversal Number
/*  85 */ "N  , 10,FIXED  ", // Fee Collections, Number
/*  86 */ "N  , 16,FIXED  ", // Credits, Amount
/*  87 */ "N  , 16,FIXED  ", // Credits, Reversal Amount
/*  88 */ "N  , 16,FIXED  ", // Debits, Amount
/*  89 */ "N  , 16,FIXED  ", // Debits, Reversal Amount
/*  90 */ "N  , 10,FIXED  ", // Authorizations, Reversal Number
/*  91 */ "N  ,  3,FIXED  ", // Country Code, Txn Destination Inst
/*  92 */ "N  ,  3,FIXED  ", // Country Code, Txn Originator Inst
/*  93 */ "N  , 11,LLVAR  ", // Txn Destination Inst Id Code
/*  94 */ "N  , 11,LLVAR  ", // Txn Originator Inst Id Code
/*  95 */ "ANS, 99,LLVAR  ", // Card Issuer Reference Data
/*  96 */ "B  ,999,LLLVAR ", // Key Management Data
/*  97 */ "XN , 17,FIXED  ", // Amount, Net Reconciliation
/*  98 */ "ANS, 25,FIXED  ", // Payee
/*  99 */ "AN , 11,LLVAR  ", // Settlement Inst Id Code
/* 100 */ "N  , 11,LLVAR  ", // Receiving Inst Id Code
/* 101 */ "ANS, 17,LLVAR  ", // File Name
/* 102 */ "ANS, 28,LLVAR  ", // Account Id 1
/* 103 */ "ANS, 28,LLVAR  ", // Account Id 2
/* 104 */ "ANS,100,LLLVAR ", // Txn Description
/* 105 */ "N  , 16,FIXED  ", // Credits, Chargeback Amount
/* 106 */ "N  , 16,FIXED  ", // Debits, Chargeback Amount
/* 107 */ "N  , 10,FIXED  ", // Credits, Chargeback Number
/* 108 */ "N  , 10,FIXED  ", // Debits, Chargeback Number
/* 109 */ "ANS, 84,LLVAR  ", // Credits, Fee Amounts
/* 110 */ "ANS, 84,LLVAR  ", // Debits, Fee Amounts
/* 111 */ "ANS,999,LLLVAR ", // Reserved for ISO use
/* 112 */ "ANS,999,LLLVAR ", // Reserved for ISO use
/* 113 */ "ANS,999,LLLVAR ", // Reserved for ISO use
/* 114 */ "ANS,999,LLLVAR ", // Reserved for ISO use
/* 115 */ "ANS,999,LLLVAR ", // Reserved for ISO use
/* 116 */ "ANS,999,LLLVAR ", // Reserved for National use
/* 117 */ "ANS,999,LLLVAR ", // Reserved for National use
/* 118 */ "ANS,999,LLLVAR ", // Reserved for National use
/* 119 */ "ANS,999,LLLVAR ", // Reserved for National use
/* 120 */ "ANS,999,LLLVAR ", // Reserved for National use
/* 121 */ "ANS,999,LLLVAR ", // Reserved for National use
/* 122 */ "ANS,999,LLLVAR ", // Reserved for National use
/* 123 */ "ANS,999,LLLVAR ", // Reserved for Private use
/* 124 */ "ANS,999,LLLVAR ", // Reserved for Private use
/* 125 */ "ANS,999,LLLVAR ", // Reserved for Private use
/* 126 */ "ANS,999,LLLVAR ", // Reserved for Private use
/* 127 */ "ANS,999,LLLVAR ", // Reserved for Private use
/* 128 */ "B  ,  8,FIXED  "  // Message Authentication Code Field
];



var iso8583_1987_fields = [
/*   0 */ "N  ,  4,FIXED  ", // Message Type Indicator
/*   1 */ "BMP, 16,CONTVAR", // Bitmap
/*   2 */ "N  , 19,LLVAR  ", // Primary Account Number
/*   3 */ "N  ,  6,FIXED  ", // Processing Code
/*   4 */ "N  , 12,FIXED  ", // Amount, Txn
/*   5 */ "N  , 12,FIXED  ", // Amount, Settlement
/*   6 */ "N  , 12,FIXED  ", // Amount, Cardholder Billing
/*   7 */ "N  , 10,FIXED  ", // Date and Time, Transmission
/*   8 */ "N  ,  8,FIXED  ", // Amount, Cardholder Billing Fee
/*   9 */ "N  ,  8,FIXED  ", // Conversion Rate, Settlement
/*  10 */ "N  ,  8,FIXED  ", // Conversion Rate, Cardholder Billing
/*  11 */ "N  ,  6,FIXED  ", // Systems Trace Audit Number
/*  12 */ "N  ,  6,FIXED  ", // Time, Local Txn
/*  13 */ "N  ,  4,FIXED  ", // Date, Local Txn
/*  14 */ "N  ,  4,FIXED  ", // Date, Expiration
/*  15 */ "N  ,  6,FIXED  ", // Date, Settlement
/*  16 */ "N  ,  4,FIXED  ", // Date, Conversion
/*  17 */ "N  ,  4,FIXED  ", // Date, Capture
/*  18 */ "N  ,  4,FIXED  ", // Merchant Type
/*  19 */ "N  ,  3,FIXED  ", // Country Code, Acquiring Inst
/*  20 */ "N  ,  3,FIXED  ", // Country Code, Primary Account Number
/*  21 */ "N  ,  3,FIXED  ", // Country Code, Forwarding Inst
/*  22 */ "N  ,  3,FIXED  ", // Point of Service Entry Mode
/*  23 */ "N  ,  3,FIXED  ", // Application PAN number
/*  24 */ "N  ,  3,FIXED  ", // Network International Identifier
/*  25 */ "N  ,  2,FIXED  ", // Point of Service Condition Code
/*  26 */ "N  ,  2,FIXED  ", // Point of Service PIN Capture Code
/*  27 */ "N  ,  1,FIXED  ", // Authorization Identification Response Length
/*  28 */ "XN ,  9,FIXED  ", // Amount, Txn Fee
/*  29 */ "XN ,  9,FIXED  ", // Amount, Settlement Fee
/*  30 */ "XN ,  9,FIXED  ", // Amount, Txn Processing Fee
/*  31 */ "XN ,  9,FIXED  ", // Amount, Settlement Processing Fee
/*  32 */ "N  , 11,LLVAR  ", // Acquirer Inst Id Code
/*  33 */ "N  , 11,LLVAR  ", // Forwarding Inst Id Code
/*  34 */ "NS , 28,LLVAR  ", // Primary Account Number, Extended
/*  35 */ "Z  , 37,LLVAR  ", // Track 2 Data
/*  36 */ "AN ,104,LLLVAR ", // Track 3 Data
/*  37 */ "AN , 12,FIXED  ", // Retrieval Reference Number
/*  38 */ "AN ,  6,FIXED  ", // Approval Code
/*  39 */ "AN ,  2,FIXED  ", // Response Code
/*  40 */ "ANS,  3,FIXED  ", // Service Restriction Code
/*  41 */ "ANS,  8,FIXED  ", // Card Acceptor Terminal Id
/*  42 */ "ANS, 15,FIXED  ", // Card Acceptor Id Code
/*  43 */ "ANS, 40,FIXED  ", // Card Acceptor Name/Location
/*  44 */ "ANS, 25,LLVAR  ", // Additional Response Data
/*  45 */ "ANS, 76,LLVAR  ", // Track 1 Data
/*  46 */ "ANS,999,LLLVAR ", // Additional Data - ISO
/*  47 */ "ANS,999,LLLVAR ", // Additional Data - National
/*  48 */ "ANS,999,LLLVAR ", // Additional Data - Private
/*  49 */ "ANS,  3,FIXED  ", // Currency Code, Txn
/*  50 */ "AN ,  3,FIXED  ", // Currency Code, Settlement
/*  51 */ "AN ,  3,FIXED  ", // Currency Code, Cardholder Billing
/*  52 */ "B  ,  8,FIXED  ", // Personal Id Number (PIN) Data
/*  53 */ "N  , 16,FIXED  ", // Security Related Control Information
/*  54 */ "ANS,120,LLLVAR ", // Amounts, Additional
/*  55 */ "ANS,999,LLLVAR ", // Reserved for ISO use
/*  56 */ "ANS,999,LLLVAR ", // Reserved for ISO use
/*  57 */ "ANS,999,LLLVAR ", // Reserved for National use
/*  58 */ "ANS,999,LLLVAR ", // Reserved for National use
/*  59 */ "ANS,999,LLLVAR ", // Reserved for National use
/*  60 */ "ANS,999,LLLVAR ", // Reserved for Private use
/*  61 */ "ANS,999,LLLVAR ", // Reserved for Private use
/*  62 */ "ANS,999,LLLVAR ", // Reserved for Private use
/*  63 */ "ANS,999,LLLVAR ", // Reserved for Private use
/*  64 */ "B  ,  8,FIXED  ", // Message Authentication Code Field
/*  65 */ "B  ,  8,FIXED  ", // Reserved for ISO use
/*  66 */ "N  ,  1,FIXED  ", // Code, Settlement
/*  67 */ "N  ,  2,FIXED  ", // Extended Payment Code
/*  68 */ "N  ,  3,FIXED  ", // Country Code, Receiving Inst
/*  69 */ "N  ,  3,FIXED  ", // Country Code, Settlement Inst
/*  70 */ "N  ,  3,FIXED  ", // Network Management Information Code
/*  71 */ "N  ,  4,FIXED  ", // Message Number
/*  72 */ "N  ,  4,FIXED  ", // Message Number Last
/*  73 */ "N  ,  6,FIXED  ", // Date, Action
/*  74 */ "N  , 10,FIXED  ", // Credits, Number
/*  75 */ "N  , 10,FIXED  ", // Credits, Reversal Number
/*  76 */ "N  , 10,FIXED  ", // Debits, Number
/*  77 */ "N  , 10,FIXED  ", // Debits, Reversal Number
/*  78 */ "N  , 10,FIXED  ", // Transfer, Number
/*  79 */ "N  , 10,FIXED  ", // Transfer, Reversal Number
/*  80 */ "N  , 10,FIXED  ", // Inquiries, Number
/*  81 */ "N  , 10,FIXED  ", // Authorization, Number
/*  82 */ "N  , 12,FIXED  ", // Credits, Processing Fee
/*  83 */ "N  , 12,FIXED  ", // Credits, Txn Fee
/*  84 */ "N  , 12,FIXED  ", // Debits, Processing Fee
/*  85 */ "N  , 12,FIXED  ", // Debits, Txn Fee
/*  86 */ "N  , 15,FIXED  ", // Credits, Amount
/*  87 */ "N  , 15,FIXED  ", // Credits, Reversal Amount
/*  88 */ "N  , 15,FIXED  ", // Debits, Amount
/*  89 */ "N  , 15,FIXED  ", // Debits, Reversal Amount
/*  90 */ "N  , 42,FIXED  ", // Original Data Elements
/*  91 */ "ANS,  1,FIXED  ", // File Update Code
/*  92 */ "N  ,  2,FIXED  ", // File Security Code
/*  93 */ "N  ,  5,FIXED  ", // Response Indicator
/*  94 */ "ANS,  7,FIXED  ", // Service Indicator
/*  95 */ "ANS, 42,FIXED  ", // Amount, Replacement
/*  96 */ "B  ,  8,FIXED  ", // Message Security Code
/*  97 */ "XN , 17,FIXED  ", // Amount, Net Settlement
/*  98 */ "ANS, 25,FIXED  ", // Payee
/*  99 */ "N  , 11,LLVAR  ", // Settlement Inst Id Code
/* 100 */ "N  , 11,LLVAR  ", // Receiving Inst Id Code
/* 101 */ "ANS, 17,LLVAR  ", // File Name
/* 102 */ "ANS, 28,LLVAR  ", // Account Id 1
/* 103 */ "ANS, 28,LLVAR  ", // Account Id 2
/* 104 */ "ANS,100,LLLVAR ", // Txn Description
/* 105 */ "ANS,999,LLLVAR ", // Reserved for ISO use
/* 106 */ "ANS,999,LLLVAR ", // Reserved for ISO use
/* 107 */ "ANS,999,LLLVAR ", // Reserved for ISO use
/* 108 */ "ANS,999,LLLVAR ", // Reserved for ISO use
/* 109 */ "ANS,999,LLLVAR ", // Reserved for ISO use
/* 110 */ "ANS,999,LLLVAR ", // Reserved for ISO use
/* 111 */ "ANS,999,LLLVAR ", // Reserved for ISO use
/* 112 */ "ANS,999,LLLVAR ", // Reserved for National use
/* 113 */ "ANS,999,LLLVAR ", // Reserved for National use
/* 114 */ "ANS,999,LLLVAR ", // Reserved for National use
/* 115 */ "ANS,999,LLLVAR ", // Reserved for National use
/* 116 */ "ANS,999,LLLVAR ", // Reserved for National use
/* 117 */ "ANS,999,LLLVAR ", // Reserved for National use
/* 118 */ "ANS,999,LLLVAR ", // Reserved for National use
/* 119 */ "ANS,999,LLLVAR ", // Reserved for National use
/* 120 */ "ANS,999,LLLVAR ", // Reserved for Private use
/* 121 */ "ANS,999,LLLVAR ", // Reserved for Private use
/* 122 */ "ANS,999,LLLVAR ", // Reserved for Private use
/* 123 */ "ANS,999,LLLVAR ", // Reserved for Private use
/* 124 */ "ANS,999,LLLVAR ", // Reserved for Private use
/* 125 */ "ANS,999,LLLVAR ", // Reserved for Private use
/* 126 */ "ANS,999,LLLVAR ", // Reserved for Private use
/* 127 */ "ANS,999,LLLVAR ", // Reserved for Private use
/* 128 */ "B  ,  8,FIXED  "  // Message Authentication Code Field
];


var fconfig = {
  iso8583_1993_fields: iso8583_1993_fields,
  iso8583_1987_fields: iso8583_1987_fields
}

module.exports = fconfig;
