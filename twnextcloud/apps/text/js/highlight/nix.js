(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["highlight/nix"],{84802:e=>{e.exports=function(e){const n={keyword:["rec","with","let","in","inherit","assert","if","else","then"],literal:["true","false","or","and","null"],built_in:["import","abort","baseNameOf","dirOf","isNull","builtins","map","removeAttrs","throw","toString","derivation"]},t={className:"subst",begin:/\$\{/,end:/\}/,keywords:n},i={className:"string",contains:[{className:"char.escape",begin:/''\$/},t],variants:[{begin:"''",end:"''"},{begin:'"',end:'"'}]},s=[e.NUMBER_MODE,e.HASH_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,i,{begin:/[a-zA-Z0-9-_]+(\s*=)/,returnBegin:!0,relevance:0,contains:[{className:"attr",begin:/\S+/,relevance:.2}]}];return t.contains=s,{name:"Nix",aliases:["nixos"],keywords:n,contains:s}}}}]);
//# sourceMappingURL=nix.js.map?v=375922447fe2ed5878b6