const registerFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-reg').value.trim();
    const password = document.querySelector('#password-reg').value.trim();
    const name = document.querySelector('#name-reg').value.trim();
    const confirmPass = document.querySelector('#password-conf-reg').value.trim();

    if (password != confirmPass) {
        document.querySelector('#warning').textContent = "passwords dont match";
    }
    else {if (email && password) {
        
        const response = await fetch('/api/users/register', {
          method: 'POST',
          body: JSON.stringify({name, email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log in');
        }}
    
    }


  };
document.querySelector(".register-form").addEventListener('submit', registerFormHandler);