﻿function b64DecodeUnicode(e) { return decodeURIComponent(atob(e).split("").map(function (e) { return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2) }).join("")) } function b64EncodeUnicode(e) { return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) { return String.fromCharCode("0x" + t) })) } !function (e, t) { "function" == typeof define && define.amd ? define([], function () { return t(e) }) : "object" == typeof exports ? module.exports = t(e) : e.MappingListener = t(e) }("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function (e) { "use strict"; var t; t = { breakpoint: 992 }; var n = function () { var e = {}, t = !1, o = 0; "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], o++); for (var i = function (o) { for (var i in o) o.hasOwnProperty(i) && (t && "[object Object]" === Object.prototype.toString.call(o[i]) ? e[i] = n(e[i], o[i]) : e[i] = o[i]) }; o < arguments.length; o++)i(arguments[o]); return e }; return function (o) { var i, r = { switch: function () { e.matchMedia(`(min-width: ${i.breakpoint}px)`).matches ? Mapping.mapElements.from(i.selector).to(i.desktopWrapper).use(i.desktopMethod) : Mapping.mapElements.from(i.selector).to(i.mobileWrapper).use(i.mobileMethod) }, watch: function () { this.switch(), e.matchMedia(`(min-width: ${i.breakpoint}px)`).addListener(r.switch) }, init: function (e) { i = function (e) { switch (e.breakpoint) { case "sm": e.breakpoint = 576; break; case "md": e.breakpoint = 768; break; case "lg": e.breakpoint = 992; break; case "xl": e.breakpoint = 1200 }return e }(i = n(t, e || {})) } }; return r.init(o), r } }), document.onkeyup = function (e) { if ((e = e || window.event).altKey && e.ctrlKey && e.shiftKey && 13 == e.which) return $("body"), alert(b64DecodeUnicode("VGhp4bq/dCBr4bq/IHbDoCBs4bqtcCB0csOsbmggYuG7n2kgQ1R5IFROSEggVMawIFbhuqVuIFRoaeG6v3QgS+G6vyBQaOG6p24gTeG7gW0gQ8OhbmggQ2FtLiBU4bqldCBj4bqjIHF1eeG7gW4gxJHGsOG7o2MgYuG6o28gaOG7mS4KRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBDYW5oIENhbSBDb21wYW55LiBBbGwgcmlnaHQgcmVzZXJ2ZWQKaHR0cHM6Ly93d3cuY2FuaGNhbS52bi8=")), !1 };