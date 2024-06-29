let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50]; 

for (let i = 0; i < data.length; i++) {
  let nam = document.createElement('p');
  nam.classList.add('nam');
  nam.textContent = data[i];
  
  if (data[i] % 2 === 0) {
    nam.style.backgroundColor = 'red';
  } else {
    nam.style.backgroundColor = 'green';
  }
  nam.style.textAlign = "center"
  document.body.appendChild(nam);
}
