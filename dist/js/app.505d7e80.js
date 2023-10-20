(function(){var e={8083:function(e,t,o){"use strict";var n=o(9242),r=o(7729),l=o(3396),i=o(7139),a=o.p+"img/layton_sign.afb4939f.png";const s=e=>((0,l.dD)("data-v-189c2684"),e=e(),(0,l.Cn)(),e),c={class:"container"},u=s((()=>(0,l._)("p",null," You have solved the puzzle! Now, you can try to solve the rest of the puzzles, good luck with them. ",-1))),d={class:"left-side"},p=s((()=>(0,l._)("div",{class:"image-container"},[(0,l._)("img",{src:a,alt:"Image",class:"sign"})],-1))),h=s((()=>(0,l._)("div",{class:"rules"},[(0,l._)("h2",null,"How to play "),(0,l._)("p",null," The rules are simple--you can move any ball on the board below as long as it satisfies the following conditions: "),(0,l._)("ul",null,[(0,l._)("li",null," To move, jump your selected ball over an adjacent space occupied by another ball into an empty space on the other side. You can't jump diagonally. "),(0,l._)("li",null," Once you've made the jump, the ball you jumped over disappears from the board. "),(0,l._)("li",null," To complete the puzzle, you must remove all balls from the board except for one. ")]),(0,l._)("p",null,"OK, enough rules. Try for yourself!")],-1))),f={class:"buttons_container"},v={class:"content"},m=s((()=>(0,l._)("footer",null,[(0,l._)("div",{class:"footer-content"},[(0,l._)("p",null,[(0,l.Uk)("See this project on "),(0,l._)("a",{href:"https://github.com/DavidRamosArchilla/disappearing-layton-puzzle",target:"_blank"},"GitHub")])])],-1)));function b(e,t,o,n,r,a){const s=(0,l.up)("Dialog"),b=(0,l.up)("Button"),g=(0,l.up)("Dropdown"),z=(0,l.up)("GameBoard");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",c,[(0,l.Wm)(s,{visible:r.isGameOver,"onUpdate:visible":t[0]||(t[0]=e=>r.isGameOver=e),position:"top",modal:"",header:"Well Done!",style:{width:"50vw"}},{default:(0,l.w5)((()=>[u])),_:1},8,["visible"]),(0,l._)("div",d,[p,h,(0,l._)("div",f,[(0,l.Wm)(b,{label:"Reset board",onClick:a.resetBoard,style:{backgroundColor:"#3e61a3",color:"#fff",marginRight:"10px"},class:"p-mr-2"},null,8,["onClick"]),(0,l.Wm)(g,{class:"puzzle_selector",options:r.dropdownOptions,modelValue:r.selectedOption,"onUpdate:modelValue":t[1]||(t[1]=e=>r.selectedOption=e),optionLabel:"label",placeholder:"Puzzle 1"},null,8,["options","modelValue"])])]),(0,l._)("div",{class:"right-side",style:(0,i.j5)(a.backgroundStyle)},[(0,l._)("div",v,[(0,l.Wm)(z,{ref:"gameBoard",onGameOver:a.handleGameOver,puzzleId:r.selectedOption.value},null,8,["onGameOver","puzzleId"])])],4)]),m],64)}const g={class:"gameboard"},z=["onDrop"],P=["onDragstart"],_=["src"];function w(e,t,o,r,a,s){return(0,l.wg)(),(0,l.iD)("div",g,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.board,((e,o)=>((0,l.wg)(),(0,l.iD)("div",{key:o,class:"row"},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,((e,r)=>((0,l.wg)(),(0,l.iD)("div",{key:r,class:(0,i.C_)(["square",{non_empty:null!=e}]),onDragover:t[0]||(t[0]=(0,n.iM)((()=>{}),["prevent"])),onDrop:e=>s.handleDrop(o,r)},[1===e?((0,l.wg)(),(0,l.iD)("div",{key:0,class:"piece",draggable:"true",onDragstart:e=>s.handleDragStart(e,o,r)},[(0,l._)("img",{src:s.getPieceImage(e),alt:"Piece"},null,8,_)],40,P)):(0,l.kq)("",!0)],42,z)))),128))])))),128))])}var O={data(){return{board:this.getInitalBoard(),selectedPiece:null,selectedPiecePosition:null}},props:{puzzleId:{type:Number,required:!0}},methods:{getInitalBoard(){const e=o(6672)("./puzzle_"+this.puzzleId+".json");var t=e.board;return t=t.map((e=>e.map((e=>-1===e?null:e)))),t},getPieceImage(e){if(1===e)return o(4226)},handleDragStart(e,t,o){this.board[t][o]&&(this.selectedPiece=this.board[t][o],this.selectedPiecePosition={rowIndex:t,colIndex:o},e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",""))},handleDrop(e,t){this.selectedPiece&&this.isValidSquare(e,t)&&(this.board[e].splice(t,1,this.selectedPiece),this.board[this.selectedPiecePosition.rowIndex].splice(this.selectedPiecePosition.colIndex,1,0),this.selectedPiece=null,this.selectedPiecePosition=null,this.isGameOver()&&this.announceGameOver())},isGameOver(){const e=e=>e.flat().filter((e=>1===e)).length;return 1===e(this.board)},isValidSquare(e,t){return 1!==this.board[e][t]&&(e!==this.selectedPiecePosition.rowIndex||t!==this.selectedPiecePosition.colIndex)&&this.thereIsBallBetween(e,t)},thereIsBallBetween(e,t){if(2===Math.abs(this.selectedPiecePosition.rowIndex-e)&&this.selectedPiecePosition.colIndex-t===0){const o=Math.max(this.selectedPiecePosition.rowIndex,e)-1;if(1===this.board[o][t])return this.removeBall(o,t),!0}else if(this.selectedPiecePosition.rowIndex-e===0&&2===Math.abs(this.selectedPiecePosition.colIndex-t)){const o=Math.max(this.selectedPiecePosition.colIndex,t)-1;if(1===this.board[e][o])return this.removeBall(e,o),!0}return!1},removeBall(e,t){this.board[e][t]=0},resetBoard(){this.board=this.getInitalBoard()},announceGameOver(){this.$emit("gameOver")}},watch:{puzzleId:{immediate:!0,handler(){this.board=this.getInitalBoard()}}}},y=o(89);const x=(0,y.Z)(O,[["render",w],["__scopeId","data-v-376bc670"]]);var I=x,D=o(1540),j=o(7211),k=o(3732),B={components:{GameBoard:I,Button:D.Z,Dialog:j.Z,Dropdown:k.Z},data(){return{isGameOver:!1,scrollPosition:0,dropdownOptions:[{label:"Puzzle 1",value:1},{label:"Puzzle 2",value:2},{label:"Puzzle 3",value:3},{label:"Puzzle 4",value:4},{label:"Puzzle 5",value:5},{label:"Puzzle 6",value:6}],selectedOption:{label:"Puzzle 1",value:1}}},computed:{backgroundStyle(){const e=`calc(-${this.scrollPosition}px / 5)`;return{background:`url('layton_background.jpg') no-repeat center ${e}`,backgroundSize:"cover"}}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){this.scrollPosition=window.scrollY},resetBoard(){this.$refs.gameBoard.resetBoard(),this.isGameOver=!1},handleGameOver(){this.isGameOver=!0}}};const S=(0,y.Z)(B,[["render",b],["__scopeId","data-v-189c2684"]]);var G=S;const N=(0,n.ri)(G);N.use(r.ZP),N.mount("#app")},6672:function(e,t,o){var n={"./puzzle_1.json":6424,"./puzzle_2.json":2906,"./puzzle_3.json":2943,"./puzzle_4.json":6958,"./puzzle_5.json":2694,"./puzzle_6.json":4741};function r(e){var t=l(e);return o(t)}function l(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=6672},4226:function(e,t,o){"use strict";e.exports=o.p+"img/ball.0f062d3d.png"},6424:function(e){"use strict";e.exports=JSON.parse('{"board":[[-1,-1,0,0,0,-1,-1],[-1,-1,0,1,0,-1,-1],[0,0,1,1,1,0,0],[0,0,0,1,0,0,0],[0,0,0,1,0,0,0],[-1,-1,0,0,0,-1,-1],[-1,-1,0,0,0,-1,-1]]}')},2906:function(e){"use strict";e.exports=JSON.parse('{"board":[[-1,-1,0,0,0,-1,-1],[-1,-1,0,1,0,-1,-1],[0,0,0,1,0,0,0],[0,1,1,1,1,1,0],[0,0,0,1,0,0,0],[-1,-1,0,1,0,-1,-1],[-1,-1,0,0,0,-1,-1]]}')},2943:function(e){"use strict";e.exports=JSON.parse('{"board":[[-1,-1,0,0,0,-1,-1],[-1,-1,0,1,0,-1,-1],[0,0,1,1,1,0,0],[0,1,1,1,1,1,0],[1,1,1,1,1,1,1],[-1,-1,0,0,0,-1,-1],[-1,-1,0,0,0,-1,-1]]}')},6958:function(e){"use strict";e.exports=JSON.parse('{"board":[[-1,-1,0,0,0,-1,-1],[-1,-1,0,0,0,-1,-1],[0,0,0,0,0,0,0],[0,0,1,0,1,0,0],[0,0,1,1,1,0,0],[-1,-1,1,1,1,-1,-1],[-1,-1,1,1,1,-1,-1]]}')},2694:function(e){"use strict";e.exports=JSON.parse('{"board":[[-1,-1,0,1,0,-1,-1],[-1,-1,1,1,1,-1,-1],[0,1,1,1,1,1,0],[1,1,1,0,1,1,1],[0,1,1,1,1,1,0],[-1,-1,1,1,1,-1,-1],[-1,-1,0,1,0,-1,-1]]}')},4741:function(e){"use strict";e.exports=JSON.parse('{"board":[[-1,-1,1,1,1,-1,-1],[-1,-1,1,1,1,-1,-1],[1,1,1,1,1,1,1],[1,1,1,0,1,1,1],[1,1,1,1,1,1,1],[-1,-1,1,1,1,-1,-1],[-1,-1,1,1,1,-1,-1]]}')}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,l){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],l=e[u][2];for(var a=!0,s=0;s<n.length;s++)(!1&l||i>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[s])}))?n.splice(s--,1):(a=!1,l<i&&(i=l));if(a){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,r,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/disappearing-layton-puzzle/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,l,i=n[0],a=n[1],s=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(s)var u=s(o)}for(t&&t(n);c<i.length;c++)l=i[c],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},n=self["webpackChunkdisappearing_layton_puzzle"]=self["webpackChunkdisappearing_layton_puzzle"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(8083)}));n=o.O(n)})();
//# sourceMappingURL=app.505d7e80.js.map