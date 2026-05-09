console.log("D.Laban Loaded");
if(window.innerWidth <= 768){

    const sliders = document.querySelectorAll(".products-grid");

    sliders.forEach((slider)=>{

        let index = 0;

        const products = slider.querySelectorAll(".product");

        setInterval(()=>{

            index++;

            if(index >= products.length){
                index = 0;
            }

            slider.scrollTo({
                left: slider.clientWidth * index,
                behavior: "smooth"
            });

        },3000);

    });

}