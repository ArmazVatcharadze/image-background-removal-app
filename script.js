
const API_KEY = 'vuFLAKvh9RpHycdTX1wUDuPh';
const ENDPOINT = 'https://api.remove.bg/v1.0/removebg';
const formData = new FormData();

const fileInput = document.getElementById('file');


fileInput.addEventListener('change', () => {
 
  const file = fileInput.files[0];
  formData.append('image_file', file);
  formData.append('size', 'auto');
  fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'X-Api-Key': API_KEY,
    },
    body: formData,
  })
    .then(response => response.blob())
    .then(blob => {
      const objectUrl = URL.createObjectURL(blob)
      const img = document.querySelector('.outputImage');
      img.src = objectUrl;
    })
    .catch(error => console.error(error));
});
