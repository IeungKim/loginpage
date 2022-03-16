var checkbox = document.querySelector("#checkbox");
checkbox.onclick = changePic;

function changePic() {
  if (checkbox.src.match('_empty')) { //안 체크된 거일때
    checkbox.src = 'LDH_LION_img/icon_check.png';
  }  
  else { //체크된 이미지일 때
    checkbox.src = 'LDH_LION_img/icon_check_empty.png';
  }
}