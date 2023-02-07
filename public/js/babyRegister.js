const registerFormHandler = async (event) => {
    event.preventDefault();
  
    const babyName = document.querySelector('#baby_name').value.trim();
    const birthday = document.querySelector('#birthday').value.trim();
    const firstWord = document.querySelector('#first-word').value.trim();
    const eyeColor = document.querySelector('#eye-color').value.trim();
    const user_id = document.querySelector("#user_id").getAttribute("username");
    
        const response = await fetch('/api/baby', {
          method: 'POST',
          body: JSON.stringify({ 
            baby_name: babyName, birthday: birthday, first_word: firstWord, eye_color: eyeColor, user_id: user_id}),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log in');
        }
}
document.querySelector(".babyRegister-form").addEventListener('submit', registerFormHandler);