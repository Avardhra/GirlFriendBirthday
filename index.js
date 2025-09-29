 const RekapBtn = document.getElementById('RekapBtn');
    RekapBtn.addEventListener('click', () => {
        window.location.href = 'rekap.html';
    });
    const amplopHeadClass = document.querySelector('.amplopHead');
    const amplopHead = document.getElementById('amplopHead');
    const testID = document.getElementById('testID');
    const suratUp = document.getElementById('suratUp');
    const garisIsiSurat = document.getElementById('garisIsiSurat');
    let amplopHeadCheck = false;
    amplopHead.addEventListener('click', () => {
        if (!amplopHeadCheck) {
            amplopHeadClass.style = "border-bottom-left-radius: 0; border-bottom-right-radius: 0; border-top-left-radius: 100px; border-top-right-radius: 100px; top: -4.2vh; z-index: 8;";
            setTimeout(() => {
                suratUp.classList.add("h-[80vh]");
            }, 190);

            amplopHeadCheck = true;
            testID.innerText = "true";
            garisIsiSurat.style = "display:block;";
        } else {
            suratUp.classList.remove("h-[80vh]");
            setTimeout(() => {
                amplopHeadClass.style = "border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 0; border-top-right-radius: 0; top: 0vh; z-index: 11;";
            }, 250);
            amplopHeadCheck = false;
            testID.innerText = "false";
            garisIsiSurat.style = "display:none;";
        }
    });