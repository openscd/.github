const codeCopyButtons = document
  .querySelectorAll(".terminal__copy-button")
  .forEach((codeCopyButton) => {
    codeCopyButton.addEventListener("click", () => {
      const code = codeCopyButton
        .closest(".terminal")
        .querySelector(".terminal__window code")
        .innerText.trim();

      window.navigator.clipboard.writeText(code);

      const { innerHTML: originalHTML } = codeCopyButton;
      codeCopyButton.innerText = "Copied!";

      codeCopyButton.classList.add("copied");

      setTimeout(() => {
        codeCopyButton.innerHTML = originalHTML;
        codeCopyButton.classList.remove("copied");
      }, 2000);
    });
  });
