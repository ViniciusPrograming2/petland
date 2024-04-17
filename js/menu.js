(() => {
    const btnMenu = document.querySelectorAll('.burguer-menu');

    function dropMenu(){
        const menus = document.querySelectorAll('.menu-case');
        
        menus.forEach(menu => {
            if(menu.classList.contains('drop')){
                menu.classList.remove('drop');
            } else {
                menu.classList.add('drop');
            }
        });
        btnMenu.forEach(borde => {
            if(borde.classList.contains('border')){
                borde.classList.remove('border');
            } else {
                borde.classList.add('border');
            }
        });
    }

    btnMenu.forEach(btn => {
        btn.addEventListener('click', dropMenu);
    });
})();