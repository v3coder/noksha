/* Loading */
window.onload = function (){ document.querySelector('loading').style.display = 'none'; document.querySelector('loader').remove(); document.body.classList.add('loading');  }
/* Functions */
var bodyall = document.querySelector('body'); var elems = bodyall;
function q(x,y){var v = document.querySelectorAll(x); if (!!v){v.forEach(y);} }
function astyle(x,y,z){ var re = new RegExp(x+'-[^=]*', 'g'); document.querySelector('body').innerHTML.match(re).forEach( e => { var v1 = e.replace(' ',''); var v2 = v1.split('-')[1]; document.querySelector('style').innerHTML += '['+v1+']'+'{'+y+':'+v2+z+'}';   }); }
function invw(idx){ var observer = new IntersectionObserver(onIntersection, { root: null, threshold: .1 }); function onIntersection(entries, opts){ entries.forEach(entry => entry.target.classList.toggle('inview', entry.isIntersecting) ) } var elems = document.querySelectorAll(idx); for ( var i=0; i < elems.length; i++) { observer.observe( document.querySelectorAll(idx)[i] );  }  }
function inview(x,y) { q(x, e => { new IntersectionObserver(ov => { if (ov[0].isIntersecting) { e.classList.add(y) } else { e.classList.remove(y) } }).observe(e) }) }
function rep(tag, find, replace){ q(tag, e => {  e.outerHTML =  e.outerHTML.replace(new RegExp(find, "g"), replace); }) }
function rbody(find, replace){ elems = document.querySelector('body'); elems.innerHTML = elems.innerHTML.replace(new RegExp(find, "g"), replace); }
function html (x, y){ q(x, e => e.innerHTML = y); }
function ahtml (x, y){ q(x, e => e.innerHTML += y); }
function ihtml(x,y,z){ q(x, e => { e.innerHTML = y+`${e.innerHTML}`+z;}) }
function ohtml(x,y,z){ q(x, e => { e.outerHTML = y+`${e.outerHTML}`+z;}) }
function wrap(x, y, z){ q(x, e => { wrapper = document.createElement(y); wrapper.classList.add(z); e.parentNode.insertBefore(wrapper, e); wrapper.appendChild(e); });   }
function ctoggle(x,y){ q(x, e =>  e.classList.toggle(y) ) }
function gtext(x){ gtext = document.querySelector(x).innerText; }
function css(x){ document.getElementsByTagName('style')[0].innerHTML += x }
async function json(x,y) { var r = await fetch(x); await r.json().then(y) }
async function ajson(x,y) {var r = await fetch(x); await r.json().then(d => { d.forEach(y) }) }
function script(url) { var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url; var x = document.getElementsByTagName('head')[0]; x.appendChild(s); }
/* Style */
astyle('b','background',';'); astyle('h','height',';'); astyle('t','color',';'); 
/* QR Code Generator */
html('qr','<img src="https://api.qrserver.com/v1/create-qr-code/?data='+window.location.href+'&amp;size=50x50"/>');
/* Replace Font Awesome and Model */
rbody('<i ','<i class="fa fa-'); rbody('=" "','"'); rbody('=""',''); rep('progress','<progress ','<progress max="100" ');
rbody('<modal 1','<modal id="modal-one"'); rbody('modal 1','#modal-one" id="modal-1'); 
rbody('<modal 2','<modal id="modal-two"'); rbody('modal 2','#modal-two" id="modal-2'); 
rbody('<modal 3','<modal id="modal-three"'); rbody('modal 3','#modal-three" id="modal-3'); 
ihtml('header','<div>','</div>'); ihtml('mainbar','<div>','</div>'); ihtml('footer','<div>','</div>'); ihtml('leftbar','<div>','</div>'); ihtml('rightbar','<div>','</div>'); 
/* Google Fonts */
var elems = bodyall;
elems.innerHTML.match(/f-[^=]*/g).forEach(e => { var font2 = e.replace('f-',''); var font3 = font2.replace(/(^\w|\-\w)/g, m => m.toUpperCase()); var font4 = font3.replace(/-/g, ' ');
ahtml('head', '<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family='+font4+'">');
css('[f-'+font3+']'+'{font-family: '+font4+'}');    });
/* Navigation */
var t = document.querySelector('nav');
function myFxa() { ctoggle('nav','res'); ctoggle('.icon','nbac'); }
ahtml('nav','<a onClick="myFxa()" class="icon nba"><div></div><div></div><div></div></a>');
rep('sub','<sub','<sub><button'); rep('sub','<br',' <i class="fa fa-caret-down"></i></button><div'); rep('sub','</sub','</div></sub');
wrap('nav','div','nav'); wrap('progress','div','progress');
/* Input */
q('input[a]', e => { var s = e.getAttribute('placeholder'); if (!s){ s = '' }; e.setAttribute('placeholder',''); e.setAttribute('required','required'); 
ohtml('input[a]','<div class="input">','<label>'+s+'</label></div>') });
/* Voice Input */
q('button[voice]', e => { e.setAttribute('onClick','voice.start()');}); var voice = new webkitSpeechRecognition(); voice.lang = 'en-US';
voice.onstart = function() { q('input[voice]', e => { e.setAttribute('value', 'Listening ..');}); };
voice.onresult = function(event) { q('input[voice]', e => { e.setAttribute('value', event.results[0][0].transcript);}); };
/* Tabs */
var elems = document.querySelector('tabs');
elems.innerHTML = elems.innerHTML.replace(/<br/g, '</label><div class="tab"').replace(/<\/tab/g, '</div').replace(/<tab 1/g, '<input type="radio" name="tabs" id="tabone" checked="checked"><label for="tabone"').replace(/<tab 2/g, '<input type="radio" name="tabs" id="tabtwo"><label for="tabtwo"').replace(/<tab 3/g, '<input type="radio" name="tabs" id="tabthree"><label for="tabthree"');
/* FAQ */
var elems = document.querySelector('faqs');
elems.innerHTML = elems.innerHTML.replace(/<br/g, '</label><div class="faq"').replace(/<\/faq/g, '</div').replace(/<faq 1/g, '<input type="radio" name="faqs" id="faqone"><label for="faqone"').replace(/<faq 2/g, '<input type="radio" name="faqs" id="faqtwo"><label for="faqtwo"').replace(/<faq 3/g, '<input type="radio" name="faqs" id="faqthree"><label for="faqthree"');
/* Share */
try{ loc = location.href; var txt = `<a class="fa fa-facebook" href="http://www.facebook.com/sharer.php?u=${loc}" target="_blank"></a> <a class="fa fa-twitter" href="http://twitter.com/home?status=Currently reading ${loc}" target="_blank"></a>
<a class="fa fa-tumblr" href="https://www.tumblr.com/widgets/share/tool?posttype=link&amp;canonicalUrl=${loc}" target="_blank"></a> <a class="fa fa-pinterest" href="https://pinterest.com/pin/create/button/?url=${loc}" target="_blank"></a>
<a class="fa fa-linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=${loc}" target="_blank"></a> <a class="fa fa-reddit" href="https://reddit.com/submit/?url=${loc}" target="_blank"></a>
<a class="fa fa-envelope" href="mailto:?subject=Check%20It.&amp;body=${loc}" target="_self"></a>`; } catch(e) {}; html('share', txt);
/* Slideshow */
ohtml('slide', '<div class="dotSlide"></div>','<a class="prev" onclick="plusSlides(-1)">&#10094;</a><a class="next" onclick="plusSlides(1)">&#10095;</a>');
var slideIndex = 1; showSlides(slideIndex);
function plusSlides(n) {showSlides(slideIndex += n);}
function currentSlide(n) {showSlides(slideIndex = n);}
function showSlides(n) { var i; var slides = document.getElementsByTagName("slide"); var dots = document.getElementsByClassName("dotSlide");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) { slides[i].style.display = "none";  }
for (i = 0; i < dots.length; i++) { dots[i].className = dots[i].className.replace(" activeSlide", ""); }
slides[slideIndex-1].style.display = "block";  dots[slideIndex-1].className += " activeSlide"; }
setInterval(function(){ slideIndex++; showSlides(slideIndex); }, 5000);
/* Star */
var t = document.querySelector('star').innerText;
html('star','<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>');
var ele23 = document.querySelectorAll('star > span'); for ( var i=0; i < t; i++) { ele23[i].classList.add('star'); }
/* Count */
q('count', e => { new IntersectionObserver(ov => { if (ov[0].isIntersecting) { var t = eval(e.innerText), c = setInterval(cvl, 30), n = t - 100; e.innerText = ''; if (t < 100) { n = n * 0 }
function cvl(){ e.innerHTML =++ n; if(n === t){ clearInterval(c) }} } }).observe(e) });
inview('progress','progress')
/* Time & Date*/
setInterval( () => html('time', new Date().toLocaleTimeString() ), 1000);
var d = new Date(); html('date', d.getDate()+'-'+(d.getMonth()+1)+'-'+ d.getFullYear() ); html('year', d.getFullYear() ); html('month', d.toLocaleString('en-us',{month:'long'}) ); html('day', d.toLocaleString('en-us',{weekday:'long'}) );
/* Device */
const getUA = () => { let device = "Unknown"; const ua = { "Generic Linux": /Linux/i, "Android": /Android/i, "BlackBerry": /BlackBerry/i, "Bluebird": /EF500/i, "Chrome OS": /CrOS/i, "Datalogic": /DL-AXIS/i, "Honeywell": /CT50/i, "iPad": /iPad/i, "iPhone": /iPhone/i, "iPod": /iPod/i, "macOS": /Macintosh/i, "Windows": /IEMobile|Windows/i, "Zebra": /TC70|TC55/i, }
Object.keys(ua).map(v => navigator.userAgent.match(ua[v]) && (device = v)); return device; }
html('device', getUA() );
/* Battery */
q('battery', e => { navigator.getBattery().then(b => { e.innerHTML = b.level * 100 +'%'}) })
/* Parallax Effect */
q('lax', e => { var s = e.getAttribute('src'); var h = e.getAttribute('height'); e.style.backgroundImage = 'url('+s+')'; e.style.height = h; });
/* API: Visitor Count */
q('visitor', e =>{ json('https://api.countapi.xyz/hit/:HOST:/:PATHNAME:', obj => { e.innerText = obj.value; }); });
/* API: Location and Weather */
json('https://api.ipgeolocation.io/ipgeo?apiKey=e692f2f1a8c446b3a9ce21eb461953ef',  obj => {
q('ip', e => e.innerText = obj.ip); q('country', e => e.innerText = obj.country_name); q('state', e => e.innerText = obj.state_prov);
q('city', e => e.innerText = obj.city); q('isp', e => e.innerText = obj.isp); q('flag', e => e.innerHTML = '<img src="'+obj.country_flag+'" style="height:inherit"></img>'); const cityx = obj.city;
json('https://api.openweathermap.org/data/2.5/weather?q='+cityx+'&appid=cad7ec124945dcfff04e457e76760d90', obj => {
q('weather', e => e.innerText = `${Math.round(obj.main.temp - 273.15)}°C`); q('weatherc', e => e.innerText = obj.weather[0].description); } ) } );
/* API: Graph */
var v = q('graph', e => { var t = e.getAttribute('type'); if (!t){ t = 'bar'} if (t == 'a'){ t = 'area'} if (t == 'b'){ t = 'bar'} if (t == 'c'){ t = 'pie'} if (t == 'd'){ t = 'donut'} if (t == 'e'){ t = 'line'} if (t == 'f'){ t = 'radar'} if (t == 'g'){ t = 'radialBar'}
var v = e.innerText; e.innerText = ''; const graph = v.split(', '); const graph1 = []; const graph2 = []; for (const item of graph) { const [k, v] = item.split(': '); graph1.push(k); graph2.push(~~v); }
if (t == 'pie' || t == 'donut' || t == 'radialBar'){ var options = { chart: { height: 280, type: t}, dataLabels: { enabled: false}, series: graph2, labels: graph1, xaxis: { categories: graph1 }}; }
else { var options = { chart: { height: 280, type: t}, dataLabels: { enabled: false}, series: [ { name: '', data: graph2 }], labels: graph1, xaxis: { categories: graph1 }}; }
new ApexCharts(e, options).render(); });
/* API: Chart */
q('chart', obj => { var t = obj.getAttribute('type'); if (!t){ t = 'bar'} if (t == 'a'){ t = 'bar'} if (t == 'b'){ t = 'line'} if (t == 'c'){ t = 'pie'} if (t == 'd'){ t = 'doughnut'} if (t == 'e'){ t = 'polarArea'} if (t == 'f'){ t = 'radar'} if (t == 'g'){ t = 'violin'} if (t == 'h'){ t = 'radialGauge'} if (t == 'i'){ t = 'progressBar'}
var a = obj.innerText; obj.innerText = ''; var b = a.split('.')[0].split(':')[1].split(','); var r1 = JSON.stringify(b).replaceAll("\"", "'"); var d = a.split('.').slice(1); var arr = '';
d.forEach( e => { arr += ' { label: "'+e.split(':')[0]+'", data: ['+e.split(':')[1].split(',')+']}, '}); r2 = arr.replaceAll("\"", "'");
obj.innerHTML = `<img src="https://quickchart.io/chart?c={ type: '${t}', data: { labels: ${r1}, datasets: [${r2}] }}">`; });
/* Color Code */
var elems = document.querySelector('code');
var t = elems.innerHTML
.replace(/</g, '&lt;').replace(/>/g, '&gt;') //Convert
.replace(/"(.+?)"/g, '<c b>"$1"</c>') //quote
.replace(/&lt;(.+?)&gt;/g, '&lt;<c q>$1</c>&gt;') //<>
.replace(/{(.+?)}/g, '{<c q>$1</c>}') //{ }
.replace(/:(.+?)}/g, ':<c b>$1</c>}') //: }
.replace(/;(.+?):/g, ';<c q>$1</c>:') //; :
.replace(/;(.+?):/g, ';<c q>$1</c>:') //; :
.replace(/(=|:|-|\*|\+)/g, '<c q>$1</c>') //; :
.replace(/(abstract |arguments |boolean |break |byte |case |catch |char |class |const |continue |debugger |default |delete |do |double |else |enum |eval |export |extends |false |final |finally |float |for |function |goto |if |implements |import |in |instanceof |int |interface |let |long |NaN |native |new |null |package |private |protected |public |return |short |static |super |switch |synchronized |this |throw |throws |transient |true |try |typeof |var |void |volatile |while |with |yield )/g, '<c q>$1</c>'); //Words
document.querySelector('code').innerHTML = t;
/* Comment */
q('comment', e => { html('comment', '<div id="wpac-comment"></div>'); 
wpac_init = window.wpac_init || []; wpac_init.push({widget: 'Comment', id: 33289});
(function(){ if ('WIDGETPACK_LOADED' in window) return; WIDGETPACK_LOADED = true; var mc = document.createElement('script'); mc.async = true; mc.src = 'https://embed.widgetpack.com/widget.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mc, s.nextSibling); })();  })
/* Rating */
q('rating', e => { html('rating', '<div id="wpac-rating"></div>'); 
wpac_init = window.wpac_init || []; wpac_init.push({widget: 'Rating', id: 33289});
(function(){ if ('WIDGETPACK_LOADED' in window) return; WIDGETPACK_LOADED = true; var mc = document.createElement('script'); mc.async = true; mc.src = 'https://embed.widgetpack.com/widget.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mc, s.nextSibling); })();  })
/* Review */
q('review', e => { html('review', '<div id="wpac-review"></div>'); 
wpac_init = window.wpac_init || []; wpac_init.push({widget: 'Review', id: 33289});
(function(){ if ('WIDGETPACK_LOADED' in window) return; WIDGETPACK_LOADED = true; var mc = document.createElement('script'); mc.async = true; mc.src = 'https://embed.widgetpack.com/widget.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mc, s.nextSibling); })();  })
/* Video */
var d = document.querySelectorAll('video');
for ( var i=0; i < d.length; i++) { var v = d[i].getAttribute('src'); var start = '<div class="iframe"><iframe src="https://'; var end = ' frameborder="0" scrolling="no"></iframe></div>';
if (v.includes('youtube.com/')){ x = v.split('=')[1]; d[i].outerHTML = start+'youtube.com/embed/'+x+'"'+end; }
if (v.includes('imdb.com/')){ x = v.split('\/')[4]; let w = window.innerWidth; d[i].outerHTML = start+'imdb.com/video/imdb/'+x+'/imdb/embed?autoplay=false&width='+w+'" allowfullscreen="true"'+end; }
if (v.includes('dailymotion.com/')){ x = v.split('\/')[4]; d[i].outerHTML = start+'dailymotion.com/embed/video/'+x+'"'+end; }
if (v.includes('ted.com/')){ x = v.split('\/')[4]; d[i].outerHTML = start+'embed.ted.com/talks/'+x+'" allowfullscreen'+end; }
if (v.includes('facebook.com/')){ d[i].outerHTML = start+'facebook.com/plugins/video.php?href='+v+'&show_text=0" allowTransparency="true" allowFullScreen="true"'+end; }
if (v.includes('vimeo.com/')){ x = v.split('\/')[3]; d[i].outerHTML = start+'player.vimeo.com/video/'+x+'" allowfullscreen'+end; }
if (v.includes('.mp4')){ x = v.split('\/')[3]; d[i].outerHTML = '<video controls disablepictureinpicture controlsList="nodownload noremoteplayback noplaybackrate" src="'+v+'"></video><div class="video"></div>'; 
var twidth = document.querySelector('video').offsetWidth; var width = twidth - 220; css('video::-webkit-media-controls-timeline {width:'+width+'px} .video {width:'+twidth+'px}');  } }
/* Audio Player */
q('audio', e => { var url = e.getAttribute('src'); e.outerHTML = '<div class="aplayer"><div id="awave"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><audio controls controlsList="nodownload noplaybackrate" id="aplayer" src="'+url+'"></audio></div>';
var audio = document.querySelector('#aplayer');
audio.onplay = function(){ css(' #awave div {animation: asound 0ms -800ms linear infinite alternate;}') }
audio.onpause = function(){ css(' #awave div {animation: none;}')}  });
/* Nav & Modal */
ihtml('#modal-one','<a href="#modal-1" class="closeall"></a><div><a href="#modal-1" class="closeM">×</a>','</div>');
ihtml('#modal-two','<a href="#modal-2" class="closeall"></a><div><a href="#modal-2" class="closeM">×</a>','</div>');
ihtml('#modal-three','<a href="#modal-3" class="closeall"></a><div><a href="#modal-3" class="closeM">×</a>','</div>');
/* Get and Set Property 
var div = document.querySelector('grid'); if (!div){ } else {
div.getAttribute('gap'); document.documentElement.style.setProperty('--gap', div ); }//Grid gap
var div = document.querySelector('grid'); if (!div){ } else {
div.getAttribute('width'); document.documentElement.style.setProperty('--gridWidth', div ); } //Grid width
var div = document.querySelector('mainbar>div'); if (!div){ } else {
div.getAttribute('width'); document.documentElement.style.setProperty('--mainWidth', div ); } //Main width
var div = document.querySelector('leftbar>div'); if (!div){ } else {
div.getAttribute("width"); document.documentElement.style.setProperty('--leftWidth', div ); } //Left width
var div = document.querySelector('rightbar>div'); if (!div){ } else {
div.getAttribute('width'); document.documentElement.style.setProperty('--rightWidth', div ); } //Right width
var div = document.querySelector('slideshow'); if (!div){ } else {
div.getAttribute('height'); document.documentElement.style.setProperty('--slideHeight', div ); } //Slideshow height
*/ 









