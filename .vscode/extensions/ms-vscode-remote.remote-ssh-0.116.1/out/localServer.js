(()=>{"use strict";var e={9854:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getCleanRemoteScript=void 0;const n=r(3070);t.getCleanRemoteScript=function(e,t){return t.platform===n.Platform.Windows?`\n\t\t\tGet-Process node | Where-Object Path -match ".*\\\\.vscode-server.*\\\\bin\\\\.*" | ForEach-Object {Stop-Process -Id $_.Id}\n\t\t\tRemove-Item -Force -Recurse $env:USERPROFILE\\${e}\\${t.cleanRemoteUserData?"":"bin"}\n\t\t`:`\n\t\t\tkill -9 \`ps ax | grep "out/server-main.js" | grep -v grep | awk '{print $1}'\`\n\t\t\trm -rf $HOME/${e}/${t.cleanRemoteUserData?"":"bin"}\n\t\t`}},3070:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.Platform=t.warnForPreviewPlatform=void 0,t.warnForPreviewPlatform=function(e,t){"aarch64"!==e.arch&&"arm64"!==e.arch||t.info(`** Note: Support for architecture "${e.arch}" is in preview **`)},function(e){e.Linux="linux",e.Windows="windows",e.MacOS="macOS"}(r||(t.Platform=r={}))},6296:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWindows=void 0,t.isWindows="win32"===process.platform},2593:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.validateCustomServerPath=t.parseStringMap=t.stripAllNewlines=t.escapeRegExpCharacters=t.splitLines=t.markLine=t.markLines=t.sanitizeCopyofScriptVars=t.sanitizeExtensionId=t.sanitizeConnectionToken=t.sanitizeInstallScriptOutput=t.stripTrailingNewline=t.quoteForShellIfNeeded=t.quoteForShell=t.stripEscapeSequences=t.lastNonemptyLine=void 0;const n=r(6928),i=r(6296),s=r(3070),o=/(?:(?:\x1b\[|\x9B)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~])|(:?\x1b\].*?\x07)/g;function a(e){return e&&(e=e.replace(o,"").replace(/\u0008/g,"").replace(/\r/g,"")),e}function c(e,t){return t?`"${e}"`:`'${e}'`}function l(e){return e.replace(/\r?\n$/,"")}function p(e){return e.replace(/[a-z]/g,"a").replace(/[A-Z]/g,"A").replace(/[0-9]/g,"1")}t.lastNonemptyLine=function(e){const t=d(e);if(i.isWindows){let e="";for(let r=t.length-1;r>=0;r--){const n=a(t[r]);if(n.match(/The process tried to write to a nonexistent pipe/))e=n;else if(n)return n}if(e)return e}const r=t.filter((e=>!!e));return r[r.length-1]},t.stripEscapeSequences=a,t.quoteForShell=c,t.quoteForShellIfNeeded=function(e,t){return e.match(/[^a-z0-9]/)?c(e,t):e},t.stripTrailingNewline=l,t.sanitizeInstallScriptOutput=function(e){return function(e){return e.replace(/(connectionToken|execServerToken)==(.*)==/,((e,t,r)=>`${t}==${p(r)}==`))}(e)},t.sanitizeConnectionToken=p,t.sanitizeExtensionId=function(e){return e.replace(/[^a-z0-9\.\-_]/gi,"")};const u={token:p};function d(e){return e.split(/\r?\n/g)}t.sanitizeCopyofScriptVars=function(e){const t={};for(const r in e){const n=e[r],i=u[r];t[r]=i?i(n):n}return t},t.markLines=function(e,t=""){return d(l(e)).map((e=>`${t}> ${e}`)).join("\n")},t.markLine=function(e,t=""){return`${t}> ${e}`},t.splitLines=d,t.escapeRegExpCharacters=function(e){return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g,"\\$&")},t.stripAllNewlines=function(e){return e.replace(/\r?\n/,"")},t.parseStringMap=function(e,t="==",r){e=e.trim().replace(/\r?\n/g,"");const n={};for(let i=0;i<e.length;){const s=e.indexOf(t,i),o=e.indexOf(t,s+t.length);if(-1===s||-1===o)return r.trace("Stopped parsing output early. Remaining text: "+e.substring(i)),n;const a=e.slice(s+t.length,o);n[e.slice(i,s)]=a,i=o+t.length;const c=e.substr(i).match(/^\s+/);c&&c[0]&&(i+=c[0].length)}return n};const h=/^[a-zA-Z]:[\\/](?:[^<>:"|?*\\/]+[\\/]?)*$/,f=/^\/[A-Za-z0-9_\/.\- ]*$/;t.validateCustomServerPath=function(e,t){return!e||!(t&&t!==s.Platform.Windows||!h.test(e)||!n.win32.isAbsolute(e))||!(t&&t!==s.Platform.Linux&&t!==s.Platform.MacOS||!f.test(e)||!n.posix.isAbsolute(e))}},5317:e=>{e.exports=require("child_process")},9140:e=>{e.exports=require("constants")},9896:e=>{e.exports=require("fs")},8611:e=>{e.exports=require("http")},6928:e=>{e.exports=require("path")},7016:e=>{e.exports=require("url")}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}var n={};(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0});const t=r(5317),i=r(9140),s=r(9896),o=r(8611),a=r(7016),c=r(2593),l=r(9854),p=r(6296),u=JSON.parse(process.argv[2]);let d=!1;function h(e,t,r,n){t.writeHead(r,{"Content-Type":"text/plain"}),t.end(n)}function f(e){console.log((0,c.markLines)(e,"local-server-"+u.serverId))}function m(e){console.error((0,c.markLines)(e,"local-server-"+u.serverId))}class w{constructor(){this.child=w.spawnSsh()}dispose(){this.child.kill()}static spawnSsh(){f(`Running ssh connection command: ${u.sshCommand} ${u.sshArgs.join(" ")}`);let e,r=u.sshCommand,n=u.sshArgs;p.isWindows&&(r.endsWith(".bat")||r.endsWith(".cmd"))&&(r=`"${r}"`,n=n.map((e=>`"${e=e.replace(/"/g,'\\"')}"`)),e=!0);const i=t.spawn(r,n,{stdio:["inherit","pipe","pipe"],windowsHide:!0,shell:e});let s=!1;return i.stdout.on("data",(e=>{s||process.stdout.write(e),e.toString().includes(": end")&&setTimeout((()=>{s=!0}),1e3)})),i.stderr.on("data",(e=>{s||process.stderr.write(e)})),i.on("exit",(()=>{d||(f("ssh child died, shutting down"),process.exit(0))})),f(`Spawned ssh, pid=${i.pid}`),i}write(e){this.child.stdin?.write(e)}}const v=new class{constructor(e){this.ipcHandlePath=e,this.server=o.createServer(((e,t)=>this.onRequest(e,t)));try{this.server.listen(this.ipcHandlePath),this.server.on("error",(e=>m(e.message)))}catch(e){m("Could not launch management server."),process.exit(1)}this.delayShutdown()}delayShutdown(){this.shutdownTimer&&clearTimeout(this.shutdownTimer),this.shutdownTimer=setTimeout((()=>{this.dispose(),S(),f("Timed out"),process.exit(0)}),5e3)}killRemote(e){const t=JSON.parse(e),r=(0,l.getCleanRemoteScript)(u.serverDataFolderName,t);return g.write(r),`Killing remote server with script:\n ${r}`}onRequest(e,t){if("GET"!==e.method&&"POST"!==e.method)return t.writeHead(405,{"Content-Type":"text/plain"}),void t.end(`Unsupported method ${e.method}`);if(!e.url)return h(0,t,400,"Bad request.");const r=a.parse(e.url,!0).pathname;if(!r)return h(0,t,400,"Bad request.");if("/kill-remote"===r&&"POST"===e.method){let r="";e.on("data",(e=>{r+=e.toString()})),e.on("end",(()=>{const e=this.killRemote(r);t.writeHead(200),t.end(e)}))}else"/delay-shutdown"===r?(this.delayShutdown(),t.writeHead(200),t.end("OK")):(t.writeHead(404,{"Content-Type":"text/plain"}),t.end("Not found"))}dispose(){this.server.close()}}(u.ipcHandlePath),g=new w;function S(){if(d=!0,v.dispose(),g.dispose(),u.dataFilePath&&s.existsSync(u.dataFilePath))try{const e=s.readFileSync(u.dataFilePath);JSON.parse(e.toString()).pid===process.pid&&s.unlinkSync(u.dataFilePath)}catch(e){}}process.on("exit",(()=>{S()})),process.on("SIGTERM",(()=>{S(),process.exit(i.SIGTERM)}))})();var i=exports;for(var s in n)i[s]=n[s];n.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();
//# sourceMappingURL=localServer.js.map