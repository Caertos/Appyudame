document.addEventListener("DOMContentLoaded", () => {
  
    fetch("./componentes/testimonial.json")
    .then((response) => response.json())
    .then((testimonials) => {
      const container = document.getElementById("testimonial-container");
      if (container) {

        const containerFluid = document.createElement("div");
        containerFluid.className = "container-fluid";
        container.appendChild(containerFluid);

        const containerSeccionTestimonios = document.createElement("div");
        containerSeccionTestimonios.className = "container";
        containerFluid.appendChild(containerSeccionTestimonios);

        const containerTestimonios = document.createElement("div");
        containerTestimonios.className = "text-center mb-3 pb-3";
        containerSeccionTestimonios.appendChild(containerTestimonios);

        const textTestimonios = document.createElement("h4");
        textTestimonios.className = "text-primary text-uppercase";
        textTestimonios.style.letterSpacing = "5px";
        textTestimonios.textContent = "testimonios"
        containerTestimonios.appendChild(textTestimonios);

        const conoceHistorias = document.createElement("p");
        conoceHistorias.textContent = "Conoce historias reales de transformación y crecimiento de nuestros usuarios, que encontraron en Appyudame un aliado en su camino hacia el bienestar emocional.";
        containerTestimonios.appendChild(conoceHistorias);


        const divCarousel = document.createElement("div");
        divCarousel.className = "owl-carousel testimonial-carousel";
        containerFluid.appendChild(divCarousel);

        testimonials.forEach((testimonial) => {
          const containerCard = document.createElement("div");
          containerCard.className = "text-center pb-4";

          const img = document.createElement("img");
          img.src = testimonial.image;
          img.style.width = "100px";
          img.style.height = "100px";

          const testimonialText = document.createElement("div");
          testimonialText.className = "testimonial-text bg-white p-4 mt-n5";

          const p = document.createElement("p");
          p.className = "mt-5";
          p.textContent = testimonial.testimonial;

          const h5 = document.createElement("h5");
          h5.className = "text-truncate";
          h5.textContent = testimonial.name;

          testimonialText.appendChild(p);
          testimonialText.appendChild(h5);
          containerCard.appendChild(img);
          containerCard.appendChild(testimonialText);
          divCarousel.appendChild(containerCard);
        });

        // Inicializar el carrusel después de agregar los elementos
        $(".testimonial-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1500,
          margin: 30,
          dots: true,
          loop: true,
          center: true,
          touchDrag: true,
          pullDrag: true,
          responsive: {
            0: {
              items: 1,
            },
            576: {
              items: 1,
            },
            768: {
              items: 2,
            },
            992: {
              items: 3,
            },
          },
        });
      } else {
        console.error("El contenedor no fue encontrado");
      }
    })
    .catch((error) => console.error("Error al cargar datos de testimonios:", error));
});