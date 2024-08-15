const accordionItem = document.querySelectorAll('.accordion__item');
accordionItem.forEach((item) => {
    const accordionHeaderItem = item.querySelector('.accordion__header');

    accordionHeaderItem.addEventListener('click', () => {
        const accordionDescription = item.querySelector('.accordion__description');
        const itemActived = document.querySelector('.accordion__description-active');
        verificaFaqAtivo(item, accordionDescription, itemActived)
    });
});

function verificaFaqAtivo(item, description, descriptionActived) {
    const iconItem = item.querySelector('.accordion__icon');
    const iconsItemActive = item.querySelectorAll('.accordion__icon');

    iconsItemActive.forEach((item) => (item.classList.add('ri-arrow-down-s-line')));

    if(descriptionActived) {
        description.classList.remove('accordion__description-active');
        iconItem.classList.remove('ri-arrow-up-s-line');
    }

    if(description !== descriptionActived) {
        iconItem.classList.add('ri-arrow-up-s-line');
        description.classList.add('accordion__description-active');
        
    }
}