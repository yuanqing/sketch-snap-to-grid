!function(t,e){for(var n in e)t[n]=e[n]}(this,function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e,n){"use strict";var r={};n.r(r),n.d(r,"CHECK_BOX",function(){return p}),n.d(r,"DROP_DOWN",function(){return x}),n.d(r,"RADIO_BUTTONS",function(){return S}),n.d(r,"NUMERIC_TEXT_BOX",function(){return w.a}),n.d(r,"TEXT_BOX",function(){return j});var i=n(1);function o(t){const e={};return function t(e,n,r){Object.keys(e).forEach(function(i){const o=[n,i].filter(Boolean).join("."),a=e[i];"object"!=typeof a||null===a||Array.isArray(a)?r[o]=e[i]:t(a,o,r)})}(t,null,e),e}const a=/\./;function c(t){const e={};return Object.keys(t).forEach(function(n){!function t(e,n,r){const i=e[0];if(1===e.length)return void(r[i]=n);null==r[i]&&(r[i]={});t(e.slice(1),n,r[i])}(n.split(a),t[n],e)}),e}function u(){const t={alignArtboardsToCanvasGrid:{snapToGrid:!1,gridHeight:200,gridWidth:200,whitelistRegularExpression:"^@"},alignLayersToArtboardGrid:{snapToGrid:!1,gridSize:10,whitelistRegularExpression:"^@"}};if(!t)return{};const e={},n=o(t);return Object.keys(n).forEach(function(t){const r=Object(i.sessionVariable)(t),o=Object(i.settingForKey)(t),a=void 0!==r?r:o,c=n[t];e[t]=void 0!==a?a:c}),c(e)}const s=1,l=10,f=17;const d=2,g=20,y=2;const b=20,h=10;function p({width:t,y:e,label:n,value:r}){const i=NSButton.alloc().initWithFrame(NSMakeRect(0,e,t,b));return i.setButtonType(NSSwitchButton),i.setBezelStyle(0),i.setState(r?NSOnState:NSOffState),i.setTitle(n),{view:i,height:b+h,retrieveValue:function(){return"1"==i.stringValue()}}}const v=20,O=15;function x({width:t,y:e,value:n,possibleValues:r}){const i=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,e,t,v));r.forEach(function(t){i.addItemWithTitle(`${t}`)});const o=void 0!==n?r.indexOf(n):0;return i.selectItemAtIndex(o),{view:i,height:v+O,retrieveValue:function(){const t=i.indexOfSelectedItem();return r[t]}}}const _=20,m=10;function S({width:t,y:e,value:n,possibleValues:r}){const i=NSButtonCell.alloc().init();i.setButtonType(NSRadioButton);const o=r.length,a=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,e,t,_),NSRadioModeMatrix,i,1,o);a.setCellSize(CGSizeMake(Math.floor(t/o),_)),a.cells().forEach(function(t,e){t.setTitle(r[e])});const c=void 0!==n?r.indexOf(n):0;return a.selectCellAtRow_column(0,c),{view:a,height:_+m,retrieveValue:function(){const t=a.cells().indexOfObject(a.selectedCell());return r[t]}}}var w=n(10),T=n(4);const j=Object(T.a)(),E=300;function A({title:t,formFields:e}){const n=o(u()),{formView:i,retrieveValues:a}=function({formFieldsConfig:t,settings:e}){const n=NSView.alloc().init();n.setFlipped(!0);const i={};let o=0;t.forEach(function(t){if("-"===t){const{view:t,height:e}=function({width:t,y:e}){const n=NSView.alloc().initWithFrame(NSMakeRect(0,e+l,t,s));return n.setWantsLayer(1),n.layer().setBackgroundColor(CGColorCreateGenericRGB(127/255,127/255,127/255,.5)),{view:n,height:l+s+f}}({width:E,y:o});return o+=e,void n.addSubview(t)}const{type:a,key:c,label:u,value:b,...h}=t;if(u&&"CHECK_BOX"!==a){const{view:t,height:e}=function({width:t,y:e,label:n}){const r=NSTextField.alloc().initWithFrame(NSMakeRect(0,e+d,t,g));return r.setBezeled(!1),r.setDrawsBackground(!1),r.setEditable(!1),r.setLineBreakMode(NSLineBreakByTruncatingTail),r.setSelectable(!1),r.setStringValue(n),{view:r,height:d+g+y}}({width:E,y:o,label:u});o+=e,n.addSubview(t)}const p=e[c],v=null!=b?b:p,{view:O,height:x,retrieveValue:_}=r[a]({width:E,y:o,label:u,value:v,...h});o+=x,n.addSubview(O),i[c]=_});const a=n.subviews();return a.forEach(function(t,e){e<a.length-1&&t.setNextKeyView(a[e+1])}),n.setFrame(NSMakeRect(0,0,E,o)),{formView:n,retrieveValues:i}}({formFieldsConfig:e.filter(Boolean),settings:n}),b=function(t){const e=NSAlert.alloc().init();return e.setMessageText(t),e.addButtonWithTitle("OK"),e.addButtonWithTitle("Cancel"),e}(t||"Settings");b.setAccessoryView(i);const h=i.subviews();if(h[0]&&b.window().setInitialFirstResponder(h[0]),"1000"==b.runModal()){const t={};return Object.keys(a).forEach(function(e){const n=a[e];t[e]=n()}),c(t)}return null}var k=n(7),G=n.n(k);function C(t){G.a.message(t)}function N(t){G.a.message(`✔ ${t}`)}function B(){const t={alignArtboardsToCanvasGrid:{snapToGrid:!1,gridHeight:200,gridWidth:200,whitelistRegularExpression:"^@"},alignLayersToArtboardGrid:{snapToGrid:!1,gridSize:10,whitelistRegularExpression:"^@"}};if(!t)return;const e=o(t);Object.keys(e).forEach(function(t){Object(i.setSettingForKey)(t,void 0),Object(i.setSessionVariable)(t,void 0)}),C("Reset settings")}const R=M(i.setSettingForKey);M(i.setSessionVariable);function M(t){return function(e){if(!e)return;const n=o(e);Object.keys(n).forEach(function(e){const r=n[e];null!=r&&t(e,r)})}}n(11),n(12);var W=n(3);n(5);function V(){const t=NSApplication.sharedApplication().orderedDocuments();return Object(W.fromNative)(t[0])}function F(){return V().selectedPage.layers}function P(){return V().selectedLayers.layers.reverse()}function H(t,e){t.forEach(function(t){e(t);const n=t.type;"Artboard"!==n&&"Group"!==n||H(t.layers,e)})}function L(t){return"Page"===t.parent.type?null:function t(e,n){const r=e.parent;if("Artboard"===r.type)return n;const i={x:n.x+r.frame.x,y:n.y+r.frame.y};return t(r,i)}(t,{x:t.frame.x,y:t.frame.y})}function I(t){!function t(e,n){const r=e.parent;r&&"Group"===r.type&&!n[r.id]&&(r.adjustToFit(),n[r.id]=!0,t(r,n))}(t,{})}function z(){return F().filter(X)}function X(t){return"Artboard"===t.type}n.d(e,"i",function(){return u}),n.d(e,"k",function(){return A}),n.d(e,"l",function(){return B}),n.d(e,"m",function(){return R}),n.d(e,"a",function(){return"CHECK_BOX"}),n.d(e,"b",function(){return"NUMERIC_TEXT_BOX"}),n.d(e,"c",function(){return"TEXT_BOX"}),n.d(e,"f",function(){return z}),n.d(e,"g",function(){return F}),n.d(e,"h",function(){return P}),n.d(e,"j",function(){return H}),n.d(e,"e",function(){return L}),n.d(e,"d",function(){return I}),n.d(e,"n",function(){return C}),n.d(e,"o",function(){return N})},function(t,e){t.exports=require("sketch/settings")},function(t,e,n){"use strict";function r({value:t,multiple:e}){return Math.floor(t/e)*e}n.d(e,"a",function(){return r})},function(t,e){t.exports=require("sketch")},function(t,e,n){"use strict";n.d(e,"a",function(){return o});const r=20,i=15;function o(t){return function({width:e,y:n,value:o,placeholder:a}){const c=NSTextField.alloc().initWithFrame(NSMakeRect(0,n,e,r)),u=null==o?"":`${o}`;return c.setStringValue(u),a&&c.setPlaceholderString(a),{view:c,height:r+i,retrieveValue:function(){const e=`${c.stringValue()}`;return t?t(e):e}}}}},function(t,e){t.exports=require("sketch/dom")},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(0);function i(t){return function(){const e=Object(r.k)(t);e&&(Object(r.m)(e),Object(r.n)("Saved settings"))}}},function(t,e){t.exports=require("sketch/ui")},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return o});var r=n(0),i=n(2);function o({isAction:t,layers:e}){const{gridSize:n,whitelistRegularExpression:o}=Object(r.i)().alignLayersToArtboardGrid,a=o?new RegExp(o):null,c=Object(r.h)(),u=c.length>0;e=e||(u?c:Object(r.g)()),Object(r.j)(e,function(t){"Artboard"===t.type||"Group"===t.type||!t.getParentArtboard()||a&&a.test(t.name)||function({layer:t,gridSize:e}){const{x:n,y:o}=Object(r.e)(t),a=Object(i.a)({value:n,multiple:e}),c=Object(i.a)({value:o,multiple:e});t.frame.x=t.frame.x+a-n,t.frame.y=t.frame.y+c-o,Object(r.d)(t)}({layer:t,gridSize:n})}),t||Object(r.o)(`Aligned ${u?"selection":"all layers"} to artboard grid`)}},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(2);function o({layers:t,gridWidth:e,gridHeight:n}){const r=[];!function({grid:t,layersToInsert:e,gridWidth:n,gridHeight:r}){e.forEach(function(e){const o=Object(i.a)({value:e.frame.x,multiple:n}),a=Object(i.a)({value:e.frame.y,multiple:r}),c=function({grid:t,y:e}){const n=t.reduce(function(t,n,r){return-1!==t?t:n.y===e?r:t},-1);if(-1!==n)return t[n];const r=t.reduce(function(t,n,r){return e<n.y?r:t},t.length),i={y:e,layers:[]};return t.splice(r,0,i),i}({grid:t,y:a});c.layers.push({x:o,layer:e})}),function(t){t.forEach(function(t){t.layers.sort(function(t,e){return t.layer.frame.x-e.layer.frame.x})})}(t)}({grid:r,layersToInsert:t,gridWidth:e,gridHeight:n}),function({grid:t,gridHeight:e}){t.forEach(function({y:n,layers:r},o){let a=0;r.forEach(function({layer:t}){t.frame.height>a&&(a=t.frame.height)});const c=o+1;c<t.length&&n+a>=t[c].y&&t.slice(c).forEach(function(t){t.y=Object(i.a)({value:t.y+a,multiple:e})})})}({grid:r,gridHeight:n}),function({grid:t,gridWidth:e}){t.forEach(function({layers:t}){t.forEach(function({x:n,layer:r},o){const a=o+1,c=r.frame.width;a<t.length&&n+c>=t[a].x&&t.slice(a).forEach(function(t){t.x=Object(i.a)({value:t.x+c,multiple:e}),t.x===n&&(t.x+=e)})})})}({grid:r,gridWidth:e}),function(t){t.forEach(function({y:t,layers:e}){e.forEach(function({x:e,layer:n}){n.frame.x=e,n.frame.y=t})})}(r)}function a({isAction:t}){const{gridHeight:e,gridWidth:n,whitelistRegularExpression:i}=Object(r.i)().alignArtboardsToCanvasGrid;o({layers:function(t){const e=Object(r.f)();if(!t)return e;const n=new RegExp(t);return e.filter(function(t){return!n.test(t.name)})}(i),gridWidth:n,gridHeight:e}),t||Object(r.o)("Aligned artboards to canvas grid")}n.d(e,"default",function(){return a})},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return createNumericTextBox});var _text_box_factory__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);const createNumericTextBox=Object(_text_box_factory__WEBPACK_IMPORTED_MODULE_0__.a)(function(value){return parseFloat(eval(value))})},function(t,e){t.exports=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then}},function(t,e,n){"use strict";const r=async(t,e)=>{let n=0;for(const r of t)await e(await r,n++);return t};t.exports=r,t.exports.default=r},function(t,e,n){t.exports=n(14)},function(t,e,n){t.exports={action:n(15).default,"align-artboards-to-canvas-grid/align-artboards-to-canvas-grid":n(9).default,"align-layers-to-artboard-grid/align-layers-to-artboard-grid":n(8).default,"align-artboards-to-canvas-grid/settings":n(16).default,"align-layers-to-artboard-grid/settings":n(17).default,"settings/reset-settings":n(18).default}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var r=n(3),i=n(0),o=n(8),a=n(9);function c({actionContext:t}){const e=Object(i.i)(),n=function(t){const e=[];let n,i=-1;for(;++i<t.length;)"Artboard"!==(n=Object(r.fromNative)(t[i])).type&&n.getParentArtboard()&&e.push(n);return e}(t.layers),c=t.layers.length>n.length;e.alignLayersToArtboardGrid.snapToGrid&&n.length>0&&Object(o.default)({isAction:!0,layers:n}),e.alignArtboardsToCanvasGrid.snapToGrid&&c&&Object(a.default)({isAction:!0})}},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(6);const o={title:"Settings for Canvas Grid",formFields:[{type:r.b,key:"alignArtboardsToCanvasGrid.gridWidth",label:"Grid width"},{type:r.b,key:"alignArtboardsToCanvasGrid.gridHeight",label:"Grid height"},{type:r.c,key:"alignArtboardsToCanvasGrid.whitelistRegularExpression",label:"Whitelist regular expression"},{type:r.a,key:"alignArtboardsToCanvasGrid.snapToGrid",label:"Snap artboards to canvas grid"}]};e.default=Object(i.a)(o)},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(6);const o={title:"Settings for Artboard Grid",formFields:[{type:r.b,key:"alignLayersToArtboardGrid.gridSize",label:"Grid size"},{type:r.c,key:"alignLayersToArtboardGrid.whitelistRegularExpression",label:"Whitelist regular expression"},{type:r.a,key:"alignLayersToArtboardGrid.snapToGrid",label:"Snap layers to artboard grid"}]};e.default=Object(i.a)(o)},function(t,e,n){"use strict";n.r(e);var r=n(0);e.default=r.l}]));