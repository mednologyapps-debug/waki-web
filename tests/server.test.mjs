process.env.NODE_ENV='test';
const {createApp}=await import('../server.js');
const assert=(await import('node:assert/strict')).default;
const mail=[];const app=createApp({env:{SMTP_USER:'hola@example.test',MAIL_TO:'team@example.test'},sendMail:async m=>{mail.push(m);return {accepted:[m.to]}}});
const server=app.listen(0,'127.0.0.1');await new Promise(resolve=>server.once('listening',resolve));const base='http://127.0.0.1:'+server.address().port;
try{
 const health=await fetch(base+'/api/health');assert.equal(health.status,200);assert.equal(health.headers.get('x-frame-options'),'DENY');assert.equal((await health.json()).ok,true);
 const post=body=>fetch(base+'/api/account-deletion-request',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
 assert.equal((await post({email:'guest@example.test',confirmed:false})).status,400);
 assert.equal((await post({email:'guest@example.test',confirmed:true})).status,200);
 assert.equal(mail.length,1);assert.equal(mail[0].to,'team@example.test');assert.equal(mail[0].replyTo,'guest@example.test');
 const bad=await fetch(base+'/api/account-deletion-request',{method:'POST',headers:{'Content-Type':'application/json',Origin:'https://attacker.example'},body:JSON.stringify({email:'guest@example.test',confirmed:true})});assert.equal(bad.status,403);
 console.log('Web: health, response hardening, deletion validation/origin and internal-only mocked delivery passed.');
}finally{server.closeAllConnections();await new Promise(r=>server.close(r))}
