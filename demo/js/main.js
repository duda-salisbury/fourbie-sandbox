window.addEventListener('DOMContentLoaded', function() {

    const stickyElements = [
        ['.fe-auctionInfoBar', 220],
        ['.fourbie__auctionHero', 20],

    ];

    stickyElements.forEach(element => {
        console.log(element);
        let DOMElement = document.querySelector(element[0]);
        
        let offset = element[1];

        const observer = new IntersectionObserver( 
            ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
            { threshold: [1], rootMargin: `-${offset}px 0px 0px 0px` }
        );
        
        observer.observe(DOMElement);

    });



});