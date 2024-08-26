
function q(selector, callback) { document.querySelectorAll(selector)?.forEach(callback); }
function cssURL(url) { var link = document.createElement('link'); link.rel = 'stylesheet'; link.href = url; document.head.appendChild(link) }
function cssHead(x,y = '*') { if(document.querySelector(y)) { var styleTag = document.head.querySelector('style') || document.head.appendChild(document.createElement('style')); styleTag.innerHTML += x; } }
function loadScript(url, callback) { document.head.appendChild( Object.assign( document.createElement('script'), { type: 'text/javascript', src: url, onload: callback }));  };
async function json(x,y) { var r = await fetch(x); await r.json().then(y); inStyle();}
let checkMIR, checkMSR, checkFAI = false; let addFont = 'Roboto';
/* Initial CSS */
cssHead(` :root { --theme: 22, 119, 255; --radius: 6px; --font: system-ui; --size: 14px } ::-webkit-scrollbar { width: 7px; height: 7px;} *:hover::-webkit-scrollbar-thumb { background: rgba(var(--theme), 0.5 )} ::-webkit-scrollbar-thumb { background: transparent; border-radius: var(--radius); } ::selection { background-color: rgba(var(--theme), 0.2 ); }
body { color: #1f1f1f; margin: 0; padding: 0; height: 100vh; line-height: 1.7; font-size: var(--size); font-family: var(--font), Verdana, sans-serif; line-height: 1.5;} html { scroll-behavior: smooth; }
a { text-decoration: none; cursor: pointer; color: rgba(var(--theme), 1 );} a:hover { text-decoration: underline;} a.clicked, a:focus { background: rgba(var(--theme), 0.1 ) } img { transition: all 0.3s ease-in-out; border-radius: var(--radius); max-width: 100%; height: auto; display: block; margin: 0 auto;} img:hover {filter: brightness(70%); }
h1 { font-size: 38px; margin: 0px 0px 19px;} h2 { font-size: 30px; margin: 0px 0px 15px;} h3 { font-size: 24px; margin: 28.8px 0px 12px;} h4 { font-size: 20px; margin: 24px 0px 10px;} h5 { font-size: 16px; margin: 19.2px 0px 8px;}
loading div { height: 20px; border-radius: 8px; margin-bottom: 10px; background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: loading 1.5s infinite; } loading div:nth-child(4n+1) { width: 30%; } loading div:nth-child(4n+0) { width: 60%; } @keyframes loading { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
content .loading { position: absolute; width: -webkit-fill-available; height: -webkit-fill-available; background: linear-gradient(90deg, rgba(var(--theme), 0 ) 25%, rgba(var(--theme), 0.15 ) 50%, rgba(var(--theme), 0 ) 75%); background-size: 200% 100%; animation: loadingAnimation 2s infinite ease-in-out; border-radius: var(--radius);} @keyframes loadingAnimation { 0% {  background-position: 200% 0; } 100% { background-position: -200% 0;} }
middle { display: flex; align-items: baseline; justify-content: center; height: 100%; flex-direction: column;}
nav { display: flex; overflow: auto; align-items: center;} nav a { padding: 10px; color: inherit;} nav::-webkit-scrollbar { display: none; } nav a:hover{ text-decoration: none;}
hr { border-block-start: 0px solid rgba(5, 5, 5, 0.06); margin: 15px 0px;} divider { display: flex; align-items: center;} divider hr { flex: 1; margin: 0 20px; }
input[type="text"] { font-size: inherit; font-family: inherit; padding: 8px 10px; margin: 5px; border: 1px solid rgba(0,0,0,0.1); border-radius: var(--radius); transition: 0s; } input:focus { outline: 1px solid rgba(var(--theme), 1 ); border: 1px solid transparent;} input::placeholder { color: rgba(0,0,0,0.3); } input[type="checkbox"] { outline: none; }
input[type="checkbox"] { position: relative; width: 40px; height: 20px; appearance: none; border: none; background-color: #ccc; border-radius: 20px; cursor: pointer; vertical-align: middle; transition: background-color 0.3s; &::after { content: ''; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background-color: #fff; border-radius: 50%; transition: transform 0.3s; } &:checked { background-color: rgba(var(--theme), 1 ); &::after { transform: translateX(20px); } } &:focus { border: none;} }
input[type="radio"] { appearance: none; vertical-align: middle; margin: auto 10px; width: 20px; height: 20px; border-radius: 50%; border: 1px solid #aaa; cursor: pointer; transition: border 0.2s; &:checked {  border: 5px solid rgba(var(--theme), 1 ); border-radius: 50%; outline: none }}
select { background-color: white; border: 1px solid #ccc;  padding: 8px 30px 8px 10px;  margin-right: 30px; border-radius: var(--radius); background-image: url("data:image/svg+xml;utf8,<?xml version='1.0' ?><svg height='25' fill='lightgray' viewBox='0 0 48 48' width='48' xmlns='http://www.w3.org/2000/svg'><path d='M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z'/><path d='M0-.75h48v48h-48z' fill='none'/></svg>"); background-repeat: no-repeat; background-position: calc(100% + 10px) center; appearance: none; option { background-color: white; color: #333;} &:focus { border-color: rgba(var(--theme), 1 ) !important; outline: none !important; }}
input[type="date"] { width: 105px; text-transform: uppercase; font-family: inherit; background: transparent; border: 1px solid #ccc;border-radius: var(--radius); padding: 8px 10px; &:focus { border-color: rgba(var(--theme), 1 ); outline: none; }}
::-webkit-calendar-picker-indicator { display: none; } ::-webkit-datetime-edit-text { color: transparent }
::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-year-field  { background: #ddd; padding: 5px; border-radius: var(--radius); ::active {background: red}}
::-webkit-datetime-edit-month-field:focus, ::-webkit-datetime-edit-day-field:focus, ::-webkit-datetime-edit-year-field:focus { background: rgba(var(--theme), 1 );}
`)
/* Button * Usage: <button f>Click Here</button> * d = Depth, f = Faded, g = Gradient, o = Outline   */
cssHead(`button {  color: white; border: 0; cursor: pointer; font-size: inherit; padding: 8px 15px; margin: 5px; border-radius: var(--radius); transition: all 0.3s; background-color: rgba(var(--theme), 1 );} button:hover {box-shadow: 0 10px 10px -7px rgba(var(--theme), 0.4 ) } button:active {box-shadow: 0 10px 10px -7px rgba(var(--theme), 1 ) }
button[d] { border-bottom: 4px solid rgba(0,0,0,0.2); background-color: rgba(var(--theme), 0.9 ); } 
button[f] { background: rgba(var(--theme), 0.1 ); color: rgba(var(--theme), 1 ); } 
button[g] { background: linear-gradient(to top, rgba(var(--theme), 1 ), rgba(var(--theme), 0.8 ));}
button[o] { background: rgba(255, 255, 255, 0.2 ); color: rgba(var(--theme), 1 ); border: 1px solid rgba(var(--theme), 0.8 );}
`, 'button')
/* Table */
cssHead(`table { width: 100%; margin: 20px auto; border-collapse: collapse; display: block; min-width: 100px; overflow: auto; white-space: nowrap;} th, td { border: 1px solid #ddd; padding: 8px; text-align: left;} th { text-align: center; background-color: #f2f2f2; } tr:nth-child(even) { background-color: #f9f9f9; } tr:hover { background-color: #e9e9e9; }`,'table')
/* Column Layout * Usage: <column><div>Left Bar</div><content>Content Goes Here</content><div>Right Bar</div></column> */
cssHead(`column { display: flex; flex: 1; overflow: auto;} column > div { overflow: auto; padding: 10px} content { flex: 1; min-width: 50vw; overflow: auto; padding: 10px} `,'column')
/* Grid Layout * Usage: <grid><item>1</item><item>2</item></grid> * <div class="grid"><item>1</item><item>2</item></div>*/
cssHead(`grid, .grid { display: grid; gap: 10px;} grid > item, .grid > item { flex: 1; min-width: 200px; padding: 10px; border: 1px solid rgba(0,0,0,0.1); border-radius: var(--radius);} grid, .grid img { object-fit: cover;}`,'grid, .grid')
q('grid', e => { e.style.gridTemplateColumns = `repeat(auto-fill, minmax(${e.getAttribute('width') || '300px'}, 1fr))`; })
/* Set Theme * Usage: <theme color="#4F46E5" radius="20px" size="15px" font="Roboto"></theme> * Color: GoogleGreen: #188038, AntBlue: #1677FF, tailwindPurple: #4F46E5 */
q('theme', e => { document.documentElement.style.cssText = `--theme: ${convertColor(e.getAttribute('color'))}; --radius: ${e.getAttribute('radius') || '8px'}; --font: ${e.getAttribute('font') || 'system-ui'};  --size: ${e.getAttribute('size') || '14px'};` });
function colorNameToHex(colorName) { var context = document.createElement("canvas").getContext("2d"); context.fillStyle = colorName; context.fillRect(0, 0, 1, 1); var pixelData = context.getImageData(0, 0, 1, 1).data; return hexColor = "#" + ((1 << 24) | (pixelData[0] << 16) | (pixelData[1] << 8) | pixelData[2]).toString(16).slice(1); }
function colorHaxToRgba(hex) { hex = hex.replace(/^#/, ''); const [r, g, b] = hex.match(/.{1,2}/g).map(value => parseInt(value, 16)); return `${r}, ${g}, ${b}`; }
function convertColor(input) { return colorHaxToRgba(input.startsWith('#') ? input : colorNameToHex(input)) }
/* Color Code */
cssHead(`code { background: #f8f9fa; padding: 10px; white-space: pre; display: block; overflow: auto; text-align: left; cursor: pointer; font-family: Consolas,"Liberation Mono","Courier New",monospace; color: #009f68; border-radius: var(--radius);} code:hover { background: #f0f0f0} c[keyword] { color: #a200ff} c[value] { color: #008cff} c[comment] { color: #6e6e6e; font-style: italic;} c[attr] { color: #ff00aa} c[symbole] {color: #009f68} code[a] {display: block;} code[b] {display: block; filter: invert(100%); background: linen; -webkit-font-smoothing: revert;} code[c] {display: block; background: #eeeef0; text-shadow: 0 1px #fff;} code[d] {display: block; background: #f6f8f9; border: 1px solid #ddd;} code[e] {display: block; background: #f6f8f9; border: 1px solid #ddd; }`, 'code')
q('code', e => { e.innerHTML = e.innerHTML
    .replace(/</g, '&lt;').replace(/>/g, '&gt;') //Convert
    .replace(/\=""/g, '') // =""
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<c comment>$1</c>') //Block comment
    .replace(/(\/\/ .*?$)/gm, '<c comment>$1</c>') // Line comments
    .replace(/"(.+?)"/g, '<c value>"$1"</c>') //double quote
    .replace(/'(.+?)'/g, '<c value>\'$1\'</c>') //single quote
    .replace(/(\d)/g, '<c keyword>$1</c>') //number
    .replace(/&lt;script&gt;([\s\S]*?)&lt;\/script&gt;/g, '&lt;script&gt;<c attr>$1</c>&lt;/script&gt;') // JS default
    .replace(/&lt;style&gt;([\s\S]*?)&lt;\/style&gt;/g, '&lt;style&gt;<c keyword>$1</c>&lt;/style&gt;') // Css
    .replace(/&lt;(.+?)&gt;/g, '&lt;<c keyword>$1</c>&gt;') //<>
    .replace(/{(.+?)}/g, '{<c attr>$1</c>}') //{ }
    .replace(/{(.+?):/g, '{<c value>$1:</c>') // { :
    .replace(/{([^{}]*)}/g, (match, p1) => `{${p1.replace(/;(.+?):/g, ';<c attr>$1:</c>')}}`) // ; :
    .replace(/(=|:|-|\*|\+)/g, '<c symbole>$1</c>') // Symboles
    .replace(/(abstract |arguments |boolean |break |byte |case |catch |char |class |const |continue |debugger |default |delete |do |double |else |enum |eval |export |extends |false |final |finally |float |for |function |goto |if |implements |import |in |instanceof |int |interface |let |long |NaN |native |new |null |package |private |protected |public |return |short |static |super |switch |synchronized |this |throw |throws |transient |true |try |typeof |var |void |volatile |while |yield )/g, '<c q>$1</c>'); //Words
    e.addEventListener('click', () => { navigator.clipboard.writeText(e.textContent); alert('Code copied to clipboard!'); });
})
/* Input Field * Usage: <field style="font-size: 30px; width: 500px" type="text" label="Full Name" required></field> */
cssHead(` field input { padding: 10px; margin-bottom: 20px;  } field { position: relative; display: block; } field label { position: absolute; top: 10px; left: 0; padding: 0px 5px; color: #999; transition: 0.35s; pointer-events: none; margin: 0px 10px; color: rgba(0,0,0,0.3);} field input:focus~label, field input:valid~label { top: -8px; left: 0;  background: white; color: rgba(var(--theme), 1 );} field input:focus, field input:valid {   }`,'field')
q('field', e => { e.innerHTML = e.innerHTML + '<label>'+ e.getAttribute('placeholder') +'</label>'; e.setAttribute('placeholder', ''); e.outerHTML = '<field>'+ e.outerHTML.replace('field','input') +'</field>' })
/* Clicked Item BG Change */
q('a', link => { link.addEventListener('click', () => {
    document.querySelectorAll('a').forEach(link => link.classList.remove('clicked')); link.classList.add('clicked');
}); });
/* Parallax Effect * Usage: <lax src="https://www.w3schools.com/howto/img_nature_wide.jpg" height="200px"></lax>*/
cssHead(`lax { background-image: url("img_parallax.jpg"); display: block; height: 300px;  background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover;}`,'lax')
q('lax', e => { var image = e.getAttribute('src'); var height = e.getAttribute('height'); e.style.backgroundImage = 'url('+image+')'; e.style.height = height; });
/* Background Image * <header image="https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo3/slider/slide1.jpg" h-50vh> Content </header>*/
q('[image]', e => {
    e.style.cssText = `background-image: url("${e.getAttribute('image')}"); background-repeat: no-repeat; background-size: cover; position: relative; background-position: top;`;
})

/* API: Visitor Count */
q('visitor', e =>{ json('https://abacus.jasoncameron.dev/hit/'+window.location.host, obj => { e.innerText = obj.value; }); });

/* Time */
q('time', el => { el.dataset.fmt = el.textContent; }); setInterval(updateTime, 1000); updateTime();
function updateTime() {
    const now = new Date(); document.querySelectorAll('time').forEach(el => { let fmt = el.dataset.fmt.toLowerCase(); const h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();
    fmt = fmt.replace(/am|pm/gi, h >= 12 ? 'PM' : 'AM').replace(/hhh/g, ('0' + h).slice(-2)).replace(/hh/g, ('0' + (h % 12 || 12)).slice(-2)).replace(/h/g, h % 12 || 12).replace(/mmm/g, ('0' + m).slice(-2)).replace(/mm/g, ('0' + m).slice(-2)).replace(/m/g, m).replace(/ssss|sss|ss/g, ('0' + s).slice(-2)).replace(/s/g, s); el.textContent = fmt;
}); }
/* Date */
q('date', el => {
    el.textContent = el.textContent.replace('MMMM', new Date().toLocaleDateString('en-US', { month: 'long' })).replace('MMM', new Date().toLocaleDateString('en-US', { month: 'short' })).replace('MM', (new Date().getMonth() + 1).toString().padStart(2, '0')).replace('M', (new Date().getMonth() + 1).toString()).replace('DDDD', new Date().toLocaleDateString('en-US', { weekday: 'long' })).replace('DDD', new Date().toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 3)).replace('DD', new Date().getDate().toString().padStart(2, '0')).replace('D', new Date().getDate().toString()).replace('YYYY', new Date().getFullYear().toString()).replace('YY', new Date().getFullYear().toString().slice(-2));
});
/* Device */
const getUA = () => { let device = "Unknown"; const ua = { "Generic Linux": /Linux/i, "Android": /Android/i, "BlackBerry": /BlackBerry/i, "Bluebird": /EF500/i, "Chrome OS": /CrOS/i, "Datalogic": /DL-AXIS/i, "Honeywell": /CT50/i, "iPad": /iPad/i, "iPhone": /iPhone/i, "iPod": /iPod/i, "macOS": /Macintosh/i, "Windows": /IEMobile|Windows/i, "Zebra": /TC70|TC55/i, }
Object.keys(ua).map(v => navigator.userAgent.match(ua[v]) && (device = v)); return device; }
document.querySelectorAll('device').forEach(e => {  e.textContent = getUA(); });
/* Battery */
q('battery', e => { navigator.getBattery().then(b => { e.innerHTML = b.level * 100 +'%'}) })
/* API: Location and Weather */
json('https://api.ipgeolocation.io/ipgeo?apiKey=e692f2f1a8c446b3a9ce21eb461953ef',  obj => {
q('ip', e => e.innerText = obj.ip);
q('country', e => e.innerText = obj.country_name);
q('state', e => e.innerText = obj.state_prov);
q('city', e => e.innerText = obj.city);
q('isp', e => e.innerText = obj.isp);
q('flag', e => e.innerHTML = '<img src="'+obj.country_flag+'" style="height:inherit"></img>'); const cityx = obj.city;
json('https://api.openweathermap.org/data/2.5/weather?q='+cityx+'&appid=cad7ec124945dcfff04e457e76760d90', obj => {
q('weather', e => e.innerText = `${Math.round(obj.main.temp - 273.15)}°C`);
q('weatherc', e => e.innerText = obj.weather[0].description); } ) } );
/* Slider * Usage: <slider> <item>Card 1</item><item>Card 2</item><item>Card 3</item><item>Card 4</item><item>Card 5</item></slider> */
cssHead(`slider{position:relative;overflow:hidden;width:100%;display:flex}slider > div{display:flex;overflow-x:auto;scroll-behavior:smooth;margin:0 -25px} slider > div > item{width: 300px; min-width:300px;margin:10px;padding:20px;border-radius:10px;border:1px solid #ddd}slider > button{box-shadow: 0 0px 10px 0px #ccc; color: rgba(var(--theme), 1); background: white; padding:10px 15px;z-index:1;font-weight:bold; margin:auto 0;border-radius:50%}`,'slider')
q('slider', e => {
    e.innerHTML = `<button class="left">❮</button><div>${e.innerHTML}</div><button class="right">❯</button>`; const cards = e.querySelector('slider > div');
    e.querySelectorAll('slider > button').forEach(button => button.style.display = cards.scrollWidth > cards.clientWidth ? 'block' : 'none');
    e.querySelector('slider > button.left').addEventListener('click', () => { cards.scrollLeft -= cards.offsetWidth; }); e.querySelector('slider > button.right').addEventListener('click', () => { cards.scrollLeft += cards.offsetWidth; });
})
/* Dropdown * Usage: <dropdown name="Open Dropdown" right> Welcome to my site</dropdown> */
cssHead(`dropdown { position: relative; display: inline-block;} dropdown > a { white-space: pre; color: unset; display: inline-block;}  dropdown > a span { transform: rotate(90deg); display: inline-block; padding: 0px 0.2em; font-weight: normal;} dropdown > a:hover {text-decoration: unset} dropdown > div { max-width: -webkit-fill-available; max-height: -webkit-fill-available; overflow: auto; position: fixed; background: white; padding: 10px; border-radius: var(--radius); color: initial; font-size: inherit; z-index: 1; width: max-content; opacity: 0; transform: scaleY(0); transform-origin: top; transition: all 0.3s ease-in-out;} dropdown > div a { display: inline-block; } dropdown:hover > div { opacity: 1; transform: scaleY(1); } dropdown:hover > div[center] { transform: translateX(-50%); left:50%; } dropdown > div[center] { transform: translateX(-50%) scaleY(0); left: 50%; position: absolute; max-width: none; max-height: none;} dropdown > div[right] { right: 0; position: absolute; max-width: none; max-height: none; } dropdown > div[full] { width: -webkit-fill-available; left: 0}`, 'dropdown')
q('dropdown', e => { const full = e.hasAttribute('full') ? 'position: unset' : '';
  e.outerHTML = `<dropdown style="${full}"><a>${e.getAttribute('name') } <span>❯</span></a>${e.outerHTML.replace(/<dropdown/g, "<div").replace(/dropdown>/g, "div>")}</dropdown>`;
});
/* Google Web Font  * Usage: <div font="dancing script">Hello World</div> * Source: https://fonts.google.com/ */
q('[font]', e => {
    var name = e.getAttribute('font').toLowerCase().replace(/(^.|\s+.)/g, m => m.toUpperCase());  addFont += '|'+name; e.style.fontFamily = name; 
})
/* Tab View * Usage: <tab><item name="Tab 1">This is the content for Tab 1.</item><item name="Tab 2">This is the content for Tab 2.</item></tab> */
cssHead(`tab name{display:flex;list-style:none;padding:0;margin:0; background: inherit;} tab name a{flex:1;padding:15px;text-align:center;border-bottom: 2px solid #ddd;cursor:pointer;user-select:none; color: #888; font-weight: bold} tab name a:hover{color: #555; border-bottom: 2px solid #aaa} tab name a.active{border-bottom: 2px solid rgba(var(--theme), 1 ); color: rgba(var(--theme), 1 )} tab item{display:none;padding:20px;background-color:#fff;} tab item.active{display:block;} `, 'tab')
q('tab', (tab, tabIndex) => {
    let tabName = ''; tab.setAttribute('id', `tab${tabIndex}`); tab.querySelectorAll('item').forEach((item, itemIndex) => { tabName += `<a onclick="activeTab(${itemIndex}, 'tab${tabIndex}')">${item.getAttribute('name')}</a>`; });
    tab.insertAdjacentHTML('afterbegin', `<name>${tabName}</name>`); activeTab(0, 'tab' + (tabIndex));
});
function activeTab(itemIndex, tabId) { document.querySelectorAll(`#${tabId} name a`).forEach((tab, linkIndex) => { tab.classList.toggle('active', linkIndex === itemIndex); }); document.querySelectorAll(`#${tabId} item`).forEach((content, contentIndex) => { content.classList.toggle('active', contentIndex === itemIndex); });  }
/* Embed Video * Usage: <video src="https://www.youtube.com/watch?v=yVYQeDhAQWk"></video><video src="https://www.imdb.com/video/vi289916185/"></video><video src="https://www.dailymotion.com/video/x8qz2gm"></video><video src="https://www.ted.com/talks/brene_brown_the_power_of_vulnerability"></video><video src="https://www.facebook.com/100053517092896/videos/698579944290337/"></video><video src="https://vimeo.com/49583118"></video><video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></video> */
cssHead(`.video {position: relative; padding-bottom: 56.25%; /* 16:9 */ height: 0;  } .video iframe{ position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: var(--radius)} video {width: 100%; border-radius: var(--radius)} `,'video')
q('video', e => {
    var v = e.getAttribute('src'); var start = '<div class="video"><iframe src="https://'; var end = ' frameborder="0" scrolling="no" allowfullscreen></iframe></div>';
    if (v.includes('youtube.com/')) { x = v.split('=')[1]; e.outerHTML = start + 'youtube.com/embed/' + x + '"' + end; }
    if (v.includes('imdb.com/')) { x = v.split('\/')[4]; let w = window.innerWidth; e.outerHTML = start + 'imdb.com/video/embed/' + x + '/?autoplay=false&width=' + w + '" allowfullscreen="true"' + end; }
    if (v.includes('dailymotion.com/')) { x = v.split('\/')[4]; e.outerHTML = start + 'geo.dailymotion.com/player/xlyp4.html?video=' + x + '"' + end; }
    if (v.includes('ted.com/')) { x = v.split('\/')[4]; e.outerHTML = start + 'embed.ted.com/talks/' + x + '" allowfullscreen' + end; }
    if (v.includes('facebook.com/')) { e.outerHTML = start + 'facebook.com/plugins/video.php?href=' + v + '&show_text=0" allowTransparency="true" allowFullScreen="true"' + end; }
    if (v.includes('vimeo.com/')) { x = v.split('\/')[3]; e.outerHTML = start + 'player.vimeo.com/video/' + x + '" allowfullscreen' + end; }
    if (v.includes('.mp4')) { x = v.split('\/')[3]; e.outerHTML = '<video controls disablepictureinpicture controlsList="nodownload noremoteplayback noplaybackrate" src="' + v + '"></video>'; }
});
/* Right Click Menu * Usage: <contex-menu><item>Option 1</item><item>Option 2</item><item>Option 3</item></contex-menu> */
cssHead(` contex-menu { z-index: 1; display: none; white-space: nowrap; position: absolute; background-color: #fff; box-shadow: 0px 5px 12px 3px #e0e0e0; padding: 10px 0px; border-radius: var(--radius)} contex-menu item { display: flex; justify-content: space-between; padding: 6px 22px; cursor: pointer; } contex-menu item:hover { background-color: #f0f0f0; } contex-menu hr { margin: 5px 0px;}`,'contex-menu');
q('contex-menu', menu => {
    menu.parentNode.oncontextmenu = event => { event.preventDefault(); menu.style.display = 'block';
    let x = event.pageX; let y = event.pageY; if (y > window.innerHeight * 0.6) { y -= menu.offsetHeight;}; if (x + menu.offsetWidth > window.innerWidth) { x = window.innerWidth - menu.offsetWidth; }; if (y + menu.offsetHeight > window.innerHeight) { y = window.innerHeight - menu.offsetHeight; }
    menu.style.left = x + 'px'; menu.style.top = y + 'px'; document.addEventListener('click', e => {  menu.style.display = 'none'; });
}});
/* Share Icons * Usage: <share></share> */
cssHead(`share {display: block; width: 100%; text-align: center} share .fa-brands {width: 20px; font-size: 20px; color: white; padding: 5px; margin: 5px; border-radius: var(--radius); text-align: center; filter: grayscale(100%);} .fa-brands:hover {filter: grayscale(0%); text-decoration: none} .fa-facebook {background: #3B5998} .fa-twitter {background: #55ACEE} .fa-linkedin {background: #007bb5} .fa-pinterest {background: #cb2027} .fa-tumblr {background: #2c4762}  .fa-reddit {background: #ff5700}`,'share')
q('share', e => { 
    loc = location.href; e.innerHTML = `<a class="fa-brands fa-facebook" href="http://www.facebook.com/sharer.php?u=${loc}" target="_blank"></a> <a class="fa-brands fa-twitter" href="http://twitter.com/home?status=Currently reading ${loc}" target="_blank"></a><a class="fa-brands fa-tumblr" href="https://www.tumblr.com/widgets/share/tool?posttype=link&amp;canonicalUrl=${loc}" target="_blank"></a> <a class="fa-brands fa-pinterest" href="https://pinterest.com/pin/create/button/?url=${loc}" target="_blank"></a><a class="fa-brands fa-linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=${loc}" target="_blank"></a> <a class="fa-brands fa-reddit" href="https://reddit.com/submit/?url=${loc}" target="_blank"></a>`;
})
/* Five Star Rating * Usage: <star>3</star><br><star c-brown>4</star><br> */
cssHead(`star {color: orange;} .star {color: gray;}`,'star')
q('star', e => {
    const count = e.innerText;
    e.innerHTML = '<span class="star">★</span>'.repeat(5); e.querySelectorAll('span').forEach((e, i) => { if (i < count) e.classList.remove('star'); });
});
/* Get Source * Usage: <gsource query=".cb-billing-plans-text" position="2">https://www.cricbuzz.com/cricket-match/live-scores</gsource> */
q('gsource', e => {
let url = 'https://api.codetabs.com/v1/proxy?quest='+e.innerText; e.innerText = 'Loading..'; fetch(url).then(r => r.text()).then(html => {
    let position = e.getAttribute('position') || 1; let query = e.getAttribute('query') || '.entry-content';
    e.innerText = new DOMParser().parseFromString(html, 'text/html').querySelectorAll(query)[position-1].textContent.trim();
}); });
/* Google Sheet as Database
Retrun Colum B: <sheet key="AIzaSyCltH7M5wk2wHtGL8ISvvms_nIr919fG-8" id="1ApJIg5rnXM3yaOUUuxg2cIxCRAnudnQ4YUs1wartc-A" range="apps!A1:C4">hello: [1]<br></sheet>
Return a cell: <sheet key="AIzaSyCltH7M5wk2wHtGL8ISvvms_nIr919fG-8" id="1ApJIg5rnXM3yaOUUuxg2cIxCRAnudnQ4YUs1wartc-A" range="apps!C4">hello: [0]<br></sheet> */
cssHead(`sheet { white-space: pre-wrap;}`,'sheet')
function googleSheet(r){
q('sheet', e => { if(!e.getAttribute('data')) { e.setAttribute('data',  e.innerHTML) } var content = e.getAttribute('data');  e.innerHTML = '<div class="loading"></div>'; 
    json(`https://sheets.googleapis.com/v4/spreadsheets/${e.getAttribute('id') || document.querySelector('sheet').getAttribute('id')}/values/${r || e.getAttribute('range') || document.querySelector('sheet').getAttribute('range')}?key=${e.getAttribute('key') || document.querySelector('sheet').getAttribute('key')}`, data => {
        e.innerHTML = data.values.map(item => content.replace(/\[(.+?)\]/g, (match, p1) => item[p1] || match)).join('');
}); });
} googleSheet();
/* json API * Usage: <japi url="https://api.publicapis.org/entries" array="entries">[API]<br></japi> * <japi url="https://list.ly/api/v4/meta?url=https://fusionbd.com">[url]</japi> * <japi url="https://list.ly/api/v4/meta?url=https://fusionbd.com" noarray="metadata">[description]</japi> */
function japi (url,target) {
q('japi', e => { if(url) { document.querySelectorAll(target || 'japi').forEach( j => j.setAttribute('url', url))}; if(!e.getAttribute('data')) { e.setAttribute('data',  e.innerHTML) }; var content = e.getAttribute('data'); e.innerHTML = '<span class="loading"></span>'; var a = e.getAttribute('array'); var na = e.getAttribute('noarray'); json(e.getAttribute('url'), data => {
    if (a) { e.innerHTML = data[a].map(item => content.replace(/\[(.+?)\]/g, (match, p1) => item[p1] || match)).join(''); } 
    else if (na) { var value = na.split('.').reduce((obj, key) => obj[key], data); e.innerHTML = content.replace(/\[(.+?)\]/g, (match, p1) => value[p1] || match); }
    else { e.innerHTML = content.replace(/\[(.+?)\]/g, (match, p1) => data[p1] || match); }
}); })
} japi()
/* Chart Image * Usage: <chart type="b">title: Saturday, Sunday, Monday. Users: 100, 400, 300. Revenue: 50, 200, 150. Orders: 30, 40, 50</chart> */
cssHead('chart img { max-width: 700px; margin: 30px auto; display: block; width: 100%;}','chart')
q('chart', e => {
    const typeMap = { 'a': 'bar', 'b': 'line', 'c': 'pie', 'd': 'doughnut', 'e': 'polarArea', 'f': 'radar', 'g': 'violin', 'h': 'radialGauge', 'i': 'progressBar' }; const t = typeMap[e.getAttribute('type')] || 'bar';
    const [labels, ...datasets] = e.textContent.split('.').map(section => section.split(':').map(item => item.trim()));
    const datasetsArray = datasets.map(([label, values]) => `{ label: '${label}', data: [${values.split(',').map(value => value.trim())}] }`);
    const output = `{ type: '${t}', data: { labels: ${JSON.stringify(labels[1].split(',').map(value => value.trim()))}, datasets: [${datasetsArray.join(', ')}] } }`; e.innerHTML = `<img src="https://quickchart.io/chart?c=${encodeURIComponent(output)}">`;
});
/* Graph * Usage: <graph type="e">nayan: 10, rony: 8, sharmin: 12, imarn: 5, sumaya: 30</graph> */
cssHead('graph { display: block; }','graph')
q('graph', element => { loadScript('https://cdn.jsdelivr.net/npm/apexcharts', function() {
    const chartType = ({ a: 'area', b: 'bar', c: 'pie', d: 'donut', e: 'line', f: 'radar', g: 'radialBar' }[element.getAttribute('type')] || 'bar');
    const [labels, values] = element.innerText.split(', ').reduce((acc, item) => { const [label, value] = item.split(': '); acc[0].push(label); acc[1].push(~~value); return acc; }, [[], []]); element.innerHTML = '';
    const options = { chart: { height: 280, type: chartType }, dataLabels: { enabled: false }, series: (chartType === 'pie' || chartType === 'donut' || chartType === 'radialBar') ? values : [{ name: '', data: values }], labels: labels, xaxis: { categories: labels } };
    new ApexCharts(element, options).render();
}); });
/* QR Code Generator * Location URL: <qr></qr> * <qr>hello</qr> */
q('qr', e => {
    e.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?data=${e.innerHTML.trim() || window.location.href}&amp;size=50x50"/>`;
});
/* Markdown * Usage: # Heading 1 */
cssHead('md ul[d] {list-style-type: disc} md ul[c] {list-style-type: circle} md ul[s] {list-style-type: square} md ol, md ul { margin: 0; padding-inline-start: 20px;} md h1, md h2, md h3, md h4, md h5, md h6 { font-weight: normal; margin: 15px 0px 0px 0px; line-height: 0.5;} md a {text-decoration: underline} md blockquote { border-left: 4px solid #ccc; padding-left: 16px; margin-left: 0; color: #666;}','md')
q('md', e => { e.innerHTML = e.textContent
    .replace(/^(#{1,6})\s*(.+)$/gm, (_, hashes, title) => `<h${hashes.length}>${title}</h${hashes.length}><hr>`) // # Headings
    .replace(/^\>\s+(.+)$/gm, '<blockquote>$1</blockquote>') // > Quotes
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>') // ***Bold italic***
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') // **Bold**
    .replace(/__(.+?)__/g, '<u>$1</u>') // __Underline__
    .replace(/(\*|_)(.+?)\1/g, '<em>$2</em>') // *Italic*
    .replace(/~~(.+?)~~/g, '<del>$1</del>') // ~~Strikethrough~~
    .replace(/(\d+\.)\s(.+)/g, '<ol><li>$2</li></ol>').replace(/<\/ol>\n<ol>/g, '') // 1. Number List
    .replace(/^[\*]\s(.*)$/gm, '<ul s><li>$1</li></ul>') // * List
    .replace(/^[\+]\s(.*)$/gm, '<ul d><li>$1</li></ul>') // + List
    .replace(/^[\-]\s(.*)$/gm, '<ul c><li>$1</li></ul>') // - List
    .replace(/!\[([^\]]*)]\(([^)]+)\)/g, '<img src="$2" alt="$1">') // Image
    .replace(/\[([^\]]+)]\(([^)]+)\)/g, '<a href="$2">$1</a>') // Link
    .replace(/^---$/gm, '<hr>') // ---
    .replace(/`(.+?)`/g, '<code>$1</code>') // `SomeCode`
    .replace(/\n/g, '<br>') // Line break
    .replace(/(>)<br>/g, '$1') // Remove extra break
});
/* Display RSS Feed * <rss url="http://www.bbc.co.uk/bengali/index.xml"><a href="[link]">[title]</a><br>[description]<br></rss> */
q('rss', e => {
var content = e.innerHTML; e.innerHTML = 'Loading..';
    json(`https://api.rss2json.com/v1/api.json?rss_url=${e.getAttribute('url')}`, data => {
        e.innerHTML = data.items.map(item => content.replace(/\[(.+?)\]/g, (match, p1) => item[p1] || match)).join('');
}); });
/* Demo Data * Usage: <demo type="products" limit="5"><h3>[title]</h3>[description]<hr></demo> * Source: https://dummyjson.com/ */
q('demo', e => {
    var content = e.innerHTML; e.innerHTML = 'Loading..'; var type = e.getAttribute('type');
    json(`https://dummyjson.com/${type}?limit=${e.getAttribute('limit') || 500}`, data => { e.innerHTML = data[type].map(item => content.replace(/\[(.+?)\]/g, (match, p1) => item[p1] || match)).join('');
}); })
/* Popup Dialog * Usage <popup><button id="open">Open Popup</button><h2>Headline</h2><p>This is a simple popup dialog.</p><button b>Cancle</button><button id="close">OK</button></popup> */
cssHead(` popup #open {cursor:pointer} .popup-dialog{display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;padding:20px;border-radius: var(--radius);box-shadow:0 0 10px rgba(0,0,0,0.2);animation:slideIn .3s ease-in-out} .popup-overlay{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.30);animation:fadeIn .3s ease-in-out} .close-popup{position:absolute;top:10px;right:10px;cursor:pointer} @keyframes fadeIn { from{opacity:0} to{opacity:1} } @keyframes slideIn { from{transform:translate(-50%,-60%);opacity:0} to{transform:translate(-50%,-50%);opacity:1} }`,'popup')
q('popup', (e, index) => { 
    e.innerHTML = `<div class="popup-overlay" onclick="togglePopup('none', ${index})"></div><div class="popup-dialog">${e.innerHTML}</div>`;
    e.querySelectorAll('#open')?.forEach(a => { a.setAttribute('onclick', `togglePopup('block', ${index})`); var link = a.outerHTML; a.outerHTML = ''; e.innerHTML += link;  });
    e.querySelectorAll('#close')?.forEach(a => a.addEventListener('click', () => togglePopup('none', index))); });
    function togglePopup(action, index) { document.querySelectorAll('.popup-overlay')[index].style.display = document.querySelectorAll('.popup-dialog')[index].style.display = action; }
/* Accordion * Usage: <accordion><header>Section 1</header><content>Content for Section 1 goes here.</content><header>Section 2</header><content>Content for Section 2 goes here.</content></accordion> */
cssHead(`accordion{display:flex;flex-direction:column;overflow:hidden;border:1px solid rgba(var(--theme), 0.2 );border-radius: var(--radius);} accordion header{background-color: rgba(var(--theme), 0.05 );font-weight:700;overflow:hidden;padding:10px;cursor:pointer;border-top:1px solid rgba(var(--theme), 0.2 )} accordion header:first-child{border-top:none} accordion header span{float:right;transform:rotate(90deg);transition:transform .3s ease-in-out;font-weight:400} accordion content{max-height:0;overflow:hidden;padding:0 10px;border-top:1px solid rgba(var(--theme), 0.1 );margin-bottom:-1px;transition:all .2s ease-in-out}`,'accordion')
q('accordion', acc => { acc.querySelectorAll('header').forEach(header => {
    const content = header.nextElementSibling; header.innerHTML += `<span>❯</span>`; content.innerHTML = `<p>${content.innerHTML}</p>`
    header.addEventListener("click", () => { const isOpen = content.style.maxHeight; acc.querySelectorAll('content').forEach(item => item.style.maxHeight = null); acc.querySelectorAll('header span').forEach(symbol => symbol.style.transform  = 'rotate(90deg)');
    if (!isOpen) { content.style.maxHeight = content.scrollHeight + "px"; header.querySelector('header span').style.transform  = 'rotate(-90deg)'; }
}); }); });
/* Alert * Usage: <alert s><b>Error!</b> This is a sample alert with a close button 1.</alert> * e = error, i = info, s = success, w = warning*/
cssHead(`alert{ overflow: hidden; padding:8px 12px; border: 1px solid rgba(0,0,0,0.15); background: rgba(var(--theme), 0.1 ); border-radius: var(--radius); margin:10px 0; display:block} alert span{float:right;cursor:pointer; color: rgba(0,0,0, 0.2 )}
alert[s] { background: #f6ffed; border-color: #b7eb8f; } alert[i] { background: #e6f4ff; border-color: #91caff; } alert[w] { background: #fffbe6; border-color: #ffe58f; } alert[e] { background: #fff2f0; border-color: #ffccc7; } 
alert icon { color: rgba(var(--theme), 0.8 )} @keyframes collapseAnimation { to { max-height: 0; padding: 0; margin: 0; border: 0; opacity: 0;} }`,'alert')
q('alert', e => {
    e.innerHTML = '<span class="close-btn" onclick="this.parentElement.style.animation = \'collapseAnimation 0.3s both\'">🗙</span>' + e.innerHTML;
    if (e.querySelector('icon')) { e.querySelector('icon').style.cssText = 'color: rgba(var(--theme), 1 )'}
    if (e.hasAttribute('s')) {  e.innerHTML = '<icon c-#52c41a>check_circle</icon> '+e.innerHTML } if (e.hasAttribute('i')) {  e.innerHTML = '<icon c-#1677ff>info</icon> '+e.innerHTML } if (e.hasAttribute('w')) {  e.innerHTML = '<icon c-#faad14>warning</icon> '+e.innerHTML } if (e.hasAttribute('e')) {  e.innerHTML = '<icon c-#ff4d4f>cancel</icon> '+e.innerHTML }
});
/* Chatbot * Usage: <chatbot button="Chatx" title="Personal AI" msg="Hi">"doing": "I'm doing well, thank you for asking!", "okey" : "how are you | how's it going | what's up"</chatbot> */
cssHead(`chatbot {background-color: white; z-index: 1; position:fixed;bottom:-100px;right:20px;width: 330px; max-width: calc(100% - 40px); border-radius:var(--radius) var(--radius) 0px var(--radius); opacity: 0; box-shadow: 0 6px 28px 0 #e0e0e0; transition: all 0.35s; visibility: hidden;} chatbot header {display: flex; justify-content: space-between; align-items: center;background-color:white;color:#222;padding:5px 15px;border-radius: var(--radius) var(--radius) 0px 0px; font-weight: bold; box-shadow: 0 2px 5px -2px #bbbbbb;} chatbot messageArea{padding:10px;height: 300px; max-height: calc(100% - 40px);overflow-y:auto; display: block;} chatbot userMessage {background-color: rgba(var(--theme), 1 );color: white; padding:8px 12px;margin:5px 0; border-radius: var(--radius) var(--radius) 0px var(--radius); display: inline-block; clear: both; float: right; max-width: 80%;} chatbot botMessage{background-color:#f0f0f0; padding: 8px 12px;margin:5px 0;margin-right: 50px;border-radius: var(--radius) var(--radius) var(--radius) 0px; display: inline-block; float: left;max-width: 80%; clear: both;}  chatbot inputArea { background: white; border-top: 1px solid rgb(234, 234, 234); border-radius: 0 0 var(--radius) var(--radius); display: flex;} chatbot input { width: 100%; padding: 10px; margin: 15px; border: 0; background: #f0f2f5; border-radius: var(--radius) var(--radius) 0px var(--radius);} chatbot suggestionArea { display: block; padding: 15px; background: white; border-top: 1px solid rgb(234, 234, 234); overflow: auto;} chatbot suggestion { padding: 5px 7px; margin-right: 7px; border: 1px solid rgba(var(--theme), 1 ); border-radius: var(--radius); cursor: pointer; text-wrap: nowrap;} chatButton {position:fixed;bottom:20px;right:20px;padding:10px;border:none;background-color: rgba(var(--theme), 1 ); z-index: 2;color:#fff;border-radius:var(--radius) var(--radius) 0px var(--radius);cursor:pointer; transition: all 0.35s; } .chatWindow { visibility: visible; bottom: 20px; opacity: 1; } .chatTrigger { opacity: 0; bottom: -100px; }`,'chatbot');
q('chatbot', e => {  var data = e.innerHTML.trim().replace(/,\s*$/, '');
    e.outerHTML = `<chatbot><header><span>${e.getAttribute('title') || 'Assistent'}</span><span style="color: rgba(var(--theme), 1 ); cursor: pointer; font-size: 30px; " onclick="closeChat()">×</span></header><messageArea><botMessage>${e.getAttribute('msg') || 'Hello! How can I assist you today?'}</botMessage></messageArea><suggestionArea></suggestionArea><inputArea><input type="text" placeholder="Ask here..." onkeypress="event.keyCode === 13 && sendMessage()"></inputArea></chatbot><chatButton onclick="openChat()">${e.getAttribute('button') || 'Chat'}</chatButton>`;
    var defaultAnswers = { "doing": "sheet", "how are you": "I'm doing well, thank you for asking!", "hi | hello": "how are you | how's it going | what's up"};
    const answers = { ...JSON.parse(`{${data}}`), ...defaultAnswers  };
    document.querySelector('suggestionArea').innerHTML =  Object.keys(answers).slice(0, 3).map(key => `<suggestion onclick="document.querySelector('chatbot input').value='${key}'; sendMessage();">${key.charAt(0).toUpperCase() + key.slice(1)}</suggestion>`).join('');
    window.sendMessage = function sendMessage() {
        let chatBox = document.querySelector('messageArea'); let msgIn = document.querySelector('chatbot input').value.toLowerCase().trim(); if (!msgIn) return; let msgOut = "I'm sorry, I don't understand that.";
        Object.keys(answers).forEach(key => { key.split('|').map(q => q.trim()).forEach(trigger => { if (trigger.split(',').every(word => msgIn.includes(word.trim()))) {  const responses = answers[key].split('|').map(r => r.trim()); msgOut = responses[Math.floor(Math.random() * responses.length)]; }; });});
        chatBox.innerHTML += `<userMessage>${msgIn}</userMessage><botMessage></botMessage>`; let index = 0;
        (function type() { chatBox.querySelector('botMessage:last-child').innerHTML += msgOut.charAt(index++); index < msgOut.length && setTimeout(type, 50); })();
        document.querySelector('chatbot input').value = ''; chatBox.scrollTop = chatBox.scrollHeight; }
    window.openChat = function openChat() { document.querySelector('chatbot').classList.add('chatWindow'); document.querySelector('chatButton').classList.add('chatTrigger'); }
    window.closeChat = function closeChat() { document.querySelector('chatbot').classList.remove('chatWindow'); document.querySelector('chatButton').classList.remove('chatTrigger'); }
});

/* Time & Date*/
var d = new Date();
setInterval( () => q('time', e => { new Date().toLocaleTimeString()} ), 1000);
q('date', e => {d.getDate()+'-'+(d.getMonth()+1)+'-'+ d.getFullYear() });
q('year', e => {d.getFullYear() });
q('month', e => d.toLocaleString('en-us',{month:'long'}) );
q('day', e => d.toLocaleString('en-us',{weekday:'long'}) );


/* Last Loading */

/* Date Picker */
q('input[type="date"]', e => { e.addEventListener('click', function() { this.showPicker(); }) })

/* Quick Styling * Usage: <div b-blue c-white s-50px f-Rubik-Doodle-Triangles>I have a blue background</div> */
function inlineStyle(...stylePairs) { q('*', el => { el.getAttributeNames().forEach(attr => { stylePairs.forEach(([name, property]) => {
    if (attr.startsWith(name + '-')) { el.style.cssText += `${property}: ${attr.split('-').slice(1).join(' ')}`;  el.removeAttribute(attr); } });
    if (attr.startsWith('ff-')) addFont += '|' + attr.split('-').slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '); 
}); }); }
// e g i j k n q t u v y
function inStyle() {
inlineStyle(['a', 'text-align'], ['b', 'bottom'], ['c', 'color'], ['d', 'display'], ['f', 'float'], ['h', 'height'], ['l', 'left'], ['m', 'margin'], ['o', 'opacity'], ['p', 'padding'], ['r', 'right'], ['s', 'scale'], ['t', 'top'], ['w', 'width'], ['v', 'visibility'], ['z', 'z-index']);
inlineStyle(['ff', 'font-family'], ['fs', 'font-size'], ['bg', 'background'], ['lh', 'line-height'], ['bc', 'border-color'], ['bw', 'border-width'], ['bs', 'border-style'], ['br', 'border-radius'], ['mt', 'margin-top'], ['mr', 'margin-right'], ['mb', 'margin-bottom'], ['ml', 'margin-left'], ['pt', 'padding-top'], ['pr', 'padding-right'] , ['pb', 'padding-bottom'], ['pl', 'padding-left']); }
inStyle();
/* Google Icon * Usage: <icon>home</icon> * Source: https://fonts.google.com/icons?icon.style=Rounded&icon.set=Material+Icons */
cssHead(`.material-icons-round { font-size: inherit !important; transform: translateY(0.05em); scale: 1.5; padding: 0px 5px;} .material-icons-round:empty { display: none}`,'icon')
q('icon', e => {
    if (!checkMIR) { addFont += '|Material Icons Round'; checkMIR = true} e.classList.add('material-icons-round')
})
/* Google Icon Outline * Usage: <icon-o>home</icon-o> * Source: https://fonts.google.com/icons?icon.style=Rounded&icon.set=Material+Symbols */
cssHead(`.material-symbols-rounded { font-size: inherit !important; transform: translateY(0.05em); scale: 1.5; padding: 0px 5px;} .material-symbols-rounded:empty { display: none}`,'icon-o')
q('icon-o', e => {
    if (!checkMSR) { addFont += '|Material Symbols Rounded'; checkMSR = true} e.classList.add('material-symbols-rounded')
})
/* Font Awesome Icon * <i class="fa-solid fa-house"></i> * Source: https://fontawesome.com/search?o=r&m=free */
q('.fa-solid, .fa-regular, .fa-light, .fa-duotone, .fa-thin, .fa-brands', e => { if (!checkFAI) { cssURL('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'); checkFAI = true } })
/* Load Fonts. Put in last  */
cssURL('https://fonts.googleapis.com/css?family='+addFont+':wght@300..800&display=swap');






/* Syntex Highlight * Usage: <code class="language-html"><a href="/">link</a></code> * Source: https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@latest/build/
q('code', e => {
    loadScript('https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/highlight.min.js', function () {
      e.innerHTML = e.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"); e.outerHTML = `<pre>${e.outerHTML}</pre>`;
      cssURL('https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/atom-one-dark.min.css'); cssHead('pre > code { font-family: "Consolas", "Sans Mono", "Courier", monospace; padding: 0 !important; border-radius: 10px;}'); hljs.highlightAll();
}); }); */

/* Usage: <icon-fa>star</icon-fa> <icon-fao>star</icon-fao>
q('icon-fa', e => { e.classList.add('fa', 'fa-' + e.innerText); e.innerText = ''; })
q('icon-fao', e => { e.classList.add('fa-regular', 'fa-' + e.innerText); e.innerText = '';  }) */

/* Dialoug Popup * Usage: <popup name="open it"><h1>Cookie Consentxxx</h1> </popup> 
q('popup', (popup, index) => {
    css('popup[popover] { border: none; box-shadow: 0 0 .5em .25em hsl(0 0% 0% / 10%); border-radius: .5em; }')
    popup.setAttribute('id', 'dialog-' + index); popup.setAttribute('popover', ''); popup.outerHTML += `<button popovertarget="${'dialog-' + index}" popovertargetaction="show">${popup.getAttribute('name') || 'Open'}</button>`;
}) */

/* Markdown * Usage: # Heading 1 * Source: https://marked.js.org/
q('md', e => {
    loadScript('https://cdn.jsdelivr.net/npm/marked/marked.min.js', function (){ e.innerHTML = marked.parse(e.innerHTML); })
});
*/

