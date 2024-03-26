function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username.length < 6) {
      alert("Username phải có ít nhất 6 ký tự");
      return false;
    }
  
    if (password.length < 8) {
      alert("Password phải có ít nhất 8 ký tự");
      return false;
    }
  
    if (!(/[a-z]/.test(password))) {
      alert("Password phải có ít nhất 1 chữ thường");
      return false;
    }
  
    if (!(/[A-Z]/.test(password))) {
      alert("Password phải có ít nhất 1 chữ hoa");
      return false;
    }
  
    if (!(/[0-9\W]/.test(password))) {
      alert("Password phải có ít nhất 1 số hoặc ký tự đặc biệt");
      return false;
    }
  
    // Nếu tất cả điều kiện đều thỏa mãn, cho phép đăng nhập thành công
    alert("Đăng nhập thành công!");
  }