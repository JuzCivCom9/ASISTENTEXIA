fetch("data/faq.json").then(r => r.json()).then(faq => {
    const input = document.getElementById("search");
    const results = document.getElementById("results");

    input.addEventListener("input", () => {
        const query = input.value.toLowerCase();
        results.innerHTML = "";
        faq.forEach(({pregunta, respuesta}) => {
            if (pregunta.toLowerCase().includes(query)) {
                const div = document.createElement("div");
                div.innerHTML = `<h3>${pregunta}</h3><p>${respuesta}</p>`;
                results.appendChild(div);
            }
        });
    });
});