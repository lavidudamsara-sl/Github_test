fetch('bio.txt')
  .then(response => response.text())
  .then(data => {
    document.getElementById('bioText').textContent = data;
  })
  .catch(error => {
    document.getElementById('bioText').textContent = "Could not load bio.";
  });
