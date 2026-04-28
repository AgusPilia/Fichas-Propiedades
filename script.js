const photos = [
  {
    src: "assets/10-living-barra.webp",
    alt: "Living comedor con barra divisoria hacia la cocina"
  },
  {
    src: "assets/01-cocina.jpg",
    alt: "Cocina separada con bajo mesada, ventana y artefacto de cocina"
  },
  {
    src: "assets/02-living-cocina.jpg",
    alt: "Vista desde la cocina hacia el living comedor"
  },
  {
    src: "assets/03-dormitorio-placard.jpg",
    alt: "Dormitorio con placard empotrado y piso simil madera"
  },
  {
    src: "assets/05-bano-ducha.jpg",
    alt: "Baño completo con ducha, bidet y ventilación"
  },
  {
    src: "assets/08-frente-edificio.jpg",
    alt: "Frente del edificio sobre calle 9"
  },
  {
    src: "assets/04-living.jpg",
    alt: "Living comedor amplio con piso simil madera"
  },
  {
    src: "assets/06-bano-vanitory.webp",
    alt: "Baño con vanitory y espejo"
  },
  {
    src: "assets/07-dormitorio-ventana.webp",
    alt: "Dormitorio con ventana hacia el exterior"
  },
  {
    src: "assets/09-dormitorio.webp",
    alt: "Ambiente del dormitorio con ventana"
  },
  {
    src: "assets/11-cocina-barra.jpg",
    alt: "Cocina integrada visualmente al estar por barra"
  },
  {
    src: "assets/12-vista.jpg",
    alt: "Vista urbana desde el departamento"
  },
  {
    src: "assets/13-estar-barra.jpg",
    alt: "Estar con barra y acceso al dormitorio"
  }
];

const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
let activeIndex = 0;

function showPhoto(index) {
  activeIndex = (index + photos.length) % photos.length;
  const photo = photos[activeIndex];
  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.alt;
  lightboxCaption.textContent = `${activeIndex + 1} / ${photos.length} · ${photo.alt}`;
}

document.querySelectorAll("[data-gallery] button").forEach((button) => {
  button.addEventListener("click", () => {
    showPhoto(Number(button.dataset.index));
    lightbox.showModal();
  });
});

document.querySelector("[data-close]").addEventListener("click", () => {
  lightbox.close();
});

document.querySelector("[data-prev]").addEventListener("click", () => {
  showPhoto(activeIndex - 1);
});

document.querySelector("[data-next]").addEventListener("click", () => {
  showPhoto(activeIndex + 1);
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.open) {
    return;
  }

  if (event.key === "ArrowLeft") {
    showPhoto(activeIndex - 1);
  }

  if (event.key === "ArrowRight") {
    showPhoto(activeIndex + 1);
  }
});

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("[data-form-status]");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "Consulta preparada. Conectá este formulario a tu email, CRM o WhatsApp para publicarlo.";
});
