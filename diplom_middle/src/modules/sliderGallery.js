const sliderGallery = () => {

    const slider = document.querySelector('.gallery-slider');
    let slide = slider.querySelectorAll('.slide');
    console.log('slide: ', slide);
    
    let interval;
    let currentSlide = 0; 
    //slide[1].classList.add('active');
    
    slide.forEach(slide => {
        slide.style.position = 'absolute';
        if(!slide.classList.contains('active')){
            slide.style.opacity = '0';
        }
    });

    const addDot = () => {
        let ul = document.createElement('ul');
        ul.classList.add('slider-dots');
        slider.append(ul);
        for (let i = 0; i < slide.length; i++){
            let li = document.createElement('li');
            li.classList.add('dot');
            ul.append(li);
        }
        const allLi = ul.querySelectorAll('li');
        allLi[0].classList.add('dot-active');
    };
    addDot();
//номер слайда
    const prevSlide = (elem, index, strClass) => { //действие для слайда который будет меняться
        elem[index].classList.remove(strClass);
    };
//действие для следующего нового слайда 
    const nextSlide = (elem, index, strClass) =>{
        //без этого костыля не листает вперед после последнего слайда
        if(elem.length == currentSlide){
            index = 0;
            currentSlide = 0
        }
        elem[index].classList.add(strClass);
    };
    const autoPlaySlide = () =>{
        prevSlide(slide, currentSlide, 'active');
        //console.log('currentSlide: ', currentSlide);
        currentSlide++;
        //дошли до конца => на первый слайд
        if(currentSlide >= slide.length){
            currentSlide=0;
        }
        nextSlide(slide, currentSlide, 'active');
    }
    const startSlide = (time = 10000) =>{
        interval = setInterval(autoPlaySlide, time);
    };

    slider.addEventListener('click' , (e) =>{
        e.preventDefault();

        let target = e.target;
        //if(!target.matches('.portfolio-btn')) return;


        if(target.matches("#arrow-right")){
            currentSlide++
        } else if (target.matches("#arrow-left")){
            currentSlide--
        }
        if(currentSlide>=slide.length){
            currentSlide === 0;
        } else if (currentSlide<0){
            currentSlide = slide.length-1;
        }
        nextSlide(slide, currentSlide, 'show');
    });
    startSlide();

    // const stopSlide = () =>{
    //     clearInterval(interval);
    // };

};

export default sliderGallery;