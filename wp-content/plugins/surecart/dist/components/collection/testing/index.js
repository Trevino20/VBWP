export function setResponses(e,s){s.on("response",(n=>{n.url().includes("localhost")&&(s.removeAllListeners("request"),s.on("request",(s=>{let n;if(e.forEach((e=>{s.url().includes(e.path)&&(n=e.data)})),n)return s.respond(n);s.continue()})))}))}