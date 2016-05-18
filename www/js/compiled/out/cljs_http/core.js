// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4425__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4425__auto__)){
var req = temp__4425__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__33444){
var vec__33445 = p__33444;
var k = cljs.core.nth.call(null,vec__33445,(0),null);
var v = cljs.core.nth.call(null,vec__33445,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__33447 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__33447)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__33447)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__33447)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__33447)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__33447)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__33447)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__33448){
var map__33452 = p__33448;
var map__33452__$1 = ((((!((map__33452 == null)))?((((map__33452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33452):map__33452);
var request = map__33452__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__33452__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__33452__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__33452__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__16805__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__33454 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__33454,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__33454,response_type);

G__33454.setTimeoutInterval(timeout);

G__33454.setWithCredentials(send_credentials);

return G__33454;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__33455){
var map__33482 = p__33455;
var map__33482__$1 = ((((!((map__33482 == null)))?((((map__33482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33482):map__33482);
var request = map__33482__$1;
var request_method = cljs.core.get.call(null,map__33482__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__33482__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__33482__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__33482__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__33482__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__16805__auto__ = request_method;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__33482,map__33482__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__33482,map__33482__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__19184__auto___33508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___33508,channel,request_url,method,headers__$1,xhr__$1,map__33482,map__33482__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___33508,channel,request_url,method,headers__$1,xhr__$1,map__33482,map__33482__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_33494){
var state_val_33495 = (state_33494[(1)]);
if((state_val_33495 === (1))){
var state_33494__$1 = state_33494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33494__$1,(2),cancel);
} else {
if((state_val_33495 === (2))){
var inst_33485 = (state_33494[(2)]);
var inst_33486 = xhr__$1.isComplete();
var inst_33487 = cljs.core.not.call(null,inst_33486);
var state_33494__$1 = (function (){var statearr_33496 = state_33494;
(statearr_33496[(7)] = inst_33485);

return statearr_33496;
})();
if(inst_33487){
var statearr_33497_33509 = state_33494__$1;
(statearr_33497_33509[(1)] = (3));

} else {
var statearr_33498_33510 = state_33494__$1;
(statearr_33498_33510[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (3))){
var inst_33489 = xhr__$1.abort();
var state_33494__$1 = state_33494;
var statearr_33499_33511 = state_33494__$1;
(statearr_33499_33511[(2)] = inst_33489);

(statearr_33499_33511[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (4))){
var state_33494__$1 = state_33494;
var statearr_33500_33512 = state_33494__$1;
(statearr_33500_33512[(2)] = null);

(statearr_33500_33512[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (5))){
var inst_33492 = (state_33494[(2)]);
var state_33494__$1 = state_33494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33494__$1,inst_33492);
} else {
return null;
}
}
}
}
}
});})(c__19184__auto___33508,channel,request_url,method,headers__$1,xhr__$1,map__33482,map__33482__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__19163__auto__,c__19184__auto___33508,channel,request_url,method,headers__$1,xhr__$1,map__33482,map__33482__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__19164__auto__ = null;
var cljs_http$core$xhr_$_state_machine__19164__auto____0 = (function (){
var statearr_33504 = [null,null,null,null,null,null,null,null];
(statearr_33504[(0)] = cljs_http$core$xhr_$_state_machine__19164__auto__);

(statearr_33504[(1)] = (1));

return statearr_33504;
});
var cljs_http$core$xhr_$_state_machine__19164__auto____1 = (function (state_33494){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_33494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e33505){if((e33505 instanceof Object)){
var ex__19167__auto__ = e33505;
var statearr_33506_33513 = state_33494;
(statearr_33506_33513[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33514 = state_33494;
state_33494 = G__33514;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__19164__auto__ = function(state_33494){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__19164__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__19164__auto____1.call(this,state_33494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__19164__auto____0;
cljs_http$core$xhr_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__19164__auto____1;
return cljs_http$core$xhr_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___33508,channel,request_url,method,headers__$1,xhr__$1,map__33482,map__33482__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__19186__auto__ = (function (){var statearr_33507 = f__19185__auto__.call(null);
(statearr_33507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___33508);

return statearr_33507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___33508,channel,request_url,method,headers__$1,xhr__$1,map__33482,map__33482__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__33515){
var map__33532 = p__33515;
var map__33532__$1 = ((((!((map__33532 == null)))?((((map__33532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33532):map__33532);
var request = map__33532__$1;
var timeout = cljs.core.get.call(null,map__33532__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__33532__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__33532__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__33532__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_33548 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__33532,map__33532__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__33532,map__33532__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__33532,map__33532__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__33532,map__33532__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_33548], null));

if(cljs.core.truth_(cancel)){
var c__19184__auto___33549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___33549,req_33548,channel,jsonp__$1,map__33532,map__33532__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___33549,req_33548,channel,jsonp__$1,map__33532,map__33532__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_33538){
var state_val_33539 = (state_33538[(1)]);
if((state_val_33539 === (1))){
var state_33538__$1 = state_33538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33538__$1,(2),cancel);
} else {
if((state_val_33539 === (2))){
var inst_33535 = (state_33538[(2)]);
var inst_33536 = jsonp__$1.cancel(req_33548);
var state_33538__$1 = (function (){var statearr_33540 = state_33538;
(statearr_33540[(7)] = inst_33535);

return statearr_33540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33538__$1,inst_33536);
} else {
return null;
}
}
});})(c__19184__auto___33549,req_33548,channel,jsonp__$1,map__33532,map__33532__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__19163__auto__,c__19184__auto___33549,req_33548,channel,jsonp__$1,map__33532,map__33532__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__19164__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__19164__auto____0 = (function (){
var statearr_33544 = [null,null,null,null,null,null,null,null];
(statearr_33544[(0)] = cljs_http$core$jsonp_$_state_machine__19164__auto__);

(statearr_33544[(1)] = (1));

return statearr_33544;
});
var cljs_http$core$jsonp_$_state_machine__19164__auto____1 = (function (state_33538){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_33538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e33545){if((e33545 instanceof Object)){
var ex__19167__auto__ = e33545;
var statearr_33546_33550 = state_33538;
(statearr_33546_33550[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33551 = state_33538;
state_33538 = G__33551;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__19164__auto__ = function(state_33538){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__19164__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__19164__auto____1.call(this,state_33538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__19164__auto____0;
cljs_http$core$jsonp_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__19164__auto____1;
return cljs_http$core$jsonp_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___33549,req_33548,channel,jsonp__$1,map__33532,map__33532__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__19186__auto__ = (function (){var statearr_33547 = f__19185__auto__.call(null);
(statearr_33547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___33549);

return statearr_33547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___33549,req_33548,channel,jsonp__$1,map__33532,map__33532__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__33552){
var map__33555 = p__33552;
var map__33555__$1 = ((((!((map__33555 == null)))?((((map__33555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33555):map__33555);
var request__$1 = map__33555__$1;
var request_method = cljs.core.get.call(null,map__33555__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map?rel=1463388064657