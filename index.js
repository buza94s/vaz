function open_photo(photo) {
    document.getElementById("big-photo").innerHTML =
      ("<img onclick='close_photo()' style='position: absolute;' src='" + photo + "'>")
  }
  
  function close_photo() {
    document.getElementById("big-photo").innerHTML = ""
  }