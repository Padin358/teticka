const footerBtn = () => {
    if(!localStorage.getItem("footerBtnState")) {
        let state = 0
        localStorage.setItem("footerBtnState", "0")
    } else {
        let state = parseInt(localStorage.getItem("footerBtnState"))
    }

    if (state) {
        document.getElementById("footerBtnId").innerText = "Webovou stránku vytvořil Radim Vopelka s 💙"
    } else {
        document.getElementById("footerBtnId").innerHTML = "Website created by Radim Vopelka with 💙"
    }
}

const Footer = () => {
    return <div className="fixed left-0 bottom-0 w-full p-3 bg-cyan-800 text-xl text-center text-gray-50 font-semibold">Webové stránky aktuální k pondělí 4. 8. 2025.<br /><button className="font-normal text-lg" onClick={footerBtn} id="footerBtnId">Website created by Radim Vopelka with 💙</button></div>
}

export default Footer