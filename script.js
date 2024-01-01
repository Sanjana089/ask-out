document.addEventListener('DOMContentLoaded', function () {
    const sticker = document.querySelector('.sticker');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const buttons = document.querySelector('.buttons');
    const heading1 = document.querySelector('.heading1');
    const heading2 = document.querySelector('.heading2');

    yesButton.addEventListener('click', function () {
        sticker.style.backgroundImage = "url('cute-bear-yes.gif')";
        buttons.style.opacity = '0';
        heading2.style.opacity = '0';
        heading1.style.opacity = '0';
    });

    pos = [('144px', '144px')]
    let isNoButtonClicked = 0;

    noButton.addEventListener('click', function () {
        sticker.style.backgroundImage = "url('milk-and-mocha-mad.gif')";
        sticker.style.backgroundSize = "auto";
        // Slide to the right or left on 'No' button click
        isNoButtonClicked += 1;
        isNoButtonClicked = isNoButtonClicked % 3;

        switch (isNoButtonClicked) {
            case 0:
                noButton.style.transform = 'translateX(0px) translateY(0px)';
                noButton.style.transition = '0.5s';
                break;
            case 1:
                noButton.style.transform = 'translateX(80px) translateY(-260px)';
                noButton.style.transition = '0.5s';
                heading2.innerHTML = "Alright! Try Again..."
                break;
            case 2:
                noButton.style.transform = 'translateX(-1200px) translateY(-260px)';
                noButton.style.transition = '0.7s';
                yesButton.style.transform = 'translateX(60px)';
                yesButton.style.transition = '0.5s';
                sticker.style.backgroundImage = "url('cat-ask.gif')";
                sticker.style.backgroundSize = "cover";
                heading2.innerHTML = "Told ya!"
                break;
        }
    });
});
