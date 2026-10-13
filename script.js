function searchBusinesses() {
  let input = document.getElementById('searchBar').value.toLowerCase();
  let businesses = document.getElementsByClassName('business');

  for (let i = 0; i < businesses.length; i++) {
    let text = businesses[i].innerText.toLowerCase();
    if (text.includes(input)) {
      businesses[i].style.display = "";
    } else {
      businesses[i].style.display = "none";
    }
  }
}
