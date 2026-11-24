// Generated playback-only bundle; do not edit.
// V5/signing sources: webos/service (GPL-3.0-only portions; see THIRD_PARTY_NOTICES.md).
(function(){'use strict';var factories=Object.create(null),cache=Object.create(null);
// Node Buffer slice is a view, whereas TypedArray.slice copies. The carrier
// modifies slices in place, so this compatibility detail is part of the wire ABI.
Buffer.prototype.slice=function(start,end){
  var n=this.length;start=start==null?0:Math.trunc(start);end=end==null?n:Math.trunc(end);
  start=start<0?Math.max(n+start,0):Math.min(start,n);end=end<0?Math.max(n+end,0):Math.min(end,n);
  var view=new Uint8Array(this.buffer,this.byteOffset+start,Math.max(0,end-start));Object.setPrototypeOf(view,Buffer.prototype);return view;
};
Buffer.prototype.subarray=Buffer.prototype.slice;
Buffer.prototype.copy=function(target,targetStart,sourceStart,sourceEnd){
  targetStart=targetStart||0;sourceStart=sourceStart||0;sourceEnd=sourceEnd==null?this.length:sourceEnd;
  if(targetStart<0||sourceStart<0||sourceEnd<0)throw new RangeError('buffer copy range');
  var n=Math.max(0,Math.min(sourceEnd,this.length)-sourceStart);n=Math.max(0,Math.min(n,target.length-targetStart));
  Uint8Array.prototype.set.call(target,this.subarray(sourceStart,sourceStart+n),Math.min(targetStart,target.length));return n;
};
factories["crypto"]=function(module,exports,require){
'use strict';
// Only generic byte primitives cross into Go. No native registration/signer/model API.
function createHash(name) {
  var chunks=[];
  return {update:function(data){chunks.push(Buffer.from(data));return this;},digest:function(enc){var b=__resolverHost.hash(name,Buffer.concat(chunks));chunks=[];return enc?b.toString(enc):b;}};
}
function cipher(name,key,iv,decrypt) {
  var chunks=[],padding=true;
  return {setAutoPadding:function(value){padding=!!value;return this;},update:function(data){chunks.push(Buffer.from(data));return Buffer.alloc(0);},final:function(){var out=__resolverHost.cipher(name,key,iv,Buffer.concat(chunks),decrypt,padding);chunks=[];return out;}};
}
module.exports={createHash:createHash,randomBytes:function(n){return __resolverHost.random(n);},createCipheriv:function(n,k,i){return cipher(n,k,i,false);},createDecipheriv:function(n,k,i){return cipher(n,k,i,true);}};

};
factories["zlib"]=function(module,exports,require){
module.exports={gzipSync:function(b,o){return __resolverHost.gzip(b,o&&o.level!=null?o.level:-1)},gunzipSync:function(b){return __resolverHost.gunzip(b)}};
};
factories["passport-sign"]=function(module,exports,require){
(function () {
  'use strict';

  var crypto = require('crypto');
  var SBOX = Buffer.from('fa7d086b9c59b34b045f39d0384a91990067a6209ff54d827326eedf18668333800319fbd9feaeaaa9b052c60bf379254e78b436ac5d1a279e88dbbd3c63ec4915c1301fdcb856d46ccdca0943c835a3ef1ef496d2fc0e727b9484d1ea455a62023fd31281342bdd7ee628f2a54613013b21f66137292a0ded8cafbf9d5cbb24760f75e45389e1988db19a65704f544c58ab6e6f8b23c407110cbacfa0a48ed8053d14b2da74c3d7e7bed67fde48163e8590a155b7774222c986502e17f964312c9bf16d1c4468e3e9a89397cb3257ebe5716aadc0ccc7c5fd601da22d47a7e251695e7ace0a41b6958ff7b987e03a06108ab5f85bd5f0bc92ff7c2fc2e81b40ec1bdabdba98910cb22b83413467fb0ad876b546055961237590872ae350154cacb179ebaee595470468f0863d518b0fca8ee4b94ef21282bc0ed5f7ef2825cf5b5de96a5502e133be93e7f5ad9d3e3924a8e2fa1757d07a0d0830d6b8a38dfd079ac41e6e226497d21db0bf45663f6cdddb2780a711dca6c552f8c0b6c85c0073607ba01913aac935484bd3a4cd9f99f3104440547e29f4061fa2aba12f3cf6af856236217f5edf201ab3b4e6ff72848f6526945a77ea4378c74acc2c146bc6e87453fcd41cce317003188c96383289f13a5fd7f9a969b7633758c23bc371cb9e92018a0b4d889bbb4f6d6fe0fea549de561609ed9cc12dee817dd97cd12e425b4dc1a65dea44fd454e1ba13fd189e17d2faadbabad59cbb1ce9a28c9e0f670394ad7ff30f5ddbc573b118db2ee00b6e61a5a7cf9dec4cd2e80bbb94ca59f8408c66f426cf027e78b3a9c51fb6721754131a7ca20432ab7bfd97af2b5f88c2c23834f8f60a004133714e301c563665c7481df58bd68903dd2b334f419933229d649ae0d4bd8079eac1e2d0b40b872ba761071a8e4561d48fee5c24791da87269d1f886bc098be25099733a385165e7fdc6e54e9f7a9c8e8c377d0822bec02628a920e3eb00f05f3f19678388636183c24cf0ab453cc6165a4c794d5157e6def792235126a8e5206557b46645095e20cedd31703a29b99eb1cfcafd47369fa5ff72c1ebfc8e1f39f76807148aa94ad64fb89c660c332b34dd2e044dd5fa8b1c7682334c96d127fb7eb15bea9d17893a00c92a4d747e38ac270ab26419a79a7d814858fc06f56d08c11b92e3ce29dcf0ede035d463ecd38430f335ad91a656c223bfc30a688ea37a2b48d8e519cd640eef9f884f4ae97e9ca0a456757042f835cd5c5c482b6a391981f4aac96816ecb1b0908af1895497d54edfa16313adab866f5a5f1fe10010674cc63df7c2825f6ceb24f8be5bc8769bb8621070036e70b50599b1ce862581961f2bd275eba1de699423d0d2ab5dc5b29f02d4c537b6a734e3f75ff4ba1351755723920d3b0fdef02ec777ee42bdb90c1059e7ad4526b2413', 'hex');
  var ORDERS = Buffer.from('0f0704000908030a060b050d0e010c020f05080c0009020103070e060b0a0d04060500070c000a04080f010b0d09020e060b02050403080101070a000d0c090e0d070e0f0b0208030c0509010004060a0d0902060f0b0a040807000c0503010e0c090f07060f030e020d0405010b0a000c050a090e0802040407030f01060b000b0f0408020a0700090d06010e03050c0b060a0508020c03070f0e090d0001040906080f050800040a0b030d01020c0e090d0c0604070a03030f00080105020e01000d0f090a0b0e0402080703060c0501080a0c0f0905060b000304020e070d04080f000c0f0e0d0a01060207090503040205080d0b0a0606000e0f070c09030a08040f000b01060d0c0709030e05020a070b050f00020e0108030d0c0609040d070f08050f06040b0a0e0c090002030d0c020704010b0e0e08060f09050003', 'hex');
  var MD5C = [0xa7aefe20,0x7149f1d6,0x47e4ca07,0xe9b58f67,0x93b924de,0xc614d0f5,0x38afe0ef,0xb2bbad73,0xe24444c3,0x9d3aec9b,0xdf7b37e4,0xd8b16d40,0xf8ac31b8,0x76b9a90b,0x31d833ee,0x953fce64,0x353595a4,0x4609c13b,0x36925008,0x8c6d0925,0x5df5c177,0x1cfbf52b,0x8a4fa7f0,0x114ca35e,0x8193f984,0x7a7a8733,0x316ab4d5,0x3c20cfc9,0xa6d84453,0x3a18500c,0x798ec47a,0x97a76b28,0x66c4ff96,0x51716443,0x0dd2fc3b,0xb5696da7,0xbbeb3ac5,0x5c53d204,0xd32608ce,0x7279b9ec,0xf4188ecf,0xf7d793db,0x332cc491,0xab76ae15,0x9bebe727,0x18a01384,0x5be9f8a7,0x5f90a754,0x39b663c0,0x36673c83,0x7c92f514,0x9d7d94d7,0xe2e8d9aa,0x5f7e9ea9,0x7abd4551,0x569e05da,0x40a25632,0x3df5a9a5,0xbab37d80,0x454286dc,0x3f5d4e78,0x03d7b75d,0xb1fe4af7,0xa5ab26a3];

  function u32(n) { return n >>> 0; }
  function rol32(x, n) { n &= 31; return n ? ((x << n) | (x >>> (32 - n))) >>> 0 : x >>> 0; }
  function rol8(x, n) { n &= 7; return n ? ((x << n) | (x >>> (8 - n))) & 255 : x & 255; }
  function reverse8(x) { x = x & 255; var y = 0; for (var i = 0; i < 8; i++) y |= ((x >>> i) & 1) << (7 - i); return y; }
  function le32(n) { var b = Buffer.alloc(4); b.writeUInt32LE(n >>> 0, 0); return b; }
  function md5(data) { return crypto.createHash('md5').update(data).digest(); }
  function sm3(data) {
    var bitLength = data.length * 8, padded = Buffer.concat([data, Buffer.from([0x80])]);
    while (padded.length % 64 !== 56) padded = Buffer.concat([padded, Buffer.from([0])]);
    var tail = Buffer.alloc(8); tail.writeUInt32BE(Math.floor(bitLength / 4294967296), 0); tail.writeUInt32BE(bitLength >>> 0, 4); padded = Buffer.concat([padded, tail]);
    var v = [0x7380166f,0x4914b2b9,0x172442d7,0xda8a0600,0xa96f30bc,0x163138aa,0xe38dee4d,0xb0fb0e4e];
    function p0(x) { return (x ^ rol32(x, 9) ^ rol32(x, 17)) >>> 0; }
    function p1(x) { return (x ^ rol32(x, 15) ^ rol32(x, 23)) >>> 0; }
    for (var offset = 0; offset < padded.length; offset += 64) {
      var w = new Array(68), wp = new Array(64);
      for (var j = 0; j < 16; j++) w[j] = padded.readUInt32BE(offset + j * 4);
      for (j = 16; j < 68; j++) w[j] = (p1(w[j-16] ^ w[j-9] ^ rol32(w[j-3],15)) ^ rol32(w[j-13],7) ^ w[j-6]) >>> 0;
      for (j = 0; j < 64; j++) wp[j] = (w[j] ^ w[j+4]) >>> 0;
      var a=v[0], b=v[1], c=v[2], d=v[3], e=v[4], f=v[5], g=v[6], h=v[7];
      for (j = 0; j < 64; j++) {
        var t = j < 16 ? 0x79cc4519 : 0x7a879d8a;
        var ff = j < 16 ? (a ^ b ^ c) : ((a & b) | (a & c) | (b & c));
        var gg = j < 16 ? (e ^ f ^ g) : ((e & f) | (~e & g));
        var ss1 = rol32((rol32(a,12) + e + rol32(t,j)) >>> 0, 7);
        var ss2 = (ss1 ^ rol32(a,12)) >>> 0;
        var tt1 = (ff + d + ss2 + wp[j]) >>> 0;
        var tt2 = (gg + h + ss1 + w[j]) >>> 0;
        d=c; c=rol32(b,9); b=a; a=tt1; h=g; g=rol32(f,19); f=e; e=p0(tt2);
      }
      v = [(v[0]^a)>>>0,(v[1]^b)>>>0,(v[2]^c)>>>0,(v[3]^d)>>>0,(v[4]^e)>>>0,(v[5]^f)>>>0,(v[6]^g)>>>0,(v[7]^h)>>>0];
    }
    var out = Buffer.alloc(32); for (var k=0;k<8;k++) out.writeUInt32BE(v[k],k*4); return out;
  }
  function passportIV(data, iv) {
    for (var i=0;i<data.length;i++) { var x=data[i]; if ((i&1)===0) iv=(iv>>>4)^iv^(iv<<6)^x; else iv=~((iv>>>7)^iv^(x|(iv<<12))); iv >>>= 0; }
    return iv >>> 0;
  }
  function branch(query, body, ts) {
    var q=sm3(Buffer.from(query)), m=body.length?md5(body):Buffer.alloc(16);
    var iv=passportIV(le32(ts),passportIV(m,passportIV(q,0x20230928)));
    return {iv:iv,q:q,m:m};
  }
  function queryEscape(value) { return encodeURIComponent(String(value)).replace(/[!'()*]/g,function(c){return '%'+c.charCodeAt(0).toString(16).toUpperCase();}).replace(/%20/g,'+'); }
  function sortedQuery(values) { return Object.keys(values).sort().map(function(k){return queryEscape(k)+'='+queryEscape(values[k]);}).join('&'); }
  function appendVarint(out, value) { var n=Math.floor(value); while(n>127){out.push((n&127)|128); n=Math.floor(n/128);} out.push(n&127); }
  function protoSint(out, field, n) { appendVarint(out,field<<3); appendVarint(out,n<0?(-n*2-1):(n*2)); }
  function protoBlob(out, field, data) { if(!data.length)return; appendVarint(out,(field<<3)|2); appendVarint(out,data.length); Array.prototype.push.apply(out,data); }
  function protoText(out, field, text) { protoBlob(out,field,Buffer.from(text)); }
  function protoFloat(out,field,n) { appendVarint(out,(field<<3)|5); var b=Buffer.alloc(4); b.writeFloatLE(n,0); Array.prototype.push.apply(out,b); }
  function protoDevice(deviceID) {
    var d=[]; protoSint(d,1,1);protoSint(d,2,2);protoText(d,3,'8662');protoText(d,4,deviceID);protoText(d,5,'Ai6svO3PyrwDOUSmO6ZcResxu');protoText(d,6,'!noperm!');protoSint(d,7,-888888);protoSint(d,8,-888888);protoSint(d,9,3);protoSint(d,10,-888888);protoText(d,11,'!notset!');protoText(d,12,'Asia/Shanghai,8');protoText(d,13,'zh_CN');protoSint(d,14,4);
    [255.24993896484375,35.58599090576172,3.467449188232422,3.467449188232422,255.1754913330078,42.17544174194336].forEach(function(x,i){protoFloat(d,16+i,x);});
    protoText(d,22,'16');protoSint(d,23,41);protoSint(d,24,36);for(var f=25;f<=28;f++)protoSint(d,f,1728388016635+(f===28?2:0));protoSint(d,29,-1);
    ['25053RT47C','Redmi','25053RT47C','25053RT47C','Redmi','Redmi','Redmi'].forEach(function(x,i){protoText(d,30+i,x);});protoSint(d,38,31);return Buffer.from(d);
  }
  function passportProto(query,ts,nonce,deviceID,q,m,f13,version) {
    version=version||'7.3.5.32';
    var device=protoDevice(deviceID), report=[], env=[], count=[], p=[];
    protoSint(report,1,ts);protoSint(report,2,-2);protoSint(report,4,200);
    protoSint(env,1,110);protoSint(env,2,146331399);protoSint(env,3,146331396);protoSint(env,5,7);protoText(env,6,'v04.06.04.03-bugfix');protoSint(env,7,11001);protoBlob(env,12,device);protoBlob(env,13,report);protoText(env,14,version);
    protoSint(count,1,111);protoSint(count,2,10);protoSint(count,3,694367);protoSint(count,5,586952199);
    protoBlob(p,1,Buffer.from('f7e85ffad7d7dc3bd62ac87057cf6118','hex'));protoSint(p,2,3);protoSint(p,3,nonce);protoText(p,4,'8662');protoText(p,5,deviceID);protoText(p,6,'1588093228');protoText(p,7,version);protoText(p,8,'v04.06.04-ml-android');protoSint(p,9,67503104);protoBlob(p,10,Buffer.from('4001000000000000','hex'));protoSint(p,12,ts);protoBlob(p,13,f13);protoBlob(p,14,q.slice(0,6));protoBlob(p,15,Buffer.from(count));protoText(p,16,'AXYQOS6n2m60x1fVZHIrH3iol');protoSint(p,17,ts);protoBlob(p,19,sm3(Buffer.concat([Buffer.from(query),m,Buffer.from('none')])));protoText(p,20,'none');protoSint(p,21,312);protoBlob(p,23,Buffer.from(env));protoText(p,24,'{"cmr":16777216,"cmr2":16777216,"un_h":1879194040,"vpn":0,"kd":0,"fkd":3672518972,"pd":-1872573247,"dyn":"","do":0,"tk":true}');return Buffer.from(p);
  }
  function passportF13(iv,ts,q,m) {
    var group=Math.floor(((iv&15)-2)/3), seeds=[0x8980f29b,0xeb549c7f,0xb08726db,0xd40cb5e6,0xe8f559e4], count=(seeds[group]+ts)>>>0, shift=(count+5)&7;
    var pad=Buffer.from('8496779dd4150bf8','hex');
    for(var pi=0;pi<pad.length;pi++)pad[pi]=(pad[pi]*257>>>shift)&255;
    var msg=Buffer.concat([q,m,le32(ts),pad,Buffer.from([0xa0,1,0,0])]);
    var start=[0x79e0f2fb,0xc8b52570,0xebc2f8cd,0x7c104d93], end=[0x19be4866,0xe85986b4,0xe19b326e,0x71d1d7d4], shifts=[[7,12,17,22],[5,9,14,20],[4,11,16,23],[6,10,15,21]];
    // The fourth round uses the exact protocol rotation values below.
    shifts[2]=[4,11,16,23]; shifts[3]=[6,10,15,21];
    start=start.map(function(x){return rol32(x,-(count&31));});end=end.map(function(x){return rol32(x,-((count+6)&31));});
    var a=start[0],b=start[1],c=start[2],d=start[3];
    for(var i=0;i<64;i++){var round=Math.floor(i/16), f=round===0?((b&c)|(~b&d)):round===1?((b&d)|(c&~d)):round===2?(b^c^d):(c^(b|~d));var idx=ORDERS[group*64+i];var word=msg.readUInt32LE(idx*4);var x=(b+rol32((a+f+word+rol32(MD5C[i],-((count+1)&31)))>>>0,shifts[round][i%4]))>>>0;a=d;d=c;c=b;b=x;}
    var result=Buffer.alloc(20);[a,b,c,d].forEach(function(x,i){result.writeUInt32LE(((start[i]+x)^end[i])>>>0,i*4);});var check=0x20220420;for(i=0;i<12;i++){var v=result[i];check=i&1?((check>>>5)^check^(~(v|(check<<11))))>>>0:((check>>>3)^check^v^(check<<7))>>>0;}result.writeUInt32LE(((check|4)^0x1000000)>>>0,16);return result;
  }
  function pair(lo,hi){return {lo:lo>>>0,hi:hi>>>0};}
  function pairReadLE(b,o){return pair(b.readUInt32LE(o),b.readUInt32LE(o+4));}
  function pairWriteLE(b,o,x){b.writeUInt32LE(x.lo>>>0,o);b.writeUInt32LE(x.hi>>>0,o+4);}
  function pairXor(a,b){return pair(a.lo^b.lo,a.hi^b.hi);}
  function pairAdd(a,b){var lo=(a.lo+b.lo)>>>0;return pair(lo,(a.hi+b.hi+(lo<a.lo?1:0))>>>0);}
  function pairRotl(a,n){n&=63;if(!n)return pair(a.lo,a.hi);if(n===32)return pair(a.hi,a.lo);if(n<32)return pair((a.lo<<n)|(a.hi>>>(32-n)),(a.hi<<n)|(a.lo>>>(32-n)));n-=32;return pair((a.hi<<n)|(a.lo>>>(32-n)),(a.lo<<n)|(a.hi>>>(32-n)));}
  function pairRotr(a,n){return pairRotl(a,64-(n&63));}
  function helios(ts,nonce){var key=md5(Buffer.concat([le32(nonce),Buffer.from('8662')]));var raw=Buffer.from(key.toString('hex'));var k=pairReadLE(raw,0), pending=[pairReadLE(raw,8),pairReadLE(raw,16),pairReadLE(raw,24)], rounds=[k];for(var i=0;i<33;i++){var x=pairXor(pairAdd(pairRotr(pending[0],8),k),pair( i,0));pending=[pending[1],pending[2],x];k=pairXor(x,pairRotl(k,3));rounds.push(k);}var text=Buffer.from(String(ts)+'-1588093228-8662'),pad=16-text.length%16,plain=Buffer.concat([text,Buffer.alloc(pad,pad)]),out=Buffer.concat([le32(nonce),Buffer.alloc(plain.length)]);for(var at=0;at<plain.length;at+=16){var a=pairReadLE(plain,at),b=pairReadLE(plain,at+8);for(i=0;i<rounds.length;i++){b=pairXor(rounds[i],pairAdd(a,pairRotr(b,8)));a=pairXor(b,pairRotl(a,3));}pairWriteLE(out,4+at,a);pairWriteLE(out,12+at,b);}return out.toString('base64');}
  function gorgon(query,body,ts,nonce){var q=md5(Buffer.from(query)),m=body.length?md5(body):Buffer.alloc(16),data=Buffer.alloc(20);q.copy(data,0,0,4);m.copy(data,4,0,4);data.writeUInt32LE(67503104,12);data.writeUInt32BE(ts>>>0,16);var key=[0x4a,0x40,0x16,(nonce>>>8)&255,0x47,0x6c,1,nonce&255],s=new Array(256);for(var i=0;i<256;i++)s[i]=i;var j=0;for(i=0;i<256;i++){j=(j+s[i]+key[i%8])&255;s[i]=s[j];}j=0;for(i=0;i<20;i++){j+=s[i+1];var y=s[j&255];s[i+1]=y;data[i]^=s[(y*2)&255];}for(i=0;i<20;i++){data[i]=rol8(data[i],4);var next=i<19?data[i+1]:data[0];data[i]=~(reverse8(data[i]^next)^20)&255;}var head=Buffer.from([0x84,4,nonce&255,(nonce>>>8)&255,0x40,1]);return Buffer.concat([head,data]).toString('hex');}
  function xmxor(data,key){var out=Buffer.alloc(data.length);for(var i=0;i<data.length;i++){var k=(i*4)&28,a=key[k],b=key[k+1],v=(~(rol8(data[i],4)+a)^b)&255;v=(rol8(v,3)+b)&255;out[out.length-1-i]=~(v^a)&255;}var flag=out[out.length-1]^out[out.length-2],old=out[0];out[0]=(out[0]+(~flag))&255;out[1]=(out[1]+(out[0]^out[out.length-1]^254))&255;out[2]=(out[2]+((flag-old)^rol8(out[1],3)^2))&255;for(i=0;i<out.length-4;i++)out[i+3]=(out[i+3]+(~(rol8(out[i+2],3)^out[i+1]^(i+3))))&255;out[out.length-1]^=out[out.length-2];var sum=0;for(i=1;i<out.length;i++)sum=(sum+out[i])&255;out[0]=((out[0]^out[1])+sum)&255;return out;}
  function aesV3(data,ts){if(data.length<248)throw new Error('signature payload is too short');var branch=ts&3,box=SBOX.slice(branch*256,(branch+1)*256),con=[[1,0,2,3],[2,0,3,1],[0,1,3,2],[1,0,2,3]][branch],orders=[[0,9,14,11,4,13,2,7,8,1,6,15,12,5,10,3],[0,9,14,15,4,13,2,7,8,1,6,3,12,5,10,11],[0,9,14,7,4,13,2,11,8,1,6,3,12,5,10,15],[0,9,14,11,4,13,2,7,8,1,6,15,12,5,10,3]][branch],init=[0xca025ddc,0x823dc546,0xc9420583,0xc298225f][branch],key=Buffer.from('f1593376766ea98d34f31b057a9d5be4','hex'),mk=Buffer.alloc(48),r=8;for(var j=0;j<16;j++)mk[j]=key[j]^((init>>>((j%4)*8))&255);for(j=4;j<12;j++){var prev=Buffer.from(mk.slice(j*4-4,j*4));if(j%4===0)prev=Buffer.from([((init>>> (r&24))&255)^box[prev[1]],box[prev[2]],box[prev[3]],box[prev[0]]]);r+=2;for(var k=0;k<4;k++)mk[j*4+k]=prev[k]^mk[j*4+k-16];}
    function block(src){var b=Buffer.from(src),prev,z,index,col,aa,cc,dd,ee,t;function add(base){for(z=0;z<b.length;z++)b[z]^=mk[base+Math.floor(z/4)*4+con[z%4]];}add(0);for(var round=1;round<=2;round++){prev=Buffer.from(b);for(z=0;z<b.length;z++){index=orders[z];b[z]=box[prev[con[Math.floor(index/4)]*4+index%4]];}if(round===1){prev=Buffer.from(b);for(z=0;z<b.length;z++)b[z]=prev[Math.floor(z/4)*4+con[z%4]];var xt=function(x){return x&128?((x<<1)^0x1b)&255:(x<<1)&255;};for(col=0;col<4;col++){aa=b[col];cc=b[4+col];dd=b[8+col];ee=b[12+col];t=aa^cc^dd^ee;b[col]^=t^xt(aa^cc);b[4+col]^=t^xt(cc^dd);b[8+col]^=t^xt(dd^ee);b[12+col]^=t^xt(ee^aa);}}add(round*16);}for(z=0;z<b.length;z++)b[z]^=mk[16+z];return b;}
    var plain=Buffer.alloc(32);for(j=0;j<31;j++){var d=data.slice(j*8),v=d[0];plain[j]=((v>>>4)&2)|(d[1]&64)|((d[2]>>>2)&1)|((d[3]<<3)&128)|((d[4]>>>1)&4)|((d[5]<<3)&16)|((d[6]<<5)&32)|((d[7]>>>4)&8);}plain[31]=1;var previous=Buffer.from('1fe109a4125283f418de9e051a969e12','hex'),encrypted=Buffer.alloc(32);for(j=0;j<32;j+=16){for(k=0;k<16;k++)plain[j+k]^=previous[k];previous=block(plain.slice(j,j+16));previous.copy(encrypted,j);}var out=Buffer.concat([Buffer.from([encrypted[31]]),data]);for(j=0;j<31;j++){d=out.slice(1+j*8);v=encrypted[j];d[0]=(d[0]&~32)|(v<<4&32);d[1]=(d[1]&~64)|(v&64);d[2]=(d[2]&~4)|(v<<2&4);d[3]=(d[3]&~16)|(v>>>3&16);d[4]=(d[4]&~8)|(v<<1&8);d[5]=(d[5]&~2)|(v>>>3&2);d[6]=(d[6]&~1)|(v>>>5&1);d[7]=(d[7]&127)|(v<<4&128);}return out;}
  function medusa(query,ts,nonce,hashRand,xmRand,deviceID,iv,q,m,version){var f13=passportF13(iv,ts,q,m),p=passportProto(query,ts,nonce,deviceID,q,m,f13,version),signKey=Buffer.from('8ebdfa3806ecc5cee79423e6029ed82540bc2218bb7eaef71cb691f7aa8aa2f5','hex'),key=sm3(Buffer.concat([signKey,le32(hashRand),signKey])),d1=(hashRand>>>16)&255,seed=le32(~((((d1<<11)|(hashRand>>>24))^(d1>>>5)^d1)>>>0));p=Buffer.concat([Buffer.from('4001000000000000','hex'),xmxor(p,key)]);p=Buffer.from(p).reverse();for(var i=0;i<p.length;i++)p[i]^=seed[(~i)&3];var check=(0x18000001|((q[0]&63)<<14)|((f13[0]&63)<<8))>>>0;var body=Buffer.concat([Buffer.from([0x35]),le32(xmRand),le32(check),p,le32(hashRand).slice(2)]);var encrypted=aesV3(body,ts),header=Buffer.from('03000000f7e85ffad7d7dc3bd62ac87057cf6118','hex');for(i=0;i<20;i+=4)header.writeUInt32LE((header.readUInt32LE(i)^ts)>>>0,i);return Buffer.concat([header,le32(hashRand).slice(0,2),Buffer.from([0,1]),encrypted]);}
  function tune(values,body,stamp){for(var i=0;i<256;i++){values._rticket=String(stamp+i);var query=sortedQuery(values),b=branch(query,body,Math.floor(stamp/1000));if(((b.iv&15)%3)===2)return {query:query,branch:b,stamp:stamp+i};}throw new Error('unable to select signature branch');}
  function random32(){return crypto.randomBytes(4).readUInt32LE(0);}
  function sign(values,bodyBytes,stamp,deviceID,version){var tuned=tune(values,bodyBytes,stamp),query=tuned.query,b=tuned.branch,ts=Math.floor(stamp/1000)>>>0,n=[random32(),random32(),random32(),random32()],med=medusa(query,ts,n[0],n[1],n[2],deviceID,b.iv,b.q,b.m,version),h={
    'X-Khronos':String(ts),'X-SS-Req-Ticket':String(values._rticket),'X-Helios':helios(ts,n[3]),'X-Medusa':med.toString('base64'),'X-Gorgon':gorgon(query,bodyBytes,ts,n[0]&65535)
  };if(bodyBytes.length)h['X-SS-STUB']=b.m.toString('hex').toUpperCase();return {query:query,headers:h};}
  // Playback 551 protocol uses the existing SM3 and 32-bit-pair arithmetic so
  // this service also runs on webOS Node versions without native 64-bit integers.
  function playbackPad(data) {
    var n = 16 - data.length % 16;
    return Buffer.concat([data, Buffer.alloc(n, n)]);
  }
  function playbackParam(query, name) {
    var parts = query.split('&');
    for (var i = 0; i < parts.length; i++) {
      var at = parts[i].indexOf('='), key = at < 0 ? parts[i] : parts[i].slice(0, at);
      try {
        if (decodeURIComponent(key.replace(/\+/g, ' ')) === name) return decodeURIComponent((at < 0 ? '' : parts[i].slice(at + 1)).replace(/\+/g, ' '));
      } catch (ignored) {}
    }
    return '';
  }
  function playbackVarint(out, field, value) {
    appendVarint(out, field * 8); appendVarint(out, value >>> 0);
  }
  function playbackBlob(out, field, value) {
    appendVarint(out, field * 8 + 2); appendVarint(out, value.length);
    Array.prototype.push.apply(out, value);
  }
  function playbackText(out, field, value) { playbackBlob(out, field, Buffer.from(value)); }
  function playbackSimonKeys(seed) {
    var raw = seed || Buffer.from('fc78e0a9657a0c748ce51559903ccf03510e51d3cff232d71343e88a321c5304', 'hex');
    var sequence = pair(0x046d678b, 0x3dc94c3a), keys = [];
    for (var i = 0; i < 4; i++) keys.push(pairReadLE(raw, i * 8));
    for (i = 4; i < 72; i++) {
      var x = pairXor(pairRotr(keys[i - 1], 3), keys[i - 3]);
      var bit = pairRotr(sequence, (i - 4) % 62).lo & 1;
      keys.push(pairXor(pairXor(pairXor(pair(~keys[i - 4].lo, ~keys[i - 4].hi), x), pairRotr(x, 1)), pair(bit ^ 3, 0)));
    }
    return keys;
  }
  function playbackArgus(query, body, ts, nonce, registered) {
    var p = [], counters = [], device = [];
    playbackVarint(p, 1, 1077940818); playbackVarint(p, 2, 2); playbackVarint(p, 3, registered ? nonce & 0x7fffffff : nonce);
    playbackText(p, 4, playbackParam(query, 'aid') || '1967');
    playbackText(p, 5, playbackParam(query, 'device_id'));
    playbackText(p, 6, '1611921764');
    playbackText(p, 7, playbackParam(query, 'version_name'));
    playbackText(p, 8, registered ? 'v04.07.01-ml-android' : 'v04.04.05-ov-android');
    playbackVarint(p, 9, registered ? 135135744 : 134744640); playbackBlob(p, 10, Buffer.alloc(8));
    playbackVarint(p, 11, 0); playbackVarint(p, 12, ts << 1);
    playbackBlob(p, 13, sm3(body.length ? md5(body) : Buffer.alloc(16)).slice(0, 6));
    playbackBlob(p, 14, sm3(query ? Buffer.from(query) : Buffer.alloc(16)).slice(0, 6));
    playbackVarint(counters, 1, 1); playbackVarint(counters, 2, 1);
    playbackVarint(counters, 3, 1); playbackVarint(counters, 7, 0xc792eccc);
    playbackBlob(p, 15, Buffer.from(counters)); playbackText(p, 16, registered ? '' : playbackParam(query, 'iid'));
    playbackText(p, 20, 'none'); playbackVarint(p, 21, 738);
    if (registered) { playbackText(device, 1, '25053RT47C'); playbackText(device, 2, '16'); playbackText(device, 3, 'update_64'); playbackVarint(device, 4, 2147483648); }
    else { playbackText(device, 1, 'NX551J'); playbackVarint(device, 2, 8196); playbackVarint(device, 4, 0x80e0d800); }
    playbackBlob(p, 23, Buffer.from(device)); playbackVarint(p, 25, 2);
    var registeredKey = Buffer.from('ac1adaae95a7af94a5114ab3b3a97dd80050aa0a39314c40528caec95256c28c', 'hex');
    var plain = playbackPad(Buffer.from(p)), keys = playbackSimonKeys(registered ? sm3(Buffer.concat([registeredKey, Buffer.from('3ccc567b','hex'), registeredKey])) : null);
    for (var at = 0; at < plain.length; at += 16) {
      var a = pairReadLE(plain, at), b = pairReadLE(plain, at + 8);
      for (var i = 0; i < keys.length; i++) {
        var r1 = pairRotl(b, 1), r8 = pairRotl(b, 8);
        var next = pairXor(pairXor(pairXor(a, pair(r1.lo & r8.lo, r1.hi & r8.hi)), pairRotl(b, 2)), keys[i]);
        a = b; b = next;
      }
      pairWriteLE(plain, at, a); pairWriteLE(plain, at + 8, b);
    }
    if (registered) {
      var registeredMask = Buffer.from('d04ffdffd04ffdff','hex');
      for (i = 0; i < plain.length; i++) plain[i] ^= registeredMask[i % 8];
      var registeredFrame = Buffer.concat([registeredMask, plain]); registeredFrame.reverse();
      registeredFrame = playbackPad(Buffer.concat([Buffer.from('a6e783ee7001100918','hex'), registeredFrame, Buffer.from('567b','hex')]));
      var registeredCipher = crypto.createCipheriv('aes-128-cbc', md5(registeredKey.slice(0,16)), md5(registeredKey.slice(16))); registeredCipher.setAutoPadding(false);
      return Buffer.concat([Buffer.from('3ccc','hex'), registeredCipher.update(registeredFrame), registeredCipher.final()]).toString('base64');
    }
    var mask = Buffer.from('f2f7fcfff2f7fcff', 'hex');
    var frame = Buffer.concat([mask, plain, Buffer.from('eafb2cfe8568519154', 'hex')]);
    for (i = 8; i < frame.length; i++) frame[i] ^= mask[i % 8];
    frame.reverse();
    frame = playbackPad(Buffer.concat([frame, Buffer.from([0x61, 0x6f])]));
    var cipher = crypto.createCipheriv('aes-128-cbc', Buffer.from('d31e3718288a1027baab59f146a09a9c', 'hex'), Buffer.from('ea180a0336ed352fcd24e4d50018ae54', 'hex'));
    cipher.setAutoPadding(false);
    return Buffer.concat([Buffer.from([0xf2, 0x81]), cipher.update(frame), cipher.final()]).toString('base64');
  }
  function playbackLadon(ts, aid, nonce) {
    var seed = le32(nonce), raw = Buffer.from(md5(Buffer.concat([seed, Buffer.from(aid)])).toString('hex'));
    var k = pairReadLE(raw, 0), pending = [pairReadLE(raw, 8), pairReadLE(raw, 16), pairReadLE(raw, 24)], keys = [];
    for (var i = 0; i < 34; i++) {
      keys.push(k);
      var x = pairXor(pairAdd(pairRotr(pending[0], 8), k), pair(i, 0));
      pending = [pending[1], pending[2], x]; k = pairXor(x, pairRotl(k, 3));
    }
    var plain = playbackPad(Buffer.from(String(ts) + '-1611921764-' + aid));
    for (var at = 0; at < plain.length; at += 16) {
      var a = pairReadLE(plain, at), b = pairReadLE(plain, at + 8);
      for (i = 0; i < keys.length; i++) {
        b = pairXor(keys[i], pairAdd(a, pairRotr(b, 8))); a = pairXor(b, pairRotl(a, 3));
      }
      pairWriteLE(plain, at, a); pairWriteLE(plain, at + 8, b);
    }
    return Buffer.concat([seed, plain]).toString('base64');
  }
  // Playback shares the verified branch-2 primitives, but its version and
  // timestamps belong to this request, never to a logged-in account.
  function signPlayback(values,bodyBytes,stamp,deviceID) {
    values=Object.assign({},values,{ts:String(Math.floor(stamp/1000))});
    var result=sign(values,bodyBytes,stamp,deviceID,values.version_name);
    // Account Medusa and playback 551 are different profiles; sending both
    // causes HTTP 200 / empty body. Account sign() remains unchanged.
    delete result.headers['X-Medusa'];
    var ts=Math.floor(stamp/1000)>>>0;
    Object.assign(result.headers,{
      'X-Argus':playbackArgus(result.query,bodyBytes,ts,random32()),
      'X-Ladon':playbackLadon(ts,values.aid || '1967',random32()),
      'Sdk-Version':'2','X-Xs-From-Web':'0','X-Tt-Dt':'',
      'X-Tt-Store-Region':'cn','X-Tt-Store-Region-Src':'did'
    });
    return result;
  }
  function signSingleRegistered(values, body, stamp) {
    var params = Object.assign({}, values, { _rticket: String(stamp) });
    function escape(value) { return encodeURIComponent(String(value)).replace(/[!'()*]/g, function (c) { return '%' + c.charCodeAt(0).toString(16).toUpperCase(); }).replace(/%20/g, '+'); }
    var query = Object.keys(params).sort().map(function (key) { return escape(key) + '=' + escape(params[key]); }).join('&');
    var ts = Math.floor(stamp / 1000) >>> 0, payload = Buffer.alloc(20);
    md5(Buffer.from(query)).copy(payload,0,0,4); if (body.length) md5(body).copy(payload,4,0,4);
    Buffer.from([0,6,11,28]).copy(payload,12); payload.writeUInt32BE(ts,16);
    var key = Buffer.from('44b9b9d9a4aef9fca493aa757ca3c2c4a496938f','hex');
    for (var i=0;i<20;i++) payload[i] ^= key[i];
    for (i=0;i<20;i++) payload[i] = reverse8(rol8(payload[i],4) ^ payload[(i+1)%20]) ^ 255 ^ 20;
    return { query:query, headers:{
      'X-Argus':playbackArgus(query,body,ts,random32(),true), 'X-Ladon':playbackLadon(ts,'8662',random32()),
      'X-Gorgon':Buffer.concat([Buffer.from('8404401c0000','hex'),payload]).toString('hex'),
      'X-Khronos':String(ts), 'X-SS-Req-Ticket':String(stamp), 'X-SS-STUB':md5(body).toString('hex').toUpperCase()
    } };
  }
  function internationalGorgon(query,body,ts,nonce){var q=md5(Buffer.from(query)),m=body.length?md5(body):Buffer.alloc(16),data=Buffer.alloc(20);q.copy(data,0,0,4);m.copy(data,4,0,4);data.writeUInt32LE(67503104,12);data.writeUInt32BE(ts>>>0,16);var key=[0x4a,0x40,0x16,(nonce>>>8)&255,0x47,0x6c,1,nonce&255],s=new Array(256);for(var i=0;i<256;i++)s[i]=i;var j=0;for(i=0;i<256;i++){j=(j+s[i]+key[i%8])&255;var swap=s[i];s[i]=s[j];s[j]=swap;}var ii=0; j=0;for(i=0;i<data.length;i++){ii=(ii+1)&255;j=(j+s[ii])&255;swap=s[ii];s[ii]=s[j];s[j]=swap;data[i]^=s[(s[ii]+s[j])&255];}for(i=0;i<data.length;i++){data[i]=rol8(data[i],4);var next=i<19?data[i+1]:data[0];data[i]=~(reverse8(data[i]^next)^20)&255;}return Buffer.concat([Buffer.from([0x84,4,nonce&255,(nonce>>>8)&255,0x40,1]),data]).toString('hex');}
  function signInternational(values,bodyBytes,stamp){var tuned=tune(values,bodyBytes,stamp),query=tuned.query,ts=Math.floor(tuned.stamp/1000)>>>0,raw=crypto.randomBytes(14),be=Buffer.alloc(4);be.writeUInt32BE(ts,0);var trace=(('00000000'+tun32(tuned.stamp).toString(16)).slice(-8)+'10'+raw.slice(6).toString('hex'));var h={'X-Khronos':String(ts),'X-SS-Req-Ticket':String(values._rticket),'X-Argus':le32(ts).toString('base64'),'X-Ladon':be.toString('base64'),'X-Helios':helios(ts,raw.readUInt32LE(2)),'X-Gorgon':internationalGorgon(query,bodyBytes,ts,raw.readUInt16LE(0)),'X-TT-Trace-Id':'00-'+trace+'-'+trace.slice(0,16)+'-01'};if(bodyBytes.length)h['X-SS-STUB']=md5(bodyBytes).toString('hex').toUpperCase();return {query:query,headers:h};}
  function tun32(value){return value>>>0;}
  function le32(value){var b=Buffer.alloc(4);b.writeUInt32LE(value>>>0,0);return b;}
  var nativeSM3=false;
  try { crypto.createHash('sm3').update(Buffer.alloc(0)).digest(); nativeSM3=true;
    sm3=function(data){return crypto.createHash('sm3').update(data).digest();};
  } catch(unsupportedSM3) {} // Older JS hosts retain the existing pure-JS hash.
  module.exports={nativeSM3:nativeSM3,signSingleRegistered:signSingleRegistered,playbackArgus:playbackArgus,playbackLadon:playbackLadon,signPlayback:signPlayback,sign:sign,signInternational:signInternational,sm3:sm3,branch:branch,passportF13:passportF13,passportProto:passportProto,helios:helios,gorgon:gorgon,medusa:medusa,aesV3:aesV3,internationalGorgon:internationalGorgon};
}());

};
factories["playback-v5-sign"]=function(module,exports,require){
// SPDX-License-Identifier: GPL-3.0-only
// Playback-only v5 protocol port from N3urda/hongguoTV 18c37c2;
// Signer.kt/AesV3.kt/V5Constants.kt (derived from drpys 22261ad).
'use strict';
var crypto = require('crypto');
var passport = require('./passport-sign');
var constants = require('./playback-v5-constants.json');
var carrier = require('./playback-v5-carrier');
var MAGIC = Buffer.from(constants.magic, 'hex'),
  KEY = Buffer.from(constants.key, 'hex');
var started = Date.now(),
  processNonce = crypto
    .randomBytes(18)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
function le32(n) {
  var b = Buffer.alloc(4);
  b.writeUInt32LE(n >>> 0, 0);
  return b;
}
function rol(x, n) {
  n &= 31;
  return ((x << n) | (x >>> ((32 - n) & 31))) >>> 0;
}
function rol8(x, n) {
  return ((x << n) | (x >>> (8 - n))) & 255;
}
function md5(b) {
  return crypto.createHash('md5').update(b).digest();
}
function f13(q, m, ts) {
  var seed = 0x9d4a97c2,
    count = (seed + ts) >>> 0,
    pad = Buffer.from([0xfa, 0x45, 0x61, 0xd7]);
  for (var i = 0; i < 4; i++) pad[i] = (pad[i] * 257) >>> ((count + 2) & 7);
  var data = Buffer.concat([q, m, le32(ts), pad, Buffer.from('00000000000001a0', 'hex')]),
    words = new Array(128);
  for (i = 0; i < 16; i++) words[i] = data.readUInt32BE(i * 4);
  for (i = 0; i < 112; i++) {
    var x = words[i + 1],
      y = words[i + 14];
    words[i + 16] =
      (words[i] +
        words[i + 9] +
        ((rol(x, 14) ^ rol(x, 25) ^ (x >>> 3)) >>> 0) +
        ((rol(y, 13) ^ rol(y, 15) ^ (y >>> 10)) >>> 0)) >>>
      0;
  }
  var initial = [
    0x7aba4fc8, 0x67166507, 0x6403fa00, 0x340f512f, 984304912, 3005047866, 2874125293, 2152413264
  ].map(function (n) {
    return rol(n, -(count & 31));
  });
  var d = initial.slice();
  for (i = 0; i < 96; i++) {
    var base = (seed + i) >>> 0,
      n1 = (((d[4] ^ d[0]) & d[1]) ^ d[4]) >>> 0;
    var n2 = (rol(d[1], 26) ^ rol(d[1], 21) ^ rol(d[1], 7)) >>> 0;
    var n4 =
      (words[base & 127] +
        n1 +
        n2 +
        rol(constants.hashTable[base & 63], -((count + 1) & 31)) +
        d[6]) >>>
      0;
    var n5 = (rol(d[3], 30) ^ rol(d[3], 19) ^ rol(d[3], 10)) >>> 0;
    var n6 = ((d[3] & d[5]) | ((d[3] | d[5]) & d[2])) >>> 0,
      old = d[7];
    d.unshift(d.pop());
    d[7] = (n5 + n6 + n4) >>> 0;
    d[0] = (old + n4) >>> 0;
  }
  var ret = Buffer.alloc(32),
    out = Buffer.alloc(20);
  for (i = 0; i < 8; i++) ret.writeUInt32BE((d[i] + initial[i]) >>> 0, i * 4);
  for (i = 0; i < 16; i++) out[i] = ret[i] ^ ret[i + 16];
  var check = 0x20220420;
  for (i = 0; i < 12; i++)
    check =
      (i & 1
        ? (check >>> 5) ^ check ^ ~(out[i] | (check << 11))
        : (check >>> 3) ^ check ^ out[i] ^ (check << 7)) >>> 0;
  out.writeUInt32LE((((check | 4) ^ 0x1000000) | 0x20) >>> 0, 16);
  return out;
}
function varint(out, n) {
  while (n > 127) {
    out.push(n % 128 | 128);
    n = Math.floor(n / 128);
  }
  out.push(n);
}
function sint(out, tag, n) {
  varint(out, tag * 8);
  varint(out, n < 0 ? -n * 2 - 1 : n * 2);
}
function blob(out, tag, value) {
  if (!value.length) return;
  varint(out, tag * 8 + 2);
  varint(out, value.length);
  for (var i = 0; i < value.length; i++) out.push(value[i]);
}
function text(out, tag, value) {
  blob(out, tag, Buffer.from(value));
}
function proto(values, ts, nonce, q, hash, process) {
  var device = [],
    env = [],
    counters = [],
    p = [];
  sint(device, 1, 1);
  sint(device, 2, 2);
  text(device, 3, '8662');
  text(device, 4, values.device_id);
  text(device, 5, process.nonce);
  text(device, 6, '!noperm!');
  text(device, 12, 'Asia/Shanghai,8');
  text(device, 13, 'zh_CN');
  text(device, 22, values.os_version);
  sint(device, 25, process.started);
  text(device, 30, values.device_type);
  text(device, 31, 'HONOR');
  text(device, 32, values.device_type);
  text(device, 34, 'HONOR');
  text(env, 6, 'v04.10.03.04-bugfix');
  text(env, 8, values.channel);
  blob(env, 12, device);
  text(env, 14, values.version_name);
  [1, 2, 3, 5].forEach(function (n) {
    sint(counters, n, 1);
  });
  blob(p, 1, MAGIC);
  sint(p, 2, 5);
  sint(p, 3, nonce);
  text(p, 4, '8662');
  text(p, 5, values.device_id);
  text(p, 6, '646637794');
  text(p, 7, values.version_name);
  text(p, 8, 'v04.10.03-ml-android');
  sint(p, 9, 0x040a0300);
  blob(p, 10, Buffer.alloc(8));
  sint(p, 12, ts);
  blob(p, 13, hash);
  blob(p, 14, q.slice(0, 6));
  blob(p, 15, counters);
  sint(p, 17, ts);
  text(p, 20, 'none');
  // v04.10.03 uses wire value 738; 754 receives HTTP 200 / an empty body.
  sint(p, 21, 369);
  blob(p, 23, env);
  text(
    p,
    24,
    '{"cmr":16777216,"cmr2":16777216,"un_h":11,"vpn":0,"kd":0,"dyn":"","do":1,"tk":true}'
  );
  return Buffer.from(p);
}
// Official device envelope adapted from OOIUa/hongguo-android v0.8.0
// (12e373137e33f0155cbc33484dfdfdfa632c9906, GPL-3.0-only).
// Keep the older envelope available for existing fallback paths and wire vectors.
function officialProto(values, ts, nonce, q, hash, process) {
  var device = [], env = [], counters = [], sub = [], p = [];
  var token = String(process.nonce);
  if (token.length !== 25 || token.charAt(0) !== 'A') {
    token = 'A' + (token + 'AAAAAAAAAAAAAAAAAAAAAAAA').slice(0, 24);
  }
  var brand = values.device_brand || 'HONOR', type = values.device_type;
  sint(device, 1, 1); sint(device, 2, 2);
  text(device, 3, '8662'); text(device, 4, values.device_id);
  text(device, 5, token); text(device, 6, '!noperm!');
  sint(device, 7, -888888); sint(device, 8, -888888);
  sint(device, 9, 3); sint(device, 10, -888888);
  text(device, 11, '!notset!'); text(device, 12, 'Asia/Shanghai,8');
  text(device, 13, 'zh_CN'); sint(device, 14, 4);
  for (var i = 16; i <= 21; i++) {
    // Six fixed32 floats, each +0.0. Avoid a new host primitive.
    varint(device, i * 8 + 5); device.push(0, 0, 0, 0);
  }
  text(device, 22, values.os_version); sint(device, 23, 41); sint(device, 24, 36);
  sint(device, 25, process.started); sint(device, 26, process.started);
  sint(device, 27, process.started); sint(device, 28, process.now);
  sint(device, 29, -1); text(device, 30, type); text(device, 31, brand);
  text(device, 32, type); text(device, 33, type); text(device, 34, brand);
  text(device, 35, brand); text(device, 36, brand); sint(device, 38, 31);
  sint(env, 1, process.launch); sint(env, 2, 247235599); sint(env, 3, 247235596);
  sint(env, 5, 7); text(env, 6, 'v04.10.03.04-bugfix');
  sint(env, 7, process.pid); text(env, 8, values.channel); blob(env, 12, device);
  sint(sub, 1, ts); sint(sub, 2, -2); sint(sub, 4, 200);
  blob(env, 13, sub); text(env, 14, values.version_name);
  sint(counters, 1, 305); sint(counters, 2, 4); sint(counters, 3, 694367);
  sint(counters, 5, 1621072674);
  blob(p, 1, MAGIC); sint(p, 2, 5); sint(p, 3, nonce);
  text(p, 4, '8662'); text(p, 5, values.device_id); text(p, 6, '646637794');
  text(p, 7, values.version_name); text(p, 8, 'v04.10.03-ml-android');
  sint(p, 9, 0x040a0300); blob(p, 10, Buffer.from('4480000000000000', 'hex'));
  sint(p, 12, ts); blob(p, 13, hash); blob(p, 14, q.slice(0, 6));
  blob(p, 15, counters); text(p, 16, token); sint(p, 17, ts);
  text(p, 20, 'none'); sint(p, 21, 312); blob(p, 23, env);
  text(p, 24, '{"cmr":16777216,"cmr2":16777216,"un_h":11,"vpn":0,"kd":0,"dyn":"","do":1,"tk":true}');
  return Buffer.from(p);
}
function medusa(values, ts, q, m, n, process, official) {
  var hash = f13(q, m, ts),
    message = (official ? officialProto : proto)(values, ts, n[0], q, hash, process);
  var key = passport.sm3(Buffer.concat([KEY, le32(n[1]), KEY])),
    high = (n[1] >>> 16) & 255;
  var seed = le32(~(((high << 11) | (n[1] >>> 24)) ^ (high >>> 5) ^ high));
  var flags = official ? Buffer.from('4480000000000000', 'hex') : Buffer.alloc(8);
  var transformed = Buffer.concat([flags, xmxor(message, key)]).reverse();
  for (var i = 0; i < transformed.length; i++) transformed[i] ^= seed[~i & 3];
  var check = (0x18000001 | ((q[0] & 63) << 14) | ((hash[0] & 63) << 8)) >>> 0;
  var packed = Buffer.concat([
    Buffer.from([0xca]),
    le32(n[2]),
    le32(check),
    transformed,
    le32(n[1]).slice(2)
  ]);
  var encrypted = carrier(packed, ts, md5(KEY.slice(0, 16)), md5(KEY.slice(16)));
  var prefix = Buffer.concat([le32(5), MAGIC]),
    timestamp = le32(ts);
  for (i = 0; i < prefix.length; i++) prefix[i] ^= timestamp[i & 3];
  return Buffer.concat([prefix, le32(n[1]).slice(0, 2), Buffer.from([0, 1]), encrypted]).toString(
    'base64'
  );
}
function tune(values, body, stamp) {
  return tuneKeys(values, body, stamp, [
    'aid',
    'app_name',
    'version_code',
    'version_name',
    'manifest_version_code',
    'channel',
    'device_platform',
    'device_type',
    'os_version',
    'update_version_code',
    'iid',
    'cdid',
    'device_id',
    '_rticket'
  ]);
}
function tuneKeys(values, body, stamp, keys, official) {
  for (var offset = 0; offset < 1024; offset++) {
    var query = keys
      .map(function (key) {
        var value = key === '_rticket' ? String(stamp + offset) : values[key];
        return (
          key +
          '=' +
          // Android URLEncoder keeps '*' literal; its exact query is signed.
          encodeURIComponent(value).replace(official ? /[!'()]/g : /[!'()*]/g, function (c) {
            return '%' + c.charCodeAt(0).toString(16).toUpperCase();
          })
        );
      })
      .join('&');
    var b = official ? officialBranch(query, body, Math.floor(stamp / 1000)) :
      passport.branch(query, body, Math.floor(stamp / 1000));
    if ((b.iv & 15) === 12) return { query: query, q: b.q, m: b.m };
  }
  throw new Error('unable to select v5 signature branch');
}
function officialBranch(query, body, ts) {
  var q = passport.sm3(Buffer.from(query)), m = md5(body), iv = 0x20230928;
  // The official GET hashes an empty byte body, rather than using 16 zeros.
  [q, m, le32(ts)].forEach(function (bytes) {
    for (var i = 0; i < bytes.length; i++) {
      iv = (i & 1) ? ~((iv >>> 7) ^ iv ^ (bytes[i] | (iv << 12))) :
        (iv >>> 4) ^ iv ^ (iv << 6) ^ bytes[i];
      iv >>>= 0;
    }
  });
  return { iv: iv, q: q, m: m };
}
function sign(values, body, stamp) {
  return signKeys(values, body, stamp, [
    'aid',
    'app_name',
    'version_code',
    'version_name',
    'manifest_version_code',
    'channel',
    'device_platform',
    'device_type',
    'os_version',
    'update_version_code',
    'iid',
    'cdid',
    'device_id',
    '_rticket'
  ]);
}
function signKeys(values, body, stamp, keys) {
  var tuned = tuneKeys(values, body, stamp, keys),
    ts = Math.floor(stamp / 1000) >>> 0;
  var n = [0, 0, 0, 0].map(function () {
    return crypto.randomBytes(4).readUInt32LE(0);
  });
  return {
    query: tuned.query,
    headers: {
      'X-Khronos': String(ts),
      'X-Helios': helios(ts, n[3]),
      'X-Medusa': medusa(values, ts, tuned.q, tuned.m, n, {
        nonce: processNonce,
        started: started
      }),
      'X-SS-STUB': tuned.m.toString('hex').toUpperCase()
    }
  };
}
function signOfficial(values, body, stamp) {
  var keys = Object.keys(values).concat(['_rticket']);
  var tuned = tuneKeys(values, body, stamp, keys, true), ts = Math.floor(stamp / 1000) >>> 0;
  function random32() { return crypto.randomBytes(4).readUInt32LE(0); }
  var n = [random32(), random32(), random32(), random32()];
  var process = { nonce: processNonce, started: started, now: Date.now(),
    launch: Math.floor(random32() / 4294967296 * 21) + 100,
    pid: Math.floor(random32() / 4294967296 * 2000) + 10001 };
  var headers = { 'X-Khronos': String(ts), 'X-Helios': helios(ts, n[3]),
    'X-Medusa': medusa(values, ts, tuned.q, tuned.m, n, process, true) };
  if (body.length) headers['X-SS-STUB'] = tuned.m.toString('hex').toUpperCase();
  return { query: tuned.query, headers: headers };
}
function pair(lo, hi) {
  return { lo: lo >>> 0, hi: hi >>> 0 };
}
function pairReadLE(b, o) {
  return pair(b.readUInt32LE(o), b.readUInt32LE(o + 4));
}
function pairWriteLE(b, o, x) {
  b.writeUInt32LE(x.lo >>> 0, o);
  b.writeUInt32LE(x.hi >>> 0, o + 4);
}
function pairXor(a, b) {
  return pair(a.lo ^ b.lo, a.hi ^ b.hi);
}
function pairAdd(a, b) {
  var lo = (a.lo + b.lo) >>> 0;
  return pair(lo, (a.hi + b.hi + (lo < a.lo ? 1 : 0)) >>> 0);
}
function pairRotl(a, n) {
  n &= 63;
  if (!n) return pair(a.lo, a.hi);
  if (n === 32) return pair(a.hi, a.lo);
  if (n < 32) return pair((a.lo << n) | (a.hi >>> (32 - n)), (a.hi << n) | (a.lo >>> (32 - n)));
  n -= 32;
  return pair((a.hi << n) | (a.lo >>> (32 - n)), (a.lo << n) | (a.hi >>> (32 - n)));
}
function pairRotr(a, n) {
  return pairRotl(a, 64 - (n & 63));
}
function helios(ts, nonce) {
  var key = md5(Buffer.concat([le32(nonce), Buffer.from('8662')]));
  var raw = Buffer.from(key.toString('hex'));
  var k = pairReadLE(raw, 0),
    pending = [pairReadLE(raw, 8), pairReadLE(raw, 16), pairReadLE(raw, 24)],
    rounds = [k];
  for (var i = 0; i < 33; i++) {
    var x = pairXor(pairAdd(pairRotr(pending[0], 8), k), pair(i, 0));
    pending = [pending[1], pending[2], x];
    k = pairXor(x, pairRotl(k, 3));
    rounds.push(k);
  }
  var text = Buffer.from(String(ts) + '-646637794-8662'),
    pad = 16 - (text.length % 16),
    plain = Buffer.concat([text, Buffer.alloc(pad, pad)]),
    out = Buffer.concat([le32(nonce), Buffer.alloc(plain.length)]);
  for (var at = 0; at < plain.length; at += 16) {
    var a = pairReadLE(plain, at),
      b = pairReadLE(plain, at + 8);
    for (i = 0; i < rounds.length; i++) {
      b = pairXor(rounds[i], pairAdd(a, pairRotr(b, 8)));
      a = pairXor(b, pairRotl(a, 3));
    }
    pairWriteLE(out, 4 + at, a);
    pairWriteLE(out, 12 + at, b);
  }
  return out.toString('base64');
}

function xmxor(data, key) {
  var out = Buffer.alloc(data.length);
  for (var i = 0; i < data.length; i++) {
    var k = (i * 4) & 28,
      a = key[k],
      b = key[k + 1],
      v = (~(rol8(data[i], 4) + a) ^ b) & 255;
    v = (rol8(v, 3) + b) & 255;
    out[out.length - 1 - i] = ~(v ^ a) & 255;
  }
  var flag = out[out.length - 1] ^ out[out.length - 2],
    old = out[0];
  out[0] = (out[0] + ~flag) & 255;
  out[1] = (out[1] + (out[0] ^ out[out.length - 1] ^ 254)) & 255;
  out[2] = (out[2] + ((flag - old) ^ rol8(out[1], 3) ^ 2)) & 255;
  for (i = 0; i < out.length - 4; i++)
    out[i + 3] = (out[i + 3] + ~(rol8(out[i + 2], 3) ^ out[i + 1] ^ (i + 3))) & 255;
  out[out.length - 1] ^= out[out.length - 2];
  var sum = 0;
  for (i = 1; i < out.length; i++) sum = (sum + out[i]) & 255;
  out[0] = ((out[0] ^ out[1]) + sum) & 255;
  return out;
}

module.exports = { sign: sign, signKeys: signKeys, signOfficial: signOfficial, tune: tune, tuneKeys: tuneKeys, f13: f13, medusa: medusa, helios: helios };

};
factories["playback-v5-carrier"]=function(module,exports,require){
// SPDX-License-Identifier: GPL-3.0-only
// v5 carrier; see playback-v5-sign.js for provenance. Not standard AES.
'use strict';
var constants = require('./playback-v5-constants.json');
module.exports = function (data, ts, key, iv) {
  if (data.length < 248 || key.length !== 16 || iv.length !== 16)
    throw new Error('signature payload is too short');
  var branch = ts & 3,
    box = Buffer.from(constants.sbox, 'hex').slice(branch * 256, (branch + 1) * 256),
    con = [
      [2, 0, 3, 1],
      [1, 3, 2, 0],
      [3, 2, 1, 0],
      [2, 3, 1, 0]
    ][branch],
    orders = [
      [0, 9, 14, 15, 4, 13, 2, 7, 8, 1, 6, 3, 12, 5, 10, 11],
      [0, 9, 14, 11, 4, 13, 2, 3, 8, 1, 6, 15, 12, 5, 10, 7],
      [0, 9, 14, 3, 4, 13, 2, 15, 8, 1, 6, 11, 12, 5, 10, 7],
      [0, 9, 14, 15, 4, 13, 2, 3, 8, 1, 6, 11, 12, 5, 10, 7]
    ][branch],
    init = [0xbbb5de72, 0xd4638d5b, 0x92a5f73b, 0x89f8a1c9][branch],
    mk = Buffer.alloc(48),
    r = 8;
  for (var j = 0; j < 16; j++) mk[j] = key[j] ^ ((init >>> ((j % 4) * 8)) & 255);
  for (j = 4; j < 12; j++) {
    var prev = Buffer.from(mk.slice(j * 4 - 4, j * 4));
    if (j % 4 === 0)
      prev = Buffer.from([
        ((init >>> (r & 24)) & 255) ^ box[prev[1]],
        box[prev[2]],
        box[prev[3]],
        box[prev[0]]
      ]);
    r += 2;
    for (var k = 0; k < 4; k++) mk[j * 4 + k] = prev[k] ^ mk[j * 4 + k - 16];
  }
  function block(src) {
    var b = Buffer.from(src),
      prev,
      z,
      index,
      col,
      aa,
      cc,
      dd,
      ee,
      t;
    function add(base) {
      for (z = 0; z < b.length; z++) b[z] ^= mk[base + Math.floor(z / 4) * 4 + con[z % 4]];
    }
    add(0);
    for (var round = 1; round <= 2; round++) {
      prev = Buffer.from(b);
      for (z = 0; z < b.length; z++) {
        index = orders[z];
        b[z] = box[prev[con[Math.floor(index / 4)] * 4 + (index % 4)]];
      }
      if (round === 1) {
        prev = Buffer.from(b);
        for (z = 0; z < b.length; z++) b[z] = prev[Math.floor(z / 4) * 4 + con[z % 4]];
        var xt = function (x) {
          return x & 128 ? ((x << 1) ^ 0x1b) & 255 : (x << 1) & 255;
        };
        for (col = 0; col < 4; col++) {
          aa = b[col];
          cc = b[4 + col];
          dd = b[8 + col];
          ee = b[12 + col];
          t = aa ^ cc ^ dd ^ ee;
          b[col] ^= t ^ xt(aa ^ cc);
          b[4 + col] ^= t ^ xt(cc ^ dd);
          b[8 + col] ^= t ^ xt(dd ^ ee);
          b[12 + col] ^= t ^ xt(ee ^ aa);
        }
      }
      add(round * 16);
    }
    for (z = 0; z < b.length; z++) b[z] ^= mk[16 + z];
    return b;
  }
  var wire = [6, 5, 3, 4, 2, 7, 1, 0],
    compact = [1, 7, 3, 6, 2, 0, 4, 5],
    plain = Buffer.alloc(32);
  for (j = 0; j < 31; j++)
    for (k = 0; k < 8; k++) plain[j] |= ((data[j * 8 + k] >>> wire[k]) & 1) << compact[k];
  plain[31] = 1;
  var previous = Buffer.from(iv),
    encrypted = Buffer.alloc(32);
  for (j = 0; j < 32; j += 16) {
    for (k = 0; k < 16; k++) plain[j + k] ^= previous[k];
    previous = block(plain.slice(j, j + 16));
    previous.copy(encrypted, j);
  }
  var out = Buffer.concat([Buffer.from([encrypted[31]]), data]);
  for (j = 0; j < 31; j++)
    for (k = 0; k < 8; k++) {
      var at = 1 + j * 8 + k;
      out[at] = (out[at] & ~(1 << wire[k])) | (((encrypted[j] >>> compact[k]) & 1) << wire[k]);
    }
  return out;
};

};
factories["playback-v5-constants.json"]=function(module,exports,require){
module.exports={
  "magic": "2d4b4fca49750d433fb5ae2c226dcc56",
  "key": "b23c2a470a20d105dc3f8c4438f8272ed46d6c89ffdcdedd5108698d26e9489d",
  "sbox": "53290fe9e51f316f90f74a7e034d367784ab49237cd0135cdc632c322fd3be0e2624a417ecd9151a7ff64f60730a87f9445ec6ada2f865d22b696c4188f24c0df37b75510b939f6bc2fe6883e68bc8c722181ba0bdb08c9871b50c9a16b46eea8eed20ba4b8a14e0fcf1468dbbef05a93e5a9d7dcf06898635c1fd99f5de287a80c594daaab19b6279fbd75070cb52eb2555c456e39e7839853874e2f0013ac0b64742d8ca10e4b79c955de8b843ce4ed464a6a72ed508091c92e7b3eedd1e1dd12afac321618fa3d65f9167c982f43d66a53c6a1997585b346dbf9672ff37cdbc073b2dae11453304df00815476b2a13fccdb30b957a8acafe127400248591238922563e36406d37a24100b7902a028044e218453c2a399199c9d13dc40c55ba67e502273850ebdc1a2e2188b8f2d9e3cb909b8c46a2a9f4a6dd93007eafa65b7b3a881aa908cc74f0ad76bbbb58617c37012ca05a469fd44e62eecf1e4272ce860c0ae5eadf99b20d8f0234174006f3f110d7657d01645d4eff8f71471cbfe1cb2f52648727bf3c9de55153e031b4d61757db63dbf7782eeafe9018a8891362fb14759ac32bab03b349aeb5a377c5156be4c8dfbe13a684bda39cf836697c894545fe0f2491acea9fc6252f4ff1e0fe72bd2df6e67a7f635e5bcc6d1a5dd951d89960887a18eb40c785cdb1f80ed42299333ab98cdd67f316cd54346585dccd759fb722789b08807cc0fda293f7e5e1819bb0353517020b31d3d00374952bea2c421e862040a9ec892a05b266b7a0d0cc316f483b81af39715657ffe32ad8de0c13077646035236ee5363e5f900e9a7cf850a81cd9960b6df73317226f99eaa6fff15cec34acb98246639b918ab2851466a7cdfc4ad1b52c2ae95a58d3734e47ddd5b7560193f644ef9c408b7dee39b4d6aabf4de761e3252d4c7ba3843187745d55e6a5db05d42b45caed43c0c5d0b64bfa9d94a4a9d8f2f0e1a108dcfd288fd2bc1fc7bd675412138169cb09249875ba3b68cfb11180afae104fc9789571c6dfce02413886796ae21e3c488cc21b9f423a066c2eabf98e2fdeeb5776e4f5d09a515ba58cbbab3e37b09fd4f6d9244df80512e84cd7956be301cf64f1429d58577cc241f3a2c655144f81aaf95a4e108da894b38970561ae9002619fbbac91fa922ed202bfc62cb08e0de2a7f3631435f8b47c8a3c563b4db4071ce74c46da6fa696a9e282d1e825d663b93bfd56c48dce1884bb10fccea063929f746443fd830a4232e53da21a1f2d1bdfebc3a02c10a1b8ad31d04fd616590d272ac737e98eb33af60528716bee78ec0ee8699031177277d9cff32542c67caf5f44591681335ae0e178f3409a7803db83892dde5b9b7f0c750e24aef077badd678a09b850b84ec1597e4963cb5e675df1c0d6fb618496ecd76c35c798325590c2fb27a5e",
  "hashTable": [
    3954593711,
    128638146,
    3476129727,
    3759225087,
    1829502207,
    1513137086,
    3021657656,
    873991864,
    4063488879,
    2980414668,
    3435335111,
    1204935505,
    3579204574,
    1890078625,
    1464286226,
    4151247496,
    738688778,
    3658336976,
    4223168364,
    4257533696,
    1753874957,
    3866543782,
    2362848139,
    440175886,
    3437801579,
    1792077067,
    2689738519,
    3698437251,
    579197809,
    3585400230,
    1936688720,
    1700802668,
    1635574438,
    3827515774,
    172024131,
    1414414386,
    2296380202,
    1902910176,
    1279687304,
    95566771,
    3788552294,
    3131301048,
    2922607827,
    3275233872,
    386070363,
    4268598120,
    4038381384,
    1309670328,
    1923797261,
    650459709,
    4072464630,
    3025499521,
    1243971549,
    2352054946,
    2869640070,
    1029569300,
    1326462516,
    3548074711,
    1146027798,
    3943314385,
    1822977902,
    2640807,
    137919738,
    1605596550
  ]
}
;
};
factories["mobile-playback-v5"]=function(module,exports,require){
'use strict';
var zlib = require('zlib');
var signer = require('./playback-v5-sign');
var ENDPOINT =
  'https://api5-normal-sinfonlineb.fqnovel.com/novel/player/multi_video_model/player/v1';
var ALTERNATE_ENDPOINT =
  'https://api5-normal-sinfonlinea.fqnovel.com/novel/player/multi_video_model/player/v1';
var VIDEO_TAB_ENDPOINT = 'https://api5-normal-sinfonlineb.fqnovel.com';
var VIDEO_TAB_PATH = '/reading/bookapi/video_tab/multi_video_model/v1/';
var VIDEO_TAB_UA =
  'com.phoenix.read/73932 (Linux; U; Android 16; zh_CN; 25053RT47C; Build/BP2A.250605.031.A3; Cronet/TTNetVersion:04657795 2026-01-23 QuicVersion:c67e9834 2025-09-08)';
var UA =
  'com.phoenix.read/73932 (Linux; U; Android 12; zh_CN_#Hans; PGT-AN10; Build/V417IR;tt-ok/3.12.13.20)';
function query(d) {
  return {
    aid: '8662',
    app_name: 'novelread',
    version_code: '74332',
    version_name: '7.4.3.32',
    manifest_version_code: '74332',
    channel: 'vivo_8662_64',
    device_platform: 'android',
    device_type: 'PGT-AN10',
    os_version: '12',
    update_version_code: '74332',
    iid: d.installID,
    cdid: d.cdid,
    device_id: d.deviceID
  };
}
function build(vid, contentType, device, stamp, alternate) {
  if (!/^[0-9]{1,32}$/.test(vid) || !/^[0-9]{1,16}$/.test(contentType))
    throw new Error('invalid playback episode');
  var ids = {};
  ids[contentType] = [vid];
  var body = zlib.gzipSync(
    Buffer.from(
      JSON.stringify({
        biz_param: {
          detail_page_version: 0,
          device_level: 1,
          disable_digg_stat: false,
          disable_video_relate_book: false,
          need_all_video_definition: true,
          need_mp4_align: false,
          use_os_player: false,
          use_server_dns: false,
          video_platform: 1024
        },
        mixed_video_id_map: ids,
        dr_scene: 'player'
      })
    )
  );
  var signed = signer.sign(query(device), body, stamp);
  return {
    url: (alternate ? ALTERNATE_ENDPOINT : ENDPOINT) + '?' + signed.query,
    body: body,
    headers: Object.assign({}, signed.headers, {
      'User-Agent': UA,
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Encoding': 'gzip'
    })
  };
}
function videoTabRecovery(vid, device, stamp) {
  if (!/^[0-9]{1,32}$/.test(String(vid))) throw new Error('invalid playback episode');
  stamp = Number(stamp) || Date.now();
  var values = Object.assign({}, query(device), {
    video_id: String(vid), video_id_type: '0',
    device_level: '1', need_all_video_definition: '1', need_mp4_align: '0', use_os_player: '0',
    video_platform: '1024', source: '0', from_video_id: ''
  });
  var keys = [
    'aid', 'app_name', 'version_code', 'version_name', 'manifest_version_code', 'channel', 'device_platform',
    'device_type', 'os_version', 'update_version_code', 'iid', 'cdid', 'device_id',
    'video_id', 'video_id_type', 'device_level', 'need_all_video_definition', 'need_mp4_align', 'use_os_player',
    'video_platform', 'source', 'from_video_id', '_rticket'
  ];
  var signed = signer.signKeys(values, Buffer.alloc(0), stamp, keys);
  var headers = Object.assign({}, signed.headers, {
    'User-Agent': VIDEO_TAB_UA,
    Accept: 'application/json; charset=utf-8',
    'Accept-Language': 'zh-CN,zh;q=0.9'
  });
  delete headers['X-SS-STUB'];
  return { url: VIDEO_TAB_ENDPOINT + VIDEO_TAB_PATH + '?' + signed.query, headers: headers };
}
// Select only the exact requested episode, never the first entry or a direct
// legacy model. The provider checks business status before using this result.
function normalize(envelope, vid, contentType) {
  var data = envelope && envelope.data,
    entries = (data && data[contentType]) || data;
  var entry = entries && entries[vid];
  var result = {};
  if (entry && entry.video_model != null) result[vid] = entry;
  return Object.assign({}, envelope, { data: result });
}
module.exports = {
  query: query,
  build: build,
  videoTabRecovery: videoTabRecovery,
  normalize: normalize,
  maxJSON: 2 * 1024 * 1024
};

};
factories["single-playback-profile"]=function(module,exports,require){
'use strict';
// Dedicated anonymous single-episode profile; account and legacy defaults stay
// independent. Matches the protocol verified with openhongguo 0.2.0.
var UA = 'com.phoenix.read/73932 (Linux; U; Android 14; zh_CN; 23127PN0CC; Build/UKQ1.230804.001; Cronet/TTNetVersion:8d40f833 2026-03-03 QuicVersion:21ac1950 2025-11-18)';
function query(d) {
  return { iid: d.installID || '', device_id: d.deviceID || '', ac: 'wifi', channel: 'xiaomi_8662_64', aid: '8662', app_name: 'novelread', cdid: d.cdid,
    version_code: '73932', version_name: '7.3.9.32', device_platform: 'android', os: 'android', ssmix: 'a', device_type: '23127PN0CC', device_brand: 'Xiaomi',
    language: 'zh', os_api: '34', os_version: '14', manifest_version_code: '73932', resolution: '1200*2670', dpi: '460', update_version_code: '73932', host_abi: 'arm64-v8a',
    dragon_device_type: 'phone', pv_player: '73932', compliance_status: '0', need_personal_recommend: '1', player_so_load: '1', is_android_pad_screen: '0', openudid: d.openudid };
}
function payload(plain, d, stamp) {
  var p = JSON.parse(plain.toString('utf8'));
  Object.assign(p.header, { display_name: '红果免费短剧', app_version: '7.3.9.32', app_version_minor: '7.3.9.32', version_code: 73932, manifest_version_code: 73932,
    update_version_code: 73932, channel: 'xiaomi_8662_64', device_brand: 'Xiaomi', device_manufacturer: 'Xiaomi', device_model: '23127PN0CC', os_api: 34, os_version: '14',
    density_dpi: 460, resolution: '2670x1200', device_id: '0', install_id: '0', req_id: d.clientudid,
    oaid: { req_id: d.cdid, hw_id_version_code: '0', take_ms: '6', is_track_limited: 'false', query_times: '1', id: d.cdid, time: String(stamp - 200) } });
  return Buffer.from(JSON.stringify(p));
}
module.exports = { ua: UA, query: query, payload: payload, deviceBase: 'https://log5-applog-lq.fqnovel.com', endpoint: 'https://api5-normal-sinfonlinea.fqnovel.com/novel/player/video_model/v1/' };

};
factories["single-registered-profile"]=function(module,exports,require){
'use strict';
var sign = require('./passport-sign');
var crypto = require('crypto');
var networkDiagnostic = require('./network-diagnostic');
var UA = 'com.phoenix.read/73532 (Linux; U; Android 16; zh_CN; 25053RT47C; Build/BP2A.250605.031.A3; Cronet/TTNetVersion:04657795 2026-01-23 QuicVersion:c67e9834 2025-09-08)';
function query(d) {
  return {aid:'8662',app_name:'novelread',version_code:'73532',version_name:'7.3.5.32',manifest_version_code:'73532',update_version_code:'73532',channel:'update_64',device_platform:'android',os:'android',ssmix:'a',device_type:'25053RT47C',device_brand:'Redmi',language:'zh',os_api:'36',os_version:'16',resolution:'1280*2772',dpi:'520',ac:'wifi',device_id:d.deviceID || '',iid:d.installID || ''};
}
function uuid(){var b=crypto.randomBytes(16);b[6]=(b[6]&15)|64;b[8]=(b[8]&63)|128;return b.toString("hex").replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/,"$1-$2-$3-$4-$5");}
function register(send) {
  var stamp=Date.now(), cdid=uuid(), clientudid=uuid();
  var h={display_name:'红果免费短剧',aid:8662,app_version:'7.3.5.32',version_code:73532,manifest_version_code:73532,update_version_code:73532,channel:'update_64',package:'com.phoenix.read',app_language:'zh',os:'Android',os_version:'16',os_api:36,device_model:'25053RT47C',device_brand:'Redmi',device_manufacturer:'Xiaomi',cpu_abi:'arm64-v8a',density_dpi:520,display_density:'xxhdpi',resolution:'2772x1280',language:'zh',timezone:8,access:'wifi',openudid:crypto.randomBytes(8).toString('hex'),clientudid:clientudid,cdid:cdid,region:'CN',tz_name:'Asia/Shanghai',tz_offset:28800,sim_region:'cn',device_platform:'android',not_request_sender:0,is_system_app:0,sdk_flavor:'china',rom:'OS2.0',rom_version:'BP2A.250605.031.A3'};
  var q=query({}); delete q.device_id;delete q.iid;q.req_id=uuid();q._rticket=String(stamp);
  var raw=Buffer.from(JSON.stringify({magic_tag:'ss_app_log',header:h,_gen_time:stamp}));
  var encoded=Object.keys(q).sort().map(function(k){return encodeURIComponent(k)+'='+encodeURIComponent(q[k]).replace(/\*/g,'%2A');}).join('&');
  return send('https://log.snssdk.com/service/2/device_register/?'+encoded,'POST',{'User-Agent':UA,Accept:'application/json','Content-Type':'application/json; charset=utf-8'},raw,65536).then(function(res){
    var error=new Error('匿名播放身份注册失败');error.code='ACCOUNT_DEVICE';error.status=res.status;
    if(res.status!==200)throw error;
    var p;try{p=JSON.parse(res.body.toString('utf8').replace(/("(?:device_id|install_id)"\s*:\s*)(\d{16,})/g,'$1"$2"'));}catch(ignored){throw error;}
    if(!p || typeof p!=='object' || Array.isArray(p))throw error;
    var d=String(p.device_id_str || p.device_id || ''),i=String(p.install_id_str || p.install_id || '');
    if(!/^[0-9]{1,32}$/.test(d)||!/[1-9]/.test(d)||!/^[0-9]{1,32}$/.test(i)||!/[1-9]/.test(i))throw error;
    return {deviceID:d,installID:i};
  }).catch(function(error){
    if(error.code==='ACCOUNT_DEVICE' || error.name==='AbortError')throw error;
    var failure=new Error('匿名播放身份注册失败');failure.code='ACCOUNT_DEVICE';failure.status=502;
    failure.stage='device_register';failure.network_reason=networkDiagnostic(error);throw failure;
  });
}
module.exports={ua:UA,query:query,register:register,sign:sign.signSingleRegistered,endpoint:'https://api5-normal-sinfonlineb.fqnovel.com/novel/player/video_model/v1/'};

};
factories["network-diagnostic"]=function(module,exports,require){
'use strict';

// Fixed metadata only. Never copy a URL, certificate, hostname or error message.
module.exports = function (error) {
  // Node 0.12 hostname mismatches have no error.code. Classify only this fixed
  // native prefix; never return the message, which contains the upstream host.
  if (error && /^Hostname\/IP doesn't match certificate's altnames:/.test(String(error.message || ''))) return 'tls';
  var reason = error && error.network_reason;
  if (['dns', 'tls', 'timeout', 'refused', 'reset', 'unreachable', 'cancelled'].indexOf(reason) >= 0) return reason;
  var code = error && error.code;
  if (['ENOTFOUND', 'EAI_AGAIN', 'EAI_FAIL'].indexOf(code) >= 0) return 'dns';
  if (['CERT_HAS_EXPIRED', 'CERT_NOT_YET_VALID', 'DEPTH_ZERO_SELF_SIGNED_CERT', 'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
      'SELF_SIGNED_CERT_IN_CHAIN', 'UNABLE_TO_GET_ISSUER_CERT_LOCALLY', 'ERR_TLS_CERT_ALTNAME_INVALID'].indexOf(code) >= 0) return 'tls';
  if (['UPSTREAM_TIMEOUT', 'ETIMEDOUT', 'ESOCKETTIMEDOUT'].indexOf(code) >= 0) return 'timeout';
  if (code === 'ECONNREFUSED') return 'refused';
  if (code === 'ECONNRESET' || code === 'EPIPE') return 'reset';
  if (['ENETUNREACH', 'EHOSTUNREACH', 'ENETDOWN'].indexOf(code) >= 0) return 'unreachable';
  return '';
};

};
factories["device-pure"]=function(module,exports,require){
'use strict';
var crypto=require('crypto'),zlib=require('zlib'),UA='com.phoenix.read/73532 (Linux; U; Android 16; zh_CN; 25053RT47C; Build/BP2A.250605.031.A3; Cronet/TTNetVersion:04657795 2026-01-23 QuicVersion:c67e9834 2025-09-08)';
function trim(v) { return String(v == null ? '' : v).replace(/^\s+|\s+$/g, ''); }
function str(v) { return v == null ? '' : String(v); }
function validID(v) { return /^[0-9]{1,32}$/.test(trim(v)); }
function fail(message, status, code) { var e = new Error(message); e.status = status || 502; e.code = code || 'ACCOUNT_ERROR'; return e; }
// Keep numeric IDs exact without rebuilding every character of the input.
// Strings (including escaped quotes/backslashes) are consumed as one token, so
// digits inside URLs, signatures or nested JSON strings are never rewritten.
function parseExactJSON(text) {
  return JSON.parse(text.replace(/"(?:[^"\\]|\\[\s\S])*"|-?[0-9]+(?:\.[0-9]+)?(?:[eE][+-]?[0-9]+)?/g, function (token) {
    return /^-?[0-9]{16,}$/.test(token) ? '"' + token + '"' : token;
  }));
}

function uuid() { var b = crypto.randomBytes(16); b[6] = (b[6] & 15) | 64; b[8] = (b[8] & 63) | 128; return b.toString('hex').replace(/^(.{8})(.{4})(.{4})(.{4})(.{12}).*$/, '$1-$2-$3-$4-$5'); }
function device() { return { cdid: uuid(), clientudid: uuid(), openudid: crypto.randomBytes(8).toString('hex'), created: Date.now() }; }
function appQuery(s) {
    var q = { ac: 'wifi', aid: '8662', app_name: 'novelread', channel: 'update_64', device_brand: 'Redmi', device_id: s.device_id, device_platform: 'android', device_type: '25053RT47C', dpi: '520', iid: s.install_id, language: 'zh', manifest_version_code: '73532', os: 'android', os_api: '36', os_version: '16', resolution: '1280*2772', ssmix: 'a', update_version_code: '73532', version_code: '73532', version_name: '7.3.5.32' };
    if (s.device) { q.cdid = s.device.cdid; q.openudid = s.device.openudid; }
    return q;
  }
function sortedQuery(values) { return Object.keys(values).sort().map(function (key) { return encodeURIComponent(key) + '=' + encodeURIComponent(String(values[key])); }).join('&'); }
function le32(n) { var b = Buffer.alloc(4); b.writeUInt32LE(n >>> 0, 0); return b; }
function protocolDevicePayload(d, stamp) {
    var h = { aid: 8662, access: 'wifi', app_version: '7.3.5.32', app_version_minor: '', channel: 'update_64', device_brand: 'Redmi', device_manufacturer: 'Redmi', device_model: '25053RT47C', device_category: 'phone', device_platform: 'android', os: 'Android', os_api: 36, os_version: '16', density_dpi: 520, display_density: 'xxxhdpi', resolution: '2772x1280', language: 'zh', timezone: 8, tz_name: 'Asia/Shanghai', tz_offset: 28800, region: 'CN', package: 'com.phoenix.read', version_code: 73532, manifest_version_code: 73532, update_version_code: 73532, apk_first_install_time: d.created, cdid: d.cdid, clientudid: d.clientudid, openudid: d.openudid, cpu_abi: 'arm64-v8a', display_name: '红果短剧', sdk_version: '3.7.2', sdk_target_version: 29, sdk_flavor: 'china', guest_mode: 0, is_system_app: 0, not_request_sender: 0, oaid_may_support: true, ipv6_list: [], sim_serial_number: [], custom: { is_android_fold: 0, filter_warn: 0, web_ua: '', is_android_pad: 0, client_ipv4: '' } };
    return Buffer.from(JSON.stringify({ magic_tag: 'ss_app_log', header: h, _gen_time: stamp }));
  }
function deviceKey(seed) { var h = crypto.createHash('sha512').update(seed).digest(); return crypto.createHash('sha512').update(Buffer.concat([h, Buffer.from('4dd4c2e6b83162090e52b3c7a6733ba41cb2462b829ab58a196b39db57177524f49baf7f08e8d68d26a72e37c1a95a2f1f05a51892aef2949732b62a38aadd58', 'hex')])).digest(); }
function ttEncrypt(plain, seed) {
    var zipped = zlib.gzipSync(plain, { level: 9 }); Buffer.from([0x1f, 0x8b, 8, 0, 0, 0, 0, 0, 0, 0]).copy(zipped, 0);
    var hash = crypto.createHash('sha512').update(zipped).digest(); var p = Buffer.concat([hash, zipped]); var pad = 16 - (p.length % 16); p = Buffer.concat([p, Buffer.alloc(pad, pad)]); var key = deviceKey(seed); var cipher = crypto.createCipheriv('aes-128-cbc', key.slice(0, 16), key.slice(16, 32)); cipher.setAutoPadding(false); return Buffer.concat([Buffer.from([0x74, 0x63, 5, 0x10, 0, 0]), seed, cipher.update(p), cipher.final()]);
  }
function ttDecrypt(input) {
    if (input.length < 118 || input[0] !== 0x74 || input[1] !== 0x63 || (input.length - 38) % 16) throw fail('设备注册响应无效', 502, 'ACCOUNT_DEVICE');
    var seed = input.slice(6, 38), key = deviceKey(seed), decipher = crypto.createDecipheriv('aes-128-cbc', key.slice(0, 16), key.slice(16, 32)); decipher.setAutoPadding(false); var p = Buffer.concat([decipher.update(input.slice(38)), decipher.final()]); var pad = p[p.length - 1]; if (pad < 1 || pad > 16) throw fail('设备注册响应无效', 502, 'ACCOUNT_DEVICE'); p = p.slice(0, p.length - pad); if (p.length < 64) throw fail('设备注册响应无效', 502, 'ACCOUNT_DEVICE'); var hash = crypto.createHash('sha512').update(p.slice(64)).digest(); if (!hash.equals(p.slice(0, 64))) throw fail('设备注册响应校验失败', 502, 'ACCOUNT_DEVICE'); return zlib.gunzipSync(p.slice(64));
  }
module.exports={trim:trim,str:str,validID:validID,fail:fail,parseExactJSON:parseExactJSON,uuid:uuid,device:device,appQuery:appQuery,sortedQuery:sortedQuery,le32:le32,protocolDevicePayload:protocolDevicePayload,deviceKey:deviceKey,ttEncrypt:ttEncrypt,ttDecrypt:ttDecrypt,ua:typeof UA==='undefined'?'':UA};

};
factories["model-pure"]=function(module,exports,require){
'use strict';
var crypto=require('crypto');
function trim(value) { return String(value == null ? '' : value).replace(/^\s+|\s+$/g, ''); }
function number(value) { var n = Number(value); return isFinite(n) ? n : 0; }
function fail(message, status, code, stage) { var error = new Error(message); error.code = code || 'PROVIDER_ERROR'; if (status) error.status = status; if (stage) error.stage = stage; return error; }
// Keep numeric IDs exact without rebuilding every character of the input.
// Strings (including escaped quotes/backslashes) are consumed as one token, so
// digits inside URLs, signatures or nested JSON strings are never rewritten.
function parseExactJSON(text) {
  return JSON.parse(text.replace(/"(?:[^"\\]|\\[\s\S])*"|-?[0-9]+(?:\.[0-9]+)?(?:[eE][+-]?[0-9]+)?/g, function (token) {
    return /^-?[0-9]{16,}$/.test(token) ? '"' + token + '"' : token;
  }));
}

function bitCount(value) { var count = 0; while (value) { count++; value &= value - 1; } return count; }
function base36(value) {
    if (value >= 48 && value <= 57) return value - 48;
    if (value >= 97 && value <= 122) return value - 97 + 10;
    if (value >= 65 && value <= 90) return value - 65 + 10;
    return -1;
  }
function decodeSpade(value) {
    var raw;
    try { raw = Buffer.from(value, 'base64'); } catch (error) { raw = Buffer.alloc(0); }
    if (!raw.length) { try { raw = Buffer.from(value.replace(/-/g, '+').replace(/_/g, '/'), 'base64'); } catch (ignored) {} }
    if (raw.length < 3 || raw.length > 1024) throw fail('spade_a 无效');
    var tagLength = (raw[0] ^ raw[1] ^ raw[2]) - 48;
    var length = raw.length - tagLength - 1;
    if (tagLength < 1 || length < 33 || length >= raw.length) throw fail('spade_a 结构无效');
    var seed = raw[raw.length - tagLength - 2] ^ raw[raw.length - tagLength - 1];
    var tag = Buffer.alloc(tagLength);
    var i;
    for (i = 0; i < tagLength; i++) tag[i] = raw[raw.length - tagLength + i] ^ seed;
    if (tag.toString() === 'app_v2' || tag.toString() === 'web_v2') throw fail('spade_a 格式不支持');
    var decoded = Buffer.alloc(length);
    var previous = [250, 85];
    for (i = 0; i < length; i++) {
      var current = raw[i + 1];
      decoded[i] = (previous[i % 2] ^ current) - 21 - bitCount(i) & 255;
      previous[i % 2] = current;
    }
    var keyLength = base36(decoded[0]);
    if (keyLength < 0 || keyLength >= 36 || length - keyLength - 1 !== 32) throw fail('spade_a 密钥载荷无效');
    var keyText = decoded.slice(1, 33).toString();
    if (!/^[0-9a-fA-F]{32}$/.test(keyText)) throw fail('CENC 密钥无效');
    return Buffer.from(keyText, 'hex');
  }
function modelString(value) { if (typeof value === 'string') return trim(value); if (value == null) return ''; return String(value); }
function modelRows(value) {
    if (Array.isArray(value)) return value;
    if (!value || typeof value !== 'object') return [];
    return Object.keys(value).map(function (key) { return value[key]; }).filter(function (row) { return row && typeof row === 'object'; });
  }
function asMap(value) { return value && typeof value === 'object' && !Array.isArray(value) ? value : null; }
function businessCode(envelope) {
    var code = envelope && (envelope.code == null ? envelope.Code : envelope.code);
    if (modelString(code)) return modelString(code);
    var data = asMap(envelope && envelope.data);
    return modelString(data && (data.code == null ? data.Code : data.code));
  }
function modelURL(raw, model) {
    if (!modelString(model.key_seed)) {
      if (/^https:\/\//i.test(raw)) return raw;
      try { return Buffer.from(raw, 'base64').toString(); } catch (ignored) { return ''; }
    }
    try {
      var seed = Buffer.from(modelString(model.key_seed), 'base64'), bytes = Buffer.from(raw, 'base64');
      if (!seed.length || bytes.length < 20 || bytes[0] !== 0xa8 || bytes[2] !== 1 || bytes[3] !== 0 || (bytes.length - 4) % 16) return '';
      var hash = crypto.createHash('sha512').update(seed).digest();
      var key = crypto.createHash('sha512').update(Buffer.concat([hash, Buffer.from('4dd4c2e6b83162090e52b3c7a6733ba41cb2462b829ab58a196b39db57177524f49baf7f08e8d68d26a72e37c1a95a2f1f05a51892aef2949732b62a38aadd58', 'hex')])).digest();
      var decipher = crypto.createDecipheriv('aes-128-cbc', key.slice(0, 16), key.slice(16, 32));
      decipher.setAutoPadding(false);
      var plain = Buffer.concat([decipher.update(bytes.slice(4)), decipher.final()]);
      var pad = plain[plain.length - 1];
      if (pad >= 1 && pad <= 16 && pad <= plain.length) {
        for (var i = plain.length - pad; i < plain.length; i++) if (plain[i] !== pad) return '';
        plain = plain.slice(0, plain.length - pad);
      }
      return plain.toString().replace(/\x00+$/, '');
    } catch (ignoredKeySeed) { return ''; }
  }
function isByteVC2(codec) { return /^(bytevc2|bvc2)$/i.test(String(codec || '')); }
function onlyByteVC2(model) {
    var rows = modelRows(model.video_list);
    return rows.length > 0 && rows.every(function (row) { return isByteVC2(row && row.codec_type || row && row.video_meta && row.video_meta.codec_type); });
  }
function sameFallbackVideo(reference, candidate) {
    var a = modelString(reference.video_id), b = modelString(candidate.video_id);
    var x = Number(reference.video_duration), y = Number(candidate.video_duration);
    return !(a && b && a !== b) && !(x > 0 && y > 0 && Math.abs(x - y) > 0.5);
  }
function fallbackCodecURL(raw, codec) {
    var at = raw.indexOf('?'), base = at < 0 ? raw : raw.slice(0, at), query = at < 0 ? '' : raw.slice(at + 1);
    var parts = query ? query.split('&').filter(function (part) {
      var key = part.split('=')[0];
      try { key = decodeURIComponent(key.replace(/\+/g, ' ')); } catch (ignored) {}
      return key !== 'codec_type' && key !== 'force_codec';
    }) : [];
    // Preserve the raw signed query, including encoding and parameter order.
    return base + '?' + parts.concat([codec]).join('&');
  }
function fallbackAPI(value) {
    if (typeof value === 'string') {
      var text = trim(value), parsed;
      try { parsed = parseExactJSON(text); } catch (ignored) { return text; }
      if (Array.isArray(parsed)) return fallbackAPI(parsed[0]);
      if (parsed && typeof parsed === 'object') return fallbackAPI(parsed.fallback_api);
      return text;
    }
    if (Array.isArray(value)) return value.length ? fallbackAPI(value[0]) : '';
    if (value && typeof value === 'object') return fallbackAPI(value.fallback_api);
    return '';
  }
function playbackQuery(device, stamp) {
    return {
      _rticket: String(stamp), ac: 'wifi', aid: '8662', app_name: 'novelread', channel: 'update_64', cdid: device.cdid,
      compliance_status: '0', device_brand: 'Redmi', device_id: device.deviceID, device_platform: 'android',
      device_type: '25053RT47C', dpi: '520', dragon_device_type: 'phone', host_abi: 'arm64-v8a', iid: device.installID,
      is_android_pad_screen: '0', language: 'zh', manifest_version_code: '71332', need_personal_recommend: '1',
      os: 'android', os_api: '36', os_version: '16', player_so_load: '1', pv_player: '71332',
      resolution: '1280*2772', ssmix: 'a', update_version_code: '71332', version_code: '71332', version_name: '7.1.3.32'
    };
  }
function videoTabQuery(device, stamp, vid) {
    var query = playbackQuery(device, stamp);
    Object.assign(query, {
      player_so_load: '1',
      video_id: String(vid),
      video_id_type: '0',
      device_level: '1',
      need_all_video_definition: '1',
      need_mp4_align: '0',
      use_os_player: '0',
      video_platform: '1024',
      source: '0',
      from_video_id: ''
    });
    return query;
  }
function decodeModel(value) {
    if (typeof value === 'string') {
      try { return parseExactJSON(value); } catch (ignored) {}
    }
    return value;
  }
function videoTabEnvelope(vid, root) {
    var data = asMap(root && root.data);
    if (!data) return null;
    var rows = asMap(data.video_model_data) || data;
    var row = asMap(rows[String(vid)]);
    if (!row && data.video_model != null) row = data;
    if (!row) {
      Object.keys(rows).some(function (key) {
        var candidate = asMap(rows[key]);
        if (candidate && candidate.video_model != null) { row = candidate; return true; }
        return false;
      });
    }
    if (!row || row.video_model == null) return null;
    var model = decodeModel(row.video_model);
    return { code: 0, data: (function () { var out = {}; out[String(vid)] = { video_model: model }; return out; }()) };
  }
function videoTabEnvelopeExact(vid, root) {
    var data = asMap(root && root.data);
    if (!data) return null;
    var rows = asMap(data.video_model_data) || data;
    var row = asMap(rows[String(vid)]);
    if (!row || row.video_model == null) return null;
    var model = decodeModel(row.video_model);
    if (!model || typeof model !== 'object' || Array.isArray(model)) return null;
    return { code: 0, data: (function () { var out = {}; out[String(vid)] = { video_model: model }; return out; }()) };
  }
module.exports={trim:trim,number:number,fail:fail,parseExactJSON:parseExactJSON,bitCount:bitCount,base36:base36,decodeSpade:decodeSpade,modelString:modelString,modelRows:modelRows,asMap:asMap,businessCode:businessCode,modelURL:modelURL,isByteVC2:isByteVC2,onlyByteVC2:onlyByteVC2,sameFallbackVideo:sameFallbackVideo,fallbackCodecURL:fallbackCodecURL,fallbackAPI:fallbackAPI,playbackQuery:playbackQuery,videoTabQuery:videoTabQuery,decodeModel:decodeModel,videoTabEnvelope:videoTabEnvelope,videoTabEnvelopeExact:videoTabEnvelopeExact,ua:typeof UA==='undefined'?'':UA};

};
factories["official-playback"]=function(module,exports,require){
// SPDX-License-Identifier: GPL-3.0-only
// Anonymous registration and full v5 query adapted from OOIUa/hongguo-android
// v0.8.0, commit 12e373137e33f0155cbc33484dfdfdfa632c9906.
'use strict';
var device = require('./device-pure'), crypto = require('crypto');
var signer = require('./playback-v5-sign');
var REGISTER = 'https://log5-applog-lf.fqnovel.com/service/2/device_register/?tt_data=a&cronet_version=8d40f833_2026-03-03&ttnet_version=4.2.243.31-douyin&use_store_region_cookie=1';
var REGISTER_UA = 'com.phoenix.read/72232 (Linux; U; Android 16; zh_CN; 25053RT47C; Build/BP2A.250605.031.A3)';
var TAB = 'https://api5-normal-sinfonlineb.fqnovel.com/reading/bookapi/video_tab/multi_video_model/v1/';
var TAB_UA = 'com.phoenix.read/73932 (Linux; U; Android 16; zh_CN; 25053RT47C; Build/BP2A.250605.031.A3; Cronet/TTNetVersion:04657795 2026-01-23 QuicVersion:c67e9834 2025-09-08)';
function error(code) { var e = new Error(code); e.code = code; e.stage = 'device_register'; throw e; }
function payload(d, stamp) {
  return Buffer.from(JSON.stringify({ magic_tag: 'ss_app_log', header: {
    display_name: '红果免费短剧', update_version_code: 73932, manifest_version_code: 73932,
    app_version_minor: '7.3.9.32', aid: 8662, channel: 'update_64', package: 'com.phoenix.read',
    app_version: '7.3.9.32', version_code: 73932, sdk_version: '3.7.0-rc.34-fanqie-xiaoshuo',
    sdk_target_version: 29, git_hash: '3a88f4e', os: 'Android', os_version: '16', os_api: 36,
    device_model: '25053RT47C', device_brand: 'Redmi', device_manufacturer: 'Redmi',
    cpu_abi: 'arm64-v8a', release_build: 'b5e187f', density_dpi: 520, display_density: 'mdpi',
    resolution: '1280x2772', language: 'zh', timezone: 8, access: 'wifi', not_request_sender: 0,
    carrier: 'CHINA MOBILE', mcc_mnc: '46000', rom: 'eng.root.20231116.160340',
    rom_version: 'W528JS release-keys', cdid: d.cdid, sig_hash: '56a962410c494bbaf0b58dba20cae56f',
    openudid: d.openudid, clientudid: d.clientudid, ipv6_list: [], region: 'CN',
    tz_name: 'Asia/Shanghai', tz_offset: 28800, sim_region: 'cn', sim_serial_number: [],
    oaid_may_support: false, req_id: device.uuid(), device_platform: 'android',
    custom: { account_region_src: 'fallback', account_region: 'cn', host_bit: 64, dragon_device_type: 'phone' },
    pre_installed_channel: '', apk_first_install_time: stamp, is_system_app: 0,
    sdk_flavor: 'china', guest_mode: 0
  }, _gen_time: stamp }));
}
function register(http) {
  var d = device.device(), stamp = Date.now();
  var body = device.ttEncrypt(payload(d, stamp), crypto.randomBytes(32));
  var h = { 'User-Agent': REGISTER_UA, Accept: 'application/json',
    'Content-Type': 'application/octet-stream;tt-data=a', 'log-encode-type': 'gzip',
    'x-ss-dp': '8662', 'x-ss-req-ticket': String(stamp), 'x-vc-bdturing-sdk-version': '4.0.3.cn',
    lc: '101', 'sdk-version': '2', 'passport-sdk-version': '5051452',
    'x-neptune': '-8|50:51:59:30:40:47:49:39',
    'x-ss-stub': crypto.createHash('md5').update(body).digest('hex').toUpperCase() };
  return http('POST', REGISTER, h, body).then(function (r) {
    if (r.status !== 200) error('DEVICE_REGISTER_HTTP');
    var bytes = r.body, root;
    try {
      if (bytes.slice(0, 6).equals(Buffer.from([0x74, 0x63, 5, 0x10, 0, 0]))) bytes = device.ttDecrypt(bytes);
      root = device.parseExactJSON(bytes.toString('utf8'));
    } catch (invalidResponse) { error('DEVICE_REGISTER_INVALID'); }
    if (!root || typeof root !== 'object' || Array.isArray(root)) error('DEVICE_REGISTER_INVALID');
    var did = device.str(root.device_id_str || root.device_id), iid = device.str(root.install_id_str || root.install_id);
    if (!device.validID(did) || !device.validID(iid) || !/[1-9]/.test(did) || !/[1-9]/.test(iid)) error('DEVICE_REGISTER_INVALID');
    var egdi = root.klink_egdi || (root.data && root.data.klink_egdi);
    var identity = { deviceID: did, installID: iid, cdid: d.cdid,
      egdi: typeof egdi === 'string' && egdi.length <= 8192 ? egdi.trim() : '' };
    var activate = 'https://log5-applog-lf.fqnovel.com/service/2/app_alert_check/?aid=8662&app_name=novelread&channel=update_64' +
      '&device_id=' + did + '&iid=' + iid + '&device_platform=android&os=android&version_code=73932&version_name=7.3.9.32&_rticket=' + Date.now();
    // Activation is best effort and bounded inside the existing episode budget.
    return http('GET', activate, { 'User-Agent': REGISTER_UA, Accept: 'application/json' }, null, 3000)
      .then(function () { return identity; }, function () { return identity; });
  });
}
function query(d) {
  var q = { device_platform: 'android', os: 'android', ssmix: 'a', cdid: d.cdid,
    channel: 'vivo_8662_64', aid: '8662', app_name: 'novelread', version_code: '74332',
    version_name: '7.4.3.32', manifest_version_code: '74332', update_version_code: '74332',
    resolution: '1920*1080', dpi: '280', device_type: 'PGT-AN10', device_brand: 'HONOR',
    language: 'zh', os_api: '31', os_version: '12', ac: 'wifi', host_abi: 'arm64-v8a',
    dragon_device_type: 'phone', pv_player: '74332', compliance_status: '0',
    need_personal_recommend: '1', player_so_load: '1', is_android_pad_screen: '0',
    rom_version: 'V417IR+release-keys', iid: d.installID, device_id: d.deviceID };
  if (d.egdi) q.klink_egdi = d.egdi;
  return q;
}
function tab(vid, d, stamp) {
  var q = query(d);
  Object.assign(q, { video_id: vid, video_id_type: '0', device_level: '1',
    need_all_video_definition: '1', need_mp4_align: '0', use_os_player: '0',
    video_platform: '1024', source: '0', from_video_id: '' });
  var s = signer.signOfficial(q, Buffer.alloc(0), stamp);
  return { url: TAB + '?' + s.query,
    headers: Object.assign({}, s.headers, { 'User-Agent': TAB_UA, Accept: 'application/json' }) };
}
function selfTest() {
  var rows = require('./official-signing-vectors');
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i], values = query({ deviceID: '123', installID: '456', cdid: 'synthetic', egdi: 'synthetic+egdi' });
    Object.assign(values, { video_id: '123', video_id_type: '0', device_level: '1',
      need_all_video_definition: '1', need_mp4_align: '0', use_os_player: '0',
      video_platform: '1024', source: '0', from_video_id: '' });
    var tuned = signer.tuneKeys(values, Buffer.alloc(0), row.stamp, Object.keys(values).concat(['_rticket']), true);
    var medusa = signer.medusa(values, row.ts, tuned.q, tuned.m,
      [0x80000000, 0x80000000, 0x80000000],
      { nonce: 'synthetic', started: 1800000000000, now: 1800000000000, launch: 110, pid: 11001 }, true);
    if (tuned.query !== row.query || medusa !== row.medusa || signer.helios(row.ts, 0x80000000) !== row.helios) return false;
  }
  return rows.length === 4;
}
module.exports = { register: register, query: query, tab: tab, payload: payload, selfTest: selfTest };

};
factories["official-signing-vectors"]=function(module,exports,require){
module.exports=[
  {
    "values": {
      "manifest_version_code": "74332",
      "iid": "456",
      "channel": "vivo_8662_64",
      "use_os_player": "0",
      "device_type": "PGT-AN10",
      "language": "zh",
      "host_abi": "arm64-v8a",
      "video_id_type": "0",
      "need_all_video_definition": "1",
      "source": "0",
      "dragon_device_type": "phone",
      "resolution": "1920*1080",
      "update_version_code": "74332",
      "from_video_id": "",
      "cdid": "synthetic",
      "pv_player": "74332",
      "os_api": "31",
      "klink_egdi": "synthetic+egdi",
      "dpi": "280",
      "compliance_status": "0",
      "ac": "wifi",
      "os": "android",
      "device_id": "123",
      "video_platform": "1024",
      "os_version": "12",
      "version_code": "74332",
      "device_level": "1",
      "app_name": "novelread",
      "need_mp4_align": "0",
      "version_name": "7.4.3.32",
      "device_brand": "HONOR",
      "need_personal_recommend": "1",
      "ssmix": "a",
      "player_so_load": "1",
      "device_platform": "android",
      "is_android_pad_screen": "0",
      "aid": "8662",
      "rom_version": "V417IR+release-keys",
      "video_id": "123"
    },
    "query": "device_platform=android&os=android&ssmix=a&cdid=synthetic&channel=vivo_8662_64&aid=8662&app_name=novelread&version_code=74332&version_name=7.4.3.32&manifest_version_code=74332&update_version_code=74332&resolution=1920*1080&dpi=280&device_type=PGT-AN10&device_brand=HONOR&language=zh&os_api=31&os_version=12&ac=wifi&host_abi=arm64-v8a&dragon_device_type=phone&pv_player=74332&compliance_status=0&need_personal_recommend=1&player_so_load=1&is_android_pad_screen=0&rom_version=V417IR%2Brelease-keys&iid=456&device_id=123&klink_egdi=synthetic%2Begdi&video_id=123&video_id_type=0&device_level=1&need_all_video_definition=1&need_mp4_align=0&use_os_player=0&video_platform=1024&source=0&from_video_id=&_rticket=1800000000028",
    "helios": "AAAAgOldh6XkgPCcSOD+1hk6geYVwA9oX+NbtYeS3DNddvJe",
    "stamp": 1800000000000,
    "medusa": "BdJJay2ZBqFJp0QoP2fnRyK/hT0AAAABV8ogAACAgXkIWBPWQF+jWatvLtmOCtggh5j46lKrmYh2l2n9ZSeTX9Mu5urlbBlROmf8fhaZkyT80vC2cVYTbS1dUn0AXrX9cDqLx7OMegPqajfsfLlgEsEZwnxaKMZALfrQtub+ry/l9U2yYyeqAGiyrBBq4OZn19Aa5SrcBUbdmyINw/OZZC9H7RZ5KrtKqlzCkcHar6KcVh0MOMW9GEVIJQOkZDbTXCsWukqeoZHf7cNCZ28zDvRB6B5/+2dwP0Mozo637l2HAwoqXJ2A32jqvakCvOlHJh3G8nIfs6ehqFtZqI3KLXkC5SQHIatMDbIaF0GkZ60pkUxHruEj3pL3y0X5D16W9fEQ94fOFjxusbDEwEkFyEKoXzmk7qTIBuVSPwnXJMPK04XaOSFfWVvBrI3gFCeG9AfqyNsGkWLwT+Ro6smSd+PKqVcINdlGuL17ogermzskz+zFE1d275hxjvZ6Sxetup5KPv8n/h0dN70tlmDrZWsiO1Oe9l9YgynTG7wiQnoqXgm7fnnTpW164zXtUysHZZrstu5zenKJbHsztUStSVaFa8IykY6FWykHDSDSgtKNVNpOl1AX+ElUasMEhI82kBOzMPw4spdDwxY/YCWPQLzfw8GWLXq0XKTsXN6ZZDVH88HmpPkH4NwA4vpSKcfOFYTFp6ONTe6mMdFcYO7oegwhFamzXsHkVoO6tpA7xesRUMjT5y2E6CrLlEE++5ziOuD0vvZWNjRnrg0NFMH+58C4uNSRCwkGUw10FyKPsHT69PRn2h5Yjmtanw4itkMIWm0oujXjaWtjCWGb+MNSCkvzXYcbx9vkgajmYP9/////f3+7AIA=",
    "ts": 1800000000
  },
  {
    "values": {
      "manifest_version_code": "74332",
      "iid": "456",
      "channel": "vivo_8662_64",
      "use_os_player": "0",
      "device_type": "PGT-AN10",
      "language": "zh",
      "host_abi": "arm64-v8a",
      "video_id_type": "0",
      "need_all_video_definition": "1",
      "source": "0",
      "dragon_device_type": "phone",
      "resolution": "1920*1080",
      "update_version_code": "74332",
      "from_video_id": "",
      "cdid": "synthetic",
      "pv_player": "74332",
      "os_api": "31",
      "klink_egdi": "synthetic+egdi",
      "dpi": "280",
      "compliance_status": "0",
      "ac": "wifi",
      "os": "android",
      "device_id": "123",
      "video_platform": "1024",
      "os_version": "12",
      "version_code": "74332",
      "device_level": "1",
      "app_name": "novelread",
      "need_mp4_align": "0",
      "version_name": "7.4.3.32",
      "device_brand": "HONOR",
      "need_personal_recommend": "1",
      "ssmix": "a",
      "player_so_load": "1",
      "device_platform": "android",
      "is_android_pad_screen": "0",
      "aid": "8662",
      "rom_version": "V417IR+release-keys",
      "video_id": "123"
    },
    "query": "device_platform=android&os=android&ssmix=a&cdid=synthetic&channel=vivo_8662_64&aid=8662&app_name=novelread&version_code=74332&version_name=7.4.3.32&manifest_version_code=74332&update_version_code=74332&resolution=1920*1080&dpi=280&device_type=PGT-AN10&device_brand=HONOR&language=zh&os_api=31&os_version=12&ac=wifi&host_abi=arm64-v8a&dragon_device_type=phone&pv_player=74332&compliance_status=0&need_personal_recommend=1&player_so_load=1&is_android_pad_screen=0&rom_version=V417IR%2Brelease-keys&iid=456&device_id=123&klink_egdi=synthetic%2Begdi&video_id=123&video_id_type=0&device_level=1&need_all_video_definition=1&need_mp4_align=0&use_os_player=0&video_platform=1024&source=0&from_video_id=&_rticket=1800000001012",
    "helios": "AAAAgP8cAFskZQCdtTN/xhkUFMsVwA9oX+NbtYeS3DNddvJe",
    "stamp": 1800000001000,
    "medusa": "BNJJayyZBqFIp0QoPmfnRyO/hT0AAAAB38oACACEgSIKGLRRSRbAs8oENR3RDL0HS9umXelDt0d6KqAvGg7NUNAvwOWTxrL6/TSkyRPw7bKCrXHteG+h4coYmnCw1HFVyZ8/zCev389xeAzGGIRtrTl9WY0y4ljOr3xCrcieiqR04mTgi7reHtRtxGfd64lazu4ROGA4NyiEt29OzLjdCxH9NPfSh1Kixccm3OcgAoN2IqBUnwA0EZTPSOAWlj/XWl1YspTs1NALAmHjvIxH1qYbdFSpc+DCsOeTzgNfDPykudjjtB3cuWaIrxuZEgVGE/N/nChvhlgc2HYpVhYgDZdd/ulOrI7gTwytePlM2C61+uSVUMB0RT3jxhFkL6oRnS2ex4hGVa45te86dnYipA7uOUw1V/i1kbZXODYp/FeGJXb3Yf6JyP1l61PX57fXDqE1rLNhUpce9U9racoLuAYm7cm4IjE0g3LIdAK1bm7d1+flKabTEdJBUfhJ0JhqBSDydQ1n6n0yrmpo6UCfprn3Y6T5fGYftskZLUOjyadLpu/0foAc4hw20OB0xAxPxl9tYdHRSEFCBXe6/f+4rmSPJb6b0G/LCPk+9KYP9rxCwMUaLulBM0kbENs+bfq0/+oLLOT8/ClI6VwTR8C5bqNVvMRFtgmkSwy6VlirS340oyz5w/Fm4yfY8UrADXCPxlvq50oCmsWqZnccCG2cWMkpFqmzXsHkVoO6tpA7xesRUMjT5y2E6CrLlEE++5ziOuD0vvZWNjRnrg0NFMH+58C4uNSRCwkGUw10FyKPsHT69PRn2h5Yjmtanw4itkMIWm0oujXjaWtjCWGb+MNSCkvzXYcbx9vkgajmP/9/////f3+7AIA=",
    "ts": 1800000001
  },
  {
    "values": {
      "manifest_version_code": "74332",
      "iid": "456",
      "channel": "vivo_8662_64",
      "use_os_player": "0",
      "device_type": "PGT-AN10",
      "language": "zh",
      "host_abi": "arm64-v8a",
      "video_id_type": "0",
      "need_all_video_definition": "1",
      "source": "0",
      "dragon_device_type": "phone",
      "resolution": "1920*1080",
      "update_version_code": "74332",
      "from_video_id": "",
      "cdid": "synthetic",
      "pv_player": "74332",
      "os_api": "31",
      "klink_egdi": "synthetic+egdi",
      "dpi": "280",
      "compliance_status": "0",
      "ac": "wifi",
      "os": "android",
      "device_id": "123",
      "video_platform": "1024",
      "os_version": "12",
      "version_code": "74332",
      "device_level": "1",
      "app_name": "novelread",
      "need_mp4_align": "0",
      "version_name": "7.4.3.32",
      "device_brand": "HONOR",
      "need_personal_recommend": "1",
      "ssmix": "a",
      "player_so_load": "1",
      "device_platform": "android",
      "is_android_pad_screen": "0",
      "aid": "8662",
      "rom_version": "V417IR+release-keys",
      "video_id": "123"
    },
    "query": "device_platform=android&os=android&ssmix=a&cdid=synthetic&channel=vivo_8662_64&aid=8662&app_name=novelread&version_code=74332&version_name=7.4.3.32&manifest_version_code=74332&update_version_code=74332&resolution=1920*1080&dpi=280&device_type=PGT-AN10&device_brand=HONOR&language=zh&os_api=31&os_version=12&ac=wifi&host_abi=arm64-v8a&dragon_device_type=phone&pv_player=74332&compliance_status=0&need_personal_recommend=1&player_so_load=1&is_android_pad_screen=0&rom_version=V417IR%2Brelease-keys&iid=456&device_id=123&klink_egdi=synthetic%2Begdi&video_id=123&video_id_type=0&device_level=1&need_all_video_definition=1&need_mp4_align=0&use_os_player=0&video_platform=1024&source=0&from_video_id=&_rticket=1800000002017",
    "helios": "AAAAgIYHv4VhpWqHAYV6IUj2ICoVwA9oX+NbtYeS3DNddvJe",
    "stamp": 1800000002000,
    "medusa": "B9JJay+ZBqFLp0QoPWfnRyC/hT0AAAABiMoAABCEAZYIGKFMp3JBWQwaBe4uPrl/nb/60vGa0SPigm64FPvED7Bj4ZFzaU/oiMGEk6G3WVY5zO2pvoEwR3BXfhdPQgJajqjZyn1374CLohJNjg87po//x/I7HT6wsojIbGjYOPOZ1CnxL4JbaGkc+Xs+2MOHj+NxfuIocfxRihfBjtVD7gAvPGgTZxuWvbrHnoSBEvwd/vnyA/6fTBVAt0Yc4Bo07psiqr7Jp2wroVzrE22v6k8+liHE1bfeqhtf3Z/OlJPGVdhPkVjVTsFQoepkxhSkg9fONWRsqjwanFcsD0NVl7aKY5hghk0AiZrVQagVgznwwfZC/Hgd1sg9p+AIe+x/LBb47y+D1F83FOTDxGgAgxVV7XMAlSMtqPckYjEr6xGldtOL4RZO7vE/xUSFZmmmNznG22fwqqHXsSq8CmIvMbYq3VREUC6e1T4YPgBvthZWY7uLtjAQtTTSL5q4+UDFIFKKRGy933oHBMrb1CSLKvE5bRZmdqM/9Pv2DCmRQgmxE+xD3vQfRiZDbRgOLynL/QKwLP59eoQ+I0pxlhN2xHEx5Rp+Gxa3Qr9KHeXMqYF8bGrTyz8Q0x/JrEBe02/m9vDCWIhzZFp7P7nGTM/MtFhEgyw5PVldNE7TX/9tpMcQ28ueWU7xuhh45UrUrWFn/mLr9NPTbzUaE0ySi/+LVooxF6mzXsHkVoO6tpA7xesRUMjT5y2E6CrLlEE++5ziOuD0vvZWNjRnrg0NFMH+58C4uNSRCwkGUw10FyKPsHT69PRn2h5Yjmtanw4itkMIWm0oujXjaWtjCWGb+MNSCkvzXYcbx9vkgajmI/9/////f3+7AIA=",
    "ts": 1800000002
  },
  {
    "values": {
      "manifest_version_code": "74332",
      "iid": "456",
      "channel": "vivo_8662_64",
      "use_os_player": "0",
      "device_type": "PGT-AN10",
      "language": "zh",
      "host_abi": "arm64-v8a",
      "video_id_type": "0",
      "need_all_video_definition": "1",
      "source": "0",
      "dragon_device_type": "phone",
      "resolution": "1920*1080",
      "update_version_code": "74332",
      "from_video_id": "",
      "cdid": "synthetic",
      "pv_player": "74332",
      "os_api": "31",
      "klink_egdi": "synthetic+egdi",
      "dpi": "280",
      "compliance_status": "0",
      "ac": "wifi",
      "os": "android",
      "device_id": "123",
      "video_platform": "1024",
      "os_version": "12",
      "version_code": "74332",
      "device_level": "1",
      "app_name": "novelread",
      "need_mp4_align": "0",
      "version_name": "7.4.3.32",
      "device_brand": "HONOR",
      "need_personal_recommend": "1",
      "ssmix": "a",
      "player_so_load": "1",
      "device_platform": "android",
      "is_android_pad_screen": "0",
      "aid": "8662",
      "rom_version": "V417IR+release-keys",
      "video_id": "123"
    },
    "query": "device_platform=android&os=android&ssmix=a&cdid=synthetic&channel=vivo_8662_64&aid=8662&app_name=novelread&version_code=74332&version_name=7.4.3.32&manifest_version_code=74332&update_version_code=74332&resolution=1920*1080&dpi=280&device_type=PGT-AN10&device_brand=HONOR&language=zh&os_api=31&os_version=12&ac=wifi&host_abi=arm64-v8a&dragon_device_type=phone&pv_player=74332&compliance_status=0&need_personal_recommend=1&player_so_load=1&is_android_pad_screen=0&rom_version=V417IR%2Brelease-keys&iid=456&device_id=123&klink_egdi=synthetic%2Begdi&video_id=123&video_id_type=0&device_level=1&need_all_video_definition=1&need_mp4_align=0&use_os_player=0&video_platform=1024&source=0&from_video_id=&_rticket=1800000003034",
    "helios": "AAAAgJGyhLcwZ5NBbt3DXJ9OLy8VwA9oX+NbtYeS3DNddvJe",
    "stamp": 1800000003000,
    "medusa": "BtJJay6ZBqFKp0QoPGfnRyG/hT0AAAABe4ogCACAgbAIWOANHnyIH2e9ZwGTqvaxKFy+XNlZp9FfkXEHumP2NKvA+bwygJE7QdREb3ah8iVEWi+JedsHWKDIVddid47Nr3xdcjylOOxXKKoLhCF8guHoDbpHPsN+XqsMKZZs+wdpIVSXVqN9OJQLFcLMQ6a+gy9ROTc43qLFWGAZAu4/IPvuZ17/tscnRAJVw9CE/oLrhTPuGarH5qlTmjP6Qp2y3twL6oVIQNB34coW2vaa3FW8hmvGG7QKE8iK50UK9NB9AyaKXXVYN4YLs3m+CRDzNFOa03faODpZ1HEcyHEdu5/nEzzFh7DsnZS7eFvR5lJIcSscVRPt+nmM+UO7A3xzvIbsv7nHaMZvL0XpMqXwwweFeecoWJXfraGLtSYkhJMolFn93G2Q899DNM9qhkmHHlGiwGP79kxssZ8R6jBd8OoJsMCNgu+i9TNQcaK33u1RMjSgcClmOT4O38Ey0mO3lunN1S0GwcOowI81eB/2ymMNWnN+EYCdzJTlP6/W9mM+0UksAivFR0gx3Huk58Xk4JExUZQLU0NnKitz55YJujUJ4Bp7M1CdXWFH17aouy0LOyOqSUJ5lYTXs4oR47kgGllrvMCtWm3MkRPBmnwPH8YvSl372qANb8TAXfpHjrzlb5uIObfebNP0fAIPuxT+4fOKTLdIV2HQEabHh0RSVdu6+KmzXsHkVoO6tpA7xesRUMjT5y2E6CrLlEE++5ziOuD0vvZWNjRnrg0NFMH+58C4uNSRCwkGUw10FyKPsHT69PRn2h5Yjmtanw4itkMIWm0oujXjaWtjCWGb+MNSCkvzXYcbx9vkgajm5/9/////f3+7AIA=",
    "ts": 1800000003
  }
]
;
};
factories["resolver"]=function(module,exports,require){
'use strict';
// Optional signed playback repair. The production Go sequence remains fallback.
// All anonymous registration, request construction, signing and model parsing
// below run in JS; the host exposes only byte primitives and bounded HTTP.
var device=require('./device-pure'),model=require('./model-pure'),v5=require('./mobile-playback-v5'),sign=require('./passport-sign'),crypto=require('crypto');
var single=require('./single-playback-profile'),registered=require('./single-registered-profile');
var official=require('./official-playback');
var providerDeadline=0;
var tabIdentity=null,v5Identity=null,singleIdentity=null,singleRefreshAfter=0;
var playbackUA='com.phoenix.read/71532 (Linux; U; Android 9; SM-N9860; Build/PQ3A.190705.10241111;tt-ok/3.12.13.20)';
var fallbackUA='com.phoenix.read/71332 (Linux; U; Android 16; zh_CN; 25053RT47C; Build/BP2A.250605.031.A3; Cronet/TTNetVersion:04657795 2026-01-23 QuicVersion:c67e9834 2025-09-08)';
var tabEndpoint='https://api5-normal-sinfonlineb.fqnovel.com/reading/bookapi/video_tab/multi_video_model/v1/';
function failure(stage,code){var e=new Error(code);e.code=code;e.stage=stage;throw e;}
function http(method,url,headers,body,timeout){return Promise.resolve().then(function(){var remaining=Math.min(timeout||8000,providerDeadline?providerDeadline-Date.now():8000);if(remaining<=0)failure('resolver_js','UPSTREAM_TIMEOUT');return __resolverHost.http(method,url,headers,body||Buffer.alloc(0),remaining);});}
function registrationQuery(q){function encode(value){return encodeURIComponent(String(value)).replace(/[!'()*]/g,function(c){return '%'+c.charCodeAt(0).toString(16).toUpperCase();}).replace(/%20/g,'+');}return Object.keys(q).sort().map(function(key){return encode(key)+'='+encode(q[key]);}).join('&');}
function cookieHeader(cookies){return Object.keys(cookies||{}).filter(function(k){return ['install_id','ttreq','store-region','store-region-src'].indexOf(k)>=0&&cookies[k];}).sort().map(function(k){return k+'='+cookies[k];}).join('; ');}
function register(profile){
  var d=device.device(),stamp=Date.now(),ts=Math.floor(stamp/1000),plain=device.protocolDevicePayload(d,stamp);
  if(profile)plain=profile.payload(plain,d,stamp);
  var body=device.ttEncrypt(plain,crypto.randomBytes(32)),q=profile?profile.query({cdid:d.cdid,openudid:d.openudid}):device.appQuery({device:d});
  delete q.device_id;delete q.iid;q.tt_data='a';q.ts=String(ts);q._rticket=String(stamp);q.package='com.phoenix.read';
  var query=registrationQuery(q),headers={'User-Agent':profile?profile.ua:device.ua,'Content-Type':'application/octet-stream;tt-data=a','Accept':'application/json; charset=utf-8,application/x-protobuf','Content-Encoding':'gzip','X-Tt-Request-Tag':'t=0;n=1','Log-Encode-Type':'gzip','Lc':'102','Sdk-Version':'2','Passport-Sdk-Version':'60755','Passport-Sdk-Settings':'device_transfer_s_0,device_transfer_ab_1','X-SS-DP':'8662','X-Vc-Bdturing-Sdk-Version':'4.0.3.cn','X-Tt-Store-Region':'cn','X-Tt-Store-Region-Src':'did','X-Khronos':String(ts),'X-Argus':device.le32(ts).toString('base64'),'X-SS-Req-Ticket':String(stamp),'X-SS-STUB':crypto.createHash('md5').update(body).digest('hex'),'X-Gorgon':sign.gorgon(query,body,ts,crypto.randomBytes(2).readUInt16LE(0))};
  return http('POST',(profile?profile.deviceBase:'https://log.snssdk.com')+'/service/2/device_register/?'+query,headers,body).then(function(response){
    if(response.status!==200)failure('device_register','DEVICE_REGISTER_HTTP');
    var bytes=response.body;if(bytes.slice(0,6).equals(Buffer.from([0x74,0x63,5,0x10,0,0])))bytes=device.ttDecrypt(bytes);
    var root=device.parseExactJSON(bytes.toString('utf8')),did=device.str(root.device_id_str||root.device_id),iid=device.str(root.install_id_str||root.install_id);
    if(!device.validID(did)||!device.validID(iid)||!/[1-9]/.test(did)||!/[1-9]/.test(iid))failure('device_register','DEVICE_REGISTER_INVALID');
    var cookies=Object.assign({},response.cookies||{},{install_id:iid});
    return {deviceID:did,installID:iid,cdid:d.cdid,openudid:d.openudid,cookies:cookies};
  });
}
function options(m,mode){var out=[];model.modelRows(m.video_list).forEach(function(row){
  var meta=row.video_meta||{},enc=row.encrypt_info||{},codec=String(row.codec_type||meta.codec_type||'');if(model.isByteVC2(codec))return;
  if(mode==='software'&&!/^(h264|avc|avc1)$/i.test(codec))return;
  var backup=row.backup_url_list||[],raw=String(row.main_url||row.backup_url||backup[0]||''),url=model.modelURL(raw,m);if(!/^https:\/\//i.test(url))return;
  var key=null,spade=enc.spade_a||row.spade_a;if(spade){try{key=model.decodeSpade(spade);}catch(ignored){return;}}if(!key&&(row.encrypt===true||meta.encrypt===true))return;
  var width=Number(row.vwidth||row.width||meta.vwidth||meta.width)||0,height=Number(row.vheight||row.height||meta.vheight||meta.height)||0;
  var definition=String(row.quality_desc||row.definition||meta.definition||'').match(/(\d{3,4})/);if(definition)height=Number(definition[1]);
  out.push({URL:url,Key:key?key.toString('base64'):null,Codec:codec,Width:Math.floor(width),Height:Math.floor(height),Quality:height>0?height+'P':'',Duration:Math.floor(Number(m.video_duration)||0)});
});return out;}
function fallback(raw,hops){return http('GET',raw,{'User-Agent':fallbackUA,'Accept':'application/json; charset=utf-8,application/x-protobuf'}).then(function(r){
  if([301,302,303,307,308].indexOf(r.status)>=0){if((hops||0)>=3||!/^https:\/\//.test(r.location||''))failure('fallback_api','FALLBACK_API_REDIRECT');return fallback(r.location,(hops||0)+1);}
  if(r.status!==200)failure('fallback_api','FALLBACK_API_HTTP');var root=model.parseExactJSON(r.body.toString('utf8'));if(model.businessCode(root)&&model.businessCode(root)!=='0')failure('fallback_api','FALLBACK_API_BUSINESS');
  var info=root.video_info;if(!info||typeof info!=='object')failure('fallback_api','FALLBACK_API_INVALID');if(model.businessCode(info)&&model.businessCode(info)!=='0')failure('fallback_api','FALLBACK_API_BUSINESS');if(!info.data||typeof info.data!=='object')failure('fallback_api','FALLBACK_API_INVALID');return info.data;
});}
function compatible(m,mode){if(model.modelRows(m.video_list).length&&!model.onlyByteVC2(m))return Promise.resolve(m);var raw=model.fallbackAPI(m.fallback_api);if(!raw)return Promise.resolve(m);
 return fallback(raw).then(function(original){if(!model.sameFallbackVideo(m,original)){if(model.onlyByteVC2(m))return m;failure('fallback_api','FALLBACK_API_MISMATCH');}if(!model.onlyByteVC2(original))return original;
 var codecs=['codec_type=1','codec_type=0&force_codec=h264','codec_type=3'];function next(i){if(i>=codecs.length)return Promise.resolve(original);return fallback(model.fallbackCodecURL(raw,codecs[i])).then(function(candidate){if(model.sameFallbackVideo(m,candidate)&&model.sameFallbackVideo(original,candidate)&&options(candidate,mode).length)return candidate;return next(i+1);},function(e){if(e.code==='FALLBACK_API_BUSINESS')throw e;return next(i+1);});}return next(0);
 },function(e){if(model.onlyByteVC2(m)&&e.code!=='FALLBACK_API_BUSINESS')return m;throw e;});}
function responseRoot(r,stage){if(r.status!==200)failure(stage,'VIDEO_MODEL_HTTP');if(!r.body.toString('utf8').trim()){var e=new Error('empty');e.code='VIDEO_MODEL_EMPTY';e.stage=stage;e.retry_after=r.retry_after;throw e;}var root=model.parseExactJSON(r.body.toString('utf8'));if(model.businessCode(root)&&model.businessCode(root)!=='0')failure(stage,'VIDEO_MODEL_BUSINESS');return root;}
function modelOptions(m,request,stage){if(typeof m==='string'){try{m=model.parseExactJSON(m);}catch(e){m=model.parseExactJSON(Buffer.from(m,'base64').toString('utf8'));}}if(!m||typeof m!=='object')failure(stage,'VIDEO_MODEL_MISSING');return compatible(m,request.codec_mode).then(function(m){var out=options(m,request.codec_mode);if(!out.length)failure(stage,'VIDEO_MODEL_LIST_EMPTY');return out;});}
function envelopeOptions(root,request,stage,kind){var data=root.data||{},entry;if(kind==='tab'){var env=model.videoTabEnvelopeExact(request.vid,root);if(env)entry=env.data[request.vid];}else if(kind==='v5'){entry=(data[request.content_type]||data)[request.vid];}else{entry=data[request.vid]||data;}
 var m=entry&&entry.video_model;if(m==null&&kind==='single'&&(data.video_list||data.fallback_api))m=data;return modelOptions(m,request,stage);}
function videoTab(request){var get=tabIdentity?Promise.resolve(tabIdentity):official.register(http).then(function(d){tabIdentity=d;return d;});return get.then(function(d){var built=official.tab(request.vid,d,Date.now());return http('GET',built.url,built.headers).then(function(r){if(r.status===401||r.status===403||r.status===200&&!r.body.length)tabIdentity=null;return envelopeOptions(responseRoot(r,'video_tab'),request,'video_tab','tab');});});}
function v5Request(request,d,alternate){var built=v5.build(request.vid,request.content_type,d,Date.now(),alternate);return http('POST',built.url,built.headers,built.body).then(function(r){return envelopeOptions(responseRoot(r,'multi_video_model'),request,'multi_video_model','v5');});}
function mobileV5(request){var get=v5Identity?Promise.resolve(v5Identity):register().then(function(d){v5Identity=d;return d;});return get.then(function(d){return v5Request(request,d,false).catch(function(e){if(e.code!=='VIDEO_MODEL_EMPTY'||e.retry_after)throw e;return v5Request(request,d,true).catch(function(alt){if(alt.code!=='VIDEO_MODEL_EMPTY'||alt.retry_after)throw alt;var built=v5.videoTabRecovery(request.vid,d,Date.now());return http('GET',built.url,built.headers).then(function(r){return envelopeOptions(responseRoot(r,'video_tab'),request,'video_tab','tab');});});});});}
function legacy(request){var hosts=['https://api5-normal-sinfonlineb.fqnovel.com','https://api5-normal-hl.fqnovel.com'];function round(i){return register().then(function(d){function host(n){var stamp=Date.now(),q=model.playbackQuery(d,stamp),ids={};ids[request.content_type]=[request.vid];var body=Buffer.from(JSON.stringify({biz_param:{detail_page_version:0,device_level:3,disable_digg_stat:false,need_all_video_definition:true,need_mp4_align:false,use_os_player:false,use_server_dns:false,video_platform:1024},mixed_video_id_map:ids})),signed=sign.signPlayback(q,body,stamp,d.deviceID),h=Object.assign({},signed.headers,{'User-Agent':playbackUA,'Accept':'application/json; charset=utf-8,application/x-protobuf','Content-Type':'application/json; charset=UTF-8','Passport-Sdk-Version':'50561','X-Tt-Request-Tag':'t=0;n=0','X-Vc-Bdturing-Sdk-Version':'3.7.2.cn'});return http('POST',hosts[n]+'/novel/player/multi_video_model/v1/?'+signed.query,h,body).then(function(r){return envelopeOptions(responseRoot(r,'multi_video_model'),request,'multi_video_model','legacy');}).catch(function(e){if(e.code!=='VIDEO_MODEL_EMPTY')throw e;if(n===0)return host(1);throw e;});}return host(0);}).catch(function(e){if(e.code==='VIDEO_MODEL_EMPTY'&&i===0)return round(1);throw e;});}return round(0);}
function singleRequest(request,d){var stamp=Date.now(),body=Buffer.from(JSON.stringify({video_id:request.vid,content_type:1,biz_param:{need_all_video_definition:true,video_platform:3}})),s=registered.sign(registered.query(d),body,stamp),h=Object.assign({},s.headers,{'User-Agent':registered.ua,'Content-Type':'application/json; charset=utf-8',Accept:'application/json','X-XS-From-Web':'0','Sdk-Version':'2'});return http('POST',registered.endpoint+'?'+s.query,h,body).then(function(r){return envelopeOptions(responseRoot(r,'video_model'),request,'video_model','single');});}
function registeredSingle(request){function newIdentity(){return registered.register(function(url,method,h,b){return http(method,url,h,b);}).then(function(d){singleIdentity=d;return d;});}return (singleIdentity?Promise.resolve(singleIdentity):newIdentity()).then(function(d){return singleRequest(request,d).catch(function(e){if(e.code!=='VIDEO_MODEL_EMPTY'||Date.now()<singleRefreshAfter)throw e;singleRefreshAfter=Date.now()+600000;return newIdentity().then(function(d){return singleRequest(request,d);});});});}
function oldSingle(request){function attempt(i){return register(single).then(function(d){var stamp=Date.now(),body=Buffer.from(JSON.stringify({video_id:request.vid,biz_param:{video_id_type:0,need_all_video_definition:true,video_platform:3}})),s=sign.signPlayback(single.query(d),body,stamp,d.deviceID),h=Object.assign({},s.headers,{'User-Agent':single.ua,'Content-Type':'application/json; charset=UTF-8',Accept:'application/json; charset=utf-8,application/x-protobuf','Passport-Sdk-Version':'50561','X-Vc-Bdturing-Sdk-Version':'3.7.2.cn','X-Tt-Request-Tag':'t=0;n=0','X-SS-DP':'8662','Lc':'101','X-Reading-Request':String(stamp)+'-'+(crypto.randomBytes(4).readUInt32LE(0)&0x7fffffff)});var cookie=cookieHeader(d.cookies);if(cookie)h.Cookie=cookie;return http('POST',single.endpoint+'?'+s.query,h,body).then(function(r){return envelopeOptions(responseRoot(r,'video_model'),request,'video_model','single');});}).catch(function(e){if(i===0&&fallbackAllowed(e))return attempt(1);throw e;});}return attempt(0);}
function fallbackAllowed(e){return !e||['VIDEO_MODEL_EMPTY','VIDEO_MODEL_HTTP','VIDEO_MODEL_MISSING','VIDEO_MODEL_LIST_EMPTY','VIDEO_MODEL_MISMATCH','DEVICE_REGISTER_HTTP','DEVICE_REGISTER_INVALID','RESOLVER_SCRIPT_FAILED','UPSTREAM_TIMEOUT'].indexOf(e.code)>=0;}
function resolve(text){var request;return Promise.resolve().then(function(){request=JSON.parse(text);if(!/^[0-9]{1,32}$/.test(request.vid||''))failure('multi_video_model','INVALID_VIDEO_ID');var modes={'':'default',default:'default',auto:'auto',mpv_auto:'auto',software:'software',mpv_software:'software',standard:'default'};if(!Object.prototype.hasOwnProperty.call(modes,request.codec_mode||''))failure('multi_video_model','INVALID_CODEC_MODE');request.codec_mode=modes[request.codec_mode||''];request.content_type=request.content_type||'1004';if(!/^[0-9]{1,16}$/.test(request.content_type))failure('multi_video_model','INVALID_CONTENT_TYPE');var paths=[videoTab,mobileV5,legacy,registeredSingle,oldSingle],deadline=Date.now()+30000,groupDeadline=0;function next(i){if(i===0)groupDeadline=Date.now()+8000;else if(i===1)groupDeadline=Date.now()+14000;else if(i===3)groupDeadline=Date.now()+8000;providerDeadline=Math.min(deadline,groupDeadline);return paths[i](request).catch(function(e){if(i<paths.length-1&&(i===0||fallbackAllowed(e)))return next(i+1);throw e;});}return next(0);}).then(function(result){return JSON.stringify({options:result});},function(e){return JSON.stringify({error_code:/^[A-Z0-9_]{1,64}$/.test(e.code||'')?e.code:'RESOLVER_SCRIPT_FAILED',error_stage:/^[a-z_]{1,40}$/.test(e.stage||'')?e.stage:'resolver_js'});});}
function selfTest(text){var rows=JSON.parse(text),s=require('./playback-v5-sign'),q=v5.query({deviceID:'123',installID:'456',cdid:'synthetic'});for(var i=0;i<rows.length;i++){var r=rows[i],t=s.tune(q,Buffer.from(r.body,'hex'),r.ts*1000),med=s.medusa(q,r.ts,t.q,t.m,[0x80000000,0x80000000,0x80000000],{nonce:'synthetic',started:1800000000000});if(t.query!==r.query||med!==r.medusa||s.helios(r.ts,0x80000000)!==r.helios)return 0;}return official.selfTest()?rows.length:0;}
module.exports={resolve:resolve,selfTest:selfTest,metadata:function(){return {name:'hongguo-playback-resolver',version:'2026.11.24.2',protocol:1,native_sm3:!!sign.nativeSM3}},test:{device:device,model:model,options:options,official:official,signer:require('./playback-v5-sign')}};

};
function require(name){if(name.slice(0,2)==='./')name=name.slice(2);if(name==='buffer')return {Buffer:Buffer};if(cache[name])return cache[name].exports;if(!factories[name])throw new Error('module unavailable');var m={exports:{}};cache[name]=m;factories[name](m,m.exports,require);return m.exports;}return require('resolver');})()