webpackJsonp([2],{0:function(n,l,u){n.exports=u("cDNt")},cDNt:function(n,l,u){"use strict";function e(n){return q._46(0,[(n()(),q._22(0,null,null,4,"li",[],null,null,null,null,null)),q._20(278528,null,0,B.i,[q.C,q.D,q.r,q.R],{ngClass:[0,"ngClass"]},null),q._40(1),(n()(),q._44(null,["\n            ","\n        "])),q._40(1)],function(n,l){n(l,1,0,q._45(l,1,0,n(l,2,0,q._36(l.parent,1),l.context.$implicit)))},function(n,l){n(l,3,0,q._45(l,3,0,n(l,4,0,q._36(l.parent,2),l.context.$implicit)))})}function t(n){return q._46(0,[(n()(),q._22(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),q._44(null,["Add to my team"]))],null,null)}function o(n){return q._46(0,[(n()(),q._22(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),q._44(null,["Team is full"]))],null,null)}function r(n){return q._46(0,[(n()(),q._22(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),q._44(null,["Added to my team"]))],null,null)}function i(n){return q._46(0,[(n()(),q._22(0,null,null,10,"button",[["class","add-to-team"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,u){var e=!0,t=n.component;if("click"===l){e=!1!==t.addToTeam(t.pokemon)&&e}return e},null,null)),(n()(),q._44(null,["\n        "])),(n()(),q._16(16777216,null,null,1,null,t)),q._20(16384,null,0,B.k,[q._4,q._1],{ngIf:[0,"ngIf"]},null),(n()(),q._44(null,["\n        "])),(n()(),q._16(16777216,null,null,1,null,o)),q._20(16384,null,0,B.k,[q._4,q._1],{ngIf:[0,"ngIf"]},null),(n()(),q._44(null,["\n        "])),(n()(),q._16(16777216,null,null,1,null,r)),q._20(16384,null,0,B.k,[q._4,q._1],{ngIf:[0,"ngIf"]},null),(n()(),q._44(null,["\n    "]))],function(n,l){var u=l.component;n(l,3,0,!u.isPartOfTeam(u.pokemon)&&u.poketeam.length<6),n(l,6,0,!u.isPartOfTeam(u.pokemon)&&u.poketeam.length>5),n(l,9,0,u.isPartOfTeam(u.pokemon))},function(n,l){var u=l.component;n(l,0,0,u.poketeam.length>5||u.isPartOfTeam(u.pokemon))})}function a(n){return q._46(0,[(n()(),q._22(0,null,null,1,"button",[["class","remove-from-team"],["type","button"]],null,[[null,"click"]],function(n,l,u){var e=!0,t=n.component;if("click"===l){e=!1!==t.removeFromTeam(t.pokemon)&&e}return e},null,null)),(n()(),q._44(null,["Remove from my team"]))],null,null)}function c(n){return q._46(0,[(n()(),q._22(0,null,null,2,"li",[],null,null,null,null,null)),(n()(),q._44(null,["\n                        ","\n                    "])),q._40(1)],null,function(n,l){n(l,1,0,q._45(l,1,0,n(l,2,0,q._36(l.parent.parent,3),l.context.$implicit)))})}function _(n){return q._46(0,[(n()(),q._44(null,["\n    "])),(n()(),q._22(0,null,null,1,"div",[["class","modal-header"]],null,null,null,null,null)),(n()(),q._44(null,["\n        ","\n    "])),(n()(),q._44(null,["\n    "])),(n()(),q._22(0,null,null,40,"div",[["class","modal-body"]],null,null,null,null,null)),(n()(),q._44(null,["\n        "])),(n()(),q._22(0,null,null,37,"ul",[["class","properties"]],null,null,null,null,null)),(n()(),q._44(null,["\n            "])),(n()(),q._22(0,null,null,4,"li",[],null,null,null,null,null)),(n()(),q._44(null,["\n                "])),(n()(),q._22(0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),q._44(null,["Name:"])),(n()(),q._44(null,["\n                ","\n            "])),(n()(),q._44(null,["\n            "])),(n()(),q._22(0,null,null,4,"li",[],null,null,null,null,null)),(n()(),q._44(null,["\n                "])),(n()(),q._22(0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),q._44(null,["Combat Power:"])),(n()(),q._44(null,["\n                ","\n            "])),(n()(),q._44(null,["\n            "])),(n()(),q._22(0,null,null,4,"li",[],null,null,null,null,null)),(n()(),q._44(null,["\n                "])),(n()(),q._22(0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),q._44(null,["Height:"])),(n()(),q._44(null,["\n                ","\n            "])),(n()(),q._44(null,["\n            "])),(n()(),q._22(0,null,null,4,"li",[],null,null,null,null,null)),(n()(),q._44(null,["\n                "])),(n()(),q._22(0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),q._44(null,["Weight:"])),(n()(),q._44(null,["\n                ","\n            "])),(n()(),q._44(null,["\n            "])),(n()(),q._22(0,null,null,10,"li",[],null,null,null,null,null)),(n()(),q._44(null,["\n                "])),(n()(),q._22(0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),q._44(null,["Types:"])),(n()(),q._44(null,["\n                "])),(n()(),q._22(0,null,null,4,"ul",[],null,null,null,null,null)),(n()(),q._44(null,["\n                    "])),(n()(),q._16(16777216,null,null,1,null,c)),q._20(802816,null,0,B.j,[q._4,q._1,q.C],{ngForOf:[0,"ngForOf"]},null),(n()(),q._44(null,["\n                "])),(n()(),q._44(null,["\n            "])),(n()(),q._44(null,["\n        "])),(n()(),q._44(null,["\n    "])),(n()(),q._44(null,["\n    "])),(n()(),q._22(0,null,null,4,"div",[["class","modal-footer"]],null,null,null,null,null)),(n()(),q._44(null,["\n        "])),(n()(),q._22(0,null,null,1,"button",[["class","btn"],["type","button"]],null,[[null,"click"]],function(n,l,u){var e=!0;if("click"===l){e=!1!==n.context.close("Close click")&&e}return e},null,null)),(n()(),q._44(null,["Close"])),(n()(),q._44(null,["\n    "])),(n()(),q._44(null,["\n"]))],function(n,l){n(l,40,0,l.component.pokemon.types)},function(n,l){var u=l.component;n(l,2,0,u.pokemon.name),n(l,12,0,u.pokemon.name),n(l,18,0,u.pokemon.base_experience),n(l,24,0,u.pokemon.height),n(l,30,0,u.pokemon.weight)})}function s(n){return q._46(0,[q._38(0,j,[]),q._38(0,B.h,[]),q._38(0,B.r,[]),q._38(0,N,[]),q._42(402653184,1,{content:0}),(n()(),q._22(0,null,null,28,"div",[["class","pokemon"]],null,null,null,null,null)),q._20(278528,null,0,B.i,[q.C,q.D,q.r,q.R],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),q._40(1),q._38(0,B.q,[]),(n()(),q._44(null,["\n    "])),(n()(),q._22(0,null,null,3,"h2",[],null,null,null,null,null)),(n()(),q._22(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),q._44(null,["",""])),(n()(),q._44(null,["",""])),(n()(),q._44(null,["\n    "])),(n()(),q._22(0,null,null,5,"div",[["class","pokemon-image"]],null,null,null,null,null)),(n()(),q._44(null,["\n        "])),(n()(),q._22(0,null,null,0,"a",[],null,[[null,"click"]],function(n,l,u){var e=!0,t=n.component;if("click"===l){e=!1!==t.open(q._36(n,35))&&e}return e},null,null)),(n()(),q._44(null,["\n        "])),(n()(),q._22(0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),q._44(null,["\n    "])),(n()(),q._44(null,["\n    "])),(n()(),q._22(0,null,null,4,"ul",[["class","types"]],null,null,null,null,null)),(n()(),q._44(null,["\n        "])),(n()(),q._16(16777216,null,null,1,null,e)),q._20(802816,null,0,B.j,[q._4,q._1,q.C],{ngForOf:[0,"ngForOf"]},null),(n()(),q._44(null,["\n    "])),(n()(),q._44(null,["\n    "])),(n()(),q._16(16777216,null,null,1,null,i)),q._20(16384,null,0,B.k,[q._4,q._1],{ngIf:[0,"ngIf"]},null),(n()(),q._44(null,["\n    "])),(n()(),q._16(16777216,null,null,1,null,a)),q._20(16384,null,0,B.k,[q._4,q._1],{ngIf:[0,"ngIf"]},null),(n()(),q._44(null,["\n"])),(n()(),q._44(null,["\n\n"])),(n()(),q._16(0,[[1,2],["content",2]],null,0,null,_))],function(n,l){var u=l.component;n(l,6,0,"pokemon",q._45(l,6,1,q._36(l,8).transform(q._45(l,6,1,n(l,7,0,q._36(l,0),u.pokemon.types)),0,1))),n(l,25,0,u.pokemon.types),n(l,29,0,u.isPokedex),n(l,32,0,u.isPoketeam)},function(n,l){var u=l.component;n(l,12,0,u.pokemon.order),n(l,13,0,u.pokemon.name),n(l,19,0,q._25(2,"assets/data/img/",u.pokemon.order,"",u.pokemon.name_raw,".png"),q._25(1,"",u.pokemon.name,""))})}function p(n){return q._46(0,[(n()(),q._22(0,null,null,1,"app-pokemon",[],null,null,null,s,V)),q._20(114688,null,0,W,[$.a,K],null,null)],function(n,l){n(l,1,0)},null)}function g(n){return Z._46(0,[(n()(),Z._22(0,null,null,1,"app-pokemon",[["class","col-2 col-sm-12 col-md-3"]],null,[[null,"pokemonToAdd"]],function(n,l,u){var e=!0,t=n.component;if("pokemonToAdd"===l){e=!1!==t.addPokemonToTeam(u)&&e}return e},s,V)),Z._20(114688,null,0,W,[Q.a,K],{pokemon:[0,"pokemon"],isPokedex:[1,"isPokedex"]},{pokemonToAdd:"pokemonToAdd"})],function(n,l){var u=l.component;n(l,1,0,l.context.$implicit,u.isPokedex)},null)}function m(n){return Z._46(0,[(n()(),Z._22(0,null,null,4,"div",[["class","pokedex--container row align-items-center justify-content-center"]],null,null,null,null,null)),(n()(),Z._44(null,["\n        "])),(n()(),Z._16(16777216,null,null,1,null,g)),Z._20(802816,null,0,G.j,[Z._4,Z._1,Z.C],{ngForOf:[0,"ngForOf"]},null),(n()(),Z._44(null,["\n    "]))],function(n,l){n(l,3,0,l.component.pokedex)},null)}function d(n){return Z._46(0,[(n()(),Z._22(0,null,null,8,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),Z._44(null,["\n    "])),(n()(),Z._22(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),Z._44(null,["\n        Pok\xe9dex\n    "])),(n()(),Z._44(null,["\n    "])),(n()(),Z._44(null,["\n     "])),(n()(),Z._16(16777216,null,null,1,null,m)),Z._20(16384,null,0,G.k,[Z._4,Z._1],{ngIf:[0,"ngIf"]},null),(n()(),Z._44(null,["\n"]))],function(n,l){n(l,7,0,l.component.pokedex)},null)}function f(n){return Z._46(0,[(n()(),Z._22(0,null,null,1,"app-pokedex",[],null,null,null,d,ln)),Z._20(114688,null,0,X,[Y,K],null,null)],function(n,l){n(l,1,0)},null)}function k(n){return on._46(0,[(n()(),on._22(0,null,null,2,"app-pokemon",[["class","col col-3"],["dnd-sortable",""]],null,[[null,"pokemonToAdd"]],function(n,l,u){var e=!0,t=n.component;if("pokemonToAdd"===l){e=!1!==t.removePokemonFromTeam(u)&&e}return e},s,V)),on._20(16384,null,0,rn.a,[on.r,an.a,cn.a,rn.b,an.b,on.j],{index:[0,"index"],draggable:[1,"draggable"],dragData:[2,"dragData"]},null),on._20(114688,null,0,W,[_n.a,K],{pokemon:[0,"pokemon"],isPoketeam:[1,"isPoketeam"]},{pokemonToAdd:"pokemonToAdd"})],function(n,l){var u=l.component;n(l,1,0,l.context.index,!u.dragOperation,l.context.$implicit),n(l,2,0,l.context.$implicit,u.isPoketeam)},null)}function b(n){return on._46(0,[(n()(),on._22(0,null,null,5,"div",[["class","poketeam--container row"],["dnd-sortable-container",""]],null,null,null,null,null)),on._20(16384,null,0,rn.b,[on.r,an.a,cn.a,on.j,an.b],{sortableData:[0,"sortableData"]},null),(n()(),on._44(null,["\n        "])),(n()(),on._16(16777216,null,null,1,null,k)),on._20(802816,null,0,sn.j,[on._4,on._1,on.C],{ngForOf:[0,"ngForOf"]},null),(n()(),on._44(null,["\n    "]))],function(n,l){var u=l.component;n(l,1,0,u.poketeam),n(l,4,0,u.poketeam)},null)}function h(n){return on._46(0,[(n()(),on._22(0,null,null,7,"div",[["class","poketeam--container container row"]],null,null,null,null,null)),(n()(),on._44(null,["\n        "])),(n()(),on._22(0,null,null,4,"p",[],null,null,null,null,null)),(n()(),on._44(null,["\n            You haven't added any Pok\xe9mon to your team yet! Add some by going back to the "])),(n()(),on._22(0,null,null,1,"a",[["href","/"]],null,null,null,null,null)),(n()(),on._44(null,["Pok\xe9dex"])),(n()(),on._44(null,[' and click "Add to my team".\n        '])),(n()(),on._44(null,["\n    "]))],null,null)}function P(n){return on._46(0,[(n()(),on._22(0,null,null,12,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),on._44(null,["\n    "])),(n()(),on._22(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),on._44(null,["\n        Pok\xe9team\n    "])),(n()(),on._44(null,["\n    "])),(n()(),on._44(null,["\n     "])),(n()(),on._16(16777216,null,null,1,null,b)),on._20(16384,null,0,sn.k,[on._4,on._1],{ngIf:[0,"ngIf"]},null),(n()(),on._44(null,["\n    "])),(n()(),on._16(16777216,null,null,1,null,h)),on._20(16384,null,0,sn.k,[on._4,on._1],{ngIf:[0,"ngIf"]},null),(n()(),on._44(null,["\n    "])),(n()(),on._44(null,["\n"]))],function(n,l){var u=l.component;n(l,7,0,u.poketeam),n(l,10,0,0==u.poketeam.length)},null)}function v(n){return on._46(0,[(n()(),on._22(0,null,null,1,"app-poketeam",[],null,null,null,P,gn)),on._20(2211840,null,0,tn,[K],null,null)],function(n,l){n(l,1,0)},null)}function y(n){return vn._46(0,[(n()(),vn._22(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),vn._44(null,["\n    Suggestie toevoegen\n"])),(n()(),vn._44(null,["\n"])),(n()(),vn._22(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),vn._44(null,["\n    Heb je een idee voor een nieuwe feature? Laat het ons weten!\n"])),(n()(),vn._44(null,["\n"])),(n()(),vn._22(0,null,null,27,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,u){var e=!0,t=n.component;if("submit"===l){e=!1!==vn._36(n,8).onSubmit(u)&&e}if("reset"===l){e=!1!==vn._36(n,8).onReset()&&e}if("ngSubmit"===l){e=!1!==t.onSubmit(vn._36(n,8))&&e}return e},null,null)),vn._20(16384,null,0,yn.i,[],null,null),vn._20(16384,[["suggestieForm",4]],0,yn.f,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),vn._41(2048,null,yn.a,null,[yn.f]),vn._20(16384,null,0,yn.e,[yn.a],null,null),(n()(),vn._44(null,["\n    "])),(n()(),vn._22(0,null,null,6,"div",[],null,null,null,null,null)),(n()(),vn._44(null,["\n        "])),(n()(),vn._22(0,null,null,1,"label",[["for","nameField"]],null,null,null,null,null)),(n()(),vn._44(null,["Naam"])),(n()(),vn._44(null,["\n        "])),(n()(),vn._22(0,null,null,0,"input",[["id","nameField"],["name","nameField"],["required",""],["type","text"]],null,null,null,null,null)),(n()(),vn._44(null,["\n    "])),(n()(),vn._44(null,["\n    "])),(n()(),vn._22(0,null,null,6,"div",[],null,null,null,null,null)),(n()(),vn._44(null,["\n        "])),(n()(),vn._22(0,null,null,1,"label",[["for","suggestionField"]],null,null,null,null,null)),(n()(),vn._44(null,["Suggestie"])),(n()(),vn._44(null,["\n        "])),(n()(),vn._22(0,null,null,0,"textarea",[["id","suggestionField"],["name","suggestionField"],["required",""]],null,null,null,null,null)),(n()(),vn._44(null,["\n    "])),(n()(),vn._44(null,["\n    "])),(n()(),vn._22(0,null,null,4,"div",[],null,null,null,null,null)),(n()(),vn._44(null,["\n        "])),(n()(),vn._22(0,null,null,1,"button",[["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),vn._44(null,["Suggestie toevoegen"])),(n()(),vn._44(null,["\n    "])),(n()(),vn._44(null,["\n"]))],null,function(n,l){n(l,6,0,vn._36(l,10).ngClassUntouched,vn._36(l,10).ngClassTouched,vn._36(l,10).ngClassPristine,vn._36(l,10).ngClassDirty,vn._36(l,10).ngClassValid,vn._36(l,10).ngClassInvalid,vn._36(l,10).ngClassPending),n(l,30,0,!vn._36(l,8).form.valid)})}function C(n){return vn._46(0,[(n()(),vn._22(0,null,null,1,"app-suggestieform",[],null,null,null,y,On)),vn._20(114688,null,0,Pn,[],null,null)],function(n,l){n(l,1,0)},null)}function O(n){return xn._46(0,[(n()(),xn._22(0,null,null,7,"div",[["class","suggestie"]],null,null,null,null,null)),(n()(),xn._44(null,["\n        "])),(n()(),xn._22(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),xn._44(null,["",""])),(n()(),xn._44(null,["\n        "])),(n()(),xn._22(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),xn._44(null,["",""])),(n()(),xn._44(null,["\n    "]))],null,function(n,l){n(l,3,0,l.context.$implicit.name),n(l,6,0,l.context.$implicit.suggestion)})}function x(n){return xn._46(0,[(n()(),xn._22(0,null,null,10,"div",[["class","container-fluid container"]],null,null,null,null,null)),(n()(),xn._44(null,["\n    "])),(n()(),xn._22(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),xn._44(null,["Feature Requests"])),(n()(),xn._44(null,["\n    "])),(n()(),xn._16(16777216,null,null,1,null,O)),xn._20(802816,null,0,Mn.j,[xn._4,xn._1,xn.C],{ngForOf:[0,"ngForOf"]},null),(n()(),xn._44(null,["\n    "])),(n()(),xn._22(0,null,null,1,"app-suggestieform",[],null,[[null,"submitted"]],function(n,l,u){var e=!0,t=n.component;if("submitted"===l){e=!1!==t.addSuggestie(u)&&e}return e},y,On)),xn._20(114688,null,0,Pn,[],null,{submitted:"submitted"}),(n()(),xn._44(null,["\n"]))],function(n,l){n(l,6,0,l.component.suggesties),n(l,9,0)},null)}function M(n){return xn._46(0,[(n()(),xn._22(0,null,null,1,"app-suggesties",[],null,null,null,x,Tn)),xn._20(114688,null,0,kn,[fn],null,null)],function(n,l){n(l,1,0)},null)}function S(n){return In._46(0,[(n()(),In._44(null,["    "])),(n()(),In._22(0,null,null,46,"nav",[["class","navbar navbar-dark bg-primary sticky-top"]],null,null,null,null,null)),(n()(),In._44(null,["\n      "])),(n()(),In._22(0,null,null,43,"div",[["class","container"],["id","exCollapsingNavbar2"]],null,null,null,null,null)),(n()(),In._44(null,["\n        "])),(n()(),In._22(0,null,null,40,"ul",[["class","nav navbar-nav navbar-collapse flex-row"]],null,null,null,null,null)),(n()(),In._44(null,["\n          "])),(n()(),In._22(0,null,null,13,"li",[["class","nav-item"]],null,null,null,null,null)),In._20(1720320,null,2,Fn.l,[Fn.k,In.r,In.S,In.j],{routerLinkActiveOptions:[0,"routerLinkActiveOptions"],routerLinkActive:[1,"routerLinkActive"]},null),In._42(603979776,1,{links:1}),In._42(603979776,2,{linksWithHrefs:1}),In._39({exact:0}),In._37(1),(n()(),In._44(null,["\n            "])),(n()(),In._22(0,null,null,5,"a",[["class","nav-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var e=!0;if("click"===l){e=!1!==In._36(n,15).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e}return e},null,null)),In._20(671744,[[2,4]],0,Fn.m,[Fn.k,Fn.a,Ln.g],{routerLink:[0,"routerLink"]},null),In._37(1),(n()(),In._44(null,["Pok\xe9dex "])),(n()(),In._22(0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(n()(),In._44(null,["(current)"])),(n()(),In._44(null,["\n          "])),(n()(),In._44(null,["\n          "])),(n()(),In._22(0,null,null,10,"li",[["class","nav-item"]],null,null,null,null,null)),In._20(1720320,null,2,Fn.l,[Fn.k,In.r,In.S,In.j],{routerLinkActive:[0,"routerLinkActive"]},null),In._42(603979776,3,{links:1}),In._42(603979776,4,{linksWithHrefs:1}),In._37(1),(n()(),In._44(null,["\n            "])),(n()(),In._22(0,null,null,3,"a",[["class","nav-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var e=!0;if("click"===l){e=!1!==In._36(n,29).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e}return e},null,null)),In._20(671744,[[4,4]],0,Fn.m,[Fn.k,Fn.a,Ln.g],{routerLink:[0,"routerLink"]},null),In._37(1),(n()(),In._44(null,["My Team"])),(n()(),In._44(null,["\n          "])),(n()(),In._44(null,["\n          "])),(n()(),In._22(0,null,null,10,"li",[["class","nav-item"]],null,null,null,null,null)),In._20(1720320,null,2,Fn.l,[Fn.k,In.r,In.S,In.j],{routerLinkActive:[0,"routerLinkActive"]},null),In._42(603979776,5,{links:1}),In._42(603979776,6,{linksWithHrefs:1}),In._37(1),(n()(),In._44(null,["\n            "])),(n()(),In._22(0,null,null,3,"a",[["class","nav-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var e=!0;if("click"===l){e=!1!==In._36(n,41).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e}return e},null,null)),In._20(671744,[[6,4]],0,Fn.m,[Fn.k,Fn.a,Ln.g],{routerLink:[0,"routerLink"]},null),In._37(1),(n()(),In._44(null,["Suggesties"])),(n()(),In._44(null,["\n          "])),(n()(),In._44(null,["\n        "])),(n()(),In._44(null,["\n      "])),(n()(),In._44(null,["\n    "])),(n()(),In._44(null,["\n    "])),(n()(),In._22(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),In._20(212992,null,0,Fn.o,[Fn.b,In._4,In.m,[8,null],In.j],null,null)],function(n,l){n(l,8,0,n(l,11,0,!0),n(l,12,0,"active")),n(l,15,0,n(l,16,0,"")),n(l,23,0,n(l,26,0,"active")),n(l,29,0,n(l,30,0,"/my-team")),n(l,35,0,n(l,38,0,"active")),n(l,41,0,n(l,42,0,"/suggesties")),n(l,50,0)},function(n,l){n(l,14,0,In._36(l,15).target,In._36(l,15).href),n(l,28,0,In._36(l,29).target,In._36(l,29).href),n(l,40,0,In._36(l,41).target,In._36(l,41).href)})}function T(n){return In._46(0,[(n()(),In._22(0,null,null,1,"app-root",[],null,null,null,S,Nn)),In._20(49152,null,0,I,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var w={production:!0},A=function(){function n(){}return n}(),I=function(){function n(){this.title="app"}return n}(),F=[""],L=["img[_ngcontent-%COMP%]{max-width:65%;display:block;margin:10px auto}.pokemon-image[_ngcontent-%COMP%]{position:relative}.pokemon-image[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer}[_nghost-%COMP%]{padding:5px}h2[_ngcontent-%COMP%]{font-size:1.1rem;text-align:center;margin-bottom:15px}h2[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-transform:uppercase}h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;background-color:#f1f1f1;padding:5px;font-size:.7rem;color:#000;margin-right:10px}.types[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;text-align:center;margin-top:20px}.types[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;padding:5px;font-size:.7rem;text-transform:uppercase;color:#fff}.types[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-left:7px}button[_ngcontent-%COMP%]{outline:none;border:0;text-transform:uppercase;font-size:.8rem;margin-top:15px;margin-left:auto;margin-right:auto;display:block;padding:5px 12px;background-color:#f1f1f1;border:1px solid #f1f1f1;transition:.3s ease;box-sizing:border-box}button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#fefefe}button[disabled][_ngcontent-%COMP%]{opacity:.5}button[disabled][_ngcontent-%COMP%]:hover{cursor:default;background-color:#f1f1f1}.grass[_ngcontent-%COMP%]{border-color:#69c23d;color:#69c23d;background-color:#69c23d}.poison[_ngcontent-%COMP%]{border-color:#923a92;color:#923a92;background-color:#923a92}.fire[_ngcontent-%COMP%]{border-color:#ed6d12;color:#ed6d12;background-color:#ed6d12}.flying[_ngcontent-%COMP%]{border-color:#8e6feb;color:#8e6feb;background-color:#8e6feb}.water[_ngcontent-%COMP%]{border-color:#4578ed;color:#4578ed;background-color:#4578ed}.bug[_ngcontent-%COMP%]{border-color:#97a51d;color:#97a51d;background-color:#97a51d}.normal[_ngcontent-%COMP%]{border-color:#9c9c63;color:#9c9c63;background-color:#9c9c63}.electric[_ngcontent-%COMP%]{border-color:#f6c913;color:#f6c913;background-color:#f6c913}.ground[_ngcontent-%COMP%]{border-color:#dbb54d;color:#dbb54d;background-color:#dbb54d}.fairy[_ngcontent-%COMP%]{border-color:#e87890;color:#e87890;background-color:#e87890}.fighting[_ngcontent-%COMP%]{border-color:#ae2a24;color:#ae2a24;background-color:#ae2a24}.psychic[_ngcontent-%COMP%]{border-color:#f73670;color:#f73670;background-color:#f73670}.rock[_ngcontent-%COMP%]{border-color:#a48f32;color:#a48f32;background-color:#a48f32}.steel[_ngcontent-%COMP%]{border-color:#a0a0c0;color:#a0a0c0;background-color:#a0a0c0}.ice[_ngcontent-%COMP%]{border-color:#7ecece;color:#7ecece;background-color:#7ecece}.ghost[_ngcontent-%COMP%]{border-color:#644e88;color:#644e88;background-color:#644e88}.dragon[_ngcontent-%COMP%]{border-color:#5e1df7;color:#5e1df7;background-color:#5e1df7}.pokemon[_ngcontent-%COMP%]{border:10px solid;padding:15px;transition:border .3s ease;background-color:#fff}"],j=function(){function n(){}return n.prototype.transform=function(n,l){if(!n)return n;for(var u=0;u<n.length;u++)n[u]=n[u].toLowerCase();return n},n}(),N=function(){function n(){}return n.prototype.transform=function(n){return n?n.charAt(0).toUpperCase()+n.slice(1):n},n}(),z=localStorage.getItem("pkt")?JSON.parse(localStorage.getItem("pkt")):[],K=function(){function n(){}return n.prototype.getPoketeam=function(){var n=localStorage.getItem("pkt");return n?JSON.parse(n):[]},n.prototype.addPokemonToTeam=function(n){return!(z.length>=6)&&(z.push(n),localStorage.setItem("pkt",JSON.stringify(z)),!0)},n.prototype.removePokemonFromTeam=function(n){this.removeByAttribute(z,"id",n.id),localStorage.setItem("pkt",JSON.stringify(z))},n.prototype.removeByAttribute=function(n,l,u){for(var e=n.length;e--;)n[e]&&n[e].hasOwnProperty(l)&&arguments.length>2&&n[e][l]===u&&n.splice(e,1);return n},n.prototype.checkByAttribute=function(n,l,u){for(var e=n.length;e--;)if(n[e]&&n[e].hasOwnProperty(l)&&arguments.length>2&&n[e][l]===u)return!0;return!1},n.ctorParameters=function(){return[]},n}(),D=u("/oeL"),H=u("0WLp"),W=function(){function n(n,l){this.modalService=n,this.poketeamService=l,this.pokemonToAdd=new D.t,this.poketeam=z}return n.prototype.ngOnInit=function(){},n.prototype.addToTeam=function(n){this.isPartOfTeam(n)||this.pokemonToAdd.emit(n)},n.prototype.removeFromTeam=function(n){this.pokemonToAdd.emit(n)},n.prototype.open=function(n){this.modalService.open(n)},n.prototype.isPartOfTeam=function(n){return this.poketeamService.checkByAttribute(this.poketeam,"id",n.id)},n.ctorParameters=function(){return[{type:H.a},{type:K}]},n}(),q=u("/oeL"),B=u("qbdv"),$=u("dN2u"),R=[L],V=q._19({encapsulation:0,styles:R,data:{}}),J=(q._17("app-pokemon",W,p,{pokemon:"pokemon",isPokedex:"isPokedex",isPoketeam:"isPoketeam"},{pokemonToAdd:"pokemonToAdd"},[]),function(){function n(n,l,u,e,t,o,r,i){this.id=n,this.name=l,this.base_experience=u,this.height=e,this.weight=t,this.order=o,this.types=r,this.name_raw=i}return n}()),E=u("CPp0"),U=u("5v8a"),Y=(u.n(U),function(){function n(n){this.http=n,this.url="assets/data/pokemon.json"}return n.prototype.getPokemon=function(){return this.http.get(this.url).map(function(n){return n.json()})},n.ctorParameters=function(){return[{type:E.d}]},n}()),X=function(){function n(n,l){this.pokeapiService=n,this.poketeamService=l,this.pokedex=[],this.isPokedex=!0,this.poketeam=z,this.isDragging=!1}return n.prototype.ngOnInit=function(){var n=this;this.pokeapiService.getPokemon().subscribe(function(l){n.createPokemonObjects(l)})},n.prototype.createPokemonObjects=function(n){for(var l=Object.keys(n).length,u=0;u<l;u++)this.pokedex.push(new J(u,n[u].Name,n[u].MaxCP,n[u].Height.Minimum+" - "+n[u].Height.Maximum,n[u].Weight.Minimum+" - "+n[u].Weight.Maximum,n[u].Number,n[u].Types,this.removeSpecialCharacters(n[u].Name)))},n.prototype.removeSpecialCharacters=function(n){return n.replace(/(?!\w|\s)./g,"").replace(/\s+/g,"").replace(/^(\s*)([\W\w]*)(\b\s*$)/g,"$2")},n.prototype.addPokemonToTeam=function(n){this.poketeamService.addPokemonToTeam(n)},n.prototype.removePokemonFromTeam=function(n){return!1},n.ctorParameters=function(){return[{type:Y},{type:K}]},n}(),Z=u("/oeL"),Q=u("dN2u"),G=u("qbdv"),nn=[F],ln=Z._19({encapsulation:0,styles:nn,data:{}}),un=Z._17("app-pokedex",X,f,{},{},[]),en=[".pokedex--dropzone[_nghost-%COMP%]   p[_ngcontent-%COMP%], .pokedex--dropzone   [_nghost-%COMP%]   p[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]{width:100%}"],tn=function(){function n(n){this.poketeamService=n,this.poketeam=z,this.isPoketeam=!0,this.totalPower=0,this.dragOperation=!1}return n.prototype.ngOnInit=function(){this.getPoketeam()},n.prototype.ngAfterContentChecked=function(){},n.prototype.getPoketeam=function(){this.poketeam=this.poketeamService.getPoketeam()},n.prototype.addPokemonToTeam=function(n){return!1},n.prototype.removePokemonFromTeam=function(n){this.poketeamService.removePokemonFromTeam(n),this.getPoketeam()},n.prototype.calculateTotalPower=function(){if(this.totalPower=0,!(this.poketeam.length<1))for(var n=0;n<this.poketeam.length;n++)this.totalPower+=this.poketeam[n].base_experience},n.ctorParameters=function(){return[{type:K}]},n}(),on=u("/oeL"),rn=u("iuYq"),an=u("vOiX"),cn=u("W2RV"),_n=u("dN2u"),sn=u("qbdv"),pn=[en],gn=on._19({encapsulation:0,styles:pn,data:{}}),mn=on._17("app-poketeam",tn,v,{},{},[]),dn=["p[_ngcontent-%COMP%]{font-style:italic;padding-left:1.5em;border-left:10px solid #f1f1f1}h1[_ngcontent-%COMP%]{margin-bottom:2em}h2[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700}.suggestie[_ngcontent-%COMP%]{margin-bottom:1em}"],fn=function(){function n(){this.suggesties=[{name:"Nathalie Maes",suggestion:"Ik zou het leuk vinden als je de tweede generatie zou kunnen toevoegen!"},{name:"Bastogne Duo",suggestion:"Ik ben maar een koekje."},{name:"Suzy Lotus",suggestion:"Nice."}]}return n.prototype.getSuggesties=function(){return this.suggesties},n.prototype.addSuggestie=function(n){this.suggesties.unshift(n)},n.ctorParameters=function(){return[]},n}(),kn=function(){function n(n){this.suggestiesService=n,this.suggesties=[]}return n.prototype.ngOnInit=function(){this.suggesties=this.suggestiesService.getSuggesties()},n.prototype.addSuggestie=function(n){this.suggestiesService.addSuggestie(n)},n.ctorParameters=function(){return[{type:fn}]},n}(),bn=["[_nghost-%COMP%]{margin-top:55px}[_nghost-%COMP%], label[_ngcontent-%COMP%]{display:block}label[_ngcontent-%COMP%]{font-weight:700}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:0;outline:0;margin-bottom:1em;width:100%;max-width:300px}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{background-color:#f1f1f1;padding:5px 12px}button[_ngcontent-%COMP%]{outline:none;border:0;text-transform:uppercase;font-size:.8rem;border:1px solid #f1f1f1;transition:.3s ease;box-sizing:border-box}button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#fefefe}button[disabled][_ngcontent-%COMP%]{opacity:.5}button[disabled][_ngcontent-%COMP%]:hover{cursor:default;background-color:#f1f1f1}"],hn=u("/oeL"),Pn=function(){function n(){this.submitted=new hn.t}return n.prototype.ngOnInit=function(){},n.prototype.onSubmit=function(n){this.submitted.emit({name:n.value.nameField,suggestion:n.value.suggestionField}),n.resetForm()},n.ctorParameters=function(){return[]},n}(),vn=u("/oeL"),yn=u("bm2B"),Cn=[bn],On=vn._19({encapsulation:0,styles:Cn,data:{}}),xn=(vn._17("app-suggestieform",Pn,C,{},{submitted:"submitted"},[]),u("/oeL")),Mn=u("qbdv"),Sn=[dn],Tn=xn._19({encapsulation:0,styles:Sn,data:{}}),wn=xn._17("app-suggesties",kn,M,{},{},[]),An=[".nav-link[_ngcontent-%COMP%]{padding:5px 12px}"],In=u("/oeL"),Fn=u("BkNc"),Ln=u("qbdv"),jn=[An],Nn=In._19({encapsulation:0,styles:jn,data:{}}),zn=In._17("app-root",I,T,{},{},[]),Kn=function(){function n(){}return n}(),Dn=u("/oeL"),Hn=u("CVNG"),Wn=u("ClIn"),qn=u("CU81"),Bn=u("IkMs"),$n=u("DlWC"),Rn=u("m0eP"),Vn=u("MsHi"),Jn=u("qbdv"),En=u("fc+i"),Un=u("BkNc"),Yn=u("bm2B"),Xn=u("CPp0"),Zn=u("KRwK"),Qn=u("dN2u"),Gn=u("nVXb"),nl=u("Wv1e"),ll=u("QGDq"),ul=u("0H8/"),el=u("5FV4"),tl=u("f1rf"),ol=u("KSV9"),rl=u("CuDZ"),il=u("lA7/"),al=u("HRzg"),cl=u("Qyse"),_l=u("NmeZ"),sl=u("7zUS"),pl=u("59zy"),gl=u("+E40"),ml=u("V6Dl"),dl=u("W2RV"),fl=u("vOiX"),kl=u("XKz0"),bl=u("wnyu"),hl=u("tzcA"),Pl=u("PY9B"),vl=u("3rU7"),yl=u("4HaF"),Cl=u("DaIH"),Ol=u("Zz+K"),xl=u("2waW"),Ml=u("IBeK"),Sl=u("g5gQ"),Tl=u("xBEz"),wl=u("PuIS"),Al=u("U0Tu"),Il=u("Cb36"),Fl=u("5h8W"),Ll=u("6ade"),jl=u("0WLp"),Nl=u("CbiL"),zl=Dn._18(A,[I],function(n){return Dn._33([Dn._34(512,Dn.m,Dn._14,[[8,[un,mn,wn,Hn.a,Wn.a,qn.a,Bn.a,$n.a,Rn.a,Vn.a,zn]],[3,Dn.m],Dn.I]),Dn._34(5120,Dn.E,Dn._32,[[3,Dn.E]]),Dn._34(4608,Jn.m,Jn.l,[Dn.E]),Dn._34(5120,Dn.c,Dn._23,[]),Dn._34(5120,Dn.C,Dn._29,[]),Dn._34(5120,Dn.D,Dn._30,[]),Dn._34(4608,En.b,En.s,[Jn.c]),Dn._34(6144,Dn.V,null,[En.b]),Dn._34(4608,En.e,En.f,[]),Dn._34(5120,En.c,function(n,l,u,e){return[new En.k(n),new En.o(l),new En.n(u,e)]},[Jn.c,Jn.c,Jn.c,En.e]),Dn._34(4608,En.d,En.d,[En.c,Dn.K]),Dn._34(135680,En.m,En.m,[Jn.c]),Dn._34(4608,En.l,En.l,[En.d,En.m]),Dn._34(6144,Dn.T,null,[En.l]),Dn._34(6144,En.p,null,[En.m]),Dn._34(4608,Dn._2,Dn._2,[Dn.K]),Dn._34(4608,En.g,En.g,[Jn.c]),Dn._34(4608,En.i,En.i,[Jn.c]),Dn._34(5120,Un.a,Un.x,[Un.k]),Dn._34(4608,Un.d,Un.d,[]),Dn._34(6144,Un.f,null,[Un.d]),Dn._34(135680,Un.p,Un.p,[Un.k,Dn.H,Dn.k,Dn.A,Un.f]),Dn._34(4608,Un.e,Un.e,[]),Dn._34(5120,Un.h,Un.A,[Un.y]),Dn._34(5120,Dn.b,function(n){return[n]},[Un.h]),Dn._34(4608,Yn.j,Yn.j,[]),Dn._34(4608,Xn.c,Xn.c,[]),Dn._34(4608,Xn.g,Xn.b,[]),Dn._34(5120,Xn.i,Xn.j,[]),Dn._34(4608,Xn.h,Xn.h,[Xn.c,Xn.g,Xn.i]),Dn._34(4608,Xn.f,Xn.a,[]),Dn._34(5120,Xn.d,Xn.k,[Xn.h,Xn.f]),Dn._34(4608,Zn.a,Zn.a,[Dn.g,Dn.A,Dn.m]),Dn._34(4608,Qn.a,Qn.a,[Dn.m,Dn.A,Zn.a]),Dn._34(4608,Gn.a,Gn.a,[]),Dn._34(4608,nl.a,nl.a,[]),Dn._34(4608,ll.a,ll.a,[]),Dn._34(4608,ul.a,ul.a,[]),Dn._34(4608,el.a,el.a,[]),Dn._34(4608,tl.a,tl.a,[]),Dn._34(4608,ol.a,ol.b,[]),Dn._34(4608,rl.a,rl.b,[]),Dn._34(4608,il.b,il.a,[]),Dn._34(4608,al.a,al.a,[]),Dn._34(4608,cl.a,cl.a,[]),Dn._34(4608,_l.a,_l.a,[]),Dn._34(4608,sl.a,sl.a,[]),Dn._34(4608,pl.a,pl.a,[]),Dn._34(4608,gl.a,gl.a,[]),Dn._34(4608,ml.a,ml.a,[]),Dn._34(4608,dl.a,dl.a,[]),Dn._34(5120,fl.a,fl.c,[]),Dn._34(5120,fl.b,fl.d,[dl.a]),Dn._34(4608,Y,Y,[Xn.d]),Dn._34(4608,K,K,[]),Dn._34(4608,fn,fn,[]),Dn._34(4608,kl.a,kl.a,[kl.b]),Dn._34(512,Jn.b,Jn.b,[]),Dn._34(1024,Dn.s,En.q,[]),Dn._34(1024,Dn.J,function(){return[Un.t()]},[]),Dn._34(512,Un.y,Un.y,[Dn.A]),Dn._34(1024,Dn.d,function(n,l,u){return[En.r(n,l),Un.z(u)]},[[2,En.h],[2,Dn.J],Un.y]),Dn._34(512,Dn.e,Dn.e,[[2,Dn.d]]),Dn._34(131584,Dn._21,Dn._21,[Dn.K,Dn._15,Dn.A,Dn.s,Dn.m,Dn.e]),Dn._34(2048,Dn.g,null,[Dn._21]),Dn._34(512,Dn.f,Dn.f,[Dn.g]),Dn._34(512,En.a,En.a,[[3,En.a]]),Dn._34(1024,Un.s,Un.v,[[3,Un.k]]),Dn._34(512,Un.r,Un.c,[]),Dn._34(512,Un.b,Un.b,[]),Dn._34(256,Un.g,{},[]),Dn._34(1024,Jn.g,Un.u,[Jn.p,[2,Jn.a],Un.g]),Dn._34(512,Jn.f,Jn.f,[Jn.g]),Dn._34(512,Dn.k,Dn.k,[]),Dn._34(512,Dn.H,Dn.Z,[Dn.k,[2,Dn._0]]),Dn._34(1024,Un.i,function(){return[[{path:"",component:X},{path:"my-team",component:tn},{path:"suggesties",component:kn}]]},[]),Dn._34(1024,Un.k,Un.w,[Dn.g,Un.r,Un.b,Jn.f,Dn.A,Dn.H,Dn.k,Un.i,Un.g,[2,Un.q],[2,Un.j]]),Dn._34(512,Un.n,Un.n,[[2,Un.s],[2,Un.k]]),Dn._34(512,Kn,Kn,[]),Dn._34(512,Yn.h,Yn.h,[]),Dn._34(512,Yn.b,Yn.b,[]),Dn._34(512,Xn.e,Xn.e,[]),Dn._34(512,bl.a,bl.a,[]),Dn._34(512,hl.a,hl.a,[]),Dn._34(512,Pl.a,Pl.a,[]),Dn._34(512,vl.a,vl.a,[]),Dn._34(512,yl.a,yl.a,[]),Dn._34(512,Cl.a,Cl.a,[]),Dn._34(512,Ol.a,Ol.a,[]),Dn._34(512,xl.a,xl.a,[]),Dn._34(512,Ml.a,Ml.a,[]),Dn._34(512,Sl.a,Sl.a,[]),Dn._34(512,Tl.b,Tl.b,[]),Dn._34(512,wl.a,wl.a,[]),Dn._34(512,Al.a,Al.a,[]),Dn._34(512,Il.a,Il.a,[]),Dn._34(512,Fl.a,Fl.a,[]),Dn._34(512,Ll.a,Ll.a,[]),Dn._34(512,jl.b,jl.b,[]),Dn._34(512,Nl.a,Nl.a,[]),Dn._34(512,A,A,[])])}),Kl=u("/oeL"),Dl=u("fc+i");w.production&&Object(Kl._8)(),Object(Dl.j)().bootstrapModuleFactory(zl)},gFIY:function(n,l){function u(n){return new Promise(function(l,u){u(new Error("Cannot find module '"+n+"'."))})}u.keys=function(){return[]},u.resolve=u,n.exports=u,u.id="gFIY"}},[0]);