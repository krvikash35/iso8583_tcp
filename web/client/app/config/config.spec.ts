export interface Profile{
  personal: {
    enable_log: boolean,
    reqData: Object,
    theme: string,
    http_timeout: number,
    tcp_timeout: number,
    host: string,
    port: string
  },
  client: {
    field_def: string,
    encode: {
      header_encode: string,
      bitmap_encode: string,
      field_encode: string
    },
    header: {
      include_header: boolean,
      include_header_for_msglen_cal: boolean,
      header_len: number
    }
  },
  server: {
    field_def: string,
    encode: {
      header_encode: string,
      bitmap_encode: string,
      field_encode: string
    },
    header: {
      include_header: boolean,
      include_header_for_msglen_cal: boolean,
      header_len: number
    }
  }
}
