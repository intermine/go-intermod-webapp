// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22989 = [];
var len__17863__auto___22995 = arguments.length;
var i__17864__auto___22996 = (0);
while(true){
if((i__17864__auto___22996 < len__17863__auto___22995)){
args22989.push((arguments[i__17864__auto___22996]));

var G__22997 = (i__17864__auto___22996 + (1));
i__17864__auto___22996 = G__22997;
continue;
} else {
}
break;
}

var G__22991 = args22989.length;
switch (G__22991) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22989.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22992 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22992 = (function (f,blockable,meta22993){
this.f = f;
this.blockable = blockable;
this.meta22993 = meta22993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22994,meta22993__$1){
var self__ = this;
var _22994__$1 = this;
return (new cljs.core.async.t_cljs$core$async22992(self__.f,self__.blockable,meta22993__$1));
});

cljs.core.async.t_cljs$core$async22992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22994){
var self__ = this;
var _22994__$1 = this;
return self__.meta22993;
});

cljs.core.async.t_cljs$core$async22992.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22992.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22992.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22992.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22993","meta22993",163171648,null)], null);
});

cljs.core.async.t_cljs$core$async22992.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22992";

cljs.core.async.t_cljs$core$async22992.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async22992");
});

cljs.core.async.__GT_t_cljs$core$async22992 = (function cljs$core$async$__GT_t_cljs$core$async22992(f__$1,blockable__$1,meta22993){
return (new cljs.core.async.t_cljs$core$async22992(f__$1,blockable__$1,meta22993));
});

}

return (new cljs.core.async.t_cljs$core$async22992(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args23001 = [];
var len__17863__auto___23004 = arguments.length;
var i__17864__auto___23005 = (0);
while(true){
if((i__17864__auto___23005 < len__17863__auto___23004)){
args23001.push((arguments[i__17864__auto___23005]));

var G__23006 = (i__17864__auto___23005 + (1));
i__17864__auto___23005 = G__23006;
continue;
} else {
}
break;
}

var G__23003 = args23001.length;
switch (G__23003) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23001.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args23008 = [];
var len__17863__auto___23011 = arguments.length;
var i__17864__auto___23012 = (0);
while(true){
if((i__17864__auto___23012 < len__17863__auto___23011)){
args23008.push((arguments[i__17864__auto___23012]));

var G__23013 = (i__17864__auto___23012 + (1));
i__17864__auto___23012 = G__23013;
continue;
} else {
}
break;
}

var G__23010 = args23008.length;
switch (G__23010) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23008.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args23015 = [];
var len__17863__auto___23018 = arguments.length;
var i__17864__auto___23019 = (0);
while(true){
if((i__17864__auto___23019 < len__17863__auto___23018)){
args23015.push((arguments[i__17864__auto___23019]));

var G__23020 = (i__17864__auto___23019 + (1));
i__17864__auto___23019 = G__23020;
continue;
} else {
}
break;
}

var G__23017 = args23015.length;
switch (G__23017) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23015.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23022 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23022);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23022,ret){
return (function (){
return fn1.call(null,val_23022);
});})(val_23022,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args23023 = [];
var len__17863__auto___23026 = arguments.length;
var i__17864__auto___23027 = (0);
while(true){
if((i__17864__auto___23027 < len__17863__auto___23026)){
args23023.push((arguments[i__17864__auto___23027]));

var G__23028 = (i__17864__auto___23027 + (1));
i__17864__auto___23027 = G__23028;
continue;
} else {
}
break;
}

var G__23025 = args23023.length;
switch (G__23025) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23023.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17708__auto___23030 = n;
var x_23031 = (0);
while(true){
if((x_23031 < n__17708__auto___23030)){
(a[x_23031] = (0));

var G__23032 = (x_23031 + (1));
x_23031 = G__23032;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23033 = (i + (1));
i = G__23033;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23037 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23037 = (function (alt_flag,flag,meta23038){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23038 = meta23038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23039,meta23038__$1){
var self__ = this;
var _23039__$1 = this;
return (new cljs.core.async.t_cljs$core$async23037(self__.alt_flag,self__.flag,meta23038__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23037.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23039){
var self__ = this;
var _23039__$1 = this;
return self__.meta23038;
});})(flag))
;

cljs.core.async.t_cljs$core$async23037.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23037.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23037.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23037.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23037.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23038","meta23038",-1900713474,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23037.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23037";

cljs.core.async.t_cljs$core$async23037.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async23037");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23037 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23037(alt_flag__$1,flag__$1,meta23038){
return (new cljs.core.async.t_cljs$core$async23037(alt_flag__$1,flag__$1,meta23038));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23037(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23043 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23043 = (function (alt_handler,flag,cb,meta23044){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23044 = meta23044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23045,meta23044__$1){
var self__ = this;
var _23045__$1 = this;
return (new cljs.core.async.t_cljs$core$async23043(self__.alt_handler,self__.flag,self__.cb,meta23044__$1));
});

cljs.core.async.t_cljs$core$async23043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23045){
var self__ = this;
var _23045__$1 = this;
return self__.meta23044;
});

cljs.core.async.t_cljs$core$async23043.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23043.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23043.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23044","meta23044",-1074676276,null)], null);
});

cljs.core.async.t_cljs$core$async23043.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23043";

cljs.core.async.t_cljs$core$async23043.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async23043");
});

cljs.core.async.__GT_t_cljs$core$async23043 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23043(alt_handler__$1,flag__$1,cb__$1,meta23044){
return (new cljs.core.async.t_cljs$core$async23043(alt_handler__$1,flag__$1,cb__$1,meta23044));
});

}

return (new cljs.core.async.t_cljs$core$async23043(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23046_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23046_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23047_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23047_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16805__auto__ = wport;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23048 = (i + (1));
i = G__23048;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16805__auto__ = ret;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16793__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16793__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16793__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___23054 = arguments.length;
var i__17864__auto___23055 = (0);
while(true){
if((i__17864__auto___23055 < len__17863__auto___23054)){
args__17870__auto__.push((arguments[i__17864__auto___23055]));

var G__23056 = (i__17864__auto___23055 + (1));
i__17864__auto___23055 = G__23056;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23051){
var map__23052 = p__23051;
var map__23052__$1 = ((((!((map__23052 == null)))?((((map__23052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23052):map__23052);
var opts = map__23052__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23049){
var G__23050 = cljs.core.first.call(null,seq23049);
var seq23049__$1 = cljs.core.next.call(null,seq23049);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23050,seq23049__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23057 = [];
var len__17863__auto___23107 = arguments.length;
var i__17864__auto___23108 = (0);
while(true){
if((i__17864__auto___23108 < len__17863__auto___23107)){
args23057.push((arguments[i__17864__auto___23108]));

var G__23109 = (i__17864__auto___23108 + (1));
i__17864__auto___23108 = G__23109;
continue;
} else {
}
break;
}

var G__23059 = args23057.length;
switch (G__23059) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23057.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19184__auto___23111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___23111){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___23111){
return (function (state_23083){
var state_val_23084 = (state_23083[(1)]);
if((state_val_23084 === (7))){
var inst_23079 = (state_23083[(2)]);
var state_23083__$1 = state_23083;
var statearr_23085_23112 = state_23083__$1;
(statearr_23085_23112[(2)] = inst_23079);

(statearr_23085_23112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (1))){
var state_23083__$1 = state_23083;
var statearr_23086_23113 = state_23083__$1;
(statearr_23086_23113[(2)] = null);

(statearr_23086_23113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (4))){
var inst_23062 = (state_23083[(7)]);
var inst_23062__$1 = (state_23083[(2)]);
var inst_23063 = (inst_23062__$1 == null);
var state_23083__$1 = (function (){var statearr_23087 = state_23083;
(statearr_23087[(7)] = inst_23062__$1);

return statearr_23087;
})();
if(cljs.core.truth_(inst_23063)){
var statearr_23088_23114 = state_23083__$1;
(statearr_23088_23114[(1)] = (5));

} else {
var statearr_23089_23115 = state_23083__$1;
(statearr_23089_23115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (13))){
var state_23083__$1 = state_23083;
var statearr_23090_23116 = state_23083__$1;
(statearr_23090_23116[(2)] = null);

(statearr_23090_23116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (6))){
var inst_23062 = (state_23083[(7)]);
var state_23083__$1 = state_23083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23083__$1,(11),to,inst_23062);
} else {
if((state_val_23084 === (3))){
var inst_23081 = (state_23083[(2)]);
var state_23083__$1 = state_23083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23083__$1,inst_23081);
} else {
if((state_val_23084 === (12))){
var state_23083__$1 = state_23083;
var statearr_23091_23117 = state_23083__$1;
(statearr_23091_23117[(2)] = null);

(statearr_23091_23117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (2))){
var state_23083__$1 = state_23083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23083__$1,(4),from);
} else {
if((state_val_23084 === (11))){
var inst_23072 = (state_23083[(2)]);
var state_23083__$1 = state_23083;
if(cljs.core.truth_(inst_23072)){
var statearr_23092_23118 = state_23083__$1;
(statearr_23092_23118[(1)] = (12));

} else {
var statearr_23093_23119 = state_23083__$1;
(statearr_23093_23119[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (9))){
var state_23083__$1 = state_23083;
var statearr_23094_23120 = state_23083__$1;
(statearr_23094_23120[(2)] = null);

(statearr_23094_23120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (5))){
var state_23083__$1 = state_23083;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23095_23121 = state_23083__$1;
(statearr_23095_23121[(1)] = (8));

} else {
var statearr_23096_23122 = state_23083__$1;
(statearr_23096_23122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (14))){
var inst_23077 = (state_23083[(2)]);
var state_23083__$1 = state_23083;
var statearr_23097_23123 = state_23083__$1;
(statearr_23097_23123[(2)] = inst_23077);

(statearr_23097_23123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (10))){
var inst_23069 = (state_23083[(2)]);
var state_23083__$1 = state_23083;
var statearr_23098_23124 = state_23083__$1;
(statearr_23098_23124[(2)] = inst_23069);

(statearr_23098_23124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (8))){
var inst_23066 = cljs.core.async.close_BANG_.call(null,to);
var state_23083__$1 = state_23083;
var statearr_23099_23125 = state_23083__$1;
(statearr_23099_23125[(2)] = inst_23066);

(statearr_23099_23125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto___23111))
;
return ((function (switch__19163__auto__,c__19184__auto___23111){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_23103 = [null,null,null,null,null,null,null,null];
(statearr_23103[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_23103[(1)] = (1));

return statearr_23103;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_23083){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_23083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e23104){if((e23104 instanceof Object)){
var ex__19167__auto__ = e23104;
var statearr_23105_23126 = state_23083;
(statearr_23105_23126[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23127 = state_23083;
state_23083 = G__23127;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_23083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_23083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___23111))
})();
var state__19186__auto__ = (function (){var statearr_23106 = f__19185__auto__.call(null);
(statearr_23106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___23111);

return statearr_23106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___23111))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23311){
var vec__23312 = p__23311;
var v = cljs.core.nth.call(null,vec__23312,(0),null);
var p = cljs.core.nth.call(null,vec__23312,(1),null);
var job = vec__23312;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19184__auto___23494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___23494,res,vec__23312,v,p,job,jobs,results){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___23494,res,vec__23312,v,p,job,jobs,results){
return (function (state_23317){
var state_val_23318 = (state_23317[(1)]);
if((state_val_23318 === (1))){
var state_23317__$1 = state_23317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23317__$1,(2),res,v);
} else {
if((state_val_23318 === (2))){
var inst_23314 = (state_23317[(2)]);
var inst_23315 = cljs.core.async.close_BANG_.call(null,res);
var state_23317__$1 = (function (){var statearr_23319 = state_23317;
(statearr_23319[(7)] = inst_23314);

return statearr_23319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23317__$1,inst_23315);
} else {
return null;
}
}
});})(c__19184__auto___23494,res,vec__23312,v,p,job,jobs,results))
;
return ((function (switch__19163__auto__,c__19184__auto___23494,res,vec__23312,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0 = (function (){
var statearr_23323 = [null,null,null,null,null,null,null,null];
(statearr_23323[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__);

(statearr_23323[(1)] = (1));

return statearr_23323;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1 = (function (state_23317){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_23317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e23324){if((e23324 instanceof Object)){
var ex__19167__auto__ = e23324;
var statearr_23325_23495 = state_23317;
(statearr_23325_23495[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23496 = state_23317;
state_23317 = G__23496;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = function(state_23317){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1.call(this,state_23317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___23494,res,vec__23312,v,p,job,jobs,results))
})();
var state__19186__auto__ = (function (){var statearr_23326 = f__19185__auto__.call(null);
(statearr_23326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___23494);

return statearr_23326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___23494,res,vec__23312,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23327){
var vec__23328 = p__23327;
var v = cljs.core.nth.call(null,vec__23328,(0),null);
var p = cljs.core.nth.call(null,vec__23328,(1),null);
var job = vec__23328;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17708__auto___23497 = n;
var __23498 = (0);
while(true){
if((__23498 < n__17708__auto___23497)){
var G__23329_23499 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23329_23499) {
case "compute":
var c__19184__auto___23501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23498,c__19184__auto___23501,G__23329_23499,n__17708__auto___23497,jobs,results,process,async){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (__23498,c__19184__auto___23501,G__23329_23499,n__17708__auto___23497,jobs,results,process,async){
return (function (state_23342){
var state_val_23343 = (state_23342[(1)]);
if((state_val_23343 === (1))){
var state_23342__$1 = state_23342;
var statearr_23344_23502 = state_23342__$1;
(statearr_23344_23502[(2)] = null);

(statearr_23344_23502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23343 === (2))){
var state_23342__$1 = state_23342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23342__$1,(4),jobs);
} else {
if((state_val_23343 === (3))){
var inst_23340 = (state_23342[(2)]);
var state_23342__$1 = state_23342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23342__$1,inst_23340);
} else {
if((state_val_23343 === (4))){
var inst_23332 = (state_23342[(2)]);
var inst_23333 = process.call(null,inst_23332);
var state_23342__$1 = state_23342;
if(cljs.core.truth_(inst_23333)){
var statearr_23345_23503 = state_23342__$1;
(statearr_23345_23503[(1)] = (5));

} else {
var statearr_23346_23504 = state_23342__$1;
(statearr_23346_23504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23343 === (5))){
var state_23342__$1 = state_23342;
var statearr_23347_23505 = state_23342__$1;
(statearr_23347_23505[(2)] = null);

(statearr_23347_23505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23343 === (6))){
var state_23342__$1 = state_23342;
var statearr_23348_23506 = state_23342__$1;
(statearr_23348_23506[(2)] = null);

(statearr_23348_23506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23343 === (7))){
var inst_23338 = (state_23342[(2)]);
var state_23342__$1 = state_23342;
var statearr_23349_23507 = state_23342__$1;
(statearr_23349_23507[(2)] = inst_23338);

(statearr_23349_23507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23498,c__19184__auto___23501,G__23329_23499,n__17708__auto___23497,jobs,results,process,async))
;
return ((function (__23498,switch__19163__auto__,c__19184__auto___23501,G__23329_23499,n__17708__auto___23497,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0 = (function (){
var statearr_23353 = [null,null,null,null,null,null,null];
(statearr_23353[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__);

(statearr_23353[(1)] = (1));

return statearr_23353;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1 = (function (state_23342){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_23342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e23354){if((e23354 instanceof Object)){
var ex__19167__auto__ = e23354;
var statearr_23355_23508 = state_23342;
(statearr_23355_23508[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23509 = state_23342;
state_23342 = G__23509;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = function(state_23342){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1.call(this,state_23342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__;
})()
;})(__23498,switch__19163__auto__,c__19184__auto___23501,G__23329_23499,n__17708__auto___23497,jobs,results,process,async))
})();
var state__19186__auto__ = (function (){var statearr_23356 = f__19185__auto__.call(null);
(statearr_23356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___23501);

return statearr_23356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(__23498,c__19184__auto___23501,G__23329_23499,n__17708__auto___23497,jobs,results,process,async))
);


break;
case "async":
var c__19184__auto___23510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23498,c__19184__auto___23510,G__23329_23499,n__17708__auto___23497,jobs,results,process,async){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (__23498,c__19184__auto___23510,G__23329_23499,n__17708__auto___23497,jobs,results,process,async){
return (function (state_23369){
var state_val_23370 = (state_23369[(1)]);
if((state_val_23370 === (1))){
var state_23369__$1 = state_23369;
var statearr_23371_23511 = state_23369__$1;
(statearr_23371_23511[(2)] = null);

(statearr_23371_23511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23370 === (2))){
var state_23369__$1 = state_23369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23369__$1,(4),jobs);
} else {
if((state_val_23370 === (3))){
var inst_23367 = (state_23369[(2)]);
var state_23369__$1 = state_23369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23369__$1,inst_23367);
} else {
if((state_val_23370 === (4))){
var inst_23359 = (state_23369[(2)]);
var inst_23360 = async.call(null,inst_23359);
var state_23369__$1 = state_23369;
if(cljs.core.truth_(inst_23360)){
var statearr_23372_23512 = state_23369__$1;
(statearr_23372_23512[(1)] = (5));

} else {
var statearr_23373_23513 = state_23369__$1;
(statearr_23373_23513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23370 === (5))){
var state_23369__$1 = state_23369;
var statearr_23374_23514 = state_23369__$1;
(statearr_23374_23514[(2)] = null);

(statearr_23374_23514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23370 === (6))){
var state_23369__$1 = state_23369;
var statearr_23375_23515 = state_23369__$1;
(statearr_23375_23515[(2)] = null);

(statearr_23375_23515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23370 === (7))){
var inst_23365 = (state_23369[(2)]);
var state_23369__$1 = state_23369;
var statearr_23376_23516 = state_23369__$1;
(statearr_23376_23516[(2)] = inst_23365);

(statearr_23376_23516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23498,c__19184__auto___23510,G__23329_23499,n__17708__auto___23497,jobs,results,process,async))
;
return ((function (__23498,switch__19163__auto__,c__19184__auto___23510,G__23329_23499,n__17708__auto___23497,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0 = (function (){
var statearr_23380 = [null,null,null,null,null,null,null];
(statearr_23380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__);

(statearr_23380[(1)] = (1));

return statearr_23380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1 = (function (state_23369){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_23369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e23381){if((e23381 instanceof Object)){
var ex__19167__auto__ = e23381;
var statearr_23382_23517 = state_23369;
(statearr_23382_23517[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23518 = state_23369;
state_23369 = G__23518;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = function(state_23369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1.call(this,state_23369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__;
})()
;})(__23498,switch__19163__auto__,c__19184__auto___23510,G__23329_23499,n__17708__auto___23497,jobs,results,process,async))
})();
var state__19186__auto__ = (function (){var statearr_23383 = f__19185__auto__.call(null);
(statearr_23383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___23510);

return statearr_23383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(__23498,c__19184__auto___23510,G__23329_23499,n__17708__auto___23497,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23519 = (__23498 + (1));
__23498 = G__23519;
continue;
} else {
}
break;
}

var c__19184__auto___23520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___23520,jobs,results,process,async){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___23520,jobs,results,process,async){
return (function (state_23405){
var state_val_23406 = (state_23405[(1)]);
if((state_val_23406 === (1))){
var state_23405__$1 = state_23405;
var statearr_23407_23521 = state_23405__$1;
(statearr_23407_23521[(2)] = null);

(statearr_23407_23521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (2))){
var state_23405__$1 = state_23405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23405__$1,(4),from);
} else {
if((state_val_23406 === (3))){
var inst_23403 = (state_23405[(2)]);
var state_23405__$1 = state_23405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23405__$1,inst_23403);
} else {
if((state_val_23406 === (4))){
var inst_23386 = (state_23405[(7)]);
var inst_23386__$1 = (state_23405[(2)]);
var inst_23387 = (inst_23386__$1 == null);
var state_23405__$1 = (function (){var statearr_23408 = state_23405;
(statearr_23408[(7)] = inst_23386__$1);

return statearr_23408;
})();
if(cljs.core.truth_(inst_23387)){
var statearr_23409_23522 = state_23405__$1;
(statearr_23409_23522[(1)] = (5));

} else {
var statearr_23410_23523 = state_23405__$1;
(statearr_23410_23523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (5))){
var inst_23389 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23405__$1 = state_23405;
var statearr_23411_23524 = state_23405__$1;
(statearr_23411_23524[(2)] = inst_23389);

(statearr_23411_23524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (6))){
var inst_23386 = (state_23405[(7)]);
var inst_23391 = (state_23405[(8)]);
var inst_23391__$1 = cljs.core.async.chan.call(null,(1));
var inst_23392 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23393 = [inst_23386,inst_23391__$1];
var inst_23394 = (new cljs.core.PersistentVector(null,2,(5),inst_23392,inst_23393,null));
var state_23405__$1 = (function (){var statearr_23412 = state_23405;
(statearr_23412[(8)] = inst_23391__$1);

return statearr_23412;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23405__$1,(8),jobs,inst_23394);
} else {
if((state_val_23406 === (7))){
var inst_23401 = (state_23405[(2)]);
var state_23405__$1 = state_23405;
var statearr_23413_23525 = state_23405__$1;
(statearr_23413_23525[(2)] = inst_23401);

(statearr_23413_23525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (8))){
var inst_23391 = (state_23405[(8)]);
var inst_23396 = (state_23405[(2)]);
var state_23405__$1 = (function (){var statearr_23414 = state_23405;
(statearr_23414[(9)] = inst_23396);

return statearr_23414;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23405__$1,(9),results,inst_23391);
} else {
if((state_val_23406 === (9))){
var inst_23398 = (state_23405[(2)]);
var state_23405__$1 = (function (){var statearr_23415 = state_23405;
(statearr_23415[(10)] = inst_23398);

return statearr_23415;
})();
var statearr_23416_23526 = state_23405__$1;
(statearr_23416_23526[(2)] = null);

(statearr_23416_23526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__19184__auto___23520,jobs,results,process,async))
;
return ((function (switch__19163__auto__,c__19184__auto___23520,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0 = (function (){
var statearr_23420 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__);

(statearr_23420[(1)] = (1));

return statearr_23420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1 = (function (state_23405){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_23405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e23421){if((e23421 instanceof Object)){
var ex__19167__auto__ = e23421;
var statearr_23422_23527 = state_23405;
(statearr_23422_23527[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23528 = state_23405;
state_23405 = G__23528;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = function(state_23405){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1.call(this,state_23405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___23520,jobs,results,process,async))
})();
var state__19186__auto__ = (function (){var statearr_23423 = f__19185__auto__.call(null);
(statearr_23423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___23520);

return statearr_23423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___23520,jobs,results,process,async))
);


var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__,jobs,results,process,async){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__,jobs,results,process,async){
return (function (state_23461){
var state_val_23462 = (state_23461[(1)]);
if((state_val_23462 === (7))){
var inst_23457 = (state_23461[(2)]);
var state_23461__$1 = state_23461;
var statearr_23463_23529 = state_23461__$1;
(statearr_23463_23529[(2)] = inst_23457);

(statearr_23463_23529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23462 === (20))){
var state_23461__$1 = state_23461;
var statearr_23464_23530 = state_23461__$1;
(statearr_23464_23530[(2)] = null);

(statearr_23464_23530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23462 === (1))){
var state_23461__$1 = state_23461;
var statearr_23465_23531 = state_23461__$1;
(statearr_23465_23531[(2)] = null);

(statearr_23465_23531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23462 === (4))){
var inst_23426 = (state_23461[(7)]);
var inst_23426__$1 = (state_23461[(2)]);
var inst_23427 = (inst_23426__$1 == null);
var state_23461__$1 = (function (){var statearr_23466 = state_23461;
(statearr_23466[(7)] = inst_23426__$1);

return statearr_23466;
})();
if(cljs.core.truth_(inst_23427)){
var statearr_23467_23532 = state_23461__$1;
(statearr_23467_23532[(1)] = (5));

} else {
var statearr_23468_23533 = state_23461__$1;
(statearr_23468_23533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23462 === (15))){
var inst_23439 = (state_23461[(8)]);
var state_23461__$1 = state_23461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23461__$1,(18),to,inst_23439);
} else {
if((state_val_23462 === (21))){
var inst_23452 = (state_23461[(2)]);
var state_23461__$1 = state_23461;
var statearr_23469_23534 = state_23461__$1;
(statearr_23469_23534[(2)] = inst_23452);

(statearr_23469_23534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23462 === (13))){
var inst_23454 = (state_23461[(2)]);
var state_23461__$1 = (function (){var statearr_23470 = state_23461;
(statearr_23470[(9)] = inst_23454);

return statearr_23470;
})();
var statearr_23471_23535 = state_23461__$1;
(statearr_23471_23535[(2)] = null);

(statearr_23471_23535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23462 === (6))){
var inst_23426 = (state_23461[(7)]);
var state_23461__$1 = state_23461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23461__$1,(11),inst_23426);
} else {
if((state_val_23462 === (17))){
var inst_23447 = (state_23461[(2)]);
var state_23461__$1 = state_23461;
if(cljs.core.truth_(inst_23447)){
var statearr_23472_23536 = state_23461__$1;
(statearr_23472_23536[(1)] = (19));

} else {
var statearr_23473_23537 = state_23461__$1;
(statearr_23473_23537[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23462 === (3))){
var inst_23459 = (state_23461[(2)]);
var state_23461__$1 = state_23461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23461__$1,inst_23459);
} else {
if((state_val_23462 === (12))){
var inst_23436 = (state_23461[(10)]);
var state_23461__$1 = state_23461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23461__$1,(14),inst_23436);
} else {
if((state_val_23462 === (2))){
var state_23461__$1 = state_23461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23461__$1,(4),results);
} else {
if((state_val_23462 === (19))){
var state_23461__$1 = state_23461;
var statearr_23474_23538 = state_23461__$1;
(statearr_23474_23538[(2)] = null);

(statearr_23474_23538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23462 === (11))){
var inst_23436 = (state_23461[(2)]);
var state_23461__$1 = (function (){var statearr_23475 = state_23461;
(statearr_23475[(10)] = inst_23436);

return statearr_23475;
})();
var statearr_23476_23539 = state_23461__$1;
(statearr_23476_23539[(2)] = null);

(statearr_23476_23539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23462 === (9))){
var state_23461__$1 = state_23461;
var statearr_23477_23540 = state_23461__$1;
(statearr_23477_23540[(2)] = null);

(statearr_23477_23540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23462 === (5))){
var state_23461__$1 = state_23461;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23478_23541 = state_23461__$1;
(statearr_23478_23541[(1)] = (8));

} else {
var statearr_23479_23542 = state_23461__$1;
(statearr_23479_23542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23462 === (14))){
var inst_23439 = (state_23461[(8)]);
var inst_23441 = (state_23461[(11)]);
var inst_23439__$1 = (state_23461[(2)]);
var inst_23440 = (inst_23439__$1 == null);
var inst_23441__$1 = cljs.core.not.call(null,inst_23440);
var state_23461__$1 = (function (){var statearr_23480 = state_23461;
(statearr_23480[(8)] = inst_23439__$1);

(statearr_23480[(11)] = inst_23441__$1);

return statearr_23480;
})();
if(inst_23441__$1){
var statearr_23481_23543 = state_23461__$1;
(statearr_23481_23543[(1)] = (15));

} else {
var statearr_23482_23544 = state_23461__$1;
(statearr_23482_23544[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23462 === (16))){
var inst_23441 = (state_23461[(11)]);
var state_23461__$1 = state_23461;
var statearr_23483_23545 = state_23461__$1;
(statearr_23483_23545[(2)] = inst_23441);

(statearr_23483_23545[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23462 === (10))){
var inst_23433 = (state_23461[(2)]);
var state_23461__$1 = state_23461;
var statearr_23484_23546 = state_23461__$1;
(statearr_23484_23546[(2)] = inst_23433);

(statearr_23484_23546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23462 === (18))){
var inst_23444 = (state_23461[(2)]);
var state_23461__$1 = state_23461;
var statearr_23485_23547 = state_23461__$1;
(statearr_23485_23547[(2)] = inst_23444);

(statearr_23485_23547[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23462 === (8))){
var inst_23430 = cljs.core.async.close_BANG_.call(null,to);
var state_23461__$1 = state_23461;
var statearr_23486_23548 = state_23461__$1;
(statearr_23486_23548[(2)] = inst_23430);

(statearr_23486_23548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto__,jobs,results,process,async))
;
return ((function (switch__19163__auto__,c__19184__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0 = (function (){
var statearr_23490 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23490[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__);

(statearr_23490[(1)] = (1));

return statearr_23490;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1 = (function (state_23461){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_23461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e23491){if((e23491 instanceof Object)){
var ex__19167__auto__ = e23491;
var statearr_23492_23549 = state_23461;
(statearr_23492_23549[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23550 = state_23461;
state_23461 = G__23550;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = function(state_23461){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1.call(this,state_23461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__,jobs,results,process,async))
})();
var state__19186__auto__ = (function (){var statearr_23493 = f__19185__auto__.call(null);
(statearr_23493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_23493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__,jobs,results,process,async))
);

return c__19184__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args23551 = [];
var len__17863__auto___23554 = arguments.length;
var i__17864__auto___23555 = (0);
while(true){
if((i__17864__auto___23555 < len__17863__auto___23554)){
args23551.push((arguments[i__17864__auto___23555]));

var G__23556 = (i__17864__auto___23555 + (1));
i__17864__auto___23555 = G__23556;
continue;
} else {
}
break;
}

var G__23553 = args23551.length;
switch (G__23553) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23551.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args23558 = [];
var len__17863__auto___23561 = arguments.length;
var i__17864__auto___23562 = (0);
while(true){
if((i__17864__auto___23562 < len__17863__auto___23561)){
args23558.push((arguments[i__17864__auto___23562]));

var G__23563 = (i__17864__auto___23562 + (1));
i__17864__auto___23562 = G__23563;
continue;
} else {
}
break;
}

var G__23560 = args23558.length;
switch (G__23560) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23558.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args23565 = [];
var len__17863__auto___23618 = arguments.length;
var i__17864__auto___23619 = (0);
while(true){
if((i__17864__auto___23619 < len__17863__auto___23618)){
args23565.push((arguments[i__17864__auto___23619]));

var G__23620 = (i__17864__auto___23619 + (1));
i__17864__auto___23619 = G__23620;
continue;
} else {
}
break;
}

var G__23567 = args23565.length;
switch (G__23567) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23565.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19184__auto___23622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___23622,tc,fc){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___23622,tc,fc){
return (function (state_23593){
var state_val_23594 = (state_23593[(1)]);
if((state_val_23594 === (7))){
var inst_23589 = (state_23593[(2)]);
var state_23593__$1 = state_23593;
var statearr_23595_23623 = state_23593__$1;
(statearr_23595_23623[(2)] = inst_23589);

(statearr_23595_23623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23594 === (1))){
var state_23593__$1 = state_23593;
var statearr_23596_23624 = state_23593__$1;
(statearr_23596_23624[(2)] = null);

(statearr_23596_23624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23594 === (4))){
var inst_23570 = (state_23593[(7)]);
var inst_23570__$1 = (state_23593[(2)]);
var inst_23571 = (inst_23570__$1 == null);
var state_23593__$1 = (function (){var statearr_23597 = state_23593;
(statearr_23597[(7)] = inst_23570__$1);

return statearr_23597;
})();
if(cljs.core.truth_(inst_23571)){
var statearr_23598_23625 = state_23593__$1;
(statearr_23598_23625[(1)] = (5));

} else {
var statearr_23599_23626 = state_23593__$1;
(statearr_23599_23626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23594 === (13))){
var state_23593__$1 = state_23593;
var statearr_23600_23627 = state_23593__$1;
(statearr_23600_23627[(2)] = null);

(statearr_23600_23627[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23594 === (6))){
var inst_23570 = (state_23593[(7)]);
var inst_23576 = p.call(null,inst_23570);
var state_23593__$1 = state_23593;
if(cljs.core.truth_(inst_23576)){
var statearr_23601_23628 = state_23593__$1;
(statearr_23601_23628[(1)] = (9));

} else {
var statearr_23602_23629 = state_23593__$1;
(statearr_23602_23629[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23594 === (3))){
var inst_23591 = (state_23593[(2)]);
var state_23593__$1 = state_23593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23593__$1,inst_23591);
} else {
if((state_val_23594 === (12))){
var state_23593__$1 = state_23593;
var statearr_23603_23630 = state_23593__$1;
(statearr_23603_23630[(2)] = null);

(statearr_23603_23630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23594 === (2))){
var state_23593__$1 = state_23593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23593__$1,(4),ch);
} else {
if((state_val_23594 === (11))){
var inst_23570 = (state_23593[(7)]);
var inst_23580 = (state_23593[(2)]);
var state_23593__$1 = state_23593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23593__$1,(8),inst_23580,inst_23570);
} else {
if((state_val_23594 === (9))){
var state_23593__$1 = state_23593;
var statearr_23604_23631 = state_23593__$1;
(statearr_23604_23631[(2)] = tc);

(statearr_23604_23631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23594 === (5))){
var inst_23573 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23574 = cljs.core.async.close_BANG_.call(null,fc);
var state_23593__$1 = (function (){var statearr_23605 = state_23593;
(statearr_23605[(8)] = inst_23573);

return statearr_23605;
})();
var statearr_23606_23632 = state_23593__$1;
(statearr_23606_23632[(2)] = inst_23574);

(statearr_23606_23632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23594 === (14))){
var inst_23587 = (state_23593[(2)]);
var state_23593__$1 = state_23593;
var statearr_23607_23633 = state_23593__$1;
(statearr_23607_23633[(2)] = inst_23587);

(statearr_23607_23633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23594 === (10))){
var state_23593__$1 = state_23593;
var statearr_23608_23634 = state_23593__$1;
(statearr_23608_23634[(2)] = fc);

(statearr_23608_23634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23594 === (8))){
var inst_23582 = (state_23593[(2)]);
var state_23593__$1 = state_23593;
if(cljs.core.truth_(inst_23582)){
var statearr_23609_23635 = state_23593__$1;
(statearr_23609_23635[(1)] = (12));

} else {
var statearr_23610_23636 = state_23593__$1;
(statearr_23610_23636[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto___23622,tc,fc))
;
return ((function (switch__19163__auto__,c__19184__auto___23622,tc,fc){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_23614 = [null,null,null,null,null,null,null,null,null];
(statearr_23614[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_23614[(1)] = (1));

return statearr_23614;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_23593){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_23593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e23615){if((e23615 instanceof Object)){
var ex__19167__auto__ = e23615;
var statearr_23616_23637 = state_23593;
(statearr_23616_23637[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23638 = state_23593;
state_23593 = G__23638;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_23593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_23593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___23622,tc,fc))
})();
var state__19186__auto__ = (function (){var statearr_23617 = f__19185__auto__.call(null);
(statearr_23617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___23622);

return statearr_23617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___23622,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__){
return (function (state_23702){
var state_val_23703 = (state_23702[(1)]);
if((state_val_23703 === (7))){
var inst_23698 = (state_23702[(2)]);
var state_23702__$1 = state_23702;
var statearr_23704_23725 = state_23702__$1;
(statearr_23704_23725[(2)] = inst_23698);

(statearr_23704_23725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23703 === (1))){
var inst_23682 = init;
var state_23702__$1 = (function (){var statearr_23705 = state_23702;
(statearr_23705[(7)] = inst_23682);

return statearr_23705;
})();
var statearr_23706_23726 = state_23702__$1;
(statearr_23706_23726[(2)] = null);

(statearr_23706_23726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23703 === (4))){
var inst_23685 = (state_23702[(8)]);
var inst_23685__$1 = (state_23702[(2)]);
var inst_23686 = (inst_23685__$1 == null);
var state_23702__$1 = (function (){var statearr_23707 = state_23702;
(statearr_23707[(8)] = inst_23685__$1);

return statearr_23707;
})();
if(cljs.core.truth_(inst_23686)){
var statearr_23708_23727 = state_23702__$1;
(statearr_23708_23727[(1)] = (5));

} else {
var statearr_23709_23728 = state_23702__$1;
(statearr_23709_23728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23703 === (6))){
var inst_23682 = (state_23702[(7)]);
var inst_23685 = (state_23702[(8)]);
var inst_23689 = (state_23702[(9)]);
var inst_23689__$1 = f.call(null,inst_23682,inst_23685);
var inst_23690 = cljs.core.reduced_QMARK_.call(null,inst_23689__$1);
var state_23702__$1 = (function (){var statearr_23710 = state_23702;
(statearr_23710[(9)] = inst_23689__$1);

return statearr_23710;
})();
if(inst_23690){
var statearr_23711_23729 = state_23702__$1;
(statearr_23711_23729[(1)] = (8));

} else {
var statearr_23712_23730 = state_23702__$1;
(statearr_23712_23730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23703 === (3))){
var inst_23700 = (state_23702[(2)]);
var state_23702__$1 = state_23702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23702__$1,inst_23700);
} else {
if((state_val_23703 === (2))){
var state_23702__$1 = state_23702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23702__$1,(4),ch);
} else {
if((state_val_23703 === (9))){
var inst_23689 = (state_23702[(9)]);
var inst_23682 = inst_23689;
var state_23702__$1 = (function (){var statearr_23713 = state_23702;
(statearr_23713[(7)] = inst_23682);

return statearr_23713;
})();
var statearr_23714_23731 = state_23702__$1;
(statearr_23714_23731[(2)] = null);

(statearr_23714_23731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23703 === (5))){
var inst_23682 = (state_23702[(7)]);
var state_23702__$1 = state_23702;
var statearr_23715_23732 = state_23702__$1;
(statearr_23715_23732[(2)] = inst_23682);

(statearr_23715_23732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23703 === (10))){
var inst_23696 = (state_23702[(2)]);
var state_23702__$1 = state_23702;
var statearr_23716_23733 = state_23702__$1;
(statearr_23716_23733[(2)] = inst_23696);

(statearr_23716_23733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23703 === (8))){
var inst_23689 = (state_23702[(9)]);
var inst_23692 = cljs.core.deref.call(null,inst_23689);
var state_23702__$1 = state_23702;
var statearr_23717_23734 = state_23702__$1;
(statearr_23717_23734[(2)] = inst_23692);

(statearr_23717_23734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto__))
;
return ((function (switch__19163__auto__,c__19184__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19164__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19164__auto____0 = (function (){
var statearr_23721 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23721[(0)] = cljs$core$async$reduce_$_state_machine__19164__auto__);

(statearr_23721[(1)] = (1));

return statearr_23721;
});
var cljs$core$async$reduce_$_state_machine__19164__auto____1 = (function (state_23702){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_23702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e23722){if((e23722 instanceof Object)){
var ex__19167__auto__ = e23722;
var statearr_23723_23735 = state_23702;
(statearr_23723_23735[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23736 = state_23702;
state_23702 = G__23736;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19164__auto__ = function(state_23702){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19164__auto____1.call(this,state_23702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19164__auto____0;
cljs$core$async$reduce_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19164__auto____1;
return cljs$core$async$reduce_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__))
})();
var state__19186__auto__ = (function (){var statearr_23724 = f__19185__auto__.call(null);
(statearr_23724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_23724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__))
);

return c__19184__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args23737 = [];
var len__17863__auto___23789 = arguments.length;
var i__17864__auto___23790 = (0);
while(true){
if((i__17864__auto___23790 < len__17863__auto___23789)){
args23737.push((arguments[i__17864__auto___23790]));

var G__23791 = (i__17864__auto___23790 + (1));
i__17864__auto___23790 = G__23791;
continue;
} else {
}
break;
}

var G__23739 = args23737.length;
switch (G__23739) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23737.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__){
return (function (state_23764){
var state_val_23765 = (state_23764[(1)]);
if((state_val_23765 === (7))){
var inst_23746 = (state_23764[(2)]);
var state_23764__$1 = state_23764;
var statearr_23766_23793 = state_23764__$1;
(statearr_23766_23793[(2)] = inst_23746);

(statearr_23766_23793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23765 === (1))){
var inst_23740 = cljs.core.seq.call(null,coll);
var inst_23741 = inst_23740;
var state_23764__$1 = (function (){var statearr_23767 = state_23764;
(statearr_23767[(7)] = inst_23741);

return statearr_23767;
})();
var statearr_23768_23794 = state_23764__$1;
(statearr_23768_23794[(2)] = null);

(statearr_23768_23794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23765 === (4))){
var inst_23741 = (state_23764[(7)]);
var inst_23744 = cljs.core.first.call(null,inst_23741);
var state_23764__$1 = state_23764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23764__$1,(7),ch,inst_23744);
} else {
if((state_val_23765 === (13))){
var inst_23758 = (state_23764[(2)]);
var state_23764__$1 = state_23764;
var statearr_23769_23795 = state_23764__$1;
(statearr_23769_23795[(2)] = inst_23758);

(statearr_23769_23795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23765 === (6))){
var inst_23749 = (state_23764[(2)]);
var state_23764__$1 = state_23764;
if(cljs.core.truth_(inst_23749)){
var statearr_23770_23796 = state_23764__$1;
(statearr_23770_23796[(1)] = (8));

} else {
var statearr_23771_23797 = state_23764__$1;
(statearr_23771_23797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23765 === (3))){
var inst_23762 = (state_23764[(2)]);
var state_23764__$1 = state_23764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23764__$1,inst_23762);
} else {
if((state_val_23765 === (12))){
var state_23764__$1 = state_23764;
var statearr_23772_23798 = state_23764__$1;
(statearr_23772_23798[(2)] = null);

(statearr_23772_23798[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23765 === (2))){
var inst_23741 = (state_23764[(7)]);
var state_23764__$1 = state_23764;
if(cljs.core.truth_(inst_23741)){
var statearr_23773_23799 = state_23764__$1;
(statearr_23773_23799[(1)] = (4));

} else {
var statearr_23774_23800 = state_23764__$1;
(statearr_23774_23800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23765 === (11))){
var inst_23755 = cljs.core.async.close_BANG_.call(null,ch);
var state_23764__$1 = state_23764;
var statearr_23775_23801 = state_23764__$1;
(statearr_23775_23801[(2)] = inst_23755);

(statearr_23775_23801[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23765 === (9))){
var state_23764__$1 = state_23764;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23776_23802 = state_23764__$1;
(statearr_23776_23802[(1)] = (11));

} else {
var statearr_23777_23803 = state_23764__$1;
(statearr_23777_23803[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23765 === (5))){
var inst_23741 = (state_23764[(7)]);
var state_23764__$1 = state_23764;
var statearr_23778_23804 = state_23764__$1;
(statearr_23778_23804[(2)] = inst_23741);

(statearr_23778_23804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23765 === (10))){
var inst_23760 = (state_23764[(2)]);
var state_23764__$1 = state_23764;
var statearr_23779_23805 = state_23764__$1;
(statearr_23779_23805[(2)] = inst_23760);

(statearr_23779_23805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23765 === (8))){
var inst_23741 = (state_23764[(7)]);
var inst_23751 = cljs.core.next.call(null,inst_23741);
var inst_23741__$1 = inst_23751;
var state_23764__$1 = (function (){var statearr_23780 = state_23764;
(statearr_23780[(7)] = inst_23741__$1);

return statearr_23780;
})();
var statearr_23781_23806 = state_23764__$1;
(statearr_23781_23806[(2)] = null);

(statearr_23781_23806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto__))
;
return ((function (switch__19163__auto__,c__19184__auto__){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_23785 = [null,null,null,null,null,null,null,null];
(statearr_23785[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_23785[(1)] = (1));

return statearr_23785;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_23764){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_23764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e23786){if((e23786 instanceof Object)){
var ex__19167__auto__ = e23786;
var statearr_23787_23807 = state_23764;
(statearr_23787_23807[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23808 = state_23764;
state_23764 = G__23808;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_23764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_23764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__))
})();
var state__19186__auto__ = (function (){var statearr_23788 = f__19185__auto__.call(null);
(statearr_23788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_23788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__))
);

return c__19184__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17460__auto__ = (((_ == null))?null:_);
var m__17461__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,_);
} else {
var m__17461__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17461__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m);
} else {
var m__17461__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24030 = (function (mult,ch,cs,meta24031){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24031 = meta24031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24032,meta24031__$1){
var self__ = this;
var _24032__$1 = this;
return (new cljs.core.async.t_cljs$core$async24030(self__.mult,self__.ch,self__.cs,meta24031__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24032){
var self__ = this;
var _24032__$1 = this;
return self__.meta24031;
});})(cs))
;

cljs.core.async.t_cljs$core$async24030.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24030.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24030.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24030.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24030.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24030.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24030.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24031","meta24031",151439468,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24030";

cljs.core.async.t_cljs$core$async24030.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async24030");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24030 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24030(mult__$1,ch__$1,cs__$1,meta24031){
return (new cljs.core.async.t_cljs$core$async24030(mult__$1,ch__$1,cs__$1,meta24031));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24030(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19184__auto___24251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___24251,cs,m,dchan,dctr,done){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___24251,cs,m,dchan,dctr,done){
return (function (state_24163){
var state_val_24164 = (state_24163[(1)]);
if((state_val_24164 === (7))){
var inst_24159 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24165_24252 = state_24163__$1;
(statearr_24165_24252[(2)] = inst_24159);

(statearr_24165_24252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (20))){
var inst_24064 = (state_24163[(7)]);
var inst_24074 = cljs.core.first.call(null,inst_24064);
var inst_24075 = cljs.core.nth.call(null,inst_24074,(0),null);
var inst_24076 = cljs.core.nth.call(null,inst_24074,(1),null);
var state_24163__$1 = (function (){var statearr_24166 = state_24163;
(statearr_24166[(8)] = inst_24075);

return statearr_24166;
})();
if(cljs.core.truth_(inst_24076)){
var statearr_24167_24253 = state_24163__$1;
(statearr_24167_24253[(1)] = (22));

} else {
var statearr_24168_24254 = state_24163__$1;
(statearr_24168_24254[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (27))){
var inst_24035 = (state_24163[(9)]);
var inst_24111 = (state_24163[(10)]);
var inst_24106 = (state_24163[(11)]);
var inst_24104 = (state_24163[(12)]);
var inst_24111__$1 = cljs.core._nth.call(null,inst_24104,inst_24106);
var inst_24112 = cljs.core.async.put_BANG_.call(null,inst_24111__$1,inst_24035,done);
var state_24163__$1 = (function (){var statearr_24169 = state_24163;
(statearr_24169[(10)] = inst_24111__$1);

return statearr_24169;
})();
if(cljs.core.truth_(inst_24112)){
var statearr_24170_24255 = state_24163__$1;
(statearr_24170_24255[(1)] = (30));

} else {
var statearr_24171_24256 = state_24163__$1;
(statearr_24171_24256[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (1))){
var state_24163__$1 = state_24163;
var statearr_24172_24257 = state_24163__$1;
(statearr_24172_24257[(2)] = null);

(statearr_24172_24257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (24))){
var inst_24064 = (state_24163[(7)]);
var inst_24081 = (state_24163[(2)]);
var inst_24082 = cljs.core.next.call(null,inst_24064);
var inst_24044 = inst_24082;
var inst_24045 = null;
var inst_24046 = (0);
var inst_24047 = (0);
var state_24163__$1 = (function (){var statearr_24173 = state_24163;
(statearr_24173[(13)] = inst_24046);

(statearr_24173[(14)] = inst_24081);

(statearr_24173[(15)] = inst_24044);

(statearr_24173[(16)] = inst_24045);

(statearr_24173[(17)] = inst_24047);

return statearr_24173;
})();
var statearr_24174_24258 = state_24163__$1;
(statearr_24174_24258[(2)] = null);

(statearr_24174_24258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (39))){
var state_24163__$1 = state_24163;
var statearr_24178_24259 = state_24163__$1;
(statearr_24178_24259[(2)] = null);

(statearr_24178_24259[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (4))){
var inst_24035 = (state_24163[(9)]);
var inst_24035__$1 = (state_24163[(2)]);
var inst_24036 = (inst_24035__$1 == null);
var state_24163__$1 = (function (){var statearr_24179 = state_24163;
(statearr_24179[(9)] = inst_24035__$1);

return statearr_24179;
})();
if(cljs.core.truth_(inst_24036)){
var statearr_24180_24260 = state_24163__$1;
(statearr_24180_24260[(1)] = (5));

} else {
var statearr_24181_24261 = state_24163__$1;
(statearr_24181_24261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (15))){
var inst_24046 = (state_24163[(13)]);
var inst_24044 = (state_24163[(15)]);
var inst_24045 = (state_24163[(16)]);
var inst_24047 = (state_24163[(17)]);
var inst_24060 = (state_24163[(2)]);
var inst_24061 = (inst_24047 + (1));
var tmp24175 = inst_24046;
var tmp24176 = inst_24044;
var tmp24177 = inst_24045;
var inst_24044__$1 = tmp24176;
var inst_24045__$1 = tmp24177;
var inst_24046__$1 = tmp24175;
var inst_24047__$1 = inst_24061;
var state_24163__$1 = (function (){var statearr_24182 = state_24163;
(statearr_24182[(18)] = inst_24060);

(statearr_24182[(13)] = inst_24046__$1);

(statearr_24182[(15)] = inst_24044__$1);

(statearr_24182[(16)] = inst_24045__$1);

(statearr_24182[(17)] = inst_24047__$1);

return statearr_24182;
})();
var statearr_24183_24262 = state_24163__$1;
(statearr_24183_24262[(2)] = null);

(statearr_24183_24262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (21))){
var inst_24085 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24187_24263 = state_24163__$1;
(statearr_24187_24263[(2)] = inst_24085);

(statearr_24187_24263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (31))){
var inst_24111 = (state_24163[(10)]);
var inst_24115 = done.call(null,null);
var inst_24116 = cljs.core.async.untap_STAR_.call(null,m,inst_24111);
var state_24163__$1 = (function (){var statearr_24188 = state_24163;
(statearr_24188[(19)] = inst_24115);

return statearr_24188;
})();
var statearr_24189_24264 = state_24163__$1;
(statearr_24189_24264[(2)] = inst_24116);

(statearr_24189_24264[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (32))){
var inst_24103 = (state_24163[(20)]);
var inst_24105 = (state_24163[(21)]);
var inst_24106 = (state_24163[(11)]);
var inst_24104 = (state_24163[(12)]);
var inst_24118 = (state_24163[(2)]);
var inst_24119 = (inst_24106 + (1));
var tmp24184 = inst_24103;
var tmp24185 = inst_24105;
var tmp24186 = inst_24104;
var inst_24103__$1 = tmp24184;
var inst_24104__$1 = tmp24186;
var inst_24105__$1 = tmp24185;
var inst_24106__$1 = inst_24119;
var state_24163__$1 = (function (){var statearr_24190 = state_24163;
(statearr_24190[(20)] = inst_24103__$1);

(statearr_24190[(21)] = inst_24105__$1);

(statearr_24190[(11)] = inst_24106__$1);

(statearr_24190[(12)] = inst_24104__$1);

(statearr_24190[(22)] = inst_24118);

return statearr_24190;
})();
var statearr_24191_24265 = state_24163__$1;
(statearr_24191_24265[(2)] = null);

(statearr_24191_24265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (40))){
var inst_24131 = (state_24163[(23)]);
var inst_24135 = done.call(null,null);
var inst_24136 = cljs.core.async.untap_STAR_.call(null,m,inst_24131);
var state_24163__$1 = (function (){var statearr_24192 = state_24163;
(statearr_24192[(24)] = inst_24135);

return statearr_24192;
})();
var statearr_24193_24266 = state_24163__$1;
(statearr_24193_24266[(2)] = inst_24136);

(statearr_24193_24266[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (33))){
var inst_24122 = (state_24163[(25)]);
var inst_24124 = cljs.core.chunked_seq_QMARK_.call(null,inst_24122);
var state_24163__$1 = state_24163;
if(inst_24124){
var statearr_24194_24267 = state_24163__$1;
(statearr_24194_24267[(1)] = (36));

} else {
var statearr_24195_24268 = state_24163__$1;
(statearr_24195_24268[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (13))){
var inst_24054 = (state_24163[(26)]);
var inst_24057 = cljs.core.async.close_BANG_.call(null,inst_24054);
var state_24163__$1 = state_24163;
var statearr_24196_24269 = state_24163__$1;
(statearr_24196_24269[(2)] = inst_24057);

(statearr_24196_24269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (22))){
var inst_24075 = (state_24163[(8)]);
var inst_24078 = cljs.core.async.close_BANG_.call(null,inst_24075);
var state_24163__$1 = state_24163;
var statearr_24197_24270 = state_24163__$1;
(statearr_24197_24270[(2)] = inst_24078);

(statearr_24197_24270[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (36))){
var inst_24122 = (state_24163[(25)]);
var inst_24126 = cljs.core.chunk_first.call(null,inst_24122);
var inst_24127 = cljs.core.chunk_rest.call(null,inst_24122);
var inst_24128 = cljs.core.count.call(null,inst_24126);
var inst_24103 = inst_24127;
var inst_24104 = inst_24126;
var inst_24105 = inst_24128;
var inst_24106 = (0);
var state_24163__$1 = (function (){var statearr_24198 = state_24163;
(statearr_24198[(20)] = inst_24103);

(statearr_24198[(21)] = inst_24105);

(statearr_24198[(11)] = inst_24106);

(statearr_24198[(12)] = inst_24104);

return statearr_24198;
})();
var statearr_24199_24271 = state_24163__$1;
(statearr_24199_24271[(2)] = null);

(statearr_24199_24271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (41))){
var inst_24122 = (state_24163[(25)]);
var inst_24138 = (state_24163[(2)]);
var inst_24139 = cljs.core.next.call(null,inst_24122);
var inst_24103 = inst_24139;
var inst_24104 = null;
var inst_24105 = (0);
var inst_24106 = (0);
var state_24163__$1 = (function (){var statearr_24200 = state_24163;
(statearr_24200[(20)] = inst_24103);

(statearr_24200[(27)] = inst_24138);

(statearr_24200[(21)] = inst_24105);

(statearr_24200[(11)] = inst_24106);

(statearr_24200[(12)] = inst_24104);

return statearr_24200;
})();
var statearr_24201_24272 = state_24163__$1;
(statearr_24201_24272[(2)] = null);

(statearr_24201_24272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (43))){
var state_24163__$1 = state_24163;
var statearr_24202_24273 = state_24163__$1;
(statearr_24202_24273[(2)] = null);

(statearr_24202_24273[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (29))){
var inst_24147 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24203_24274 = state_24163__$1;
(statearr_24203_24274[(2)] = inst_24147);

(statearr_24203_24274[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (44))){
var inst_24156 = (state_24163[(2)]);
var state_24163__$1 = (function (){var statearr_24204 = state_24163;
(statearr_24204[(28)] = inst_24156);

return statearr_24204;
})();
var statearr_24205_24275 = state_24163__$1;
(statearr_24205_24275[(2)] = null);

(statearr_24205_24275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (6))){
var inst_24095 = (state_24163[(29)]);
var inst_24094 = cljs.core.deref.call(null,cs);
var inst_24095__$1 = cljs.core.keys.call(null,inst_24094);
var inst_24096 = cljs.core.count.call(null,inst_24095__$1);
var inst_24097 = cljs.core.reset_BANG_.call(null,dctr,inst_24096);
var inst_24102 = cljs.core.seq.call(null,inst_24095__$1);
var inst_24103 = inst_24102;
var inst_24104 = null;
var inst_24105 = (0);
var inst_24106 = (0);
var state_24163__$1 = (function (){var statearr_24206 = state_24163;
(statearr_24206[(29)] = inst_24095__$1);

(statearr_24206[(20)] = inst_24103);

(statearr_24206[(21)] = inst_24105);

(statearr_24206[(30)] = inst_24097);

(statearr_24206[(11)] = inst_24106);

(statearr_24206[(12)] = inst_24104);

return statearr_24206;
})();
var statearr_24207_24276 = state_24163__$1;
(statearr_24207_24276[(2)] = null);

(statearr_24207_24276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (28))){
var inst_24103 = (state_24163[(20)]);
var inst_24122 = (state_24163[(25)]);
var inst_24122__$1 = cljs.core.seq.call(null,inst_24103);
var state_24163__$1 = (function (){var statearr_24208 = state_24163;
(statearr_24208[(25)] = inst_24122__$1);

return statearr_24208;
})();
if(inst_24122__$1){
var statearr_24209_24277 = state_24163__$1;
(statearr_24209_24277[(1)] = (33));

} else {
var statearr_24210_24278 = state_24163__$1;
(statearr_24210_24278[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (25))){
var inst_24105 = (state_24163[(21)]);
var inst_24106 = (state_24163[(11)]);
var inst_24108 = (inst_24106 < inst_24105);
var inst_24109 = inst_24108;
var state_24163__$1 = state_24163;
if(cljs.core.truth_(inst_24109)){
var statearr_24211_24279 = state_24163__$1;
(statearr_24211_24279[(1)] = (27));

} else {
var statearr_24212_24280 = state_24163__$1;
(statearr_24212_24280[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (34))){
var state_24163__$1 = state_24163;
var statearr_24213_24281 = state_24163__$1;
(statearr_24213_24281[(2)] = null);

(statearr_24213_24281[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (17))){
var state_24163__$1 = state_24163;
var statearr_24214_24282 = state_24163__$1;
(statearr_24214_24282[(2)] = null);

(statearr_24214_24282[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (3))){
var inst_24161 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24163__$1,inst_24161);
} else {
if((state_val_24164 === (12))){
var inst_24090 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24215_24283 = state_24163__$1;
(statearr_24215_24283[(2)] = inst_24090);

(statearr_24215_24283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (2))){
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24163__$1,(4),ch);
} else {
if((state_val_24164 === (23))){
var state_24163__$1 = state_24163;
var statearr_24216_24284 = state_24163__$1;
(statearr_24216_24284[(2)] = null);

(statearr_24216_24284[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (35))){
var inst_24145 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24217_24285 = state_24163__$1;
(statearr_24217_24285[(2)] = inst_24145);

(statearr_24217_24285[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (19))){
var inst_24064 = (state_24163[(7)]);
var inst_24068 = cljs.core.chunk_first.call(null,inst_24064);
var inst_24069 = cljs.core.chunk_rest.call(null,inst_24064);
var inst_24070 = cljs.core.count.call(null,inst_24068);
var inst_24044 = inst_24069;
var inst_24045 = inst_24068;
var inst_24046 = inst_24070;
var inst_24047 = (0);
var state_24163__$1 = (function (){var statearr_24218 = state_24163;
(statearr_24218[(13)] = inst_24046);

(statearr_24218[(15)] = inst_24044);

(statearr_24218[(16)] = inst_24045);

(statearr_24218[(17)] = inst_24047);

return statearr_24218;
})();
var statearr_24219_24286 = state_24163__$1;
(statearr_24219_24286[(2)] = null);

(statearr_24219_24286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (11))){
var inst_24044 = (state_24163[(15)]);
var inst_24064 = (state_24163[(7)]);
var inst_24064__$1 = cljs.core.seq.call(null,inst_24044);
var state_24163__$1 = (function (){var statearr_24220 = state_24163;
(statearr_24220[(7)] = inst_24064__$1);

return statearr_24220;
})();
if(inst_24064__$1){
var statearr_24221_24287 = state_24163__$1;
(statearr_24221_24287[(1)] = (16));

} else {
var statearr_24222_24288 = state_24163__$1;
(statearr_24222_24288[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (9))){
var inst_24092 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24223_24289 = state_24163__$1;
(statearr_24223_24289[(2)] = inst_24092);

(statearr_24223_24289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (5))){
var inst_24042 = cljs.core.deref.call(null,cs);
var inst_24043 = cljs.core.seq.call(null,inst_24042);
var inst_24044 = inst_24043;
var inst_24045 = null;
var inst_24046 = (0);
var inst_24047 = (0);
var state_24163__$1 = (function (){var statearr_24224 = state_24163;
(statearr_24224[(13)] = inst_24046);

(statearr_24224[(15)] = inst_24044);

(statearr_24224[(16)] = inst_24045);

(statearr_24224[(17)] = inst_24047);

return statearr_24224;
})();
var statearr_24225_24290 = state_24163__$1;
(statearr_24225_24290[(2)] = null);

(statearr_24225_24290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (14))){
var state_24163__$1 = state_24163;
var statearr_24226_24291 = state_24163__$1;
(statearr_24226_24291[(2)] = null);

(statearr_24226_24291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (45))){
var inst_24153 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24227_24292 = state_24163__$1;
(statearr_24227_24292[(2)] = inst_24153);

(statearr_24227_24292[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (26))){
var inst_24095 = (state_24163[(29)]);
var inst_24149 = (state_24163[(2)]);
var inst_24150 = cljs.core.seq.call(null,inst_24095);
var state_24163__$1 = (function (){var statearr_24228 = state_24163;
(statearr_24228[(31)] = inst_24149);

return statearr_24228;
})();
if(inst_24150){
var statearr_24229_24293 = state_24163__$1;
(statearr_24229_24293[(1)] = (42));

} else {
var statearr_24230_24294 = state_24163__$1;
(statearr_24230_24294[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (16))){
var inst_24064 = (state_24163[(7)]);
var inst_24066 = cljs.core.chunked_seq_QMARK_.call(null,inst_24064);
var state_24163__$1 = state_24163;
if(inst_24066){
var statearr_24231_24295 = state_24163__$1;
(statearr_24231_24295[(1)] = (19));

} else {
var statearr_24232_24296 = state_24163__$1;
(statearr_24232_24296[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (38))){
var inst_24142 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24233_24297 = state_24163__$1;
(statearr_24233_24297[(2)] = inst_24142);

(statearr_24233_24297[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (30))){
var state_24163__$1 = state_24163;
var statearr_24234_24298 = state_24163__$1;
(statearr_24234_24298[(2)] = null);

(statearr_24234_24298[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (10))){
var inst_24045 = (state_24163[(16)]);
var inst_24047 = (state_24163[(17)]);
var inst_24053 = cljs.core._nth.call(null,inst_24045,inst_24047);
var inst_24054 = cljs.core.nth.call(null,inst_24053,(0),null);
var inst_24055 = cljs.core.nth.call(null,inst_24053,(1),null);
var state_24163__$1 = (function (){var statearr_24235 = state_24163;
(statearr_24235[(26)] = inst_24054);

return statearr_24235;
})();
if(cljs.core.truth_(inst_24055)){
var statearr_24236_24299 = state_24163__$1;
(statearr_24236_24299[(1)] = (13));

} else {
var statearr_24237_24300 = state_24163__$1;
(statearr_24237_24300[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (18))){
var inst_24088 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24238_24301 = state_24163__$1;
(statearr_24238_24301[(2)] = inst_24088);

(statearr_24238_24301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (42))){
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24163__$1,(45),dchan);
} else {
if((state_val_24164 === (37))){
var inst_24131 = (state_24163[(23)]);
var inst_24035 = (state_24163[(9)]);
var inst_24122 = (state_24163[(25)]);
var inst_24131__$1 = cljs.core.first.call(null,inst_24122);
var inst_24132 = cljs.core.async.put_BANG_.call(null,inst_24131__$1,inst_24035,done);
var state_24163__$1 = (function (){var statearr_24239 = state_24163;
(statearr_24239[(23)] = inst_24131__$1);

return statearr_24239;
})();
if(cljs.core.truth_(inst_24132)){
var statearr_24240_24302 = state_24163__$1;
(statearr_24240_24302[(1)] = (39));

} else {
var statearr_24241_24303 = state_24163__$1;
(statearr_24241_24303[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (8))){
var inst_24046 = (state_24163[(13)]);
var inst_24047 = (state_24163[(17)]);
var inst_24049 = (inst_24047 < inst_24046);
var inst_24050 = inst_24049;
var state_24163__$1 = state_24163;
if(cljs.core.truth_(inst_24050)){
var statearr_24242_24304 = state_24163__$1;
(statearr_24242_24304[(1)] = (10));

} else {
var statearr_24243_24305 = state_24163__$1;
(statearr_24243_24305[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto___24251,cs,m,dchan,dctr,done))
;
return ((function (switch__19163__auto__,c__19184__auto___24251,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19164__auto__ = null;
var cljs$core$async$mult_$_state_machine__19164__auto____0 = (function (){
var statearr_24247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24247[(0)] = cljs$core$async$mult_$_state_machine__19164__auto__);

(statearr_24247[(1)] = (1));

return statearr_24247;
});
var cljs$core$async$mult_$_state_machine__19164__auto____1 = (function (state_24163){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_24163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e24248){if((e24248 instanceof Object)){
var ex__19167__auto__ = e24248;
var statearr_24249_24306 = state_24163;
(statearr_24249_24306[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24307 = state_24163;
state_24163 = G__24307;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19164__auto__ = function(state_24163){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19164__auto____1.call(this,state_24163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19164__auto____0;
cljs$core$async$mult_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19164__auto____1;
return cljs$core$async$mult_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___24251,cs,m,dchan,dctr,done))
})();
var state__19186__auto__ = (function (){var statearr_24250 = f__19185__auto__.call(null);
(statearr_24250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___24251);

return statearr_24250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___24251,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args24308 = [];
var len__17863__auto___24311 = arguments.length;
var i__17864__auto___24312 = (0);
while(true){
if((i__17864__auto___24312 < len__17863__auto___24311)){
args24308.push((arguments[i__17864__auto___24312]));

var G__24313 = (i__17864__auto___24312 + (1));
i__17864__auto___24312 = G__24313;
continue;
} else {
}
break;
}

var G__24310 = args24308.length;
switch (G__24310) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24308.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m);
} else {
var m__17461__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,state_map);
} else {
var m__17461__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,mode);
} else {
var m__17461__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___24325 = arguments.length;
var i__17864__auto___24326 = (0);
while(true){
if((i__17864__auto___24326 < len__17863__auto___24325)){
args__17870__auto__.push((arguments[i__17864__auto___24326]));

var G__24327 = (i__17864__auto___24326 + (1));
i__17864__auto___24326 = G__24327;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((3) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17871__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24319){
var map__24320 = p__24319;
var map__24320__$1 = ((((!((map__24320 == null)))?((((map__24320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24320):map__24320);
var opts = map__24320__$1;
var statearr_24322_24328 = state;
(statearr_24322_24328[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__24320,map__24320__$1,opts){
return (function (val){
var statearr_24323_24329 = state;
(statearr_24323_24329[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24320,map__24320__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_24324_24330 = state;
(statearr_24324_24330[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24315){
var G__24316 = cljs.core.first.call(null,seq24315);
var seq24315__$1 = cljs.core.next.call(null,seq24315);
var G__24317 = cljs.core.first.call(null,seq24315__$1);
var seq24315__$2 = cljs.core.next.call(null,seq24315__$1);
var G__24318 = cljs.core.first.call(null,seq24315__$2);
var seq24315__$3 = cljs.core.next.call(null,seq24315__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24316,G__24317,G__24318,seq24315__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24494 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24494 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24495){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24495 = meta24495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24496,meta24495__$1){
var self__ = this;
var _24496__$1 = this;
return (new cljs.core.async.t_cljs$core$async24494(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24495__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24496){
var self__ = this;
var _24496__$1 = this;
return self__.meta24495;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24494.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24494.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24494.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24494.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24494.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24494.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24494.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24494.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24494.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24495","meta24495",-752545506,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24494";

cljs.core.async.t_cljs$core$async24494.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async24494");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24494 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24494(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24495){
return (new cljs.core.async.t_cljs$core$async24494(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24495));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24494(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19184__auto___24657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___24657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___24657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24594){
var state_val_24595 = (state_24594[(1)]);
if((state_val_24595 === (7))){
var inst_24512 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
var statearr_24596_24658 = state_24594__$1;
(statearr_24596_24658[(2)] = inst_24512);

(statearr_24596_24658[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (20))){
var inst_24524 = (state_24594[(7)]);
var state_24594__$1 = state_24594;
var statearr_24597_24659 = state_24594__$1;
(statearr_24597_24659[(2)] = inst_24524);

(statearr_24597_24659[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (27))){
var state_24594__$1 = state_24594;
var statearr_24598_24660 = state_24594__$1;
(statearr_24598_24660[(2)] = null);

(statearr_24598_24660[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (1))){
var inst_24500 = (state_24594[(8)]);
var inst_24500__$1 = calc_state.call(null);
var inst_24502 = (inst_24500__$1 == null);
var inst_24503 = cljs.core.not.call(null,inst_24502);
var state_24594__$1 = (function (){var statearr_24599 = state_24594;
(statearr_24599[(8)] = inst_24500__$1);

return statearr_24599;
})();
if(inst_24503){
var statearr_24600_24661 = state_24594__$1;
(statearr_24600_24661[(1)] = (2));

} else {
var statearr_24601_24662 = state_24594__$1;
(statearr_24601_24662[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (24))){
var inst_24554 = (state_24594[(9)]);
var inst_24568 = (state_24594[(10)]);
var inst_24547 = (state_24594[(11)]);
var inst_24568__$1 = inst_24547.call(null,inst_24554);
var state_24594__$1 = (function (){var statearr_24602 = state_24594;
(statearr_24602[(10)] = inst_24568__$1);

return statearr_24602;
})();
if(cljs.core.truth_(inst_24568__$1)){
var statearr_24603_24663 = state_24594__$1;
(statearr_24603_24663[(1)] = (29));

} else {
var statearr_24604_24664 = state_24594__$1;
(statearr_24604_24664[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (4))){
var inst_24515 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
if(cljs.core.truth_(inst_24515)){
var statearr_24605_24665 = state_24594__$1;
(statearr_24605_24665[(1)] = (8));

} else {
var statearr_24606_24666 = state_24594__$1;
(statearr_24606_24666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (15))){
var inst_24541 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
if(cljs.core.truth_(inst_24541)){
var statearr_24607_24667 = state_24594__$1;
(statearr_24607_24667[(1)] = (19));

} else {
var statearr_24608_24668 = state_24594__$1;
(statearr_24608_24668[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (21))){
var inst_24546 = (state_24594[(12)]);
var inst_24546__$1 = (state_24594[(2)]);
var inst_24547 = cljs.core.get.call(null,inst_24546__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24548 = cljs.core.get.call(null,inst_24546__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24549 = cljs.core.get.call(null,inst_24546__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24594__$1 = (function (){var statearr_24609 = state_24594;
(statearr_24609[(12)] = inst_24546__$1);

(statearr_24609[(11)] = inst_24547);

(statearr_24609[(13)] = inst_24548);

return statearr_24609;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24594__$1,(22),inst_24549);
} else {
if((state_val_24595 === (31))){
var inst_24576 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
if(cljs.core.truth_(inst_24576)){
var statearr_24610_24669 = state_24594__$1;
(statearr_24610_24669[(1)] = (32));

} else {
var statearr_24611_24670 = state_24594__$1;
(statearr_24611_24670[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (32))){
var inst_24553 = (state_24594[(14)]);
var state_24594__$1 = state_24594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24594__$1,(35),out,inst_24553);
} else {
if((state_val_24595 === (33))){
var inst_24546 = (state_24594[(12)]);
var inst_24524 = inst_24546;
var state_24594__$1 = (function (){var statearr_24612 = state_24594;
(statearr_24612[(7)] = inst_24524);

return statearr_24612;
})();
var statearr_24613_24671 = state_24594__$1;
(statearr_24613_24671[(2)] = null);

(statearr_24613_24671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (13))){
var inst_24524 = (state_24594[(7)]);
var inst_24531 = inst_24524.cljs$lang$protocol_mask$partition0$;
var inst_24532 = (inst_24531 & (64));
var inst_24533 = inst_24524.cljs$core$ISeq$;
var inst_24534 = (inst_24532) || (inst_24533);
var state_24594__$1 = state_24594;
if(cljs.core.truth_(inst_24534)){
var statearr_24614_24672 = state_24594__$1;
(statearr_24614_24672[(1)] = (16));

} else {
var statearr_24615_24673 = state_24594__$1;
(statearr_24615_24673[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (22))){
var inst_24554 = (state_24594[(9)]);
var inst_24553 = (state_24594[(14)]);
var inst_24552 = (state_24594[(2)]);
var inst_24553__$1 = cljs.core.nth.call(null,inst_24552,(0),null);
var inst_24554__$1 = cljs.core.nth.call(null,inst_24552,(1),null);
var inst_24555 = (inst_24553__$1 == null);
var inst_24556 = cljs.core._EQ_.call(null,inst_24554__$1,change);
var inst_24557 = (inst_24555) || (inst_24556);
var state_24594__$1 = (function (){var statearr_24616 = state_24594;
(statearr_24616[(9)] = inst_24554__$1);

(statearr_24616[(14)] = inst_24553__$1);

return statearr_24616;
})();
if(cljs.core.truth_(inst_24557)){
var statearr_24617_24674 = state_24594__$1;
(statearr_24617_24674[(1)] = (23));

} else {
var statearr_24618_24675 = state_24594__$1;
(statearr_24618_24675[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (36))){
var inst_24546 = (state_24594[(12)]);
var inst_24524 = inst_24546;
var state_24594__$1 = (function (){var statearr_24619 = state_24594;
(statearr_24619[(7)] = inst_24524);

return statearr_24619;
})();
var statearr_24620_24676 = state_24594__$1;
(statearr_24620_24676[(2)] = null);

(statearr_24620_24676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (29))){
var inst_24568 = (state_24594[(10)]);
var state_24594__$1 = state_24594;
var statearr_24621_24677 = state_24594__$1;
(statearr_24621_24677[(2)] = inst_24568);

(statearr_24621_24677[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (6))){
var state_24594__$1 = state_24594;
var statearr_24622_24678 = state_24594__$1;
(statearr_24622_24678[(2)] = false);

(statearr_24622_24678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (28))){
var inst_24564 = (state_24594[(2)]);
var inst_24565 = calc_state.call(null);
var inst_24524 = inst_24565;
var state_24594__$1 = (function (){var statearr_24623 = state_24594;
(statearr_24623[(15)] = inst_24564);

(statearr_24623[(7)] = inst_24524);

return statearr_24623;
})();
var statearr_24624_24679 = state_24594__$1;
(statearr_24624_24679[(2)] = null);

(statearr_24624_24679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (25))){
var inst_24590 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
var statearr_24625_24680 = state_24594__$1;
(statearr_24625_24680[(2)] = inst_24590);

(statearr_24625_24680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (34))){
var inst_24588 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
var statearr_24626_24681 = state_24594__$1;
(statearr_24626_24681[(2)] = inst_24588);

(statearr_24626_24681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (17))){
var state_24594__$1 = state_24594;
var statearr_24627_24682 = state_24594__$1;
(statearr_24627_24682[(2)] = false);

(statearr_24627_24682[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (3))){
var state_24594__$1 = state_24594;
var statearr_24628_24683 = state_24594__$1;
(statearr_24628_24683[(2)] = false);

(statearr_24628_24683[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (12))){
var inst_24592 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24594__$1,inst_24592);
} else {
if((state_val_24595 === (2))){
var inst_24500 = (state_24594[(8)]);
var inst_24505 = inst_24500.cljs$lang$protocol_mask$partition0$;
var inst_24506 = (inst_24505 & (64));
var inst_24507 = inst_24500.cljs$core$ISeq$;
var inst_24508 = (inst_24506) || (inst_24507);
var state_24594__$1 = state_24594;
if(cljs.core.truth_(inst_24508)){
var statearr_24629_24684 = state_24594__$1;
(statearr_24629_24684[(1)] = (5));

} else {
var statearr_24630_24685 = state_24594__$1;
(statearr_24630_24685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (23))){
var inst_24553 = (state_24594[(14)]);
var inst_24559 = (inst_24553 == null);
var state_24594__$1 = state_24594;
if(cljs.core.truth_(inst_24559)){
var statearr_24631_24686 = state_24594__$1;
(statearr_24631_24686[(1)] = (26));

} else {
var statearr_24632_24687 = state_24594__$1;
(statearr_24632_24687[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (35))){
var inst_24579 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
if(cljs.core.truth_(inst_24579)){
var statearr_24633_24688 = state_24594__$1;
(statearr_24633_24688[(1)] = (36));

} else {
var statearr_24634_24689 = state_24594__$1;
(statearr_24634_24689[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (19))){
var inst_24524 = (state_24594[(7)]);
var inst_24543 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24524);
var state_24594__$1 = state_24594;
var statearr_24635_24690 = state_24594__$1;
(statearr_24635_24690[(2)] = inst_24543);

(statearr_24635_24690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (11))){
var inst_24524 = (state_24594[(7)]);
var inst_24528 = (inst_24524 == null);
var inst_24529 = cljs.core.not.call(null,inst_24528);
var state_24594__$1 = state_24594;
if(inst_24529){
var statearr_24636_24691 = state_24594__$1;
(statearr_24636_24691[(1)] = (13));

} else {
var statearr_24637_24692 = state_24594__$1;
(statearr_24637_24692[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (9))){
var inst_24500 = (state_24594[(8)]);
var state_24594__$1 = state_24594;
var statearr_24638_24693 = state_24594__$1;
(statearr_24638_24693[(2)] = inst_24500);

(statearr_24638_24693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (5))){
var state_24594__$1 = state_24594;
var statearr_24639_24694 = state_24594__$1;
(statearr_24639_24694[(2)] = true);

(statearr_24639_24694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (14))){
var state_24594__$1 = state_24594;
var statearr_24640_24695 = state_24594__$1;
(statearr_24640_24695[(2)] = false);

(statearr_24640_24695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (26))){
var inst_24554 = (state_24594[(9)]);
var inst_24561 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24554);
var state_24594__$1 = state_24594;
var statearr_24641_24696 = state_24594__$1;
(statearr_24641_24696[(2)] = inst_24561);

(statearr_24641_24696[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (16))){
var state_24594__$1 = state_24594;
var statearr_24642_24697 = state_24594__$1;
(statearr_24642_24697[(2)] = true);

(statearr_24642_24697[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (38))){
var inst_24584 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
var statearr_24643_24698 = state_24594__$1;
(statearr_24643_24698[(2)] = inst_24584);

(statearr_24643_24698[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (30))){
var inst_24554 = (state_24594[(9)]);
var inst_24547 = (state_24594[(11)]);
var inst_24548 = (state_24594[(13)]);
var inst_24571 = cljs.core.empty_QMARK_.call(null,inst_24547);
var inst_24572 = inst_24548.call(null,inst_24554);
var inst_24573 = cljs.core.not.call(null,inst_24572);
var inst_24574 = (inst_24571) && (inst_24573);
var state_24594__$1 = state_24594;
var statearr_24644_24699 = state_24594__$1;
(statearr_24644_24699[(2)] = inst_24574);

(statearr_24644_24699[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (10))){
var inst_24500 = (state_24594[(8)]);
var inst_24520 = (state_24594[(2)]);
var inst_24521 = cljs.core.get.call(null,inst_24520,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24522 = cljs.core.get.call(null,inst_24520,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24523 = cljs.core.get.call(null,inst_24520,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24524 = inst_24500;
var state_24594__$1 = (function (){var statearr_24645 = state_24594;
(statearr_24645[(16)] = inst_24523);

(statearr_24645[(17)] = inst_24522);

(statearr_24645[(7)] = inst_24524);

(statearr_24645[(18)] = inst_24521);

return statearr_24645;
})();
var statearr_24646_24700 = state_24594__$1;
(statearr_24646_24700[(2)] = null);

(statearr_24646_24700[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (18))){
var inst_24538 = (state_24594[(2)]);
var state_24594__$1 = state_24594;
var statearr_24647_24701 = state_24594__$1;
(statearr_24647_24701[(2)] = inst_24538);

(statearr_24647_24701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (37))){
var state_24594__$1 = state_24594;
var statearr_24648_24702 = state_24594__$1;
(statearr_24648_24702[(2)] = null);

(statearr_24648_24702[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24595 === (8))){
var inst_24500 = (state_24594[(8)]);
var inst_24517 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24500);
var state_24594__$1 = state_24594;
var statearr_24649_24703 = state_24594__$1;
(statearr_24649_24703[(2)] = inst_24517);

(statearr_24649_24703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto___24657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19163__auto__,c__19184__auto___24657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19164__auto__ = null;
var cljs$core$async$mix_$_state_machine__19164__auto____0 = (function (){
var statearr_24653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24653[(0)] = cljs$core$async$mix_$_state_machine__19164__auto__);

(statearr_24653[(1)] = (1));

return statearr_24653;
});
var cljs$core$async$mix_$_state_machine__19164__auto____1 = (function (state_24594){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_24594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e24654){if((e24654 instanceof Object)){
var ex__19167__auto__ = e24654;
var statearr_24655_24704 = state_24594;
(statearr_24655_24704[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24705 = state_24594;
state_24594 = G__24705;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19164__auto__ = function(state_24594){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19164__auto____1.call(this,state_24594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19164__auto____0;
cljs$core$async$mix_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19164__auto____1;
return cljs$core$async$mix_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___24657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19186__auto__ = (function (){var statearr_24656 = f__19185__auto__.call(null);
(statearr_24656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___24657);

return statearr_24656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___24657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17461__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24706 = [];
var len__17863__auto___24709 = arguments.length;
var i__17864__auto___24710 = (0);
while(true){
if((i__17864__auto___24710 < len__17863__auto___24709)){
args24706.push((arguments[i__17864__auto___24710]));

var G__24711 = (i__17864__auto___24710 + (1));
i__17864__auto___24710 = G__24711;
continue;
} else {
}
break;
}

var G__24708 = args24706.length;
switch (G__24708) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24706.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args24714 = [];
var len__17863__auto___24839 = arguments.length;
var i__17864__auto___24840 = (0);
while(true){
if((i__17864__auto___24840 < len__17863__auto___24839)){
args24714.push((arguments[i__17864__auto___24840]));

var G__24841 = (i__17864__auto___24840 + (1));
i__17864__auto___24840 = G__24841;
continue;
} else {
}
break;
}

var G__24716 = args24714.length;
switch (G__24716) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24714.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16805__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16805__auto__,mults){
return (function (p1__24713_SHARP_){
if(cljs.core.truth_(p1__24713_SHARP_.call(null,topic))){
return p1__24713_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24713_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16805__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24717 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24717 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24718){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24718 = meta24718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24719,meta24718__$1){
var self__ = this;
var _24719__$1 = this;
return (new cljs.core.async.t_cljs$core$async24717(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24718__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24719){
var self__ = this;
var _24719__$1 = this;
return self__.meta24718;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24717.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24718","meta24718",671810425,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24717";

cljs.core.async.t_cljs$core$async24717.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async24717");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24717 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24717(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24718){
return (new cljs.core.async.t_cljs$core$async24717(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24718));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24717(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19184__auto___24843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___24843,mults,ensure_mult,p){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___24843,mults,ensure_mult,p){
return (function (state_24791){
var state_val_24792 = (state_24791[(1)]);
if((state_val_24792 === (7))){
var inst_24787 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
var statearr_24793_24844 = state_24791__$1;
(statearr_24793_24844[(2)] = inst_24787);

(statearr_24793_24844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (20))){
var state_24791__$1 = state_24791;
var statearr_24794_24845 = state_24791__$1;
(statearr_24794_24845[(2)] = null);

(statearr_24794_24845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (1))){
var state_24791__$1 = state_24791;
var statearr_24795_24846 = state_24791__$1;
(statearr_24795_24846[(2)] = null);

(statearr_24795_24846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (24))){
var inst_24770 = (state_24791[(7)]);
var inst_24779 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24770);
var state_24791__$1 = state_24791;
var statearr_24796_24847 = state_24791__$1;
(statearr_24796_24847[(2)] = inst_24779);

(statearr_24796_24847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (4))){
var inst_24722 = (state_24791[(8)]);
var inst_24722__$1 = (state_24791[(2)]);
var inst_24723 = (inst_24722__$1 == null);
var state_24791__$1 = (function (){var statearr_24797 = state_24791;
(statearr_24797[(8)] = inst_24722__$1);

return statearr_24797;
})();
if(cljs.core.truth_(inst_24723)){
var statearr_24798_24848 = state_24791__$1;
(statearr_24798_24848[(1)] = (5));

} else {
var statearr_24799_24849 = state_24791__$1;
(statearr_24799_24849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (15))){
var inst_24764 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
var statearr_24800_24850 = state_24791__$1;
(statearr_24800_24850[(2)] = inst_24764);

(statearr_24800_24850[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (21))){
var inst_24784 = (state_24791[(2)]);
var state_24791__$1 = (function (){var statearr_24801 = state_24791;
(statearr_24801[(9)] = inst_24784);

return statearr_24801;
})();
var statearr_24802_24851 = state_24791__$1;
(statearr_24802_24851[(2)] = null);

(statearr_24802_24851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (13))){
var inst_24746 = (state_24791[(10)]);
var inst_24748 = cljs.core.chunked_seq_QMARK_.call(null,inst_24746);
var state_24791__$1 = state_24791;
if(inst_24748){
var statearr_24803_24852 = state_24791__$1;
(statearr_24803_24852[(1)] = (16));

} else {
var statearr_24804_24853 = state_24791__$1;
(statearr_24804_24853[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (22))){
var inst_24776 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
if(cljs.core.truth_(inst_24776)){
var statearr_24805_24854 = state_24791__$1;
(statearr_24805_24854[(1)] = (23));

} else {
var statearr_24806_24855 = state_24791__$1;
(statearr_24806_24855[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (6))){
var inst_24722 = (state_24791[(8)]);
var inst_24770 = (state_24791[(7)]);
var inst_24772 = (state_24791[(11)]);
var inst_24770__$1 = topic_fn.call(null,inst_24722);
var inst_24771 = cljs.core.deref.call(null,mults);
var inst_24772__$1 = cljs.core.get.call(null,inst_24771,inst_24770__$1);
var state_24791__$1 = (function (){var statearr_24807 = state_24791;
(statearr_24807[(7)] = inst_24770__$1);

(statearr_24807[(11)] = inst_24772__$1);

return statearr_24807;
})();
if(cljs.core.truth_(inst_24772__$1)){
var statearr_24808_24856 = state_24791__$1;
(statearr_24808_24856[(1)] = (19));

} else {
var statearr_24809_24857 = state_24791__$1;
(statearr_24809_24857[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (25))){
var inst_24781 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
var statearr_24810_24858 = state_24791__$1;
(statearr_24810_24858[(2)] = inst_24781);

(statearr_24810_24858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (17))){
var inst_24746 = (state_24791[(10)]);
var inst_24755 = cljs.core.first.call(null,inst_24746);
var inst_24756 = cljs.core.async.muxch_STAR_.call(null,inst_24755);
var inst_24757 = cljs.core.async.close_BANG_.call(null,inst_24756);
var inst_24758 = cljs.core.next.call(null,inst_24746);
var inst_24732 = inst_24758;
var inst_24733 = null;
var inst_24734 = (0);
var inst_24735 = (0);
var state_24791__$1 = (function (){var statearr_24811 = state_24791;
(statearr_24811[(12)] = inst_24735);

(statearr_24811[(13)] = inst_24733);

(statearr_24811[(14)] = inst_24732);

(statearr_24811[(15)] = inst_24734);

(statearr_24811[(16)] = inst_24757);

return statearr_24811;
})();
var statearr_24812_24859 = state_24791__$1;
(statearr_24812_24859[(2)] = null);

(statearr_24812_24859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (3))){
var inst_24789 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24791__$1,inst_24789);
} else {
if((state_val_24792 === (12))){
var inst_24766 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
var statearr_24813_24860 = state_24791__$1;
(statearr_24813_24860[(2)] = inst_24766);

(statearr_24813_24860[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (2))){
var state_24791__$1 = state_24791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24791__$1,(4),ch);
} else {
if((state_val_24792 === (23))){
var state_24791__$1 = state_24791;
var statearr_24814_24861 = state_24791__$1;
(statearr_24814_24861[(2)] = null);

(statearr_24814_24861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (19))){
var inst_24722 = (state_24791[(8)]);
var inst_24772 = (state_24791[(11)]);
var inst_24774 = cljs.core.async.muxch_STAR_.call(null,inst_24772);
var state_24791__$1 = state_24791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24791__$1,(22),inst_24774,inst_24722);
} else {
if((state_val_24792 === (11))){
var inst_24746 = (state_24791[(10)]);
var inst_24732 = (state_24791[(14)]);
var inst_24746__$1 = cljs.core.seq.call(null,inst_24732);
var state_24791__$1 = (function (){var statearr_24815 = state_24791;
(statearr_24815[(10)] = inst_24746__$1);

return statearr_24815;
})();
if(inst_24746__$1){
var statearr_24816_24862 = state_24791__$1;
(statearr_24816_24862[(1)] = (13));

} else {
var statearr_24817_24863 = state_24791__$1;
(statearr_24817_24863[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (9))){
var inst_24768 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
var statearr_24818_24864 = state_24791__$1;
(statearr_24818_24864[(2)] = inst_24768);

(statearr_24818_24864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (5))){
var inst_24729 = cljs.core.deref.call(null,mults);
var inst_24730 = cljs.core.vals.call(null,inst_24729);
var inst_24731 = cljs.core.seq.call(null,inst_24730);
var inst_24732 = inst_24731;
var inst_24733 = null;
var inst_24734 = (0);
var inst_24735 = (0);
var state_24791__$1 = (function (){var statearr_24819 = state_24791;
(statearr_24819[(12)] = inst_24735);

(statearr_24819[(13)] = inst_24733);

(statearr_24819[(14)] = inst_24732);

(statearr_24819[(15)] = inst_24734);

return statearr_24819;
})();
var statearr_24820_24865 = state_24791__$1;
(statearr_24820_24865[(2)] = null);

(statearr_24820_24865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (14))){
var state_24791__$1 = state_24791;
var statearr_24824_24866 = state_24791__$1;
(statearr_24824_24866[(2)] = null);

(statearr_24824_24866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (16))){
var inst_24746 = (state_24791[(10)]);
var inst_24750 = cljs.core.chunk_first.call(null,inst_24746);
var inst_24751 = cljs.core.chunk_rest.call(null,inst_24746);
var inst_24752 = cljs.core.count.call(null,inst_24750);
var inst_24732 = inst_24751;
var inst_24733 = inst_24750;
var inst_24734 = inst_24752;
var inst_24735 = (0);
var state_24791__$1 = (function (){var statearr_24825 = state_24791;
(statearr_24825[(12)] = inst_24735);

(statearr_24825[(13)] = inst_24733);

(statearr_24825[(14)] = inst_24732);

(statearr_24825[(15)] = inst_24734);

return statearr_24825;
})();
var statearr_24826_24867 = state_24791__$1;
(statearr_24826_24867[(2)] = null);

(statearr_24826_24867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (10))){
var inst_24735 = (state_24791[(12)]);
var inst_24733 = (state_24791[(13)]);
var inst_24732 = (state_24791[(14)]);
var inst_24734 = (state_24791[(15)]);
var inst_24740 = cljs.core._nth.call(null,inst_24733,inst_24735);
var inst_24741 = cljs.core.async.muxch_STAR_.call(null,inst_24740);
var inst_24742 = cljs.core.async.close_BANG_.call(null,inst_24741);
var inst_24743 = (inst_24735 + (1));
var tmp24821 = inst_24733;
var tmp24822 = inst_24732;
var tmp24823 = inst_24734;
var inst_24732__$1 = tmp24822;
var inst_24733__$1 = tmp24821;
var inst_24734__$1 = tmp24823;
var inst_24735__$1 = inst_24743;
var state_24791__$1 = (function (){var statearr_24827 = state_24791;
(statearr_24827[(17)] = inst_24742);

(statearr_24827[(12)] = inst_24735__$1);

(statearr_24827[(13)] = inst_24733__$1);

(statearr_24827[(14)] = inst_24732__$1);

(statearr_24827[(15)] = inst_24734__$1);

return statearr_24827;
})();
var statearr_24828_24868 = state_24791__$1;
(statearr_24828_24868[(2)] = null);

(statearr_24828_24868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (18))){
var inst_24761 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
var statearr_24829_24869 = state_24791__$1;
(statearr_24829_24869[(2)] = inst_24761);

(statearr_24829_24869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (8))){
var inst_24735 = (state_24791[(12)]);
var inst_24734 = (state_24791[(15)]);
var inst_24737 = (inst_24735 < inst_24734);
var inst_24738 = inst_24737;
var state_24791__$1 = state_24791;
if(cljs.core.truth_(inst_24738)){
var statearr_24830_24870 = state_24791__$1;
(statearr_24830_24870[(1)] = (10));

} else {
var statearr_24831_24871 = state_24791__$1;
(statearr_24831_24871[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto___24843,mults,ensure_mult,p))
;
return ((function (switch__19163__auto__,c__19184__auto___24843,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_24835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24835[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_24835[(1)] = (1));

return statearr_24835;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_24791){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_24791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e24836){if((e24836 instanceof Object)){
var ex__19167__auto__ = e24836;
var statearr_24837_24872 = state_24791;
(statearr_24837_24872[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24873 = state_24791;
state_24791 = G__24873;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_24791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_24791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___24843,mults,ensure_mult,p))
})();
var state__19186__auto__ = (function (){var statearr_24838 = f__19185__auto__.call(null);
(statearr_24838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___24843);

return statearr_24838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___24843,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24874 = [];
var len__17863__auto___24877 = arguments.length;
var i__17864__auto___24878 = (0);
while(true){
if((i__17864__auto___24878 < len__17863__auto___24877)){
args24874.push((arguments[i__17864__auto___24878]));

var G__24879 = (i__17864__auto___24878 + (1));
i__17864__auto___24878 = G__24879;
continue;
} else {
}
break;
}

var G__24876 = args24874.length;
switch (G__24876) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24874.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24881 = [];
var len__17863__auto___24884 = arguments.length;
var i__17864__auto___24885 = (0);
while(true){
if((i__17864__auto___24885 < len__17863__auto___24884)){
args24881.push((arguments[i__17864__auto___24885]));

var G__24886 = (i__17864__auto___24885 + (1));
i__17864__auto___24885 = G__24886;
continue;
} else {
}
break;
}

var G__24883 = args24881.length;
switch (G__24883) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24881.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args24888 = [];
var len__17863__auto___24959 = arguments.length;
var i__17864__auto___24960 = (0);
while(true){
if((i__17864__auto___24960 < len__17863__auto___24959)){
args24888.push((arguments[i__17864__auto___24960]));

var G__24961 = (i__17864__auto___24960 + (1));
i__17864__auto___24960 = G__24961;
continue;
} else {
}
break;
}

var G__24890 = args24888.length;
switch (G__24890) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24888.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19184__auto___24963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___24963,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___24963,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24929){
var state_val_24930 = (state_24929[(1)]);
if((state_val_24930 === (7))){
var state_24929__$1 = state_24929;
var statearr_24931_24964 = state_24929__$1;
(statearr_24931_24964[(2)] = null);

(statearr_24931_24964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (1))){
var state_24929__$1 = state_24929;
var statearr_24932_24965 = state_24929__$1;
(statearr_24932_24965[(2)] = null);

(statearr_24932_24965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (4))){
var inst_24893 = (state_24929[(7)]);
var inst_24895 = (inst_24893 < cnt);
var state_24929__$1 = state_24929;
if(cljs.core.truth_(inst_24895)){
var statearr_24933_24966 = state_24929__$1;
(statearr_24933_24966[(1)] = (6));

} else {
var statearr_24934_24967 = state_24929__$1;
(statearr_24934_24967[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (15))){
var inst_24925 = (state_24929[(2)]);
var state_24929__$1 = state_24929;
var statearr_24935_24968 = state_24929__$1;
(statearr_24935_24968[(2)] = inst_24925);

(statearr_24935_24968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (13))){
var inst_24918 = cljs.core.async.close_BANG_.call(null,out);
var state_24929__$1 = state_24929;
var statearr_24936_24969 = state_24929__$1;
(statearr_24936_24969[(2)] = inst_24918);

(statearr_24936_24969[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (6))){
var state_24929__$1 = state_24929;
var statearr_24937_24970 = state_24929__$1;
(statearr_24937_24970[(2)] = null);

(statearr_24937_24970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (3))){
var inst_24927 = (state_24929[(2)]);
var state_24929__$1 = state_24929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24929__$1,inst_24927);
} else {
if((state_val_24930 === (12))){
var inst_24915 = (state_24929[(8)]);
var inst_24915__$1 = (state_24929[(2)]);
var inst_24916 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24915__$1);
var state_24929__$1 = (function (){var statearr_24938 = state_24929;
(statearr_24938[(8)] = inst_24915__$1);

return statearr_24938;
})();
if(cljs.core.truth_(inst_24916)){
var statearr_24939_24971 = state_24929__$1;
(statearr_24939_24971[(1)] = (13));

} else {
var statearr_24940_24972 = state_24929__$1;
(statearr_24940_24972[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (2))){
var inst_24892 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24893 = (0);
var state_24929__$1 = (function (){var statearr_24941 = state_24929;
(statearr_24941[(7)] = inst_24893);

(statearr_24941[(9)] = inst_24892);

return statearr_24941;
})();
var statearr_24942_24973 = state_24929__$1;
(statearr_24942_24973[(2)] = null);

(statearr_24942_24973[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (11))){
var inst_24893 = (state_24929[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24929,(10),Object,null,(9));
var inst_24902 = chs__$1.call(null,inst_24893);
var inst_24903 = done.call(null,inst_24893);
var inst_24904 = cljs.core.async.take_BANG_.call(null,inst_24902,inst_24903);
var state_24929__$1 = state_24929;
var statearr_24943_24974 = state_24929__$1;
(statearr_24943_24974[(2)] = inst_24904);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24929__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (9))){
var inst_24893 = (state_24929[(7)]);
var inst_24906 = (state_24929[(2)]);
var inst_24907 = (inst_24893 + (1));
var inst_24893__$1 = inst_24907;
var state_24929__$1 = (function (){var statearr_24944 = state_24929;
(statearr_24944[(7)] = inst_24893__$1);

(statearr_24944[(10)] = inst_24906);

return statearr_24944;
})();
var statearr_24945_24975 = state_24929__$1;
(statearr_24945_24975[(2)] = null);

(statearr_24945_24975[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (5))){
var inst_24913 = (state_24929[(2)]);
var state_24929__$1 = (function (){var statearr_24946 = state_24929;
(statearr_24946[(11)] = inst_24913);

return statearr_24946;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24929__$1,(12),dchan);
} else {
if((state_val_24930 === (14))){
var inst_24915 = (state_24929[(8)]);
var inst_24920 = cljs.core.apply.call(null,f,inst_24915);
var state_24929__$1 = state_24929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24929__$1,(16),out,inst_24920);
} else {
if((state_val_24930 === (16))){
var inst_24922 = (state_24929[(2)]);
var state_24929__$1 = (function (){var statearr_24947 = state_24929;
(statearr_24947[(12)] = inst_24922);

return statearr_24947;
})();
var statearr_24948_24976 = state_24929__$1;
(statearr_24948_24976[(2)] = null);

(statearr_24948_24976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (10))){
var inst_24897 = (state_24929[(2)]);
var inst_24898 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24929__$1 = (function (){var statearr_24949 = state_24929;
(statearr_24949[(13)] = inst_24897);

return statearr_24949;
})();
var statearr_24950_24977 = state_24929__$1;
(statearr_24950_24977[(2)] = inst_24898);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24929__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (8))){
var inst_24911 = (state_24929[(2)]);
var state_24929__$1 = state_24929;
var statearr_24951_24978 = state_24929__$1;
(statearr_24951_24978[(2)] = inst_24911);

(statearr_24951_24978[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto___24963,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19163__auto__,c__19184__auto___24963,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_24955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24955[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_24955[(1)] = (1));

return statearr_24955;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_24929){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_24929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e24956){if((e24956 instanceof Object)){
var ex__19167__auto__ = e24956;
var statearr_24957_24979 = state_24929;
(statearr_24957_24979[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24980 = state_24929;
state_24929 = G__24980;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_24929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_24929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___24963,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19186__auto__ = (function (){var statearr_24958 = f__19185__auto__.call(null);
(statearr_24958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___24963);

return statearr_24958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___24963,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24982 = [];
var len__17863__auto___25038 = arguments.length;
var i__17864__auto___25039 = (0);
while(true){
if((i__17864__auto___25039 < len__17863__auto___25038)){
args24982.push((arguments[i__17864__auto___25039]));

var G__25040 = (i__17864__auto___25039 + (1));
i__17864__auto___25039 = G__25040;
continue;
} else {
}
break;
}

var G__24984 = args24982.length;
switch (G__24984) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24982.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19184__auto___25042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___25042,out){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___25042,out){
return (function (state_25014){
var state_val_25015 = (state_25014[(1)]);
if((state_val_25015 === (7))){
var inst_24994 = (state_25014[(7)]);
var inst_24993 = (state_25014[(8)]);
var inst_24993__$1 = (state_25014[(2)]);
var inst_24994__$1 = cljs.core.nth.call(null,inst_24993__$1,(0),null);
var inst_24995 = cljs.core.nth.call(null,inst_24993__$1,(1),null);
var inst_24996 = (inst_24994__$1 == null);
var state_25014__$1 = (function (){var statearr_25016 = state_25014;
(statearr_25016[(9)] = inst_24995);

(statearr_25016[(7)] = inst_24994__$1);

(statearr_25016[(8)] = inst_24993__$1);

return statearr_25016;
})();
if(cljs.core.truth_(inst_24996)){
var statearr_25017_25043 = state_25014__$1;
(statearr_25017_25043[(1)] = (8));

} else {
var statearr_25018_25044 = state_25014__$1;
(statearr_25018_25044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (1))){
var inst_24985 = cljs.core.vec.call(null,chs);
var inst_24986 = inst_24985;
var state_25014__$1 = (function (){var statearr_25019 = state_25014;
(statearr_25019[(10)] = inst_24986);

return statearr_25019;
})();
var statearr_25020_25045 = state_25014__$1;
(statearr_25020_25045[(2)] = null);

(statearr_25020_25045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (4))){
var inst_24986 = (state_25014[(10)]);
var state_25014__$1 = state_25014;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25014__$1,(7),inst_24986);
} else {
if((state_val_25015 === (6))){
var inst_25010 = (state_25014[(2)]);
var state_25014__$1 = state_25014;
var statearr_25021_25046 = state_25014__$1;
(statearr_25021_25046[(2)] = inst_25010);

(statearr_25021_25046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (3))){
var inst_25012 = (state_25014[(2)]);
var state_25014__$1 = state_25014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25014__$1,inst_25012);
} else {
if((state_val_25015 === (2))){
var inst_24986 = (state_25014[(10)]);
var inst_24988 = cljs.core.count.call(null,inst_24986);
var inst_24989 = (inst_24988 > (0));
var state_25014__$1 = state_25014;
if(cljs.core.truth_(inst_24989)){
var statearr_25023_25047 = state_25014__$1;
(statearr_25023_25047[(1)] = (4));

} else {
var statearr_25024_25048 = state_25014__$1;
(statearr_25024_25048[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (11))){
var inst_24986 = (state_25014[(10)]);
var inst_25003 = (state_25014[(2)]);
var tmp25022 = inst_24986;
var inst_24986__$1 = tmp25022;
var state_25014__$1 = (function (){var statearr_25025 = state_25014;
(statearr_25025[(10)] = inst_24986__$1);

(statearr_25025[(11)] = inst_25003);

return statearr_25025;
})();
var statearr_25026_25049 = state_25014__$1;
(statearr_25026_25049[(2)] = null);

(statearr_25026_25049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (9))){
var inst_24994 = (state_25014[(7)]);
var state_25014__$1 = state_25014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25014__$1,(11),out,inst_24994);
} else {
if((state_val_25015 === (5))){
var inst_25008 = cljs.core.async.close_BANG_.call(null,out);
var state_25014__$1 = state_25014;
var statearr_25027_25050 = state_25014__$1;
(statearr_25027_25050[(2)] = inst_25008);

(statearr_25027_25050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (10))){
var inst_25006 = (state_25014[(2)]);
var state_25014__$1 = state_25014;
var statearr_25028_25051 = state_25014__$1;
(statearr_25028_25051[(2)] = inst_25006);

(statearr_25028_25051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (8))){
var inst_24995 = (state_25014[(9)]);
var inst_24986 = (state_25014[(10)]);
var inst_24994 = (state_25014[(7)]);
var inst_24993 = (state_25014[(8)]);
var inst_24998 = (function (){var cs = inst_24986;
var vec__24991 = inst_24993;
var v = inst_24994;
var c = inst_24995;
return ((function (cs,vec__24991,v,c,inst_24995,inst_24986,inst_24994,inst_24993,state_val_25015,c__19184__auto___25042,out){
return (function (p1__24981_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24981_SHARP_);
});
;})(cs,vec__24991,v,c,inst_24995,inst_24986,inst_24994,inst_24993,state_val_25015,c__19184__auto___25042,out))
})();
var inst_24999 = cljs.core.filterv.call(null,inst_24998,inst_24986);
var inst_24986__$1 = inst_24999;
var state_25014__$1 = (function (){var statearr_25029 = state_25014;
(statearr_25029[(10)] = inst_24986__$1);

return statearr_25029;
})();
var statearr_25030_25052 = state_25014__$1;
(statearr_25030_25052[(2)] = null);

(statearr_25030_25052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto___25042,out))
;
return ((function (switch__19163__auto__,c__19184__auto___25042,out){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_25034 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25034[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_25034[(1)] = (1));

return statearr_25034;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_25014){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_25014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e25035){if((e25035 instanceof Object)){
var ex__19167__auto__ = e25035;
var statearr_25036_25053 = state_25014;
(statearr_25036_25053[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25054 = state_25014;
state_25014 = G__25054;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_25014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_25014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___25042,out))
})();
var state__19186__auto__ = (function (){var statearr_25037 = f__19185__auto__.call(null);
(statearr_25037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___25042);

return statearr_25037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___25042,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args25055 = [];
var len__17863__auto___25104 = arguments.length;
var i__17864__auto___25105 = (0);
while(true){
if((i__17864__auto___25105 < len__17863__auto___25104)){
args25055.push((arguments[i__17864__auto___25105]));

var G__25106 = (i__17864__auto___25105 + (1));
i__17864__auto___25105 = G__25106;
continue;
} else {
}
break;
}

var G__25057 = args25055.length;
switch (G__25057) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25055.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19184__auto___25108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___25108,out){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___25108,out){
return (function (state_25081){
var state_val_25082 = (state_25081[(1)]);
if((state_val_25082 === (7))){
var inst_25063 = (state_25081[(7)]);
var inst_25063__$1 = (state_25081[(2)]);
var inst_25064 = (inst_25063__$1 == null);
var inst_25065 = cljs.core.not.call(null,inst_25064);
var state_25081__$1 = (function (){var statearr_25083 = state_25081;
(statearr_25083[(7)] = inst_25063__$1);

return statearr_25083;
})();
if(inst_25065){
var statearr_25084_25109 = state_25081__$1;
(statearr_25084_25109[(1)] = (8));

} else {
var statearr_25085_25110 = state_25081__$1;
(statearr_25085_25110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (1))){
var inst_25058 = (0);
var state_25081__$1 = (function (){var statearr_25086 = state_25081;
(statearr_25086[(8)] = inst_25058);

return statearr_25086;
})();
var statearr_25087_25111 = state_25081__$1;
(statearr_25087_25111[(2)] = null);

(statearr_25087_25111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (4))){
var state_25081__$1 = state_25081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25081__$1,(7),ch);
} else {
if((state_val_25082 === (6))){
var inst_25076 = (state_25081[(2)]);
var state_25081__$1 = state_25081;
var statearr_25088_25112 = state_25081__$1;
(statearr_25088_25112[(2)] = inst_25076);

(statearr_25088_25112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (3))){
var inst_25078 = (state_25081[(2)]);
var inst_25079 = cljs.core.async.close_BANG_.call(null,out);
var state_25081__$1 = (function (){var statearr_25089 = state_25081;
(statearr_25089[(9)] = inst_25078);

return statearr_25089;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25081__$1,inst_25079);
} else {
if((state_val_25082 === (2))){
var inst_25058 = (state_25081[(8)]);
var inst_25060 = (inst_25058 < n);
var state_25081__$1 = state_25081;
if(cljs.core.truth_(inst_25060)){
var statearr_25090_25113 = state_25081__$1;
(statearr_25090_25113[(1)] = (4));

} else {
var statearr_25091_25114 = state_25081__$1;
(statearr_25091_25114[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (11))){
var inst_25058 = (state_25081[(8)]);
var inst_25068 = (state_25081[(2)]);
var inst_25069 = (inst_25058 + (1));
var inst_25058__$1 = inst_25069;
var state_25081__$1 = (function (){var statearr_25092 = state_25081;
(statearr_25092[(10)] = inst_25068);

(statearr_25092[(8)] = inst_25058__$1);

return statearr_25092;
})();
var statearr_25093_25115 = state_25081__$1;
(statearr_25093_25115[(2)] = null);

(statearr_25093_25115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (9))){
var state_25081__$1 = state_25081;
var statearr_25094_25116 = state_25081__$1;
(statearr_25094_25116[(2)] = null);

(statearr_25094_25116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (5))){
var state_25081__$1 = state_25081;
var statearr_25095_25117 = state_25081__$1;
(statearr_25095_25117[(2)] = null);

(statearr_25095_25117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (10))){
var inst_25073 = (state_25081[(2)]);
var state_25081__$1 = state_25081;
var statearr_25096_25118 = state_25081__$1;
(statearr_25096_25118[(2)] = inst_25073);

(statearr_25096_25118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (8))){
var inst_25063 = (state_25081[(7)]);
var state_25081__$1 = state_25081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25081__$1,(11),out,inst_25063);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto___25108,out))
;
return ((function (switch__19163__auto__,c__19184__auto___25108,out){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_25100 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25100[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_25100[(1)] = (1));

return statearr_25100;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_25081){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_25081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e25101){if((e25101 instanceof Object)){
var ex__19167__auto__ = e25101;
var statearr_25102_25119 = state_25081;
(statearr_25102_25119[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25120 = state_25081;
state_25081 = G__25120;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_25081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_25081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___25108,out))
})();
var state__19186__auto__ = (function (){var statearr_25103 = f__19185__auto__.call(null);
(statearr_25103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___25108);

return statearr_25103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___25108,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25128 = (function (map_LT_,f,ch,meta25129){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25129 = meta25129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25130,meta25129__$1){
var self__ = this;
var _25130__$1 = this;
return (new cljs.core.async.t_cljs$core$async25128(self__.map_LT_,self__.f,self__.ch,meta25129__$1));
});

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25130){
var self__ = this;
var _25130__$1 = this;
return self__.meta25129;
});

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25131 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25131 = (function (map_LT_,f,ch,meta25129,_,fn1,meta25132){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25129 = meta25129;
this._ = _;
this.fn1 = fn1;
this.meta25132 = meta25132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25133,meta25132__$1){
var self__ = this;
var _25133__$1 = this;
return (new cljs.core.async.t_cljs$core$async25131(self__.map_LT_,self__.f,self__.ch,self__.meta25129,self__._,self__.fn1,meta25132__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25133){
var self__ = this;
var _25133__$1 = this;
return self__.meta25132;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25131.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25131.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25131.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25131.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25121_SHARP_){
return f1.call(null,(((p1__25121_SHARP_ == null))?null:self__.f.call(null,p1__25121_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25131.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25129","meta25129",1146225555,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25128","cljs.core.async/t_cljs$core$async25128",319877680,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25132","meta25132",542953670,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25131";

cljs.core.async.t_cljs$core$async25131.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async25131");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25131 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25131(map_LT___$1,f__$1,ch__$1,meta25129__$1,___$2,fn1__$1,meta25132){
return (new cljs.core.async.t_cljs$core$async25131(map_LT___$1,f__$1,ch__$1,meta25129__$1,___$2,fn1__$1,meta25132));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25131(self__.map_LT_,self__.f,self__.ch,self__.meta25129,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16793__auto__ = ret;
if(cljs.core.truth_(and__16793__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16793__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25129","meta25129",1146225555,null)], null);
});

cljs.core.async.t_cljs$core$async25128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25128";

cljs.core.async.t_cljs$core$async25128.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async25128");
});

cljs.core.async.__GT_t_cljs$core$async25128 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25128(map_LT___$1,f__$1,ch__$1,meta25129){
return (new cljs.core.async.t_cljs$core$async25128(map_LT___$1,f__$1,ch__$1,meta25129));
});

}

return (new cljs.core.async.t_cljs$core$async25128(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25137 = (function (map_GT_,f,ch,meta25138){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25138 = meta25138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25139,meta25138__$1){
var self__ = this;
var _25139__$1 = this;
return (new cljs.core.async.t_cljs$core$async25137(self__.map_GT_,self__.f,self__.ch,meta25138__$1));
});

cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25139){
var self__ = this;
var _25139__$1 = this;
return self__.meta25138;
});

cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25138","meta25138",-1940239086,null)], null);
});

cljs.core.async.t_cljs$core$async25137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25137";

cljs.core.async.t_cljs$core$async25137.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async25137");
});

cljs.core.async.__GT_t_cljs$core$async25137 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25137(map_GT___$1,f__$1,ch__$1,meta25138){
return (new cljs.core.async.t_cljs$core$async25137(map_GT___$1,f__$1,ch__$1,meta25138));
});

}

return (new cljs.core.async.t_cljs$core$async25137(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25143 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25143 = (function (filter_GT_,p,ch,meta25144){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25144 = meta25144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25145,meta25144__$1){
var self__ = this;
var _25145__$1 = this;
return (new cljs.core.async.t_cljs$core$async25143(self__.filter_GT_,self__.p,self__.ch,meta25144__$1));
});

cljs.core.async.t_cljs$core$async25143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25145){
var self__ = this;
var _25145__$1 = this;
return self__.meta25144;
});

cljs.core.async.t_cljs$core$async25143.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25143.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25143.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25143.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25143.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25143.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25143.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25144","meta25144",1476789650,null)], null);
});

cljs.core.async.t_cljs$core$async25143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25143";

cljs.core.async.t_cljs$core$async25143.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async25143");
});

cljs.core.async.__GT_t_cljs$core$async25143 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25143(filter_GT___$1,p__$1,ch__$1,meta25144){
return (new cljs.core.async.t_cljs$core$async25143(filter_GT___$1,p__$1,ch__$1,meta25144));
});

}

return (new cljs.core.async.t_cljs$core$async25143(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args25146 = [];
var len__17863__auto___25190 = arguments.length;
var i__17864__auto___25191 = (0);
while(true){
if((i__17864__auto___25191 < len__17863__auto___25190)){
args25146.push((arguments[i__17864__auto___25191]));

var G__25192 = (i__17864__auto___25191 + (1));
i__17864__auto___25191 = G__25192;
continue;
} else {
}
break;
}

var G__25148 = args25146.length;
switch (G__25148) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25146.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19184__auto___25194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___25194,out){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___25194,out){
return (function (state_25169){
var state_val_25170 = (state_25169[(1)]);
if((state_val_25170 === (7))){
var inst_25165 = (state_25169[(2)]);
var state_25169__$1 = state_25169;
var statearr_25171_25195 = state_25169__$1;
(statearr_25171_25195[(2)] = inst_25165);

(statearr_25171_25195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (1))){
var state_25169__$1 = state_25169;
var statearr_25172_25196 = state_25169__$1;
(statearr_25172_25196[(2)] = null);

(statearr_25172_25196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (4))){
var inst_25151 = (state_25169[(7)]);
var inst_25151__$1 = (state_25169[(2)]);
var inst_25152 = (inst_25151__$1 == null);
var state_25169__$1 = (function (){var statearr_25173 = state_25169;
(statearr_25173[(7)] = inst_25151__$1);

return statearr_25173;
})();
if(cljs.core.truth_(inst_25152)){
var statearr_25174_25197 = state_25169__$1;
(statearr_25174_25197[(1)] = (5));

} else {
var statearr_25175_25198 = state_25169__$1;
(statearr_25175_25198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (6))){
var inst_25151 = (state_25169[(7)]);
var inst_25156 = p.call(null,inst_25151);
var state_25169__$1 = state_25169;
if(cljs.core.truth_(inst_25156)){
var statearr_25176_25199 = state_25169__$1;
(statearr_25176_25199[(1)] = (8));

} else {
var statearr_25177_25200 = state_25169__$1;
(statearr_25177_25200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (3))){
var inst_25167 = (state_25169[(2)]);
var state_25169__$1 = state_25169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25169__$1,inst_25167);
} else {
if((state_val_25170 === (2))){
var state_25169__$1 = state_25169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25169__$1,(4),ch);
} else {
if((state_val_25170 === (11))){
var inst_25159 = (state_25169[(2)]);
var state_25169__$1 = state_25169;
var statearr_25178_25201 = state_25169__$1;
(statearr_25178_25201[(2)] = inst_25159);

(statearr_25178_25201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (9))){
var state_25169__$1 = state_25169;
var statearr_25179_25202 = state_25169__$1;
(statearr_25179_25202[(2)] = null);

(statearr_25179_25202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (5))){
var inst_25154 = cljs.core.async.close_BANG_.call(null,out);
var state_25169__$1 = state_25169;
var statearr_25180_25203 = state_25169__$1;
(statearr_25180_25203[(2)] = inst_25154);

(statearr_25180_25203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (10))){
var inst_25162 = (state_25169[(2)]);
var state_25169__$1 = (function (){var statearr_25181 = state_25169;
(statearr_25181[(8)] = inst_25162);

return statearr_25181;
})();
var statearr_25182_25204 = state_25169__$1;
(statearr_25182_25204[(2)] = null);

(statearr_25182_25204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (8))){
var inst_25151 = (state_25169[(7)]);
var state_25169__$1 = state_25169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25169__$1,(11),out,inst_25151);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto___25194,out))
;
return ((function (switch__19163__auto__,c__19184__auto___25194,out){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_25186 = [null,null,null,null,null,null,null,null,null];
(statearr_25186[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_25186[(1)] = (1));

return statearr_25186;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_25169){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_25169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e25187){if((e25187 instanceof Object)){
var ex__19167__auto__ = e25187;
var statearr_25188_25205 = state_25169;
(statearr_25188_25205[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25206 = state_25169;
state_25169 = G__25206;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_25169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_25169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___25194,out))
})();
var state__19186__auto__ = (function (){var statearr_25189 = f__19185__auto__.call(null);
(statearr_25189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___25194);

return statearr_25189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___25194,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25207 = [];
var len__17863__auto___25210 = arguments.length;
var i__17864__auto___25211 = (0);
while(true){
if((i__17864__auto___25211 < len__17863__auto___25210)){
args25207.push((arguments[i__17864__auto___25211]));

var G__25212 = (i__17864__auto___25211 + (1));
i__17864__auto___25211 = G__25212;
continue;
} else {
}
break;
}

var G__25209 = args25207.length;
switch (G__25209) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25207.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__){
return (function (state_25379){
var state_val_25380 = (state_25379[(1)]);
if((state_val_25380 === (7))){
var inst_25375 = (state_25379[(2)]);
var state_25379__$1 = state_25379;
var statearr_25381_25422 = state_25379__$1;
(statearr_25381_25422[(2)] = inst_25375);

(statearr_25381_25422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25380 === (20))){
var inst_25345 = (state_25379[(7)]);
var inst_25356 = (state_25379[(2)]);
var inst_25357 = cljs.core.next.call(null,inst_25345);
var inst_25331 = inst_25357;
var inst_25332 = null;
var inst_25333 = (0);
var inst_25334 = (0);
var state_25379__$1 = (function (){var statearr_25382 = state_25379;
(statearr_25382[(8)] = inst_25333);

(statearr_25382[(9)] = inst_25356);

(statearr_25382[(10)] = inst_25332);

(statearr_25382[(11)] = inst_25331);

(statearr_25382[(12)] = inst_25334);

return statearr_25382;
})();
var statearr_25383_25423 = state_25379__$1;
(statearr_25383_25423[(2)] = null);

(statearr_25383_25423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25380 === (1))){
var state_25379__$1 = state_25379;
var statearr_25384_25424 = state_25379__$1;
(statearr_25384_25424[(2)] = null);

(statearr_25384_25424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25380 === (4))){
var inst_25320 = (state_25379[(13)]);
var inst_25320__$1 = (state_25379[(2)]);
var inst_25321 = (inst_25320__$1 == null);
var state_25379__$1 = (function (){var statearr_25385 = state_25379;
(statearr_25385[(13)] = inst_25320__$1);

return statearr_25385;
})();
if(cljs.core.truth_(inst_25321)){
var statearr_25386_25425 = state_25379__$1;
(statearr_25386_25425[(1)] = (5));

} else {
var statearr_25387_25426 = state_25379__$1;
(statearr_25387_25426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25380 === (15))){
var state_25379__$1 = state_25379;
var statearr_25391_25427 = state_25379__$1;
(statearr_25391_25427[(2)] = null);

(statearr_25391_25427[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25380 === (21))){
var state_25379__$1 = state_25379;
var statearr_25392_25428 = state_25379__$1;
(statearr_25392_25428[(2)] = null);

(statearr_25392_25428[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25380 === (13))){
var inst_25333 = (state_25379[(8)]);
var inst_25332 = (state_25379[(10)]);
var inst_25331 = (state_25379[(11)]);
var inst_25334 = (state_25379[(12)]);
var inst_25341 = (state_25379[(2)]);
var inst_25342 = (inst_25334 + (1));
var tmp25388 = inst_25333;
var tmp25389 = inst_25332;
var tmp25390 = inst_25331;
var inst_25331__$1 = tmp25390;
var inst_25332__$1 = tmp25389;
var inst_25333__$1 = tmp25388;
var inst_25334__$1 = inst_25342;
var state_25379__$1 = (function (){var statearr_25393 = state_25379;
(statearr_25393[(8)] = inst_25333__$1);

(statearr_25393[(14)] = inst_25341);

(statearr_25393[(10)] = inst_25332__$1);

(statearr_25393[(11)] = inst_25331__$1);

(statearr_25393[(12)] = inst_25334__$1);

return statearr_25393;
})();
var statearr_25394_25429 = state_25379__$1;
(statearr_25394_25429[(2)] = null);

(statearr_25394_25429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25380 === (22))){
var state_25379__$1 = state_25379;
var statearr_25395_25430 = state_25379__$1;
(statearr_25395_25430[(2)] = null);

(statearr_25395_25430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25380 === (6))){
var inst_25320 = (state_25379[(13)]);
var inst_25329 = f.call(null,inst_25320);
var inst_25330 = cljs.core.seq.call(null,inst_25329);
var inst_25331 = inst_25330;
var inst_25332 = null;
var inst_25333 = (0);
var inst_25334 = (0);
var state_25379__$1 = (function (){var statearr_25396 = state_25379;
(statearr_25396[(8)] = inst_25333);

(statearr_25396[(10)] = inst_25332);

(statearr_25396[(11)] = inst_25331);

(statearr_25396[(12)] = inst_25334);

return statearr_25396;
})();
var statearr_25397_25431 = state_25379__$1;
(statearr_25397_25431[(2)] = null);

(statearr_25397_25431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25380 === (17))){
var inst_25345 = (state_25379[(7)]);
var inst_25349 = cljs.core.chunk_first.call(null,inst_25345);
var inst_25350 = cljs.core.chunk_rest.call(null,inst_25345);
var inst_25351 = cljs.core.count.call(null,inst_25349);
var inst_25331 = inst_25350;
var inst_25332 = inst_25349;
var inst_25333 = inst_25351;
var inst_25334 = (0);
var state_25379__$1 = (function (){var statearr_25398 = state_25379;
(statearr_25398[(8)] = inst_25333);

(statearr_25398[(10)] = inst_25332);

(statearr_25398[(11)] = inst_25331);

(statearr_25398[(12)] = inst_25334);

return statearr_25398;
})();
var statearr_25399_25432 = state_25379__$1;
(statearr_25399_25432[(2)] = null);

(statearr_25399_25432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25380 === (3))){
var inst_25377 = (state_25379[(2)]);
var state_25379__$1 = state_25379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25379__$1,inst_25377);
} else {
if((state_val_25380 === (12))){
var inst_25365 = (state_25379[(2)]);
var state_25379__$1 = state_25379;
var statearr_25400_25433 = state_25379__$1;
(statearr_25400_25433[(2)] = inst_25365);

(statearr_25400_25433[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25380 === (2))){
var state_25379__$1 = state_25379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25379__$1,(4),in$);
} else {
if((state_val_25380 === (23))){
var inst_25373 = (state_25379[(2)]);
var state_25379__$1 = state_25379;
var statearr_25401_25434 = state_25379__$1;
(statearr_25401_25434[(2)] = inst_25373);

(statearr_25401_25434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25380 === (19))){
var inst_25360 = (state_25379[(2)]);
var state_25379__$1 = state_25379;
var statearr_25402_25435 = state_25379__$1;
(statearr_25402_25435[(2)] = inst_25360);

(statearr_25402_25435[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25380 === (11))){
var inst_25331 = (state_25379[(11)]);
var inst_25345 = (state_25379[(7)]);
var inst_25345__$1 = cljs.core.seq.call(null,inst_25331);
var state_25379__$1 = (function (){var statearr_25403 = state_25379;
(statearr_25403[(7)] = inst_25345__$1);

return statearr_25403;
})();
if(inst_25345__$1){
var statearr_25404_25436 = state_25379__$1;
(statearr_25404_25436[(1)] = (14));

} else {
var statearr_25405_25437 = state_25379__$1;
(statearr_25405_25437[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25380 === (9))){
var inst_25367 = (state_25379[(2)]);
var inst_25368 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25379__$1 = (function (){var statearr_25406 = state_25379;
(statearr_25406[(15)] = inst_25367);

return statearr_25406;
})();
if(cljs.core.truth_(inst_25368)){
var statearr_25407_25438 = state_25379__$1;
(statearr_25407_25438[(1)] = (21));

} else {
var statearr_25408_25439 = state_25379__$1;
(statearr_25408_25439[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25380 === (5))){
var inst_25323 = cljs.core.async.close_BANG_.call(null,out);
var state_25379__$1 = state_25379;
var statearr_25409_25440 = state_25379__$1;
(statearr_25409_25440[(2)] = inst_25323);

(statearr_25409_25440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25380 === (14))){
var inst_25345 = (state_25379[(7)]);
var inst_25347 = cljs.core.chunked_seq_QMARK_.call(null,inst_25345);
var state_25379__$1 = state_25379;
if(inst_25347){
var statearr_25410_25441 = state_25379__$1;
(statearr_25410_25441[(1)] = (17));

} else {
var statearr_25411_25442 = state_25379__$1;
(statearr_25411_25442[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25380 === (16))){
var inst_25363 = (state_25379[(2)]);
var state_25379__$1 = state_25379;
var statearr_25412_25443 = state_25379__$1;
(statearr_25412_25443[(2)] = inst_25363);

(statearr_25412_25443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25380 === (10))){
var inst_25332 = (state_25379[(10)]);
var inst_25334 = (state_25379[(12)]);
var inst_25339 = cljs.core._nth.call(null,inst_25332,inst_25334);
var state_25379__$1 = state_25379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25379__$1,(13),out,inst_25339);
} else {
if((state_val_25380 === (18))){
var inst_25345 = (state_25379[(7)]);
var inst_25354 = cljs.core.first.call(null,inst_25345);
var state_25379__$1 = state_25379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25379__$1,(20),out,inst_25354);
} else {
if((state_val_25380 === (8))){
var inst_25333 = (state_25379[(8)]);
var inst_25334 = (state_25379[(12)]);
var inst_25336 = (inst_25334 < inst_25333);
var inst_25337 = inst_25336;
var state_25379__$1 = state_25379;
if(cljs.core.truth_(inst_25337)){
var statearr_25413_25444 = state_25379__$1;
(statearr_25413_25444[(1)] = (10));

} else {
var statearr_25414_25445 = state_25379__$1;
(statearr_25414_25445[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto__))
;
return ((function (switch__19163__auto__,c__19184__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19164__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19164__auto____0 = (function (){
var statearr_25418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25418[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19164__auto__);

(statearr_25418[(1)] = (1));

return statearr_25418;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19164__auto____1 = (function (state_25379){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_25379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e25419){if((e25419 instanceof Object)){
var ex__19167__auto__ = e25419;
var statearr_25420_25446 = state_25379;
(statearr_25420_25446[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25447 = state_25379;
state_25379 = G__25447;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19164__auto__ = function(state_25379){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19164__auto____1.call(this,state_25379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19164__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19164__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__))
})();
var state__19186__auto__ = (function (){var statearr_25421 = f__19185__auto__.call(null);
(statearr_25421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_25421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto__))
);

return c__19184__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25448 = [];
var len__17863__auto___25451 = arguments.length;
var i__17864__auto___25452 = (0);
while(true){
if((i__17864__auto___25452 < len__17863__auto___25451)){
args25448.push((arguments[i__17864__auto___25452]));

var G__25453 = (i__17864__auto___25452 + (1));
i__17864__auto___25452 = G__25453;
continue;
} else {
}
break;
}

var G__25450 = args25448.length;
switch (G__25450) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25448.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args25455 = [];
var len__17863__auto___25458 = arguments.length;
var i__17864__auto___25459 = (0);
while(true){
if((i__17864__auto___25459 < len__17863__auto___25458)){
args25455.push((arguments[i__17864__auto___25459]));

var G__25460 = (i__17864__auto___25459 + (1));
i__17864__auto___25459 = G__25460;
continue;
} else {
}
break;
}

var G__25457 = args25455.length;
switch (G__25457) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25455.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args25462 = [];
var len__17863__auto___25513 = arguments.length;
var i__17864__auto___25514 = (0);
while(true){
if((i__17864__auto___25514 < len__17863__auto___25513)){
args25462.push((arguments[i__17864__auto___25514]));

var G__25515 = (i__17864__auto___25514 + (1));
i__17864__auto___25514 = G__25515;
continue;
} else {
}
break;
}

var G__25464 = args25462.length;
switch (G__25464) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25462.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19184__auto___25517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___25517,out){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___25517,out){
return (function (state_25488){
var state_val_25489 = (state_25488[(1)]);
if((state_val_25489 === (7))){
var inst_25483 = (state_25488[(2)]);
var state_25488__$1 = state_25488;
var statearr_25490_25518 = state_25488__$1;
(statearr_25490_25518[(2)] = inst_25483);

(statearr_25490_25518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (1))){
var inst_25465 = null;
var state_25488__$1 = (function (){var statearr_25491 = state_25488;
(statearr_25491[(7)] = inst_25465);

return statearr_25491;
})();
var statearr_25492_25519 = state_25488__$1;
(statearr_25492_25519[(2)] = null);

(statearr_25492_25519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (4))){
var inst_25468 = (state_25488[(8)]);
var inst_25468__$1 = (state_25488[(2)]);
var inst_25469 = (inst_25468__$1 == null);
var inst_25470 = cljs.core.not.call(null,inst_25469);
var state_25488__$1 = (function (){var statearr_25493 = state_25488;
(statearr_25493[(8)] = inst_25468__$1);

return statearr_25493;
})();
if(inst_25470){
var statearr_25494_25520 = state_25488__$1;
(statearr_25494_25520[(1)] = (5));

} else {
var statearr_25495_25521 = state_25488__$1;
(statearr_25495_25521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (6))){
var state_25488__$1 = state_25488;
var statearr_25496_25522 = state_25488__$1;
(statearr_25496_25522[(2)] = null);

(statearr_25496_25522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (3))){
var inst_25485 = (state_25488[(2)]);
var inst_25486 = cljs.core.async.close_BANG_.call(null,out);
var state_25488__$1 = (function (){var statearr_25497 = state_25488;
(statearr_25497[(9)] = inst_25485);

return statearr_25497;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25488__$1,inst_25486);
} else {
if((state_val_25489 === (2))){
var state_25488__$1 = state_25488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25488__$1,(4),ch);
} else {
if((state_val_25489 === (11))){
var inst_25468 = (state_25488[(8)]);
var inst_25477 = (state_25488[(2)]);
var inst_25465 = inst_25468;
var state_25488__$1 = (function (){var statearr_25498 = state_25488;
(statearr_25498[(10)] = inst_25477);

(statearr_25498[(7)] = inst_25465);

return statearr_25498;
})();
var statearr_25499_25523 = state_25488__$1;
(statearr_25499_25523[(2)] = null);

(statearr_25499_25523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (9))){
var inst_25468 = (state_25488[(8)]);
var state_25488__$1 = state_25488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25488__$1,(11),out,inst_25468);
} else {
if((state_val_25489 === (5))){
var inst_25465 = (state_25488[(7)]);
var inst_25468 = (state_25488[(8)]);
var inst_25472 = cljs.core._EQ_.call(null,inst_25468,inst_25465);
var state_25488__$1 = state_25488;
if(inst_25472){
var statearr_25501_25524 = state_25488__$1;
(statearr_25501_25524[(1)] = (8));

} else {
var statearr_25502_25525 = state_25488__$1;
(statearr_25502_25525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (10))){
var inst_25480 = (state_25488[(2)]);
var state_25488__$1 = state_25488;
var statearr_25503_25526 = state_25488__$1;
(statearr_25503_25526[(2)] = inst_25480);

(statearr_25503_25526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25489 === (8))){
var inst_25465 = (state_25488[(7)]);
var tmp25500 = inst_25465;
var inst_25465__$1 = tmp25500;
var state_25488__$1 = (function (){var statearr_25504 = state_25488;
(statearr_25504[(7)] = inst_25465__$1);

return statearr_25504;
})();
var statearr_25505_25527 = state_25488__$1;
(statearr_25505_25527[(2)] = null);

(statearr_25505_25527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto___25517,out))
;
return ((function (switch__19163__auto__,c__19184__auto___25517,out){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_25509 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25509[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_25509[(1)] = (1));

return statearr_25509;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_25488){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_25488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e25510){if((e25510 instanceof Object)){
var ex__19167__auto__ = e25510;
var statearr_25511_25528 = state_25488;
(statearr_25511_25528[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25529 = state_25488;
state_25488 = G__25529;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_25488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_25488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___25517,out))
})();
var state__19186__auto__ = (function (){var statearr_25512 = f__19185__auto__.call(null);
(statearr_25512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___25517);

return statearr_25512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___25517,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25530 = [];
var len__17863__auto___25600 = arguments.length;
var i__17864__auto___25601 = (0);
while(true){
if((i__17864__auto___25601 < len__17863__auto___25600)){
args25530.push((arguments[i__17864__auto___25601]));

var G__25602 = (i__17864__auto___25601 + (1));
i__17864__auto___25601 = G__25602;
continue;
} else {
}
break;
}

var G__25532 = args25530.length;
switch (G__25532) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25530.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19184__auto___25604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___25604,out){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___25604,out){
return (function (state_25570){
var state_val_25571 = (state_25570[(1)]);
if((state_val_25571 === (7))){
var inst_25566 = (state_25570[(2)]);
var state_25570__$1 = state_25570;
var statearr_25572_25605 = state_25570__$1;
(statearr_25572_25605[(2)] = inst_25566);

(statearr_25572_25605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (1))){
var inst_25533 = (new Array(n));
var inst_25534 = inst_25533;
var inst_25535 = (0);
var state_25570__$1 = (function (){var statearr_25573 = state_25570;
(statearr_25573[(7)] = inst_25534);

(statearr_25573[(8)] = inst_25535);

return statearr_25573;
})();
var statearr_25574_25606 = state_25570__$1;
(statearr_25574_25606[(2)] = null);

(statearr_25574_25606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (4))){
var inst_25538 = (state_25570[(9)]);
var inst_25538__$1 = (state_25570[(2)]);
var inst_25539 = (inst_25538__$1 == null);
var inst_25540 = cljs.core.not.call(null,inst_25539);
var state_25570__$1 = (function (){var statearr_25575 = state_25570;
(statearr_25575[(9)] = inst_25538__$1);

return statearr_25575;
})();
if(inst_25540){
var statearr_25576_25607 = state_25570__$1;
(statearr_25576_25607[(1)] = (5));

} else {
var statearr_25577_25608 = state_25570__$1;
(statearr_25577_25608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (15))){
var inst_25560 = (state_25570[(2)]);
var state_25570__$1 = state_25570;
var statearr_25578_25609 = state_25570__$1;
(statearr_25578_25609[(2)] = inst_25560);

(statearr_25578_25609[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (13))){
var state_25570__$1 = state_25570;
var statearr_25579_25610 = state_25570__$1;
(statearr_25579_25610[(2)] = null);

(statearr_25579_25610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (6))){
var inst_25535 = (state_25570[(8)]);
var inst_25556 = (inst_25535 > (0));
var state_25570__$1 = state_25570;
if(cljs.core.truth_(inst_25556)){
var statearr_25580_25611 = state_25570__$1;
(statearr_25580_25611[(1)] = (12));

} else {
var statearr_25581_25612 = state_25570__$1;
(statearr_25581_25612[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (3))){
var inst_25568 = (state_25570[(2)]);
var state_25570__$1 = state_25570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25570__$1,inst_25568);
} else {
if((state_val_25571 === (12))){
var inst_25534 = (state_25570[(7)]);
var inst_25558 = cljs.core.vec.call(null,inst_25534);
var state_25570__$1 = state_25570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25570__$1,(15),out,inst_25558);
} else {
if((state_val_25571 === (2))){
var state_25570__$1 = state_25570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25570__$1,(4),ch);
} else {
if((state_val_25571 === (11))){
var inst_25550 = (state_25570[(2)]);
var inst_25551 = (new Array(n));
var inst_25534 = inst_25551;
var inst_25535 = (0);
var state_25570__$1 = (function (){var statearr_25582 = state_25570;
(statearr_25582[(7)] = inst_25534);

(statearr_25582[(10)] = inst_25550);

(statearr_25582[(8)] = inst_25535);

return statearr_25582;
})();
var statearr_25583_25613 = state_25570__$1;
(statearr_25583_25613[(2)] = null);

(statearr_25583_25613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (9))){
var inst_25534 = (state_25570[(7)]);
var inst_25548 = cljs.core.vec.call(null,inst_25534);
var state_25570__$1 = state_25570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25570__$1,(11),out,inst_25548);
} else {
if((state_val_25571 === (5))){
var inst_25534 = (state_25570[(7)]);
var inst_25538 = (state_25570[(9)]);
var inst_25543 = (state_25570[(11)]);
var inst_25535 = (state_25570[(8)]);
var inst_25542 = (inst_25534[inst_25535] = inst_25538);
var inst_25543__$1 = (inst_25535 + (1));
var inst_25544 = (inst_25543__$1 < n);
var state_25570__$1 = (function (){var statearr_25584 = state_25570;
(statearr_25584[(11)] = inst_25543__$1);

(statearr_25584[(12)] = inst_25542);

return statearr_25584;
})();
if(cljs.core.truth_(inst_25544)){
var statearr_25585_25614 = state_25570__$1;
(statearr_25585_25614[(1)] = (8));

} else {
var statearr_25586_25615 = state_25570__$1;
(statearr_25586_25615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (14))){
var inst_25563 = (state_25570[(2)]);
var inst_25564 = cljs.core.async.close_BANG_.call(null,out);
var state_25570__$1 = (function (){var statearr_25588 = state_25570;
(statearr_25588[(13)] = inst_25563);

return statearr_25588;
})();
var statearr_25589_25616 = state_25570__$1;
(statearr_25589_25616[(2)] = inst_25564);

(statearr_25589_25616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (10))){
var inst_25554 = (state_25570[(2)]);
var state_25570__$1 = state_25570;
var statearr_25590_25617 = state_25570__$1;
(statearr_25590_25617[(2)] = inst_25554);

(statearr_25590_25617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (8))){
var inst_25534 = (state_25570[(7)]);
var inst_25543 = (state_25570[(11)]);
var tmp25587 = inst_25534;
var inst_25534__$1 = tmp25587;
var inst_25535 = inst_25543;
var state_25570__$1 = (function (){var statearr_25591 = state_25570;
(statearr_25591[(7)] = inst_25534__$1);

(statearr_25591[(8)] = inst_25535);

return statearr_25591;
})();
var statearr_25592_25618 = state_25570__$1;
(statearr_25592_25618[(2)] = null);

(statearr_25592_25618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto___25604,out))
;
return ((function (switch__19163__auto__,c__19184__auto___25604,out){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_25596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25596[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_25596[(1)] = (1));

return statearr_25596;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_25570){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_25570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e25597){if((e25597 instanceof Object)){
var ex__19167__auto__ = e25597;
var statearr_25598_25619 = state_25570;
(statearr_25598_25619[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25620 = state_25570;
state_25570 = G__25620;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_25570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_25570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___25604,out))
})();
var state__19186__auto__ = (function (){var statearr_25599 = f__19185__auto__.call(null);
(statearr_25599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___25604);

return statearr_25599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___25604,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25621 = [];
var len__17863__auto___25695 = arguments.length;
var i__17864__auto___25696 = (0);
while(true){
if((i__17864__auto___25696 < len__17863__auto___25695)){
args25621.push((arguments[i__17864__auto___25696]));

var G__25697 = (i__17864__auto___25696 + (1));
i__17864__auto___25696 = G__25697;
continue;
} else {
}
break;
}

var G__25623 = args25621.length;
switch (G__25623) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25621.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19184__auto___25699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___25699,out){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___25699,out){
return (function (state_25665){
var state_val_25666 = (state_25665[(1)]);
if((state_val_25666 === (7))){
var inst_25661 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
var statearr_25667_25700 = state_25665__$1;
(statearr_25667_25700[(2)] = inst_25661);

(statearr_25667_25700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (1))){
var inst_25624 = [];
var inst_25625 = inst_25624;
var inst_25626 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25665__$1 = (function (){var statearr_25668 = state_25665;
(statearr_25668[(7)] = inst_25626);

(statearr_25668[(8)] = inst_25625);

return statearr_25668;
})();
var statearr_25669_25701 = state_25665__$1;
(statearr_25669_25701[(2)] = null);

(statearr_25669_25701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (4))){
var inst_25629 = (state_25665[(9)]);
var inst_25629__$1 = (state_25665[(2)]);
var inst_25630 = (inst_25629__$1 == null);
var inst_25631 = cljs.core.not.call(null,inst_25630);
var state_25665__$1 = (function (){var statearr_25670 = state_25665;
(statearr_25670[(9)] = inst_25629__$1);

return statearr_25670;
})();
if(inst_25631){
var statearr_25671_25702 = state_25665__$1;
(statearr_25671_25702[(1)] = (5));

} else {
var statearr_25672_25703 = state_25665__$1;
(statearr_25672_25703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (15))){
var inst_25655 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
var statearr_25673_25704 = state_25665__$1;
(statearr_25673_25704[(2)] = inst_25655);

(statearr_25673_25704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (13))){
var state_25665__$1 = state_25665;
var statearr_25674_25705 = state_25665__$1;
(statearr_25674_25705[(2)] = null);

(statearr_25674_25705[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (6))){
var inst_25625 = (state_25665[(8)]);
var inst_25650 = inst_25625.length;
var inst_25651 = (inst_25650 > (0));
var state_25665__$1 = state_25665;
if(cljs.core.truth_(inst_25651)){
var statearr_25675_25706 = state_25665__$1;
(statearr_25675_25706[(1)] = (12));

} else {
var statearr_25676_25707 = state_25665__$1;
(statearr_25676_25707[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (3))){
var inst_25663 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25665__$1,inst_25663);
} else {
if((state_val_25666 === (12))){
var inst_25625 = (state_25665[(8)]);
var inst_25653 = cljs.core.vec.call(null,inst_25625);
var state_25665__$1 = state_25665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25665__$1,(15),out,inst_25653);
} else {
if((state_val_25666 === (2))){
var state_25665__$1 = state_25665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25665__$1,(4),ch);
} else {
if((state_val_25666 === (11))){
var inst_25629 = (state_25665[(9)]);
var inst_25633 = (state_25665[(10)]);
var inst_25643 = (state_25665[(2)]);
var inst_25644 = [];
var inst_25645 = inst_25644.push(inst_25629);
var inst_25625 = inst_25644;
var inst_25626 = inst_25633;
var state_25665__$1 = (function (){var statearr_25677 = state_25665;
(statearr_25677[(11)] = inst_25643);

(statearr_25677[(7)] = inst_25626);

(statearr_25677[(12)] = inst_25645);

(statearr_25677[(8)] = inst_25625);

return statearr_25677;
})();
var statearr_25678_25708 = state_25665__$1;
(statearr_25678_25708[(2)] = null);

(statearr_25678_25708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (9))){
var inst_25625 = (state_25665[(8)]);
var inst_25641 = cljs.core.vec.call(null,inst_25625);
var state_25665__$1 = state_25665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25665__$1,(11),out,inst_25641);
} else {
if((state_val_25666 === (5))){
var inst_25626 = (state_25665[(7)]);
var inst_25629 = (state_25665[(9)]);
var inst_25633 = (state_25665[(10)]);
var inst_25633__$1 = f.call(null,inst_25629);
var inst_25634 = cljs.core._EQ_.call(null,inst_25633__$1,inst_25626);
var inst_25635 = cljs.core.keyword_identical_QMARK_.call(null,inst_25626,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25636 = (inst_25634) || (inst_25635);
var state_25665__$1 = (function (){var statearr_25679 = state_25665;
(statearr_25679[(10)] = inst_25633__$1);

return statearr_25679;
})();
if(cljs.core.truth_(inst_25636)){
var statearr_25680_25709 = state_25665__$1;
(statearr_25680_25709[(1)] = (8));

} else {
var statearr_25681_25710 = state_25665__$1;
(statearr_25681_25710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (14))){
var inst_25658 = (state_25665[(2)]);
var inst_25659 = cljs.core.async.close_BANG_.call(null,out);
var state_25665__$1 = (function (){var statearr_25683 = state_25665;
(statearr_25683[(13)] = inst_25658);

return statearr_25683;
})();
var statearr_25684_25711 = state_25665__$1;
(statearr_25684_25711[(2)] = inst_25659);

(statearr_25684_25711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (10))){
var inst_25648 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
var statearr_25685_25712 = state_25665__$1;
(statearr_25685_25712[(2)] = inst_25648);

(statearr_25685_25712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (8))){
var inst_25629 = (state_25665[(9)]);
var inst_25633 = (state_25665[(10)]);
var inst_25625 = (state_25665[(8)]);
var inst_25638 = inst_25625.push(inst_25629);
var tmp25682 = inst_25625;
var inst_25625__$1 = tmp25682;
var inst_25626 = inst_25633;
var state_25665__$1 = (function (){var statearr_25686 = state_25665;
(statearr_25686[(7)] = inst_25626);

(statearr_25686[(14)] = inst_25638);

(statearr_25686[(8)] = inst_25625__$1);

return statearr_25686;
})();
var statearr_25687_25713 = state_25665__$1;
(statearr_25687_25713[(2)] = null);

(statearr_25687_25713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19184__auto___25699,out))
;
return ((function (switch__19163__auto__,c__19184__auto___25699,out){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_25691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25691[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_25691[(1)] = (1));

return statearr_25691;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_25665){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_25665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e25692){if((e25692 instanceof Object)){
var ex__19167__auto__ = e25692;
var statearr_25693_25714 = state_25665;
(statearr_25693_25714[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25715 = state_25665;
state_25665 = G__25715;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_25665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_25665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___25699,out))
})();
var state__19186__auto__ = (function (){var statearr_25694 = f__19185__auto__.call(null);
(statearr_25694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___25699);

return statearr_25694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___25699,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1462895596715