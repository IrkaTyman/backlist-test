"use strict";(self.webpackChunkbacklist=self.webpackChunkbacklist||[]).push([[852],{852:function(o,e,a){a.r(e),a.d(e,{BooksPage:function(){return $}});var t=a(9439),s=a(2791),n=a(4165),_=a(5861),r=a(5106),c=a(3461),i=a(9085),l={"books-page":"BooksPage_books-page__9cXPf","books-page__container":"BooksPage_books-page__container__M4vIq","books-page__settings":"BooksPage_books-page__settings__RTOYF","books-page__grid-type":"BooksPage_books-page__grid-type__YoGeZ",active:"BooksPage_active__tzQgF","books-page__best-book":"BooksPage_books-page__best-book__1sN27","books-page__best-book__title":"BooksPage_books-page__best-book__title__n6QwK","books-page__best-book__content":"BooksPage_books-page__best-book__content__uz+6N","books-page__best-book__cover":"BooksPage_books-page__best-book__cover__yVLhd","books-page__best-book__cover_empty":"BooksPage_books-page__best-book__cover_empty__tgleX","books-page__best-book__rating-wrapper":"BooksPage_books-page__best-book__rating-wrapper__RdjEQ","books-page__best-book__rating":"BooksPage_books-page__best-book__rating__wmppT","books-page__best-book__info":"BooksPage_books-page__best-book__info__SPDx5","books-page__best-book__name":"BooksPage_books-page__best-book__name__9s5Et","books-page__best-book__author":"BooksPage_books-page__best-book__author__Qbsg4","books-page__best-book__add-info":"BooksPage_books-page__best-book__add-info__U0vXS","books-page__catalog_header":"BooksPage_books-page__catalog_header__dMVbu","books-page__catalog":"BooksPage_books-page__catalog__qAtv5","books-page__catalog__subtitle_wrapper":"BooksPage_books-page__catalog__subtitle_wrapper__Bvjy9","books-page__catalog__subtitle":"BooksPage_books-page__catalog__subtitle__cY+yB","books-page__empty-catalog":"BooksPage_books-page__empty-catalog__pNH6J"},b=a(3655),k=a(43);var d=a.p+"static/media/rating.83e6d9febac691735f27bb64c2703fad.svg",g="BookCard_book-card__mRahv",u="BookCard_book-card__cover-wrapper__DyF7Z",p="BookCard_book-card__cover__Jdxnr",m="BookCard_book-card__cover-empty__LQ9Fm",f="BookCard_book-card__rating-wrapper__ltell",B="BookCard_book-card__rating__PZiSO",h="BookCard_book-card__actions__fsie4",x="BookCard_book-card__name__q7hAH",v="BookCard_book-card__authors__kmJDX",j="BookCard_book-card__additional-info__huBLb",N=a(3879),y=a(2346);var S=a.p+"static/media/edit.54da44554cf8e27434db7f2d280d40e7.svg";var C=a.p+"static/media/delete.5eea46205b6eae512f4787dfcec7ce6c.svg",w="BookActions_book-actions__1ptIu",P="BookActions_book-action__Imom3",I=a(184),Z=(0,N.l)((function(o){var e=o.editBook,a=o.deleteBook,t=o.containerClassName;return(0,I.jsxs)("div",{className:"".concat(w," ").concat(t||""),children:[(0,I.jsx)(y.Z,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043d\u0438\u0433\u0443",mouseEnterDelay:.5,children:(0,I.jsx)("img",{className:"".concat(P),src:S,onClick:e,alt:"edit book's information"})}),(0,I.jsx)(y.Z,{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443",mouseEnterDelay:.5,children:(0,I.jsx)("img",{className:"".concat(P),onClick:a,src:C,alt:"delete book"})})]})})),Y=b.Z.Text,T=(0,N.l)((function(o){var e=o.book,a=o.deleteBook,t=(0,r.a)((function(o){return o.setEditorState}));return(0,I.jsxs)("div",{className:"".concat(g),children:[(0,I.jsxs)("div",{className:"".concat(u),children:[e.cover?(0,I.jsx)("div",{className:"".concat(p),style:{backgroundImage:"url(".concat(e.cover,")")}}):(0,I.jsx)("div",{className:"".concat(m),children:(0,I.jsx)(Y,{children:"\u041d\u0435\u0442 \u043e\u0431\u043b\u043e\u0436\u043a\u0438"})}),null!==e.rating&&(0,I.jsxs)("div",{className:"".concat(f),children:[(0,I.jsx)("img",{src:d,alt:"book rating"}),(0,I.jsx)(Y,{className:"".concat(B),children:e.rating})]}),(0,I.jsx)(Z,{editBook:function(){return t(e,!0)},containerClassName:h,deleteBook:function(o){function e(){return o.apply(this,arguments)}return e.toString=function(){return o.toString()},e}((function(){return a(e)}))})]}),(0,I.jsx)(Y,{className:"".concat(x),children:e.name}),(0,I.jsx)(Y,{className:"".concat(v),children:e.authors}),null!==e.publicationYear&&(0,I.jsxs)(Y,{className:"".concat(j),children:["\u0413\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430: ",e.publicationYear]}),null!==e.ISBN&&(0,I.jsxs)(Y,{className:"".concat(j),children:["ISBN: ",e.ISBN]})]})})),E=b.Z.Title,R=function(o,e,a){for(var t=[],s=null,n=0;n<o.length;n++)s!==o[n][e.name]&&(s=o[n][e.name],t.push((0,I.jsxs)("div",{className:"".concat(l["books-page__catalog__subtitle_wrapper"]),children:[(0,I.jsxs)(E,{level:2,className:"".concat(l["books-page__catalog__subtitle"]),children:[A(e),": ",s]}),(0,I.jsx)("hr",{})]},"title-".concat(n)))),t.push((0,I.jsx)(T,{book:o[n],deleteBook:a},n));return t};function A(o){switch(o.name){case"publicationYear":return"\u0413\u043e\u0434 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438";case"rating":return"\u0420\u0435\u0439\u0442\u0438\u043d\u0433";default:return""}}var L=a(9555),D=[{label:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u043e\u0432\u044b\u0435",value:"firstNew"},{label:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u0442\u0430\u0440\u044b\u0435",value:"firstOld"},{label:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043b\u0443\u0447\u0448\u0438\u0435",value:"firstBest"}],F={firstNew:{name:"publicationYear",order:"desc"},firstOld:{name:"publicationYear",order:"asc"},firstBest:{name:"rating",order:"desc"}},O=(0,N.l)((function(o){var e=o.onChange,a=o.sorting;return(0,I.jsx)(L.Z,{options:D,value:"publicationYear"===a.name&&"desc"===a.order?"firstNew":"publicationYear"===a.name&&"asc"===a.order?"firstOld":"rating"===a.name&&"desc"===a.order?"firstBest":"firstNew",onChange:function(o){function e(e){return o.apply(this,arguments)}return e.toString=function(){return o.toString()},e}((function(o){return e(F[o])}))})})),Q=a(9836),X="BooksTable_book-table__wrapper__SuFMV",q="BooksTable_book-table__rating-wrapper__3c8f8",J="BooksTable_book-table__rating__9t7bB",M=b.Z.Text,V=function(o,e){return[{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",dataIndex:"name",key:"name"},{title:"\u0410\u0432\u0442\u043e\u0440\u044b",dataIndex:"authors",key:"authors"},{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433",dataIndex:"rating",key:"rating",render:function(o,e){var a=e.rating;return(0,I.jsxs)("div",{className:"".concat(q),children:[a&&(0,I.jsx)("img",{src:d,alt:"book rating"}),(0,I.jsx)(M,{className:"".concat(J),children:a||""})]})}},{title:"\u0413\u043e\u0434 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",dataIndex:"publicationYear",key:"publicationYear"},{title:"ISBN",dataIndex:"ISBN",key:"ISBN"},{title:"",key:"action",render:function(a,t){return(0,I.jsx)(Z,{editBook:function(){return o(t,!0)},deleteBook:function(){return e(t)}})}}]},z=(0,N.l)((function(o){var e=o.books,a=o.deleteBook,t=(0,r.a)((function(o){return o.setEditorState}));return(0,I.jsx)("div",{className:"".concat(X),children:(0,I.jsx)(Q.Z,{dataSource:e,columns:V(t,a)})})})),H=a(3442),G=function(o){return o[o.Card=0]="Card",o[o.Row=1]="Row",o}({}),K=b.Z.Title,U=b.Z.Text,W=function(){var o=function(){var o=(0,r.a)((function(o){return o.books})),e=(0,r.a)((function(o){return o.bestBook})),a=(0,r.a)((function(o){return o.isLoading})),t=(0,r.a)((function(o){return o.errorStatus})),l=(0,r.a)((function(o){return o.sorting})),b=(0,r.a)((function(o){return o.setSortingState})),k=(0,r.a)((function(o){return function(){return o.updateBooks(o.sorting,o.search)}}));function d(){return(d=(0,_.Z)((0,n.Z)().mark((function o(e){return(0,n.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(window.confirm("\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443 \xab".concat(e.name,"\xbb?"))){o.next=2;break}return o.abrupt("return");case 2:return o.next=4,c.y.deleteBook(e.uid);case 4:o.sent?(i.Am.success("\u041a\u043d\u0438\u0433\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430"),k()):i.Am.error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u043d\u0438\u0433\u0438");case 6:case"end":return o.stop()}}),o)})))).apply(this,arguments)}return(0,s.useEffect)((function(){k()}),[l]),{books:o,bestBook:e,isLoading:a,errorStatus:t,sorting:l,setSortingState:b,deleteBook:function(o){return d.apply(this,arguments)}}}(),e=o.books,a=o.isLoading,b=o.bestBook,g=o.sorting,u=o.setSortingState,p=o.deleteBook,m=(0,s.useState)(G.Card),f=(0,t.Z)(m,2),B=f[0],h=f[1],x=(0,r.a)((function(o){return o.setEditorState}));return a?(0,I.jsx)(k.Z,{}):null===e?null:(0,I.jsxs)("div",{className:"".concat(l["books-page"]),children:[b&&(0,I.jsxs)("div",{className:"".concat(l["books-page__best-book"]),children:[(0,I.jsx)(K,{className:"".concat(l["books-page__best-book__title"]),children:"#\u041b\u0423\u0427\u0428\u0415\u0415"}),(0,I.jsx)(Z,{editBook:function(){return x(b,!0)},containerClassName:l["books-page__best-book__actions"],deleteBook:function(){return p(b)}}),(0,I.jsxs)("div",{className:"".concat(l["books-page__best-book__content"]),children:[b.cover?(0,I.jsx)("div",{className:"".concat(l["books-page__best-book__cover"]),style:{backgroundImage:"url(".concat(b.cover,")")},children:null!==b.rating&&(0,I.jsxs)("div",{className:"".concat(l["books-page__best-book__rating-wrapper"]),children:[(0,I.jsx)("img",{src:d,alt:"book rating"}),(0,I.jsx)(U,{className:"".concat(l["books-page__best-book__rating"]),children:b.rating})]})}):(0,I.jsx)("div",{className:"".concat(l["books-page__best-book__cover"]," ").concat(l["books-page__best-book__cover_empty"]),children:(0,I.jsx)(U,{children:"\u041d\u0435\u0442 \u043e\u0431\u043b\u043e\u0436\u043a\u0438"})}),(0,I.jsxs)("div",{className:"".concat(l["books-page__best-book__info"]),children:[(0,I.jsx)(U,{className:"".concat(l["books-page__best-book__name"]),children:b.name}),(0,I.jsx)(U,{className:"".concat(l["book-card__authors"]),children:b.authors}),null!==b.publicationYear&&(0,I.jsxs)(U,{className:"".concat(l["books-page__best-book__add-info"]),children:["\u0413\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430: ",b.publicationYear]}),null!==b.ISBN&&(0,I.jsxs)(U,{className:"".concat(l["books-page__best-book__add-info"]),children:["ISBN: ",b.ISBN]})]})]})]}),(0,I.jsxs)("div",{className:"".concat(l["books-page__container"]," ").concat(l["books-page__catalog_header"]),children:[(0,I.jsx)(K,{children:"\u041a\u043d\u0438\u0433\u0438 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430"}),(0,I.jsxs)("div",{className:"".concat(l["books-page__settings"]),children:[(0,I.jsx)(H.cZ,{onClick:function(){return h(G.Card)},className:"".concat(l["books-page__grid-type"]," ").concat(B===G.Card?l.active:"")}),(0,I.jsx)(H.En,{onClick:function(){return h(G.Row)},className:"".concat(l["books-page__grid-type"]," ").concat(B===G.Row?l.active:"")}),(0,I.jsx)(O,{onChange:u,sorting:g})]})]}),e.length>0?B===G.Card?(0,I.jsx)("div",{className:"".concat(l["books-page__catalog"]," ").concat(l["books-page__container"]),children:R(e,g,p)}):(0,I.jsx)(z,{books:e,deleteBook:p}):(0,I.jsx)(K,{className:"".concat(l["books-page__empty-catalog"]," ").concat(l["books-page__container"]),children:"\u041a\u043d\u0438\u0433\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"})]})},$=(0,s.memo)(W)}}]);
//# sourceMappingURL=852.a367c772.chunk.js.map