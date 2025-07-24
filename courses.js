const coursesContainer = document.getElementById('courses-list');

// Fetch the courses from Firebase
db.ref('courses').on('child_added', snapshot => {
  const course = snapshot.val();
  const div = document.createElement('div');
  div.classList.add('course');
  div.innerHTML = `
    <h3>${course.title}</h3>
    <p>${course.description}</p>
    <button class="enroll-btn">Enroll for Free</button>
  `;
  coursesContainer.appendChild(div);
});

