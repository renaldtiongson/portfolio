let emailConfig = null;

async function loadEmailConfig() {
    const response = await fetch("/api/config");
    emailConfig = await response.json();

    emailjs.init({
        publicKey: emailConfig.publicKey,
    });
}

loadEmailConfig();