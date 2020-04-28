export default function showResultOperationWindow() {
    let start = Date.now();
    let timer = setInterval(() => {
        let timePassed = Date.now() - start;
        try {
            document.getElementById("resultOperationWindow").style.top = timePassed / 5 + 'px';
        } catch (e) {
            console.log(e);
        }
        if (timePassed / 5 > 100) {
            clearInterval(timer);
        }
    }, 10);


}

