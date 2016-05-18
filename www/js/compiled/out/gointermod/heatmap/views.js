// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.heatmap.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('gointermod.search.handlers');
goog.require('gointermod.utils.utils');
goog.require('gointermod.utils.comms');
goog.require('cljs.core.async');
gointermod.heatmap.views.get_headers = (function gointermod$heatmap$views$get_headers(){
var heatmap = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heatmap-aggregate","heatmap-aggregate",459262902)], null));
return new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,heatmap));
});
gointermod.heatmap.views.headers = (function gointermod$heatmap$views$headers(){
var headers__$1 = gointermod.heatmap.views.get_headers.call(null);
var active_filter = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-filter","active-filter",845441376)], null));
var filters = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919)], null));
var filter_info = cljs.core.get.call(null,cljs.core.deref.call(null,filters),cljs.core.deref.call(null,active_filter));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.axis","th.axis",-2115057493),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.icon","svg.icon",521947604),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xlinkHref","xlinkHref",-1814059639),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(filter_info)], null)], null)], null)," ",new cljs.core.Keyword(null,"pretty-name","pretty-name",282563528).cljs$core$IFn$_invoke$arity$1(filter_info),":"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.faux-th.species","div.faux-th.species",1765425669),"Species"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.faux-th.ortholog","div.faux-th.ortholog",-285650366),"Ortholog"], null)], null)], null),cljs.core.map.call(null,((function (headers__$1,active_filter,filters,filter_info){
return (function (header){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.goterm","th.goterm",1850646866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),header], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),header], null));
});})(headers__$1,active_filter,filters,filter_info))
,headers__$1)], null)], null);
});
gointermod.heatmap.views.calc_color = (function gointermod$heatmap$views$calc_color(color_val){

if(cljs.core._EQ_.call(null,(0),color_val)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"rgb(255,255,255)"], null);
} else {
var heatmap = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heatmap-aggregate","heatmap-aggregate",459262902)], null));
var max_val = cljs.core.last.call(null,new cljs.core.Keyword(null,"max-count","max-count",1539185305).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,heatmap)));
var calculated_color = (((color_val * (255)) / max_val) | (0));
var bg_color = ((255) - calculated_color);
var mid_color = ((((255) + bg_color) / (2)) | (0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),[cljs.core.str("rgb("),cljs.core.str(bg_color),cljs.core.str(","),cljs.core.str(mid_color),cljs.core.str(","),cljs.core.str("255)")].join('')], null);
}
});
gointermod.heatmap.views.counts = (function gointermod$heatmap$views$counts(){
var heatmap = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heatmap-aggregate","heatmap-aggregate",459262902)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,cljs.core.map.call(null,((function (heatmap){
return (function (result){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gointermod.utils.utils.organism_name_to_id.call(null,cljs.core.first.call(null,result))], null),cljs.core.doall.call(null,cljs.core.map.call(null,((function (heatmap){
return (function (val){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),gointermod.heatmap.views.calc_color.call(null,val)], null),val], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null)], null));
});})(heatmap))
,result))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.first.call(null,result)),cljs.core.str(cljs.core.second.call(null,result))].join('')], null));
});})(heatmap))
,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,heatmap))))], null);
});
gointermod.heatmap.views.empty_rows = (function gointermod$heatmap$views$empty_rows(){
var heatmap = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heatmap-aggregate","heatmap-aggregate",459262902)], null));
var empties = new cljs.core.Keyword(null,"missing-organisms","missing-organisms",2016893831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,heatmap));
var cols = cljs.core.count.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,heatmap)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,cljs.core.map.call(null,((function (heatmap,empties,cols){
return (function (organism){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gointermod.utils.utils.organism_name_to_id.call(null,organism)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),organism], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.no-orthologs","td.no-orthologs",2126806191),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(3)], null),"No orthologs available"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.no-go-terms","td.no-go-terms",-121224850),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(cols - (2))], null),"N/A"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),organism], null));
});})(heatmap,empties,cols))
,empties))], null);
});
gointermod.heatmap.views.heatmap = (function gointermod$heatmap$views$heatmap(){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregate-heatmap-results","aggregate-heatmap-results",-1585485743)], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.heatmap","div.heatmap",530226057),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Annotation count by species"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.heatmap.views.headers], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.heatmap.views.counts], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gointermod.heatmap.views.empty_rows], null)], null)], null);
});
});

//# sourceMappingURL=views.js.map?rel=1463581744911