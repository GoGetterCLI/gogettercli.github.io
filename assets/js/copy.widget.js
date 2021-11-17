function copy() {
    //
    const copyText = "git@staging.acei.us" 
    let copyText = document.getElementById('email').innerHTML;
    navigator.clipboard.writeText(copyText);
  }
