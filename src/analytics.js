const endpoint='https://ipakrrcjrpfcnjvtwhvp.supabase.co/functions/v1/waki-analytics';
const publicAnon='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwYWtycmNqcnBmY25qdnR3aHZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU4MDY2MTIsImV4cCI6MjEwMTM4MjYxMn0.lHdcuzam2tgCWOxgIBK7qgX1g6XGRg8J-SEeyojD6yc';
const allowed=new Set(['page_view','hero_search','partner_open','partner_submitted','portal_click','client_error']);
let session,queue=[],timer,started=false;
const optedOut=()=>navigator.doNotTrack==='1'||navigator.globalPrivacyControl===true;
function context(){
 if(!session){try{session=sessionStorage.getItem('waki_metrics_session');if(!session){session=crypto.randomUUID();sessionStorage.setItem('waki_metrics_session',session)}}catch{session=crypto.randomUUID()}}
 const params=new URLSearchParams(location.search);const safe=v=>v&&/^[a-zA-Z0-9_-]{1,64}$/.test(v)&&!/[0-9]{7}/.test(v)?v:'';
 let referrer='';try{referrer=new URL(document.referrer).hostname}catch{}
 return {session_id:session,path:['/','/legal.html','/reclamos.html','/eliminar-cuenta.html'].includes(location.pathname)?location.pathname:'/',device:/tablet|ipad/i.test(navigator.userAgent)?'tablet':/mobile|android|iphone/i.test(navigator.userAgent)?'mobile':'desktop',source:safe(params.get('utm_source'))||(referrer&&referrer!==location.hostname?referrer.replaceAll('.','_'):'direct'),medium:safe(params.get('utm_medium')),campaign:safe(params.get('utm_campaign')),referrer};
}
export function track(event){if(optedOut()||!allowed.has(event))return;try{queue.push({id:crypto.randomUUID(),event,...context()});if(queue.length>=10)flush();else if(!timer)timer=setTimeout(flush,1200)}catch{/* Measurement must never interrupt a booking. */}}
function flush(){clearTimeout(timer);timer=null;if(!queue.length)return;const events=queue.splice(0,20);fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json',apikey:publicAnon,Authorization:'Bearer '+publicAnon},body:JSON.stringify({events}),keepalive:true}).catch(()=>{});}
export function startAnalytics(){if(started)return;started=true;track('page_view');addEventListener('pagehide',flush);document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')flush()});document.addEventListener('click',event=>{const a=event.target.closest?.('a');if(a&&/^https:\/\/hotel\.wakipe\.com/.test(a.href))track('portal_click')});let reported=false;const report=()=>{if(!reported){reported=true;track('client_error')}};addEventListener('error',report);addEventListener('unhandledrejection',report)}
