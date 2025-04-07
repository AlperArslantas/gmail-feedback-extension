document.getElementById("submit").addEventListener("click", () => {
  const suggestion = document.getElementById("suggestion").value;
  if (suggestion) {
    alert("Suggestion saved (mock)");
    // Firebase/Supabase integration goes here
  }
});
