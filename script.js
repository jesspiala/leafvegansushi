
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const menu = document.querySelector('header ul');

    mobileMenuIcon.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    
    const menuItems = document.querySelectorAll('header ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active'); // Fecha o menu ao clicar em uma opção
        });
    });
    

