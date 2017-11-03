var user = {
  email: "coolguy@gmail.com",
  password: "ILoveCoffee",
  name: "Grant Chirpus"
};

function checkLogin() {
  var inputEmail = document.getElementsByTagName("input")[0].value;
  var inputPass = document.getElementsByTagName("input")[1].value;
  if (inputEmail === user.email && inputPass === user.password) {
    document.getElementsByClassName("hide")[0].setAttribute("class", "show");
    document.getElementsByClassName("show")[0].setAttribute("class", "hide");
  } else {
    alert("The username and password is not correct!");
  }
}