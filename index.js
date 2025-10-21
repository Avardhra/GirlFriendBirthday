
    const amplopHeadClass = document.querySelector('.amplopHead');
    const amplopHead = document.getElementById('amplopHead');
    const suratUp = document.getElementById('suratUp');
    const garisIsiSurat = document.getElementById('garisIsiSurat');
    let amplopHeadCheck = false;
    amplopHead.addEventListener('click', () => {
        if (!amplopHeadCheck) {
            amplopHeadClass.style = "border-bottom-left-radius: 0; border-bottom-right-radius: 0; border-top-left-radius: 100px; border-top-right-radius: 100px; top: -4.2vh; z-index: 8;";
            setTimeout(() => {
                suratUp.classList.add("h-[75vh]");
            }, 190);

            amplopHeadCheck = true;
            garisIsiSurat.style = "display:block;";
        } else {
            suratUp.classList.remove("h-[75vh]");
            setTimeout(() => {
                amplopHeadClass.style = "border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 0; border-top-right-radius: 0; top: 0vh; z-index: 11;";
            }, 250);
            amplopHeadCheck = false;
            garisIsiSurat.style = "display:none;";
        }
    });

    const avdBTNPesan = document.getElementById('avdBTNPesan');
    const avdCTNPesan = document.getElementById('avdCTNPesan');

    avdBTNPesan.addEventListener('click', ()=> {
        avdCTNPesan.style.opacity = '1';
    })