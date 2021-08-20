import { getResourse } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    btn.addEventListener('click', function() {
        getResourse('http://localhost:3000/styles')
            .then(res => {                
                createCards(res);
            })
            .catch(error => {
                console.log(error)
            });

        this.remove();

    });


    function createCards(response) {
        response.forEach(item => {
            let card = document.createElement('div');
            
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');
            card.innerHTML = `
                <div class="styles-block">
                    <img src=${item.src} alt="style">
                    <h4>${item.title}</h4>
                    <a href=${item.link}>Подробнее</a>
                </div>
            `;
            document.querySelector(wrapper).append(card);

        });
    }
};

export default showMoreStyles;