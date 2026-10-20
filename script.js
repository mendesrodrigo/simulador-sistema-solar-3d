const $=id=>document.getElementById(id);let sky,bgs;
const P=[
{n:'Mercúrio',au:.39,d:4879,g:3.7,t:167,tr:'−180 a 430 °C',p:88,h:1408,tl:0,sz:.8,or:12,ty:'r',cs:['#8c8680','#b5aea6','#5d5853'],
comp:'Núcleo de ferro enorme (~70% da massa), manto e crosta de silicatos. Superfície cheia de crateras.',atm:'Praticamente nenhuma (exosfera tênue de O, Na, H, He).',life:'Improvável: sem ar e com variações térmicas extremas. Pode haver gelo de água em crateras polares sempre sombreadas.',
trv:'<b>Viagem:</b> ~6 anos (sonda MESSENGER). <b>Na superfície:</b> sem ar, seus fluidos ferveriam e você perderia a consciência em segundos. De dia 430 °C, à noite −180 °C. Gravidade de 38%: saltos quase 3× mais altos. O Sol parece 3× maior.',sk:['#000','#1a1612'],gr:'#6b645c',fx:'heat',L:5},
{n:'Vênus',au:.72,d:12104,g:8.9,t:464,tr:'~464 °C (todo o planeta)',p:225,h:-5832,tl:177,sz:1.5,or:17,ty:'g',cs:['#d9b46a','#e8cf93','#b98f48'],ac:'#e8c070',
comp:'Rochoso, parecido com a Terra em tamanho e massa: núcleo de ferro, manto e crosta basáltica com muitos vulcões.',atm:'96% CO₂, 3,5% N₂; nuvens de ácido sulfúrico. Pressão 92× a terrestre; efeito estufa descontrolado.',life:'Superfície impossível. Hipótese debatida: micróbios nas nuvens a ~50 km de altitude (~30 °C).',
trv:'<b>Viagem:</b> ~4 meses. <b>Superfície:</b> 464 °C (derrete chumbo), pressão equivalente a 900 m sob o mar e chuva de ácido nas nuvens. Você seria esmagado e cozido em segundos; as sondas Venera resistiram ~2 h.',sk:['#c9a24a','#8a5a1e'],gr:'#6e4a22',fx:'acid',L:3},
{n:'Terra',au:1,d:12742,g:9.8,t:15,tr:'−89 a 57 °C',p:365.25,h:24,tl:23.4,sz:1.6,or:23,ty:'e',cs:['#1f5fae','#3d8b3d','#c2b280'],ac:'#6fb7ff',
comp:'Núcleo de ferro-níquel, manto e crosta. 71% da superfície coberta por água líquida; placas tectônicas ativas.',atm:'78% N₂, 21% O₂, 1% Ar, vapor de água e CO₂. Camada de ozônio e campo magnético protegem a vida.',life:'O único mundo com vida confirmada, em praticamente todos os ambientes.',
trv:'<b>Casa:</b> 1 g, 21% de oxigênio, 15 °C de média, água líquida e proteção contra radiação. O único lugar onde você respira sem equipamento.',sk:['#4a90e2','#bfe0ff'],gr:'#3d8b3d',fx:'',L:0},
{n:'Marte',au:1.52,d:6779,g:3.7,t:-63,tr:'−125 a 20 °C',p:687,h:24.6,tl:25.2,sz:1.1,or:29,ty:'m',cs:['#b5532c','#d98a5f','#8a3d1f'],ac:'#d9855a',
comp:'Crosta de basalto rica em óxido de ferro (poeira vermelha), núcleo parcialmente líquido. Maior vulcão do sistema (Olimpo) e calotas de gelo.',atm:'95% CO₂, pressão ~0,6% da terrestre. Tempestades de poeira globais.',life:'Possível vida microbiana passada ou no subsolo; rovers procuram biossinais em antigos leitos de rios e lagos.',
trv:'<b>Viagem:</b> ~7 meses. <b>Superfície:</b> ar 0,6% da pressão terrestre e sem oxigênio: inconsciência em ~15 s sem traje. −63 °C de média, radiação alta, tempestades de poeira. Gravidade 38%: pulos ~2,6× mais altos. Com traje pressurizado é o destino mais viável.',sk:['#c98a63','#e8b890'],gr:'#9c4f2a',fx:'dust',L:8},
{n:'Júpiter',au:5.2,d:139820,g:24.8,t:-110,tr:'−110 °C (topo das nuvens)',p:4333,h:9.9,tl:3.1,sz:5,or:42,ty:'g',cs:['#c9a37a','#e8d3b0','#9c6b45','#f3ead8'],gas:1,ac:'#e0c090',
comp:'~90% H₂ e 10% He. Interior de hidrogênio metálico líquido e possível núcleo rochoso. Massa = 318 Terras.',atm:'H₂, He, amônia, metano; faixas de nuvens, raios e a Grande Mancha Vermelha (tempestade há séculos).',life:'Improvável nas nuvens. Luas como Europa (oceano sob o gelo) são candidatas à vida.',
trv:'<b>Viagem:</b> ~5,5 anos. Sem superfície: você afundaria nas nuvens, com ventos de 600 km/h, raios e pressão crescente que o esmagaria. Gravidade 2,5×: seu peso mais que dobraria. Radiação mortal ao redor.',sk:['#c9a37a','#7a5236'],gr:'',fx:'storm',L:7},
{n:'Saturno',au:9.58,d:116460,g:10.4,t:-140,tr:'−140 °C (topo das nuvens)',p:10759,h:10.7,tl:26.7,sz:4.2,or:56,ty:'g',cs:['#e3cf9a','#f0e2b8','#b99b66'],gas:1,ring:1,ac:'#e8d4a0',
comp:'H₂ e He; densidade menor que a da água. Anéis de gelo e rocha com ~280.000 km de largura e poucas dezenas de metros de espessura.',atm:'H₂, He, metano e amônia; ventos de 1.800 km/h; tempestade hexagonal no polo norte.',life:'Improvável no planeta. Encélado e Titã (lagos de metano) são alvos astrobiológicos.',
trv:'<b>Viagem:</b> ~7 anos (Cassini). Sem chão: ventos de 1.800 km/h, −140 °C, gravidade de 1,06 g mas afundando até ser esmagado. Os anéis seriam um espetáculo.',sk:['#e3cf9a','#a8895a'],gr:'',fx:'storm',L:7},
{n:'Urano',au:19.2,d:50724,g:8.9,t:-195,tr:'−224 °C (mínima)',p:30687,h:-17.2,tl:98,sz:2.8,or:68,ty:'g',cs:['#8fe3e6','#a8f0f0','#74c9d2'],gas:1,ac:'#9eeeee',
comp:'Gigante de gelo: água, amônia e metano sobre um pequeno núcleo rochoso. Gira "deitado" (98°).',atm:'H₂, He e 2% de metano (cor ciano). Nuvens de H₂S: cheiro de ovo podre.',life:'Muito improvável: frio extremo e sem superfície.',
trv:'<b>Viagem:</b> ~8,5 anos (Voyager 2). −195 °C, ventos de 900 km/h, sem chão. Eixo deitado: 42 anos de Sol contínuo e 42 de noite em cada polo. O Sol seria uma estrela brilhante.',sk:['#8fe3e6','#3c8f9a'],gr:'',fx:'storm',L:6},
{n:'Netuno',au:30.05,d:49244,g:11.2,t:-200,tr:'−218 °C',p:60190,h:16.1,tl:28.3,sz:2.7,or:79,ty:'g',cs:['#3d5be0','#5b7bf5','#2a3fa8'],gas:1,ac:'#6a85ff',
comp:'Gigante de gelo (água, amônia, metano) com núcleo rochoso. Possíveis "chuvas de diamante" no interior.',atm:'H₂, He, metano. Ventos de ~2.000 km/h, os mais rápidos do sistema solar; Grande Mancha Escura.',life:'Muito improvável no planeta. A lua Tritão tem gêiseres de nitrogênio e pode ter oceano interno.',
trv:'<b>Viagem:</b> ~12 anos (Voyager 2). −200 °C, ventos supersônicos de 2.000 km/h, sem chão e pressão esmagadora. O Sol seria 900× mais fraco que na Terra.',sk:['#4f6fe8','#1c2a7a'],gr:'',fx:'storm',L:6}
];
function tex(ty,c,i){const k=document.createElement('canvas');k.width=512;k.height=256;const x=k.getContext('2d');x.fillStyle=c[0];x.fillRect(0,0,512,256);
if(ty=='g'){for(let y=0;y<256;y+=3){x.fillStyle=c[(Math.random()*c.length)|0];x.globalAlpha=.5;x.fillRect(0,y,512,3+Math.random()*7)}
 if(i==4){x.globalAlpha=.9;x.fillStyle='#b5482e';x.beginPath();x.ellipse(350,165,34,17,0,0,7);x.fill()}}
else{const e=ty=='e';for(let j=0;j<(e?70:450);j++){x.fillStyle=c[1+(j%2)];x.globalAlpha=e?.9:.25;x.beginPath();x.arc(Math.random()*512,Math.random()*256,e?6+Math.random()*28:2+Math.random()*12,0,7);x.fill()}
 if(e||ty=='m'){x.globalAlpha=1;x.fillStyle='#fff';x.fillRect(0,0,512,e?12:7);x.fillRect(0,e?244:249,512,12)}}
return new THREE.CanvasTexture(k)}
const cv=$('c'),R=new THREE.WebGLRenderer({canvas:cv,antialias:true});R.setPixelRatio(Math.min(devicePixelRatio,2));
const S=new THREE.Scene(),cam=new THREE.PerspectiveCamera(55,1,.1,1e9);
S.add(new THREE.AmbientLight(0xffffff,.32));S.add(new THREE.PointLight(0xffffff,1.7,0,0));
const sg=new Float32Array(4500);for(let i=0;i<4500;i+=3){const u=Math.random()*2-1,a=Math.random()*6.2832,r=Math.sqrt(1-u*u),d=500+Math.random()*300;sg.set([r*Math.cos(a)*d,u*d,r*Math.sin(a)*d],i)}
const sb=new THREE.BufferGeometry();sb.setAttribute('position',new THREE.BufferAttribute(sg,3));bgs=new THREE.Points(sb,new THREE.PointsMaterial({color:0xffffff,size:1.6,sizeAttenuation:false,depthTest:false,depthWrite:false,transparent:true}));bgs.renderOrder=-10;bgs.frustumCulled=false;S.add(bgs);
{const k=document.createElement('canvas');k.width=512;k.height=256;const x=k.getContext('2d');x.fillStyle='#03050d';x.fillRect(0,0,512,256);for(let j=0;j<40;j++){const X=Math.random()*512,Y=Math.random()*256,g=x.createRadialGradient(X,Y,0,X,Y,60+Math.random()*60);g.addColorStop(0,['rgba(60,40,140,.18)','rgba(30,70,160,.16)','rgba(120,40,110,.1)'][j%3]);g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(0,0,512,256)}sky=new THREE.Mesh(new THREE.SphereGeometry(900,32,16),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(k),side:THREE.BackSide,depthTest:false,depthWrite:false}));sky.renderOrder=-11;sky.frustumCulled=false;S.add(sky)}
const sun=new THREE.Mesh(new THREE.SphereGeometry(7,48,32),new THREE.MeshBasicMaterial({map:tex('x',['#ffb020','#ff7a10','#ffd860'],-1)}));S.add(sun);
const gl=(c1,c2,s)=>{const k=document.createElement('canvas');k.width=k.height=128;const x=k.getContext('2d'),g=x.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,c1);g.addColorStop(.3,c2);g.addColorStop(1,'rgba(255,120,0,0)');x.fillStyle=g;x.fillRect(0,0,128,128);const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(k),blending:THREE.AdditiveBlending,depthWrite:false,transparent:true}));sp.scale.set(s,s,1);S.add(sp)};gl('rgba(255,230,160,.9)','rgba(255,150,40,.35)',48);gl('rgba(255,255,255,1)','rgba(255,200,100,.5)',20);
P.forEach((p,i)=>{p.m=1;p.a=Math.random()*6.28;p.pd=p.p;p.w=1.2/Math.pow(p.p,.7);p.sp=(p.h<0?-1:1)*3/Math.sqrt(Math.abs(p.h));
p.g=new THREE.Group();const t=new THREE.Group();t.rotation.z=p.tl*Math.PI/180;p.g.add(t);
p.s=new THREE.Mesh(new THREE.SphereGeometry(p.sz,48,32),new THREE.MeshPhongMaterial({map:tex(p.ty,p.cs,i),shininess:6}));t.add(p.s);
if(p.ac)t.add(new THREE.Mesh(new THREE.SphereGeometry(p.sz*1.07,32,24),new THREE.MeshBasicMaterial({color:p.ac,transparent:true,opacity:.22,side:THREE.BackSide})));
if(p.ring){const r=new THREE.Mesh(new THREE.RingGeometry(p.sz*1.35,p.sz*2.3,96),new THREE.MeshBasicMaterial({color:0xcdbf9a,transparent:true,opacity:.75,side:THREE.DoubleSide}));r.rotation.x=Math.PI/2;t.add(r)}
if(p.ty=='e'){const k=document.createElement('canvas');k.width=512;k.height=256;const x=k.getContext('2d');for(let j=0;j<160;j++){x.fillStyle='rgba(255,255,255,.35)';x.beginPath();x.ellipse(Math.random()*512,Math.random()*256,10+Math.random()*40,3+Math.random()*8,0,0,7);x.fill()}p.cl=new THREE.Mesh(new THREE.SphereGeometry(p.sz*1.02,48,32),new THREE.MeshPhongMaterial({map:new THREE.CanvasTexture(k),transparent:true,depthWrite:false}));t.add(p.cl)}
{const k=document.createElement('canvas');k.width=256;k.height=64;const x=k.getContext('2d');x.font='bold 34px system-ui';x.textAlign='center';x.shadowColor='#000';x.shadowBlur=6;x.fillStyle='#fff';x.fillText(p.n,128,44);p.lb=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(k),depthTest:false,transparent:true}));p.lb.renderOrder=10;p.g.add(p.lb)}
S.add(p.g);
const pts=[];for(let k=0;k<=160;k++)pts.push(new THREE.Vector3(Math.cos(k/160*6.2832),0,Math.sin(k/160*6.2832)));
p.o=new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineBasicMaterial({color:0x6688aa,transparent:true,opacity:.35}));p.o.scale.setScalar(p.or);S.add(p.o)});
/* ===== Escala cósmica: Via Láctea e Grupo Local (1 ano-luz = 0,8 unidade; escala real entre galáxias) ===== */
const U=.8,RG=40000,SS=26500*U,Z0=new THREE.Vector3(),clp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
const gz=()=>{let u=0;while(!u)u=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(6.2832*Math.random())};
const gp=(n,A,b,sc)=>Array.from({length:n},(_,i)=>{const r=.06+Math.pow(Math.random(),1.4)*.94;return[r,Math.log(r/.06)/b+(i%A)*6.2832/A+gz()*sc*(1.2-r*.6)]});
function spt(A,b,sc,cols){const k=document.createElement('canvas');k.width=k.height=1024;const x=k.getContext('2d');x.globalCompositeOperation='lighter';
gp(16000,A,b,sc).forEach(([r,t],i)=>{x.fillStyle=cols[i%cols.length];x.globalAlpha=.16*(1.1-r);x.beginPath();x.arc(512+Math.cos(t)*r*500,512+Math.sin(t)*r*500,1+Math.random()*2.5*(1.1-r),0,7);x.fill()});
const g=x.createRadialGradient(512,512,0,512,512,130);g.addColorStop(0,'rgba(255,225,160,.95)');g.addColorStop(.4,'rgba(255,180,90,.35)');g.addColorStop(1,'rgba(0,0,0,0)');x.globalAlpha=1;x.fillStyle=g;x.fillRect(0,0,1024,1024);return new THREE.CanvasTexture(k)}
const gal=(tx,sz,pos,rx,rz,par)=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(sz,sz),new THREE.MeshBasicMaterial({map:tx,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide}));m.rotation.set(-Math.PI/2+rx,0,rz);m.position.copy(pos);(par||S).add(m);return m};
const G=new THREE.Group();G.rotation.set(1.05,.6,0);G.position.copy(new THREE.Vector3(-SS,0,0).applyQuaternion(G.quaternion).negate());S.add(G);
const COL=['#9bb8ff','#cfd9ff','#ffd9a0','#ff9ac8'];
const mwT=gal(spt(4,.21,.28,COL),RG*2.04,Z0,0,0,G);
const mwP=(()=>{const n=36000,pa=new Float32Array(n*3),pc=new Float32Array(n*3),c=new THREE.Color(),pl=gp(n-6000,4,.21,.28);
for(let i=0;i<n;i++){let X,Y,Z;if(i<pl.length){const[r,t]=pl[i];X=Math.cos(t)*r*RG;Z=Math.sin(t)*r*RG;Y=gz()*260*(1.2-r*.5);c.setHSL(i%7?.6-.05*Math.random():.9,.55,.6)}
else{const r=Math.abs(gz())*.12*RG,t=Math.random()*6.28;X=Math.cos(t)*r*1.7;Z=Math.sin(t)*r*.8;Y=gz()*r*.3;c.setHSL(.11,.6,.62)}
pa.set([X,Y,Z],i*3);pc.set([c.r,c.g,c.b],i*3)}
const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pa,3));g.setAttribute('color',new THREE.BufferAttribute(pc,3));
const p=new THREE.Points(g,new THREE.PointsMaterial({size:1.4,sizeAttenuation:false,vertexColors:true,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));p.frustumCulled=false;G.add(p);return p})();
const gtx=(()=>{const k=document.createElement('canvas');k.width=k.height=128;const x=k.getContext('2d'),g=x.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(.3,'rgba(255,255,255,.75)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.fillRect(0,0,128,128);return new THREE.CanvasTexture(k)})();
const DS=[],LS=[];
function dot(pos,col,real,k){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:gtx,color:col,blending:THREE.AdditiveBlending,depthWrite:false,depthTest:false,transparent:true}));s.position.copy(pos);S.add(s);DS.push({s,real,k})}
function lab(t,c,pos,lo,hi,k){const cn=document.createElement('canvas');cn.width=512;cn.height=64;const x=cn.getContext('2d');x.font='bold 36px system-ui';x.textAlign='center';x.shadowColor='#000';x.shadowBlur=6;x.fillStyle=c;x.fillText(t,256,42);
const s=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(cn),depthTest:false,transparent:true}));s.renderOrder=11;s.center.set(.5,0);s.position.copy(pos);S.add(s);LS.push({s,lo,hi,k:k||.3})}
const lp=(l,b,d)=>{l*=.017453;b*=.017453;return new THREE.Vector3(-SS+d*Math.cos(b)*Math.cos(l)*U,d*Math.sin(b)*U,-d*Math.cos(b)*Math.sin(l)*U).applyQuaternion(G.quaternion).add(G.position)};
const NB=[['Anã de Fornalha',237.1,-65.7,460,5,'#ffe0a0'],['Anã de Leão I',226,49,820,3,'#ffe0a0'],['NGC 6822 (Barnard)',25.3,-18.4,1630,7,'#a8c4ff'],['IC 10',119,-3.3,2200,5,'#a8c4ff'],['IC 1613',129.8,-60.6,2380,10,'#a8c4ff'],['Andrômeda (M31)',121.2,-21.6,2540,220,'#ffd9b0',1.1],['Triângulo (M33)',133.6,-31.3,2730,60,'#bcd0ff',.8]];
NB.forEach(([n,l,b,d,dm,c,inc])=>{const p=lp(l,b,d);dot(p,c,dm*U*1.6,.028);if(inc)gal(spt(2,.3,.3,COL),dm*U*1.8,p,inc,Math.random()*6);lab(n,'#cfe0ff',p,inc?3e5:2e4,3e7,.32)});
const TEN=[['1 · Anã do Cão Maior',240,-8,25,6,'#ff9f6e'],['2 · Corrente Estelar de Virgem',285,60,40,0,'#7dffb0'],['3 · Anã Elíptica de Sagitário',5.6,-14.2,70,10,'#ffe27a'],['4 · Anã da Ursa Maior II',152.5,37.4,105,2,'#ff8ad8'],['5 · Grande Nuvem de Magalhães (LMC)',280.5,-32.9,163,14,'#7fb8ff'],['6 · Anã de Boötes I',358.1,69.6,207,1.5,'#ffb86e'],['7 · Pequena Nuvem de Magalhães (SMC)',302.8,-44.3,200,7,'#7fd0ff'],['8 · Anã de Draco',86.4,34.7,254,3,'#d9a0ff'],['9 · Anã do Escultor',287.5,-83.2,290,4,'#ffd27a'],['10 · Anã do Sextante',243.5,42.3,283,5,'#9affd8']];
const lg=new THREE.Group(),lv=[];S.add(lg);
TEN.forEach(([n,l,b,d,dm,c])=>{const p=lp(l,b,d);dot(p,c,Math.max(dm*U*1.6,6),.035);lab(n,c,p,1500,3e7,.3);lv.push(Z0,p)});
lg.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(lv),new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.18,depthTest:false})));
const vsP=(()=>{const a=lp(285,60,25),d=lp(285,60,60).sub(a),n=500,pa=new Float32Array(n*3);for(let i=0;i<n;i++){const t=Math.random();pa.set([a.x+d.x*t+gz()*5,a.y+d.y*t+gz()*5,a.z+d.z*t+gz()*5],i*3)}
const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pa,3));const p=new THREE.Points(g,new THREE.PointsMaterial({color:0x7dffb0,size:2.5,sizeAttenuation:false,transparent:true,blending:THREE.AdditiveBlending,depthTest:false,depthWrite:false}));p.frustumCulled=false;S.add(p);return p})();
const lgd=document.createElement('div');lgd.style.cssText='position:fixed;left:10px;top:calc(78px + env(safe-area-inset-top,0px));z-index:1;font-size:12px;line-height:1.55;color:#e8eefc;background:rgba(10,14,24,.75);border:1px solid #2a3550;border-radius:10px;padding:8px 10px;pointer-events:none;display:none;max-width:260px';
lgd.innerHTML='<b>10 vizinhas mais próximas da Via Láctea</b><br>'+TEN.map(t=>'<span style="color:'+t[5]+'">●</span> '+t[0]).join('<br>');document.body.appendChild(lgd);
dot(G.position,'#ffd9a0',RG*2,.028);dot(Z0,'#fff2a0',.001,.028);
lab('Centro Galáctico (Sgr A*)','#ffd9a0',G.position,6000,6e5,.2);lab('Via Láctea','#ffffff',G.position.clone().add(new THREE.Vector3(0,RG*1.3,0)),6e5,3e7,.45);
lab('☀ Você está aqui: Sistema Solar','#ffe27a',Z0,1500,2e6,.25);
const LGw=G.position.clone().add(lp(121.2,-21.6,2540)).multiplyScalar(.5);
const tgt=()=>sel>=0?(mf?mf.m.getWorldPosition(TV):P[sel].g.position):sel==-3?G.position:sel==-4?LGw:Z0;
const CI=[`<h2>Via Láctea</h2><p>Galáxia espiral barrada com 100 a 200 bilhões de estrelas e ~100 mil anos-luz de diâmetro. O disco tem só ~1.000 anos-luz de espessura.</p><div class="g"><div><small>Posição do Sol</small>~26.500 anos-luz do centro</div><div><small>Local</small>Braço de Órion (esporão entre Sagitário e Perseu)</div><div><small>Volta galáctica</small>~230 milhões de anos</div><div><small>Velocidade do Sol</small>~230 km/s</div></div><h3>Inclinação</h3><p>O plano dos planetas está inclinado cerca de 60° em relação ao disco galáctico, como na cena. Procure a marca amarela “Você está aqui”.</p><p style="color:var(--mu)">No centro há o buraco negro Sagitário A* (4 milhões de massas solares). Estrelas e braços são representações artísticas; distâncias entre galáxias seguem a escala real.</p>`,
`<h2>Grupo Local</h2><p>Cerca de 80 galáxias em ~10 milhões de anos-luz, dominadas por Andrômeda e a Via Láctea.</p><div class="g"><div><small>Andrômeda (M31)</small>2,5 milhões de anos-luz · ~220 mil de diâmetro</div><div><small>Triângulo (M33)</small>2,7 milhões de anos-luz</div><div><small>Nuvens de Magalhães</small>163 mil e 200 mil anos-luz</div><div><small>Colisão com M31</small>em ~4,5 bilhões de anos</div></div><h3>Destino</h3><p>Andrômeda se aproxima a ~110 km/s. Via Láctea e M31 vão se fundir numa grande galáxia elíptica, às vezes chamada “Milkomeda”.</p><p style="color:var(--mu)">A Via Láctea é pequena aqui: arraste para girar e use o controle Zoom para voltar ao Sistema Solar.</p>`
,`<h2>10 galáxias e estruturas vizinhas</h2><p>As mais próximas da Via Láctea, numeradas na tela e ligadas ao Sol por linhas finas.</p><ol style="padding-left:20px;margin:6px 0"><li><b>Anã do Cão Maior</b>: ~25 mil anos-luz, a mais próxima conhecida (origem debatida)</li><li><b>Corrente Estelar de Virgem</b>: ~40 mil a.l., restos de uma galáxia anã engolida</li><li><b>Anã Elíptica de Sagitário</b>: ~70 mil a.l., sendo canibalizada</li><li><b>Anã da Ursa Maior II</b>: ~105 mil a.l.</li><li><b>Grande Nuvem de Magalhães</b>: ~163 mil a.l.</li><li><b>Anã de Boötes I</b>: ~207 mil a.l.</li><li><b>Pequena Nuvem de Magalhães</b>: ~200 mil a.l.</li><li><b>Anã de Draco</b>: ~250 mil a.l.</li><li><b>Anã do Escultor</b>: ~290 mil a.l.</li><li><b>Anã do Sextante</b>: ~280 mil a.l.</li></ol><p style="color:var(--mu)">Posições 3D aproximadas a partir das coordenadas galácticas; a corrente de Virgem é um traço de estrelas, não uma galáxia inteira.</p>`];
/* ===== Luas (raio km, período dias [− = retrógrada], distância mil km) ===== */
let mf=null,_t=performance.now();const TV=new THREE.Vector3(),TV2=new THREE.Vector3();
const MD={2:[['Lua',1737,27.32,384,'#b9b6b0','Rocha de silicatos: crosta de anortosito, manto e pequeno núcleo de ferro. Sem atmosfera. Nasceu de um impacto gigante há ~4,5 bilhões de anos e mostra sempre a mesma face à Terra.']],
3:[['Fobos',11.3,.32,9.4,'#8a7f76','Rocha carbonácea porosa coberta de poeira. Orbita tão perto que dá 3 voltas por dia marciano; deve se desfazer em ~50 milhões de anos.'],['Deimos',6.2,1.26,23.5,'#9c9187','Rocha e regolito muito escuros, provável asteroide capturado. Órbita lenta e quase circular.']],
4:[['Amalteia',84,.50,181,'#b8584a','Corpo irregular poroso de gelo e rocha, avermelhado por enxofre vindo de Io.'],['Io',1822,1.77,422,'#e6d36a','Silicatos e ferro com enxofre na superfície. Mais de 400 vulcões ativos: o mundo mais vulcânico do Sistema Solar.'],['Europa',1561,3.55,671,'#cfc2a8','Crosta de gelo sobre oceano global de água salgada, manto rochoso e núcleo metálico. Candidata a abrigar vida.'],['Ganimedes',2634,7.15,1070,'#a39a8c','Gelo e rocha. Maior lua do Sistema Solar (maior que Mercúrio), com campo magnético próprio e oceano subterrâneo.'],['Calisto',2410,16.69,1883,'#5e554c','Metade gelo, metade rocha. Superfície antiga e a mais craterizada; possível oceano profundo.'],['Himalia',70,250.6,11461,'#8d8d8d','Maior lua irregular de Júpiter, asteroide capturado de composição escura (tipo C).']],
5:[['Mimas',198,.94,186,'#cfcfcf','Gelo de água quase puro. A cratera Herschel lhe dá aspecto de "Estrela da Morte".'],['Encélado',252,1.37,238,'#f2f6fb','Gelo com oceano subterrâneo. Gêiseres no polo sul alimentam o anel E de Saturno.'],['Tétis',531,1.89,295,'#d8d8d4','Quase só gelo de água. Tem o enorme cânion Ithaca Chasma.'],['Dione',561,2.74,377,'#cfcbc2','Gelo de água sobre núcleo rochoso, com faixas brilhantes de fraturas.'],['Reia',764,4.52,527,'#c7c3bb','Gelo e rocha; segunda maior lua de Saturno.'],['Titã',2575,15.95,1222,'#d9a441','Gelo e rocha com atmosfera densa de nitrogênio e metano. Lagos de hidrocarbonetos e ciclo do metano; pressão 1,5× a da Terra.'],['Hipérion',135,21.28,1481,'#b5a58a','Corpo esponjoso, poroso e irregular, com rotação caótica.'],['Jápeto',735,79.3,3561,'#8c7f70','Dois tons: hemisfério escuro e outro brilhante, com cume equatorial de ~20 km.'],['Febe',107,-550.5,12952,'#4f4b47','Corpo capturado de órbita retrógrada; fornece poeira ao anel externo e a Jápeto.']],
6:[['Puck',81,.76,86,'#8a8a8a','Pequena, escura, de gelo e poeira.'],['Miranda',236,1.41,129.9,'#c4c2bd','Gelo e rocha, terreno em remendos com falésias de ~20 km (Verona Rupes).'],['Ariel',579,2.52,191,'#bdbdb7','Gelo e rocha, vales e canais; superfície relativamente jovem.'],['Umbriel',585,4.14,266,'#6e6c69','Gelo escuro e muito craterizado.'],['Titânia',789,8.71,436,'#aaa6a0','Maior lua de Urano: gelo e rocha, com grandes cânions.'],['Oberon',761,13.46,584,'#9a8f89','Gelo e rocha, crateras com fundo escuro.']],
7:[['Proteu',210,1.12,117.6,'#6f6c6a','Rocha e gelo escuros, irregular; uma das maiores luas não esféricas.'],['Tritão',1353,-5.88,354.8,'#e6d7d0','Gelo de nitrogênio e rocha. Órbita retrógrada (veio do Cinturão de Kuiper); gêiseres de nitrogênio e atmosfera tênue.'],['Nereida',170,360.1,5513,'#8c8c8c','Gelo; tem uma das órbitas mais excêntricas do Sistema Solar.']]};
P.forEach((p,pi)=>{const L=MD[pi];if(!L)return;const t=p.s.parent,og=new THREE.Group();t.add(og);p.og=og;p.mo=[];L.sort((a,b)=>a[3]-b[3]);
const n=L.length,r0=p.sz*(p.ring?2.8:2.1),r1=Math.min(18,p.sz*(n>6?5.2:n>2?4:3));
L.forEach((q,k)=>{const rad=n==1?p.sz*3:r0+(r1-r0)*k/(n-1),sz=Math.max(.07,p.sz*q[1]/(p.d/2)),m=new THREE.Mesh(new THREE.SphereGeometry(sz,20,14),new THREE.MeshPhongMaterial({color:q[4],shininess:5}));
const o={q,pi,rad,sz,m,a:Math.random()*6.28,w:(q[2]<0?-1:1)*1.6/Math.pow(Math.abs(q[2]),.6)},pts=[];
for(let j=0;j<=96;j++)pts.push(new THREE.Vector3(Math.cos(j/96*6.2832)*rad,0,Math.sin(j/96*6.2832)*rad));
og.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.16})));
const c=document.createElement('canvas');c.width=256;c.height=64;const x=c.getContext('2d');x.font='bold 34px system-ui';x.textAlign='center';x.shadowColor='#000';x.shadowBlur=6;x.fillStyle='#bfe8ff';x.fillText(q[0],128,44);
o.lb=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),depthTest:false,transparent:true}));o.lb.renderOrder=10;m.add(o.lb);og.add(m);p.mo.push(o)})});
function moons(){const now=performance.now(),dt=Math.min(.05,(now-_t)/1000);_t=now;
P.forEach(p=>{if(!p.mo)return;const near=cam.position.distanceTo(p.g.position)<70;p.og.visible=near;if(!near)return;
p.mo.forEach(o=>{if(!paused)o.a+=dt*spd*o.w;o.m.position.set(Math.cos(o.a)*o.rad,0,Math.sin(o.a)*o.rad);const d=cam.position.distanceTo(o.m.getWorldPosition(TV2));
o.lb.visible=d<45||o===mf;o.lb.scale.set(d*.22,d*.055,1);o.lb.position.set(0,o.sz*1.6+d*.03,0)})})}
const _show=show;
show=function(i){_show(i);if(i>=0&&P[i].mo){const b='background:#1d2433;color:#fff;border:1px solid #3a4560;border-radius:8px;padding:4px 9px;margin:2px;cursor:pointer;font:inherit';
$('pn').insertAdjacentHTML('beforeend','<h3>Luas ('+P[i].mo.length+' principais)</h3><p>'+P[i].mo.map((o,k)=>'<button style="'+b+'" onclick="showMoon('+i+','+k+')">'+o.q[0]+'</button>').join('')+'</p>')}};
function showMoon(pi,k){const p=P[pi],o=p.mo[k],q=o.q;show(pi);mf=o;wd=Math.max(o.sz*6,1.5);const fm=v=>v.toLocaleString('pt-BR');
$('pn').innerHTML=`<h2>${q[0]}</h2><p style="color:var(--mu)">Lua de ${p.n}</p><div class="g"><div><small>Diâmetro</small>${fm(q[1]*2)} km</div><div><small>Distância do planeta</small>${fm(q[3]*1000)} km</div><div><small>Período orbital</small>${fm(Math.abs(q[2]))} dias</div><div><small>Sentido</small>${q[2]<0?'retrógrado (contrário à rotação do planeta)':'direto'}</div></div><h3>Composição</h3><p>${q[5]}</p><p style="color:var(--mu)">Movimento mostrado com tempo comprimido; tamanhos e distâncias são artísticos.</p><p><button style="background:#1d2433;color:#fff;border:1px solid #3a4560;border-radius:8px;padding:5px 10px;cursor:pointer;font:inherit" onclick="show(${pi})">← ${p.n}</button></p>`};
function cosmos(){const ld=Math.log10(dist),f1=clp((ld-3)/1.3),f2=clp((ld-3.3)/1);cam.near=Math.max(.1,dist*.002);cam.updateProjectionMatrix();
const sc=Math.max(1,cam.near*20/900);[sky,bgs].forEach(o=>{o.scale.setScalar(sc);o.position.copy(cam.position)});bgs.material.opacity=1-.6*f1;mwP.material.opacity=f1*.9;mwT.material.opacity=f2*.85;
lg.visible=vsP.visible=dist>3000;lgd.style.display=dist>3000&&dist<4e6?'block':'none';P.forEach(p=>{p.lb.visible=dist<500;p.o.visible=dist<2500});
DS.forEach(o=>{const d=cam.position.distanceTo(o.s.position);o.s.scale.setScalar(Math.max(o.real,d*o.k));o.s.material.opacity=clp((d/o.real-.8)/1.5)});
LS.forEach(o=>{const d=cam.position.distanceTo(o.s.position);o.s.visible=dist>o.lo&&dist<o.hi;o.s.scale.set(d*o.k,d*o.k/8,1)});
const fv=2*dist*Math.tan(cam.fov*.0087266)*cam.aspect/U,fl=fv>=1e6?(fv/1e6).toFixed(1).replace('.',',')+' milhões de anos-luz':Math.round(fv).toLocaleString('pt-BR')+' anos-luz';
$('lv').innerHTML='<b style="color:var(--tx)">'+(dist<1500?'Sistema Solar':dist<20000?'Vizinhança do Sol':dist<3e5?'Via Láctea':dist<2e6?'Halo e galáxias-satélite':'Grupo Local')+'</b>'+(dist>3000?' · campo de visão ≈ '+fl:'');
const z=$('zs');if(z&&document.activeElement!==z)z.value=ld}
let sel=-2,th=.8,ph=1.05,wd=110,dist=140,spd=1,paused=false;const tg=new THREE.Vector3();
const fmt=y=>y>=730?(y/365.25).toFixed(1).replace('.',',')+' anos':Math.round(y)+' dias';
const mn=()=>sel>=0?(mf?mf.sz*2.5:P[sel].sz*1.6+.5):sel==-1?9:20;
function bar(){$('bar').innerHTML=`<button onclick="show(-2)">🌌 Geral</button><button onclick="show(-1)">☀️ Sol</button>`+P.map((p,i)=>`<button onclick="show(${i})" style="border-left:5px solid ${p.cs[0]}">${i+1} ${p.n}</button>`).join('')+`<button onclick="show(-3)">🌀 Via Láctea</button><button onclick="show(-5)">🛰️ 10 vizinhas</button><button onclick="show(-4)">🔭 Grupo Local</button><button id="pb" onclick="pause()">⏸ Pausar</button><label style="white-space:nowrap;color:var(--mu)">Tempo <input type="range" min="0" max="6" step=".1" value="1" style="width:90px;vertical-align:middle" oninput="spd=+this.value"></label><label style="white-space:nowrap;color:var(--mu)">Zoom <input id="zs" type="range" min="1.2" max="7.2" step=".01" style="width:110px;vertical-align:middle" oninput="wd=Math.pow(10,+this.value)"></label>`}
function pause(){paused=!paused;$('pb').textContent=paused?'▶ Continuar':'⏸ Pausar'}
function show(i){mf=null;sel=i;tvP=null;wd=i==-2?110:i==-3?380000/Math.min(1,cam.aspect):i==-5?519000/Math.min(1,cam.aspect):i==-4?6e6:i==-1?22:P[i].sz*5+5;const e=$('pn');
if(i<-2){e.innerHTML=CI[-3-i];return}
if(i==-2){e.innerHTML=`<h2>Sistema Solar</h2><p>Afaste o zoom para ver a posição do Sistema Solar na <b>Via Láctea</b> e as galáxias vizinhas. Explore os 8 planetas: arraste para girar, use a roda ou pinça para zoom, ou toque/clique em um planeta.</p><p>Para cada mundo você vê dados, composição, atmosfera, chances de vida, <b>o que acontece se um humano viajar até lá</b> (com animação) e <b>o que mudaria se ele estivesse em outra órbita</b>.</p><p style="color:var(--mu)">Velocidades orbitais e tamanhos são comprimidos para caber na tela; as rotações e inclinações dos eixos seguem a realidade (Vênus e Urano giram ao contrário/deitado).</p>`;return}
if(i==-1){e.innerHTML=`<h2>Sol</h2><div class="g"><div><small>Distância da Terra</small>1 UA (149,6 mi km)</div><div><small>Diâmetro</small>1.392.700 km (109× Terra)</div><div><small>Temperatura</small>5.500 °C (superfície), 15 mi °C (núcleo)</div><div><small>Gravidade</small>274 m/s²</div></div><h3>Composição</h3><p>73% hidrogênio, 25% hélio. Fusão nuclear converte 4 milhões de toneladas de massa em energia por segundo.</p><h3>Humano no Sol?</h3><p>Impossível: a 150 mil km você já seria vaporizado pela radiação. Contém 99,86% da massa do sistema solar.</p>`;return}
const p=P[i],km=p.au*149.6,rot=Math.abs(p.h)>48?(Math.abs(p.h)/24).toFixed(1).replace('.',',')+' dias terrestres':String(p.h).replace('.',',')+' h';
e.innerHTML=`<h2>${p.n}</h2><div class="g"><div><small>Distância do Sol</small>${p.au} UA · ${km.toFixed(0)} mi km</div><div><small>Luz do Sol leva</small>${(p.au*8.317).toFixed(1).replace('.',',')} min</div><div><small>Diâmetro</small>${p.d.toLocaleString('pt-BR')} km (${(p.d/12742).toFixed(2).replace('.',',')}× Terra)</div><div><small>Gravidade</small>${p.g} m/s² (${(p.g/9.8).toFixed(2).replace('.',',')} g)</div><div><small>Temperatura</small>${p.tr}</div><div><small>Duração do dia</small>${rot}${p.h<0?' (retrógrado)':''}</div><div><small>Ano</small>${fmt(p.p)}</div><div><small>Inclinação do eixo</small>${p.tl}°</div></div>
<h3>Composição</h3><p>${p.comp}</p><h3>Atmosfera</h3><p>${p.atm}</p><h3>Possibilidade de vida</h3><p>${p.life}</p>
<h3>Viajar para cá</h3><button onclick="tvOpen(${i})">🚀 Simular visita humana</button><div id="tv" hidden><canvas id="tc" width="640" height="360"></canvas><p>${p.trv}</p></div>
<h3>E se a órbita fosse diferente?</h3><input type="range" id="om" min=".3" max="3" step=".05" value="${p.m}" oninput="setM(${i},+this.value)"><div id="or"></div><button onclick="setM(${i},1);$('om').value=1">Órbita real</button>`;
if(i==sel)orb(i)}
function setM(i,m){P[i].m=m;P[i].o.scale.setScalar(P[i].or*m);orb(i)}
function orb(i){const p=P[i],m=p.m,T=(p.t+273)*Math.pow(m,-.5)-273,y=p.pd*Math.pow(m,1.5);let s=`<p><b>Distância:</b> ${(p.au*m).toFixed(2).replace('.',',')} UA (${m.toFixed(2).replace('.',',')}× a real)<br><b>Ano:</b> ${fmt(y)} (lei de Kepler)<br><b>Temp. média:</b> ≈ ${Math.round(T)} °C</p><p>`;
if(p.gas){s+=m<.5?'Vira um "Júpiter quente": a atmosfera incha e escapa para o espaço, e a gravidade perturbaria os planetas internos, podendo até ejetar a Terra do sistema.':m>1.6?'Mais frio e escuro: nuvens de amônia e metano congelam, tempestades enfraquecem e o planeta fica quase sem atividade.':m<.9?'Atmosfera mais quente e turbulenta; faixas de nuvens mais agitadas.':m>1.1?'Atmosfera mais fria, com bandas mais pálidas.':'Condições parecidas com as reais.';
 if(m<1.1&&m>=.5&&p.n=='Júpiter')s+=' Sua gravidade desestabilizaria o cinturão de asteroides, aumentando impactos nos planetas rochosos.'}
else s+=T>1000?'Superfície derretida: oceano de lava e atmosfera de rocha vaporizada.':T>400?'Rocha incandescente; chumbo e zinco derretem. Qualquer atmosfera vira estufa tipo Vênus.':T>100?'Oceanos evaporam e o efeito estufa se descontrola; sem água líquida.':T>50?'Deserto escaldante: só vida extremófila sobreviveria.':T>-10?'Zona habitável: água líquida possível, clima temperado. '+(p.n=='Terra'&&Math.abs(m-1)<.06?'(Terra real)':''):T>-60?'Planeta congelado: oceanos viram gelo; vida só microbiana sob o gelo.':'Frio extremo: o CO₂ congela e a atmosfera colapsa e cai como neve.';
$('or').innerHTML=s+'</p>'}
let tvA=0,tvP=null;
const SC=[
{cap:[[0,'Pouso em Mercúrio! Gravidade de 38%: cada passo vira um pulão.'],[5,'O Sol é 3× maior e a rocha ferve a 430 °C!'],[7,'Sem ar para guardar calor, a noite chega: −180 °C!'],[11,'Congelado! Sem atmosfera, nada protege você.']]},
{cap:[[0,'Vênus: céu laranja, relâmpagos e vulcões por todo lado.'],[3,'Chove ácido sulfúrico e a pressão é 92× a da Terra!'],[5,'464 °C: quente o bastante para derreter chumbo!'],[10,'O traje não aguenta… derreteu!']]},
{cap:[[0,'Casa! Ar com 21% de oxigênio e 15 °C de média.'],[5,'Pode tirar o capacete: água, plantas e proteção contra radiação.'],[11,'O único lugar do Sistema Solar onde se respira sem traje.']]},
{cap:[[0,'Marte: ar 0,6% da Terra e céu cor de caramelo.'],[4,'Tempestade de poeira chegando! Média de −63 °C.'],[7,'Sem oxigênio, tirar o capacete é perigoso…'],[8.3,'Inconsciente em segundos. Só com traje pressurizado!']]},
{cap:[[0,'Júpiter não tem chão: você começa a cair pelas nuvens.'],[3,'Ventos de 600 km/h e gravidade 2,5× maior!'],[5,'Passando pela Grande Mancha Vermelha, tempestade de séculos.'],[8,'Raios por todo lado e a pressão não para de subir…'],[10.5,'CRASH! Esmagado pela pressão.']],b:['#d9a874','#f1e3c6','#a4673c','#f7efdf','#c58a58'],sp:{c:'#b5482e',w:90,h:42},lt:1,wd:600,pm:1000},
{cap:[[0,'Saturno: sem chão, só nuvens douradas e os anéis no céu.'],[4,'Ventos de 1.800 km/h e −140 °C!'],[7,'Gravidade de 1,06 g, mas a pressão cresce a cada metro…'],[10.5,'CRASH! Esmagado nas profundezas.']],b:['#ead6a0','#f6ebc6','#c9ac72','#f1e2b0'],ring:1,wd:1800,pm:800},
{cap:[[0,'Urano: névoa de metano ciano e o Sol é só uma estrela.'],[4,'−195 °C e ventos de 900 km/h!'],[7,'Sem superfície: a pressão só aumenta…'],[10.5,'CRASH! Esmagado pelo gelo e pela pressão.']],b:['#a6eeee','#c4f6f4','#82d6dc','#b6f0ee'],star:1,wd:900,pm:600},
{cap:[[0,'Netuno: azul profundo e um Sol 900× mais fraco.'],[4,'Ventos supersônicos de 2.000 km/h, os mais rápidos!'],[7,'−200 °C e a Grande Mancha Escura ao longe…'],[10.5,'CRASH! Esmagado pela pressão.']],b:['#4466e6','#6d8cff','#2c43b0','#8aa4ff'],sp:{c:'#17237a',w:80,h:36},wd:2000,pm:900}];
function tvOpen(i){$('tv').hidden=false;tvP=i;cancelAnimationFrame(tvA);
const p=P[i],S=SC[i],c=$('tc').getContext('2d'),W=480,H=270,GY=212,TT=16,O='#1b1530',gas=!!p.gas,t0=performance.now();let lt=t0;
const rn=k=>{const x=Math.sin(k*127.1+i)*43758.5;return x-Math.floor(x)},cl=(v,a,b)=>Math.min(b,Math.max(a,v));
const ptc=Array.from({length:70},(_,k)=>[rn(k)*W,rn(k+99)*H,rn(k+7)]);
const rr=(x,y,w,h,r)=>{c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()};
const ol=(f,w)=>{c.fillStyle=f;c.fill();c.strokeStyle=O;c.lineWidth=w||3;c.lineJoin='round';c.stroke()};
const cap=(x1,y1,x2,y2,w,f)=>{c.lineCap='round';c.strokeStyle=O;c.lineWidth=w+4;c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()};
const grad=(y0,y1,cs)=>{const g=c.createLinearGradient(0,y0,0,y1);cs.forEach((q,k)=>g.addColorStop(k/(cs.length-1),q));c.fillStyle=g;c.fillRect(0,y0,W,y1-y0)};
const stars=a=>{for(let k=0;k<70;k++){c.fillStyle=`rgba(255,255,255,${a*(.4+.6*Math.abs(Math.sin(k+performance.now()/700*rn(k))))})`;c.fillRect(rn(k)*W,rn(k+50)*GY*.9,rn(k+9)>.8?2.5:1.5,rn(k+9)>.8?2.5:1.5)}};
const glow=(x,y,r,col,a)=>{const g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,col);g.addColorStop(1,'rgba(255,255,255,0)');c.globalAlpha=a;c.fillStyle=g;c.fillRect(x-r,y-r,2*r,2*r);c.globalAlpha=1};
const ridge=(y0,a,col,sd,off,j)=>{c.beginPath();c.moveTo(-5,H);for(let x=-5;x<=W+5;x+=8){const u=x+off;c.lineTo(x,y0-a*(Math.abs(Math.sin(u*.011+sd))*.6+Math.sin(u*.03+sd*3)*.25*(j||1)+.3))}c.lineTo(W+5,H);c.closePath();ol(col,2.5)};
const ground=(col,hi)=>{c.fillStyle=col;c.fillRect(0,GY,W,H-GY);c.fillStyle=hi;c.fillRect(0,GY+2,W,7);c.fillStyle=O;c.fillRect(0,GY-1,W,3)};
const cloud=(x,y,s,col)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.arc(0,0,16,0,7);c.arc(18,-8,20,0,7);c.arc(40,0,16,0,7);c.rect(0,-2,40,16);ol(col,2.5);c.fillStyle='rgba(120,150,210,.25)';c.fillRect(2,8,38,6);c.restore()};
const bolt=(x,y)=>{c.beginPath();c.moveTo(x,y);for(let k=1;k<6;k++)c.lineTo(x+(k%2?-14:12)+rn(k+x)*10,y+k*30);c.lineJoin='miter';c.strokeStyle=O;c.lineWidth=7;c.stroke();c.strokeStyle='#fff6a0';c.lineWidth=3;c.stroke()};
const pow=(x,y,txt,r,t)=>{c.save();c.translate(x,y);c.rotate(-.2);const z=1+.07*Math.sin(t*30);c.scale(z,z);c.beginPath();for(let k=0;k<20;k++){const a=k/20*6.283,d=k%2?r*.62:r;c.lineTo(Math.cos(a)*d,Math.sin(a)*d*.75)}c.closePath();ol('#ffe03a');c.font=`italic 900 ${r*.36}px Impact,system-ui`;c.textAlign='center';c.lineWidth=5;c.strokeStyle=O;c.strokeText(txt,0,r*.12);c.fillStyle='#e8321e';c.fillText(txt,0,r*.12);c.restore()};
const ghost=(x,y,t)=>{c.save();c.translate(x,y);c.beginPath();c.arc(0,0,14,Math.PI,0);c.lineTo(14,18);for(let k=0;k<3;k++)c.quadraticCurveTo(14-(k+.5)*9.3,18+(k%2?-7:7)*Math.sin(t*8+k),14-(k+1)*9.3,18);c.closePath();c.globalAlpha=.92;ol('#fff');c.globalAlpha=1;c.fillStyle=O;c.beginPath();c.ellipse(-5,-1,2.5,4,0,0,7);c.ellipse(5,-1,2.5,4,0,0,7);c.fill();c.beginPath();c.ellipse(0,9,3,4,0,0,7);c.fill();c.beginPath();c.ellipse(0,-22,11,3.5,0,0,7);c.strokeStyle=O;c.lineWidth=5;c.stroke();c.strokeStyle='#ffd23a';c.lineWidth=2.5;c.stroke();c.restore()};
function astro(x,y,s,o){const w=o.w||0,m=o.m||'h',t=o.t||0,sw=Math.sin(w),Wt='#f4f6fb',sh='#c3cce4',R='#ff6b2c';c.save();c.translate(x,y);c.rotate(o.rot||0);const q=o.sq||1;c.scale(s/q,s*q);
if(o.sh){c.fillStyle='rgba(0,0,0,.28)';c.beginPath();c.ellipse(0,2,24,5,0,0,7);c.fill()}
rr(-20,-54,12,28,5);ol(sh);
cap(-5,-28,-5+sw*9,-7,9,Wt);cap(5,-28,5-sw*9,-7,9,Wt);cap(-5+sw*9,-3,0+sw*9,-3,11,R);cap(5-sw*9,-3,10-sw*9,-3,11,R);
rr(-12,-52,24,26,8);ol(Wt);c.fillStyle=sh;rr(5,-49,6,20,3);c.fill();rr(-7,-46,11,8,2);ol('#3b6cff',2);c.fillStyle='#ff3b3b';c.beginPath();c.arc(-2,-42,1.6,0,7);c.fill();c.fillStyle=R;c.fillRect(-12,-33,24,4);c.strokeStyle=O;c.lineWidth=2;c.strokeRect(-12,-33,24,4);
const A=o.arm||'n',a1=A=='n'?-sw*.8:A=='wave'?-sw*.3:A=='up'?3+Math.sin(t*14)*.6:A=='hold'?2.6:.3,a2=A=='n'?sw*.8:A=='wave'?2.7+Math.sin(t*12)*.45:A=='up'?3+Math.sin(t*14+2)*.6:A=='hold'?-2.6:-.3;
[[-11,a1],[11,a2]].forEach(([sx,a])=>{const ex=sx+Math.sin(a)*18,ey=-46+Math.cos(a)*18;cap(sx,-46,ex,ey,8,Wt);c.beginPath();c.arc(ex,ey,5.5,0,7);ol(R,2.5)});
// cabeça
const hy=-64;if(o.hel==0){c.beginPath();c.arc(0,hy,14,0,7);ol('#f1b98a');c.beginPath();c.arc(0,hy-2,14.5,Math.PI*1.05,Math.PI*1.98);c.lineTo(10,hy-4);c.quadraticCurveTo(0,hy-12,-12,hy-4);ol('#5a3519',2.5)}
else{c.beginPath();c.arc(0,hy,19,0,7);ol('#fff');c.fillStyle=sh;c.beginPath();c.arc(0,hy,19,-.5,1.1);c.arc(0,hy,15,1.1,-.5,true);c.fill();c.beginPath();c.ellipse(2,hy+1,14,12,0,0,7);ol('#f1b98a',2.5)}
const tint={s:'rgba(255,60,20,.35)',c:'rgba(90,170,255,.45)'}[m];if(tint){c.fillStyle=tint;c.beginPath();c.ellipse(2,hy+1,13,11,0,0,7);c.fill()}
const ex=o.hel==0?0:2,E=(dx,r,pr)=>{c.fillStyle='#fff';c.beginPath();c.arc(ex+dx,hy-2,r,0,7);ol('#fff',1.5);c.fillStyle=O;c.beginPath();c.arc(ex+dx+(o.look||1),hy-2,pr,0,7);c.fill()};
c.strokeStyle=O;c.lineWidth=2.2;c.lineCap='round';
if(m=='dd'||m=='d'){[-5,5].forEach(dx=>{const X=ex+dx;c.beginPath();if(m=='dd'){c.moveTo(X-3,hy-5);c.lineTo(X+3,hy+1);c.moveTo(X+3,hy-5);c.lineTo(X-3,hy+1)}else{for(let k=0;k<14;k++){const a=k*.9+t*10,r=k*.28;c.lineTo(X+Math.cos(a)*r,hy-2+Math.sin(a)*r)}}c.stroke()});c.beginPath();c.moveTo(ex-4,hy+7);c.lineTo(ex+4,hy+7);c.stroke();if(m=='dd'){c.fillStyle='#ff6b8a';c.fillRect(ex-1,hy+7,4,5)}}
else{E(-5,m=='f'?4.6:3.4,m=='f'?1.4:1.8);E(5,m=='f'?4.6:3.4,m=='f'?1.4:1.8);
 if(m=='w'||m=='f'||m=='s'){c.beginPath();c.moveTo(ex-9,hy-9+(m=='f'?-2:2));c.lineTo(ex-2,hy-8-(m=='f'?0:3));c.moveTo(ex+9,hy-9+(m=='f'?-2:2));c.lineTo(ex+2,hy-8-(m=='f'?0:3));c.stroke()}
 c.beginPath();if(m=='h'){c.arc(ex,hy+3,6,.15,Math.PI-.15)}else if(m=='f'){c.ellipse(ex,hy+8,3.5,5+Math.sin(t*20),0,0,7);c.fillStyle=O;c.fill()}else if(m=='c'){for(let k=-3;k<=3;k++)c.lineTo(ex+k*2,hy+8+(k%2?2:-2));}else if(m=='s'){c.ellipse(ex,hy+8,5,3.5,0,0,7);c.fillStyle='#8a1f2a';c.fill()}else{for(let k=-3;k<=3;k++)c.lineTo(ex+k*2,hy+8+(k%2?1.5:-1.5))}c.stroke()}
if(o.hel!=0){c.fillStyle='rgba(120,180,255,.22)';c.beginPath();c.ellipse(2,hy+1,14,12,0,0,7);c.fill();c.fillStyle='rgba(255,255,255,.75)';c.beginPath();c.ellipse(-6,hy-6,4.5,2.2,-.6,0,7);c.fill();c.beginPath();c.arc(9,hy+7,1.6,0,7);c.fill();
 if(o.crack){c.strokeStyle='#fff';c.lineWidth=1.6;c.beginPath();c.moveTo(-8,hy-9);c.lineTo(-1,hy);c.lineTo(-6,hy+8);c.moveTo(-1,hy);c.lineTo(10,hy-4);c.lineTo(13,hy+4);c.stroke()}}
if(m=='s'||m=='w'){c.fillStyle='#8fd8ff';for(let k=0;k<3;k++){const u=(t*2+k/3)%1;c.beginPath();c.ellipse(-20-k*3+u*-6,hy-8+u*22,2.2,3.2,0,0,7);ol('#8fd8ff',1.4)}}
c.restore()}
(function f(now){if(tvP!==i)return;tvA=requestAnimationFrame(f);const dt=Math.min(.05,(now-lt)/1000);lt=now;const t=((now-t0)/1000)%TT,off=Math.min(t,5)*45,sg=Math.sin(t*5);let ax=150,ay=GY+22,s=1.3,o={t,sh:1,w:t*7,m:'h'},ghosty=0,burst=null,hud='',ice=0,hop=0;
const jump=()=>Math.abs(Math.sin(t*3*Math.sqrt(p.g/9.8)))*Math.min(95,30*9.8/p.g);
c.clearRect(0,0,W,H);
if(!gas){
 if(i==0){grad(0,GY,['#000','#06050a','#1c1612']);stars(1);const sy=GY-70+Math.max(0,t-5)*45;glow(370,sy,120,'#ffd9a0',.5);c.fillStyle='#fff6d0';c.beginPath();c.arc(370,sy,56,0,7);ol('#fff6d0',3);c.fillStyle='#ffe19a';c.beginPath();c.arc(380,sy+8,38,0,7);c.fill();ridge(GY-10,60,'#4f4943',1,off*.3);ridge(GY,36,'#6c645b',4,off*.6,1.4);ground('#857d72','#9d9588');
  for(let k=0;k<6;k++){const x=((k*110-off*1.5)%660+660)%660-90;c.beginPath();c.ellipse(x,GY+25+k%3*8,34,8,0,0,7);ol('#6e675d',2.5);c.beginPath();c.ellipse(x+4,GY+27+k%3*8,26,5,0,0,7);c.fillStyle='#4f4943';c.fill()}
  const T=t<5?430:t<7?430-(t-5)*20:430-(Math.min(t,11)-5)/6*610;hud=`🌡 ${Math.round(T)} °C`;
  o.m=t<6?'s':'c';if(t<5)hop=jump();else{o.w=0;o.look=-1}if(t>=11){ice=1;o.m='c';o.w=0}if(t>=6&&t<11)ax+=Math.sin(t*50)*1.2}
 if(i==1){grad(0,GY,['#5a2c0c','#b8741f','#e8b24a']);glow(370,60,110,'#fff0b0',.6);
  for(let L=0;L<3;L++)for(let k=0;k<7;k++){const x=((k*95+L*40-off*(.2+L*.1)+t*8*(L+1))%700+700)%700-110;cloud(x,25+L*34+rn(k)*10,2.2+L*.4,['#d49a3d','#b97f2c','#8f5a1c'][L])}
  const vx=330-off*.15;c.beginPath();c.moveTo(vx-110,GY);c.lineTo(vx-18,GY-70);c.lineTo(vx+18,GY-70);c.lineTo(vx+110,GY);ol('#4a2410');glow(vx,GY-72,60,'#ff7a1a',.9);c.fillStyle='#ff9a2a';c.beginPath();c.ellipse(vx,GY-71,18,5,0,0,7);ol('#ff9a2a',2);
  ridge(GY,30,'#3b1c0a',2,off*.5);ground('#4d2a12','#6a3a18');c.strokeStyle='#ff8a22';c.lineWidth=2.5;for(let k=0;k<8;k++){const x=((k*80-off*1.6)%640+640)%640-80;c.beginPath();c.moveTo(x,GY+8+k%3*9);c.lineTo(x+22,GY+14+k%3*9);c.lineTo(x+40,GY+9+k%3*9);c.stroke()}
  if(rn(Math.floor(t*6))>.86){c.fillStyle='rgba(255,255,220,.45)';c.fillRect(0,0,W,H);bolt(120+rn(Math.floor(t*6))*250,0)}
  c.strokeStyle='#d6e84a';c.lineWidth=1.6;ptc.forEach(q=>{q[1]+=dt*420;q[0]-=dt*60;if(q[1]>GY+20+q[2]*30){c.beginPath();c.ellipse(q[0],GY+20+q[2]*30,5,1.6,0,0,7);c.stroke();q[1]=-5;q[0]=rn(q[0])*W+W*.2}c.beginPath();c.moveTo(q[0],q[1]);c.lineTo(q[0]-3,q[1]+10);c.stroke()});
  c.fillStyle='rgba(255,90,0,.12)';c.fillRect(0,0,W,H);hud='🌡 464 °C · 92 atm';
  o.m=t<5?'w':'s';if(t>=5&&t<10)hop=Math.abs(Math.sin(t*14))*14;if(t>=10){const k=cl((t-10)/2.5,0,1);o.sq=1-.8*k;o.m='d';o.w=0;c.fillStyle='#ff6a2a';c.beginPath();c.ellipse(ax,ay,10+k*34,3+k*5,0,0,7);ol('#ff6a2a',2.5);if(t>=12.5)ghosty=1}
  if(t>=5&&t<12)for(let k=0;k<5;k++){const u=(t*1.3+k/5)%1;c.fillStyle=`rgba(255,255,255,${.7-u*.7})`;c.beginPath();c.arc(ax+Math.sin(u*9+k)*10,ay-70-u*60,5+u*8,0,7);c.fill()}
  if(t>=12.5)ay=ay-(t-12.5)*0}
 if(i==2){grad(0,GY,['#2f7fd6','#78bdf2','#cfeaff']);glow(80,50,90,'#fff8c0',.9);c.fillStyle='#ffe55a';c.beginPath();c.arc(80,50,26,0,7);ol('#ffe55a',3);
  for(let k=0;k<5;k++){const x=((k*150-t*14-off*.2)%750+750)%750-120;cloud(x,30+rn(k)*60,1.4+rn(k+2)*.8,'#fff')}
  for(let k=0;k<4;k++){const x=((k*140+t*60-off)%700+700)%700-100,y=60+rn(k)*50+Math.sin(t*6+k)*6;c.beginPath();c.moveTo(x-7,y-3+Math.sin(t*14+k)*4);c.quadraticCurveTo(x,y+3,x+7,y-3+Math.sin(t*14+k)*4);c.strokeStyle=O;c.lineWidth=2;c.stroke()}
  ridge(GY-5,55,'#5aa84a',2,off*.2);ridge(GY+4,34,'#3f9a3a',5,off*.5,.8);ground('#3a8f34','#55b04a');
  for(let k=0;k<5;k++){const x=((k*140-off*.9)%700+700)%700-90;rr(x-5,GY-58,10,60,3);ol('#8a5a2c',2.5);c.beginPath();c.arc(x,GY-66,24,0,7);c.arc(x-18,GY-52,17,0,7);c.arc(x+18,GY-52,17,0,7);ol('#2e8a2e',2.5);c.fillStyle='#4cb04a';c.beginPath();c.arc(x-6,GY-72,10,0,7);c.fill()}
  for(let k=0;k<14;k++){const x=((k*47-off*1.6)%660+660)%660-60,y=GY+16+k%4*9;c.beginPath();c.arc(x,y,3.2,0,7);ol(['#ff5a7a','#ffd23a','#fff'][k%3],1.5)}
  hud='🌡 15 °C · 1 g';o.hel=0;if(t>=5){o.arm='wave';o.w=0;o.m='h'}}
 if(i==3){const ds=cl((t-4)/3,0,1);grad(0,GY,['#a96a47','#d9996d','#f0c8a2']);glow(380,70,80,'#fff2d0',.7);c.fillStyle='#fff3d8';c.beginPath();c.arc(380,70,11,0,7);ol('#fff3d8',2);
  const mx=250-off*.12;c.beginPath();c.moveTo(mx-190,GY);c.quadraticCurveTo(mx-60,GY-62,mx-30,GY-66);c.lineTo(mx+30,GY-66);c.quadraticCurveTo(mx+60,GY-62,mx+190,GY);ol('#a2512e');ridge(GY,34,'#8a3f22',3,off*.4);ground('#a34f2a','#bc6638');
  for(let k=0;k<6;k++){const x=((k*115-off*1.5)%690+690)%690-90;c.beginPath();c.moveTo(x-20,GY+34);c.lineTo(x-12,GY+14+k%3*6);c.lineTo(x+8,GY+10+k%3*6);c.lineTo(x+22,GY+34);c.closePath();ol('#82391d',2.5)}
  const dx=((330-off*.8-t*20)%700+700)%700-60;for(let k=0;k<8;k++){c.beginPath();c.ellipse(dx+Math.sin(t*5+k)*5,GY-6-k*9,5+k*2.2,3.5,0,0,7);c.fillStyle=`rgba(230,160,110,${.7-k*.05})`;c.fill();c.strokeStyle=O;c.lineWidth=1.6;c.stroke()}
  c.fillStyle=`rgba(200,110,60,${ds*.45})`;c.fillRect(0,0,W,H);c.strokeStyle='#f0a878';c.lineWidth=1.8;ptc.forEach(q=>{q[0]-=dt*(120+ds*500);if(q[0]<-20){q[0]=W+20;q[1]=rn(q[1])*H}c.globalAlpha=ds;c.beginPath();c.moveTo(q[0],q[1]);c.lineTo(q[0]+18,q[1]);c.stroke()});c.globalAlpha=1;
  hud='🌡 −63 °C · 0,6% de ar';if(t<4)hop=jump();else o.w=0;
  if(t>=7&&t<8.3){o.arm='hold';o.m='w'}if(t>=8.3){o.m='dd';o.arm='n';o.w=0;const k=cl((t-8.3)/.7,0,1);o.rot=-1.45*k;if(t>=9.5)ghosty=1}else if(t>=8)o.m='d'}
 o.sh=1;astro(ax,ay-hop,s,o);
 if(ice){c.save();c.globalAlpha=.55;rr(ax-44,ay-112,88,120,22);ol('#bfe9ff',4);c.globalAlpha=.9;c.fillStyle='#fff';c.beginPath();c.moveTo(ax-30,ay-92);c.lineTo(ax-20,ay-100);c.lineTo(ax-30,ay-70);c.fill();for(let k=0;k<5;k++){c.beginPath();c.moveTo(ax-34+k*17,ay+6);c.lineTo(ax-28+k*17,ay+18);c.lineTo(ax-22+k*17,ay+6);ol('#bfe9ff',2)}c.restore();burst=['BRRR!',60]}
 if(ghosty){const u=t-(i==1?12.5:9.5);ghost(ax+Math.sin(u*3)*10,ay-70-u*30,t);if(i==3)astro(ax,ay,s,{...o,rot:-1.45,m:'dd',w:0})}
}else{
 const d=cl(t/11,0,1),B=S.b,bh=44;grad(0,H,[B[0],B[1],B[2]]);
 for(let k=-1;k<8;k++){const y0=((k*50-t*(55+d*40))%450+450)%450-60,col=B[(k+8)%B.length],ph=k*1.7;c.beginPath();c.moveTo(-5,y0);for(let x=-5;x<=W+5;x+=12)c.lineTo(x,y0+Math.sin(x*.02+ph+t*S.wd/500)*7);for(let x=W+5;x>=-5;x-=12)c.lineTo(x,y0+bh+rn(k)*22+Math.sin(x*.025+ph+1+t*S.wd/600)*8);c.closePath();c.globalAlpha=.85;ol(col,2);c.globalAlpha=1}
 if(S.ring){for(let k=0;k<3;k++){c.beginPath();c.ellipse(250,-6,360-k*38,78-k*8,-.1,0,Math.PI);c.strokeStyle=O;c.lineWidth=18-k*4+4;c.stroke();c.strokeStyle=['#d2b57c','#efe0b0','#b89a62'][k];c.lineWidth=18-k*4;c.stroke()}}
 if(S.star){c.fillStyle='#fffbe0';c.beginPath();for(let k=0;k<8;k++){const a=k*Math.PI/4,r=k%2?4:13;c.lineTo(400+Math.cos(a)*r,45+Math.sin(a)*r)}c.closePath();ol('#fffbe0',2)}
 if(S.sp){const sx=560-t*75,sy=70+t*16;c.beginPath();c.ellipse(sx,sy,S.sp.w,S.sp.h,0,0,7);ol(S.sp.c,3);c.beginPath();c.ellipse(sx+8,sy+4,S.sp.w*.55,S.sp.h*.5,0,0,7);c.strokeStyle='rgba(255,255,255,.35)';c.lineWidth=3;c.stroke()}
 c.fillStyle=`rgba(0,0,10,${d*.55})`;c.fillRect(0,0,W,H);
 if(S.lt&&rn(Math.floor(t*5)+i)>.84){c.fillStyle='rgba(255,255,230,.5)';c.fillRect(0,0,W,H);bolt(60+rn(Math.floor(t*5))*360,0)}
 c.strokeStyle='rgba(255,255,255,.55)';c.lineWidth=1.8;const v=S.wd/20;ptc.forEach(q=>{q[0]-=dt*v*(.6+q[2]);if(q[0]<-60){q[0]=W+20;q[1]=rn(q[0]+t)*H}c.beginPath();c.moveTo(q[0],q[1]);c.lineTo(q[0]+14+v*.12*q[2],q[1]);c.stroke()});
 hud=`💨 ${S.wd} km/h · ${Math.round(Math.pow(d,3)*S.pm)} atm`;
 let sq=1,cr=0;if(t>=10.5){sq=.32;cr=1;burst=['CRASH!',70]}
 const gx=165+Math.sin(t*1.7)*16,gy=130+Math.sin(t*2.3)*12,sc=1.25-d*.45;
 o={t,w:0,m:t<5?'f':t<8?'f':'f',arm:'up',rot:t<10.5?t*1.9:.1,sq,crack:cr,sh:0};if(t>=10.5){o.m='dd';o.arm='n';o.rot=0}
 astro(gx,gy+(t>=10.5?35:0),sc*1.1,o);
 if(t>=12){const u=t-12;ghost(gx+Math.sin(u*3)*10,gy-30-u*28,t)}
}
if(burst){pow(335,95,burst[0],burst[1]+Math.sin(t*20)*3,t)}
const g=c.createRadialGradient(W/2,H/2,H*.45,W/2,H/2,W*.62);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.45)');c.fillStyle=g;c.fillRect(0,0,W,H);
c.globalAlpha=.06;for(let k=0;k<40;k++){c.fillStyle=Math.random()>.5?'#fff':'#000';c.fillRect(Math.random()*W,Math.random()*H,2,2)}c.globalAlpha=1;
c.font='bold 13px "Trebuchet MS",system-ui';c.textAlign='left';c.fillStyle='#000a';rr(8,8,Math.max(110,c.measureText(hud).width+60),24,8);c.fill();c.fillStyle='#fff';c.fillText('g = '+p.g+' m/s²',16,25);if(hud){c.textAlign='right';c.fillStyle='#000a';const hw=c.measureText(hud).width+20;rr(W-8-hw,8,hw,24,8);c.fill();c.fillStyle='#ffe9a0';c.fillText(hud,W-18,25);c.textAlign='left'}
let cp=S.cap[0][1];S.cap.forEach(q=>{if(t>=q[0])cp=q[1]});c.font='bold 13.5px "Trebuchet MS",system-ui';c.fillStyle=O;rr(14,H-44,W-20,34,6);c.fill();rr(8,H-50,W-20,34,6);ol('#fff7c2',3);c.fillStyle=O;c.textAlign='center';c.fillText(cp,W/2-2,H-28);c.textAlign='left';
const fa=t>15?t-15:t<.5?1-t/.5:0;if(fa>0){c.fillStyle=`rgba(0,0,0,${cl(fa,0,1)})`;c.fillRect(0,0,W,H)}
})(t0)}

function resize(){R.setSize(innerWidth,innerHeight);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()}addEventListener('resize',resize);resize();
const ps=new Map();let mv=0;const ray=new THREE.Raycaster(),zoom=f=>{wd=Math.min(1.5e7,Math.max(mn(),wd*f))};
cv.onpointerdown=e=>{cv.setPointerCapture(e.pointerId);ps.set(e.pointerId,[e.clientX,e.clientY]);mv=0};
cv.onpointermove=e=>{if(!ps.has(e.pointerId))return;const o=ps.get(e.pointerId),n=[e.clientX,e.clientY];
if(ps.size==1){th-=(n[0]-o[0])*.006;ph=Math.min(3.12,Math.max(.02,ph-(n[1]-o[1])*.006));mv+=Math.abs(n[0]-o[0])+Math.abs(n[1]-o[1])}
else{const q=[...ps.entries()].find(([k])=>k!=e.pointerId)[1];zoom(Math.hypot(o[0]-q[0],o[1]-q[1])/Math.hypot(n[0]-q[0],n[1]-q[1]));mv+=9}ps.set(e.pointerId,n)};
cv.onpointerup=cv.onpointercancel=e=>{if(ps.size==1&&mv<6){ray.setFromCamera({x:e.clientX/innerWidth*2-1,y:-(e.clientY/innerHeight)*2+1},cam);const h=ray.intersectObjects([sun,...P.map(p=>p.s)])[0];if(h)show(h.object==sun?-1:P.findIndex(p=>p.s==h.object))}ps.delete(e.pointerId)};
cv.onwheel=e=>{e.preventDefault();zoom(Math.exp(Math.sign(e.deltaY)*Math.min(Math.abs(e.deltaY),120)*(wd>400?.0016:.001)))};
const keys={};addEventListener('keydown',e=>{keys[e.key]=1;if(e.key==' '){e.preventDefault();pause()}if(e.key=='0')show(-1);if(e.key=='v'||e.key=='V')show(-3);if(e.key=='n'||e.key=='N')show(-5);if(e.key=='l'||e.key=='L')show(-4);if(e.key=='g'||e.key=='G')show(-2);if(e.key>='1'&&e.key<='8')show(+e.key-1);if(e.key=='+'||e.key=='=')zoom(.85);if(e.key=='-')zoom(1.18)});addEventListener('keyup',e=>delete keys[e.key]);
let last=performance.now();
function loop(now){requestAnimationFrame(loop);const dt=Math.min(.05,(now-last)/1000);last=now;
if(keys.ArrowLeft)th+=dt*1.5;if(keys.ArrowRight)th-=dt*1.5;if(keys.ArrowUp)ph=Math.max(.1,ph-dt*1.2);if(keys.ArrowDown)ph=Math.min(3,ph+dt*1.2);
P.forEach(p=>{if(!paused){p.a+=dt*spd*p.w*Math.pow(p.m,-1.5);p.s.rotation.y+=dt*spd*p.sp;if(p.cl)p.cl.rotation.y+=dt*spd*p.sp*.3}p.g.position.set(Math.cos(p.a)*p.or*p.m,0,Math.sin(p.a)*p.or*p.m);const d=cam.position.distanceTo(p.g.position);p.lb.scale.set(d*.28,d*.07,1);p.lb.position.set(0,p.sz*1.5+d*.05,0)});
if(!paused)sun.rotation.y+=dt*.05*spd;
tg.lerp(tgt(),.08);dist=Math.exp(Math.log(dist)+(Math.log(wd)-Math.log(dist))*.08);
cam.position.set(tg.x+dist*Math.sin(ph)*Math.cos(th),tg.y+dist*Math.cos(ph),tg.z+dist*Math.sin(ph)*Math.sin(th));cam.lookAt(tg);cosmos();moons();R.render(S,cam)}
bar();show(-2);requestAnimationFrame(loop);
