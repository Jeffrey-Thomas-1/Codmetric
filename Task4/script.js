document.addEventListener('DOMContentLoaded', ()=>{
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form && form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name||!email||!message){
      status.textContent = 'Please complete all fields.';
      status.style.color = 'tomato';
      return;
    }

    // If a real endpoint is provided via data-endpoint or an http(s) form action, POST to it (e.g., Formspree).
    const rawAction = form.dataset.endpoint || form.action || '';
    const endpoint = (rawAction && (rawAction.startsWith('http://') || rawAction.startsWith('https://'))) ? rawAction : '';
    if(endpoint){
      try{
        const fd = new FormData(form);
        const res = await fetch(endpoint, {method:'POST', body:fd});
        if(res.ok){
          status.style.color = 'lightgreen';
          status.textContent = 'ありがとうございます — Message sent successfully.';
          form.reset();
          setTimeout(()=> status.textContent = '', 4000);
          return;
        }
        throw new Error('Network response was not ok');
      }catch(err){
        status.style.color = 'tomato';
        status.textContent = 'Submit failed — please try again later.';
        return;
      }
    }

    // Fallback demo behavior when no real endpoint is configured
    status.style.color = 'lightgreen';
    status.textContent = 'ありがとうございます — Thank you! Your message was received (demo).';
    form.reset();
    setTimeout(()=> status.textContent = '', 4000);
  });
});

