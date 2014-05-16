// Compiled by ClojureScript 0.0-2069
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_7960 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_7961 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_7962 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_7961,table_section_wrapper_7961,opt_wrapper_7960,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_7962,table_section_wrapper_7961,cell_wrapper_7962,opt_wrapper_7960,table_section_wrapper_7961,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_7961]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3273__auto__ = div.firstChild;if(cljs.core.truth_(and__3273__auto__))
{return div.firstChild.childNodes;
} else
{return and__3273__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__7967 = cljs.core.seq.call(null,tbody);var chunk__7968 = null;var count__7969 = 0;var i__7970 = 0;while(true){
if((i__7970 < count__7969))
{var child = cljs.core._nth.call(null,chunk__7968,i__7970);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7971 = seq__7967;
var G__7972 = chunk__7968;
var G__7973 = count__7969;
var G__7974 = (i__7970 + 1);
seq__7967 = G__7971;
chunk__7968 = G__7972;
count__7969 = G__7973;
i__7970 = G__7974;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7967);if(temp__4092__auto__)
{var seq__7967__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7967__$1))
{var c__4004__auto__ = cljs.core.chunk_first.call(null,seq__7967__$1);{
var G__7975 = cljs.core.chunk_rest.call(null,seq__7967__$1);
var G__7976 = c__4004__auto__;
var G__7977 = cljs.core.count.call(null,c__4004__auto__);
var G__7978 = 0;
seq__7967 = G__7975;
chunk__7968 = G__7976;
count__7969 = G__7977;
i__7970 = G__7978;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__7967__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7979 = cljs.core.next.call(null,seq__7967__$1);
var G__7980 = null;
var G__7981 = 0;
var G__7982 = 0;
seq__7967 = G__7979;
chunk__7968 = G__7980;
count__7969 = G__7981;
i__7970 = G__7982;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__7984 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__7984,0,null);var start_wrap = cljs.core.nth.call(null,vec__7984,1,null);var end_wrap = cljs.core.nth.call(null,vec__7984,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__7985 = wrapper.lastChild;
var G__7986 = (level - 1);
wrapper = G__7985;
level = G__7986;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3273__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3273__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3273__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj7988 = {};return obj7988;
})();
domina.nodes = (function nodes(content){if((function (){var and__3273__auto__ = content;if(and__3273__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3273__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__3883__auto__ = (((content == null))?null:content);return (function (){var or__3285__auto__ = (domina.nodes[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (domina.nodes["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3273__auto__ = nodeseq;if(and__3273__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3273__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__3883__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3285__auto__ = (domina.single_node[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (domina.single_node["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3273__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3273__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3273__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__7989){
var mesg = cljs.core.seq(arglist__7989);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__7990){
var mesg = cljs.core.seq(arglist__7990);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__7991){
var contents = cljs.core.seq(arglist__7991);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__7992_SHARP_){return p1__7992_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__7993_SHARP_,p2__7994_SHARP_){return goog.dom.insertChildAt(p1__7993_SHARP_,p2__7994_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__7996_SHARP_,p2__7995_SHARP_){return goog.dom.insertSiblingBefore(p2__7995_SHARP_,p1__7996_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__7998_SHARP_,p2__7997_SHARP_){return goog.dom.insertSiblingAfter(p2__7997_SHARP_,p1__7998_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__8000_SHARP_,p2__7999_SHARP_){return goog.dom.replaceNode(p2__7999_SHARP_,p1__8000_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__8005_8009 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8006_8010 = null;var count__8007_8011 = 0;var i__8008_8012 = 0;while(true){
if((i__8008_8012 < count__8007_8011))
{var n_8013 = cljs.core._nth.call(null,chunk__8006_8010,i__8008_8012);goog.style.setStyle(n_8013,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8014 = seq__8005_8009;
var G__8015 = chunk__8006_8010;
var G__8016 = count__8007_8011;
var G__8017 = (i__8008_8012 + 1);
seq__8005_8009 = G__8014;
chunk__8006_8010 = G__8015;
count__8007_8011 = G__8016;
i__8008_8012 = G__8017;
continue;
}
} else
{var temp__4092__auto___8018 = cljs.core.seq.call(null,seq__8005_8009);if(temp__4092__auto___8018)
{var seq__8005_8019__$1 = temp__4092__auto___8018;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8005_8019__$1))
{var c__4004__auto___8020 = cljs.core.chunk_first.call(null,seq__8005_8019__$1);{
var G__8021 = cljs.core.chunk_rest.call(null,seq__8005_8019__$1);
var G__8022 = c__4004__auto___8020;
var G__8023 = cljs.core.count.call(null,c__4004__auto___8020);
var G__8024 = 0;
seq__8005_8009 = G__8021;
chunk__8006_8010 = G__8022;
count__8007_8011 = G__8023;
i__8008_8012 = G__8024;
continue;
}
} else
{var n_8025 = cljs.core.first.call(null,seq__8005_8019__$1);goog.style.setStyle(n_8025,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8026 = cljs.core.next.call(null,seq__8005_8019__$1);
var G__8027 = null;
var G__8028 = 0;
var G__8029 = 0;
seq__8005_8009 = G__8026;
chunk__8006_8010 = G__8027;
count__8007_8011 = G__8028;
i__8008_8012 = G__8029;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8030){
var content = cljs.core.first(arglist__8030);
arglist__8030 = cljs.core.next(arglist__8030);
var name = cljs.core.first(arglist__8030);
var value = cljs.core.rest(arglist__8030);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__8035_8039 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8036_8040 = null;var count__8037_8041 = 0;var i__8038_8042 = 0;while(true){
if((i__8038_8042 < count__8037_8041))
{var n_8043 = cljs.core._nth.call(null,chunk__8036_8040,i__8038_8042);n_8043.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8044 = seq__8035_8039;
var G__8045 = chunk__8036_8040;
var G__8046 = count__8037_8041;
var G__8047 = (i__8038_8042 + 1);
seq__8035_8039 = G__8044;
chunk__8036_8040 = G__8045;
count__8037_8041 = G__8046;
i__8038_8042 = G__8047;
continue;
}
} else
{var temp__4092__auto___8048 = cljs.core.seq.call(null,seq__8035_8039);if(temp__4092__auto___8048)
{var seq__8035_8049__$1 = temp__4092__auto___8048;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8035_8049__$1))
{var c__4004__auto___8050 = cljs.core.chunk_first.call(null,seq__8035_8049__$1);{
var G__8051 = cljs.core.chunk_rest.call(null,seq__8035_8049__$1);
var G__8052 = c__4004__auto___8050;
var G__8053 = cljs.core.count.call(null,c__4004__auto___8050);
var G__8054 = 0;
seq__8035_8039 = G__8051;
chunk__8036_8040 = G__8052;
count__8037_8041 = G__8053;
i__8038_8042 = G__8054;
continue;
}
} else
{var n_8055 = cljs.core.first.call(null,seq__8035_8049__$1);n_8055.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8056 = cljs.core.next.call(null,seq__8035_8049__$1);
var G__8057 = null;
var G__8058 = 0;
var G__8059 = 0;
seq__8035_8039 = G__8056;
chunk__8036_8040 = G__8057;
count__8037_8041 = G__8058;
i__8038_8042 = G__8059;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__8060){
var content = cljs.core.first(arglist__8060);
arglist__8060 = cljs.core.next(arglist__8060);
var name = cljs.core.first(arglist__8060);
var value = cljs.core.rest(arglist__8060);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__8065_8069 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8066_8070 = null;var count__8067_8071 = 0;var i__8068_8072 = 0;while(true){
if((i__8068_8072 < count__8067_8071))
{var n_8073 = cljs.core._nth.call(null,chunk__8066_8070,i__8068_8072);n_8073.removeAttribute(cljs.core.name.call(null,name));
{
var G__8074 = seq__8065_8069;
var G__8075 = chunk__8066_8070;
var G__8076 = count__8067_8071;
var G__8077 = (i__8068_8072 + 1);
seq__8065_8069 = G__8074;
chunk__8066_8070 = G__8075;
count__8067_8071 = G__8076;
i__8068_8072 = G__8077;
continue;
}
} else
{var temp__4092__auto___8078 = cljs.core.seq.call(null,seq__8065_8069);if(temp__4092__auto___8078)
{var seq__8065_8079__$1 = temp__4092__auto___8078;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8065_8079__$1))
{var c__4004__auto___8080 = cljs.core.chunk_first.call(null,seq__8065_8079__$1);{
var G__8081 = cljs.core.chunk_rest.call(null,seq__8065_8079__$1);
var G__8082 = c__4004__auto___8080;
var G__8083 = cljs.core.count.call(null,c__4004__auto___8080);
var G__8084 = 0;
seq__8065_8069 = G__8081;
chunk__8066_8070 = G__8082;
count__8067_8071 = G__8083;
i__8068_8072 = G__8084;
continue;
}
} else
{var n_8085 = cljs.core.first.call(null,seq__8065_8079__$1);n_8085.removeAttribute(cljs.core.name.call(null,name));
{
var G__8086 = cljs.core.next.call(null,seq__8065_8079__$1);
var G__8087 = null;
var G__8088 = 0;
var G__8089 = 0;
seq__8065_8069 = G__8086;
chunk__8066_8070 = G__8087;
count__8067_8071 = G__8088;
i__8068_8072 = G__8089;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__8091 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__8091,0,null);var v = cljs.core.nth.call(null,vec__8091,1,null);if(cljs.core.truth_((function (){var and__3273__auto__ = k;if(cljs.core.truth_(and__3273__auto__))
{return v;
} else
{return and__3273__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__8092_SHARP_){var attr = attrs__$1.item(p1__8092_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__8099_8105 = cljs.core.seq.call(null,styles);var chunk__8100_8106 = null;var count__8101_8107 = 0;var i__8102_8108 = 0;while(true){
if((i__8102_8108 < count__8101_8107))
{var vec__8103_8109 = cljs.core._nth.call(null,chunk__8100_8106,i__8102_8108);var name_8110 = cljs.core.nth.call(null,vec__8103_8109,0,null);var value_8111 = cljs.core.nth.call(null,vec__8103_8109,1,null);domina.set_style_BANG_.call(null,content,name_8110,value_8111);
{
var G__8112 = seq__8099_8105;
var G__8113 = chunk__8100_8106;
var G__8114 = count__8101_8107;
var G__8115 = (i__8102_8108 + 1);
seq__8099_8105 = G__8112;
chunk__8100_8106 = G__8113;
count__8101_8107 = G__8114;
i__8102_8108 = G__8115;
continue;
}
} else
{var temp__4092__auto___8116 = cljs.core.seq.call(null,seq__8099_8105);if(temp__4092__auto___8116)
{var seq__8099_8117__$1 = temp__4092__auto___8116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8099_8117__$1))
{var c__4004__auto___8118 = cljs.core.chunk_first.call(null,seq__8099_8117__$1);{
var G__8119 = cljs.core.chunk_rest.call(null,seq__8099_8117__$1);
var G__8120 = c__4004__auto___8118;
var G__8121 = cljs.core.count.call(null,c__4004__auto___8118);
var G__8122 = 0;
seq__8099_8105 = G__8119;
chunk__8100_8106 = G__8120;
count__8101_8107 = G__8121;
i__8102_8108 = G__8122;
continue;
}
} else
{var vec__8104_8123 = cljs.core.first.call(null,seq__8099_8117__$1);var name_8124 = cljs.core.nth.call(null,vec__8104_8123,0,null);var value_8125 = cljs.core.nth.call(null,vec__8104_8123,1,null);domina.set_style_BANG_.call(null,content,name_8124,value_8125);
{
var G__8126 = cljs.core.next.call(null,seq__8099_8117__$1);
var G__8127 = null;
var G__8128 = 0;
var G__8129 = 0;
seq__8099_8105 = G__8126;
chunk__8100_8106 = G__8127;
count__8101_8107 = G__8128;
i__8102_8108 = G__8129;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__8136_8142 = cljs.core.seq.call(null,attrs);var chunk__8137_8143 = null;var count__8138_8144 = 0;var i__8139_8145 = 0;while(true){
if((i__8139_8145 < count__8138_8144))
{var vec__8140_8146 = cljs.core._nth.call(null,chunk__8137_8143,i__8139_8145);var name_8147 = cljs.core.nth.call(null,vec__8140_8146,0,null);var value_8148 = cljs.core.nth.call(null,vec__8140_8146,1,null);domina.set_attr_BANG_.call(null,content,name_8147,value_8148);
{
var G__8149 = seq__8136_8142;
var G__8150 = chunk__8137_8143;
var G__8151 = count__8138_8144;
var G__8152 = (i__8139_8145 + 1);
seq__8136_8142 = G__8149;
chunk__8137_8143 = G__8150;
count__8138_8144 = G__8151;
i__8139_8145 = G__8152;
continue;
}
} else
{var temp__4092__auto___8153 = cljs.core.seq.call(null,seq__8136_8142);if(temp__4092__auto___8153)
{var seq__8136_8154__$1 = temp__4092__auto___8153;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8136_8154__$1))
{var c__4004__auto___8155 = cljs.core.chunk_first.call(null,seq__8136_8154__$1);{
var G__8156 = cljs.core.chunk_rest.call(null,seq__8136_8154__$1);
var G__8157 = c__4004__auto___8155;
var G__8158 = cljs.core.count.call(null,c__4004__auto___8155);
var G__8159 = 0;
seq__8136_8142 = G__8156;
chunk__8137_8143 = G__8157;
count__8138_8144 = G__8158;
i__8139_8145 = G__8159;
continue;
}
} else
{var vec__8141_8160 = cljs.core.first.call(null,seq__8136_8154__$1);var name_8161 = cljs.core.nth.call(null,vec__8141_8160,0,null);var value_8162 = cljs.core.nth.call(null,vec__8141_8160,1,null);domina.set_attr_BANG_.call(null,content,name_8161,value_8162);
{
var G__8163 = cljs.core.next.call(null,seq__8136_8154__$1);
var G__8164 = null;
var G__8165 = 0;
var G__8166 = 0;
seq__8136_8142 = G__8163;
chunk__8137_8143 = G__8164;
count__8138_8144 = G__8165;
i__8139_8145 = G__8166;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__8171_8175 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8172_8176 = null;var count__8173_8177 = 0;var i__8174_8178 = 0;while(true){
if((i__8174_8178 < count__8173_8177))
{var node_8179 = cljs.core._nth.call(null,chunk__8172_8176,i__8174_8178);goog.dom.classes.add(node_8179,class$);
{
var G__8180 = seq__8171_8175;
var G__8181 = chunk__8172_8176;
var G__8182 = count__8173_8177;
var G__8183 = (i__8174_8178 + 1);
seq__8171_8175 = G__8180;
chunk__8172_8176 = G__8181;
count__8173_8177 = G__8182;
i__8174_8178 = G__8183;
continue;
}
} else
{var temp__4092__auto___8184 = cljs.core.seq.call(null,seq__8171_8175);if(temp__4092__auto___8184)
{var seq__8171_8185__$1 = temp__4092__auto___8184;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8171_8185__$1))
{var c__4004__auto___8186 = cljs.core.chunk_first.call(null,seq__8171_8185__$1);{
var G__8187 = cljs.core.chunk_rest.call(null,seq__8171_8185__$1);
var G__8188 = c__4004__auto___8186;
var G__8189 = cljs.core.count.call(null,c__4004__auto___8186);
var G__8190 = 0;
seq__8171_8175 = G__8187;
chunk__8172_8176 = G__8188;
count__8173_8177 = G__8189;
i__8174_8178 = G__8190;
continue;
}
} else
{var node_8191 = cljs.core.first.call(null,seq__8171_8185__$1);goog.dom.classes.add(node_8191,class$);
{
var G__8192 = cljs.core.next.call(null,seq__8171_8185__$1);
var G__8193 = null;
var G__8194 = 0;
var G__8195 = 0;
seq__8171_8175 = G__8192;
chunk__8172_8176 = G__8193;
count__8173_8177 = G__8194;
i__8174_8178 = G__8195;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__8200_8204 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8201_8205 = null;var count__8202_8206 = 0;var i__8203_8207 = 0;while(true){
if((i__8203_8207 < count__8202_8206))
{var node_8208 = cljs.core._nth.call(null,chunk__8201_8205,i__8203_8207);goog.dom.classes.remove(node_8208,class$);
{
var G__8209 = seq__8200_8204;
var G__8210 = chunk__8201_8205;
var G__8211 = count__8202_8206;
var G__8212 = (i__8203_8207 + 1);
seq__8200_8204 = G__8209;
chunk__8201_8205 = G__8210;
count__8202_8206 = G__8211;
i__8203_8207 = G__8212;
continue;
}
} else
{var temp__4092__auto___8213 = cljs.core.seq.call(null,seq__8200_8204);if(temp__4092__auto___8213)
{var seq__8200_8214__$1 = temp__4092__auto___8213;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8200_8214__$1))
{var c__4004__auto___8215 = cljs.core.chunk_first.call(null,seq__8200_8214__$1);{
var G__8216 = cljs.core.chunk_rest.call(null,seq__8200_8214__$1);
var G__8217 = c__4004__auto___8215;
var G__8218 = cljs.core.count.call(null,c__4004__auto___8215);
var G__8219 = 0;
seq__8200_8204 = G__8216;
chunk__8201_8205 = G__8217;
count__8202_8206 = G__8218;
i__8203_8207 = G__8219;
continue;
}
} else
{var node_8220 = cljs.core.first.call(null,seq__8200_8214__$1);goog.dom.classes.remove(node_8220,class$);
{
var G__8221 = cljs.core.next.call(null,seq__8200_8214__$1);
var G__8222 = null;
var G__8223 = 0;
var G__8224 = 0;
seq__8200_8204 = G__8221;
chunk__8201_8205 = G__8222;
count__8202_8206 = G__8223;
i__8203_8207 = G__8224;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__8229_8233 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8230_8234 = null;var count__8231_8235 = 0;var i__8232_8236 = 0;while(true){
if((i__8232_8236 < count__8231_8235))
{var node_8237 = cljs.core._nth.call(null,chunk__8230_8234,i__8232_8236);goog.dom.classes.toggle(node_8237,class$);
{
var G__8238 = seq__8229_8233;
var G__8239 = chunk__8230_8234;
var G__8240 = count__8231_8235;
var G__8241 = (i__8232_8236 + 1);
seq__8229_8233 = G__8238;
chunk__8230_8234 = G__8239;
count__8231_8235 = G__8240;
i__8232_8236 = G__8241;
continue;
}
} else
{var temp__4092__auto___8242 = cljs.core.seq.call(null,seq__8229_8233);if(temp__4092__auto___8242)
{var seq__8229_8243__$1 = temp__4092__auto___8242;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8229_8243__$1))
{var c__4004__auto___8244 = cljs.core.chunk_first.call(null,seq__8229_8243__$1);{
var G__8245 = cljs.core.chunk_rest.call(null,seq__8229_8243__$1);
var G__8246 = c__4004__auto___8244;
var G__8247 = cljs.core.count.call(null,c__4004__auto___8244);
var G__8248 = 0;
seq__8229_8233 = G__8245;
chunk__8230_8234 = G__8246;
count__8231_8235 = G__8247;
i__8232_8236 = G__8248;
continue;
}
} else
{var node_8249 = cljs.core.first.call(null,seq__8229_8243__$1);goog.dom.classes.toggle(node_8249,class$);
{
var G__8250 = cljs.core.next.call(null,seq__8229_8243__$1);
var G__8251 = null;
var G__8252 = 0;
var G__8253 = 0;
seq__8229_8233 = G__8250;
chunk__8230_8234 = G__8251;
count__8231_8235 = G__8252;
i__8232_8236 = G__8253;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_8262__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__8258_8263 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8259_8264 = null;var count__8260_8265 = 0;var i__8261_8266 = 0;while(true){
if((i__8261_8266 < count__8260_8265))
{var node_8267 = cljs.core._nth.call(null,chunk__8259_8264,i__8261_8266);goog.dom.classes.set(node_8267,classes_8262__$1);
{
var G__8268 = seq__8258_8263;
var G__8269 = chunk__8259_8264;
var G__8270 = count__8260_8265;
var G__8271 = (i__8261_8266 + 1);
seq__8258_8263 = G__8268;
chunk__8259_8264 = G__8269;
count__8260_8265 = G__8270;
i__8261_8266 = G__8271;
continue;
}
} else
{var temp__4092__auto___8272 = cljs.core.seq.call(null,seq__8258_8263);if(temp__4092__auto___8272)
{var seq__8258_8273__$1 = temp__4092__auto___8272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8258_8273__$1))
{var c__4004__auto___8274 = cljs.core.chunk_first.call(null,seq__8258_8273__$1);{
var G__8275 = cljs.core.chunk_rest.call(null,seq__8258_8273__$1);
var G__8276 = c__4004__auto___8274;
var G__8277 = cljs.core.count.call(null,c__4004__auto___8274);
var G__8278 = 0;
seq__8258_8263 = G__8275;
chunk__8259_8264 = G__8276;
count__8260_8265 = G__8277;
i__8261_8266 = G__8278;
continue;
}
} else
{var node_8279 = cljs.core.first.call(null,seq__8258_8273__$1);goog.dom.classes.set(node_8279,classes_8262__$1);
{
var G__8280 = cljs.core.next.call(null,seq__8258_8273__$1);
var G__8281 = null;
var G__8282 = 0;
var G__8283 = 0;
seq__8258_8263 = G__8280;
chunk__8259_8264 = G__8281;
count__8260_8265 = G__8282;
i__8261_8266 = G__8283;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__8288_8292 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8289_8293 = null;var count__8290_8294 = 0;var i__8291_8295 = 0;while(true){
if((i__8291_8295 < count__8290_8294))
{var node_8296 = cljs.core._nth.call(null,chunk__8289_8293,i__8291_8295);goog.dom.setTextContent(node_8296,value);
{
var G__8297 = seq__8288_8292;
var G__8298 = chunk__8289_8293;
var G__8299 = count__8290_8294;
var G__8300 = (i__8291_8295 + 1);
seq__8288_8292 = G__8297;
chunk__8289_8293 = G__8298;
count__8290_8294 = G__8299;
i__8291_8295 = G__8300;
continue;
}
} else
{var temp__4092__auto___8301 = cljs.core.seq.call(null,seq__8288_8292);if(temp__4092__auto___8301)
{var seq__8288_8302__$1 = temp__4092__auto___8301;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8288_8302__$1))
{var c__4004__auto___8303 = cljs.core.chunk_first.call(null,seq__8288_8302__$1);{
var G__8304 = cljs.core.chunk_rest.call(null,seq__8288_8302__$1);
var G__8305 = c__4004__auto___8303;
var G__8306 = cljs.core.count.call(null,c__4004__auto___8303);
var G__8307 = 0;
seq__8288_8292 = G__8304;
chunk__8289_8293 = G__8305;
count__8290_8294 = G__8306;
i__8291_8295 = G__8307;
continue;
}
} else
{var node_8308 = cljs.core.first.call(null,seq__8288_8302__$1);goog.dom.setTextContent(node_8308,value);
{
var G__8309 = cljs.core.next.call(null,seq__8288_8302__$1);
var G__8310 = null;
var G__8311 = 0;
var G__8312 = 0;
seq__8288_8292 = G__8309;
chunk__8289_8293 = G__8310;
count__8290_8294 = G__8311;
i__8291_8295 = G__8312;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__8317_8321 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8318_8322 = null;var count__8319_8323 = 0;var i__8320_8324 = 0;while(true){
if((i__8320_8324 < count__8319_8323))
{var node_8325 = cljs.core._nth.call(null,chunk__8318_8322,i__8320_8324);goog.dom.forms.setValue(node_8325,value);
{
var G__8326 = seq__8317_8321;
var G__8327 = chunk__8318_8322;
var G__8328 = count__8319_8323;
var G__8329 = (i__8320_8324 + 1);
seq__8317_8321 = G__8326;
chunk__8318_8322 = G__8327;
count__8319_8323 = G__8328;
i__8320_8324 = G__8329;
continue;
}
} else
{var temp__4092__auto___8330 = cljs.core.seq.call(null,seq__8317_8321);if(temp__4092__auto___8330)
{var seq__8317_8331__$1 = temp__4092__auto___8330;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8317_8331__$1))
{var c__4004__auto___8332 = cljs.core.chunk_first.call(null,seq__8317_8331__$1);{
var G__8333 = cljs.core.chunk_rest.call(null,seq__8317_8331__$1);
var G__8334 = c__4004__auto___8332;
var G__8335 = cljs.core.count.call(null,c__4004__auto___8332);
var G__8336 = 0;
seq__8317_8321 = G__8333;
chunk__8318_8322 = G__8334;
count__8319_8323 = G__8335;
i__8320_8324 = G__8336;
continue;
}
} else
{var node_8337 = cljs.core.first.call(null,seq__8317_8331__$1);goog.dom.forms.setValue(node_8337,value);
{
var G__8338 = cljs.core.next.call(null,seq__8317_8331__$1);
var G__8339 = null;
var G__8340 = 0;
var G__8341 = 0;
seq__8317_8321 = G__8338;
chunk__8318_8322 = G__8339;
count__8319_8323 = G__8340;
i__8320_8324 = G__8341;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3273__auto__ = allows_inner_html_QMARK_;if(and__3273__auto__)
{var and__3273__auto____$1 = (function (){var or__3285__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3273__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3273__auto____$1;
}
} else
{return and__3273__auto__;
}
})()))
{var value_8352 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__8348_8353 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8349_8354 = null;var count__8350_8355 = 0;var i__8351_8356 = 0;while(true){
if((i__8351_8356 < count__8350_8355))
{var node_8357 = cljs.core._nth.call(null,chunk__8349_8354,i__8351_8356);node_8357.innerHTML = value_8352;
{
var G__8358 = seq__8348_8353;
var G__8359 = chunk__8349_8354;
var G__8360 = count__8350_8355;
var G__8361 = (i__8351_8356 + 1);
seq__8348_8353 = G__8358;
chunk__8349_8354 = G__8359;
count__8350_8355 = G__8360;
i__8351_8356 = G__8361;
continue;
}
} else
{var temp__4092__auto___8362 = cljs.core.seq.call(null,seq__8348_8353);if(temp__4092__auto___8362)
{var seq__8348_8363__$1 = temp__4092__auto___8362;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8348_8363__$1))
{var c__4004__auto___8364 = cljs.core.chunk_first.call(null,seq__8348_8363__$1);{
var G__8365 = cljs.core.chunk_rest.call(null,seq__8348_8363__$1);
var G__8366 = c__4004__auto___8364;
var G__8367 = cljs.core.count.call(null,c__4004__auto___8364);
var G__8368 = 0;
seq__8348_8353 = G__8365;
chunk__8349_8354 = G__8366;
count__8350_8355 = G__8367;
i__8351_8356 = G__8368;
continue;
}
} else
{var node_8369 = cljs.core.first.call(null,seq__8348_8363__$1);node_8369.innerHTML = value_8352;
{
var G__8370 = cljs.core.next.call(null,seq__8348_8363__$1);
var G__8371 = null;
var G__8372 = 0;
var G__8373 = 0;
seq__8348_8353 = G__8370;
chunk__8349_8354 = G__8371;
count__8350_8355 = G__8372;
i__8351_8356 = G__8373;
continue;
}
}
} else
{}
}
break;
}
}catch (e8347){if((e8347 instanceof Error))
{var e_8374 = e8347;domina.replace_children_BANG_.call(null,content,value_8352);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8347;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3273__auto__ = bubble;if(cljs.core.truth_(and__3273__auto__))
{return (value == null);
} else
{return and__3273__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3285__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__8381_8385 = cljs.core.seq.call(null,children);var chunk__8382_8386 = null;var count__8383_8387 = 0;var i__8384_8388 = 0;while(true){
if((i__8384_8388 < count__8383_8387))
{var child_8389 = cljs.core._nth.call(null,chunk__8382_8386,i__8384_8388);frag.appendChild(child_8389);
{
var G__8390 = seq__8381_8385;
var G__8391 = chunk__8382_8386;
var G__8392 = count__8383_8387;
var G__8393 = (i__8384_8388 + 1);
seq__8381_8385 = G__8390;
chunk__8382_8386 = G__8391;
count__8383_8387 = G__8392;
i__8384_8388 = G__8393;
continue;
}
} else
{var temp__4092__auto___8394 = cljs.core.seq.call(null,seq__8381_8385);if(temp__4092__auto___8394)
{var seq__8381_8395__$1 = temp__4092__auto___8394;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8381_8395__$1))
{var c__4004__auto___8396 = cljs.core.chunk_first.call(null,seq__8381_8395__$1);{
var G__8397 = cljs.core.chunk_rest.call(null,seq__8381_8395__$1);
var G__8398 = c__4004__auto___8396;
var G__8399 = cljs.core.count.call(null,c__4004__auto___8396);
var G__8400 = 0;
seq__8381_8385 = G__8397;
chunk__8382_8386 = G__8398;
count__8383_8387 = G__8399;
i__8384_8388 = G__8400;
continue;
}
} else
{var child_8401 = cljs.core.first.call(null,seq__8381_8395__$1);frag.appendChild(child_8401);
{
var G__8402 = cljs.core.next.call(null,seq__8381_8395__$1);
var G__8403 = null;
var G__8404 = 0;
var G__8405 = 0;
seq__8381_8385 = G__8402;
chunk__8382_8386 = G__8403;
count__8383_8387 = G__8404;
i__8384_8388 = G__8405;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__8375_SHARP_,p2__8376_SHARP_){return f.call(null,p1__8375_SHARP_,p2__8376_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3273__auto__ = obj;if(cljs.core.truth_(and__3273__auto__))
{var and__3273__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3273__auto____$1)
{return obj.length;
} else
{return and__3273__auto____$1;
}
} else
{return and__3273__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__8407 = list_thing;if(G__8407)
{var bit__3906__auto__ = (G__8407.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3906__auto__) || (G__8407.cljs$core$ISeqable$))
{return true;
} else
{if((!G__8407.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8407);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8407);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__8408 = content;if(G__8408)
{var bit__3906__auto__ = (G__8408.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3906__auto__) || (G__8408.cljs$core$ISeqable$))
{return true;
} else
{if((!G__8408.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8408);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8408);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__8409 = content;if(G__8409)
{var bit__3906__auto__ = (G__8409.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3906__auto__) || (G__8409.cljs$core$ISeqable$))
{return true;
} else
{if((!G__8409.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8409);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8409);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map