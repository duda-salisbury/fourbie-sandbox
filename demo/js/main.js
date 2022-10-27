window.addEventListener('DOMContentLoaded', function() {

    const stickyElements = [
        ['.fe-auctionInfoBar', 220],
        ['.fe-auctionHero', 20],

    ];

    stickyElements.forEach(element => {
        console.log(element);
        let DOMElement = document.querySelector(element[0]);
        
        let offset = element[1];

        const observer = new IntersectionObserver( 
            ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
            { threshold: [1], rootMargin: `-${offset}px 0px 0px 0px` }
        );
        
        //observer.observe(DOMElement);

    });


    const content = document.querySelector('.fe-auctionHero__content');
    const initialOffsetTop = content.offsetTop;
    document.addEventListener("scroll", (e) => {
        var scrolled = document.scrollingElement.scrollTop;
        var position = content.offsetTop;
        console.log(`scrolled: ${scrolled} position: ${position} initialOffsetTop: ${initialOffsetTop}`);
        if(scrolled > initialOffsetTop-20){
            content.classList.add(
                'fe-auctionHero__content--pinned'
            );
        } else if (scrolled <= initialOffsetTop) {
            console.log("yes please");
            content.classList.remove(
                'fe-auctionHero__content--pinned'
            );
        }
    });


});