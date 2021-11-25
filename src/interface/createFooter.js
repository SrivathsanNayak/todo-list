function createFooter() {
    const footer = document.createElement("footer");
    const help = document.createElement("p");
    const sourceCode = document.createElement("p");
    const privacyPolicy = document.createElement("p");

    help.textContent = "Help";
    sourceCode.textContent = "Source Code";
    privacyPolicy.textContent = "Privacy Policy";

    footer.append(help, sourceCode, privacyPolicy);

    return footer;
}

export { createFooter };