document.addEventListener('DOMContentLoaded', function () {
    // Recupera gli elementi del testo dinamico
    var textContainer1 = document.getElementById('text-container-1');
    var textContainer2 = document.getElementById('text-container-2');

    // Controlla la grandezza dello schermo e imposta il testo di conseguenza
    function updateText() {
        var windowWidth = window.innerWidth;

        if (windowWidth < 480) {
            textContainer1.innerHTML = 'Il presente documento è una sintesi rispetto alcuni punti salienti dell\'Accordo sulla riorganizzazione del settore Infrastrutture RFI.<br>L\'<a href="2024.01.10_ACCORDO_Manutenzione_Infrastrutture.pdf">accordo sottoscritto il 10 gennaio 2024</a> è stato caratterizzato...';
            textContainer2.innerHTML = 'CSE/DL livello professionale A figura professionale Impiegato Direttivo che svolgono compiti:<br>- Fino a 20 mln per gli appalti civili ed interessanti l\'intero ciclo di vita dell\'appalto.<br>- Fino a...';
        
        } else {
            textContainer1.innerHTML = 'Il presente documento è una sintesi rispetto alcuni punti salienti dell\'Accordo sulla riorganizzazione del settore Infrastrutture RFI.<br>L\'<a href="2024.01.10_ACCORDO_Manutenzione_Infrastrutture.pdf">accordo sottoscritto il 10 gennaio 2024</a> è stato caratterizzato da un confronto complesso durato quasi tre anni, sospeso nel maggio 2023, per volontà della Filt Cgil che ha rivendicato con forza che la sicurezza non sia più un semplice obiettivo da raggiungere, ma una priorità assoluta. Per questo, è necessario investire in sicurezza e garantire ai lavoratori le condizioni necessarie per operare in sicurezza.<br>Concetti ribaditi nel Settembre 2023 dalla Filt Cgil, nel documento politico <a href="deve esserci un dopo Brandizzo.pdf">"DEVE ESSERCI UN DOPO BRANDIZZO PER TUTTI"</a>, in cui si è chiesto: un maggior investimento in sicurezza, sia in termini di risorse finanziarie che di formazione obbligatoria (teorica e pratica) dei lavoratori di RFI e degli appalti; una revisione dell\'organizzazione del lavoro, che concili l\'esigenza aziendale di presidio manutentivo con quella di stabilire un\'equa ripartizione della prestazione lavorativa tra i lavoratori garantendo maggiori spazi manutentivi.<br>Il documento della Filt Cgil rappresenta un punto di partenza importante per avviare un dibattito serio e costruttivo sul tema della sicurezza nel settore dei trasporti e siamo soddisfatti che nell\'accordo sono stati recepiti i primi elementi qualificanti, rivendicati dalla Filt Cgil, che riportano al centro della discussione della contrattazione territoriale temi quali:<br><b>Internalizzazione e formazione</b><br>Acquisizione di nuovi treni e mezzi d\'opera per la realizzazione di attività core in house.<br>Percorsi di apprendimento sul campo per la internalizzazione di attività che non necessitano di mezzi d\'opera (cambio filo e revisione TE, risanamento di piccoli tratti di binario, sostituzione di tratti di rotaia).<br>Incremento del numero degli istruttori esclusivamente dedicati al rolo di formatori nell\'ambito della Technical Academy.<br><b>Sicurezza<b><br>Un rafforzamento del ruolo di controllo e verifica nei cantieri di lavoro, anche nei confronti delle ditte appaltatrici.<br>Sede permanente di incontri sulle tematiche riconducibili alla formazione e alla sicurezza del lavoro. Incontri trimestrali a livello nazionale e di norma semestrali a livello territoriale.';
            textContainer2.innerHTML = 'CSE/DL livello professionale A figura professionale Impiegato Direttivo che svolgono compiti:<br>- Fino a 20 mln per gli appalti civili ed interessanti l\'intero ciclo di vita dell\'appalto.<br>- Fino a...';
        }
    }

    // Aggiorna il testo quando la finestra viene ridimensionata
    window.addEventListener('resize', updateText);

    // Chiamata iniziale per impostare il testo in base alla dimensione iniziale della finestra
    updateText();
});
