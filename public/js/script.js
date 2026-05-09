console.log("D.Laban Loaded");

if(window.innerWidth <= 768){

    const sliders = document.querySelectorAll(".products-grid");

    sliders.forEach((slider)=>{

        const products = slider.querySelectorAll(".product");

        let index = 0;
        let autoSlide;

        function startAutoSlide(){

            autoSlide = setInterval(()=>{

                index++;

                if(index >= products.length){
                    index = 0;
                }

                slider.scrollTo({
                    left:index * slider.clientWidth,
                    behavior:"smooth"
                });

            },3000);

        }

        function stopAutoSlide(){
            clearInterval(autoSlide);
        }

        function resetAutoSlide(){

            stopAutoSlide();

            setTimeout(()=>{
                startAutoSlide();
            },3000);

        }

        slider.addEventListener("touchstart",stopAutoSlide);

        slider.addEventListener("touchend",()=>{

            index = Math.round(
                slider.scrollLeft / slider.clientWidth
            );

            resetAutoSlide();

        });

        slider.addEventListener("scroll",()=>{

            index = Math.round(
                slider.scrollLeft / slider.clientWidth
            );

        });

        startAutoSlide();

    });

}