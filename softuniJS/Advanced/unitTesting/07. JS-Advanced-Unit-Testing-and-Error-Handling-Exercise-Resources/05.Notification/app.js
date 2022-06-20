function notify(message) {

  const notificationDiv = document.getElementById('notification');
  console.log(notificationDiv);
  notificationDiv.textContent = message;
  notificationDiv.style.display = 'block';

  notificationDiv.addEventListener('click', () => {
    notificationDiv.style.display = 'none';
  })
}