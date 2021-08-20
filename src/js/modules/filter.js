const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          btnAll = menu.querySelector('.all'),
          btnLovers = menu.querySelector('.lovers'),
          btnChef = menu.querySelector('.chef'),
          btnGirl = menu.querySelector('.girl'),
          btnGuy = menu.querySelector('.guy'),
          btnGrandmother = menu.querySelector('.grandmother'),
          btnGranddad = menu.querySelector('.granddad'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markLovers = wrapper.querySelectorAll('.lovers'),
          markChef = wrapper.querySelectorAll('.chef'),
          markGirl = wrapper.querySelectorAll('.girl'),
          markGuy = wrapper.querySelectorAll('.guy'),
          no = document.querySelector('.portfolio-no');


    const typeFilter = (markType, target) => {
        markAll.forEach( mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');

        });

        items.forEach(item => {
            item.classList.remove('active');
        });

        target.closest('li').classList.add('active');

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType == no) {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        } else {
            markType.forEach( mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        }
    };


    btnAll.addEventListener('click', (e) => {
        typeFilter(markAll, e.target);
    });
    btnLovers.addEventListener('click', (e) => {
        typeFilter(markLovers, e.target);
    });
    btnChef.addEventListener('click', (e) => {
        typeFilter(markChef, e.target);
    });
    btnGirl.addEventListener('click', (e) => {
        typeFilter(markGirl, e.target);
    });
    btnGuy.addEventListener('click', (e) => {
        typeFilter(markGuy, e.target);
    });
    btnGrandmother.addEventListener('click', (e) => {
        typeFilter( no, e.target);
    });
    btnGranddad.addEventListener('click', (e) => {
        typeFilter(no, e.target);
    });

};

export default filter;