"use strict"
var websoklib = {
  add_new_ws_conn: add_new_ws_conn,
  close_ws_conn_byid: close_ws_conn_byid,
  send_msg: send_msg,
  receive_msg: receive_msg
}

module.exports = websoklib;

let currentWS = null;
let wsstruct = {
  ws_conn_list: new Map(),  //{"ws"+ws_id_gen: ws}
  ws_max_allowed_conn: 100,
  ws_id_gen: 0
}

function add_new_ws_conn(new_ws_conn){
  wsstruct.ws_id_gen = wsstruct.ws_id_gen + 1;
  new_ws_conn.id = wsstruct.ws_id_gen;
  wsstruct.ws_conn_list.set(wsstruct.ws_id_gen, new_ws_conn)
  console.log("websoklib.add_new_ws_conn...current active connection : ", wsstruct.ws_conn_list.size, " wsid: ", new_ws_conn.id);
  let msg = {
    data: {
      wsid: wsstruct.ws_id_gen
    }
  }
  new_ws_conn.send( JSON.stringify(msg) )
}

function close_ws_conn_byid(wsid){
  wsstruct.ws_conn_list.delete(wsid);
  console.log("websoklib.close_new_ws_conn...current active connection: ", wsstruct.ws_conn_list.size, " wsid: ", wsid);
}

function send_msg(wsid, msg){
  console.log("websoklib.send_msg...msg ", msg, " to be sent to wsid "+wsid);
  console.log(wsstruct.ws_conn_list.keys());
  let ws = wsstruct.ws_conn_list.get(parseInt(wsid))
  // console.log(ws);
  if(ws){
    console.log("websoklib.send_msg...msg sent");
    ws.send(msg)
  }else{
    console.log("websoklib.send_msg...given wsid not found, so msg not sent");
  }
}

function receive_msg(wsid, msg){
  console.log("websocklib.receive_msg...msg ", msg, " recived by wsid ", wsid);
}
