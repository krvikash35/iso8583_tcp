export const PROP: any = {
  personal: {
    title: "COMMON SECTION",
    host: {
      title: "HOST",
      hint: "ENTER HOST OR IP..."
    },
    port: {
      title: "PORT",
      hint: "ENTER PORT NO..."
    },
    enable_log: {
      title: "ENABLE LOG"
    },
    loglevel: {
      title: "LOG TYPE",
      allowdValue: [{name: "ERROR LOG ONLY", value: 1}, {name: "EVENT LOG ONLY", value: 2}, {name: "INFO LOG ONLY", value: 3}, {name: "HTTP LOG ONLY", value: 4}, {name: "ISO MSG LOG ONLY", value: 5}, {name: "ALL THE LOGS", value: 6}]
    },
    theme: {
      title: "THEME TYPE",
      allowdValue: [{name: "DARK", value: "dark"}, {name: "LIGHT", value: "light"}]
    },
    tcp_timeout: {
      title: "TCP TIMEOUT",
      allowdValue: [{name: "20 SECOND", value: 20}, {name: "30 SECOND", value: 30}, {name: "40 SECOND", value: 40}]
    },
    http_timeout:{
      title: "HTTP TIMEOUT",
      allowdValue: [{name: "2 SECOND", value: 2}, {name: "4 SECOND", value: 4}, {name: "6 SECOND", value: 6}]
    }
  },
  server: {
    title: "SERVER SECTION",
    field_definition:{
      title: "FIELD DEFINITION",
      allowdValue: [{name: "CMN", value: "cmn"}, {name: "IB", value: "ib"}, {name: "ATM", value: "atm"}]
    },
    encode: {
      header: {
        title: "HEADER ENCODING",
        allowdValue: [{name: "ENCODE TO HEX", value: "hex"}, {name: "ENCODE TO ASCII", value: "ascii"}, {name: "ENCODE TO CHEXEHEX", value: "chexehex"}, {name: "ENCODE TO CHEXEASCII", value: "chexeascii"}]
      },
      bitmap: {
        title: "BITMAP ENCODING",
        allowdValue: [{name: "ENCODE TO HEX", value: "hex"}, {name: "ENCODE TO ASCII", value: "ascii"}]
      },
      fields:{
        title: "FIELD ENCODING",
        allowdValue: [{name: "ENCODE TO ASCII", value: "ascii"}]
      }
    },
    header:{
      include_header: {
        title: "INCLUDE HEADER"
      },
      header_value_logic: {
        title: "HDRLEN IN HEADER VALUE"
      },
      header_len: {
        title: "HEADER LENGTH",
        hint: "Enter number of bytes ..."
      }
    }
  },
  client: {
    title: "CLIENT SECTION",
    field_definition:{
      title: "FIELD DEFINITION",
      allowdValue: [{name: "CMN", value: "cmn"}, {name: "IB", value: "ib"}, {name: "ATM", value: "atm"}]
    },
    encode: {
      header: {
        title: "HEADER ENCODING",
        allowdValue: [{name: "ENCODE TO HEX", value: "hex"}, {name: "ENCODE TO ASCII", value: "ascii"}, {name: "ENCODE TO CHEXEHEX", value: "chexehex"}, {name: "CONVERT TO CHEXEASCII", value: "chexeascii"}]
      },
      bitmap: {
        title: "BITMAP ENCODING",
        allowdValue: [{name: "ENCODE TO HEX", value: "hex"}, {name: "ENCODE TO ASCII", value: "ascii"}]
      },
      fields:{
        title: "FIELD ENCODING",
        allowdValue: [{name: "ENCODE TO ASCII", value: "ascii"}]
      }
    },
    header:{
      include_header: {
        title: "INCLUDE HEADER"
      },
      header_value_logic: {
        title: "HDRLEN IN HEADER VALUE"
      },
      header_len: {
        title: "HEADER LENGTH",
        hint: "Enter number of bytes ..."
      }
    }
  }
}
