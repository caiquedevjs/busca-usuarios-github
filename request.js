const NomeID = document.querySelector('input[name=GitHub-user]');
const btnID = document.getElementById('search-btn-ID');
const app = document.getElementById('app');

btnID.addEventListener('click', () => {
    const ajax = new XMLHttpRequest();
    app.innerHTML = "";
    ajax.open('GET', `https://api.github.com/users/${NomeID.value}`);
    ajax.send(null);

    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                const usuario = JSON.parse(ajax.responseText);
                console.log(usuario);

                if (usuario['name'] != null) {
                    const textoNome = document.createElement('span');
                    textoNome.textContent = usuario['name'];
                    app.appendChild(textoNome);

                    const img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('width', '200px');
                    img.setAttribute('height', '200px');
                    img.setAttribute('alt', usuario['name']);
                    app.appendChild(img);
                    
                } else {
                    const alert =document.createElement('span');
                    alert.innerText ="Usuario Não econtrado"
                    app.appendChild(alert);
                }
                
                
            }
        }
    };
});
