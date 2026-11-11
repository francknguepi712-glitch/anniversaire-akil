document.addEventListener("DOMContentLoaded", function () {

    const cadeau = document.getElementById("cadeau");
    const message = document.getElementById("message");
    const partager = document.getElementById("partager");

    let ouvert = false;

    // OUVERTURE DU CADEAU
    cadeau.addEventListener("click", function () {

        if (!ouvert) {

            cadeau.classList.add("ouvert");

            message.innerHTML = `
                <h2>🎉 JOYEUX ANNIVERSAIRE ! 🎂</h2>

                <p>
                    Aujourd'hui est un jour exceptionnel !
                </p>

                <p>
                    Nous souhaitons un merveilleux
                    anniversaire à notre FILS
                </p>

                <h2>💙 AKIL KHOEN 💙</h2>

                <p>
                    Que ta vie soit remplie de bonheur,
                    de réussite, de santé et d'amour.
                </p>

                <p>
                    Que tous tes rêves deviennent réalité !
                </p>

                <p class="signature">
                    Nous t'aimons très fort ! 💙✨
                </p>
            `;

            lancerConfettis();

            ouvert = true;

        } else {

            cadeau.classList.remove("ouvert");

            message.innerHTML =
                "<p>Une belle surprise t'attend... 💙</p>";

            ouvert = false;
        }

    });

    // CONFETTIS ET PAILLETTES
    function lancerConfettis() {

        const couleurs = [
            "#ffd700",
            "#ffffff",
            "#00bfff",
            "#ff69b4",
            "#7fff00",
            "#ff4500"
        ];

        for (let i = 0; i < 100; i++) {

            const confetti = document.createElement("div");

            confetti.className = "confetti";

            confetti.textContent =
                Math.random() > 0.5 ? "✨" : "🎊";

            confetti.style.left =
                Math.random() * 100 + "vw";

            confetti.style.fontSize =
                (12 + Math.random() * 18) + "px";

            confetti.style.color =
                couleurs[Math.floor(Math.random() * couleurs.length)];

            confetti.style.animationDuration =
                (2 + Math.random() * 3) + "s";

            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 5500);
        }
    }

    // PARTAGE WHATSAPP
    partager.addEventListener("click", function () {

        const lien = window.location.href;

        const texte =
            "🎉 Joyeux anniversaire à notre fils AKIL KHOEN ! 💙 " +
            "Découvre cette belle surprise ici : " + lien;

        const url =
            "https://wa.me/?text=" + encodeURIComponent(texte);

        window.open(url, "_blank");

    });

});