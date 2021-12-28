var btn = document.getElementById('button');

var afterelement = document.getElementById('dynamic-text');

var dynamictextelem = document.getElementsByClassName('dynamic-txts-elem');

var wrapper = document.getElementById('wrapper');

var label = document.getElementById("label");

function reload() {
    location.reload();
}

btn.addEventListener("click", () => {
    document.body.style.backgroundColor = "#032202";

    wrapper.style.backgroundColor = "#032202";

    wrapper.style.transition = "0.5s";

    document.body.style.transition = "0.5s";

    afterelement = document.head.appendChild(document.createElement("style"));

    afterelement.innerHTML = ".dynamic-text::after {background: #032202;}";

    dynamictextelem = document.head.appendChild(document.createElement("style"));

    dynamictextelem.innerHTML = ".dynamic-txts-elem {color: #1F6032;}";

    document.getElementById("audio").play();

    document.getElementsByClassName('dynamic-text')[0].textContent = "Walter White";
    document.getElementsByClassName('dynamic-text')[1].textContent = "Jessie Pinkman";
    document.getElementsByClassName('dynamic-text')[2].textContent = "Hank Schrader";
    document.getElementsByClassName('dynamic-text')[3].textContent = "Gustavo";

    btn.textContent = "Breaking Bad The Best";

    btn.style.cursor ="not-allowed";
    
    label.style.display = 'none';

    btn.setAttribute('disabled', true);

    setTimeout(reload, 70000);
});