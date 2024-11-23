
document.addEventListener('DOMContentLoaded', ()=>{

    const testimonies = [
        {img_src:'images/photo 1.jpg', reviewer_name: 'Susan Smith', dedication:'WEB DEVELOPER', review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, consectetur repellendus omnis, itaque facilis quidem perferendis ad incidunt commodi dignissimos  neque animi quibusdam necessitatibus debitis harum expedita porro laboriosam quos.'},
        {img_src:'images/photo 2.jpg', reviewer_name: 'Julian Morits', dedication:'SYSTEMS DESIGNER', review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, consectetur  perferendis ad incidunt commodi dignissimos. '},
        {img_src:'images/photo 3.jpg', reviewer_name: 'David Beckham', dedication:'ARTIST',review:'Lorem ipsum dolor sit amet consectetur adipisic dolor sit amet consectetur adipising elit. Dicta, consectetur  perferendis ad incidunt commodi dignissimos '},
        {img_src:'images/photo 4.jpg', reviewer_name: 'Kai Havertz', dedication:'UI DESIGNER', review:'LorLorem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipisic dolor sit amet consectetur adipising elit. Dicta, consectetur  perferendis ad incidunt commodi dignissimos '},
        {img_src:'images/photo 5.jpg', reviewer_name: 'Rodrigo Boes', dedication:'TEACHER ASSITANT', review:'LorLorem ipsum dolor sit amet consectetur adipem ipsum dolor sit amet consectetur adipisic dolor sit amet consectetur adipising elit. Dicta, consecteturctetur adipising elit. Dicta, consecteturctetur adipising elit. Dicta, consectetur  perferendis ad incidunt commodi dignissimos '},
        {img_src:'images/photo 6.jpg', reviewer_name: 'Dua lipa', dedication:'APP DEVELOPER', review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, consectetur repellendus omnis, itaque facilis quidem perferendis ad incidunt commodi dignissimos. '}
    ]
    
    
    
    let testimony_index = 0;
    
    const previous = document.querySelector('.previous-review');
    const next = document.querySelector('.next-review');
    
    
    //elements selected to change inner content in the card
    
    const card = document.querySelector('.card');
    const img = card.querySelector('.profile-image');
    const reviewer_name = card.querySelector('.reviewer-name');
    const dedication = card.querySelector('.dedication');
    const review = card.querySelector('.review')
    
    function nextTestimony() {
    
        testimony_index += 1;
        if (testimony_index > testimonies.length - 1 ) testimony_index = 0;
        
        card.classList.add('animate-right');
        setTimeout(()=>{card.classList.remove('animate-right')},300);

        img.src = testimonies[testimony_index].img_src;
        
        reviewer_name.innerText = testimonies[testimony_index].reviewer_name;
        dedication.innerText = testimonies[testimony_index].dedication;
        review.innerText = testimonies[testimony_index].review;
    }

    function previousTestimony() {
    
        testimony_index -= 1;
        if (testimony_index < 0 ) testimony_index = testimonies.length - 1;
        
        card.classList.add('animate-left');
        setTimeout(()=>{card.classList.remove('animate-left')},300);

        img.src = testimonies[testimony_index].img_src;
        
        reviewer_name.innerText = testimonies[testimony_index].reviewer_name;
        dedication.innerText = testimonies[testimony_index].dedication;
        review.innerText = testimonies[testimony_index].review;
    }

    next.addEventListener('click', nextTestimony);
    previous.addEventListener('click', previousTestimony);
});