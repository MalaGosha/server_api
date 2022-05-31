let showImage = true;

const changeColorAndTextBtn = btn => {
    if (showImage) {
        btn.classList.replace("btn-primary", "btn-danger");
        btn.innerText = "Pokaż logo";
        showImage = false;
    } else {
        btn.classList.replace("btn-danger", "btn-primary");
        btn.innerText = "Ukryj logo";
        showImage = true;
    }
}

const displayAndHideLogo = arr => {
    arr.forEach(image => {
        if(showImage) {
            image.classList.toggle("hidden");
        } else {
            image.classList.add("hidden");
        }
    })
}

function onLogoButtonClick() {
    const btn = document.getElementById("imageBtn");
    const arr = [...document.getElementsByClassName('logo')];
    changeColorAndTextBtn(btn);
    displayAndHideLogo(arr);
}
