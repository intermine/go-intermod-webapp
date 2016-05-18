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
var args30713 = [];
var len__17863__auto___30719 = arguments.length;
var i__17864__auto___30720 = (0);
while(true){
if((i__17864__auto___30720 < len__17863__auto___30719)){
args30713.push((arguments[i__17864__auto___30720]));

var G__30721 = (i__17864__auto___30720 + (1));
i__17864__auto___30720 = G__30721;
continue;
} else {
}
break;
}

var G__30715 = args30713.length;
switch (G__30715) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30713.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30716 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30716 = (function (f,blockable,meta30717){
this.f = f;
this.blockable = blockable;
this.meta30717 = meta30717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30718,meta30717__$1){
var self__ = this;
var _30718__$1 = this;
return (new cljs.core.async.t_cljs$core$async30716(self__.f,self__.blockable,meta30717__$1));
});

cljs.core.async.t_cljs$core$async30716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30718){
var self__ = this;
var _30718__$1 = this;
return self__.meta30717;
});

cljs.core.async.t_cljs$core$async30716.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30716.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30716.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30716.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30717","meta30717",-1154083078,null)], null);
});

cljs.core.async.t_cljs$core$async30716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30716";

cljs.core.async.t_cljs$core$async30716.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async30716");
});

cljs.core.async.__GT_t_cljs$core$async30716 = (function cljs$core$async$__GT_t_cljs$core$async30716(f__$1,blockable__$1,meta30717){
return (new cljs.core.async.t_cljs$core$async30716(f__$1,blockable__$1,meta30717));
});

}

return (new cljs.core.async.t_cljs$core$async30716(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args30725 = [];
var len__17863__auto___30728 = arguments.length;
var i__17864__auto___30729 = (0);
while(true){
if((i__17864__auto___30729 < len__17863__auto___30728)){
args30725.push((arguments[i__17864__auto___30729]));

var G__30730 = (i__17864__auto___30729 + (1));
i__17864__auto___30729 = G__30730;
continue;
} else {
}
break;
}

var G__30727 = args30725.length;
switch (G__30727) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30725.length)].join('')));

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
var args30732 = [];
var len__17863__auto___30735 = arguments.length;
var i__17864__auto___30736 = (0);
while(true){
if((i__17864__auto___30736 < len__17863__auto___30735)){
args30732.push((arguments[i__17864__auto___30736]));

var G__30737 = (i__17864__auto___30736 + (1));
i__17864__auto___30736 = G__30737;
continue;
} else {
}
break;
}

var G__30734 = args30732.length;
switch (G__30734) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30732.length)].join('')));

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
var args30739 = [];
var len__17863__auto___30742 = arguments.length;
var i__17864__auto___30743 = (0);
while(true){
if((i__17864__auto___30743 < len__17863__auto___30742)){
args30739.push((arguments[i__17864__auto___30743]));

var G__30744 = (i__17864__auto___30743 + (1));
i__17864__auto___30743 = G__30744;
continue;
} else {
}
break;
}

var G__30741 = args30739.length;
switch (G__30741) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30739.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30746 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30746);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30746,ret){
return (function (){
return fn1.call(null,val_30746);
});})(val_30746,ret))
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
var args30747 = [];
var len__17863__auto___30750 = arguments.length;
var i__17864__auto___30751 = (0);
while(true){
if((i__17864__auto___30751 < len__17863__auto___30750)){
args30747.push((arguments[i__17864__auto___30751]));

var G__30752 = (i__17864__auto___30751 + (1));
i__17864__auto___30751 = G__30752;
continue;
} else {
}
break;
}

var G__30749 = args30747.length;
switch (G__30749) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30747.length)].join('')));

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
var n__17708__auto___30754 = n;
var x_30755 = (0);
while(true){
if((x_30755 < n__17708__auto___30754)){
(a[x_30755] = (0));

var G__30756 = (x_30755 + (1));
x_30755 = G__30756;
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

var G__30757 = (i + (1));
i = G__30757;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30761 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30761 = (function (alt_flag,flag,meta30762){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30762 = meta30762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30763,meta30762__$1){
var self__ = this;
var _30763__$1 = this;
return (new cljs.core.async.t_cljs$core$async30761(self__.alt_flag,self__.flag,meta30762__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30763){
var self__ = this;
var _30763__$1 = this;
return self__.meta30762;
});})(flag))
;

cljs.core.async.t_cljs$core$async30761.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30761.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30761.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30761.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30761.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30762","meta30762",438168248,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30761.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30761";

cljs.core.async.t_cljs$core$async30761.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async30761");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30761 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30761(alt_flag__$1,flag__$1,meta30762){
return (new cljs.core.async.t_cljs$core$async30761(alt_flag__$1,flag__$1,meta30762));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30761(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30767 = (function (alt_handler,flag,cb,meta30768){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30768 = meta30768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30769,meta30768__$1){
var self__ = this;
var _30769__$1 = this;
return (new cljs.core.async.t_cljs$core$async30767(self__.alt_handler,self__.flag,self__.cb,meta30768__$1));
});

cljs.core.async.t_cljs$core$async30767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30769){
var self__ = this;
var _30769__$1 = this;
return self__.meta30768;
});

cljs.core.async.t_cljs$core$async30767.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30767.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30767.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30767.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30768","meta30768",-332478117,null)], null);
});

cljs.core.async.t_cljs$core$async30767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30767";

cljs.core.async.t_cljs$core$async30767.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async30767");
});

cljs.core.async.__GT_t_cljs$core$async30767 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30767(alt_handler__$1,flag__$1,cb__$1,meta30768){
return (new cljs.core.async.t_cljs$core$async30767(alt_handler__$1,flag__$1,cb__$1,meta30768));
});

}

return (new cljs.core.async.t_cljs$core$async30767(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30770_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30770_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30771_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30771_SHARP_,port], null));
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
var G__30772 = (i + (1));
i = G__30772;
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
var len__17863__auto___30778 = arguments.length;
var i__17864__auto___30779 = (0);
while(true){
if((i__17864__auto___30779 < len__17863__auto___30778)){
args__17870__auto__.push((arguments[i__17864__auto___30779]));

var G__30780 = (i__17864__auto___30779 + (1));
i__17864__auto___30779 = G__30780;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30775){
var map__30776 = p__30775;
var map__30776__$1 = ((((!((map__30776 == null)))?((((map__30776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30776):map__30776);
var opts = map__30776__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30773){
var G__30774 = cljs.core.first.call(null,seq30773);
var seq30773__$1 = cljs.core.next.call(null,seq30773);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30774,seq30773__$1);
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
var args30781 = [];
var len__17863__auto___30831 = arguments.length;
var i__17864__auto___30832 = (0);
while(true){
if((i__17864__auto___30832 < len__17863__auto___30831)){
args30781.push((arguments[i__17864__auto___30832]));

var G__30833 = (i__17864__auto___30832 + (1));
i__17864__auto___30832 = G__30833;
continue;
} else {
}
break;
}

var G__30783 = args30781.length;
switch (G__30783) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30781.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19184__auto___30835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___30835){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___30835){
return (function (state_30807){
var state_val_30808 = (state_30807[(1)]);
if((state_val_30808 === (7))){
var inst_30803 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
var statearr_30809_30836 = state_30807__$1;
(statearr_30809_30836[(2)] = inst_30803);

(statearr_30809_30836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (1))){
var state_30807__$1 = state_30807;
var statearr_30810_30837 = state_30807__$1;
(statearr_30810_30837[(2)] = null);

(statearr_30810_30837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (4))){
var inst_30786 = (state_30807[(7)]);
var inst_30786__$1 = (state_30807[(2)]);
var inst_30787 = (inst_30786__$1 == null);
var state_30807__$1 = (function (){var statearr_30811 = state_30807;
(statearr_30811[(7)] = inst_30786__$1);

return statearr_30811;
})();
if(cljs.core.truth_(inst_30787)){
var statearr_30812_30838 = state_30807__$1;
(statearr_30812_30838[(1)] = (5));

} else {
var statearr_30813_30839 = state_30807__$1;
(statearr_30813_30839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (13))){
var state_30807__$1 = state_30807;
var statearr_30814_30840 = state_30807__$1;
(statearr_30814_30840[(2)] = null);

(statearr_30814_30840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (6))){
var inst_30786 = (state_30807[(7)]);
var state_30807__$1 = state_30807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30807__$1,(11),to,inst_30786);
} else {
if((state_val_30808 === (3))){
var inst_30805 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30807__$1,inst_30805);
} else {
if((state_val_30808 === (12))){
var state_30807__$1 = state_30807;
var statearr_30815_30841 = state_30807__$1;
(statearr_30815_30841[(2)] = null);

(statearr_30815_30841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (2))){
var state_30807__$1 = state_30807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30807__$1,(4),from);
} else {
if((state_val_30808 === (11))){
var inst_30796 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
if(cljs.core.truth_(inst_30796)){
var statearr_30816_30842 = state_30807__$1;
(statearr_30816_30842[(1)] = (12));

} else {
var statearr_30817_30843 = state_30807__$1;
(statearr_30817_30843[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (9))){
var state_30807__$1 = state_30807;
var statearr_30818_30844 = state_30807__$1;
(statearr_30818_30844[(2)] = null);

(statearr_30818_30844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (5))){
var state_30807__$1 = state_30807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30819_30845 = state_30807__$1;
(statearr_30819_30845[(1)] = (8));

} else {
var statearr_30820_30846 = state_30807__$1;
(statearr_30820_30846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (14))){
var inst_30801 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
var statearr_30821_30847 = state_30807__$1;
(statearr_30821_30847[(2)] = inst_30801);

(statearr_30821_30847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (10))){
var inst_30793 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
var statearr_30822_30848 = state_30807__$1;
(statearr_30822_30848[(2)] = inst_30793);

(statearr_30822_30848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (8))){
var inst_30790 = cljs.core.async.close_BANG_.call(null,to);
var state_30807__$1 = state_30807;
var statearr_30823_30849 = state_30807__$1;
(statearr_30823_30849[(2)] = inst_30790);

(statearr_30823_30849[(1)] = (10));


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
});})(c__19184__auto___30835))
;
return ((function (switch__19163__auto__,c__19184__auto___30835){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_30827 = [null,null,null,null,null,null,null,null];
(statearr_30827[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_30827[(1)] = (1));

return statearr_30827;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_30807){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_30807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e30828){if((e30828 instanceof Object)){
var ex__19167__auto__ = e30828;
var statearr_30829_30850 = state_30807;
(statearr_30829_30850[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30851 = state_30807;
state_30807 = G__30851;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_30807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_30807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___30835))
})();
var state__19186__auto__ = (function (){var statearr_30830 = f__19185__auto__.call(null);
(statearr_30830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___30835);

return statearr_30830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___30835))
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
return (function (p__31035){
var vec__31036 = p__31035;
var v = cljs.core.nth.call(null,vec__31036,(0),null);
var p = cljs.core.nth.call(null,vec__31036,(1),null);
var job = vec__31036;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19184__auto___31218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___31218,res,vec__31036,v,p,job,jobs,results){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___31218,res,vec__31036,v,p,job,jobs,results){
return (function (state_31041){
var state_val_31042 = (state_31041[(1)]);
if((state_val_31042 === (1))){
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31041__$1,(2),res,v);
} else {
if((state_val_31042 === (2))){
var inst_31038 = (state_31041[(2)]);
var inst_31039 = cljs.core.async.close_BANG_.call(null,res);
var state_31041__$1 = (function (){var statearr_31043 = state_31041;
(statearr_31043[(7)] = inst_31038);

return statearr_31043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31041__$1,inst_31039);
} else {
return null;
}
}
});})(c__19184__auto___31218,res,vec__31036,v,p,job,jobs,results))
;
return ((function (switch__19163__auto__,c__19184__auto___31218,res,vec__31036,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0 = (function (){
var statearr_31047 = [null,null,null,null,null,null,null,null];
(statearr_31047[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__);

(statearr_31047[(1)] = (1));

return statearr_31047;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1 = (function (state_31041){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_31041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e31048){if((e31048 instanceof Object)){
var ex__19167__auto__ = e31048;
var statearr_31049_31219 = state_31041;
(statearr_31049_31219[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31220 = state_31041;
state_31041 = G__31220;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = function(state_31041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1.call(this,state_31041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___31218,res,vec__31036,v,p,job,jobs,results))
})();
var state__19186__auto__ = (function (){var statearr_31050 = f__19185__auto__.call(null);
(statearr_31050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___31218);

return statearr_31050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___31218,res,vec__31036,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31051){
var vec__31052 = p__31051;
var v = cljs.core.nth.call(null,vec__31052,(0),null);
var p = cljs.core.nth.call(null,vec__31052,(1),null);
var job = vec__31052;
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
var n__17708__auto___31221 = n;
var __31222 = (0);
while(true){
if((__31222 < n__17708__auto___31221)){
var G__31053_31223 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31053_31223) {
case "compute":
var c__19184__auto___31225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31222,c__19184__auto___31225,G__31053_31223,n__17708__auto___31221,jobs,results,process,async){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (__31222,c__19184__auto___31225,G__31053_31223,n__17708__auto___31221,jobs,results,process,async){
return (function (state_31066){
var state_val_31067 = (state_31066[(1)]);
if((state_val_31067 === (1))){
var state_31066__$1 = state_31066;
var statearr_31068_31226 = state_31066__$1;
(statearr_31068_31226[(2)] = null);

(statearr_31068_31226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (2))){
var state_31066__$1 = state_31066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31066__$1,(4),jobs);
} else {
if((state_val_31067 === (3))){
var inst_31064 = (state_31066[(2)]);
var state_31066__$1 = state_31066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31066__$1,inst_31064);
} else {
if((state_val_31067 === (4))){
var inst_31056 = (state_31066[(2)]);
var inst_31057 = process.call(null,inst_31056);
var state_31066__$1 = state_31066;
if(cljs.core.truth_(inst_31057)){
var statearr_31069_31227 = state_31066__$1;
(statearr_31069_31227[(1)] = (5));

} else {
var statearr_31070_31228 = state_31066__$1;
(statearr_31070_31228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (5))){
var state_31066__$1 = state_31066;
var statearr_31071_31229 = state_31066__$1;
(statearr_31071_31229[(2)] = null);

(statearr_31071_31229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (6))){
var state_31066__$1 = state_31066;
var statearr_31072_31230 = state_31066__$1;
(statearr_31072_31230[(2)] = null);

(statearr_31072_31230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (7))){
var inst_31062 = (state_31066[(2)]);
var state_31066__$1 = state_31066;
var statearr_31073_31231 = state_31066__$1;
(statearr_31073_31231[(2)] = inst_31062);

(statearr_31073_31231[(1)] = (3));


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
});})(__31222,c__19184__auto___31225,G__31053_31223,n__17708__auto___31221,jobs,results,process,async))
;
return ((function (__31222,switch__19163__auto__,c__19184__auto___31225,G__31053_31223,n__17708__auto___31221,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0 = (function (){
var statearr_31077 = [null,null,null,null,null,null,null];
(statearr_31077[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__);

(statearr_31077[(1)] = (1));

return statearr_31077;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1 = (function (state_31066){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_31066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e31078){if((e31078 instanceof Object)){
var ex__19167__auto__ = e31078;
var statearr_31079_31232 = state_31066;
(statearr_31079_31232[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31233 = state_31066;
state_31066 = G__31233;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = function(state_31066){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1.call(this,state_31066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__;
})()
;})(__31222,switch__19163__auto__,c__19184__auto___31225,G__31053_31223,n__17708__auto___31221,jobs,results,process,async))
})();
var state__19186__auto__ = (function (){var statearr_31080 = f__19185__auto__.call(null);
(statearr_31080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___31225);

return statearr_31080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(__31222,c__19184__auto___31225,G__31053_31223,n__17708__auto___31221,jobs,results,process,async))
);


break;
case "async":
var c__19184__auto___31234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31222,c__19184__auto___31234,G__31053_31223,n__17708__auto___31221,jobs,results,process,async){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (__31222,c__19184__auto___31234,G__31053_31223,n__17708__auto___31221,jobs,results,process,async){
return (function (state_31093){
var state_val_31094 = (state_31093[(1)]);
if((state_val_31094 === (1))){
var state_31093__$1 = state_31093;
var statearr_31095_31235 = state_31093__$1;
(statearr_31095_31235[(2)] = null);

(statearr_31095_31235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31094 === (2))){
var state_31093__$1 = state_31093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31093__$1,(4),jobs);
} else {
if((state_val_31094 === (3))){
var inst_31091 = (state_31093[(2)]);
var state_31093__$1 = state_31093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31093__$1,inst_31091);
} else {
if((state_val_31094 === (4))){
var inst_31083 = (state_31093[(2)]);
var inst_31084 = async.call(null,inst_31083);
var state_31093__$1 = state_31093;
if(cljs.core.truth_(inst_31084)){
var statearr_31096_31236 = state_31093__$1;
(statearr_31096_31236[(1)] = (5));

} else {
var statearr_31097_31237 = state_31093__$1;
(statearr_31097_31237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31094 === (5))){
var state_31093__$1 = state_31093;
var statearr_31098_31238 = state_31093__$1;
(statearr_31098_31238[(2)] = null);

(statearr_31098_31238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31094 === (6))){
var state_31093__$1 = state_31093;
var statearr_31099_31239 = state_31093__$1;
(statearr_31099_31239[(2)] = null);

(statearr_31099_31239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31094 === (7))){
var inst_31089 = (state_31093[(2)]);
var state_31093__$1 = state_31093;
var statearr_31100_31240 = state_31093__$1;
(statearr_31100_31240[(2)] = inst_31089);

(statearr_31100_31240[(1)] = (3));


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
});})(__31222,c__19184__auto___31234,G__31053_31223,n__17708__auto___31221,jobs,results,process,async))
;
return ((function (__31222,switch__19163__auto__,c__19184__auto___31234,G__31053_31223,n__17708__auto___31221,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0 = (function (){
var statearr_31104 = [null,null,null,null,null,null,null];
(statearr_31104[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__);

(statearr_31104[(1)] = (1));

return statearr_31104;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1 = (function (state_31093){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_31093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e31105){if((e31105 instanceof Object)){
var ex__19167__auto__ = e31105;
var statearr_31106_31241 = state_31093;
(statearr_31106_31241[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31242 = state_31093;
state_31093 = G__31242;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = function(state_31093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1.call(this,state_31093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__;
})()
;})(__31222,switch__19163__auto__,c__19184__auto___31234,G__31053_31223,n__17708__auto___31221,jobs,results,process,async))
})();
var state__19186__auto__ = (function (){var statearr_31107 = f__19185__auto__.call(null);
(statearr_31107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___31234);

return statearr_31107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(__31222,c__19184__auto___31234,G__31053_31223,n__17708__auto___31221,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31243 = (__31222 + (1));
__31222 = G__31243;
continue;
} else {
}
break;
}

var c__19184__auto___31244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___31244,jobs,results,process,async){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___31244,jobs,results,process,async){
return (function (state_31129){
var state_val_31130 = (state_31129[(1)]);
if((state_val_31130 === (1))){
var state_31129__$1 = state_31129;
var statearr_31131_31245 = state_31129__$1;
(statearr_31131_31245[(2)] = null);

(statearr_31131_31245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (2))){
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31129__$1,(4),from);
} else {
if((state_val_31130 === (3))){
var inst_31127 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31129__$1,inst_31127);
} else {
if((state_val_31130 === (4))){
var inst_31110 = (state_31129[(7)]);
var inst_31110__$1 = (state_31129[(2)]);
var inst_31111 = (inst_31110__$1 == null);
var state_31129__$1 = (function (){var statearr_31132 = state_31129;
(statearr_31132[(7)] = inst_31110__$1);

return statearr_31132;
})();
if(cljs.core.truth_(inst_31111)){
var statearr_31133_31246 = state_31129__$1;
(statearr_31133_31246[(1)] = (5));

} else {
var statearr_31134_31247 = state_31129__$1;
(statearr_31134_31247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (5))){
var inst_31113 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31129__$1 = state_31129;
var statearr_31135_31248 = state_31129__$1;
(statearr_31135_31248[(2)] = inst_31113);

(statearr_31135_31248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (6))){
var inst_31115 = (state_31129[(8)]);
var inst_31110 = (state_31129[(7)]);
var inst_31115__$1 = cljs.core.async.chan.call(null,(1));
var inst_31116 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31117 = [inst_31110,inst_31115__$1];
var inst_31118 = (new cljs.core.PersistentVector(null,2,(5),inst_31116,inst_31117,null));
var state_31129__$1 = (function (){var statearr_31136 = state_31129;
(statearr_31136[(8)] = inst_31115__$1);

return statearr_31136;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31129__$1,(8),jobs,inst_31118);
} else {
if((state_val_31130 === (7))){
var inst_31125 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
var statearr_31137_31249 = state_31129__$1;
(statearr_31137_31249[(2)] = inst_31125);

(statearr_31137_31249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (8))){
var inst_31115 = (state_31129[(8)]);
var inst_31120 = (state_31129[(2)]);
var state_31129__$1 = (function (){var statearr_31138 = state_31129;
(statearr_31138[(9)] = inst_31120);

return statearr_31138;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31129__$1,(9),results,inst_31115);
} else {
if((state_val_31130 === (9))){
var inst_31122 = (state_31129[(2)]);
var state_31129__$1 = (function (){var statearr_31139 = state_31129;
(statearr_31139[(10)] = inst_31122);

return statearr_31139;
})();
var statearr_31140_31250 = state_31129__$1;
(statearr_31140_31250[(2)] = null);

(statearr_31140_31250[(1)] = (2));


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
});})(c__19184__auto___31244,jobs,results,process,async))
;
return ((function (switch__19163__auto__,c__19184__auto___31244,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0 = (function (){
var statearr_31144 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31144[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__);

(statearr_31144[(1)] = (1));

return statearr_31144;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1 = (function (state_31129){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_31129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e31145){if((e31145 instanceof Object)){
var ex__19167__auto__ = e31145;
var statearr_31146_31251 = state_31129;
(statearr_31146_31251[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31252 = state_31129;
state_31129 = G__31252;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = function(state_31129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1.call(this,state_31129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___31244,jobs,results,process,async))
})();
var state__19186__auto__ = (function (){var statearr_31147 = f__19185__auto__.call(null);
(statearr_31147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___31244);

return statearr_31147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___31244,jobs,results,process,async))
);


var c__19184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto__,jobs,results,process,async){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto__,jobs,results,process,async){
return (function (state_31185){
var state_val_31186 = (state_31185[(1)]);
if((state_val_31186 === (7))){
var inst_31181 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31187_31253 = state_31185__$1;
(statearr_31187_31253[(2)] = inst_31181);

(statearr_31187_31253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (20))){
var state_31185__$1 = state_31185;
var statearr_31188_31254 = state_31185__$1;
(statearr_31188_31254[(2)] = null);

(statearr_31188_31254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (1))){
var state_31185__$1 = state_31185;
var statearr_31189_31255 = state_31185__$1;
(statearr_31189_31255[(2)] = null);

(statearr_31189_31255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (4))){
var inst_31150 = (state_31185[(7)]);
var inst_31150__$1 = (state_31185[(2)]);
var inst_31151 = (inst_31150__$1 == null);
var state_31185__$1 = (function (){var statearr_31190 = state_31185;
(statearr_31190[(7)] = inst_31150__$1);

return statearr_31190;
})();
if(cljs.core.truth_(inst_31151)){
var statearr_31191_31256 = state_31185__$1;
(statearr_31191_31256[(1)] = (5));

} else {
var statearr_31192_31257 = state_31185__$1;
(statearr_31192_31257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (15))){
var inst_31163 = (state_31185[(8)]);
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31185__$1,(18),to,inst_31163);
} else {
if((state_val_31186 === (21))){
var inst_31176 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31193_31258 = state_31185__$1;
(statearr_31193_31258[(2)] = inst_31176);

(statearr_31193_31258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (13))){
var inst_31178 = (state_31185[(2)]);
var state_31185__$1 = (function (){var statearr_31194 = state_31185;
(statearr_31194[(9)] = inst_31178);

return statearr_31194;
})();
var statearr_31195_31259 = state_31185__$1;
(statearr_31195_31259[(2)] = null);

(statearr_31195_31259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (6))){
var inst_31150 = (state_31185[(7)]);
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31185__$1,(11),inst_31150);
} else {
if((state_val_31186 === (17))){
var inst_31171 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
if(cljs.core.truth_(inst_31171)){
var statearr_31196_31260 = state_31185__$1;
(statearr_31196_31260[(1)] = (19));

} else {
var statearr_31197_31261 = state_31185__$1;
(statearr_31197_31261[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (3))){
var inst_31183 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31185__$1,inst_31183);
} else {
if((state_val_31186 === (12))){
var inst_31160 = (state_31185[(10)]);
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31185__$1,(14),inst_31160);
} else {
if((state_val_31186 === (2))){
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31185__$1,(4),results);
} else {
if((state_val_31186 === (19))){
var state_31185__$1 = state_31185;
var statearr_31198_31262 = state_31185__$1;
(statearr_31198_31262[(2)] = null);

(statearr_31198_31262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (11))){
var inst_31160 = (state_31185[(2)]);
var state_31185__$1 = (function (){var statearr_31199 = state_31185;
(statearr_31199[(10)] = inst_31160);

return statearr_31199;
})();
var statearr_31200_31263 = state_31185__$1;
(statearr_31200_31263[(2)] = null);

(statearr_31200_31263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (9))){
var state_31185__$1 = state_31185;
var statearr_31201_31264 = state_31185__$1;
(statearr_31201_31264[(2)] = null);

(statearr_31201_31264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (5))){
var state_31185__$1 = state_31185;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31202_31265 = state_31185__$1;
(statearr_31202_31265[(1)] = (8));

} else {
var statearr_31203_31266 = state_31185__$1;
(statearr_31203_31266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (14))){
var inst_31163 = (state_31185[(8)]);
var inst_31165 = (state_31185[(11)]);
var inst_31163__$1 = (state_31185[(2)]);
var inst_31164 = (inst_31163__$1 == null);
var inst_31165__$1 = cljs.core.not.call(null,inst_31164);
var state_31185__$1 = (function (){var statearr_31204 = state_31185;
(statearr_31204[(8)] = inst_31163__$1);

(statearr_31204[(11)] = inst_31165__$1);

return statearr_31204;
})();
if(inst_31165__$1){
var statearr_31205_31267 = state_31185__$1;
(statearr_31205_31267[(1)] = (15));

} else {
var statearr_31206_31268 = state_31185__$1;
(statearr_31206_31268[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (16))){
var inst_31165 = (state_31185[(11)]);
var state_31185__$1 = state_31185;
var statearr_31207_31269 = state_31185__$1;
(statearr_31207_31269[(2)] = inst_31165);

(statearr_31207_31269[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (10))){
var inst_31157 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31208_31270 = state_31185__$1;
(statearr_31208_31270[(2)] = inst_31157);

(statearr_31208_31270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (18))){
var inst_31168 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31209_31271 = state_31185__$1;
(statearr_31209_31271[(2)] = inst_31168);

(statearr_31209_31271[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (8))){
var inst_31154 = cljs.core.async.close_BANG_.call(null,to);
var state_31185__$1 = state_31185;
var statearr_31210_31272 = state_31185__$1;
(statearr_31210_31272[(2)] = inst_31154);

(statearr_31210_31272[(1)] = (10));


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
var statearr_31214 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31214[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__);

(statearr_31214[(1)] = (1));

return statearr_31214;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1 = (function (state_31185){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_31185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e31215){if((e31215 instanceof Object)){
var ex__19167__auto__ = e31215;
var statearr_31216_31273 = state_31185;
(statearr_31216_31273[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31274 = state_31185;
state_31185 = G__31274;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__ = function(state_31185){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1.call(this,state_31185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19164__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__,jobs,results,process,async))
})();
var state__19186__auto__ = (function (){var statearr_31217 = f__19185__auto__.call(null);
(statearr_31217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_31217;
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
var args31275 = [];
var len__17863__auto___31278 = arguments.length;
var i__17864__auto___31279 = (0);
while(true){
if((i__17864__auto___31279 < len__17863__auto___31278)){
args31275.push((arguments[i__17864__auto___31279]));

var G__31280 = (i__17864__auto___31279 + (1));
i__17864__auto___31279 = G__31280;
continue;
} else {
}
break;
}

var G__31277 = args31275.length;
switch (G__31277) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31275.length)].join('')));

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
var args31282 = [];
var len__17863__auto___31285 = arguments.length;
var i__17864__auto___31286 = (0);
while(true){
if((i__17864__auto___31286 < len__17863__auto___31285)){
args31282.push((arguments[i__17864__auto___31286]));

var G__31287 = (i__17864__auto___31286 + (1));
i__17864__auto___31286 = G__31287;
continue;
} else {
}
break;
}

var G__31284 = args31282.length;
switch (G__31284) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31282.length)].join('')));

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
var args31289 = [];
var len__17863__auto___31342 = arguments.length;
var i__17864__auto___31343 = (0);
while(true){
if((i__17864__auto___31343 < len__17863__auto___31342)){
args31289.push((arguments[i__17864__auto___31343]));

var G__31344 = (i__17864__auto___31343 + (1));
i__17864__auto___31343 = G__31344;
continue;
} else {
}
break;
}

var G__31291 = args31289.length;
switch (G__31291) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31289.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19184__auto___31346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___31346,tc,fc){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___31346,tc,fc){
return (function (state_31317){
var state_val_31318 = (state_31317[(1)]);
if((state_val_31318 === (7))){
var inst_31313 = (state_31317[(2)]);
var state_31317__$1 = state_31317;
var statearr_31319_31347 = state_31317__$1;
(statearr_31319_31347[(2)] = inst_31313);

(statearr_31319_31347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (1))){
var state_31317__$1 = state_31317;
var statearr_31320_31348 = state_31317__$1;
(statearr_31320_31348[(2)] = null);

(statearr_31320_31348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (4))){
var inst_31294 = (state_31317[(7)]);
var inst_31294__$1 = (state_31317[(2)]);
var inst_31295 = (inst_31294__$1 == null);
var state_31317__$1 = (function (){var statearr_31321 = state_31317;
(statearr_31321[(7)] = inst_31294__$1);

return statearr_31321;
})();
if(cljs.core.truth_(inst_31295)){
var statearr_31322_31349 = state_31317__$1;
(statearr_31322_31349[(1)] = (5));

} else {
var statearr_31323_31350 = state_31317__$1;
(statearr_31323_31350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (13))){
var state_31317__$1 = state_31317;
var statearr_31324_31351 = state_31317__$1;
(statearr_31324_31351[(2)] = null);

(statearr_31324_31351[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (6))){
var inst_31294 = (state_31317[(7)]);
var inst_31300 = p.call(null,inst_31294);
var state_31317__$1 = state_31317;
if(cljs.core.truth_(inst_31300)){
var statearr_31325_31352 = state_31317__$1;
(statearr_31325_31352[(1)] = (9));

} else {
var statearr_31326_31353 = state_31317__$1;
(statearr_31326_31353[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (3))){
var inst_31315 = (state_31317[(2)]);
var state_31317__$1 = state_31317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31317__$1,inst_31315);
} else {
if((state_val_31318 === (12))){
var state_31317__$1 = state_31317;
var statearr_31327_31354 = state_31317__$1;
(statearr_31327_31354[(2)] = null);

(statearr_31327_31354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (2))){
var state_31317__$1 = state_31317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31317__$1,(4),ch);
} else {
if((state_val_31318 === (11))){
var inst_31294 = (state_31317[(7)]);
var inst_31304 = (state_31317[(2)]);
var state_31317__$1 = state_31317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31317__$1,(8),inst_31304,inst_31294);
} else {
if((state_val_31318 === (9))){
var state_31317__$1 = state_31317;
var statearr_31328_31355 = state_31317__$1;
(statearr_31328_31355[(2)] = tc);

(statearr_31328_31355[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (5))){
var inst_31297 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31298 = cljs.core.async.close_BANG_.call(null,fc);
var state_31317__$1 = (function (){var statearr_31329 = state_31317;
(statearr_31329[(8)] = inst_31297);

return statearr_31329;
})();
var statearr_31330_31356 = state_31317__$1;
(statearr_31330_31356[(2)] = inst_31298);

(statearr_31330_31356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (14))){
var inst_31311 = (state_31317[(2)]);
var state_31317__$1 = state_31317;
var statearr_31331_31357 = state_31317__$1;
(statearr_31331_31357[(2)] = inst_31311);

(statearr_31331_31357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (10))){
var state_31317__$1 = state_31317;
var statearr_31332_31358 = state_31317__$1;
(statearr_31332_31358[(2)] = fc);

(statearr_31332_31358[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (8))){
var inst_31306 = (state_31317[(2)]);
var state_31317__$1 = state_31317;
if(cljs.core.truth_(inst_31306)){
var statearr_31333_31359 = state_31317__$1;
(statearr_31333_31359[(1)] = (12));

} else {
var statearr_31334_31360 = state_31317__$1;
(statearr_31334_31360[(1)] = (13));

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
});})(c__19184__auto___31346,tc,fc))
;
return ((function (switch__19163__auto__,c__19184__auto___31346,tc,fc){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_31338 = [null,null,null,null,null,null,null,null,null];
(statearr_31338[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_31338[(1)] = (1));

return statearr_31338;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_31317){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_31317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e31339){if((e31339 instanceof Object)){
var ex__19167__auto__ = e31339;
var statearr_31340_31361 = state_31317;
(statearr_31340_31361[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31362 = state_31317;
state_31317 = G__31362;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_31317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_31317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___31346,tc,fc))
})();
var state__19186__auto__ = (function (){var statearr_31341 = f__19185__auto__.call(null);
(statearr_31341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___31346);

return statearr_31341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___31346,tc,fc))
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
return (function (state_31426){
var state_val_31427 = (state_31426[(1)]);
if((state_val_31427 === (7))){
var inst_31422 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
var statearr_31428_31449 = state_31426__$1;
(statearr_31428_31449[(2)] = inst_31422);

(statearr_31428_31449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (1))){
var inst_31406 = init;
var state_31426__$1 = (function (){var statearr_31429 = state_31426;
(statearr_31429[(7)] = inst_31406);

return statearr_31429;
})();
var statearr_31430_31450 = state_31426__$1;
(statearr_31430_31450[(2)] = null);

(statearr_31430_31450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (4))){
var inst_31409 = (state_31426[(8)]);
var inst_31409__$1 = (state_31426[(2)]);
var inst_31410 = (inst_31409__$1 == null);
var state_31426__$1 = (function (){var statearr_31431 = state_31426;
(statearr_31431[(8)] = inst_31409__$1);

return statearr_31431;
})();
if(cljs.core.truth_(inst_31410)){
var statearr_31432_31451 = state_31426__$1;
(statearr_31432_31451[(1)] = (5));

} else {
var statearr_31433_31452 = state_31426__$1;
(statearr_31433_31452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (6))){
var inst_31409 = (state_31426[(8)]);
var inst_31406 = (state_31426[(7)]);
var inst_31413 = (state_31426[(9)]);
var inst_31413__$1 = f.call(null,inst_31406,inst_31409);
var inst_31414 = cljs.core.reduced_QMARK_.call(null,inst_31413__$1);
var state_31426__$1 = (function (){var statearr_31434 = state_31426;
(statearr_31434[(9)] = inst_31413__$1);

return statearr_31434;
})();
if(inst_31414){
var statearr_31435_31453 = state_31426__$1;
(statearr_31435_31453[(1)] = (8));

} else {
var statearr_31436_31454 = state_31426__$1;
(statearr_31436_31454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (3))){
var inst_31424 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31426__$1,inst_31424);
} else {
if((state_val_31427 === (2))){
var state_31426__$1 = state_31426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31426__$1,(4),ch);
} else {
if((state_val_31427 === (9))){
var inst_31413 = (state_31426[(9)]);
var inst_31406 = inst_31413;
var state_31426__$1 = (function (){var statearr_31437 = state_31426;
(statearr_31437[(7)] = inst_31406);

return statearr_31437;
})();
var statearr_31438_31455 = state_31426__$1;
(statearr_31438_31455[(2)] = null);

(statearr_31438_31455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (5))){
var inst_31406 = (state_31426[(7)]);
var state_31426__$1 = state_31426;
var statearr_31439_31456 = state_31426__$1;
(statearr_31439_31456[(2)] = inst_31406);

(statearr_31439_31456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (10))){
var inst_31420 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
var statearr_31440_31457 = state_31426__$1;
(statearr_31440_31457[(2)] = inst_31420);

(statearr_31440_31457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (8))){
var inst_31413 = (state_31426[(9)]);
var inst_31416 = cljs.core.deref.call(null,inst_31413);
var state_31426__$1 = state_31426;
var statearr_31441_31458 = state_31426__$1;
(statearr_31441_31458[(2)] = inst_31416);

(statearr_31441_31458[(1)] = (10));


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
var statearr_31445 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31445[(0)] = cljs$core$async$reduce_$_state_machine__19164__auto__);

(statearr_31445[(1)] = (1));

return statearr_31445;
});
var cljs$core$async$reduce_$_state_machine__19164__auto____1 = (function (state_31426){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_31426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e31446){if((e31446 instanceof Object)){
var ex__19167__auto__ = e31446;
var statearr_31447_31459 = state_31426;
(statearr_31447_31459[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31460 = state_31426;
state_31426 = G__31460;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19164__auto__ = function(state_31426){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19164__auto____1.call(this,state_31426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19164__auto____0;
cljs$core$async$reduce_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19164__auto____1;
return cljs$core$async$reduce_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__))
})();
var state__19186__auto__ = (function (){var statearr_31448 = f__19185__auto__.call(null);
(statearr_31448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_31448;
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
var args31461 = [];
var len__17863__auto___31513 = arguments.length;
var i__17864__auto___31514 = (0);
while(true){
if((i__17864__auto___31514 < len__17863__auto___31513)){
args31461.push((arguments[i__17864__auto___31514]));

var G__31515 = (i__17864__auto___31514 + (1));
i__17864__auto___31514 = G__31515;
continue;
} else {
}
break;
}

var G__31463 = args31461.length;
switch (G__31463) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31461.length)].join('')));

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
return (function (state_31488){
var state_val_31489 = (state_31488[(1)]);
if((state_val_31489 === (7))){
var inst_31470 = (state_31488[(2)]);
var state_31488__$1 = state_31488;
var statearr_31490_31517 = state_31488__$1;
(statearr_31490_31517[(2)] = inst_31470);

(statearr_31490_31517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (1))){
var inst_31464 = cljs.core.seq.call(null,coll);
var inst_31465 = inst_31464;
var state_31488__$1 = (function (){var statearr_31491 = state_31488;
(statearr_31491[(7)] = inst_31465);

return statearr_31491;
})();
var statearr_31492_31518 = state_31488__$1;
(statearr_31492_31518[(2)] = null);

(statearr_31492_31518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (4))){
var inst_31465 = (state_31488[(7)]);
var inst_31468 = cljs.core.first.call(null,inst_31465);
var state_31488__$1 = state_31488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31488__$1,(7),ch,inst_31468);
} else {
if((state_val_31489 === (13))){
var inst_31482 = (state_31488[(2)]);
var state_31488__$1 = state_31488;
var statearr_31493_31519 = state_31488__$1;
(statearr_31493_31519[(2)] = inst_31482);

(statearr_31493_31519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (6))){
var inst_31473 = (state_31488[(2)]);
var state_31488__$1 = state_31488;
if(cljs.core.truth_(inst_31473)){
var statearr_31494_31520 = state_31488__$1;
(statearr_31494_31520[(1)] = (8));

} else {
var statearr_31495_31521 = state_31488__$1;
(statearr_31495_31521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (3))){
var inst_31486 = (state_31488[(2)]);
var state_31488__$1 = state_31488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31488__$1,inst_31486);
} else {
if((state_val_31489 === (12))){
var state_31488__$1 = state_31488;
var statearr_31496_31522 = state_31488__$1;
(statearr_31496_31522[(2)] = null);

(statearr_31496_31522[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (2))){
var inst_31465 = (state_31488[(7)]);
var state_31488__$1 = state_31488;
if(cljs.core.truth_(inst_31465)){
var statearr_31497_31523 = state_31488__$1;
(statearr_31497_31523[(1)] = (4));

} else {
var statearr_31498_31524 = state_31488__$1;
(statearr_31498_31524[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (11))){
var inst_31479 = cljs.core.async.close_BANG_.call(null,ch);
var state_31488__$1 = state_31488;
var statearr_31499_31525 = state_31488__$1;
(statearr_31499_31525[(2)] = inst_31479);

(statearr_31499_31525[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (9))){
var state_31488__$1 = state_31488;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31500_31526 = state_31488__$1;
(statearr_31500_31526[(1)] = (11));

} else {
var statearr_31501_31527 = state_31488__$1;
(statearr_31501_31527[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (5))){
var inst_31465 = (state_31488[(7)]);
var state_31488__$1 = state_31488;
var statearr_31502_31528 = state_31488__$1;
(statearr_31502_31528[(2)] = inst_31465);

(statearr_31502_31528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (10))){
var inst_31484 = (state_31488[(2)]);
var state_31488__$1 = state_31488;
var statearr_31503_31529 = state_31488__$1;
(statearr_31503_31529[(2)] = inst_31484);

(statearr_31503_31529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (8))){
var inst_31465 = (state_31488[(7)]);
var inst_31475 = cljs.core.next.call(null,inst_31465);
var inst_31465__$1 = inst_31475;
var state_31488__$1 = (function (){var statearr_31504 = state_31488;
(statearr_31504[(7)] = inst_31465__$1);

return statearr_31504;
})();
var statearr_31505_31530 = state_31488__$1;
(statearr_31505_31530[(2)] = null);

(statearr_31505_31530[(1)] = (2));


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
var statearr_31509 = [null,null,null,null,null,null,null,null];
(statearr_31509[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_31509[(1)] = (1));

return statearr_31509;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_31488){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_31488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e31510){if((e31510 instanceof Object)){
var ex__19167__auto__ = e31510;
var statearr_31511_31531 = state_31488;
(statearr_31511_31531[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31532 = state_31488;
state_31488 = G__31532;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_31488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_31488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__))
})();
var state__19186__auto__ = (function (){var statearr_31512 = f__19185__auto__.call(null);
(statearr_31512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_31512;
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
if(typeof cljs.core.async.t_cljs$core$async31754 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31754 = (function (mult,ch,cs,meta31755){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31755 = meta31755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31756,meta31755__$1){
var self__ = this;
var _31756__$1 = this;
return (new cljs.core.async.t_cljs$core$async31754(self__.mult,self__.ch,self__.cs,meta31755__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31754.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31756){
var self__ = this;
var _31756__$1 = this;
return self__.meta31755;
});})(cs))
;

cljs.core.async.t_cljs$core$async31754.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31754.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31754.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31754.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31754.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31754.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31754.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31755","meta31755",1574482905,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31754.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31754";

cljs.core.async.t_cljs$core$async31754.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async31754");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31754 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31754(mult__$1,ch__$1,cs__$1,meta31755){
return (new cljs.core.async.t_cljs$core$async31754(mult__$1,ch__$1,cs__$1,meta31755));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31754(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19184__auto___31975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___31975,cs,m,dchan,dctr,done){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___31975,cs,m,dchan,dctr,done){
return (function (state_31887){
var state_val_31888 = (state_31887[(1)]);
if((state_val_31888 === (7))){
var inst_31883 = (state_31887[(2)]);
var state_31887__$1 = state_31887;
var statearr_31889_31976 = state_31887__$1;
(statearr_31889_31976[(2)] = inst_31883);

(statearr_31889_31976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (20))){
var inst_31788 = (state_31887[(7)]);
var inst_31798 = cljs.core.first.call(null,inst_31788);
var inst_31799 = cljs.core.nth.call(null,inst_31798,(0),null);
var inst_31800 = cljs.core.nth.call(null,inst_31798,(1),null);
var state_31887__$1 = (function (){var statearr_31890 = state_31887;
(statearr_31890[(8)] = inst_31799);

return statearr_31890;
})();
if(cljs.core.truth_(inst_31800)){
var statearr_31891_31977 = state_31887__$1;
(statearr_31891_31977[(1)] = (22));

} else {
var statearr_31892_31978 = state_31887__$1;
(statearr_31892_31978[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (27))){
var inst_31828 = (state_31887[(9)]);
var inst_31759 = (state_31887[(10)]);
var inst_31835 = (state_31887[(11)]);
var inst_31830 = (state_31887[(12)]);
var inst_31835__$1 = cljs.core._nth.call(null,inst_31828,inst_31830);
var inst_31836 = cljs.core.async.put_BANG_.call(null,inst_31835__$1,inst_31759,done);
var state_31887__$1 = (function (){var statearr_31893 = state_31887;
(statearr_31893[(11)] = inst_31835__$1);

return statearr_31893;
})();
if(cljs.core.truth_(inst_31836)){
var statearr_31894_31979 = state_31887__$1;
(statearr_31894_31979[(1)] = (30));

} else {
var statearr_31895_31980 = state_31887__$1;
(statearr_31895_31980[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (1))){
var state_31887__$1 = state_31887;
var statearr_31896_31981 = state_31887__$1;
(statearr_31896_31981[(2)] = null);

(statearr_31896_31981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (24))){
var inst_31788 = (state_31887[(7)]);
var inst_31805 = (state_31887[(2)]);
var inst_31806 = cljs.core.next.call(null,inst_31788);
var inst_31768 = inst_31806;
var inst_31769 = null;
var inst_31770 = (0);
var inst_31771 = (0);
var state_31887__$1 = (function (){var statearr_31897 = state_31887;
(statearr_31897[(13)] = inst_31770);

(statearr_31897[(14)] = inst_31768);

(statearr_31897[(15)] = inst_31805);

(statearr_31897[(16)] = inst_31771);

(statearr_31897[(17)] = inst_31769);

return statearr_31897;
})();
var statearr_31898_31982 = state_31887__$1;
(statearr_31898_31982[(2)] = null);

(statearr_31898_31982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (39))){
var state_31887__$1 = state_31887;
var statearr_31902_31983 = state_31887__$1;
(statearr_31902_31983[(2)] = null);

(statearr_31902_31983[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (4))){
var inst_31759 = (state_31887[(10)]);
var inst_31759__$1 = (state_31887[(2)]);
var inst_31760 = (inst_31759__$1 == null);
var state_31887__$1 = (function (){var statearr_31903 = state_31887;
(statearr_31903[(10)] = inst_31759__$1);

return statearr_31903;
})();
if(cljs.core.truth_(inst_31760)){
var statearr_31904_31984 = state_31887__$1;
(statearr_31904_31984[(1)] = (5));

} else {
var statearr_31905_31985 = state_31887__$1;
(statearr_31905_31985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (15))){
var inst_31770 = (state_31887[(13)]);
var inst_31768 = (state_31887[(14)]);
var inst_31771 = (state_31887[(16)]);
var inst_31769 = (state_31887[(17)]);
var inst_31784 = (state_31887[(2)]);
var inst_31785 = (inst_31771 + (1));
var tmp31899 = inst_31770;
var tmp31900 = inst_31768;
var tmp31901 = inst_31769;
var inst_31768__$1 = tmp31900;
var inst_31769__$1 = tmp31901;
var inst_31770__$1 = tmp31899;
var inst_31771__$1 = inst_31785;
var state_31887__$1 = (function (){var statearr_31906 = state_31887;
(statearr_31906[(13)] = inst_31770__$1);

(statearr_31906[(14)] = inst_31768__$1);

(statearr_31906[(16)] = inst_31771__$1);

(statearr_31906[(18)] = inst_31784);

(statearr_31906[(17)] = inst_31769__$1);

return statearr_31906;
})();
var statearr_31907_31986 = state_31887__$1;
(statearr_31907_31986[(2)] = null);

(statearr_31907_31986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (21))){
var inst_31809 = (state_31887[(2)]);
var state_31887__$1 = state_31887;
var statearr_31911_31987 = state_31887__$1;
(statearr_31911_31987[(2)] = inst_31809);

(statearr_31911_31987[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (31))){
var inst_31835 = (state_31887[(11)]);
var inst_31839 = done.call(null,null);
var inst_31840 = cljs.core.async.untap_STAR_.call(null,m,inst_31835);
var state_31887__$1 = (function (){var statearr_31912 = state_31887;
(statearr_31912[(19)] = inst_31839);

return statearr_31912;
})();
var statearr_31913_31988 = state_31887__$1;
(statearr_31913_31988[(2)] = inst_31840);

(statearr_31913_31988[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (32))){
var inst_31828 = (state_31887[(9)]);
var inst_31829 = (state_31887[(20)]);
var inst_31830 = (state_31887[(12)]);
var inst_31827 = (state_31887[(21)]);
var inst_31842 = (state_31887[(2)]);
var inst_31843 = (inst_31830 + (1));
var tmp31908 = inst_31828;
var tmp31909 = inst_31829;
var tmp31910 = inst_31827;
var inst_31827__$1 = tmp31910;
var inst_31828__$1 = tmp31908;
var inst_31829__$1 = tmp31909;
var inst_31830__$1 = inst_31843;
var state_31887__$1 = (function (){var statearr_31914 = state_31887;
(statearr_31914[(9)] = inst_31828__$1);

(statearr_31914[(22)] = inst_31842);

(statearr_31914[(20)] = inst_31829__$1);

(statearr_31914[(12)] = inst_31830__$1);

(statearr_31914[(21)] = inst_31827__$1);

return statearr_31914;
})();
var statearr_31915_31989 = state_31887__$1;
(statearr_31915_31989[(2)] = null);

(statearr_31915_31989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (40))){
var inst_31855 = (state_31887[(23)]);
var inst_31859 = done.call(null,null);
var inst_31860 = cljs.core.async.untap_STAR_.call(null,m,inst_31855);
var state_31887__$1 = (function (){var statearr_31916 = state_31887;
(statearr_31916[(24)] = inst_31859);

return statearr_31916;
})();
var statearr_31917_31990 = state_31887__$1;
(statearr_31917_31990[(2)] = inst_31860);

(statearr_31917_31990[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (33))){
var inst_31846 = (state_31887[(25)]);
var inst_31848 = cljs.core.chunked_seq_QMARK_.call(null,inst_31846);
var state_31887__$1 = state_31887;
if(inst_31848){
var statearr_31918_31991 = state_31887__$1;
(statearr_31918_31991[(1)] = (36));

} else {
var statearr_31919_31992 = state_31887__$1;
(statearr_31919_31992[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (13))){
var inst_31778 = (state_31887[(26)]);
var inst_31781 = cljs.core.async.close_BANG_.call(null,inst_31778);
var state_31887__$1 = state_31887;
var statearr_31920_31993 = state_31887__$1;
(statearr_31920_31993[(2)] = inst_31781);

(statearr_31920_31993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (22))){
var inst_31799 = (state_31887[(8)]);
var inst_31802 = cljs.core.async.close_BANG_.call(null,inst_31799);
var state_31887__$1 = state_31887;
var statearr_31921_31994 = state_31887__$1;
(statearr_31921_31994[(2)] = inst_31802);

(statearr_31921_31994[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (36))){
var inst_31846 = (state_31887[(25)]);
var inst_31850 = cljs.core.chunk_first.call(null,inst_31846);
var inst_31851 = cljs.core.chunk_rest.call(null,inst_31846);
var inst_31852 = cljs.core.count.call(null,inst_31850);
var inst_31827 = inst_31851;
var inst_31828 = inst_31850;
var inst_31829 = inst_31852;
var inst_31830 = (0);
var state_31887__$1 = (function (){var statearr_31922 = state_31887;
(statearr_31922[(9)] = inst_31828);

(statearr_31922[(20)] = inst_31829);

(statearr_31922[(12)] = inst_31830);

(statearr_31922[(21)] = inst_31827);

return statearr_31922;
})();
var statearr_31923_31995 = state_31887__$1;
(statearr_31923_31995[(2)] = null);

(statearr_31923_31995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (41))){
var inst_31846 = (state_31887[(25)]);
var inst_31862 = (state_31887[(2)]);
var inst_31863 = cljs.core.next.call(null,inst_31846);
var inst_31827 = inst_31863;
var inst_31828 = null;
var inst_31829 = (0);
var inst_31830 = (0);
var state_31887__$1 = (function (){var statearr_31924 = state_31887;
(statearr_31924[(9)] = inst_31828);

(statearr_31924[(27)] = inst_31862);

(statearr_31924[(20)] = inst_31829);

(statearr_31924[(12)] = inst_31830);

(statearr_31924[(21)] = inst_31827);

return statearr_31924;
})();
var statearr_31925_31996 = state_31887__$1;
(statearr_31925_31996[(2)] = null);

(statearr_31925_31996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (43))){
var state_31887__$1 = state_31887;
var statearr_31926_31997 = state_31887__$1;
(statearr_31926_31997[(2)] = null);

(statearr_31926_31997[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (29))){
var inst_31871 = (state_31887[(2)]);
var state_31887__$1 = state_31887;
var statearr_31927_31998 = state_31887__$1;
(statearr_31927_31998[(2)] = inst_31871);

(statearr_31927_31998[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (44))){
var inst_31880 = (state_31887[(2)]);
var state_31887__$1 = (function (){var statearr_31928 = state_31887;
(statearr_31928[(28)] = inst_31880);

return statearr_31928;
})();
var statearr_31929_31999 = state_31887__$1;
(statearr_31929_31999[(2)] = null);

(statearr_31929_31999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (6))){
var inst_31819 = (state_31887[(29)]);
var inst_31818 = cljs.core.deref.call(null,cs);
var inst_31819__$1 = cljs.core.keys.call(null,inst_31818);
var inst_31820 = cljs.core.count.call(null,inst_31819__$1);
var inst_31821 = cljs.core.reset_BANG_.call(null,dctr,inst_31820);
var inst_31826 = cljs.core.seq.call(null,inst_31819__$1);
var inst_31827 = inst_31826;
var inst_31828 = null;
var inst_31829 = (0);
var inst_31830 = (0);
var state_31887__$1 = (function (){var statearr_31930 = state_31887;
(statearr_31930[(9)] = inst_31828);

(statearr_31930[(20)] = inst_31829);

(statearr_31930[(29)] = inst_31819__$1);

(statearr_31930[(30)] = inst_31821);

(statearr_31930[(12)] = inst_31830);

(statearr_31930[(21)] = inst_31827);

return statearr_31930;
})();
var statearr_31931_32000 = state_31887__$1;
(statearr_31931_32000[(2)] = null);

(statearr_31931_32000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (28))){
var inst_31846 = (state_31887[(25)]);
var inst_31827 = (state_31887[(21)]);
var inst_31846__$1 = cljs.core.seq.call(null,inst_31827);
var state_31887__$1 = (function (){var statearr_31932 = state_31887;
(statearr_31932[(25)] = inst_31846__$1);

return statearr_31932;
})();
if(inst_31846__$1){
var statearr_31933_32001 = state_31887__$1;
(statearr_31933_32001[(1)] = (33));

} else {
var statearr_31934_32002 = state_31887__$1;
(statearr_31934_32002[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (25))){
var inst_31829 = (state_31887[(20)]);
var inst_31830 = (state_31887[(12)]);
var inst_31832 = (inst_31830 < inst_31829);
var inst_31833 = inst_31832;
var state_31887__$1 = state_31887;
if(cljs.core.truth_(inst_31833)){
var statearr_31935_32003 = state_31887__$1;
(statearr_31935_32003[(1)] = (27));

} else {
var statearr_31936_32004 = state_31887__$1;
(statearr_31936_32004[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (34))){
var state_31887__$1 = state_31887;
var statearr_31937_32005 = state_31887__$1;
(statearr_31937_32005[(2)] = null);

(statearr_31937_32005[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (17))){
var state_31887__$1 = state_31887;
var statearr_31938_32006 = state_31887__$1;
(statearr_31938_32006[(2)] = null);

(statearr_31938_32006[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (3))){
var inst_31885 = (state_31887[(2)]);
var state_31887__$1 = state_31887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31887__$1,inst_31885);
} else {
if((state_val_31888 === (12))){
var inst_31814 = (state_31887[(2)]);
var state_31887__$1 = state_31887;
var statearr_31939_32007 = state_31887__$1;
(statearr_31939_32007[(2)] = inst_31814);

(statearr_31939_32007[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (2))){
var state_31887__$1 = state_31887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31887__$1,(4),ch);
} else {
if((state_val_31888 === (23))){
var state_31887__$1 = state_31887;
var statearr_31940_32008 = state_31887__$1;
(statearr_31940_32008[(2)] = null);

(statearr_31940_32008[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (35))){
var inst_31869 = (state_31887[(2)]);
var state_31887__$1 = state_31887;
var statearr_31941_32009 = state_31887__$1;
(statearr_31941_32009[(2)] = inst_31869);

(statearr_31941_32009[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (19))){
var inst_31788 = (state_31887[(7)]);
var inst_31792 = cljs.core.chunk_first.call(null,inst_31788);
var inst_31793 = cljs.core.chunk_rest.call(null,inst_31788);
var inst_31794 = cljs.core.count.call(null,inst_31792);
var inst_31768 = inst_31793;
var inst_31769 = inst_31792;
var inst_31770 = inst_31794;
var inst_31771 = (0);
var state_31887__$1 = (function (){var statearr_31942 = state_31887;
(statearr_31942[(13)] = inst_31770);

(statearr_31942[(14)] = inst_31768);

(statearr_31942[(16)] = inst_31771);

(statearr_31942[(17)] = inst_31769);

return statearr_31942;
})();
var statearr_31943_32010 = state_31887__$1;
(statearr_31943_32010[(2)] = null);

(statearr_31943_32010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (11))){
var inst_31788 = (state_31887[(7)]);
var inst_31768 = (state_31887[(14)]);
var inst_31788__$1 = cljs.core.seq.call(null,inst_31768);
var state_31887__$1 = (function (){var statearr_31944 = state_31887;
(statearr_31944[(7)] = inst_31788__$1);

return statearr_31944;
})();
if(inst_31788__$1){
var statearr_31945_32011 = state_31887__$1;
(statearr_31945_32011[(1)] = (16));

} else {
var statearr_31946_32012 = state_31887__$1;
(statearr_31946_32012[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (9))){
var inst_31816 = (state_31887[(2)]);
var state_31887__$1 = state_31887;
var statearr_31947_32013 = state_31887__$1;
(statearr_31947_32013[(2)] = inst_31816);

(statearr_31947_32013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (5))){
var inst_31766 = cljs.core.deref.call(null,cs);
var inst_31767 = cljs.core.seq.call(null,inst_31766);
var inst_31768 = inst_31767;
var inst_31769 = null;
var inst_31770 = (0);
var inst_31771 = (0);
var state_31887__$1 = (function (){var statearr_31948 = state_31887;
(statearr_31948[(13)] = inst_31770);

(statearr_31948[(14)] = inst_31768);

(statearr_31948[(16)] = inst_31771);

(statearr_31948[(17)] = inst_31769);

return statearr_31948;
})();
var statearr_31949_32014 = state_31887__$1;
(statearr_31949_32014[(2)] = null);

(statearr_31949_32014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (14))){
var state_31887__$1 = state_31887;
var statearr_31950_32015 = state_31887__$1;
(statearr_31950_32015[(2)] = null);

(statearr_31950_32015[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (45))){
var inst_31877 = (state_31887[(2)]);
var state_31887__$1 = state_31887;
var statearr_31951_32016 = state_31887__$1;
(statearr_31951_32016[(2)] = inst_31877);

(statearr_31951_32016[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (26))){
var inst_31819 = (state_31887[(29)]);
var inst_31873 = (state_31887[(2)]);
var inst_31874 = cljs.core.seq.call(null,inst_31819);
var state_31887__$1 = (function (){var statearr_31952 = state_31887;
(statearr_31952[(31)] = inst_31873);

return statearr_31952;
})();
if(inst_31874){
var statearr_31953_32017 = state_31887__$1;
(statearr_31953_32017[(1)] = (42));

} else {
var statearr_31954_32018 = state_31887__$1;
(statearr_31954_32018[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (16))){
var inst_31788 = (state_31887[(7)]);
var inst_31790 = cljs.core.chunked_seq_QMARK_.call(null,inst_31788);
var state_31887__$1 = state_31887;
if(inst_31790){
var statearr_31955_32019 = state_31887__$1;
(statearr_31955_32019[(1)] = (19));

} else {
var statearr_31956_32020 = state_31887__$1;
(statearr_31956_32020[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (38))){
var inst_31866 = (state_31887[(2)]);
var state_31887__$1 = state_31887;
var statearr_31957_32021 = state_31887__$1;
(statearr_31957_32021[(2)] = inst_31866);

(statearr_31957_32021[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (30))){
var state_31887__$1 = state_31887;
var statearr_31958_32022 = state_31887__$1;
(statearr_31958_32022[(2)] = null);

(statearr_31958_32022[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (10))){
var inst_31771 = (state_31887[(16)]);
var inst_31769 = (state_31887[(17)]);
var inst_31777 = cljs.core._nth.call(null,inst_31769,inst_31771);
var inst_31778 = cljs.core.nth.call(null,inst_31777,(0),null);
var inst_31779 = cljs.core.nth.call(null,inst_31777,(1),null);
var state_31887__$1 = (function (){var statearr_31959 = state_31887;
(statearr_31959[(26)] = inst_31778);

return statearr_31959;
})();
if(cljs.core.truth_(inst_31779)){
var statearr_31960_32023 = state_31887__$1;
(statearr_31960_32023[(1)] = (13));

} else {
var statearr_31961_32024 = state_31887__$1;
(statearr_31961_32024[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (18))){
var inst_31812 = (state_31887[(2)]);
var state_31887__$1 = state_31887;
var statearr_31962_32025 = state_31887__$1;
(statearr_31962_32025[(2)] = inst_31812);

(statearr_31962_32025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (42))){
var state_31887__$1 = state_31887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31887__$1,(45),dchan);
} else {
if((state_val_31888 === (37))){
var inst_31855 = (state_31887[(23)]);
var inst_31846 = (state_31887[(25)]);
var inst_31759 = (state_31887[(10)]);
var inst_31855__$1 = cljs.core.first.call(null,inst_31846);
var inst_31856 = cljs.core.async.put_BANG_.call(null,inst_31855__$1,inst_31759,done);
var state_31887__$1 = (function (){var statearr_31963 = state_31887;
(statearr_31963[(23)] = inst_31855__$1);

return statearr_31963;
})();
if(cljs.core.truth_(inst_31856)){
var statearr_31964_32026 = state_31887__$1;
(statearr_31964_32026[(1)] = (39));

} else {
var statearr_31965_32027 = state_31887__$1;
(statearr_31965_32027[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (8))){
var inst_31770 = (state_31887[(13)]);
var inst_31771 = (state_31887[(16)]);
var inst_31773 = (inst_31771 < inst_31770);
var inst_31774 = inst_31773;
var state_31887__$1 = state_31887;
if(cljs.core.truth_(inst_31774)){
var statearr_31966_32028 = state_31887__$1;
(statearr_31966_32028[(1)] = (10));

} else {
var statearr_31967_32029 = state_31887__$1;
(statearr_31967_32029[(1)] = (11));

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
});})(c__19184__auto___31975,cs,m,dchan,dctr,done))
;
return ((function (switch__19163__auto__,c__19184__auto___31975,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19164__auto__ = null;
var cljs$core$async$mult_$_state_machine__19164__auto____0 = (function (){
var statearr_31971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31971[(0)] = cljs$core$async$mult_$_state_machine__19164__auto__);

(statearr_31971[(1)] = (1));

return statearr_31971;
});
var cljs$core$async$mult_$_state_machine__19164__auto____1 = (function (state_31887){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_31887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e31972){if((e31972 instanceof Object)){
var ex__19167__auto__ = e31972;
var statearr_31973_32030 = state_31887;
(statearr_31973_32030[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32031 = state_31887;
state_31887 = G__32031;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19164__auto__ = function(state_31887){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19164__auto____1.call(this,state_31887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19164__auto____0;
cljs$core$async$mult_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19164__auto____1;
return cljs$core$async$mult_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___31975,cs,m,dchan,dctr,done))
})();
var state__19186__auto__ = (function (){var statearr_31974 = f__19185__auto__.call(null);
(statearr_31974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___31975);

return statearr_31974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___31975,cs,m,dchan,dctr,done))
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
var args32032 = [];
var len__17863__auto___32035 = arguments.length;
var i__17864__auto___32036 = (0);
while(true){
if((i__17864__auto___32036 < len__17863__auto___32035)){
args32032.push((arguments[i__17864__auto___32036]));

var G__32037 = (i__17864__auto___32036 + (1));
i__17864__auto___32036 = G__32037;
continue;
} else {
}
break;
}

var G__32034 = args32032.length;
switch (G__32034) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32032.length)].join('')));

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
var len__17863__auto___32049 = arguments.length;
var i__17864__auto___32050 = (0);
while(true){
if((i__17864__auto___32050 < len__17863__auto___32049)){
args__17870__auto__.push((arguments[i__17864__auto___32050]));

var G__32051 = (i__17864__auto___32050 + (1));
i__17864__auto___32050 = G__32051;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((3) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17871__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32043){
var map__32044 = p__32043;
var map__32044__$1 = ((((!((map__32044 == null)))?((((map__32044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32044):map__32044);
var opts = map__32044__$1;
var statearr_32046_32052 = state;
(statearr_32046_32052[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__32044,map__32044__$1,opts){
return (function (val){
var statearr_32047_32053 = state;
(statearr_32047_32053[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32044,map__32044__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_32048_32054 = state;
(statearr_32048_32054[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32039){
var G__32040 = cljs.core.first.call(null,seq32039);
var seq32039__$1 = cljs.core.next.call(null,seq32039);
var G__32041 = cljs.core.first.call(null,seq32039__$1);
var seq32039__$2 = cljs.core.next.call(null,seq32039__$1);
var G__32042 = cljs.core.first.call(null,seq32039__$2);
var seq32039__$3 = cljs.core.next.call(null,seq32039__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32040,G__32041,G__32042,seq32039__$3);
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
if(typeof cljs.core.async.t_cljs$core$async32218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32218 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32219){
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
this.meta32219 = meta32219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32220,meta32219__$1){
var self__ = this;
var _32220__$1 = this;
return (new cljs.core.async.t_cljs$core$async32218(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32219__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32220){
var self__ = this;
var _32220__$1 = this;
return self__.meta32219;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32218.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32219","meta32219",1660488683,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32218";

cljs.core.async.t_cljs$core$async32218.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async32218");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32218 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32218(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32219){
return (new cljs.core.async.t_cljs$core$async32218(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32219));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32218(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19184__auto___32381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___32381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___32381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32318){
var state_val_32319 = (state_32318[(1)]);
if((state_val_32319 === (7))){
var inst_32236 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
var statearr_32320_32382 = state_32318__$1;
(statearr_32320_32382[(2)] = inst_32236);

(statearr_32320_32382[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (20))){
var inst_32248 = (state_32318[(7)]);
var state_32318__$1 = state_32318;
var statearr_32321_32383 = state_32318__$1;
(statearr_32321_32383[(2)] = inst_32248);

(statearr_32321_32383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (27))){
var state_32318__$1 = state_32318;
var statearr_32322_32384 = state_32318__$1;
(statearr_32322_32384[(2)] = null);

(statearr_32322_32384[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (1))){
var inst_32224 = (state_32318[(8)]);
var inst_32224__$1 = calc_state.call(null);
var inst_32226 = (inst_32224__$1 == null);
var inst_32227 = cljs.core.not.call(null,inst_32226);
var state_32318__$1 = (function (){var statearr_32323 = state_32318;
(statearr_32323[(8)] = inst_32224__$1);

return statearr_32323;
})();
if(inst_32227){
var statearr_32324_32385 = state_32318__$1;
(statearr_32324_32385[(1)] = (2));

} else {
var statearr_32325_32386 = state_32318__$1;
(statearr_32325_32386[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (24))){
var inst_32271 = (state_32318[(9)]);
var inst_32292 = (state_32318[(10)]);
var inst_32278 = (state_32318[(11)]);
var inst_32292__$1 = inst_32271.call(null,inst_32278);
var state_32318__$1 = (function (){var statearr_32326 = state_32318;
(statearr_32326[(10)] = inst_32292__$1);

return statearr_32326;
})();
if(cljs.core.truth_(inst_32292__$1)){
var statearr_32327_32387 = state_32318__$1;
(statearr_32327_32387[(1)] = (29));

} else {
var statearr_32328_32388 = state_32318__$1;
(statearr_32328_32388[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (4))){
var inst_32239 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
if(cljs.core.truth_(inst_32239)){
var statearr_32329_32389 = state_32318__$1;
(statearr_32329_32389[(1)] = (8));

} else {
var statearr_32330_32390 = state_32318__$1;
(statearr_32330_32390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (15))){
var inst_32265 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
if(cljs.core.truth_(inst_32265)){
var statearr_32331_32391 = state_32318__$1;
(statearr_32331_32391[(1)] = (19));

} else {
var statearr_32332_32392 = state_32318__$1;
(statearr_32332_32392[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (21))){
var inst_32270 = (state_32318[(12)]);
var inst_32270__$1 = (state_32318[(2)]);
var inst_32271 = cljs.core.get.call(null,inst_32270__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32272 = cljs.core.get.call(null,inst_32270__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32273 = cljs.core.get.call(null,inst_32270__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32318__$1 = (function (){var statearr_32333 = state_32318;
(statearr_32333[(9)] = inst_32271);

(statearr_32333[(12)] = inst_32270__$1);

(statearr_32333[(13)] = inst_32272);

return statearr_32333;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32318__$1,(22),inst_32273);
} else {
if((state_val_32319 === (31))){
var inst_32300 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
if(cljs.core.truth_(inst_32300)){
var statearr_32334_32393 = state_32318__$1;
(statearr_32334_32393[(1)] = (32));

} else {
var statearr_32335_32394 = state_32318__$1;
(statearr_32335_32394[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (32))){
var inst_32277 = (state_32318[(14)]);
var state_32318__$1 = state_32318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32318__$1,(35),out,inst_32277);
} else {
if((state_val_32319 === (33))){
var inst_32270 = (state_32318[(12)]);
var inst_32248 = inst_32270;
var state_32318__$1 = (function (){var statearr_32336 = state_32318;
(statearr_32336[(7)] = inst_32248);

return statearr_32336;
})();
var statearr_32337_32395 = state_32318__$1;
(statearr_32337_32395[(2)] = null);

(statearr_32337_32395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (13))){
var inst_32248 = (state_32318[(7)]);
var inst_32255 = inst_32248.cljs$lang$protocol_mask$partition0$;
var inst_32256 = (inst_32255 & (64));
var inst_32257 = inst_32248.cljs$core$ISeq$;
var inst_32258 = (inst_32256) || (inst_32257);
var state_32318__$1 = state_32318;
if(cljs.core.truth_(inst_32258)){
var statearr_32338_32396 = state_32318__$1;
(statearr_32338_32396[(1)] = (16));

} else {
var statearr_32339_32397 = state_32318__$1;
(statearr_32339_32397[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (22))){
var inst_32277 = (state_32318[(14)]);
var inst_32278 = (state_32318[(11)]);
var inst_32276 = (state_32318[(2)]);
var inst_32277__$1 = cljs.core.nth.call(null,inst_32276,(0),null);
var inst_32278__$1 = cljs.core.nth.call(null,inst_32276,(1),null);
var inst_32279 = (inst_32277__$1 == null);
var inst_32280 = cljs.core._EQ_.call(null,inst_32278__$1,change);
var inst_32281 = (inst_32279) || (inst_32280);
var state_32318__$1 = (function (){var statearr_32340 = state_32318;
(statearr_32340[(14)] = inst_32277__$1);

(statearr_32340[(11)] = inst_32278__$1);

return statearr_32340;
})();
if(cljs.core.truth_(inst_32281)){
var statearr_32341_32398 = state_32318__$1;
(statearr_32341_32398[(1)] = (23));

} else {
var statearr_32342_32399 = state_32318__$1;
(statearr_32342_32399[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (36))){
var inst_32270 = (state_32318[(12)]);
var inst_32248 = inst_32270;
var state_32318__$1 = (function (){var statearr_32343 = state_32318;
(statearr_32343[(7)] = inst_32248);

return statearr_32343;
})();
var statearr_32344_32400 = state_32318__$1;
(statearr_32344_32400[(2)] = null);

(statearr_32344_32400[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (29))){
var inst_32292 = (state_32318[(10)]);
var state_32318__$1 = state_32318;
var statearr_32345_32401 = state_32318__$1;
(statearr_32345_32401[(2)] = inst_32292);

(statearr_32345_32401[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (6))){
var state_32318__$1 = state_32318;
var statearr_32346_32402 = state_32318__$1;
(statearr_32346_32402[(2)] = false);

(statearr_32346_32402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (28))){
var inst_32288 = (state_32318[(2)]);
var inst_32289 = calc_state.call(null);
var inst_32248 = inst_32289;
var state_32318__$1 = (function (){var statearr_32347 = state_32318;
(statearr_32347[(7)] = inst_32248);

(statearr_32347[(15)] = inst_32288);

return statearr_32347;
})();
var statearr_32348_32403 = state_32318__$1;
(statearr_32348_32403[(2)] = null);

(statearr_32348_32403[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (25))){
var inst_32314 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
var statearr_32349_32404 = state_32318__$1;
(statearr_32349_32404[(2)] = inst_32314);

(statearr_32349_32404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (34))){
var inst_32312 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
var statearr_32350_32405 = state_32318__$1;
(statearr_32350_32405[(2)] = inst_32312);

(statearr_32350_32405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (17))){
var state_32318__$1 = state_32318;
var statearr_32351_32406 = state_32318__$1;
(statearr_32351_32406[(2)] = false);

(statearr_32351_32406[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (3))){
var state_32318__$1 = state_32318;
var statearr_32352_32407 = state_32318__$1;
(statearr_32352_32407[(2)] = false);

(statearr_32352_32407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (12))){
var inst_32316 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32318__$1,inst_32316);
} else {
if((state_val_32319 === (2))){
var inst_32224 = (state_32318[(8)]);
var inst_32229 = inst_32224.cljs$lang$protocol_mask$partition0$;
var inst_32230 = (inst_32229 & (64));
var inst_32231 = inst_32224.cljs$core$ISeq$;
var inst_32232 = (inst_32230) || (inst_32231);
var state_32318__$1 = state_32318;
if(cljs.core.truth_(inst_32232)){
var statearr_32353_32408 = state_32318__$1;
(statearr_32353_32408[(1)] = (5));

} else {
var statearr_32354_32409 = state_32318__$1;
(statearr_32354_32409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (23))){
var inst_32277 = (state_32318[(14)]);
var inst_32283 = (inst_32277 == null);
var state_32318__$1 = state_32318;
if(cljs.core.truth_(inst_32283)){
var statearr_32355_32410 = state_32318__$1;
(statearr_32355_32410[(1)] = (26));

} else {
var statearr_32356_32411 = state_32318__$1;
(statearr_32356_32411[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (35))){
var inst_32303 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
if(cljs.core.truth_(inst_32303)){
var statearr_32357_32412 = state_32318__$1;
(statearr_32357_32412[(1)] = (36));

} else {
var statearr_32358_32413 = state_32318__$1;
(statearr_32358_32413[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (19))){
var inst_32248 = (state_32318[(7)]);
var inst_32267 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32248);
var state_32318__$1 = state_32318;
var statearr_32359_32414 = state_32318__$1;
(statearr_32359_32414[(2)] = inst_32267);

(statearr_32359_32414[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (11))){
var inst_32248 = (state_32318[(7)]);
var inst_32252 = (inst_32248 == null);
var inst_32253 = cljs.core.not.call(null,inst_32252);
var state_32318__$1 = state_32318;
if(inst_32253){
var statearr_32360_32415 = state_32318__$1;
(statearr_32360_32415[(1)] = (13));

} else {
var statearr_32361_32416 = state_32318__$1;
(statearr_32361_32416[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (9))){
var inst_32224 = (state_32318[(8)]);
var state_32318__$1 = state_32318;
var statearr_32362_32417 = state_32318__$1;
(statearr_32362_32417[(2)] = inst_32224);

(statearr_32362_32417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (5))){
var state_32318__$1 = state_32318;
var statearr_32363_32418 = state_32318__$1;
(statearr_32363_32418[(2)] = true);

(statearr_32363_32418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (14))){
var state_32318__$1 = state_32318;
var statearr_32364_32419 = state_32318__$1;
(statearr_32364_32419[(2)] = false);

(statearr_32364_32419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (26))){
var inst_32278 = (state_32318[(11)]);
var inst_32285 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32278);
var state_32318__$1 = state_32318;
var statearr_32365_32420 = state_32318__$1;
(statearr_32365_32420[(2)] = inst_32285);

(statearr_32365_32420[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (16))){
var state_32318__$1 = state_32318;
var statearr_32366_32421 = state_32318__$1;
(statearr_32366_32421[(2)] = true);

(statearr_32366_32421[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (38))){
var inst_32308 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
var statearr_32367_32422 = state_32318__$1;
(statearr_32367_32422[(2)] = inst_32308);

(statearr_32367_32422[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (30))){
var inst_32271 = (state_32318[(9)]);
var inst_32272 = (state_32318[(13)]);
var inst_32278 = (state_32318[(11)]);
var inst_32295 = cljs.core.empty_QMARK_.call(null,inst_32271);
var inst_32296 = inst_32272.call(null,inst_32278);
var inst_32297 = cljs.core.not.call(null,inst_32296);
var inst_32298 = (inst_32295) && (inst_32297);
var state_32318__$1 = state_32318;
var statearr_32368_32423 = state_32318__$1;
(statearr_32368_32423[(2)] = inst_32298);

(statearr_32368_32423[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (10))){
var inst_32224 = (state_32318[(8)]);
var inst_32244 = (state_32318[(2)]);
var inst_32245 = cljs.core.get.call(null,inst_32244,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32246 = cljs.core.get.call(null,inst_32244,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32247 = cljs.core.get.call(null,inst_32244,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32248 = inst_32224;
var state_32318__$1 = (function (){var statearr_32369 = state_32318;
(statearr_32369[(7)] = inst_32248);

(statearr_32369[(16)] = inst_32247);

(statearr_32369[(17)] = inst_32246);

(statearr_32369[(18)] = inst_32245);

return statearr_32369;
})();
var statearr_32370_32424 = state_32318__$1;
(statearr_32370_32424[(2)] = null);

(statearr_32370_32424[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (18))){
var inst_32262 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
var statearr_32371_32425 = state_32318__$1;
(statearr_32371_32425[(2)] = inst_32262);

(statearr_32371_32425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (37))){
var state_32318__$1 = state_32318;
var statearr_32372_32426 = state_32318__$1;
(statearr_32372_32426[(2)] = null);

(statearr_32372_32426[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (8))){
var inst_32224 = (state_32318[(8)]);
var inst_32241 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32224);
var state_32318__$1 = state_32318;
var statearr_32373_32427 = state_32318__$1;
(statearr_32373_32427[(2)] = inst_32241);

(statearr_32373_32427[(1)] = (10));


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
});})(c__19184__auto___32381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19163__auto__,c__19184__auto___32381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19164__auto__ = null;
var cljs$core$async$mix_$_state_machine__19164__auto____0 = (function (){
var statearr_32377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32377[(0)] = cljs$core$async$mix_$_state_machine__19164__auto__);

(statearr_32377[(1)] = (1));

return statearr_32377;
});
var cljs$core$async$mix_$_state_machine__19164__auto____1 = (function (state_32318){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_32318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e32378){if((e32378 instanceof Object)){
var ex__19167__auto__ = e32378;
var statearr_32379_32428 = state_32318;
(statearr_32379_32428[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32429 = state_32318;
state_32318 = G__32429;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19164__auto__ = function(state_32318){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19164__auto____1.call(this,state_32318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19164__auto____0;
cljs$core$async$mix_$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19164__auto____1;
return cljs$core$async$mix_$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___32381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19186__auto__ = (function (){var statearr_32380 = f__19185__auto__.call(null);
(statearr_32380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___32381);

return statearr_32380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___32381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args32430 = [];
var len__17863__auto___32433 = arguments.length;
var i__17864__auto___32434 = (0);
while(true){
if((i__17864__auto___32434 < len__17863__auto___32433)){
args32430.push((arguments[i__17864__auto___32434]));

var G__32435 = (i__17864__auto___32434 + (1));
i__17864__auto___32434 = G__32435;
continue;
} else {
}
break;
}

var G__32432 = args32430.length;
switch (G__32432) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32430.length)].join('')));

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
var args32438 = [];
var len__17863__auto___32563 = arguments.length;
var i__17864__auto___32564 = (0);
while(true){
if((i__17864__auto___32564 < len__17863__auto___32563)){
args32438.push((arguments[i__17864__auto___32564]));

var G__32565 = (i__17864__auto___32564 + (1));
i__17864__auto___32564 = G__32565;
continue;
} else {
}
break;
}

var G__32440 = args32438.length;
switch (G__32440) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32438.length)].join('')));

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
return (function (p1__32437_SHARP_){
if(cljs.core.truth_(p1__32437_SHARP_.call(null,topic))){
return p1__32437_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32437_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16805__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32441 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32442){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32442 = meta32442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32443,meta32442__$1){
var self__ = this;
var _32443__$1 = this;
return (new cljs.core.async.t_cljs$core$async32441(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32442__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32443){
var self__ = this;
var _32443__$1 = this;
return self__.meta32442;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32441.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32442","meta32442",-422501927,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32441";

cljs.core.async.t_cljs$core$async32441.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async32441");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32441 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32441(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32442){
return (new cljs.core.async.t_cljs$core$async32441(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32442));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32441(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19184__auto___32567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___32567,mults,ensure_mult,p){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___32567,mults,ensure_mult,p){
return (function (state_32515){
var state_val_32516 = (state_32515[(1)]);
if((state_val_32516 === (7))){
var inst_32511 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32517_32568 = state_32515__$1;
(statearr_32517_32568[(2)] = inst_32511);

(statearr_32517_32568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (20))){
var state_32515__$1 = state_32515;
var statearr_32518_32569 = state_32515__$1;
(statearr_32518_32569[(2)] = null);

(statearr_32518_32569[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (1))){
var state_32515__$1 = state_32515;
var statearr_32519_32570 = state_32515__$1;
(statearr_32519_32570[(2)] = null);

(statearr_32519_32570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (24))){
var inst_32494 = (state_32515[(7)]);
var inst_32503 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32494);
var state_32515__$1 = state_32515;
var statearr_32520_32571 = state_32515__$1;
(statearr_32520_32571[(2)] = inst_32503);

(statearr_32520_32571[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (4))){
var inst_32446 = (state_32515[(8)]);
var inst_32446__$1 = (state_32515[(2)]);
var inst_32447 = (inst_32446__$1 == null);
var state_32515__$1 = (function (){var statearr_32521 = state_32515;
(statearr_32521[(8)] = inst_32446__$1);

return statearr_32521;
})();
if(cljs.core.truth_(inst_32447)){
var statearr_32522_32572 = state_32515__$1;
(statearr_32522_32572[(1)] = (5));

} else {
var statearr_32523_32573 = state_32515__$1;
(statearr_32523_32573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (15))){
var inst_32488 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32524_32574 = state_32515__$1;
(statearr_32524_32574[(2)] = inst_32488);

(statearr_32524_32574[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (21))){
var inst_32508 = (state_32515[(2)]);
var state_32515__$1 = (function (){var statearr_32525 = state_32515;
(statearr_32525[(9)] = inst_32508);

return statearr_32525;
})();
var statearr_32526_32575 = state_32515__$1;
(statearr_32526_32575[(2)] = null);

(statearr_32526_32575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (13))){
var inst_32470 = (state_32515[(10)]);
var inst_32472 = cljs.core.chunked_seq_QMARK_.call(null,inst_32470);
var state_32515__$1 = state_32515;
if(inst_32472){
var statearr_32527_32576 = state_32515__$1;
(statearr_32527_32576[(1)] = (16));

} else {
var statearr_32528_32577 = state_32515__$1;
(statearr_32528_32577[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (22))){
var inst_32500 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
if(cljs.core.truth_(inst_32500)){
var statearr_32529_32578 = state_32515__$1;
(statearr_32529_32578[(1)] = (23));

} else {
var statearr_32530_32579 = state_32515__$1;
(statearr_32530_32579[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (6))){
var inst_32494 = (state_32515[(7)]);
var inst_32446 = (state_32515[(8)]);
var inst_32496 = (state_32515[(11)]);
var inst_32494__$1 = topic_fn.call(null,inst_32446);
var inst_32495 = cljs.core.deref.call(null,mults);
var inst_32496__$1 = cljs.core.get.call(null,inst_32495,inst_32494__$1);
var state_32515__$1 = (function (){var statearr_32531 = state_32515;
(statearr_32531[(7)] = inst_32494__$1);

(statearr_32531[(11)] = inst_32496__$1);

return statearr_32531;
})();
if(cljs.core.truth_(inst_32496__$1)){
var statearr_32532_32580 = state_32515__$1;
(statearr_32532_32580[(1)] = (19));

} else {
var statearr_32533_32581 = state_32515__$1;
(statearr_32533_32581[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (25))){
var inst_32505 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32534_32582 = state_32515__$1;
(statearr_32534_32582[(2)] = inst_32505);

(statearr_32534_32582[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (17))){
var inst_32470 = (state_32515[(10)]);
var inst_32479 = cljs.core.first.call(null,inst_32470);
var inst_32480 = cljs.core.async.muxch_STAR_.call(null,inst_32479);
var inst_32481 = cljs.core.async.close_BANG_.call(null,inst_32480);
var inst_32482 = cljs.core.next.call(null,inst_32470);
var inst_32456 = inst_32482;
var inst_32457 = null;
var inst_32458 = (0);
var inst_32459 = (0);
var state_32515__$1 = (function (){var statearr_32535 = state_32515;
(statearr_32535[(12)] = inst_32458);

(statearr_32535[(13)] = inst_32459);

(statearr_32535[(14)] = inst_32457);

(statearr_32535[(15)] = inst_32481);

(statearr_32535[(16)] = inst_32456);

return statearr_32535;
})();
var statearr_32536_32583 = state_32515__$1;
(statearr_32536_32583[(2)] = null);

(statearr_32536_32583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (3))){
var inst_32513 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32515__$1,inst_32513);
} else {
if((state_val_32516 === (12))){
var inst_32490 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32537_32584 = state_32515__$1;
(statearr_32537_32584[(2)] = inst_32490);

(statearr_32537_32584[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (2))){
var state_32515__$1 = state_32515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32515__$1,(4),ch);
} else {
if((state_val_32516 === (23))){
var state_32515__$1 = state_32515;
var statearr_32538_32585 = state_32515__$1;
(statearr_32538_32585[(2)] = null);

(statearr_32538_32585[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (19))){
var inst_32446 = (state_32515[(8)]);
var inst_32496 = (state_32515[(11)]);
var inst_32498 = cljs.core.async.muxch_STAR_.call(null,inst_32496);
var state_32515__$1 = state_32515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32515__$1,(22),inst_32498,inst_32446);
} else {
if((state_val_32516 === (11))){
var inst_32456 = (state_32515[(16)]);
var inst_32470 = (state_32515[(10)]);
var inst_32470__$1 = cljs.core.seq.call(null,inst_32456);
var state_32515__$1 = (function (){var statearr_32539 = state_32515;
(statearr_32539[(10)] = inst_32470__$1);

return statearr_32539;
})();
if(inst_32470__$1){
var statearr_32540_32586 = state_32515__$1;
(statearr_32540_32586[(1)] = (13));

} else {
var statearr_32541_32587 = state_32515__$1;
(statearr_32541_32587[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (9))){
var inst_32492 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32542_32588 = state_32515__$1;
(statearr_32542_32588[(2)] = inst_32492);

(statearr_32542_32588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (5))){
var inst_32453 = cljs.core.deref.call(null,mults);
var inst_32454 = cljs.core.vals.call(null,inst_32453);
var inst_32455 = cljs.core.seq.call(null,inst_32454);
var inst_32456 = inst_32455;
var inst_32457 = null;
var inst_32458 = (0);
var inst_32459 = (0);
var state_32515__$1 = (function (){var statearr_32543 = state_32515;
(statearr_32543[(12)] = inst_32458);

(statearr_32543[(13)] = inst_32459);

(statearr_32543[(14)] = inst_32457);

(statearr_32543[(16)] = inst_32456);

return statearr_32543;
})();
var statearr_32544_32589 = state_32515__$1;
(statearr_32544_32589[(2)] = null);

(statearr_32544_32589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (14))){
var state_32515__$1 = state_32515;
var statearr_32548_32590 = state_32515__$1;
(statearr_32548_32590[(2)] = null);

(statearr_32548_32590[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (16))){
var inst_32470 = (state_32515[(10)]);
var inst_32474 = cljs.core.chunk_first.call(null,inst_32470);
var inst_32475 = cljs.core.chunk_rest.call(null,inst_32470);
var inst_32476 = cljs.core.count.call(null,inst_32474);
var inst_32456 = inst_32475;
var inst_32457 = inst_32474;
var inst_32458 = inst_32476;
var inst_32459 = (0);
var state_32515__$1 = (function (){var statearr_32549 = state_32515;
(statearr_32549[(12)] = inst_32458);

(statearr_32549[(13)] = inst_32459);

(statearr_32549[(14)] = inst_32457);

(statearr_32549[(16)] = inst_32456);

return statearr_32549;
})();
var statearr_32550_32591 = state_32515__$1;
(statearr_32550_32591[(2)] = null);

(statearr_32550_32591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (10))){
var inst_32458 = (state_32515[(12)]);
var inst_32459 = (state_32515[(13)]);
var inst_32457 = (state_32515[(14)]);
var inst_32456 = (state_32515[(16)]);
var inst_32464 = cljs.core._nth.call(null,inst_32457,inst_32459);
var inst_32465 = cljs.core.async.muxch_STAR_.call(null,inst_32464);
var inst_32466 = cljs.core.async.close_BANG_.call(null,inst_32465);
var inst_32467 = (inst_32459 + (1));
var tmp32545 = inst_32458;
var tmp32546 = inst_32457;
var tmp32547 = inst_32456;
var inst_32456__$1 = tmp32547;
var inst_32457__$1 = tmp32546;
var inst_32458__$1 = tmp32545;
var inst_32459__$1 = inst_32467;
var state_32515__$1 = (function (){var statearr_32551 = state_32515;
(statearr_32551[(12)] = inst_32458__$1);

(statearr_32551[(13)] = inst_32459__$1);

(statearr_32551[(14)] = inst_32457__$1);

(statearr_32551[(17)] = inst_32466);

(statearr_32551[(16)] = inst_32456__$1);

return statearr_32551;
})();
var statearr_32552_32592 = state_32515__$1;
(statearr_32552_32592[(2)] = null);

(statearr_32552_32592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (18))){
var inst_32485 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32553_32593 = state_32515__$1;
(statearr_32553_32593[(2)] = inst_32485);

(statearr_32553_32593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (8))){
var inst_32458 = (state_32515[(12)]);
var inst_32459 = (state_32515[(13)]);
var inst_32461 = (inst_32459 < inst_32458);
var inst_32462 = inst_32461;
var state_32515__$1 = state_32515;
if(cljs.core.truth_(inst_32462)){
var statearr_32554_32594 = state_32515__$1;
(statearr_32554_32594[(1)] = (10));

} else {
var statearr_32555_32595 = state_32515__$1;
(statearr_32555_32595[(1)] = (11));

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
});})(c__19184__auto___32567,mults,ensure_mult,p))
;
return ((function (switch__19163__auto__,c__19184__auto___32567,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_32559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32559[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_32559[(1)] = (1));

return statearr_32559;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_32515){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_32515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e32560){if((e32560 instanceof Object)){
var ex__19167__auto__ = e32560;
var statearr_32561_32596 = state_32515;
(statearr_32561_32596[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32597 = state_32515;
state_32515 = G__32597;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_32515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_32515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___32567,mults,ensure_mult,p))
})();
var state__19186__auto__ = (function (){var statearr_32562 = f__19185__auto__.call(null);
(statearr_32562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___32567);

return statearr_32562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___32567,mults,ensure_mult,p))
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
var args32598 = [];
var len__17863__auto___32601 = arguments.length;
var i__17864__auto___32602 = (0);
while(true){
if((i__17864__auto___32602 < len__17863__auto___32601)){
args32598.push((arguments[i__17864__auto___32602]));

var G__32603 = (i__17864__auto___32602 + (1));
i__17864__auto___32602 = G__32603;
continue;
} else {
}
break;
}

var G__32600 = args32598.length;
switch (G__32600) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32598.length)].join('')));

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
var args32605 = [];
var len__17863__auto___32608 = arguments.length;
var i__17864__auto___32609 = (0);
while(true){
if((i__17864__auto___32609 < len__17863__auto___32608)){
args32605.push((arguments[i__17864__auto___32609]));

var G__32610 = (i__17864__auto___32609 + (1));
i__17864__auto___32609 = G__32610;
continue;
} else {
}
break;
}

var G__32607 = args32605.length;
switch (G__32607) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32605.length)].join('')));

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
var args32612 = [];
var len__17863__auto___32683 = arguments.length;
var i__17864__auto___32684 = (0);
while(true){
if((i__17864__auto___32684 < len__17863__auto___32683)){
args32612.push((arguments[i__17864__auto___32684]));

var G__32685 = (i__17864__auto___32684 + (1));
i__17864__auto___32684 = G__32685;
continue;
} else {
}
break;
}

var G__32614 = args32612.length;
switch (G__32614) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32612.length)].join('')));

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
var c__19184__auto___32687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___32687,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___32687,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32653){
var state_val_32654 = (state_32653[(1)]);
if((state_val_32654 === (7))){
var state_32653__$1 = state_32653;
var statearr_32655_32688 = state_32653__$1;
(statearr_32655_32688[(2)] = null);

(statearr_32655_32688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (1))){
var state_32653__$1 = state_32653;
var statearr_32656_32689 = state_32653__$1;
(statearr_32656_32689[(2)] = null);

(statearr_32656_32689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (4))){
var inst_32617 = (state_32653[(7)]);
var inst_32619 = (inst_32617 < cnt);
var state_32653__$1 = state_32653;
if(cljs.core.truth_(inst_32619)){
var statearr_32657_32690 = state_32653__$1;
(statearr_32657_32690[(1)] = (6));

} else {
var statearr_32658_32691 = state_32653__$1;
(statearr_32658_32691[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (15))){
var inst_32649 = (state_32653[(2)]);
var state_32653__$1 = state_32653;
var statearr_32659_32692 = state_32653__$1;
(statearr_32659_32692[(2)] = inst_32649);

(statearr_32659_32692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (13))){
var inst_32642 = cljs.core.async.close_BANG_.call(null,out);
var state_32653__$1 = state_32653;
var statearr_32660_32693 = state_32653__$1;
(statearr_32660_32693[(2)] = inst_32642);

(statearr_32660_32693[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (6))){
var state_32653__$1 = state_32653;
var statearr_32661_32694 = state_32653__$1;
(statearr_32661_32694[(2)] = null);

(statearr_32661_32694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (3))){
var inst_32651 = (state_32653[(2)]);
var state_32653__$1 = state_32653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32653__$1,inst_32651);
} else {
if((state_val_32654 === (12))){
var inst_32639 = (state_32653[(8)]);
var inst_32639__$1 = (state_32653[(2)]);
var inst_32640 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32639__$1);
var state_32653__$1 = (function (){var statearr_32662 = state_32653;
(statearr_32662[(8)] = inst_32639__$1);

return statearr_32662;
})();
if(cljs.core.truth_(inst_32640)){
var statearr_32663_32695 = state_32653__$1;
(statearr_32663_32695[(1)] = (13));

} else {
var statearr_32664_32696 = state_32653__$1;
(statearr_32664_32696[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (2))){
var inst_32616 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32617 = (0);
var state_32653__$1 = (function (){var statearr_32665 = state_32653;
(statearr_32665[(9)] = inst_32616);

(statearr_32665[(7)] = inst_32617);

return statearr_32665;
})();
var statearr_32666_32697 = state_32653__$1;
(statearr_32666_32697[(2)] = null);

(statearr_32666_32697[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (11))){
var inst_32617 = (state_32653[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32653,(10),Object,null,(9));
var inst_32626 = chs__$1.call(null,inst_32617);
var inst_32627 = done.call(null,inst_32617);
var inst_32628 = cljs.core.async.take_BANG_.call(null,inst_32626,inst_32627);
var state_32653__$1 = state_32653;
var statearr_32667_32698 = state_32653__$1;
(statearr_32667_32698[(2)] = inst_32628);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32653__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (9))){
var inst_32617 = (state_32653[(7)]);
var inst_32630 = (state_32653[(2)]);
var inst_32631 = (inst_32617 + (1));
var inst_32617__$1 = inst_32631;
var state_32653__$1 = (function (){var statearr_32668 = state_32653;
(statearr_32668[(7)] = inst_32617__$1);

(statearr_32668[(10)] = inst_32630);

return statearr_32668;
})();
var statearr_32669_32699 = state_32653__$1;
(statearr_32669_32699[(2)] = null);

(statearr_32669_32699[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (5))){
var inst_32637 = (state_32653[(2)]);
var state_32653__$1 = (function (){var statearr_32670 = state_32653;
(statearr_32670[(11)] = inst_32637);

return statearr_32670;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32653__$1,(12),dchan);
} else {
if((state_val_32654 === (14))){
var inst_32639 = (state_32653[(8)]);
var inst_32644 = cljs.core.apply.call(null,f,inst_32639);
var state_32653__$1 = state_32653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32653__$1,(16),out,inst_32644);
} else {
if((state_val_32654 === (16))){
var inst_32646 = (state_32653[(2)]);
var state_32653__$1 = (function (){var statearr_32671 = state_32653;
(statearr_32671[(12)] = inst_32646);

return statearr_32671;
})();
var statearr_32672_32700 = state_32653__$1;
(statearr_32672_32700[(2)] = null);

(statearr_32672_32700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (10))){
var inst_32621 = (state_32653[(2)]);
var inst_32622 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32653__$1 = (function (){var statearr_32673 = state_32653;
(statearr_32673[(13)] = inst_32621);

return statearr_32673;
})();
var statearr_32674_32701 = state_32653__$1;
(statearr_32674_32701[(2)] = inst_32622);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32653__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (8))){
var inst_32635 = (state_32653[(2)]);
var state_32653__$1 = state_32653;
var statearr_32675_32702 = state_32653__$1;
(statearr_32675_32702[(2)] = inst_32635);

(statearr_32675_32702[(1)] = (5));


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
});})(c__19184__auto___32687,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19163__auto__,c__19184__auto___32687,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_32679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32679[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_32679[(1)] = (1));

return statearr_32679;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_32653){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_32653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e32680){if((e32680 instanceof Object)){
var ex__19167__auto__ = e32680;
var statearr_32681_32703 = state_32653;
(statearr_32681_32703[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32704 = state_32653;
state_32653 = G__32704;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_32653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_32653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___32687,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19186__auto__ = (function (){var statearr_32682 = f__19185__auto__.call(null);
(statearr_32682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___32687);

return statearr_32682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___32687,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args32706 = [];
var len__17863__auto___32762 = arguments.length;
var i__17864__auto___32763 = (0);
while(true){
if((i__17864__auto___32763 < len__17863__auto___32762)){
args32706.push((arguments[i__17864__auto___32763]));

var G__32764 = (i__17864__auto___32763 + (1));
i__17864__auto___32763 = G__32764;
continue;
} else {
}
break;
}

var G__32708 = args32706.length;
switch (G__32708) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32706.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19184__auto___32766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___32766,out){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___32766,out){
return (function (state_32738){
var state_val_32739 = (state_32738[(1)]);
if((state_val_32739 === (7))){
var inst_32718 = (state_32738[(7)]);
var inst_32717 = (state_32738[(8)]);
var inst_32717__$1 = (state_32738[(2)]);
var inst_32718__$1 = cljs.core.nth.call(null,inst_32717__$1,(0),null);
var inst_32719 = cljs.core.nth.call(null,inst_32717__$1,(1),null);
var inst_32720 = (inst_32718__$1 == null);
var state_32738__$1 = (function (){var statearr_32740 = state_32738;
(statearr_32740[(9)] = inst_32719);

(statearr_32740[(7)] = inst_32718__$1);

(statearr_32740[(8)] = inst_32717__$1);

return statearr_32740;
})();
if(cljs.core.truth_(inst_32720)){
var statearr_32741_32767 = state_32738__$1;
(statearr_32741_32767[(1)] = (8));

} else {
var statearr_32742_32768 = state_32738__$1;
(statearr_32742_32768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (1))){
var inst_32709 = cljs.core.vec.call(null,chs);
var inst_32710 = inst_32709;
var state_32738__$1 = (function (){var statearr_32743 = state_32738;
(statearr_32743[(10)] = inst_32710);

return statearr_32743;
})();
var statearr_32744_32769 = state_32738__$1;
(statearr_32744_32769[(2)] = null);

(statearr_32744_32769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (4))){
var inst_32710 = (state_32738[(10)]);
var state_32738__$1 = state_32738;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32738__$1,(7),inst_32710);
} else {
if((state_val_32739 === (6))){
var inst_32734 = (state_32738[(2)]);
var state_32738__$1 = state_32738;
var statearr_32745_32770 = state_32738__$1;
(statearr_32745_32770[(2)] = inst_32734);

(statearr_32745_32770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (3))){
var inst_32736 = (state_32738[(2)]);
var state_32738__$1 = state_32738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32738__$1,inst_32736);
} else {
if((state_val_32739 === (2))){
var inst_32710 = (state_32738[(10)]);
var inst_32712 = cljs.core.count.call(null,inst_32710);
var inst_32713 = (inst_32712 > (0));
var state_32738__$1 = state_32738;
if(cljs.core.truth_(inst_32713)){
var statearr_32747_32771 = state_32738__$1;
(statearr_32747_32771[(1)] = (4));

} else {
var statearr_32748_32772 = state_32738__$1;
(statearr_32748_32772[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (11))){
var inst_32710 = (state_32738[(10)]);
var inst_32727 = (state_32738[(2)]);
var tmp32746 = inst_32710;
var inst_32710__$1 = tmp32746;
var state_32738__$1 = (function (){var statearr_32749 = state_32738;
(statearr_32749[(11)] = inst_32727);

(statearr_32749[(10)] = inst_32710__$1);

return statearr_32749;
})();
var statearr_32750_32773 = state_32738__$1;
(statearr_32750_32773[(2)] = null);

(statearr_32750_32773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (9))){
var inst_32718 = (state_32738[(7)]);
var state_32738__$1 = state_32738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32738__$1,(11),out,inst_32718);
} else {
if((state_val_32739 === (5))){
var inst_32732 = cljs.core.async.close_BANG_.call(null,out);
var state_32738__$1 = state_32738;
var statearr_32751_32774 = state_32738__$1;
(statearr_32751_32774[(2)] = inst_32732);

(statearr_32751_32774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (10))){
var inst_32730 = (state_32738[(2)]);
var state_32738__$1 = state_32738;
var statearr_32752_32775 = state_32738__$1;
(statearr_32752_32775[(2)] = inst_32730);

(statearr_32752_32775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (8))){
var inst_32719 = (state_32738[(9)]);
var inst_32718 = (state_32738[(7)]);
var inst_32710 = (state_32738[(10)]);
var inst_32717 = (state_32738[(8)]);
var inst_32722 = (function (){var cs = inst_32710;
var vec__32715 = inst_32717;
var v = inst_32718;
var c = inst_32719;
return ((function (cs,vec__32715,v,c,inst_32719,inst_32718,inst_32710,inst_32717,state_val_32739,c__19184__auto___32766,out){
return (function (p1__32705_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32705_SHARP_);
});
;})(cs,vec__32715,v,c,inst_32719,inst_32718,inst_32710,inst_32717,state_val_32739,c__19184__auto___32766,out))
})();
var inst_32723 = cljs.core.filterv.call(null,inst_32722,inst_32710);
var inst_32710__$1 = inst_32723;
var state_32738__$1 = (function (){var statearr_32753 = state_32738;
(statearr_32753[(10)] = inst_32710__$1);

return statearr_32753;
})();
var statearr_32754_32776 = state_32738__$1;
(statearr_32754_32776[(2)] = null);

(statearr_32754_32776[(1)] = (2));


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
});})(c__19184__auto___32766,out))
;
return ((function (switch__19163__auto__,c__19184__auto___32766,out){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_32758 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32758[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_32758[(1)] = (1));

return statearr_32758;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_32738){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_32738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e32759){if((e32759 instanceof Object)){
var ex__19167__auto__ = e32759;
var statearr_32760_32777 = state_32738;
(statearr_32760_32777[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32778 = state_32738;
state_32738 = G__32778;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_32738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_32738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___32766,out))
})();
var state__19186__auto__ = (function (){var statearr_32761 = f__19185__auto__.call(null);
(statearr_32761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___32766);

return statearr_32761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___32766,out))
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
var args32779 = [];
var len__17863__auto___32828 = arguments.length;
var i__17864__auto___32829 = (0);
while(true){
if((i__17864__auto___32829 < len__17863__auto___32828)){
args32779.push((arguments[i__17864__auto___32829]));

var G__32830 = (i__17864__auto___32829 + (1));
i__17864__auto___32829 = G__32830;
continue;
} else {
}
break;
}

var G__32781 = args32779.length;
switch (G__32781) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32779.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19184__auto___32832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___32832,out){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___32832,out){
return (function (state_32805){
var state_val_32806 = (state_32805[(1)]);
if((state_val_32806 === (7))){
var inst_32787 = (state_32805[(7)]);
var inst_32787__$1 = (state_32805[(2)]);
var inst_32788 = (inst_32787__$1 == null);
var inst_32789 = cljs.core.not.call(null,inst_32788);
var state_32805__$1 = (function (){var statearr_32807 = state_32805;
(statearr_32807[(7)] = inst_32787__$1);

return statearr_32807;
})();
if(inst_32789){
var statearr_32808_32833 = state_32805__$1;
(statearr_32808_32833[(1)] = (8));

} else {
var statearr_32809_32834 = state_32805__$1;
(statearr_32809_32834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32806 === (1))){
var inst_32782 = (0);
var state_32805__$1 = (function (){var statearr_32810 = state_32805;
(statearr_32810[(8)] = inst_32782);

return statearr_32810;
})();
var statearr_32811_32835 = state_32805__$1;
(statearr_32811_32835[(2)] = null);

(statearr_32811_32835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32806 === (4))){
var state_32805__$1 = state_32805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32805__$1,(7),ch);
} else {
if((state_val_32806 === (6))){
var inst_32800 = (state_32805[(2)]);
var state_32805__$1 = state_32805;
var statearr_32812_32836 = state_32805__$1;
(statearr_32812_32836[(2)] = inst_32800);

(statearr_32812_32836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32806 === (3))){
var inst_32802 = (state_32805[(2)]);
var inst_32803 = cljs.core.async.close_BANG_.call(null,out);
var state_32805__$1 = (function (){var statearr_32813 = state_32805;
(statearr_32813[(9)] = inst_32802);

return statearr_32813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32805__$1,inst_32803);
} else {
if((state_val_32806 === (2))){
var inst_32782 = (state_32805[(8)]);
var inst_32784 = (inst_32782 < n);
var state_32805__$1 = state_32805;
if(cljs.core.truth_(inst_32784)){
var statearr_32814_32837 = state_32805__$1;
(statearr_32814_32837[(1)] = (4));

} else {
var statearr_32815_32838 = state_32805__$1;
(statearr_32815_32838[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32806 === (11))){
var inst_32782 = (state_32805[(8)]);
var inst_32792 = (state_32805[(2)]);
var inst_32793 = (inst_32782 + (1));
var inst_32782__$1 = inst_32793;
var state_32805__$1 = (function (){var statearr_32816 = state_32805;
(statearr_32816[(8)] = inst_32782__$1);

(statearr_32816[(10)] = inst_32792);

return statearr_32816;
})();
var statearr_32817_32839 = state_32805__$1;
(statearr_32817_32839[(2)] = null);

(statearr_32817_32839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32806 === (9))){
var state_32805__$1 = state_32805;
var statearr_32818_32840 = state_32805__$1;
(statearr_32818_32840[(2)] = null);

(statearr_32818_32840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32806 === (5))){
var state_32805__$1 = state_32805;
var statearr_32819_32841 = state_32805__$1;
(statearr_32819_32841[(2)] = null);

(statearr_32819_32841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32806 === (10))){
var inst_32797 = (state_32805[(2)]);
var state_32805__$1 = state_32805;
var statearr_32820_32842 = state_32805__$1;
(statearr_32820_32842[(2)] = inst_32797);

(statearr_32820_32842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32806 === (8))){
var inst_32787 = (state_32805[(7)]);
var state_32805__$1 = state_32805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32805__$1,(11),out,inst_32787);
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
});})(c__19184__auto___32832,out))
;
return ((function (switch__19163__auto__,c__19184__auto___32832,out){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_32824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32824[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_32824[(1)] = (1));

return statearr_32824;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_32805){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_32805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e32825){if((e32825 instanceof Object)){
var ex__19167__auto__ = e32825;
var statearr_32826_32843 = state_32805;
(statearr_32826_32843[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32844 = state_32805;
state_32805 = G__32844;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_32805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_32805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___32832,out))
})();
var state__19186__auto__ = (function (){var statearr_32827 = f__19185__auto__.call(null);
(statearr_32827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___32832);

return statearr_32827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___32832,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32852 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32852 = (function (map_LT_,f,ch,meta32853){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32853 = meta32853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32854,meta32853__$1){
var self__ = this;
var _32854__$1 = this;
return (new cljs.core.async.t_cljs$core$async32852(self__.map_LT_,self__.f,self__.ch,meta32853__$1));
});

cljs.core.async.t_cljs$core$async32852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32854){
var self__ = this;
var _32854__$1 = this;
return self__.meta32853;
});

cljs.core.async.t_cljs$core$async32852.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32852.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32852.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32852.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32852.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32855 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32855 = (function (map_LT_,f,ch,meta32853,_,fn1,meta32856){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32853 = meta32853;
this._ = _;
this.fn1 = fn1;
this.meta32856 = meta32856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32857,meta32856__$1){
var self__ = this;
var _32857__$1 = this;
return (new cljs.core.async.t_cljs$core$async32855(self__.map_LT_,self__.f,self__.ch,self__.meta32853,self__._,self__.fn1,meta32856__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32855.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32857){
var self__ = this;
var _32857__$1 = this;
return self__.meta32856;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32855.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32855.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32855.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32855.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32845_SHARP_){
return f1.call(null,(((p1__32845_SHARP_ == null))?null:self__.f.call(null,p1__32845_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32855.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32853","meta32853",1757555012,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32852","cljs.core.async/t_cljs$core$async32852",-1995275314,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32856","meta32856",-1582388899,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32855.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32855";

cljs.core.async.t_cljs$core$async32855.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async32855");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32855 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32855(map_LT___$1,f__$1,ch__$1,meta32853__$1,___$2,fn1__$1,meta32856){
return (new cljs.core.async.t_cljs$core$async32855(map_LT___$1,f__$1,ch__$1,meta32853__$1,___$2,fn1__$1,meta32856));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32855(self__.map_LT_,self__.f,self__.ch,self__.meta32853,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async32852.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32852.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32853","meta32853",1757555012,null)], null);
});

cljs.core.async.t_cljs$core$async32852.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32852";

cljs.core.async.t_cljs$core$async32852.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async32852");
});

cljs.core.async.__GT_t_cljs$core$async32852 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32852(map_LT___$1,f__$1,ch__$1,meta32853){
return (new cljs.core.async.t_cljs$core$async32852(map_LT___$1,f__$1,ch__$1,meta32853));
});

}

return (new cljs.core.async.t_cljs$core$async32852(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32861 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32861 = (function (map_GT_,f,ch,meta32862){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32862 = meta32862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32863,meta32862__$1){
var self__ = this;
var _32863__$1 = this;
return (new cljs.core.async.t_cljs$core$async32861(self__.map_GT_,self__.f,self__.ch,meta32862__$1));
});

cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32863){
var self__ = this;
var _32863__$1 = this;
return self__.meta32862;
});

cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32862","meta32862",-475497724,null)], null);
});

cljs.core.async.t_cljs$core$async32861.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32861";

cljs.core.async.t_cljs$core$async32861.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async32861");
});

cljs.core.async.__GT_t_cljs$core$async32861 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32861(map_GT___$1,f__$1,ch__$1,meta32862){
return (new cljs.core.async.t_cljs$core$async32861(map_GT___$1,f__$1,ch__$1,meta32862));
});

}

return (new cljs.core.async.t_cljs$core$async32861(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32867 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32867 = (function (filter_GT_,p,ch,meta32868){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32868 = meta32868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32869,meta32868__$1){
var self__ = this;
var _32869__$1 = this;
return (new cljs.core.async.t_cljs$core$async32867(self__.filter_GT_,self__.p,self__.ch,meta32868__$1));
});

cljs.core.async.t_cljs$core$async32867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32869){
var self__ = this;
var _32869__$1 = this;
return self__.meta32868;
});

cljs.core.async.t_cljs$core$async32867.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32867.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32867.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32867.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32867.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32867.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32867.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32868","meta32868",929502530,null)], null);
});

cljs.core.async.t_cljs$core$async32867.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32867";

cljs.core.async.t_cljs$core$async32867.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async32867");
});

cljs.core.async.__GT_t_cljs$core$async32867 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32867(filter_GT___$1,p__$1,ch__$1,meta32868){
return (new cljs.core.async.t_cljs$core$async32867(filter_GT___$1,p__$1,ch__$1,meta32868));
});

}

return (new cljs.core.async.t_cljs$core$async32867(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args32870 = [];
var len__17863__auto___32914 = arguments.length;
var i__17864__auto___32915 = (0);
while(true){
if((i__17864__auto___32915 < len__17863__auto___32914)){
args32870.push((arguments[i__17864__auto___32915]));

var G__32916 = (i__17864__auto___32915 + (1));
i__17864__auto___32915 = G__32916;
continue;
} else {
}
break;
}

var G__32872 = args32870.length;
switch (G__32872) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32870.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19184__auto___32918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___32918,out){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___32918,out){
return (function (state_32893){
var state_val_32894 = (state_32893[(1)]);
if((state_val_32894 === (7))){
var inst_32889 = (state_32893[(2)]);
var state_32893__$1 = state_32893;
var statearr_32895_32919 = state_32893__$1;
(statearr_32895_32919[(2)] = inst_32889);

(statearr_32895_32919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (1))){
var state_32893__$1 = state_32893;
var statearr_32896_32920 = state_32893__$1;
(statearr_32896_32920[(2)] = null);

(statearr_32896_32920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (4))){
var inst_32875 = (state_32893[(7)]);
var inst_32875__$1 = (state_32893[(2)]);
var inst_32876 = (inst_32875__$1 == null);
var state_32893__$1 = (function (){var statearr_32897 = state_32893;
(statearr_32897[(7)] = inst_32875__$1);

return statearr_32897;
})();
if(cljs.core.truth_(inst_32876)){
var statearr_32898_32921 = state_32893__$1;
(statearr_32898_32921[(1)] = (5));

} else {
var statearr_32899_32922 = state_32893__$1;
(statearr_32899_32922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (6))){
var inst_32875 = (state_32893[(7)]);
var inst_32880 = p.call(null,inst_32875);
var state_32893__$1 = state_32893;
if(cljs.core.truth_(inst_32880)){
var statearr_32900_32923 = state_32893__$1;
(statearr_32900_32923[(1)] = (8));

} else {
var statearr_32901_32924 = state_32893__$1;
(statearr_32901_32924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (3))){
var inst_32891 = (state_32893[(2)]);
var state_32893__$1 = state_32893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32893__$1,inst_32891);
} else {
if((state_val_32894 === (2))){
var state_32893__$1 = state_32893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32893__$1,(4),ch);
} else {
if((state_val_32894 === (11))){
var inst_32883 = (state_32893[(2)]);
var state_32893__$1 = state_32893;
var statearr_32902_32925 = state_32893__$1;
(statearr_32902_32925[(2)] = inst_32883);

(statearr_32902_32925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (9))){
var state_32893__$1 = state_32893;
var statearr_32903_32926 = state_32893__$1;
(statearr_32903_32926[(2)] = null);

(statearr_32903_32926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (5))){
var inst_32878 = cljs.core.async.close_BANG_.call(null,out);
var state_32893__$1 = state_32893;
var statearr_32904_32927 = state_32893__$1;
(statearr_32904_32927[(2)] = inst_32878);

(statearr_32904_32927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (10))){
var inst_32886 = (state_32893[(2)]);
var state_32893__$1 = (function (){var statearr_32905 = state_32893;
(statearr_32905[(8)] = inst_32886);

return statearr_32905;
})();
var statearr_32906_32928 = state_32893__$1;
(statearr_32906_32928[(2)] = null);

(statearr_32906_32928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (8))){
var inst_32875 = (state_32893[(7)]);
var state_32893__$1 = state_32893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32893__$1,(11),out,inst_32875);
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
});})(c__19184__auto___32918,out))
;
return ((function (switch__19163__auto__,c__19184__auto___32918,out){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_32910 = [null,null,null,null,null,null,null,null,null];
(statearr_32910[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_32910[(1)] = (1));

return statearr_32910;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_32893){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_32893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e32911){if((e32911 instanceof Object)){
var ex__19167__auto__ = e32911;
var statearr_32912_32929 = state_32893;
(statearr_32912_32929[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32930 = state_32893;
state_32893 = G__32930;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_32893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_32893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___32918,out))
})();
var state__19186__auto__ = (function (){var statearr_32913 = f__19185__auto__.call(null);
(statearr_32913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___32918);

return statearr_32913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___32918,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32931 = [];
var len__17863__auto___32934 = arguments.length;
var i__17864__auto___32935 = (0);
while(true){
if((i__17864__auto___32935 < len__17863__auto___32934)){
args32931.push((arguments[i__17864__auto___32935]));

var G__32936 = (i__17864__auto___32935 + (1));
i__17864__auto___32935 = G__32936;
continue;
} else {
}
break;
}

var G__32933 = args32931.length;
switch (G__32933) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32931.length)].join('')));

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
return (function (state_33103){
var state_val_33104 = (state_33103[(1)]);
if((state_val_33104 === (7))){
var inst_33099 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
var statearr_33105_33146 = state_33103__$1;
(statearr_33105_33146[(2)] = inst_33099);

(statearr_33105_33146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (20))){
var inst_33069 = (state_33103[(7)]);
var inst_33080 = (state_33103[(2)]);
var inst_33081 = cljs.core.next.call(null,inst_33069);
var inst_33055 = inst_33081;
var inst_33056 = null;
var inst_33057 = (0);
var inst_33058 = (0);
var state_33103__$1 = (function (){var statearr_33106 = state_33103;
(statearr_33106[(8)] = inst_33055);

(statearr_33106[(9)] = inst_33056);

(statearr_33106[(10)] = inst_33057);

(statearr_33106[(11)] = inst_33058);

(statearr_33106[(12)] = inst_33080);

return statearr_33106;
})();
var statearr_33107_33147 = state_33103__$1;
(statearr_33107_33147[(2)] = null);

(statearr_33107_33147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (1))){
var state_33103__$1 = state_33103;
var statearr_33108_33148 = state_33103__$1;
(statearr_33108_33148[(2)] = null);

(statearr_33108_33148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (4))){
var inst_33044 = (state_33103[(13)]);
var inst_33044__$1 = (state_33103[(2)]);
var inst_33045 = (inst_33044__$1 == null);
var state_33103__$1 = (function (){var statearr_33109 = state_33103;
(statearr_33109[(13)] = inst_33044__$1);

return statearr_33109;
})();
if(cljs.core.truth_(inst_33045)){
var statearr_33110_33149 = state_33103__$1;
(statearr_33110_33149[(1)] = (5));

} else {
var statearr_33111_33150 = state_33103__$1;
(statearr_33111_33150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (15))){
var state_33103__$1 = state_33103;
var statearr_33115_33151 = state_33103__$1;
(statearr_33115_33151[(2)] = null);

(statearr_33115_33151[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (21))){
var state_33103__$1 = state_33103;
var statearr_33116_33152 = state_33103__$1;
(statearr_33116_33152[(2)] = null);

(statearr_33116_33152[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (13))){
var inst_33055 = (state_33103[(8)]);
var inst_33056 = (state_33103[(9)]);
var inst_33057 = (state_33103[(10)]);
var inst_33058 = (state_33103[(11)]);
var inst_33065 = (state_33103[(2)]);
var inst_33066 = (inst_33058 + (1));
var tmp33112 = inst_33055;
var tmp33113 = inst_33056;
var tmp33114 = inst_33057;
var inst_33055__$1 = tmp33112;
var inst_33056__$1 = tmp33113;
var inst_33057__$1 = tmp33114;
var inst_33058__$1 = inst_33066;
var state_33103__$1 = (function (){var statearr_33117 = state_33103;
(statearr_33117[(14)] = inst_33065);

(statearr_33117[(8)] = inst_33055__$1);

(statearr_33117[(9)] = inst_33056__$1);

(statearr_33117[(10)] = inst_33057__$1);

(statearr_33117[(11)] = inst_33058__$1);

return statearr_33117;
})();
var statearr_33118_33153 = state_33103__$1;
(statearr_33118_33153[(2)] = null);

(statearr_33118_33153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (22))){
var state_33103__$1 = state_33103;
var statearr_33119_33154 = state_33103__$1;
(statearr_33119_33154[(2)] = null);

(statearr_33119_33154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (6))){
var inst_33044 = (state_33103[(13)]);
var inst_33053 = f.call(null,inst_33044);
var inst_33054 = cljs.core.seq.call(null,inst_33053);
var inst_33055 = inst_33054;
var inst_33056 = null;
var inst_33057 = (0);
var inst_33058 = (0);
var state_33103__$1 = (function (){var statearr_33120 = state_33103;
(statearr_33120[(8)] = inst_33055);

(statearr_33120[(9)] = inst_33056);

(statearr_33120[(10)] = inst_33057);

(statearr_33120[(11)] = inst_33058);

return statearr_33120;
})();
var statearr_33121_33155 = state_33103__$1;
(statearr_33121_33155[(2)] = null);

(statearr_33121_33155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (17))){
var inst_33069 = (state_33103[(7)]);
var inst_33073 = cljs.core.chunk_first.call(null,inst_33069);
var inst_33074 = cljs.core.chunk_rest.call(null,inst_33069);
var inst_33075 = cljs.core.count.call(null,inst_33073);
var inst_33055 = inst_33074;
var inst_33056 = inst_33073;
var inst_33057 = inst_33075;
var inst_33058 = (0);
var state_33103__$1 = (function (){var statearr_33122 = state_33103;
(statearr_33122[(8)] = inst_33055);

(statearr_33122[(9)] = inst_33056);

(statearr_33122[(10)] = inst_33057);

(statearr_33122[(11)] = inst_33058);

return statearr_33122;
})();
var statearr_33123_33156 = state_33103__$1;
(statearr_33123_33156[(2)] = null);

(statearr_33123_33156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (3))){
var inst_33101 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33103__$1,inst_33101);
} else {
if((state_val_33104 === (12))){
var inst_33089 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
var statearr_33124_33157 = state_33103__$1;
(statearr_33124_33157[(2)] = inst_33089);

(statearr_33124_33157[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (2))){
var state_33103__$1 = state_33103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33103__$1,(4),in$);
} else {
if((state_val_33104 === (23))){
var inst_33097 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
var statearr_33125_33158 = state_33103__$1;
(statearr_33125_33158[(2)] = inst_33097);

(statearr_33125_33158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (19))){
var inst_33084 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
var statearr_33126_33159 = state_33103__$1;
(statearr_33126_33159[(2)] = inst_33084);

(statearr_33126_33159[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (11))){
var inst_33055 = (state_33103[(8)]);
var inst_33069 = (state_33103[(7)]);
var inst_33069__$1 = cljs.core.seq.call(null,inst_33055);
var state_33103__$1 = (function (){var statearr_33127 = state_33103;
(statearr_33127[(7)] = inst_33069__$1);

return statearr_33127;
})();
if(inst_33069__$1){
var statearr_33128_33160 = state_33103__$1;
(statearr_33128_33160[(1)] = (14));

} else {
var statearr_33129_33161 = state_33103__$1;
(statearr_33129_33161[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (9))){
var inst_33091 = (state_33103[(2)]);
var inst_33092 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33103__$1 = (function (){var statearr_33130 = state_33103;
(statearr_33130[(15)] = inst_33091);

return statearr_33130;
})();
if(cljs.core.truth_(inst_33092)){
var statearr_33131_33162 = state_33103__$1;
(statearr_33131_33162[(1)] = (21));

} else {
var statearr_33132_33163 = state_33103__$1;
(statearr_33132_33163[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (5))){
var inst_33047 = cljs.core.async.close_BANG_.call(null,out);
var state_33103__$1 = state_33103;
var statearr_33133_33164 = state_33103__$1;
(statearr_33133_33164[(2)] = inst_33047);

(statearr_33133_33164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (14))){
var inst_33069 = (state_33103[(7)]);
var inst_33071 = cljs.core.chunked_seq_QMARK_.call(null,inst_33069);
var state_33103__$1 = state_33103;
if(inst_33071){
var statearr_33134_33165 = state_33103__$1;
(statearr_33134_33165[(1)] = (17));

} else {
var statearr_33135_33166 = state_33103__$1;
(statearr_33135_33166[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (16))){
var inst_33087 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
var statearr_33136_33167 = state_33103__$1;
(statearr_33136_33167[(2)] = inst_33087);

(statearr_33136_33167[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (10))){
var inst_33056 = (state_33103[(9)]);
var inst_33058 = (state_33103[(11)]);
var inst_33063 = cljs.core._nth.call(null,inst_33056,inst_33058);
var state_33103__$1 = state_33103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33103__$1,(13),out,inst_33063);
} else {
if((state_val_33104 === (18))){
var inst_33069 = (state_33103[(7)]);
var inst_33078 = cljs.core.first.call(null,inst_33069);
var state_33103__$1 = state_33103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33103__$1,(20),out,inst_33078);
} else {
if((state_val_33104 === (8))){
var inst_33057 = (state_33103[(10)]);
var inst_33058 = (state_33103[(11)]);
var inst_33060 = (inst_33058 < inst_33057);
var inst_33061 = inst_33060;
var state_33103__$1 = state_33103;
if(cljs.core.truth_(inst_33061)){
var statearr_33137_33168 = state_33103__$1;
(statearr_33137_33168[(1)] = (10));

} else {
var statearr_33138_33169 = state_33103__$1;
(statearr_33138_33169[(1)] = (11));

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
var statearr_33142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33142[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19164__auto__);

(statearr_33142[(1)] = (1));

return statearr_33142;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19164__auto____1 = (function (state_33103){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_33103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e33143){if((e33143 instanceof Object)){
var ex__19167__auto__ = e33143;
var statearr_33144_33170 = state_33103;
(statearr_33144_33170[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33171 = state_33103;
state_33103 = G__33171;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19164__auto__ = function(state_33103){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19164__auto____1.call(this,state_33103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19164__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19164__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto__))
})();
var state__19186__auto__ = (function (){var statearr_33145 = f__19185__auto__.call(null);
(statearr_33145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto__);

return statearr_33145;
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
var args33172 = [];
var len__17863__auto___33175 = arguments.length;
var i__17864__auto___33176 = (0);
while(true){
if((i__17864__auto___33176 < len__17863__auto___33175)){
args33172.push((arguments[i__17864__auto___33176]));

var G__33177 = (i__17864__auto___33176 + (1));
i__17864__auto___33176 = G__33177;
continue;
} else {
}
break;
}

var G__33174 = args33172.length;
switch (G__33174) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33172.length)].join('')));

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
var args33179 = [];
var len__17863__auto___33182 = arguments.length;
var i__17864__auto___33183 = (0);
while(true){
if((i__17864__auto___33183 < len__17863__auto___33182)){
args33179.push((arguments[i__17864__auto___33183]));

var G__33184 = (i__17864__auto___33183 + (1));
i__17864__auto___33183 = G__33184;
continue;
} else {
}
break;
}

var G__33181 = args33179.length;
switch (G__33181) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33179.length)].join('')));

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
var args33186 = [];
var len__17863__auto___33237 = arguments.length;
var i__17864__auto___33238 = (0);
while(true){
if((i__17864__auto___33238 < len__17863__auto___33237)){
args33186.push((arguments[i__17864__auto___33238]));

var G__33239 = (i__17864__auto___33238 + (1));
i__17864__auto___33238 = G__33239;
continue;
} else {
}
break;
}

var G__33188 = args33186.length;
switch (G__33188) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33186.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19184__auto___33241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___33241,out){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___33241,out){
return (function (state_33212){
var state_val_33213 = (state_33212[(1)]);
if((state_val_33213 === (7))){
var inst_33207 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
var statearr_33214_33242 = state_33212__$1;
(statearr_33214_33242[(2)] = inst_33207);

(statearr_33214_33242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (1))){
var inst_33189 = null;
var state_33212__$1 = (function (){var statearr_33215 = state_33212;
(statearr_33215[(7)] = inst_33189);

return statearr_33215;
})();
var statearr_33216_33243 = state_33212__$1;
(statearr_33216_33243[(2)] = null);

(statearr_33216_33243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (4))){
var inst_33192 = (state_33212[(8)]);
var inst_33192__$1 = (state_33212[(2)]);
var inst_33193 = (inst_33192__$1 == null);
var inst_33194 = cljs.core.not.call(null,inst_33193);
var state_33212__$1 = (function (){var statearr_33217 = state_33212;
(statearr_33217[(8)] = inst_33192__$1);

return statearr_33217;
})();
if(inst_33194){
var statearr_33218_33244 = state_33212__$1;
(statearr_33218_33244[(1)] = (5));

} else {
var statearr_33219_33245 = state_33212__$1;
(statearr_33219_33245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (6))){
var state_33212__$1 = state_33212;
var statearr_33220_33246 = state_33212__$1;
(statearr_33220_33246[(2)] = null);

(statearr_33220_33246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (3))){
var inst_33209 = (state_33212[(2)]);
var inst_33210 = cljs.core.async.close_BANG_.call(null,out);
var state_33212__$1 = (function (){var statearr_33221 = state_33212;
(statearr_33221[(9)] = inst_33209);

return statearr_33221;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33212__$1,inst_33210);
} else {
if((state_val_33213 === (2))){
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33212__$1,(4),ch);
} else {
if((state_val_33213 === (11))){
var inst_33192 = (state_33212[(8)]);
var inst_33201 = (state_33212[(2)]);
var inst_33189 = inst_33192;
var state_33212__$1 = (function (){var statearr_33222 = state_33212;
(statearr_33222[(10)] = inst_33201);

(statearr_33222[(7)] = inst_33189);

return statearr_33222;
})();
var statearr_33223_33247 = state_33212__$1;
(statearr_33223_33247[(2)] = null);

(statearr_33223_33247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (9))){
var inst_33192 = (state_33212[(8)]);
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33212__$1,(11),out,inst_33192);
} else {
if((state_val_33213 === (5))){
var inst_33192 = (state_33212[(8)]);
var inst_33189 = (state_33212[(7)]);
var inst_33196 = cljs.core._EQ_.call(null,inst_33192,inst_33189);
var state_33212__$1 = state_33212;
if(inst_33196){
var statearr_33225_33248 = state_33212__$1;
(statearr_33225_33248[(1)] = (8));

} else {
var statearr_33226_33249 = state_33212__$1;
(statearr_33226_33249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (10))){
var inst_33204 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
var statearr_33227_33250 = state_33212__$1;
(statearr_33227_33250[(2)] = inst_33204);

(statearr_33227_33250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (8))){
var inst_33189 = (state_33212[(7)]);
var tmp33224 = inst_33189;
var inst_33189__$1 = tmp33224;
var state_33212__$1 = (function (){var statearr_33228 = state_33212;
(statearr_33228[(7)] = inst_33189__$1);

return statearr_33228;
})();
var statearr_33229_33251 = state_33212__$1;
(statearr_33229_33251[(2)] = null);

(statearr_33229_33251[(1)] = (2));


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
});})(c__19184__auto___33241,out))
;
return ((function (switch__19163__auto__,c__19184__auto___33241,out){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_33233 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33233[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_33233[(1)] = (1));

return statearr_33233;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_33212){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_33212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e33234){if((e33234 instanceof Object)){
var ex__19167__auto__ = e33234;
var statearr_33235_33252 = state_33212;
(statearr_33235_33252[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33253 = state_33212;
state_33212 = G__33253;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_33212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_33212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___33241,out))
})();
var state__19186__auto__ = (function (){var statearr_33236 = f__19185__auto__.call(null);
(statearr_33236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___33241);

return statearr_33236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___33241,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33254 = [];
var len__17863__auto___33324 = arguments.length;
var i__17864__auto___33325 = (0);
while(true){
if((i__17864__auto___33325 < len__17863__auto___33324)){
args33254.push((arguments[i__17864__auto___33325]));

var G__33326 = (i__17864__auto___33325 + (1));
i__17864__auto___33325 = G__33326;
continue;
} else {
}
break;
}

var G__33256 = args33254.length;
switch (G__33256) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33254.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19184__auto___33328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___33328,out){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___33328,out){
return (function (state_33294){
var state_val_33295 = (state_33294[(1)]);
if((state_val_33295 === (7))){
var inst_33290 = (state_33294[(2)]);
var state_33294__$1 = state_33294;
var statearr_33296_33329 = state_33294__$1;
(statearr_33296_33329[(2)] = inst_33290);

(statearr_33296_33329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (1))){
var inst_33257 = (new Array(n));
var inst_33258 = inst_33257;
var inst_33259 = (0);
var state_33294__$1 = (function (){var statearr_33297 = state_33294;
(statearr_33297[(7)] = inst_33259);

(statearr_33297[(8)] = inst_33258);

return statearr_33297;
})();
var statearr_33298_33330 = state_33294__$1;
(statearr_33298_33330[(2)] = null);

(statearr_33298_33330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (4))){
var inst_33262 = (state_33294[(9)]);
var inst_33262__$1 = (state_33294[(2)]);
var inst_33263 = (inst_33262__$1 == null);
var inst_33264 = cljs.core.not.call(null,inst_33263);
var state_33294__$1 = (function (){var statearr_33299 = state_33294;
(statearr_33299[(9)] = inst_33262__$1);

return statearr_33299;
})();
if(inst_33264){
var statearr_33300_33331 = state_33294__$1;
(statearr_33300_33331[(1)] = (5));

} else {
var statearr_33301_33332 = state_33294__$1;
(statearr_33301_33332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (15))){
var inst_33284 = (state_33294[(2)]);
var state_33294__$1 = state_33294;
var statearr_33302_33333 = state_33294__$1;
(statearr_33302_33333[(2)] = inst_33284);

(statearr_33302_33333[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (13))){
var state_33294__$1 = state_33294;
var statearr_33303_33334 = state_33294__$1;
(statearr_33303_33334[(2)] = null);

(statearr_33303_33334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (6))){
var inst_33259 = (state_33294[(7)]);
var inst_33280 = (inst_33259 > (0));
var state_33294__$1 = state_33294;
if(cljs.core.truth_(inst_33280)){
var statearr_33304_33335 = state_33294__$1;
(statearr_33304_33335[(1)] = (12));

} else {
var statearr_33305_33336 = state_33294__$1;
(statearr_33305_33336[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (3))){
var inst_33292 = (state_33294[(2)]);
var state_33294__$1 = state_33294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33294__$1,inst_33292);
} else {
if((state_val_33295 === (12))){
var inst_33258 = (state_33294[(8)]);
var inst_33282 = cljs.core.vec.call(null,inst_33258);
var state_33294__$1 = state_33294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33294__$1,(15),out,inst_33282);
} else {
if((state_val_33295 === (2))){
var state_33294__$1 = state_33294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33294__$1,(4),ch);
} else {
if((state_val_33295 === (11))){
var inst_33274 = (state_33294[(2)]);
var inst_33275 = (new Array(n));
var inst_33258 = inst_33275;
var inst_33259 = (0);
var state_33294__$1 = (function (){var statearr_33306 = state_33294;
(statearr_33306[(10)] = inst_33274);

(statearr_33306[(7)] = inst_33259);

(statearr_33306[(8)] = inst_33258);

return statearr_33306;
})();
var statearr_33307_33337 = state_33294__$1;
(statearr_33307_33337[(2)] = null);

(statearr_33307_33337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (9))){
var inst_33258 = (state_33294[(8)]);
var inst_33272 = cljs.core.vec.call(null,inst_33258);
var state_33294__$1 = state_33294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33294__$1,(11),out,inst_33272);
} else {
if((state_val_33295 === (5))){
var inst_33267 = (state_33294[(11)]);
var inst_33259 = (state_33294[(7)]);
var inst_33258 = (state_33294[(8)]);
var inst_33262 = (state_33294[(9)]);
var inst_33266 = (inst_33258[inst_33259] = inst_33262);
var inst_33267__$1 = (inst_33259 + (1));
var inst_33268 = (inst_33267__$1 < n);
var state_33294__$1 = (function (){var statearr_33308 = state_33294;
(statearr_33308[(12)] = inst_33266);

(statearr_33308[(11)] = inst_33267__$1);

return statearr_33308;
})();
if(cljs.core.truth_(inst_33268)){
var statearr_33309_33338 = state_33294__$1;
(statearr_33309_33338[(1)] = (8));

} else {
var statearr_33310_33339 = state_33294__$1;
(statearr_33310_33339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (14))){
var inst_33287 = (state_33294[(2)]);
var inst_33288 = cljs.core.async.close_BANG_.call(null,out);
var state_33294__$1 = (function (){var statearr_33312 = state_33294;
(statearr_33312[(13)] = inst_33287);

return statearr_33312;
})();
var statearr_33313_33340 = state_33294__$1;
(statearr_33313_33340[(2)] = inst_33288);

(statearr_33313_33340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (10))){
var inst_33278 = (state_33294[(2)]);
var state_33294__$1 = state_33294;
var statearr_33314_33341 = state_33294__$1;
(statearr_33314_33341[(2)] = inst_33278);

(statearr_33314_33341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (8))){
var inst_33267 = (state_33294[(11)]);
var inst_33258 = (state_33294[(8)]);
var tmp33311 = inst_33258;
var inst_33258__$1 = tmp33311;
var inst_33259 = inst_33267;
var state_33294__$1 = (function (){var statearr_33315 = state_33294;
(statearr_33315[(7)] = inst_33259);

(statearr_33315[(8)] = inst_33258__$1);

return statearr_33315;
})();
var statearr_33316_33342 = state_33294__$1;
(statearr_33316_33342[(2)] = null);

(statearr_33316_33342[(1)] = (2));


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
});})(c__19184__auto___33328,out))
;
return ((function (switch__19163__auto__,c__19184__auto___33328,out){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_33320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33320[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_33320[(1)] = (1));

return statearr_33320;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_33294){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_33294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e33321){if((e33321 instanceof Object)){
var ex__19167__auto__ = e33321;
var statearr_33322_33343 = state_33294;
(statearr_33322_33343[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33344 = state_33294;
state_33294 = G__33344;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_33294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_33294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___33328,out))
})();
var state__19186__auto__ = (function (){var statearr_33323 = f__19185__auto__.call(null);
(statearr_33323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___33328);

return statearr_33323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___33328,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33345 = [];
var len__17863__auto___33419 = arguments.length;
var i__17864__auto___33420 = (0);
while(true){
if((i__17864__auto___33420 < len__17863__auto___33419)){
args33345.push((arguments[i__17864__auto___33420]));

var G__33421 = (i__17864__auto___33420 + (1));
i__17864__auto___33420 = G__33421;
continue;
} else {
}
break;
}

var G__33347 = args33345.length;
switch (G__33347) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33345.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19184__auto___33423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19184__auto___33423,out){
return (function (){
var f__19185__auto__ = (function (){var switch__19163__auto__ = ((function (c__19184__auto___33423,out){
return (function (state_33389){
var state_val_33390 = (state_33389[(1)]);
if((state_val_33390 === (7))){
var inst_33385 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
var statearr_33391_33424 = state_33389__$1;
(statearr_33391_33424[(2)] = inst_33385);

(statearr_33391_33424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (1))){
var inst_33348 = [];
var inst_33349 = inst_33348;
var inst_33350 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33389__$1 = (function (){var statearr_33392 = state_33389;
(statearr_33392[(7)] = inst_33350);

(statearr_33392[(8)] = inst_33349);

return statearr_33392;
})();
var statearr_33393_33425 = state_33389__$1;
(statearr_33393_33425[(2)] = null);

(statearr_33393_33425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (4))){
var inst_33353 = (state_33389[(9)]);
var inst_33353__$1 = (state_33389[(2)]);
var inst_33354 = (inst_33353__$1 == null);
var inst_33355 = cljs.core.not.call(null,inst_33354);
var state_33389__$1 = (function (){var statearr_33394 = state_33389;
(statearr_33394[(9)] = inst_33353__$1);

return statearr_33394;
})();
if(inst_33355){
var statearr_33395_33426 = state_33389__$1;
(statearr_33395_33426[(1)] = (5));

} else {
var statearr_33396_33427 = state_33389__$1;
(statearr_33396_33427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (15))){
var inst_33379 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
var statearr_33397_33428 = state_33389__$1;
(statearr_33397_33428[(2)] = inst_33379);

(statearr_33397_33428[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (13))){
var state_33389__$1 = state_33389;
var statearr_33398_33429 = state_33389__$1;
(statearr_33398_33429[(2)] = null);

(statearr_33398_33429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (6))){
var inst_33349 = (state_33389[(8)]);
var inst_33374 = inst_33349.length;
var inst_33375 = (inst_33374 > (0));
var state_33389__$1 = state_33389;
if(cljs.core.truth_(inst_33375)){
var statearr_33399_33430 = state_33389__$1;
(statearr_33399_33430[(1)] = (12));

} else {
var statearr_33400_33431 = state_33389__$1;
(statearr_33400_33431[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (3))){
var inst_33387 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33389__$1,inst_33387);
} else {
if((state_val_33390 === (12))){
var inst_33349 = (state_33389[(8)]);
var inst_33377 = cljs.core.vec.call(null,inst_33349);
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33389__$1,(15),out,inst_33377);
} else {
if((state_val_33390 === (2))){
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33389__$1,(4),ch);
} else {
if((state_val_33390 === (11))){
var inst_33353 = (state_33389[(9)]);
var inst_33357 = (state_33389[(10)]);
var inst_33367 = (state_33389[(2)]);
var inst_33368 = [];
var inst_33369 = inst_33368.push(inst_33353);
var inst_33349 = inst_33368;
var inst_33350 = inst_33357;
var state_33389__$1 = (function (){var statearr_33401 = state_33389;
(statearr_33401[(11)] = inst_33367);

(statearr_33401[(7)] = inst_33350);

(statearr_33401[(12)] = inst_33369);

(statearr_33401[(8)] = inst_33349);

return statearr_33401;
})();
var statearr_33402_33432 = state_33389__$1;
(statearr_33402_33432[(2)] = null);

(statearr_33402_33432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (9))){
var inst_33349 = (state_33389[(8)]);
var inst_33365 = cljs.core.vec.call(null,inst_33349);
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33389__$1,(11),out,inst_33365);
} else {
if((state_val_33390 === (5))){
var inst_33350 = (state_33389[(7)]);
var inst_33353 = (state_33389[(9)]);
var inst_33357 = (state_33389[(10)]);
var inst_33357__$1 = f.call(null,inst_33353);
var inst_33358 = cljs.core._EQ_.call(null,inst_33357__$1,inst_33350);
var inst_33359 = cljs.core.keyword_identical_QMARK_.call(null,inst_33350,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33360 = (inst_33358) || (inst_33359);
var state_33389__$1 = (function (){var statearr_33403 = state_33389;
(statearr_33403[(10)] = inst_33357__$1);

return statearr_33403;
})();
if(cljs.core.truth_(inst_33360)){
var statearr_33404_33433 = state_33389__$1;
(statearr_33404_33433[(1)] = (8));

} else {
var statearr_33405_33434 = state_33389__$1;
(statearr_33405_33434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (14))){
var inst_33382 = (state_33389[(2)]);
var inst_33383 = cljs.core.async.close_BANG_.call(null,out);
var state_33389__$1 = (function (){var statearr_33407 = state_33389;
(statearr_33407[(13)] = inst_33382);

return statearr_33407;
})();
var statearr_33408_33435 = state_33389__$1;
(statearr_33408_33435[(2)] = inst_33383);

(statearr_33408_33435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (10))){
var inst_33372 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
var statearr_33409_33436 = state_33389__$1;
(statearr_33409_33436[(2)] = inst_33372);

(statearr_33409_33436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (8))){
var inst_33353 = (state_33389[(9)]);
var inst_33357 = (state_33389[(10)]);
var inst_33349 = (state_33389[(8)]);
var inst_33362 = inst_33349.push(inst_33353);
var tmp33406 = inst_33349;
var inst_33349__$1 = tmp33406;
var inst_33350 = inst_33357;
var state_33389__$1 = (function (){var statearr_33410 = state_33389;
(statearr_33410[(7)] = inst_33350);

(statearr_33410[(14)] = inst_33362);

(statearr_33410[(8)] = inst_33349__$1);

return statearr_33410;
})();
var statearr_33411_33437 = state_33389__$1;
(statearr_33411_33437[(2)] = null);

(statearr_33411_33437[(1)] = (2));


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
});})(c__19184__auto___33423,out))
;
return ((function (switch__19163__auto__,c__19184__auto___33423,out){
return (function() {
var cljs$core$async$state_machine__19164__auto__ = null;
var cljs$core$async$state_machine__19164__auto____0 = (function (){
var statearr_33415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33415[(0)] = cljs$core$async$state_machine__19164__auto__);

(statearr_33415[(1)] = (1));

return statearr_33415;
});
var cljs$core$async$state_machine__19164__auto____1 = (function (state_33389){
while(true){
var ret_value__19165__auto__ = (function (){try{while(true){
var result__19166__auto__ = switch__19163__auto__.call(null,state_33389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19166__auto__;
}
break;
}
}catch (e33416){if((e33416 instanceof Object)){
var ex__19167__auto__ = e33416;
var statearr_33417_33438 = state_33389;
(statearr_33417_33438[(5)] = ex__19167__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33439 = state_33389;
state_33389 = G__33439;
continue;
} else {
return ret_value__19165__auto__;
}
break;
}
});
cljs$core$async$state_machine__19164__auto__ = function(state_33389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19164__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19164__auto____1.call(this,state_33389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19164__auto____0;
cljs$core$async$state_machine__19164__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19164__auto____1;
return cljs$core$async$state_machine__19164__auto__;
})()
;})(switch__19163__auto__,c__19184__auto___33423,out))
})();
var state__19186__auto__ = (function (){var statearr_33418 = f__19185__auto__.call(null);
(statearr_33418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19184__auto___33423);

return statearr_33418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19186__auto__);
});})(c__19184__auto___33423,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1463388064417