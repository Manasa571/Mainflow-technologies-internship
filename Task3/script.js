<script>
document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function(e) {
            const password = document.querySelector("[name='password']").value;
            const confirmPassword = document.querySelector("[name='confirm_password']").value;
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                e.preventDefault();
            }
        });
    }
});
</script>