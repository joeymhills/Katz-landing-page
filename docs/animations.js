import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter, index) => {
        gsap.fromTo(counter, { innerText: 0 }, {
            innerText: counter.getAttribute("data-count"),
            duration: 2,
            scrollTrigger: {
                trigger: counter,
                start: "top 75%",
                toggleActions: "play none none none"
            },
            snap: { innerText: 1 },
            stagger: {
                amount: 0.2,
                from: "start"
            },
            onUpdate: function () {
                counter.innerText = Math.ceil(counter.innerText);
            }
        });
    });
});
