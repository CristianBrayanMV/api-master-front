window.onload =() =>{
    const menu = document.querySelectorAll('.navegacion__field');
    const nav =  document.querySelector('.navegacion');

    const collapse = document.querySelector('.header__collapse');
    
    nav.classList.add('navegacion--desactive');

    menu.forEach((item) => {        

        item.addEventListener('click', function(e){
            Array.from(document.getElementsByClassName("navegacion__item")).forEach(nav_item => {
                nav_item.classList.remove('navegacion__item--active');
            });
            document.querySelector(".navegacion__item")
            this.parentElement.classList.add('navegacion__item--active');     
                
        });        
    });

    collapse.addEventListener('click' , function(){
        document.querySelector('body').classList.toggle('backdrop');  
        document.querySelector('.navegacion').classList.toggle('navegacion--desactive');    
        
    });




}