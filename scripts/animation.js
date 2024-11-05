
document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero-section", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".about", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".services", { opacity: 0, y: 50, duration: 1, delay: 1 });
    gsap.from(".methodology", { opacity: 0, y: 50, duration: 1, delay: 1.5 });
    gsap.from(".contact", { opacity: 0, y: 50, duration: 1, delay: 2 });
    
    
    const serviceItems = document.querySelectorAll(".services li");
    serviceItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            gsap.to(item, { scale: 1.1, color: "#1dbbe6", duration: 0.3 });
        });
        item.addEventListener("mouseleave", () => {
            gsap.to(item, { scale: 1, color: "#333", duration: 0.3 });
        });
    });
});