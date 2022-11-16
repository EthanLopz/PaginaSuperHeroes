(function (){
    const modal = document.querySelector('.Pagina-modal');
    const btnspider = document.getElementById('btnspider');
    const btncapitan = document.getElementById('btncapitan');
    const btnantman = document.getElementById('btnantman');
    const closedodalbtn = document.querySelector('.img-close');
     
    btnspider.addEventListener('click', openModal);
    btncapitan.addEventListener('click', openModal);
    btnantman.addEventListener('click', openModal);

    closedodalbtn.addEventListener('click',() => {
        modal.classList.add('hidden');
        modal.classList.remove('visible');
    });
    function openModal() {
        modal.classList.remove('hidden');
        modal.classList.add('visible')
    }
})();