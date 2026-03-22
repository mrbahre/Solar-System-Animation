const title = document.querySelector("h1");
title.addEventListener("mousemove",e => {
    const rect = title.getBoundingClientRect();
    title.style.setProperty("--x", `${e.clientX - rect.left}px`);
    title.style.setProperty("--y", `${e.clientY - rect.top}px`);
});