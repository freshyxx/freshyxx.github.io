(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),c=a(4),s=a(3),i=a(5),l=a(0),u=a.n(l),o=a(8),d=a.n(o),m=(a(14),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={data:[]},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*").then(function(e){return e.json()}).then(function(t){e.setState({data:t})})}},{key:"render",value:function(){var e=this.state.data.map(function(e,t){return u.a.createElement("li",{key:t},e)});return u.a.createElement("ul",null,e)}}]),t}(l.Component));function h(e){return u.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext})}},{key:"renderSquare",value:function(e){var t=this;return u.a.createElement(h,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e="Next player: "+(this.state.xIsNext?"X":"O");return u.a.createElement("div",null,u.a.createElement("div",{className:"status"},e),u.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),u.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),u.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(l.Component),f=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{className:"game"},u.a.createElement("div",{className:"gmae-board"},u.a.createElement(v,null)),u.a.createElement("div",{className:"game-info"},u.a.createElement("div",null),u.a.createElement("ol",null))),u.a.createElement("div",{className:"app"},u.a.createElement(m,null)))}}]),t}(l.Component);d.a.render(u.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.540699d0.chunk.js.map