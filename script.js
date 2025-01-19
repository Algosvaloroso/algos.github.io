document.getElementById("copyButton").addEventListener("click", function() {
  const messageBox = document.getElementById("messageBox");
  messageBox.select();
  messageBox.setSelectionRange(0, 99999); // Mobil uyumluluk için
  navigator.clipboard.writeText(messageBox.value).then(() => {
    document.getElementById("copyStatus").textContent = "Message copied to clipboard!";
    setTimeout(() => {
      document.getElementById("copyStatus").textContent = "";
    }, 2000);
  });
});
