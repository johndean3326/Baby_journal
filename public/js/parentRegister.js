const registerFormHandler = async (event) => {
    event.preventDefault();
  
    const par_name = document.querySelector('#par_name').value.trim();
    const fatherAge = document.querySelector('#father-age').value.trim();
    const motherAge = document.querySelector('#mother-age').value.trim();
    const grandfatherName = document.querySelector('#grand-name').value.trim();
    const grandmotherName = document.querySelector('#granda-name').value.trim();
    const user_id = document.querySelector("#user_id").getAttribute("username");
    const meeting = document.querySelector('#meeting-date').value.trim();
    
        const response = await fetch('/api/parents', {
          method: 'POST',
          body: JSON.stringify({ 
            parents_name: par_name, date: meeting, father_age: fatherAge, mother_age: motherAge, grandfather: grandfatherName, grandmother: grandmotherName, user_id: user_id}),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log in');
        }
}
document.querySelector(".parentRegister-form").addEventListener('submit', registerFormHandler);