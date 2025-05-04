export function failedMechanic() {
  const errorOverlay = document.querySelector("#error-alert");

  if (!errorOverlay) return;

  errorOverlay.className = "display-error";
  setTimeout(() => {
    errorOverlay.className = "hide-error";
  }, 1000);
}
