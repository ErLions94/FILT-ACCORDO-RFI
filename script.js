document.addEventListener('DOMContentLoaded', function () {
    // Recupera gli elementi del testo dinamico
    var textContainer1 = document.getElementById('text-container-1');
    var textContainer2 = document.getElementById('text-container-2');

    // Controlla la grandezza dello schermo e imposta il testo di conseguenza
    function updateText() {
        var windowWidth = window.innerWidth;

        if (windowWidth < 480) {
            textContainer1.innerHTML = 'Il presente documento è una sintesi rispetto alcuni punti salienti dell\'Accordo sulla riorganizzazione del settore Infrastrutture RFI.<br>L\'<a href="2024.01.10_ACCORDO_Manutenzione_Infrastrutture.pdf">accordo sottoscritto il 10 gennaio 2024</a> è stato caratterizzato...';
            textContainer2.innerHTML = 'Altro testo per schermi piccoli con <a href="documento2.pdf" target="_blank">link a PDF</a>';
        
        } else {
            textContainer1.innerHTML = 'Il presente documento è una sintesi rispetto alcuni punti salienti dell\'Accordo sulla riorganizzazione del settore Infrastrutture RFI.<br>L\'<a href="2024.01.10_ACCORDO_Manutenzione_Infrastrutture.pdf">accordo sottoscritto il 10 gennaio 2024</a> è stato caratterizzato da un confronto complesso durato quasi tre anni, sospeso nel maggio 2023, per volontà della Filt Cgil che ha rivendicato con forza che la sicurezza non sia più un semplice obiettivo da raggiungere, ma una priorità assoluta. Per questo, è necessario investire in sicurezza e garantire ai lavoratori le condizioni necessarie per operare in sicurezza.<br>Concetti ribaditi nel Settembre 2023 dalla Filt Cgil, nel documento politico <a href="deve esserci un dopo Brandizzo.pdf">"DEVE ESSERCI UN DOPO BRANDIZZO PER TUTTI"</a>, in cui si è chiesto:';
            textContainer2.innerHTML = 'Altro testo per schermi grandi con <a href="documento6.pdf" target="_blank">link a PDF</a>';
        }
    }

    // Aggiorna il testo quando la finestra viene ridimensionata
    window.addEventListener('resize', updateText);

    // Chiamata iniziale per impostare il testo in base alla dimensione iniziale della finestra
    updateText();
});
