// -- SERVICE WORKER --
if("serviceWorker" in navigator){
  navigator.serviceWorker.register('/C-Turni/firebase-messaging-sw.js', { scope: '/C-Turni/' })
    .then(function(reg){ console.log("SW FCM registrato:", reg.scope); })
    .catch(function(e){ console.warn("SW err:", e); });
}









(function(){try{var fs=JSON.parse(localStorage.getItem("ct_font"));if(fs){var _fm={12:"sm",14:"md",16:"lg",18:"xl"};document.documentElement.setAttribute("data-font",_fm[fs]||"md");document.documentElement.style.setProperty("--fs-base",fs+"px");}}catch(e){}
try{var t=JSON.parse(localStorage.getItem("ct_tema"));if(t===null||t===undefined)return;if(t)document.documentElement.setAttribute("data-theme",t);else document.documentElement.removeAttribute("data-theme");}catch(e){}})();

// ---- GRADI ----
var GR={
  "Car.":{nome:"Carabiniere",col:"#2979ff",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Crect%20x%3D%227%22%20y%3D%2215.5%22%20width%3D%2246%22%20height%3D%222%22%20rx%3D%221.5%22%20fill%3D%22%23cc1020%22/%3E%3Ctext%20x%3D%2230%22%20y%3D%2229%22%20font-size%3D%227%22%20fill%3D%22%238faac8%22%20text-anchor%3D%22middle%22%20font-family%3D%22serif%22%3ECC%3C/text%3E%3C/svg%3E"},
  "Car.Sc.":{nome:"Carabiniere Scelto",col:"#448aff",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Cpolyline%20points%3D%227%2C18%2030%2C27%2053%2C18%22%20fill%3D%22none%22%20stroke%3D%22%23cc1020%22%20stroke-width%3D%222.8%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E"},
  "App.":{nome:"Appuntato",col:"#5c6bc0",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Cpolyline%20points%3D%227%2C10%2030%2C19%2053%2C10%22%20fill%3D%22none%22%20stroke%3D%22%23cc1020%22%20stroke-width%3D%222.8%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3Cpolyline%20points%3D%227%2C21%2030%2C30%2053%2C21%22%20fill%3D%22none%22%20stroke%3D%22%23cc1020%22%20stroke-width%3D%222.8%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E"},
  "App.Sc.":{nome:"Appuntato Scelto",col:"#7c4dff",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Cpolyline%20points%3D%227%2C7%2030%2C16%2053%2C7%22%20fill%3D%22none%22%20stroke%3D%22%23cc1020%22%20stroke-width%3D%222.8%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3Cpolyline%20points%3D%227%2C17%2030%2C26%2053%2C17%22%20fill%3D%22none%22%20stroke%3D%22%23cc1020%22%20stroke-width%3D%222.8%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3Cpolyline%20points%3D%227%2C27%2030%2C36%2053%2C27%22%20fill%3D%22none%22%20stroke%3D%22%23cc1020%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E"},
  "V.Brig.":{nome:"Vice Brigadiere",col:"#d4af37",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Cpolyline%20points%3D%227%2C18%2030%2C27%2053%2C18%22%20fill%3D%22none%22%20stroke%3D%22%23e8e8e8%22%20stroke-width%3D%222.8%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E"},
  "Brig.":{nome:"Brigadiere",col:"#d4af37",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Cpolyline%20points%3D%227%2C10%2030%2C19%2053%2C10%22%20fill%3D%22none%22%20stroke%3D%22%23e8e8e8%22%20stroke-width%3D%222.8%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3Cpolyline%20points%3D%227%2C21%2030%2C30%2053%2C21%22%20fill%3D%22none%22%20stroke%3D%22%23e8e8e8%22%20stroke-width%3D%222.8%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E"},
  "Brig.Ca.":{nome:"Brigadiere Capo",col:"#c9a800",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Cpolyline%20points%3D%227%2C7%2030%2C16%2053%2C7%22%20fill%3D%22none%22%20stroke%3D%22%23e8e8e8%22%20stroke-width%3D%222.8%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3Cpolyline%20points%3D%227%2C17%2030%2C26%2053%2C17%22%20fill%3D%22none%22%20stroke%3D%22%23e8e8e8%22%20stroke-width%3D%222.8%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3Cpolyline%20points%3D%227%2C27%2030%2C36%2053%2C27%22%20fill%3D%22none%22%20stroke%3D%22%23e8e8e8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E"},
  "Mar.":{nome:"Maresciallo",col:"#c8102e",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Crect%20x%3D%227%22%20y%3D%2216%22%20width%3D%2246%22%20height%3D%224%22%20rx%3D%221.5%22%20fill%3D%22%23c8c8c8%22/%3E%3C/svg%3E"},
  "Mar.Ord.":{nome:"Maresciallo Ordinario",col:"#c8102e",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Crect%20x%3D%227%22%20y%3D%2212%22%20width%3D%2246%22%20height%3D%224%22%20rx%3D%221.5%22%20fill%3D%22%23c8c8c8%22/%3E%3Crect%20x%3D%227%22%20y%3D%2220%22%20width%3D%2246%22%20height%3D%224%22%20rx%3D%221.5%22%20fill%3D%22%23c8c8c8%22/%3E%3C/svg%3E"},
  "Mar.Cap.":{nome:"Maresciallo Capo",col:"#b00020",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Crect%20x%3D%227%22%20y%3D%228%22%20width%3D%2246%22%20height%3D%224%22%20rx%3D%221.5%22%20fill%3D%22%23c8c8c8%22/%3E%3Crect%20x%3D%227%22%20y%3D%2216%22%20width%3D%2246%22%20height%3D%224%22%20rx%3D%221.5%22%20fill%3D%22%23c8c8c8%22/%3E%3Crect%20x%3D%227%22%20y%3D%2224%22%20width%3D%2246%22%20height%3D%224%22%20rx%3D%221.5%22%20fill%3D%22%23c8c8c8%22/%3E%3C/svg%3E"},
  "Mar.Magg.":{nome:"Maresciallo Maggiore",col:"#900010",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Crect%20x%3D%227%22%20y%3D%226%22%20width%3D%2246%22%20height%3D%223%22%20rx%3D%221.5%22%20fill%3D%22%23c8c8c8%22/%3E%3Crect%20x%3D%227%22%20y%3D%2212%22%20width%3D%2246%22%20height%3D%223%22%20rx%3D%221.5%22%20fill%3D%22%23c8c8c8%22/%3E%3Crect%20x%3D%227%22%20y%3D%2218%22%20width%3D%2246%22%20height%3D%223%22%20rx%3D%221.5%22%20fill%3D%22%23c8c8c8%22/%3E%3Crect%20x%3D%227%22%20y%3D%2224%22%20width%3D%2246%22%20height%3D%223%22%20rx%3D%221.5%22%20fill%3D%22%23c8c8c8%22/%3E%3C/svg%3E"},
  "Luog.":{nome:"Luogotenente",col:"#ff6d00",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Crect%20x%3D%227%22%20y%3D%226%22%20width%3D%2246%22%20height%3D%223%22%20rx%3D%221.5%22%20fill%3D%22%23d4af37%22/%3E%3Crect%20x%3D%227%22%20y%3D%2212%22%20width%3D%2246%22%20height%3D%223%22%20rx%3D%221.5%22%20fill%3D%22%23d4af37%22/%3E%3Crect%20x%3D%227%22%20y%3D%2218%22%20width%3D%2246%22%20height%3D%223%22%20rx%3D%221.5%22%20fill%3D%22%23d4af37%22/%3E%3Crect%20x%3D%227%22%20y%3D%2224%22%20width%3D%2246%22%20height%3D%223%22%20rx%3D%221.5%22%20fill%3D%22%23d4af37%22/%3E%3Cpolygon%20points%3D%2230.0%2C1.5%2030.8%2C3.9%2033.3%2C3.9%2031.3%2C5.4%2032.1%2C7.8%2030.0%2C6.4%2027.9%2C7.8%2028.7%2C5.4%2026.7%2C3.9%2029.2%2C3.9%22%20fill%3D%22%23d4af37%22/%3E%3C/svg%3E"},
  "S.Ten.":{nome:"Sottotenente",col:"#00bcd4",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Cpolygon%20points%3D%2230.0%2C13.5%2031.1%2C16.5%2034.3%2C16.6%2031.7%2C18.6%2032.6%2C21.6%2030.0%2C19.8%2027.4%2C21.6%2028.3%2C18.6%2025.7%2C16.6%2028.9%2C16.5%22%20fill%3D%22%23c8c8c8%22/%3E%3C/svg%3E"},
  "Ten.":{nome:"Tenente",col:"#00bcd4",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Cpolygon%20points%3D%2222.0%2C13.5%2023.1%2C16.5%2026.3%2C16.6%2023.7%2C18.6%2024.6%2C21.6%2022.0%2C19.8%2019.4%2C21.6%2020.3%2C18.6%2017.7%2C16.6%2020.9%2C16.5%22%20fill%3D%22%23c8c8c8%22/%3E%3Cpolygon%20points%3D%2238.0%2C13.5%2039.1%2C16.5%2042.3%2C16.6%2039.7%2C18.6%2040.6%2C21.6%2038.0%2C19.8%2035.4%2C21.6%2036.3%2C18.6%2033.7%2C16.6%2036.9%2C16.5%22%20fill%3D%22%23c8c8c8%22/%3E%3C/svg%3E"},
  "Cap.":{nome:"Capitano",col:"#0097a7",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Cpolygon%20points%3D%2215.0%2C13.5%2016.1%2C16.5%2019.3%2C16.6%2016.7%2C18.6%2017.6%2C21.6%2015.0%2C19.8%2012.4%2C21.6%2013.3%2C18.6%2010.7%2C16.6%2013.9%2C16.5%22%20fill%3D%22%23c8c8c8%22/%3E%3Cpolygon%20points%3D%2230.0%2C6.5%2031.1%2C9.5%2034.3%2C9.6%2031.7%2C11.6%2032.6%2C14.6%2030.0%2C12.8%2027.4%2C14.6%2028.3%2C11.6%2025.7%2C9.6%2028.9%2C9.5%22%20fill%3D%22%23c8c8c8%22/%3E%3Cpolygon%20points%3D%2245.0%2C13.5%2046.1%2C16.5%2049.3%2C16.6%2046.7%2C18.6%2047.6%2C21.6%2045.0%2C19.8%2042.4%2C21.6%2043.3%2C18.6%2040.7%2C16.6%2043.9%2C16.5%22%20fill%3D%22%23c8c8c8%22/%3E%3C/svg%3E"},
  "Magg.":{nome:"Maggiore",col:"#00c853",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Crect%20x%3D%227%22%20y%3D%2224%22%20width%3D%2246%22%20height%3D%223%22%20rx%3D%221.5%22%20fill%3D%22%23c8c8c8%22/%3E%3Cpolygon%20points%3D%2222.0%2C9.5%2023.1%2C12.5%2026.3%2C12.6%2023.7%2C14.6%2024.6%2C17.6%2022.0%2C15.8%2019.4%2C17.6%2020.3%2C14.6%2017.7%2C12.6%2020.9%2C12.5%22%20fill%3D%22%23c8c8c8%22/%3E%3Cpolygon%20points%3D%2238.0%2C9.5%2039.1%2C12.5%2042.3%2C12.6%2039.7%2C14.6%2040.6%2C17.6%2038.0%2C15.8%2035.4%2C17.6%2036.3%2C14.6%2033.7%2C12.6%2036.9%2C12.5%22%20fill%3D%22%23c8c8c8%22/%3E%3C/svg%3E"},
  "Ten.Col.":{nome:"Ten. Colonnello",col:"#00a040",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Crect%20x%3D%227%22%20y%3D%2224%22%20width%3D%2246%22%20height%3D%223%22%20rx%3D%221.5%22%20fill%3D%22%23c8c8c8%22/%3E%3Cpolygon%20points%3D%2215.0%2C7.5%2016.1%2C10.5%2019.3%2C10.6%2016.7%2C12.6%2017.6%2C15.6%2015.0%2C13.8%2012.4%2C15.6%2013.3%2C12.6%2010.7%2C10.6%2013.9%2C10.5%22%20fill%3D%22%23c8c8c8%22/%3E%3Cpolygon%20points%3D%2230.0%2C2.5%2031.1%2C5.5%2034.3%2C5.6%2031.7%2C7.6%2032.6%2C10.6%2030.0%2C8.8%2027.4%2C10.6%2028.3%2C7.6%2025.7%2C5.6%2028.9%2C5.5%22%20fill%3D%22%23c8c8c8%22/%3E%3Cpolygon%20points%3D%2245.0%2C7.5%2046.1%2C10.5%2049.3%2C10.6%2046.7%2C12.6%2047.6%2C15.6%2045.0%2C13.8%2042.4%2C15.6%2043.3%2C12.6%2040.7%2C10.6%2043.9%2C10.5%22%20fill%3D%22%23c8c8c8%22/%3E%3C/svg%3E"},
  "Col.":{nome:"Colonnello",col:"#d4af37",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Crect%20x%3D%227%22%20y%3D%2226%22%20width%3D%2246%22%20height%3D%223%22%20rx%3D%221.5%22%20fill%3D%22%23d4af37%22/%3E%3Cpolygon%20points%3D%2212.0%2C11.5%2013.1%2C14.5%2016.3%2C14.6%2013.7%2C16.6%2014.6%2C19.6%2012.0%2C17.8%209.4%2C19.6%2010.3%2C16.6%207.7%2C14.6%2010.9%2C14.5%22%20fill%3D%22%23c8c8c8%22/%3E%3Cpolygon%20points%3D%2224.0%2C4.5%2025.1%2C7.5%2028.3%2C7.6%2025.7%2C9.6%2026.6%2C12.6%2024.0%2C10.8%2021.4%2C12.6%2022.3%2C9.6%2019.7%2C7.6%2022.9%2C7.5%22%20fill%3D%22%23c8c8c8%22/%3E%3Cpolygon%20points%3D%2236.0%2C4.5%2037.1%2C7.5%2040.3%2C7.6%2037.7%2C9.6%2038.6%2C12.6%2036.0%2C10.8%2033.4%2C12.6%2034.3%2C9.6%2031.7%2C7.6%2034.9%2C7.5%22%20fill%3D%22%23c8c8c8%22/%3E%3Cpolygon%20points%3D%2248.0%2C11.5%2049.1%2C14.5%2052.3%2C14.6%2049.7%2C16.6%2050.6%2C19.6%2048.0%2C17.8%2045.4%2C19.6%2046.3%2C16.6%2043.7%2C14.6%2046.9%2C14.5%22%20fill%3D%22%23c8c8c8%22/%3E%3C/svg%3E"},
  "Gen.":{nome:"Generale",col:"#b8860b",svg:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2036%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2258%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%230e1f3a%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%221.5%22/%3E%3Crect%20x%3D%225%22%20y%3D%2225%22%20width%3D%2250%22%20height%3D%223%22%20rx%3D%221.5%22%20fill%3D%22%23d4af37%22/%3E%3Cpolygon%20points%3D%2230.0%2C6.0%2031.8%2C10.6%2036.7%2C10.8%2032.9%2C13.9%2034.1%2C18.7%2030.0%2C16.0%2025.9%2C18.7%2027.1%2C13.9%2023.3%2C10.8%2028.2%2C10.6%22%20fill%3D%22%23cc1020%22/%3E%3Cpolygon%20points%3D%2230.0%2C6.0%2031.8%2C10.6%2036.7%2C10.8%2032.9%2C13.9%2034.1%2C18.7%2030.0%2C16.0%2025.9%2C18.7%2027.1%2C13.9%2023.3%2C10.8%2028.2%2C10.6%22%20fill%3D%22none%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%22.8%22/%3E%3C/svg%3E"}
};

// Ordine gerarchico gradi (0 = più alto)
var _GRADO_ORDER = {"Gen.":0,"Col.":1,"Ten.Col.":2,"Magg.":3,"Cap.":4,"Ten.":5,"S.Ten.":6,"Luog.":7,"Mar.Magg.":8,"Mar.Cap.":9,"Mar.Ord.":10,"Mar.":11,"Brig.Ca.":12,"Brig.":13,"V.Brig.":14,"App.Sc.":15,"App.":16,"Car.Sc.":17,"Car.":18};
function _gradoPrio(grado){ return _GRADO_ORDER.hasOwnProperty(grado) ? _GRADO_ORDER[grado] : 99; }
function lsG(k,d){try{var v=localStorage.getItem(k);return v?JSON.parse(v):d;}catch(e){return d;}}
function lsS(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true;}catch(e){if(e.name==='QuotaExceededError'||e.code===22){if(typeof toast==='function')toast('Spazio esaurito: riduci la foto','err');}return false;}}

// ── CONFIRM CUSTOM (sostituisce window.confirm) ──────────────
var _ctConfirmResolveFunc = null;
function ctConfirm(msg, opts) {
  opts = opts || {};
  return new Promise(function(resolve) {
    _ctConfirmResolveFunc = resolve;
    var title = document.getElementById('m-confirm-title');
    var msgEl = document.getElementById('m-confirm-msg');
    var ico   = document.getElementById('m-confirm-ico');
    var okBtn = document.getElementById('m-confirm-ok');
    var canBtn= document.getElementById('m-confirm-cancel');
    if(title)  title.textContent  = opts.title  || 'Conferma';
    if(msgEl)  msgEl.innerHTML    = msg;
    if(ico)    ico.textContent    = opts.ico    || '⚠️';
    if(okBtn)  okBtn.textContent  = opts.ok     || 'Conferma';
    if(canBtn) canBtn.textContent = opts.cancel || 'Annulla';
    if(okBtn)  okBtn.style.background = opts.danger ? 'var(--red)' : '';
    openM('m-confirm');
  });
}
function ctConfirmResolve(val) {
  closeM('m-confirm');
  if(_ctConfirmResolveFunc) { _ctConfirmResolveFunc(val); _ctConfirmResolveFunc = null; }
}

// ── SPINNER ──────────────────────────────────────────────────
function ctSpinner(show, msg) {
  var el = document.getElementById('ct-spinner');
  if(!el) return;
  if(show) {
    var msgEl = document.getElementById('ct-spinner-msg');
    if(msgEl) msgEl.textContent = msg || 'Caricamento...';
    el.classList.add('on');
  } else {
    el.classList.remove('on');
  }
}
// Helper data locale (evita sfasamento UTC a mezzanotte)
function _oggi(){var d=new Date();return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2);}
// Parsa una stringa data "YYYY-MM-DD" in locale (evita bug iOS/Safari con T00:00:00 UTC)
function _parseDate(ds){
  if(!ds) return new Date(NaN);
  var p = ds.split('-');
  return new Date(parseInt(p[0],10), parseInt(p[1],10)-1, parseInt(p[2],10));
}

// ---- MODALITÀ PERSONALE ----
function _isPrivato(reparto){ return !reparto || reparto.startsWith('privato_'); }

// Tipi turno "personale" (seguono l'utente al cambio reparto)
var _TIPI_PERSONALE = ['riposo','ferie','recupero','licenza','permesso','937','104','ls','fest'];

function regAvanzaStep2(){
  var nome = document.getElementById('reg-nome').value.trim();
  var cogn = document.getElementById('reg-cognome').value.trim();
  var email = document.getElementById('reg-email').value.trim();
  var pass = document.getElementById('reg-pass').value;
  var err = document.getElementById('auth-reg-err');
  if(!nome||!cogn||!email||!pass){ if(err){err.textContent='Compila tutti i campi obbligatori.';err.style.display='block';} return; }
  if(err) err.style.display='none';
  document.getElementById('reg-step2').style.display='block';
  document.getElementById('reg-btn-avanza').style.display='none';
  document.getElementById('reg-btn-crea').style.display='block';
}

function regScegliModalita(m){
  var cp = document.getElementById('reg-card-privato');
  var cr = document.getElementById('reg-card-reparto');
  var cf = document.getElementById('reg-campi-reparto');
  if(cp) cp.style.border = m==='privato' ? '2px solid var(--blue)' : '2px solid var(--border)';
  if(cr) cr.style.border = m==='reparto' ? '2px solid var(--blue)' : '2px solid var(--border)';
  if(cf) cf.style.display = m==='reparto' ? 'block' : 'none';
  window._regModalita = m;
}

function regConferma(){
  var modalita = window._regModalita || 'privato';
  var reparto = modalita === 'reparto' ? (document.getElementById('reg-reparto') ? document.getElementById('reg-reparto').value : '') : '';
  AuthModule.register({
    nome: document.getElementById('reg-nome').value,
    cognome: document.getElementById('reg-cognome').value,
    email: document.getElementById('reg-email').value,
    password: document.getElementById('reg-pass').value,
    reparto: reparto,
    grado: document.getElementById('reg-grado').value,
    ruolo: 'addetto',
    tipo: modalita === 'reparto' ? (document.getElementById('reg-specialita') ? document.getElementById('reg-specialita').value : '') : '',
    modalita: modalita
  });
}

// ── INVITA COLLEGA ──
function invitaCollega(){
  var me = lsG('ct_me', null);
  if(!me || !me.reparto){ toast('Devi essere in un reparto per invitare colleghi','err'); return; }
  var base = window.location.origin + window.location.pathname;
  var link = base + '?join=' + encodeURIComponent(me.reparto);
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(link).then(function(){
      toast('&#128279; Link copiato! Condividilo con il collega','ok');
    }).catch(function(){ _fallbackCopyInvite(link); });
  } else { _fallbackCopyInvite(link); }
}
function _fallbackCopyInvite(link){
  var ta = document.createElement('textarea');
  ta.value = link; ta.style.position='fixed'; ta.style.opacity='0';
  document.body.appendChild(ta); ta.select();
  try{ document.execCommand('copy'); toast('&#128279; Link copiato!','ok'); }
  catch(e){ toast('Link: '+link,'ok'); }
  document.body.removeChild(ta);
}

// ── LEGGI PARAMETRO ?join= ALL'AVVIO ──
(function _checkJoinParam(){
  try {
    var params = new URLSearchParams(window.location.search);
    var joinId = params.get('join');
    if(!joinId) return;
    window._joinRepartoId = decodeURIComponent(joinId);
    // Mostra il form di registrazione con banner
    document.addEventListener('DOMContentLoaded', function(){
      _applyJoinParam(window._joinRepartoId);
    });
    // Fallback se DOMContentLoaded già passato
    if(document.readyState !== 'loading') _applyJoinParam(window._joinRepartoId);
  } catch(e){}
})();

function _applyJoinParam(repartoId){
  // Segna che questa registrazione viene da un invito — forza addetto+pending
  window._joinInviteReparto = repartoId;
  // Mostra overlay registrazione
  if(typeof AuthModule !== 'undefined' && AuthModule.showRegister) AuthModule.showRegister();
  // Nascondi scelta privato/reparto e precompila
  var step2 = document.getElementById('reg-step2');
  if(step2){
    // Forza modalità reparto senza mostrare la scelta
    step2.style.display = 'block';
    var cardPriv = document.getElementById('reg-card-privato');
    var cardRep  = document.getElementById('reg-card-reparto');
    if(cardPriv) cardPriv.style.display = 'none';
    if(cardRep)  cardRep.style.display  = 'none';
    // Nascondi anche i campi di selezione reparto (già precompilato)
    var campiSel = document.getElementById('reg-reparto-sel-wrap');
    if(campiSel) campiSel.style.display = 'none';
    var campi = document.getElementById('reg-campi-reparto');
    if(campi) campi.style.display = 'block';
    window._regModalita = 'reparto';
    // Precompila l'ID reparto (bloccato, non modificabile)
    var repInput = document.getElementById('reg-reparto');
    var repPrev  = document.getElementById('reg-reparto-preview');
    if(repInput){ repInput.value = repartoId; repInput.readOnly = true; }
    if(repPrev)  repPrev.textContent = repartoId;
    // Mostra banner
    var banner = document.getElementById('reg-invite-banner');
    var nomeEl = document.getElementById('reg-invite-rep-nome');
    if(banner) banner.style.display = 'block';
    // Formatta il nome leggibile dall'ID
    var nomeLeggibile = repartoId.replace(/_/g,' ').replace(/\b\w/g,function(c){return c.toUpperCase();});
    if(nomeEl) nomeEl.textContent = nomeLeggibile;
    // Nascondi il bottone "Continua" e mostra direttamente "Crea Account"
    var btnAvanza = document.getElementById('reg-btn-avanza');
    var btnCrea   = document.getElementById('reg-btn-crea');
    if(btnAvanza) btnAvanza.style.display = 'none';
    if(btnCrea)   btnCrea.style.display   = 'block';
  }
}
// Cerca in ct_p un profilo con uid===null il cui nome corrisponde a nome+cognome
// nelle varianti più comuni (cognome nome / nome cognome).
function _collegaPlaceholder(nome, cognome, uid, reparto) {
  try {
    var P = lsG('ct_p', []);
    var varianti = [
      (cognome + ' ' + nome).toLowerCase().trim(),
      (nome + ' ' + cognome).toLowerCase().trim(),
      cognome.toLowerCase().trim(),
      nome.toLowerCase().trim()
    ].filter(function(v){ return v.length > 1; });

    var found = false;
    P = P.map(function(p) {
      if (p.uid) return p; // già collegato
      var pn = (p.nome || '').toLowerCase().trim();
      var match = varianti.some(function(v) {
        return pn === v || pn.indexOf(v) !== -1 || v.indexOf(pn) !== -1;
      });
      if (match && !found) {
        found = true;
        console.log('[C-Turni] Placeholder collegato:', p.nome, '→ uid', uid);
        return Object.assign({}, p, { uid: uid, reparto: reparto });
      }
      return p;
    });

    if (found) {
      lsS('ct_p', P);
      localStorage.setItem('ct_my_pid', String(P.find(function(p){ return p.uid === uid; }).id));
      if (window.FirebaseModule) {
        window.FirebaseModule.savePersona().catch(function(){});
      }
    } else {
      // Nessun placeholder trovato → crea nuova voce in ct_p per questo utente
      var nuovaPersona = {
        id: Date.now(),
        nome: (cognome + ' ' + nome).trim(),
        grado: '',
        reparto: reparto || '',
        uid: uid,
        ferieRes: 30,
        stato: 'pending'
      };
      P.push(nuovaPersona);
      lsS('ct_p', P);
      localStorage.setItem('ct_my_pid', String(nuovaPersona.id));
      if (window.FirebaseModule) {
        window.FirebaseModule.savePersona().catch(function(){});
      }
    }
  } catch(e) { console.warn('_collegaPlaceholder:', e.message); }
}

// ── Helper: seleziona tipo struttura reparto (bottoni in-app) ──
function selTipoRep(prefix, val, btn) {
  var inp = document.getElementById(prefix + '-tipo-struttura') || document.getElementById(prefix + '-tipo');
  if(inp) inp.value = val;
  // Evidenzia bottone selezionato
  var container = btn ? btn.parentElement : null;
  if(container) container.querySelectorAll('.tipo-rep-btn').forEach(function(b){ b.classList.remove('sel'); });
  if(btn) btn.classList.add('sel');
  // Aggiorna preview ID
  if(prefix === 'trasf') aggiornaTrasferimentoId();
  else if(prefix === 'uniti') aggiornaUnitiId();
  else if(prefix === 'reg') aggiornaRepartoId();
}

// ── Helper: seleziona specialità reparto (bottoni in-app) ──
function selSpecRep(prefix, val, btn) {
  var inp = document.getElementById(prefix + '-specialita') || document.getElementById(prefix + '-spec');
  if(inp) inp.value = val;
  var container = btn ? btn.parentElement : null;
  if(container) container.querySelectorAll('.tipo-rep-btn').forEach(function(b){ b.classList.remove('sel'); });
  if(btn) btn.classList.add('sel');
  if(prefix === 'trasf') aggiornaTrasferimentoId();
  else if(prefix === 'uniti') aggiornaUnitiId();
  else if(prefix === 'reg') aggiornaRepartoId();
}

// ── Turni Custom in Impostazioni (sezione inline) ──
function selTcColImp(btn) {
  document.querySelectorAll('.tc-col-btn-imp').forEach(function(b){
    b.style.border = '3px solid transparent';
    b.style.transform = 'scale(1)';
  });
  btn.style.border = '3px solid var(--txt)';
  btn.style.transform = 'scale(1.2)';
  var col = btn.getAttribute('data-col');
  var inp = document.getElementById('tc-col-sel-imp');
  if(inp) inp.value = col;
}

function renderTurniCustomImp() {
  var el = document.getElementById('tc-list-imp');
  if(!el) return;
  var TC = lsG('ct_turni_custom', []);
  if(!TC.length) {
    el.innerHTML = '<div style="text-align:center;color:var(--txt2);padding:12px;font-size:13px">Nessun turno personalizzato.</div>';
    return;
  }
  el.innerHTML = TC.map(function(tc) {
    var bg = _TC_COLORI[tc.col] || _TC_COLORI.mattina;
    return '<div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:var(--card);border:1px solid var(--border);border-radius:12px;margin-bottom:6px">'
      + '<div style="width:36px;height:36px;border-radius:10px;background:'+bg+';display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0">'+(tc.emoji||'⏰')+'</div>'
      + '<div style="flex:1;min-width:0"><div style="font-size:12px;font-weight:700;color:var(--txt)">'+tc.nome+' <span style="font-size:10px;background:var(--bg2);padding:1px 5px;border-radius:5px;color:var(--txt2)">'+tc.codice+'</span></div>'
      + '<div style="font-size:11px;color:var(--txt2)">'+tc.oraIn+' – '+tc.oraFi+'</div></div>'
      + '<button onclick="delTurnoCustom('+tc.id+');renderTurniCustomImp();" style="background:none;border:none;color:var(--txt3);cursor:pointer;font-size:14px;padding:4px;appearance:none;-webkit-appearance:none">&#128465;</button>'
      + '</div>';
  }).join('');
}

function salvaTurnoCustomImp() {
  var nome   = (document.getElementById('tc-nome-imp')||{}).value.trim();
  var codice = ((document.getElementById('tc-codice-imp')||{}).value||'').trim().toUpperCase();
  var oraIn  = (document.getElementById('tc-ora-in-imp')||{}).value || '08:00';
  var oraFi  = (document.getElementById('tc-ora-fi-imp')||{}).value || '16:00';
  var emoji  = (document.getElementById('tc-emoji-imp')||{}).value.trim() || '⏰';
  var col    = (document.getElementById('tc-col-sel-imp')||{}).value || 'mattina';
  if(!nome) { toast('Inserisci un nome','err'); return; }
  if(!codice || codice.length < 2) { toast('Inserisci un codice (min 2 car.)','err'); return; }
  var TC = lsG('ct_turni_custom', []);
  if(TC.find(function(x){ return x.codice === codice; })) { toast('Codice già usato','err'); return; }
  TC.push({id:Date.now(),nome:nome,codice:codice,oraIn:oraIn,oraFi:oraFi,emoji:emoji,col:col});
  lsS('ct_turni_custom', TC);
  ['tc-nome-imp','tc-codice-imp','tc-emoji-imp'].forEach(function(id){ var el=document.getElementById(id); if(el) el.value=''; });
  var oi = document.getElementById('tc-ora-in-imp'); if(oi) oi.value='08:00';
  var of = document.getElementById('tc-ora-fi-imp'); if(of) of.value='16:00';
  var oi_lbl = document.getElementById('tc-ora-in-imp-lbl'); if(oi_lbl) oi_lbl.textContent='08:00';
  var of_lbl = document.getElementById('tc-ora-fi-imp-lbl'); if(of_lbl) of_lbl.textContent='16:00';
  renderTurniCustomImp();
  _aggiungiOpzioniCustomAlSelect();
  toast('Turno personalizzato aggiunto ✓','ok');
}

// ── Helper: priorità todo (bottoni in-app) ──
function setTdPrio(val, btn) {
  var inp = document.getElementById('td-prio');
  if(inp) inp.value = val;
  document.querySelectorAll('#m-todo .tipo-rep-btn').forEach(function(b){ b.classList.remove('sel'); });
  if(btn) btn.classList.add('sel');
}

// ── Helper: avviso agenda (bottoni in-app) ──
function setAgNotif(val, btn) {
  var inp = document.getElementById('ag-notif');
  if(inp) inp.value = String(val);
  document.querySelectorAll('#m-agenda .tipo-rep-btn').forEach(function(b){ b.classList.remove('sel'); });
  if(btn) btn.classList.add('sel');
}

// ── Reset m-todo quando si apre ──
var _origOpenM_todo = null; // gestito in openM

function aggiornaStatoReparto(){
  var me = lsG('ct_me', null);
  var info = document.getElementById('stato-reparto-info');
  var btnU = document.getElementById('btn-unisciti-reparto');
  var btnS = document.getElementById('btn-scollegati-reparto');
  var btnT = document.getElementById('btn-trasferimento');
  if(!me || !info) return;
  var rep = me.reparto || '';
  if(_isPrivato(rep)){
    info.innerHTML = '&#128100; Sei in <strong>Modalità Personale</strong>. I tuoi turni sono privati.';
    if(btnU){ btnU.style.display='inline-flex'; }
    if(btnS){ btnS.style.display='none'; }
    if(btnT){ btnT.style.display='none'; }
  } else {
    info.innerHTML = '&#127968; Sei nel reparto: <strong style="color:var(--blue)">' + rep + '</strong>';
    if(btnU){ btnU.style.display='none'; }
    if(btnS){ btnS.style.display='inline-flex'; }
    if(btnT){ btnT.style.display='inline-flex'; }
  }
}
function apriTrasferimento(){
  // Il form trasferimento è ora dentro Opzioni Avanzate — apri quel pannello
  var sec = document.getElementById('sec-opz-avanzate');
  var arr = document.getElementById('arr-opz-avanzate');
  if(sec && !sec.classList.contains('open')){
    sec.classList.add('open');
    if(arr) arr.style.transform = 'rotate(90deg)';
  }
  if(sec) sec.scrollIntoView({behavior:'smooth', block:'nearest'});
}
function chiudiTrasferimento(){
  // stub — il form è sempre visibile dentro Opzioni Avanzate
}
function resetTurniUtente(){
  var me = lsG('ct_me', null);
  if(!me){ toast('Sessione non trovata','err'); return; }
  ctConfirm('Eliminare TUTTI i tuoi turni?', {title:'Reset Turni', ico:'🗑️', ok:'Elimina', danger:true}).then(function(ok){
    if(!ok) return;
    var uid = me.uid || me.id;
    var myPid = parseInt(localStorage.getItem('ct_my_pid')||'0');
    // Rimuovi da localStorage
    var T = lsG('ct_t', []).filter(function(t){
      return !(t.pid == myPid || t.pid === uid || (me.uid && t.uid === me.uid));
    });
    lsS('ct_t', T);
    // Rimuovi da Firebase con writeBatch
    if(window.FirebaseModule) {
      window.FirebaseModule.deleteTurniUtente(uid, myPid).then(function(){
        toast('Tutti i tuoi turni eliminati','ok');
        renderTurni(); renderOggi(); stats(); aggiornaWidget();
        if(typeof renderCal === 'function') renderCal();
      }).catch(function(e){ toast('Errore: '+e.message,'err'); });
    } else {
      toast('Tutti i tuoi turni eliminati (locale)','ok');
      renderTurni(); renderOggi(); stats(); aggiornaWidget();
    }
  });
}

// ── Reset Totale Dati: elimina tutti i turni dalla collezione Firestore ──
function resetTotaleFirestore(){
  var me = lsG('ct_me', null);
  if(!me){ toast('Sessione non trovata','err'); return; }
  ctConfirm('Eliminare TUTTI i turni del reparto da Firestore?<br><small>Il tuo profilo NON verrà eliminato.</small>', {title:'Reset Totale', ico:'⚠️', ok:'Elimina tutto', danger:true}).then(function(ok){
    if(!ok) return;
    var rep = (me.reparto||'').toLowerCase().replace(/\s+/g,'_');
    var isPrivato = !rep || rep.startsWith('privato_');
    // Pulisci localStorage turni
    lsS('ct_t', []);
    if(typeof renderTurni==='function') renderTurni();
    if(typeof renderOggi==='function') renderOggi();
    if(typeof stats==='function') stats();
    if(typeof aggiornaWidget==='function') aggiornaWidget();
    if(!window._fbGetDocs || !window._fbCollection || !window._fbDeleteDoc || !window._fbDoc || !window._fbDb || isPrivato){
      toast('Turni eliminati (locale)', 'ok');
      return;
    }
    toast('Eliminazione turni in corso...', 'ok');
    (async function(){
      try {
        // Elimina SOLO i turni — mai il profilo utente
        var snap = await window._fbGetDocs(window._fbCollection(window._fbDb, 'reparti', rep, 'turni'));
        var dels = [];
        snap.forEach(function(d){ dels.push(window._fbDeleteDoc(window._fbDoc(window._fbDb, 'reparti', rep, 'turni', d.id))); });
        await Promise.all(dels);
        // Ripristina il profilo utente nel reparto corrente (per sicurezza)
        if(me.uid && window.FirebaseModule) {
          window.FirebaseModule.saveUserProfile(me.uid, me, rep).catch(function(){});
        }
        toast('✅ Tutti i turni eliminati da Firestore', 'ok');
        setTimeout(function(){ location.reload(); }, 1200);
      } catch(e) {
        console.warn('resetTotaleFirestore:', e.message);
        toast('Errore: ' + e.message, 'err');
      }
    })();
  });
}

// ── Apri selezione reparto iniziale (Trasferimento) ──
function apriSelezioneReparto(){
  // Porta l'utente alla sezione impostazioni > stato reparto e apre il form trasferimento
  vaiBN('imp', 4);
  setTimeout(function(){
    var secRep = document.getElementById('sec-stato-reparto');
    if(secRep) secRep.scrollIntoView({behavior:'smooth', block:'center'});
    apriTrasferimento();
  }, 200);
}

function apriUnitiReparto(){
  var f = document.getElementById('uniti-reparto-form');
  if(f){
    f.style.display = 'block';
    setTimeout(function(){ f.scrollIntoView({behavior:'smooth', block:'nearest'}); }, 50);
  }
  var btnU = document.getElementById('btn-unisciti-reparto');
  if(btnU) btnU.style.display = 'none';
}

function chiudiUnitiReparto(){
  var f = document.getElementById('uniti-reparto-form');
  if(f) f.style.display='none';
  aggiornaStatoReparto();
}

function aggiornaUnitiId(){
  var t = (document.getElementById('uniti-tipo')||{}).value||'';
  var s = (document.getElementById('uniti-spec')||{}).value||'';
  var c = ((document.getElementById('uniti-sede')||{}).value||'').trim().toLowerCase().replace(/\s+/g,'_');
  var id = [t,s,c].filter(Boolean).join('_');
  var prev = document.getElementById('uniti-reparto-preview');
  if(prev) prev.textContent = id || '—';
  // Feedback visivo: controlla se il reparto esiste
  var hint = document.getElementById('uniti-reparto-hint');
  if(!hint || !id || !window.FirebaseModule) return;
  clearTimeout(window._unitiHintTimer);
  window._unitiHintTimer = setTimeout(async function(){
    try {
      var existing = await window.FirebaseModule.getUsersByReparto(id);
      if(existing.length > 0){
        var cmd = existing.find(function(u){ return (u.ruolo==='comandante'||u.ruolo==='vice') && (u.stato==='approved'||u.stato==='approvato'); });
        hint.innerHTML = '&#9989; Reparto trovato. Potrai unirti dopo l\'approvazione del Comandante' + (cmd ? ' (<strong>'+(cmd.grado||'')+' '+cmd.nome+' '+cmd.cognome+'</strong>)' : '') + '.';
        hint.style.background = 'rgba(6,214,160,.08)';
        hint.style.borderColor = 'rgba(6,214,160,.3)';
        hint.style.color = 'var(--green)';
      } else {
        hint.innerHTML = '&#128640; Nuovo reparto: sarai il primo iscritto e diventerai automaticamente <strong>Comandante</strong>.';
        hint.style.background = 'rgba(41,121,255,.07)';
        hint.style.borderColor = 'rgba(41,121,255,.2)';
        hint.style.color = 'var(--blue)';
      }
      hint.style.display = 'block';
    } catch(e){ hint.style.display = 'none'; }
  }, 600);
}

async function confermaUnitiReparto(){
  var t = (document.getElementById('uniti-tipo')||{}).value||'';
  var s = (document.getElementById('uniti-spec')||{}).value||'';
  var c = ((document.getElementById('uniti-sede')||{}).value||'').trim().toLowerCase().replace(/\s+/g,'_');
  var id = [t,s,c].filter(Boolean).join('_');
  if(!id){ toast('Compila tutti i campi reparto','err'); return; }
  var me = lsG('ct_me', null);
  if(!me){ toast('Sessione non trovata','err'); return; }
  var vecchioRep = me.reparto || '';

  // Logica pioniere: controlla se il reparto esiste già con un Comandante
  var isPioniere = false;
  if(window.FirebaseModule) {
    try {
      var esistenti = await window.FirebaseModule.getUsersByReparto(id);
      var haCmd = esistenti.some(function(u){
        return u.ruolo === 'comandante' && (u.stato === 'approved' || u.stato === 'approvato');
      });
      isPioniere = (esistenti.length === 0 || !haCmd);
    } catch(e) { isPioniere = true; }
  } else { isPioniere = true; }

  me.reparto = id;
  me.ruolo = isPioniere ? 'comandante' : 'addetto';
  me.stato = isPioniere ? 'approved' : 'pending';
  lsS('ct_me', me);

  // Pulisci dati vecchio reparto
  lsS('ct_p', []);
  lsS('ct_t', []);
  localStorage.removeItem('ct_my_pid');

  if(window.FirebaseModule){
    try {
      await window.FirebaseModule.saveUserProfile(me.uid || me.id, me, id);
      if(vecchioRep && vecchioRep !== id){
        await window.FirebaseModule.migraTurniPersonali(vecchioRep, id, me.uid || me.id);
      }
      if(isPioniere){
        try { await window.FirebaseModule.loadReparto(id); } catch(e){}
      }
    } catch(e){ toast('Errore Firebase: '+e.message,'err'); return; }
  }

  chiudiUnitiReparto();
  aggiornaStatoReparto();
  if(isPioniere){
    toast('Sei il primo del reparto "'+id.replace(/_/g,' ')+'". Sei il Comandante!','ok');
    if(typeof aggUI==='function') aggUI();
    if(typeof renderDash==='function') renderDash();
    if(typeof vaiBN==='function') vaiBN('dash',0);
  } else {
    toast('Richiesta inviata. In attesa di approvazione.','ok');
    _showPendingScreen(me);
  }
}

function scollegaReparto(){
  var me = lsG('ct_me', null);
  if(!me) return;
  var rep = me.reparto || '';
  if(_isPrivato(rep)){ toast('Sei già in modalità personale','ok'); return; }
  ctConfirm('Vuoi davvero uscire dal reparto "<strong>'+rep+'</strong>"?<br><small>I tuoi turni di servizio futuri verranno rimossi. Le ferie rimarranno.</small>', {title:'Esci dal Reparto', ico:'🏠', ok:'Esci', danger:true}).then(function(ok){
    if(!ok) return;
    var uid = me.uid || me.id;
    var vecchioRep = rep;
    me.reparto = 'privato_' + uid;
    me.ruolo = 'addetto';
    me.stato = 'approved';
    lsS('ct_me', me);
    lsS('ct_p', []);
    lsS('ct_t', []);
    localStorage.removeItem('ct_my_pid');
    if(window.FirebaseModule){
      window.FirebaseModule.eliminaTurniServizioReparto(vecchioRep, uid).then(function(){
        window.FirebaseModule.migraTurniPersonali(vecchioRep, 'privato_'+uid, uid).then(function(){
          window.FirebaseModule.savePersonale();
          toast('Scollegato dal reparto. Ora sei in modalità personale.','ok');
          aggiornaStatoReparto();
          if(typeof aggUI==='function') aggUI();
          if(typeof renderDash==='function') renderDash();
        });
      }).catch(function(e){ toast('Errore: '+e.message,'err'); });
    } else {
      toast('Scollegato.','ok');
      aggiornaStatoReparto();
      if(typeof renderDash==='function') renderDash();
    }
  });
}

// ---- GESTIONE COMANDO ----
function _renderStatoComando(){
  var me = lsG('ct_me', null);
  var sec = document.getElementById('sec-stato-comando');
  if(!sec || !me) return;
  var isCom = me.ruolo === 'comandante';
  var isVice = me.ruolo === 'vice';
  if(!isCom && !isVice){ sec.style.display='none'; return; }
  sec.style.display='block';
  var info = document.getElementById('stato-comando-info');
  if(info) info.innerHTML = isCom ? '&#128081; Sei il <strong>Comandante</strong> del reparto.' : '&#11088; Sei il <strong>Vice Comandante</strong> del reparto.';
  var btnPassa = document.getElementById('btn-passa-comando');
  var btnPromuovi = document.getElementById('btn-promuovi-vice');
  var btnDegrada = document.getElementById('btn-degrada-vice');
  if(btnPassa) btnPassa.style.display = isCom ? 'inline-flex' : 'none';
  if(btnPromuovi) btnPromuovi.style.display = isCom ? 'inline-flex' : 'none';
  // Mostra "Rimuovi Vice" solo se esiste già un vice
  var U = lsG('ct_users', []);
  if(!U.length) U = lsG('ct_u', []);
  var hasVice = U.some(function(u){ return u.ruolo==='vice' && u.stato==='approved'; });
  var nVice = U.filter(function(u){ return u.ruolo==='vice' && u.stato==='approved'; }).length;
  if(btnDegrada) btnDegrada.style.display = (isCom && hasVice) ? 'inline-flex' : 'none';
  if(btnDegrada && nVice > 1) btnDegrada.textContent = '⬇ Rimuovi Vice (' + nVice + ')';
}

function _popolaSelectMembri(selId, escludiRuoli){
  var sel = document.getElementById(selId);
  if(!sel) return;
  var me = lsG('ct_me', null);
  var myRep = (me && me.reparto) ? me.reparto.toLowerCase() : '';
  // Usa ct_users (Firebase) come fonte principale, ct_u come fallback
  var rawU = lsG('ct_users', []);
  if(!rawU.length) rawU = lsG('ct_u', []);
  var U = rawU.filter(function(u){
    if(u.stato !== 'approved') return false;
    if(me && (u.uid||u.id) === (me.uid||me.id)) return false;
    if(escludiRuoli && escludiRuoli.indexOf(u.ruolo) !== -1) return false;
    // Filtra per reparto se disponibile
    if(myRep && u.reparto && u.reparto.toLowerCase() !== myRep) return false;
    return true;
  });
  sel.innerHTML = '<option value="">-- Seleziona membro --</option>';
  U.forEach(function(u){
    var opt = document.createElement('option');
    opt.value = u.uid || u.id;
    var nomeDisplay = ((u.cognome||'') + ' ' + (u.nome||'')).trim() || u.nome || u.email || '';
    opt.textContent = nomeDisplay + (u.grado ? ' (' + u.grado + ')' : '');
    sel.appendChild(opt);
  });
}

function apriPassaComando(){
  _popolaSelectMembri('sel-nuovo-comandante', ['comandante']);
  document.getElementById('form-passa-comando').style.display='block';
  document.getElementById('form-promuovi-vice').style.display='none';
}

function apriPromuoviVice(){
  _popolaSelectMembri('sel-nuovo-vice', ['comandante','vice']);
  document.getElementById('form-promuovi-vice').style.display='block';
  document.getElementById('form-passa-comando').style.display='none';
}

function confermaPassaComando(){
  var uid = document.getElementById('sel-nuovo-comandante').value;
  if(!uid){ toast('Seleziona un membro','err'); return; }
  ctConfirm('Sei sicuro di voler trasferire il comando?<br><small>Diventerai un Addetto.</small>', {title:'Passa il Comando', ico:'🎖️', ok:'Trasferisci', danger:true}).then(function(ok){
    if(!ok) return;
    AuthModule._cambiaRuolo(uid, 'comandante').then(function(){
      var me = lsG('ct_me', null);
      if(me){ me.ruolo='addetto'; lsS('ct_me',me); }
      document.getElementById('form-passa-comando').style.display='none';
      toast('Comando trasferito','ok');
      _renderStatoComando();
      if(typeof aggUI==='function') aggUI();
    }).catch(function(e){ toast('Errore: '+e.message,'err'); });
  });
}

function confermaPromuoviVice(){
  var uid = document.getElementById('sel-nuovo-vice').value;
  if(!uid){ toast('Seleziona un membro','err'); return; }
  AuthModule._cambiaRuolo(uid, 'vice').then(function(){
    document.getElementById('form-promuovi-vice').style.display='none';
    toast('Membro promosso a Vice Comandante','ok');
    _renderStatoComando();
  }).catch(function(e){ toast('Errore: '+e.message,'err'); });
}

function degradaVice(){
  var U = lsG('ct_users', []);
  if(!U.length) U = lsG('ct_u', []);
  // Multi-vice: mostra lista di tutti i vice per scegliere quale degradare
  var viceList = U.filter(function(u){ return u.ruolo==='vice' && u.stato==='approved'; });
  if(!viceList.length){ toast('Nessun Vice trovato','err'); return; }
  if(viceList.length === 1) {
    var vice = viceList[0];
    ctConfirm('Rimuovere il ruolo di Vice Comandante a <strong>'+(vice.nome||'')+' '+(vice.cognome||'')+'</strong>?', {title:'Rimuovi Vice', ico:'⬇️', ok:'Rimuovi', danger:true}).then(function(ok){
      if(!ok) return;
      var uid = vice.uid || vice.id;
      AuthModule._cambiaRuolo(uid, 'addetto').then(function(){
        toast('Vice rimosso','ok');
        _renderStatoComando();
      }).catch(function(e){ toast('Errore: '+e.message,'err'); });
    });
  } else {
    // Più vice — mostra selezione
    var opts = viceList.map(function(v){
      return '<option value="'+(v.uid||v.id)+'">'+(v.grado||'')+' '+(v.nome||'')+' '+(v.cognome||'')+'</option>';
    }).join('');
    var html = '<div id="m-degrada-vice" style="position:fixed;inset:0;z-index:200000;background:rgba(0,0,0,.7);display:flex;align-items:center;justify-content:center">'+
      '<div style="background:var(--card);border-radius:20px;padding:20px;max-width:320px;width:90%">'+
      '<div style="font-size:15px;font-weight:800;margin-bottom:14px">Rimuovi Vice Comandante</div>'+
      '<select id="sel-degrada-vice" class="fc" style="margin-bottom:14px">'+opts+'</select>'+
      '<div style="display:flex;gap:10px">'+
      '<button class="btn btn-g btn-sm" style="flex:1" onclick="document.getElementById(\'m-degrada-vice\').remove()">Annulla</button>'+
      '<button class="btn btn-d btn-sm" style="flex:1" onclick="(function(){var uid=document.getElementById(\'sel-degrada-vice\').value;document.getElementById(\'m-degrada-vice\').remove();AuthModule._cambiaRuolo(uid,\'addetto\').then(function(){toast(\'Vice rimosso\',\'ok\');_renderStatoComando();});})()">Rimuovi</button>'+
      '</div></div></div>';
    document.body.insertAdjacentHTML('beforeend', html);
  }
}

// ---- COMPRIMI IMMAGINE ----
function comprImg(file,cb){
  var TARGET=150;
  var img=new Image(),url=URL.createObjectURL(file);
  img.onload=function(){
    var cv=document.createElement('canvas');
    cv.width=TARGET;cv.height=TARGET;
    var ctx=cv.getContext('2d');
    var side=Math.min(img.width,img.height);
    var sx=(img.width-side)/2;
    var sy=(img.height-side)/2;
    ctx.drawImage(img,sx,sy,side,side,0,0,TARGET,TARGET);
    URL.revokeObjectURL(url);
    cb(cv.toDataURL('image/jpeg',0.65));
  };
  img.onerror=function(){URL.revokeObjectURL(url);cb(null);};
  img.src=url;
}

// ---- INIT ----
document.addEventListener('scroll', function(){
  var c = document.querySelector('.cont');
  var hdr = document.querySelector('.hdr');
  if(hdr && c) hdr.classList.toggle('scrolled', c.scrollTop > 8);
}, true);
window.addEventListener("DOMContentLoaded",function(){
  // ── Timeout emergenza splash: nasconde dopo 8s se Firebase non risponde ──
  // Non nasconde se Firebase sta ancora autenticando (evita flash login)
  window._splashEmergencyTimer = setTimeout(function(){
    if(typeof window._hideSplash === 'function') window._hideSplash();
    else {
      var s = document.getElementById('splash-screen');
      if(s){ s.style.opacity='0'; s.style.visibility='hidden'; setTimeout(function(){s.remove();},500); }
    }
  }, 8000);
  var U=lsG("ct_u",[]);
  // Aggiorna o crea utente admin (id=1)
  var _adminIdx = -1; for(var _ai=0;_ai<U.length;_ai++){if(U[_ai].id===1||U[_ai].nome==='admin'){_adminIdx=_ai;break;}}
  var _adminObj = {id:1,nome:'Gerry',cognome:'Scotti',pw:'admin',grado:'Gen.',ruolo:'comandante',reparto:'Varazze',nucleo:'Stazione Varazze',tipo:'ter',stato:'approved',ava:null};
  if(_adminIdx>=0){U[_adminIdx]=Object.assign({},U[_adminIdx],_adminObj);}else{U.push(_adminObj);}
  lsS('ct_u',U);




  var dtOggi = new Date().toLocaleDateString('en-CA');
  document.getElementById("mt-data").value = dtOggi;
  var lblMtData = document.getElementById("lbl-mt-data");
  if(lblMtData) lblMtData.textContent = dtOggi.split('-').reverse().join('/');
  document.querySelectorAll(".modal").forEach(function(m){
    m.addEventListener("click",function(e){if(e.target===m)closeM(m.id);});
  });
  var me=lsG("ct_me",null);
  initNotifiche();
  // ── Auth & Sync init ──
  // Aspetta FirebaseModule prima di inizializzare AuthModule
  function _initAuth() {
    if(typeof AuthModule !== "undefined") AuthModule.init();
    // Renderizza subito con dati localStorage (evita dashboard vuota al refresh)
    var _me = lsG("ct_me", null);
    if(_me) {
      // Segna sync pending finché Firebase non completa (evita "Riposo" prematuro)
      window._widgetSyncPending = true;
      aggUI();
      aggiornaWidget();
      if(typeof renderWidgetProssimo === "function") renderWidgetProssimo(_me);
      if(typeof renderWidgetMeteo    === "function") renderWidgetMeteo(_me);
      if(typeof renderTurni          === "function") renderTurni();
      if(typeof renderOggi           === "function") renderOggi();
      if(typeof stats                === "function") stats();
    }
    // Mostra popup novità sempre (loggato o no)
    if(typeof _checkNovita === 'function') _checkNovita();
    initPWA();
  }
  if(window.FirebaseModule) {
    _initAuth();
  } else {
    window.addEventListener('firebase-ready', _initAuth, { once: true });
    setTimeout(function() { if(typeof AuthModule !== "undefined") _initAuth(); }, 8000);
  }
  scheduleNotifMattutina();
  caricaTema();
  aggiornaBadgeNotif();
  // Fallback: nascondi splash dopo 6s se Firebase non risponde
  setTimeout(function(){
    if(typeof window._hideSplash === 'function') window._hideSplash();
  }, 6000);
  // Schedula notifiche appuntamenti salvati
  lsG("ct_ag",[]).forEach(function(a){if(a.notif>0)schedulaNotifAgenda(a);});
  // Pulizia widget obsoleti dal localStorage
  (function _cleanObsoleteWidgets(){
    var obsolete = ['turno', 'meteo', 'squadra', 'turni-oggi'];
    var cfg = JSON.parse(localStorage.getItem('ct_dash_widgets') || 'null');
    if(cfg) {
      var changed = false;
      obsolete.forEach(function(k){ if(k in cfg){ delete cfg[k]; changed = true; } });
      if(changed) localStorage.setItem('ct_dash_widgets', JSON.stringify(cfg));
    }
    var order = JSON.parse(localStorage.getItem('ct_dash_order') || 'null');
    if(order) {
      var newOrder = order.filter(function(k){ return obsolete.indexOf(k) === -1; });
      if(newOrder.length !== order.length) localStorage.setItem('ct_dash_order', JSON.stringify(newOrder));
    }
  })();
});

// ---- AUTH ----
function swTab(t){
  document.getElementById("tab-acc").classList.toggle("on",t==="acc");
  document.getElementById("tab-reg").classList.toggle("on",t==="reg");
  document.getElementById("f-acc").style.display=t==="acc"?"block":"none";
  document.getElementById("f-reg").style.display=t==="reg"?"block":"none";
  // scroll top del form
  window.scrollTo(0,0);
}
// ---- NOTIFICHE PRE-TURNO ----
function initNotifiche(){
  if(!("Notification" in window))return;
  // NON richiedere permesso automaticamente — solo aggiorna lo stato UI
  aggNotifStatus();
  controllaNotifiche();
  setInterval(controllaNotifiche,60000);
  // Schedula push pre-turno su Firestore (funziona anche con app chiusa)
  setTimeout(schedulaPreTurniFirebase, 3000);
}
function controllaNotifiche(){
  if(Notification.permission!=="granted")return;
  var me=lsG("ct_me",null);if(!me)return;
  var prefs=lsG("ct_notif_prefs",{mattina:true,todo:true,agenda:true,festivi:true,preturno:true});
  if(prefs.preturno===false)return;
  var preMin=lsG("ct_notif_pre",60);
  if(preMin<=0)return;
  var T=lsG("ct_t",[]);
  var ORI={mattina:"06:00",pomeriggio:"14:00",notte:"22:00"};
  var now=new Date();
  var notif=lsG("ct_notif_sent",[]);
  for(var dayOff=0; dayOff<=1; dayOff++){
    var checkDate=new Date(now);checkDate.setDate(checkDate.getDate()+dayOff);
    var ds=checkDate.getFullYear()+'-'+('0'+(checkDate.getMonth()+1)).slice(-2)+'-'+('0'+checkDate.getDate()).slice(-2);
    T.filter(function(t){return _isMyTurno(t,me)&&t.data===ds;}).forEach(function(t){
      var orStr=(t.orario&&t.orario.split('-')[0].trim())||ORI[t.tipo]||"06:00";
      // FIX orario legale/solare: costruisci la data in ora locale, non UTC
      var parts=orStr.split(':');
      var turnoTime=new Date(ds.replace(/-/g,'/'));
      turnoTime.setHours(parseInt(parts[0],10),parseInt(parts[1],10),0,0);
      var diff=(turnoTime-now)/60000;
      var notifId=t.id+'_pre'+preMin;
      if(diff>0&&diff<=(preMin+5)&&notif.indexOf(notifId)===-1){
        var titoloPre="\u23F0 C-Turni \u2014 Turno tra "+(diff>=60?Math.round(diff/60)+"h":Math.round(diff)+" min");
        var bodyPre="Turno "+(t.codice||t.tipo||'').toUpperCase()+" alle "+orStr;
        // FIX notifiche doppie: solo notifica locale in-app.
        // La push FCM è già schedulata da schedulaPreTurniFirebase — non duplicare qui.
        if("Notification" in window && Notification.permission==="granted")
          new Notification(titoloPre,{body:bodyPre,icon:_NOTIF_ICON});
        notif.push(notifId);lsS("ct_notif_sent",notif);
      }
    });
  }
}

// Schedula in anticipo le push pre-turno su Firestore (funziona anche con app chiusa)
function schedulaPreTurniFirebase(){
  var sess=lsG("ct_session",null);
  if(!sess||!sess.userId||!window.FirebaseModule)return;
  var me=lsG("ct_me",null);if(!me)return;
  var prefs=lsG("ct_notif_prefs",{preturno:true});
  if(prefs.preturno===false)return;
  var preMin=lsG("ct_notif_pre",60);if(preMin<=0)return;
  var T=lsG("ct_t",[]);
  var ORI={mattina:"06:00",pomeriggio:"14:00",notte:"22:00"};
  var now=new Date();
  var todayKey=now.toISOString().slice(0,10);
  // Reset lista schedulati se è un nuovo giorno
  var lastDay=localStorage.getItem('ct_push_sched_day');
  if(lastDay!==todayKey){
    lsS("ct_push_scheduled",[]);
    localStorage.setItem('ct_push_sched_day',todayKey);
  }
  var scheduled=lsG("ct_push_scheduled",[]);
  // Controlla i prossimi 7 giorni
  for(var dayOff=0;dayOff<=6;dayOff++){
    var checkDate=new Date(now);checkDate.setDate(checkDate.getDate()+dayOff);
    var ds=checkDate.getFullYear()+'-'+('0'+(checkDate.getMonth()+1)).slice(-2)+'-'+('0'+checkDate.getDate()).slice(-2);
    T.filter(function(t){return _isMyTurno(t,me)&&t.data===ds;}).forEach(function(t){
      var orStr=(t.orario&&t.orario.split('-')[0].trim())||ORI[t.tipo]||"06:00";
      // Valida formato HH:MM — salta turni senza orario numerico (riposo, ferie, ecc.)
      if(!/^\d{1,2}:\d{2}$/.test(orStr))return;
      // FIX orario legale/solare: costruisci la data in ora locale, non UTC
      var _parts=orStr.split(':');
      var turnoTime=new Date(ds.replace(/-/g,'/'));
      turnoTime.setHours(parseInt(_parts[0],10),parseInt(_parts[1],10),0,0);
      if(isNaN(turnoTime.getTime()))return; // data non valida
      var scheduleAt=new Date(turnoTime.getTime()-(preMin*60000));
      if(scheduleAt<=now)return;
      var pushId=t.id+'_pre'+preMin;
      if(scheduled.indexOf(pushId)!==-1)return;
      var titoloPre="\u23F0 C-Turni \u2014 Turno tra "+(preMin>=60?Math.round(preMin/60)+"h":preMin+" min");
      var bodyPre="Turno "+(t.codice||t.tipo||'').toUpperCase()+" alle "+orStr;
      window.FirebaseModule.schedulePush(sess.userId,titoloPre,bodyPre,scheduleAt.toISOString()).catch(function(){});
      scheduled.push(pushId);
    });
  }
  lsS("ct_push_scheduled",scheduled);
}


// ---- FERIE ----
var _ferieTemp=30;
function caricaSaldoFerie(){
  var me=lsG("ct_me",null);if(!me)return;
  caricaPoolLicenzeMe();
  renderFeriePoolOnImp();
  var fs=document.getElementById("ferie-saldo-n");
  if(fs){var fv=me.ferie||30;fs.textContent=fv;fs.style.color=fv<5?"var(--red)":fv<15?"var(--gold)":"var(--green)";}
  renderRecuperi();
}
function aggSeldoFerie_onImp(){caricaSaldoFerie();}
function aggiornaSaldoFerie(){caricaSaldoFerie();}
function aggiornaContatore(){
  var nEl=document.getElementById("ferie-saldo-n");
  if(!nEl)return;
  nEl.textContent=_ferieTemp;
  nEl.style.color=_ferieTemp>10?"var(--teal)":_ferieTemp>0?"var(--gold)":"var(--red)";
}

function getLicenzePool(pid){
  var P=lsG("ct_p",[]);
  var p=P.find(function(x){return x.id===pid;});
  if(!p)return[];
  var pool=p.licenzePool||[];
  pool.sort(function(a,b){return a.anno-b.anno;});
  return pool;
}
function aggiungiRimanenzaAnnoUtente(){
  var me=lsG("ct_me",null);
  if(!me){toast("Devi essere loggato","err");return;}
  var annoStr=prompt("Anno della rimanenza? (es. 2025)");
  if(!annoStr)return;
  var anno=parseInt(annoStr);
  if(isNaN(anno)||anno<2000||anno>2100){toast("Anno non valido","err");return;}
  var giorniStr=prompt("Giorni di licenza rimanenti dal "+anno+"?");
  if(!giorniStr)return;
  var giorni=parseInt(giorniStr);
  if(isNaN(giorni)||giorni<1||giorni>365){toast("Numero giorni non valido","err");return;}
  var P=lsG("ct_p",[]);
  for(var i=0;i<P.length;i++){
    if(P[i].id===me.id){
      var pool=P[i].licenzePool||[];
      var es=pool.find(function(x){return x.anno===anno;});
      if(es){
        ctConfirm('Esiste già rimanenza '+anno+' ('+es.giorni+' gg). Sostituire?', {title:'Rimanenza esistente', ico:'📅', ok:'Sostituisci'}).then(function(ok){
          if(!ok) return;
          es.giorni=giorni;
          lsS("ct_p",P); caricaPoolLicenzeMe(); caricaSaldoFerie();
          toast('Rimanenza aggiornata','ok');
        });
        return;
      }else{
        pool.push({anno:anno,giorni:giorni});
      }
      pool.sort(function(a,b){return a.anno-b.anno;});
      P[i].licenzePool=pool;
      P[i].ferieRes=pool.reduce(function(s,x){return s+x.giorni;},0);
      me.ferie=P[i].ferieRes;
      lsS("ct_me",me);
      break;
    }
  }
  lsS("ct_p",P);
  caricaPoolLicenzeMe();
  caricaSaldoFerie();
  _syncFerieFirebase();
  toast("✓ Rimanenza "+anno+": "+giorni+" giorni salvata","ok");
}
function rimuoviRimanenzaAnno(pid,anno){
  ctConfirm('Rimuovere la rimanenza per l\'anno '+anno+'?', {title:'Rimuovi Rimanenza', ico:'🗑️', ok:'Rimuovi', danger:true}).then(function(ok){
    if(!ok) return;
    var P=lsG("ct_p",[]);
    for(var i=0;i<P.length;i++){
      if(P[i].id===pid){
        P[i].licenzePool=(P[i].licenzePool||[]).filter(function(x){return x.anno!==anno;});
        P[i].ferieRes=P[i].licenzePool.reduce(function(s,x){return s+x.giorni;},0);
        var me=lsG("ct_me",null);
        if(me&&me.id===pid){me.ferie=P[i].ferieRes;lsS("ct_me",me);}
        break;
      }
    }
    lsS("ct_p",P);
    caricaPoolLicenzeMe();
    caricaSaldoFerie();
    _syncFerieFirebase();
    toast("🏖️ Rimanenza "+anno+" eliminata","ok");
  });
}
function caricaPoolLicenzeMe(){
  var me=lsG("ct_me",null);
  if(!me)return;
  var el=document.getElementById("pool-licenze-me");
  if(!el)return;
  var P=lsG("ct_p",[]);
  var p=P.find(function(x){return x.id===me.id;});
  if(!p){el.innerHTML='<div style="font-size:11px;color:var(--txt2);text-align:center;padding:8px">Nessun profilo trovato</div>';return;}
  var pool=(p.licenzePool||[]).slice().sort(function(a,b){return a.anno-b.anno;});
  var annoC=new Date().getFullYear();
  if(!pool.length){
    el.innerHTML='<div style="font-size:11px;color:var(--txt2);padding:6px 0;text-align:center">Nessuna rimanenza  usa il tasto + per aggiungerne una</div>';
    return;
  }
  el.innerHTML=pool.map(function(x){
    var col=x.giorni<=5?"var(--red)":(x.anno<annoC?"var(--gold)":"var(--green)");
    var badge=x.anno<annoC?'<span style="font-size:9px;background:rgba(212,175,55,.15);color:var(--gold);padding:1px 6px;border-radius:10px;margin-left:6px">ANNO PREC.</span>':"";
    return '<div style="display:flex;align-items:center;gap:8px;padding:7px 10px;background:var(--bg);border-radius:9px;margin-bottom:5px">'
      +'<div style="flex:1">'
      +'<span style="font-size:13px;font-weight:700;color:'+col+'">'+x.anno+'</span>'
      +'<span style="font-size:11px;color:var(--txt2);margin-left:6px">'+x.giorni+' gg rimanenti</span>'
      +badge+'</div>'
      +'<button onclick="rimuoviRimanenzaAnno('+p.id+','+x.anno+')" style="background:none;border:none;color:var(--txt3);cursor:pointer;font-size:15px;padding:2px 4px;appearance:none;-webkit-appearance:none">&#128465;</button>'
      +'</div>';
  }).join("");
}

// --------------------------------------------------
// FERIE & LICENZE POOL MULTI-ANNO  v2.6.2
// (Aggiunto su base v2.5.9  funzioni vecchie intatte)
// --------------------------------------------------
var _annoEditCorrente = null;
var _giorniEditTemp   = 0;

function getFeriePool(pid){
  // Prima prova ct_u, poi ct_me come fallback (utenti Firebase)
  var U=lsG("ct_u",[]);
  var u=U.find(function(x){return x.id===pid||x.uid===pid;});
  if(u&&u.licenzePool&&u.licenzePool.length)
    return u.licenzePool.slice().sort(function(a,b){return a.anno-b.anno;});
  // Fallback: ct_me
  var me=lsG("ct_me",null);
  if(me&&(me.id===pid||me.uid===pid)&&me.licenzePool&&me.licenzePool.length)
    return me.licenzePool.slice().sort(function(a,b){return a.anno-b.anno;});
  return [];
}

function saveFeriePool(pid,pool){
  pool.sort(function(a,b){return a.anno-b.anno;});
  var tot=pool.reduce(function(s,x){return s+x.giorni;},0);
  // Salva in ct_u
  var U=lsG("ct_u",[]);
  var trovato=false;
  for(var i=0;i<U.length;i++){
    if(U[i].id===pid||U[i].uid===pid){U[i].licenzePool=pool;U[i].ferie=tot;U[i].ferieRes=tot;trovato=true;break;}
  }
  if(!trovato){ U.push({id:pid,licenzePool:pool,ferie:tot,ferieRes:tot}); }
  lsS("ct_u",U);
  // Aggiorna ct_me
  var me=lsG("ct_me",null);
  if(me&&(me.id===pid||me.uid===pid)){me.licenzePool=pool;me.ferie=tot;me.ferieRes=tot;lsS("ct_me",me);}
  // Aggiorna UI
  var fs=document.getElementById("ferie-saldo-n");
  if(fs){fs.textContent=tot;fs.style.color=tot<5?"var(--red)":tot<15?"var(--gold)":"var(--green)";}
  var ft=document.getElementById("ferie-totale");
  if(ft){ft.textContent=tot+" gg";ft.style.color=tot<=5?"var(--red)":tot<=15?"var(--gold)":"var(--teal)";}
  // Sync Firebase
  _syncFerieFirebase();
}

function renderFeriePool(){
  var me=lsG("ct_me",null); if(!me)return;
  var el=document.getElementById("ferie-pool-list"); if(!el)return;
  var pool=getFeriePool(me.id);
  // fallback: leggi dal ct_me se ct_u non ha ancora il pool
  if(!pool.length&&me.licenzePool&&me.licenzePool.length){
    pool=me.licenzePool.slice().sort(function(a,b){return a.anno-b.anno;});
  }
  var annoC=new Date().getFullYear();
  var tot=pool.reduce(function(s,x){return s+x.giorni;},0);
  var maxGg=pool.length?Math.max.apply(null,pool.map(function(x){return x.giorni;})):1;
  if(maxGg===0)maxGg=1;
  var ft=document.getElementById("ferie-totale");
  if(ft){ft.textContent=tot+" gg";ft.style.color=tot<=5?"var(--red)":tot<=15?"var(--gold)":"var(--teal)";}
  var fs=document.getElementById("ferie-saldo-n");
  if(fs){fs.textContent=tot;fs.style.color=tot<5?"var(--red)":tot<15?"var(--gold)":"var(--green)";}
  if(!pool.length){
    el.innerHTML='<div style="text-align:center;font-size:12px;color:var(--txt2);padding:16px 0">Nessuna licenza &mdash; premi <strong>+ Aggiungi anno</strong></div>';
    return;
  }
  el.innerHTML=pool.map(function(x){
    var isOld=x.anno<annoC;
    var col=x.giorni<=5?"var(--red)":(isOld?"var(--gold)":"var(--green)");
    var pct=Math.round((x.giorni/maxGg)*100);
    var badge=isOld
      ?'<span style="font-size:9px;background:rgba(212,175,55,.15);color:var(--gold);padding:1px 7px;border-radius:10px;font-weight:700;margin-left:6px">PREC.</span>'
      :'<span style="font-size:9px;background:rgba(0,200,83,.12);color:var(--green);padding:1px 7px;border-radius:10px;font-weight:700;margin-left:6px">&#10004; ATTUALE</span>';
    return '<div style="background:var(--bg2);border-radius:12px;margin-bottom:8px;border:1px solid var(--border);overflow:hidden">'
      +'<div style="display:flex;align-items:center;gap:10px;padding:11px 13px;cursor:pointer" onclick="apriModificaAnno('+x.anno+')">'
      +'<div style="flex:1;min-width:0">'
      +'<div style="display:flex;align-items:center;flex-wrap:wrap;margin-bottom:2px">'
      +'<span style="font-size:13px;font-weight:800;color:var(--txt)">&#128197; '+x.anno+'</span>'+badge+'</div>'
      +'<div style="font-size:30px;font-weight:900;color:'+col+';line-height:1.1">'+x.giorni
      +'<span style="font-size:12px;font-weight:400;color:var(--txt2);margin-left:5px">giorni disponibili</span></div>'
      +'</div>'
      +'<button onclick="event.stopPropagation();eliminaAnnoPool('+x.anno+')" '
      +'style="background:rgba(200,16,46,.1);border:1px solid rgba(200,16,46,.25);color:var(--red);border-radius:9px;padding:7px 11px;cursor:pointer;font-size:14px;appearance:none;-webkit-appearance:none;flex-shrink:0">&#128465;</button>'
      +'</div>'
      +'<div style="height:5px;background:var(--bg);margin:0 13px 10px;border-radius:3px;overflow:hidden">'
      +'<div style="height:5px;width:'+pct+'%;background:'+col+';border-radius:3px;transition:width .5s ease"></div>'
      +'</div>'
      +'</div>';
  }).join("");
}

function apriAggiungiAnno(){
  var annoC=new Date().getFullYear();
  var old=document.getElementById('m-aggiungi-anno-bs');
  if(old)old.remove();
  var html=
    '<div id="m-aggiungi-anno-bs" style="display:flex;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:99999;align-items:flex-end;justify-content:center;backdrop-filter:blur(3px)">'
    +'<div style="background:var(--card);border-radius:24px 24px 0 0;width:100%;max-width:520px;padding:20px 20px calc(20px + env(safe-area-inset-bottom,0px));box-shadow:0 -8px 32px rgba(0,0,0,.4)">'
    +'<div style="width:36px;height:4px;background:var(--border2);border-radius:2px;margin:0 auto 16px"></div>'
    +'<div style="font-size:16px;font-weight:800;margin-bottom:16px">&#128197; Aggiungi anno licenze</div>'
    +'<div class="fg"><label>Anno</label>'
    +'<input type="number" id="aal-year" class="fc" value="'+annoC+'" min="2000" max="2100"></div>'
    +'<div class="fg"><label>Giorni disponibili</label>'
    +'<input type="number" id="aal-giorni" class="fc" value="30" min="0" max="365"></div>'
    +'<div style="display:flex;gap:10px;margin-top:4px">'
    +'<button class="btn btn-g" style="flex:1" onclick="document.getElementById(\'m-aggiungi-anno-bs\').remove()">Annulla</button>'
    +'<button class="btn btn-p" style="flex:1" onclick="_confermaAggiungiAnno()">&#10133; Aggiungi</button>'
    +'</div></div></div>';
  document.body.insertAdjacentHTML('beforeend',html);
}

function _confermaAggiungiAnno(){
  var me=lsG("ct_me",null);if(!me)return;
  var anno=parseInt((document.getElementById("aal-year")||{}).value);
  var giorni=parseInt((document.getElementById("aal-giorni")||{}).value);
  if(isNaN(anno)||anno<2000||anno>2100){toast("Anno non valido","err");return;}
  if(isNaN(giorni)||giorni<0||giorni>365){toast("Giorni non validi","err");return;}
  var pool=getFeriePool(me.id);
  var es=pool.find(function(x){return x.anno===anno;});
  if(es){
    es.giorni=giorni;
    toast("\u2714 Anno "+anno+" aggiornato: "+giorni+" gg","ok");
  } else {
    pool.push({anno:anno,giorni:giorni});
    toast("\u2714 Anno "+anno+": "+giorni+" gg aggiunti","ok");
  }
  saveFeriePool(me.id,pool);
  renderFeriePool();
  var bs=document.getElementById('m-aggiungi-anno-bs');
  if(bs)bs.remove();
}

function apriModificaAnno(anno){
  var me=lsG("ct_me",null);if(!me)return;
  var pool=getFeriePool(me.id);
  var entry=pool.find(function(x){return x.anno===anno;});
  if(!entry)return;
  _annoEditCorrente=anno;
  _giorniEditTemp=entry.giorni;
  var lbl=document.getElementById("popup-anno-label");
  var nEl=document.getElementById("popup-anno-n");
  var pop=document.getElementById("popup-anno");
  if(lbl)lbl.textContent="Anno "+anno;
  if(nEl){nEl.textContent=_giorniEditTemp;aggColorePopup();}
  if(pop){pop.style.display="block";setTimeout(function(){pop.scrollIntoView({behavior:"smooth",block:"nearest"});},100);}
}

function chiudiPopupAnno(){
  _annoEditCorrente=null;
  var pop=document.getElementById("popup-anno");
  if(pop)pop.style.display="none";
}

function stepAnnoEdit(d){
  _giorniEditTemp=Math.max(0,_giorniEditTemp+d);
  var nEl=document.getElementById("popup-anno-n");
  if(nEl){nEl.textContent=_giorniEditTemp;aggColorePopup();}
}

function aggColorePopup(){
  var nEl=document.getElementById("popup-anno-n");
  if(!nEl)return;
  nEl.style.color=_giorniEditTemp<=5?"var(--red)":_giorniEditTemp<=15?"var(--gold)":"var(--green)";
}

function salvaAnnoEdit(){
  if(_annoEditCorrente===null)return;
  var me=lsG("ct_me",null);if(!me)return;
  var pool=getFeriePool(me.id);
  var entry=pool.find(function(x){return x.anno===_annoEditCorrente;});
  if(entry)entry.giorni=_giorniEditTemp;
  saveFeriePool(me.id,pool);
  renderFeriePool();
  chiudiPopupAnno();
  toast("? Anno "+_annoEditCorrente+": "+_giorniEditTemp+" giorni salvati","ok");
}

function eliminaAnnoPool(anno){
  var me=lsG("ct_me",null);if(!me)return;
  var pool=getFeriePool(me.id).filter(function(x){return x.anno!==anno;});
  saveFeriePool(me.id,pool);
  renderFeriePool();
  toast("&#128197; Anno "+anno+" eliminato","ok");
}

function apriScalaManuale(){
  var me=lsG("ct_me",null);if(!me)return;
  var pool=getFeriePool(me.id);
  if(!pool.length){toast("Nessun anno nel pool — aggiungi prima un anno","err");return;}
  var annoC=new Date().getFullYear();
  // Preferisci l'anno più vecchio con giorni > 0 (FIFO)
  var target=pool.find(function(x){return x.giorni>0;})||pool[0];
  var opzioni=pool.map(function(x){
    return '<option value="'+x.anno+'"'+(x.anno===target.anno?' selected':'')+'>'+x.anno+' ('+x.giorni+' gg)</option>';
  }).join('');
  var html=
    '<div id="m-scala-manuale" style="display:flex;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:10000;align-items:flex-end;justify-content:center;backdrop-filter:blur(3px)">'
    +'<div style="background:var(--card);border-radius:24px 24px 0 0;width:100%;max-width:520px;padding:20px 20px calc(20px + env(safe-area-inset-bottom,0px));box-shadow:0 -8px 32px rgba(0,0,0,.4)">'
    +'<div style="width:36px;height:4px;background:var(--border2);border-radius:2px;margin:0 auto 16px"></div>'
    +'<div style="font-size:16px;font-weight:800;margin-bottom:4px">&#8722; Scala giorni manualmente</div>'
    +'<div style="font-size:11px;color:var(--txt2);margin-bottom:16px">Usa questa funzione per turni precedenti all\'iscrizione o correzioni manuali.</div>'
    +'<div class="fg"><label>Anno da scalare</label>'
    +'<select id="sm-anno" class="fc">'+opzioni+'</select></div>'
    +'<div class="fg"><label>Giorni da sottrarre</label>'
    +'<input type="number" id="sm-giorni" class="fc" value="1" min="1" max="365"></div>'
    +'<div class="fg"><label>Motivo (opzionale)</label>'
    +'<input type="text" id="sm-motivo" class="fc" placeholder="es. Ferie luglio 2024" maxlength="60"></div>'
    +'<div style="display:flex;gap:10px;margin-top:4px">'
    +'<button class="btn btn-g" style="flex:1" onclick="document.getElementById(\'m-scala-manuale\').remove()">Annulla</button>'
    +'<button class="btn btn-p" style="flex:1;background:var(--teal)" onclick="_salvaScalaManuale()">&#8722; Scala</button>'
    +'</div></div></div>';
  document.body.insertAdjacentHTML('beforeend',html);
}

function _salvaScalaManuale(){
  var me=lsG("ct_me",null);if(!me)return;
  var anno=parseInt((document.getElementById('sm-anno')||{}).value);
  var giorni=parseInt((document.getElementById('sm-giorni')||{}).value);
  var motivo=((document.getElementById('sm-motivo')||{}).value||'').trim();
  if(isNaN(anno)||isNaN(giorni)||giorni<=0){toast("Dati non validi","err");return;}
  var pool=getFeriePool(me.id);
  var entry=pool.find(function(x){return x.anno===anno;});
  if(!entry){toast("Anno non trovato nel pool","err");return;}
  if(giorni>entry.giorni){
    ctConfirm('Stai scalando '+giorni+' giorni ma ne hai solo '+entry.giorni+' per il '+anno+'. Continui?', {title:'Conferma Scala', ico:'⚠️', ok:'Continua'}).then(function(ok){
      if(!ok) return;
      entry.giorni=Math.max(0,entry.giorni-giorni);
      lsS("ct_p",P); caricaPoolLicenzeMe(); caricaSaldoFerie();
      toast("Giorni scalati","ok");
    });
    return;
  }
  entry.giorni=Math.max(0,entry.giorni-giorni);
  saveFeriePool(me.id,pool);
  renderFeriePool();
  _syncFerieFirebase();
  document.getElementById('m-scala-manuale').remove();
  toast("&#127958; Scalati "+giorni+" gg dal "+anno+(motivo?" — "+motivo:""),"ok");
}

function renderFeriePoolOnImp(){
  var me=lsG("ct_me",null);if(!me)return;
  // Migrazione: usa ct_u come storage pool
  var U=lsG("ct_u",[]);
  var u=U.find(function(x){return x.id===me.id;});
  if(u&&(!u.licenzePool||!u.licenzePool.length)){
    var annoC=new Date().getFullYear();
    var giorni=u.ferieRes||u.ferie||me.ferie||me.ferieRes||30;
    u.licenzePool=[{anno:annoC,giorni:giorni}];
    u.ferie=giorni; u.ferieRes=giorni;
    lsS("ct_u",U);
    me.licenzePool=u.licenzePool; me.ferie=giorni; me.ferieRes=giorni;
    lsS("ct_me",me);
  }
  renderFeriePool();
  renderRecuperi();
}

function stepFerie(delta){
  _ferieTemp=Math.max(0,_ferieTemp+delta);
  aggiornaContatore();
}
function salvaFerie(){
  var okEl=document.getElementById("ferie-ok");
  if(okEl)okEl.classList.remove("on");
  var me=lsG("ct_me",null);if(!me){toast("Devi essere loggato","err");return;}
  // Salva nel profilo utente
  me.ferieRes=_ferieTemp;
  lsS("ct_me",me);
  // Aggiorna anche in ct_u
  var U=lsG("ct_u",[]);
  for(var i=0;i<U.length;i++){if(U[i].nome===me.nome){U[i].ferieRes=_ferieTemp;break;}}
  lsS("ct_u",U);
  // Aggiorna anche in ct_p se esiste
  var P=lsG("ct_p",[]);
  for(var i=0;i<P.length;i++){if(P[i].nome===me.nome){P[i].ferieRes=_ferieTemp;break;}}
  lsS("ct_p",P);
  renderPers();
  if(okEl){okEl.classList.add("on");setTimeout(function(){okEl.classList.remove("on");},3000);}
  toast("Saldo ferie salvato: "+_ferieTemp+" giorni","ok");
}


// ---- WIDGET TURNO OGGI ----
var _tipoIco={
  mattina:"🌅",pomeriggio:"☀️",ml:"🌄",pl:"🌞",
  notte:"🌙",sera:"🌆",
  riposo:"🛋️",recupero:"♻️",
  ferie:"🏖️",licenza:"📚","937":"🏝️",
  "104":"♿",ls:"🩸",
  permesso:"📋",fest:"🎉",
  corso:"🎓",esame:"📝"
};
var _tipoBg={
  mattina:"linear-gradient(135deg,#e65100 0%,#bf360c 100%)",
  ml:"linear-gradient(135deg,#e65100 0%,#bf360c 100%)",
  pomeriggio:"linear-gradient(135deg,#e65100 0%,#6a1a00 100%)",
  pl:"linear-gradient(135deg,#e65100 0%,#6a1a00 100%)",
  notte:"linear-gradient(135deg,#1a237e 0%,#0d1642 100%)",
  sera:"linear-gradient(135deg,#1a237e 0%,#0d1642 100%)",
  riposo:"linear-gradient(135deg,#1b5e20 0%,#0a2e0f 100%)",
  recupero:"linear-gradient(135deg,#1b5e20 0%,#0a2e0f 100%)",
  ferie:"linear-gradient(135deg,#006064 0%,#00272a 100%)",
  "937":"linear-gradient(135deg,#006064 0%,#00272a 100%)",
  licenza:"linear-gradient(135deg,#004d40 0%,#001a16 100%)",
  "104":"linear-gradient(135deg,#4a148c 0%,#1a0533 100%)",
  ls:"linear-gradient(135deg,#7f0000 0%,#3d0000 100%)",
  permesso:"linear-gradient(135deg,#880e4f 0%,#3d0020 100%)",
  fest:"linear-gradient(135deg,#880e4f 0%,#3d0020 100%)",
  corso:"linear-gradient(135deg,#0d47a1 0%,#051e45 100%)",
  esame:"linear-gradient(135deg,#0d47a1 0%,#051e45 100%)"
};
// Mappa codice turno ? tipo animazione
var _codiceToTipo={
  "M":"mattina","ML":"ml","P":"pomeriggio","PL":"pl",
  "N":"notte","S":"sera","R":"riposo","RR":"recupero",
  "L":"ferie","LICSTU":"licenza","ESAME":"esame","CORSO":"corso",
  "FEST":"fest","104":"104","LS":"ls","937":"937"
};
// ── Helper: riconosce se un turno appartiene all'utente loggato ──
// Controlla pid numerico, uid Firebase, ct_my_pid, e pnome token-based case-insensitive
function _isMyTurno(t, me) {
  if(!t || !me) return false;
  var myPid = me.myPid || localStorage.getItem('ct_my_pid');
  // Match per id/uid/pid salvato
  if(t.pid == me.id || t.pid === me.uid || (myPid && t.pid == myPid)) return true;
  // Match per pnome: tokenizza e verifica che tutti i token di nome+cognome siano presenti in pnome
  if(t.pnome && (me.nome || me.cognome)) {
    var pnTokens = (t.pnome || '').toLowerCase().replace(/[^a-z\u00c0-\u024f\s]/gi,'').split(/\s+/).filter(function(x){ return x.length > 1; });
    var n = (me.nome    || '').toLowerCase().trim();
    var c = (me.cognome || '').toLowerCase().trim();
    // Costruisce i token dell'utente (nome e cognome separati)
    var myTokens = [n, c].filter(function(x){ return x.length > 1; });
    // Match: tutti i token dell'utente devono essere presenti nei token del pnome
    if(myTokens.length > 0 && myTokens.every(function(mt){
      return pnTokens.some(function(pt){ return pt === mt || pt.indexOf(mt) !== -1 || mt.indexOf(pt) !== -1; });
    })) {
      // Salva il pid per i prossimi confronti (localStorage + Firebase profilo)
      var pidStr = String(t.pid);
      localStorage.setItem('ct_my_pid', pidStr);
      if(!me.myPid || me.myPid !== pidStr) {
        me.myPid = pidStr;
        localStorage.setItem('ct_me', JSON.stringify(me));
        // Persiste su Firebase in background
        var _sess = (typeof lsG === 'function') ? lsG('ct_session', null) : null;
        if(_sess && _sess.userId && window.FirebaseModule) {
          window.FirebaseModule.saveUserProfile(_sess.userId, me, me.reparto).catch(function(){});
        }
      }
      return true;
    }
  }
  return false;
}

function aggiornaWidget(){
  var me=lsG("ct_me",null);
  var w=document.getElementById("widget-oggi");
  if(!me||!w)return;
  var _now=new Date();
  var oggi=_now.getFullYear()+'-'+('0'+(_now.getMonth()+1)).slice(-2)+'-'+('0'+_now.getDate()).slice(-2);
  var T=lsG("ct_t",[]);
  var mioTurno=null;
  for(var i=0;i<T.length;i++){
    if(_isMyTurno(T[i],me)&&T[i].data===oggi){mioTurno=T[i];break;}
  }  var inner=document.getElementById("w-inner");

  // Popola sempre avatar e nome utente
  var wAva=document.getElementById("w-ava");
  if(wAva){
    if(me.ava){
      wAva.style.backgroundImage="url("+me.ava+")";
      wAva.style.backgroundSize="cover";
      wAva.style.backgroundPosition="center";
      wAva.innerHTML="";
    } else {
      wAva.style.backgroundImage="";
      var ini=((me.nome||"?").charAt(0)+(me.cognome||"").charAt(0)).toUpperCase()||"?";
      wAva.innerHTML="<span style=\"font-size:18px;font-weight:800;color:#fff\">"+ini+"</span>";
    }
  }
  var wNome=document.getElementById("w-nome-utente");
  if(wNome) wNome.textContent=((me.nome||"")+" "+(me.cognome||"")).trim()||me.nome||"";

  var titoloTipoMap={
    mattina:"Mattina",ml:"Mattina Lunga",pomeriggio:"Pomeriggio",pl:"Pomeriggio Lungo",
    notte:"Notte",sera:"Sera",riposo:"Riposo",recupero:"Recupero Riposo",
    ferie:"Ferie","937":"Licenza 937",licenza:"Lic. Studio",
    "104":"Art. 104","ls":"Donaz. Sangue / Malattia",
    permesso:"Permesso",fest:"Festivit",corso:"Corso",esame:"Esame",
    obbm:"Obbligatorio Mattina",obbp:"Obbligatorio Pomeriggio"
  };
  // Risolvi tipo da codice se disponibile
  var tipoRisolto = mioTurno ? (_codiceToTipo[mioTurno.codice] || mioTurno.tipo) : "riposo";

  // Rimuovi vecchie classi animazione
  if(inner){
    inner.className=inner.className.replace(/\bwdg-anim-\S+/g,"").trim();
    inner.classList.add("wdg-anim-"+tipoRisolto);
  }

  if(mioTurno){
    w.style.display="block";
    if(inner&&_tipoBg[tipoRisolto])inner.style.background=_tipoBg[tipoRisolto];
    var ico=_tipoIco[tipoRisolto]||"&#128197;";
    document.getElementById("w-ico").innerHTML=ico;
    document.getElementById("w-bg-ico").innerHTML=ico;
    document.getElementById("w-tipo").textContent=titoloTipoMap[tipoRisolto]||mioTurno.tipo;
    document.getElementById("w-orario").textContent=mioTurno.orario||"";
    document.getElementById("w-codice").textContent=mioTurno.codice||"";
    if(mioTurno.note){
      document.getElementById("w-nota").textContent=mioTurno.note;
      document.getElementById("w-nota").style.display="block";
    }
  }else{
    w.style.display="block";
    if(inner) inner.style.background="linear-gradient(135deg,#1a3a6e 0%,#0a1628 100%)";
    // Se la sync Firebase è ancora in corso, non mostrare "Riposo" prematuramente
    if(window._widgetSyncPending) {
      document.getElementById("w-ico").innerHTML="⏳";
      document.getElementById("w-bg-ico").innerHTML="⏳";
      document.getElementById("w-tipo").textContent="Sincronizzazione...";
      document.getElementById("w-orario").textContent="Caricamento turni in corso";
      document.getElementById("w-codice").textContent="";
    } else {
      document.getElementById("w-ico").innerHTML="🛋️";
      document.getElementById("w-bg-ico").innerHTML="🛋️";
      document.getElementById("w-tipo").textContent="Riposo";
      document.getElementById("w-orario").textContent="Nessun turno assegnato";
      document.getElementById("w-codice").textContent="";
    }
  }

  // Colleghi in servizio oggi (escludi me stesso)
  var turniOggi=T.filter(function(t){return t.data===oggi && t.pid!=me.id && t.pid!==me.uid;});
  var wColWrap=document.getElementById("w-colleghi-wrap");
  var wCol=document.getElementById("w-colleghi");
  if(wCol && turniOggi.length>0){
    var P=lsG("ct_p",[]);
    wCol.innerHTML=turniOggi.map(function(t){
      // FIX punto interrogativo: cerca per id, uid o nome diretto dal turno
      var p=P.find(function(x){return x.id===t.pid||x.uid===t.pid;});
      var nomeBreve=p?(p.nome||''):(t.pnome||t.nome||'');
      if(!nomeBreve)return ''; // salta se non c'è proprio nessun nome
      var ini=nomeBreve.charAt(0).toUpperCase()+(p&&p.cognome?p.cognome.charAt(0).toUpperCase():'');
      var icoT=_tipoIco[t.tipo]||"&#128197;";
      return "<div style=\"display:flex;align-items:center;gap:4px;background:rgba(255,255,255,.1);border-radius:20px;padding:3px 8px 3px 4px\">"+
        "<div style=\"width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;flex-shrink:0\">"+ini+"</div>"+
        "<span style=\"font-size:10px;font-weight:600;opacity:.9\">"+nomeBreve+"</span>"+
        "<span style=\"font-size:11px\">"+icoT+"</span>"+
        "</div>";
    }).filter(Boolean).join("");
    if(wColWrap) wColWrap.style.display=wCol.innerHTML?"block":"none";
  } else {
    if(wColWrap) wColWrap.style.display="none";
  }
  // Aggiorna Hero Card e Ambient Glow
  if(typeof aggiornaHeroCard === 'function') aggiornaHeroCard();
  // Aggiorna Squadra Ibrida
  if(typeof aggiornaSquadra === 'function') aggiornaSquadra();
}

// ---- HERO CARD + AMBIENT GLOW (Task 1 & 2) ----
var _TURNO_ATMOSFERA = {
  mattina:'alba', ml:'alba',
  pomeriggio:'tramonto', pl:'tramonto',
  notte:'crepuscolo', sera:'crepuscolo',
  riposo:'riposo', recupero:'riposo', ferie:'oasi',
  '937':'oasi', '104':'oasi', ls:'oasi', licenza:'oasi',
  permesso:'oasi', fest:'oasi', corso:'oasi', esame:'oasi',
  obbm:'alba', obbp:'tramonto'
};
var _TURNO_ICO_HERO = {
  mattina:'☀️', ml:'🌅', pomeriggio:'🌆', pl:'🌇',
  notte:'🌙', sera:'🌃', riposo:'🛋️', recupero:'🛋️',
  ferie:'🏖️', '937':'📋', '104':'📋', ls:'🩸',
  licenza:'📚', permesso:'📝', fest:'🎉', corso:'📖', esame:'✏️',
  obbm:'🔶', obbp:'🔷'
};
var _TURNO_SIGLA = {
  mattina:'M', ml:'ML', pomeriggio:'P', pl:'PL',
  notte:'N', sera:'S', riposo:'R', recupero:'RR',
  ferie:'F', '937':'937', '104':'104', ls:'LS',
  licenza:'LIC', permesso:'PER', fest:'FEST', corso:'COR', esame:'ES',
  obbm:'OBBM', obbp:'OBBP'
};

function aggiornaHeroCard(){
  var me = lsG('ct_me', null);
  if(!me) return;

  // ── Recupero foto robusto: ct_me → ct_session → ct_p ──
  var ava = me.ava || me.fotoURL || null;
  if(!ava || (!ava.startsWith('http') && !ava.startsWith('data:'))) {
    var sess = lsG('ct_session', null);
    if(sess && (sess.ava || sess.fotoURL)) ava = sess.ava || sess.fotoURL;
  }
  if(!ava || (!ava.startsWith('http') && !ava.startsWith('data:'))) {
    var P = lsG('ct_p', []);
    var myPid = localStorage.getItem('ct_my_pid');
    var pMe = P.find(function(p){ return p.uid === me.uid || String(p.id) === String(myPid); });
    if(pMe && pMe.ava && pMe.ava.startsWith('http')) ava = pMe.ava;
  }
  // Se trovata, aggiorna ct_me per i prossimi render
  if(ava && ava.startsWith('http') && (!me.ava || !me.ava.startsWith('http'))) {
    me.ava = ava;
    lsS('ct_me', me);
  }

  var now = new Date();
  var oggi = now.getFullYear()+'-'+('0'+(now.getMonth()+1)).slice(-2)+'-'+('0'+now.getDate()).slice(-2);
  var T = lsG('ct_t', []);
  var mioTurno = T.find(function(t){ return _isMyTurno(t, me) && t.data === oggi; });
  var tipo = mioTurno ? (_codiceToTipo[mioTurno.codice] || mioTurno.tipo || 'riposo') : 'riposo';

  // Atmosfera
  var atmosfera = _TURNO_ATMOSFERA[tipo] || 'riposo';
  document.body.setAttribute('data-atmosfera', atmosfera);

  // Saluto contestuale
  var h = now.getHours();
  var saluto = h < 12 ? 'Buongiorno' : h < 18 ? 'Buon pomeriggio' : 'Buonasera';
  var nomeBreve = me.nome || (me.cognome||'').split(' ')[0] || '—';
  var greetSub = document.getElementById('hero-greeting-sub');
  var greetName = document.getElementById('hero-greeting-name');
  if(greetSub) greetSub.textContent = saluto;
  if(greetName) greetName.textContent = nomeBreve;

  // Foto profilo utente
  var heroAva = document.getElementById('hero-user-ava');
  if(heroAva){
    if(ava && (ava.startsWith('http') || ava.startsWith('data:'))){
      heroAva.style.backgroundImage = 'url('+ava+')';
      heroAva.style.backgroundSize = 'cover';
      heroAva.style.backgroundPosition = 'center';
      heroAva.textContent = '';
    } else {
      heroAva.style.backgroundImage = '';
      heroAva.textContent = (nomeBreve.charAt(0)||'?').toUpperCase();
    }
  }

  // Icona e sigla
  var ico = _TURNO_ICO_HERO[tipo] || '🛋️';
  var sigla = (mioTurno && mioTurno.codice) ? mioTurno.codice : (_TURNO_SIGLA[tipo] || tipo.toUpperCase());
  var orario = (mioTurno && mioTurno.orario) ? mioTurno.orario : 'Nessun turno';

  var heroIco = document.getElementById('hero-tonal-ico');
  var heroSigla = document.getElementById('hero-sigla');
  var heroOrario = document.getElementById('hero-orario');
  var prevIco = heroIco ? heroIco.getAttribute('data-prev-ico') : null;
  if(heroIco) heroIco.textContent = ico;
  if(heroSigla) heroSigla.textContent = sigla;
  if(heroOrario) heroOrario.textContent = orario;
  if(heroIco && ico !== prevIco) {
    heroIco.setAttribute('data-prev-ico', ico);
    if(typeof _animateHeroIcon === 'function') _animateHeroIcon();
  }

  // Active Ring
  var ring = document.getElementById('hero-ring-fill');
  if(ring && mioTurno && mioTurno.orario && mioTurno.orario.indexOf('-') > 0){
    var parts = mioTurno.orario.split('-');
    var startParts = parts[0].trim().split(':');
    var endParts = parts[1].trim().split(':');
    var startMin = parseInt(startParts[0])*60 + parseInt(startParts[1]||0);
    var endMin = parseInt(endParts[0])*60 + parseInt(endParts[1]||0);
    if(endMin < startMin) endMin += 1440;
    var nowMin = now.getHours()*60 + now.getMinutes();
    var elapsed = nowMin - startMin;
    if(elapsed < 0) elapsed = 0;
    var total = endMin - startMin;
    var pct = total > 0 ? Math.min(1, elapsed / total) : 0;
    ring.style.strokeDashoffset = 326.7 * (1 - pct);
  } else if(ring){
    ring.style.strokeDashoffset = 326.7;
  }
}

// ---- SQUADRA IBRIDA (Task 4) ----
function aggiornaSquadra(){
  var me = lsG('ct_me', null);
  if(!me) return;
  var now = new Date();
  var oggi = now.getFullYear()+'-'+('0'+(now.getMonth()+1)).slice(-2)+'-'+('0'+now.getDate()).slice(-2);
  var T = lsG('ct_t', []);
  var P = lsG('ct_p', []);
  // Arricchisci ct_p con utenti Firebase (ct_users) per avere foto aggiornate
  var fbUsers = lsG('ct_users', []);
  var container = document.getElementById('w-squadra-list');
  if(!container) return;
  var turniOggi = T.filter(function(t){ return t.data === oggi; });

  // Mappa pid → turno (supporta sia id numerico che uid stringa)
  var pidInServizio = {};
  turniOggi.forEach(function(t){
    pidInServizio[String(t.pid)] = t;
  });

  // Costruisci lista persone deduplicata
  // Chiave di dedup: uid Firebase se disponibile, altrimenti nome normalizzato
  var persone = [];
  var vistiUid  = {};  // uid Firebase
  var vistiId   = {};  // id numerico ct_p
  var vistiNome = {};  // nome normalizzato (fallback)

  function _normNome(n){ return (n||'').toLowerCase().replace(/\s+/g,' ').trim(); }

  // Funzione per trovare la foto aggiornata da ct_users
  function _getAvaFromFb(p) {
    if(p.ava && p.ava.startsWith('https')) return p.ava;
    // Cerca in ct_users per uid o nome
    var fbU = null;
    if(p.uid) fbU = fbUsers.find(function(u){ return u.uid === p.uid; });
    if(!fbU && p.nome) {
      var pn = _normNome(p.nome);
      fbU = fbUsers.find(function(u){
        var un = _normNome((u.cognome||'')+' '+(u.nome||''));
        var un2 = _normNome((u.nome||'')+' '+(u.cognome||''));
        return un === pn || un2 === pn;
      });
    }
    return (fbU && fbU.ava && fbU.ava.startsWith('https')) ? fbU.ava : (p.ava || null);
  }

  // 1. Aggiungi persone da ct_p
  P.forEach(function(p){
    var idStr = String(p.id);
    var uid   = p.uid || null;
    var nome  = _normNome(p.nome);
    // Salta se già visto per uid o id
    if(uid && vistiUid[uid]) return;
    if(vistiId[idStr]) return;
    if(nome && vistiNome[nome]) return;
    if(uid)   vistiUid[uid]   = true;
    vistiId[idStr] = true;
    if(nome)  vistiNome[nome] = true;
    var inServizio = !!pidInServizio[idStr] || (uid && !!pidInServizio[uid]);
    var ava = _getAvaFromFb(p);
    persone.push({ nome: p.nome||'', cognome: p.cognome||'', ava: ava, inServizio: inServizio });
  });

  // 2. Aggiungi persone dai turni di oggi non ancora in ct_p
  turniOggi.forEach(function(t){
    var pidStr = String(t.pid);
    var nomeBreve = t.pnome || t.nome || '';
    if(!nomeBreve) return;
    var nome = _normNome(nomeBreve);
    // Salta se già visto per pid, uid o nome
    if(vistiId[pidStr]) return;
    if(vistiUid[pidStr]) return;
    if(nome && vistiNome[nome]) return;
    vistiId[pidStr] = true;
    if(nome) vistiNome[nome] = true;
    // Cerca foto in ct_users
    var fbU = fbUsers.find(function(u){
      return u.uid === pidStr || _normNome((u.cognome||'')+' '+(u.nome||'')) === nome || _normNome((u.nome||'')+' '+(u.cognome||'')) === nome;
    });
    var ava = (fbU && fbU.ava && fbU.ava.startsWith('https')) ? fbU.ava : null;
    persone.push({ nome: nomeBreve, cognome: '', ava: ava, inServizio: true });
  });

  if(!persone.length){
    container.innerHTML = '<div style="font-size:12px;color:var(--txt2);padding:8px 0">Nessun collega trovato</div>';
    return;
  }

  persone.sort(function(a,b){ return (b.inServizio?1:0) - (a.inServizio?1:0); });

  container.innerHTML = persone.slice(0,12).map(function(p){
    var ini = ((p.nome||'?').charAt(0) + (p.cognome||'').charAt(0)).toUpperCase() || '?';
    var nomeBreve = (p.nome||'').split(' ')[0];
    var avatarContent = p.ava
      ? '<img src="'+p.ava+'" alt="'+ini+'" style="width:100%;height:100%;object-fit:cover;border-radius:50%">'
      : '<span>'+ini+'</span>';
    var liveBadge = p.inServizio ? '<div class="squadra-live-badge"></div>' : '';
    return '<div class="squadra-avatar">'
      + '<div class="squadra-avatar-circle' + (p.inServizio ? ' squadra-in-servizio' : '') + '">'+avatarContent+liveBadge+'</div>'
      + '<div class="squadra-nome">'+nomeBreve+'</div>'
      + '</div>';
  }).join('');
}

// ---- MODALITÀ FOCUS (RIMOSSA — Task 1) ----
// La funzione è mantenuta come stub per retrocompatibilità con eventuali chiamate residue
function aggiornaFocus(){
  // Focus Mode rimossa — la Hero Card sostituisce questa funzionalità
  aggiornaHeroCard();
  var focusEl = document.getElementById('widget-focus');
  if(focusEl) focusEl.style.display='none';
}

// ---- PWA ----
var _pwaPrompt=null;
// Icona notifiche (SVG inline, non richiede file esterno)
var _NOTIF_ICON='data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 192 192%22%3E%3Crect width%3D%22192%22 height%3D%22192%22 rx%3D%2240%22 fill%3D%22%230d1b2a%22%2F%3E%3Cpolygon points%3D%2296%2C22 108%2C62 148%2C62 116%2C86 128%2C126 96%2C102 64%2C126 76%2C86 44%2C62 84%2C62%22 fill%3D%22%23c8a84b%22%2F%3E%3C%2Fsvg%3E';
function initPWA(){
  // Il manifest è già impostato nell'<head> — non sovrascrivere
  // Intercetta evento beforeinstallprompt
  window.addEventListener("beforeinstallprompt",function(e){
    e.preventDefault();_pwaPrompt=e;
    var b=document.getElementById("pwa-install-banner");
    if(b)b.classList.add("on");
  });
  window.addEventListener("appinstalled",function(){
    var b=document.getElementById("pwa-install-banner");
    if(b)b.classList.remove("on");
    toast("C-Turni installata!","ok");
  });
  // iOS Safari: mostra banner manuale
  var isIOS=/iphone|ipad|ipod/i.test(navigator.userAgent);
  var isStandalone=window.navigator.standalone||window.matchMedia('(display-mode: standalone)').matches;
  var _pwaDismissed=localStorage.getItem('ct_pwa_dismissed');
  if(!isStandalone&&!_pwaDismissed){
    if(isIOS){
      var b=document.getElementById("pwa-install-banner");
      if(b){
        var btnInst=b.querySelector("button[onclick='pwaInstall()']");
        if(btnInst)btnInst.textContent="Come installare";
        b.classList.add("on");
      }
    } else {
      // Android/Desktop: se beforeinstallprompt non scatta entro 3s, mostra banner manuale
      setTimeout(function(){
        if(!_pwaPrompt&&!isStandalone&&!localStorage.getItem('ct_pwa_dismissed')){
          var b=document.getElementById("pwa-install-banner");
          if(b&&!b.classList.contains("on")){
            var btnInst=b.querySelector("button[onclick='pwaInstall()']");
            if(btnInst)btnInst.textContent="Come installare";
            b.classList.add("on");
          }
        }
      },3000);
    }
  }
}
function pwaInstall(){
  if(_pwaPrompt){
    _pwaPrompt.prompt();
    _pwaPrompt.userChoice.then(function(){_pwaPrompt=null;});
    document.getElementById("pwa-install-banner").classList.remove("on");
  }else{
    // iOS o browser senza prompt: mostra modal istruzioni
    document.getElementById("pwa-install-banner").classList.remove("on");
    var m = document.getElementById("m-pwa-install");
    if(m){ m.style.display="flex"; }
  }
}

// ---- ESPORTA PDF ----
function esportaPDF(){
  var me=lsG("ct_me",null);
  var mN=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
  var now=new Date();
  var ph=document.getElementById("print-header");
  var pp=document.getElementById("print-periodo");
  if(ph)ph.style.display="block";
  if(pp)pp.textContent=(me?"Operatore: "+me.nome+" | ":"")+"Mese: "+mN[now.getMonth()]+" "+now.getFullYear()+" | Stampato il: "+now.toLocaleDateString("it-IT");
  // Filtra turni del mese corrente
  var T=lsG("ct_t",[]);var P=lsG("ct_p",[]);
  var Tf=T.filter(function(t){var d=new Date(t.data+"T00:00:00");return d.getFullYear()===now.getFullYear()&&d.getMonth()===now.getMonth();});
  Tf.sort(function(a,b){return a.data>b.data?1:-1;});
  // Costruisci tabella temporanea per la stampa
  var tbl='<table id="print-table" style="margin-top:8px"><thead><tr><th>Data</th><th>Persona</th><th>Grado</th><th>Tipo Turno</th><th>Orario</th><th>Cod.</th></tr></thead><tbody>';
  if(!Tf.length){tbl+='<tr><td colspan="6" style="text-align:center;color:#888">Nessun turno nel mese</td></tr>';}
  else{
    Tf.forEach(function(t){
      var p=P.find(function(x){return x.id===t.pid;});
      var gr=p?p.grado:"";
      var d=new Date(t.data+"T00:00:00");
      var ds=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
      tbl+='<tr><td>'+ds+'</td><td>'+t.pnome+'</td><td>'+gr+'</td><td style="text-transform:capitalize">'+t.tipo+'</td><td>'+t.orario+'</td><td>'+( t.codice||"")+'</td></tr>';
    });
  }
  tbl+='</tbody></table>';
  var old=document.getElementById("print-table");if(old)old.remove();
  var div=document.createElement("div");div.innerHTML=tbl;
  ph.parentNode.insertBefore(div.firstChild,ph.nextSibling);
  setTimeout(function(){
    window.print();
    setTimeout(function(){
      if(ph)ph.style.display="none";
      var t2=document.getElementById("print-table");if(t2)t2.remove();
    },1000);
  },200);
}

// ---- NOTIFICA MATTUTINA ----
function scheduleNotifMattutina(){
  var prefs=lsG("ct_notif_prefs",{mattina:true});
  if(prefs.mattina===false)return;
  var now=new Date();
  var target=new Date();target.setHours(6,0,0,0);
  if(now>=target)target.setDate(target.getDate()+1);
  var ms=target-now;

  // Schedula push FCM subito con orario preciso (domani alle 06:00)
  // Evita duplicati: schedula solo una volta per giorno
  var me=lsG("ct_me",null);
  if(me){
    var oggi=target.toLocaleDateString('sv-SE'); // FIX: usa data locale, non UTC (evita sfasamento orario legale)
    var _matKey='ct_mat_scheduled_'+oggi;
    if(!localStorage.getItem(_matKey)){
      var T=lsG("ct_t",[]);
      var t=null;for(var i=0;i<T.length;i++){if(_isMyTurno(T[i],me)&&T[i].data===oggi){t=T[i];break;}}
      if(t){
        var titoliN={mattina:"\u2600\uFE0F Mattina",pomeriggio:"\u2600\uFE0F Pomeriggio",notte:"\uD83C\uDF19 Notte"};
        var titoloMat="C-Turni \u2014 Buongiorno "+me.nome;
        var bodyMat="Oggi hai il turno "+(titoliN[t.tipo]||t.tipo)+" | "+(t.orario||"");
        var sess2=lsG("ct_session",null);
        if(sess2&&sess2.userId&&window.FirebaseModule){
          window.FirebaseModule.schedulePush(sess2.userId,titoloMat,bodyMat,target.toISOString()).catch(function(){});
          localStorage.setItem(_matKey,'1');
          // Pulisci chiavi vecchie (>2 giorni fa)
          var ieri=new Date(target);ieri.setDate(ieri.getDate()-2);
          localStorage.removeItem('ct_mat_scheduled_'+ieri.toISOString().slice(0,10));
        }
      }
    }
  }

  setTimeout(function(){
    scheduleNotifMattutina();
    var prefs2=lsG("ct_notif_prefs",{mattina:true});
    if(prefs2.mattina===false)return;
    var me2=lsG("ct_me",null);if(!me2)return;
    var oggiStr=new Date().toISOString().slice(0,10);
    var T2=lsG("ct_t",[]);
    var t2=null;for(var j=0;j<T2.length;j++){if(_isMyTurno(T2[j],me2)&&T2[j].data===oggiStr){t2=T2[j];break;}}
    if(t2){
      var titoliN2={mattina:"\u2600\uFE0F Mattina",pomeriggio:"\u2600\uFE0F Pomeriggio",notte:"\uD83C\uDF19 Notte"};
      var titoloMat2="C-Turni \u2014 Buongiorno "+me2.nome;
      var bodyMat2="Oggi hai il turno "+(titoliN2[t2.tipo]||t2.tipo)+" | "+(t2.orario||"");
      if("Notification" in window && Notification.permission==="granted")
        new Notification(titoloMat2,{body:bodyMat2,icon:_NOTIF_ICON});
    }
  },Math.min(ms,2147483647));
  caricaFontSize();
}


// ---- FESTIVIT ITALIANE ----
function getNomeFestivo(ds){
  // Restituisce nome festivit oppure null
  // REGOLA: domeniche NON conteggiate (solo festivit infrasettimanali)
  var d=_parseDate(ds);
  if(d.getDay()===0)return null; // domenica: non conta
  var mm=("0"+(d.getMonth()+1)).slice(-2);
  var gg=("0"+d.getDate()).slice(-2);
  var FISSE={
    "01-01":"Capodanno (1 Gennaio)",
    "06-01":"Epifania (6 Gennaio)",
    "04-25":"Festa della Liberazione (25 Aprile)",
    "05-01":"Festa del Lavoro (1 Maggio)",
    "06-02":"Festa della Repubblica (2 Giugno)",
    "08-15":"Ferragosto (15 Agosto)",
    "11-01":"Ognissanti (1 Novembre)",
    "12-08":"Immacolata Concezione (8 Dicembre)",
    "12-25":"Natale (25 Dicembre)",
    "12-26":"Santo Stefano (26 Dicembre)"
  };
  if(FISSE[mm+"-"+gg])return FISSE[mm+"-"+gg];
  // Calcolo Pasqua
  var y=d.getFullYear();
  var a=y%19,b=Math.floor(y/100),c=y%100,d2=Math.floor(b/4),e=b%4;
  var f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d2-g+15)%30;
  var i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451);
  var month=Math.floor((h+l-7*m+114)/31),day=((h+l-7*m+114)%31)+1;
  var pasqua=new Date(y,month-1,day);
  var lunedi=new Date(y,month-1,day+1);
  if(d.toDateString()===pasqua.toDateString())return "Pasqua";
  if(d.toDateString()===lunedi.toDateString())return "Luned&#236; dell\'Angelo (Pasquetta)";
  return null;
}
function isFestivo(ds){
  // Manteniamo per compatibilit  ora include anche domeniche
  var d=_parseDate(ds);
  if(d.getDay()===0)return true;
  return getNomeFestivo(ds)!==null||_isFestivoCalc(ds);
}
function _isFestivoCalc(ds){
  var d=_parseDate(ds);
  var mm=("0"+(d.getMonth()+1)).slice(-2),gg=("0"+d.getDate()).slice(-2);
  if(["01-01","06-01","04-25","05-01","06-02","08-15","11-01","12-08","12-25","12-26"].indexOf(mm+"-"+gg)!==-1)return true;
  var y=d.getFullYear(),a=y%19,b=Math.floor(y/100),c=y%100,d2=Math.floor(b/4),e=b%4;
  var f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d2-g+15)%30;
  var i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451);
  var month2=Math.floor((h+l-7*m+114)/31),day2=((h+l-7*m+114)%31)+1;
  var pasqua=new Date(y,month2-1,day2),lp=new Date(y,month2-1,day2+1);
  return d.toDateString()===pasqua.toDateString()||d.toDateString()===lp.toDateString();
}

function checkFestivoTurno(t){
  if(!t) return;
  var me = lsG("ct_me", null); if(!me) return;
  var myPid = parseInt(localStorage.getItem('ct_my_pid')||'0');
  if(t.pid !== me.id && t.pid !== myPid && !(me.uid && t.uid === me.uid)) return;

  var d = _parseDate(t.data);
  var isDomenica = (d.getDay() === 0);

  // Festività infrasettimanali (getNomeFestivo esclude domeniche)
  var nomeFest = getNomeFestivo(t.data);
  // Patrono: leggi da impostazioni
  var patrono = lsG('ct_patrono', null);
  if(patrono && t.data === patrono && !isDomenica) nomeFest = nomeFest || 'Patrono';

  var tipiLavorativi = {mattina:1, ml:1, pomeriggio:1, pl:1, notte:1, sera:1};
  var tipiRiposo = {riposo:1, recupero:1};
  var matura = false;
  var motivo = '';

  if(nomeFest){
    // REGOLA 1: Festivo/Patrono + Turno lavorativo → +1 recupero maturato
    if(tipiLavorativi[t.tipo]){
      matura = true;
      motivo = 'Lavoro festivo: ' + nomeFest;
    }
    // REGOLA 2: Festivo/Patrono + Riposo + NON domenica → +1 recupero maturato
    else if(tipiRiposo[t.tipo] && !isDomenica){
      matura = true;
      motivo = 'Riposo festivo: ' + nomeFest;
    }
    // REGOLA 3: Festivo + Riposo + Domenica → Festività Pagata (nessun recupero)
    else if(tipiRiposo[t.tipo] && isDomenica){
      var keyPag = 'ct_festpag_' + t.id;
      if(!localStorage.getItem(keyPag)){
        localStorage.setItem(keyPag, '1');
        var prefs2 = lsG("ct_notif_prefs", {festivi:true});
        if(prefs2.festivi !== false) toast('📅 Festività Pagata: ' + nomeFest + ' (domenica)', 'ok');
      }
      return;
    }
  }

  if(!matura) return;

  var key = "ct_rec_" + t.id;
  if(localStorage.getItem(key)) return;
  localStorage.setItem(key, "1");
  var REC = lsG("ct_recuperi", []);
  REC.push({
    id: t.id,
    data: t.data,
    tipo: t.tipo,
    nomeFest: nomeFest,
    label: motivo,
    usato: false
  });
  lsS("ct_recuperi", REC);
  me.recuperiExtra = REC.filter(function(r){ return !r.usato; }).length;
  lsS("ct_me", me);
  var U = lsG("ct_u", []);
  for(var i=0; i<U.length; i++){
    if(U[i].id===me.id || U[i].uid===me.uid){ U[i].recuperiExtra = me.recuperiExtra; break; }
  }
  lsS("ct_u", U);
  var prefs = lsG("ct_notif_prefs", {festivi:true});
  if(prefs.festivi !== false) toast('🏅 +1 Recupero: ' + motivo, 'ok');
}

// ---- TEMA ----
function aggThemeColor(t){
  var colors={"":"#0d1b2a","light":"#f0f4f8","rosa":"#2a0a18","forestale":"#1c1f1c","carabinieri":"#080b10"};
  var meta=document.getElementById("theme-color-meta");
  if(meta)meta.content=colors[t]||"#0d1b2a";
}

function caricaTema(){
  var t=lsG("ct_tema",null);
  if(t===null)t="";
  if(t)document.documentElement.setAttribute("data-theme",t);
  else document.documentElement.removeAttribute("data-theme");
  aggTemaUI(t);
  aggThemeColor(t);
}

// ═══ SUONI UI ═══
var _audioCtx = null;
function _getAudioCtx() {
  if (!_audioCtx) {
    try { _audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
  }
  return _audioCtx;
}
function _playUiSound(tipo) {
  var prefs = lsG('ct_prefs', {});
  if (prefs.suoni === false) return;
  var ctx = _getAudioCtx();
  if (!ctx) return;
  try {
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    var now = ctx.currentTime;
    if (tipo === 'complete') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.setValueAtTime(780, now + 0.12);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now); osc.stop(now + 0.35);
    } else if (tipo === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now); osc.stop(now + 0.08);
    } else if (tipo === 'error') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(180, now + 0.1);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now); osc.stop(now + 0.25);
    } else if (tipo === 'save') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(660, now);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.start(now); osc.stop(now + 0.2);
    }
  } catch(e) {}
}

// ═══ CONFETTI TO-DO ═══
function _launchConfetti() {
  var prefs = lsG('ct_prefs', {});
  if (prefs.confetti === false) return;
  var canvas = document.getElementById('confetti-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99999;';
    document.body.appendChild(canvas);
  }
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  var ctx = canvas.getContext('2d');
  var colors = ['#5b9fff','#06d6a0','#ffd166','#f2453d','#c084fc','#ff9f43','#00e5ff'];
  var pieces = [];
  for (var i = 0; i < 90; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: -10 - Math.random() * 100,
      w: 6 + Math.random() * 8,
      h: 4 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 5,
      vy: 3 + Math.random() * 5,
      rot: Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.25,
      alpha: 1
    });
  }
  var startTime = Date.now();
  var duration = 2400;
  function animateConfetti() {
    var elapsed = Date.now() - startTime;
    if (elapsed > duration) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var progress = elapsed / duration;
    pieces.forEach(function(p) {
      p.x += p.vx; p.y += p.vy; p.rot += p.vrot; p.vy += 0.1;
      p.alpha = Math.max(0, 1 - Math.pow(progress, 1.5));
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    requestAnimationFrame(animateConfetti);
  }
  animateConfetti();
}

// ---- TODO ----
var _tdFiltro="tutti";

function toggleTodo(id){
  var TD=lsG("ct_td",[]);
  var wasDone = false;
  for(var i=0;i<TD.length;i++){
    if(TD[i].id===id){
      wasDone = TD[i].done;
      TD[i].done=!TD[i].done;
      break;
    }
  }
  lsS("ct_td",TD);
  if(window.FirebaseModule) window.FirebaseModule.saveTodo(TD).catch(function(){});
  renderTodo();
  if(typeof aggiornaFocus === 'function') aggiornaFocus();
  if(typeof aggiornaWidget === 'function') aggiornaWidget();
  // Effetti al completamento
  if(!wasDone) {
    _playUiSound('complete');
    _launchConfetti();
  }
}
// Cancella documenti notifiche_push relativi a un titolo (evita notifiche fantasma)
function _cancellaNotifPushPerTitolo(titolo){
  var sess=lsG("ct_session",null);
  if(!sess||!sess.userId||!window.FirebaseModule)return;
  // Non possiamo fare query per titolo da client — puliamo tutti i pending dell'utente
  // Il sendPush.js elimina i doc dopo l'invio, quindi i fantasmi sono solo quelli non ancora inviati
  // Usiamo un flag locale per saltarli
  var skip=lsG("ct_push_skip",[]);
  skip.push(titolo);
  lsS("ct_push_skip",skip);
}

function delTodo(id){
  var TD=lsG("ct_td",[]);
  var t=TD.find(function(x){return x.id===id;});
  if(t) _cancellaNotifPushPerTitolo("\u2705 C-Turni \u2014 "+t.tit);
  lsS("ct_td",TD.filter(function(x){return x.id!==id;}));
  if(window.FirebaseModule) window.FirebaseModule.deleteTodo(id).catch(function(){});
  renderTodo();
}

function rinviaTodo(id){
  var TD=lsG("ct_td",[]);
  var t=TD.find(function(x){return x.id===id;});
  if(!t)return;
  var oggi=new Date().toISOString().slice(0,10);
  var dataBase=t.data&&t.data>=oggi?t.data:oggi;
  var html=
    '<div id="m-rinvia-todo" style="display:flex;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:99999;align-items:flex-end;justify-content:center;backdrop-filter:blur(3px)">'
    +'<div style="background:var(--card);border-radius:24px 24px 0 0;width:100%;max-width:520px;padding:20px 20px calc(20px + env(safe-area-inset-bottom,0px));box-shadow:0 -8px 32px rgba(0,0,0,.4)">'
    +'<div style="width:36px;height:4px;background:var(--border2);border-radius:2px;margin:0 auto 14px"></div>'
    +'<div style="font-size:15px;font-weight:800;margin-bottom:14px">&#128336; Rinvia: '+t.tit+'</div>'
    +'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">'
    +'<button class="btn btn-g btn-sm" onclick="_rinviaTodoRel('+id+',1)">+1 giorno</button>'
    +'<button class="btn btn-g btn-sm" onclick="_rinviaTodoRel('+id+',3)">+3 giorni</button>'
    +'<button class="btn btn-g btn-sm" onclick="_rinviaTodoRel('+id+',7)">+1 settimana</button>'
    +'</div>'
    +'<div class="fg"><label>Oppure scegli data e ora</label>'
    +'<input type="date" id="rt-data" class="fc" value="'+dataBase+'" style="margin-bottom:8px">'
    +'<input type="time" id="rt-ora" class="fc" value="'+(t.ora||'')+'"></div>'
    +'<div style="display:flex;gap:10px;margin-top:4px">'
    +'<button class="btn btn-g" style="flex:1" onclick="document.getElementById(\'m-rinvia-todo\').remove()">Annulla</button>'
    +'<button class="btn btn-p" style="flex:1" onclick="_rinviaTodoData('+id+')">&#128336; Rinvia</button>'
    +'</div></div></div>';
  document.body.insertAdjacentHTML('beforeend',html);
}

function _rinviaTodoRel(id,giorni){
  var TD=lsG("ct_td",[]);
  var t=TD.find(function(x){return x.id===id;});
  if(!t)return;
  var oggi=new Date().toISOString().slice(0,10);
  var base=new Date((t.data&&t.data>=oggi?t.data:oggi)+'T00:00:00');
  base.setDate(base.getDate()+giorni);
  t.data=base.toISOString().slice(0,10);
  t.done=false;
  lsS("ct_td",TD);
  if(window.FirebaseModule)window.FirebaseModule.saveTodo(TD);
  // Aggiorna condiviso se necessario
  if(t.condiviso&&window.FirebaseModule)window.FirebaseModule.saveTodoCondiviso(t).catch(function(){});
  schedulaNotifTodo(t);
  var bs=document.getElementById('m-rinvia-todo');if(bs)bs.remove();
  renderTodo();
  toast("&#128336; Rinviato al "+t.data,"ok");
}

function _rinviaTodoData(id){
  var data=(document.getElementById('rt-data')||{}).value;
  var ora=(document.getElementById('rt-ora')||{}).value||'';
  if(!data){toast("Scegli una data","err");return;}
  var TD=lsG("ct_td",[]);
  var t=TD.find(function(x){return x.id===id;});
  if(!t)return;
  t.data=data;t.ora=ora;t.done=false;
  lsS("ct_td",TD);
  if(window.FirebaseModule)window.FirebaseModule.saveTodo(TD);
  if(t.condiviso&&window.FirebaseModule)window.FirebaseModule.saveTodoCondiviso(t).catch(function(){});
  schedulaNotifTodo(t);
  if(ora&&data)_schedulaNotifPrecisa("\u23F0 To-Do: "+t.tit,data,ora);
  var bs=document.getElementById('m-rinvia-todo');if(bs)bs.remove();
  renderTodo();
  toast("&#128336; Rinviato al "+data+(ora?" ore "+ora:""),"ok");
}
function filtraTodo(f){
  _tdFiltro=f;
  ["tutti","oggi","alta","done"].forEach(function(k){
    var b=document.getElementById("tf-"+k);if(b)b.classList.toggle("btn-p",k===f);
  });
  renderTodo();
}
function renderTodo(){
  var el=document.getElementById("todo-list");if(!el)return;
  var TD=lsG("ct_td",[]);
  var oggi=new Date().toISOString().slice(0,10);
  var now=new Date();
  if(_tdFiltro==="oggi")TD=TD.filter(function(x){
    if(x.data===oggi)return true;
    if(x.ricor==="daily")return true;
    if(x.ricor&&x.ricor!=="daily"&&parseInt(x.ricor)===now.getDay())return true;
    return false;
  });
  else if(_tdFiltro==="alta")TD=TD.filter(function(x){return x.prio==="alta"&&!x.done;});
  else if(_tdFiltro==="done")TD=TD.filter(function(x){return x.done;});
  else TD=TD.filter(function(x){return !x.done||_tdFiltro==="tutti";}); 
  // Ordina: alta?media?bassa, poi per data
  var po={alta:0,media:1,bassa:2};
  TD.sort(function(a,b){if(a.done!==b.done)return a.done?1:-1;return (po[a.prio]||1)-(po[b.prio]||1);});
  if(!TD.length){el.innerHTML=emptyState('todo');return;}
  var pLbl={alta:"&#128308; Alta",media:"&#128993; Media",bassa:"&#128994; Bassa"};
  el.innerHTML=TD.map(function(t){
    var ds=t.data?'<span style="font-size:10px;color:var(--txt2);margin-left:6px">&#128197; '+t.data+(t.ora?' &#9201; '+t.ora:'')+'</span>':"";
    var rc=t.ricor?'<span style="font-size:10px;color:var(--teal);margin-left:6px">&#128260; Ricorrente</span>':"";
    var nt=t.note?'<div style="font-size:11px;color:var(--txt2);margin-top:3px">'+t.note+'</div>':"";
    return '<div class="swipe-wrap">'+
      '<div class="swipe-bg right">&#10003;</div>'+
      '<div class="swipe-item todo-item p-'+t.prio+(t.done?" done":"")+ '" id="tditem-'+t.id+'" data-tid="'+t.id+'">'+
        '<button class="chk'+(t.done?" on":"")+'" onclick="toggleTodo('+t.id+')">'+( t.done?"&#10003;":"")+'</button>'+
        '<div style="flex:1;min-width:0">'+
          '<div style="font-weight:700;font-size:13px;color:var(--txt)'+(t.done?';text-decoration:line-through;opacity:.5':'')+'">'+(t.tit||'')+'</div>'+
          nt+
          '<div style="margin-top:5px"><span class="pbdg">'+pLbl[t.prio]+'</span>'+ds+rc+'</div>'+
        '</div>'+
        '<button onclick="rinviaTodo('+t.id+')" style="background:none;border:none;color:var(--blue);cursor:pointer;font-size:14px;padding:4px;appearance:none;-webkit-appearance:none;flex-shrink:0" title="Rinvia">&#128336;</button>'+
        '<button onclick="delTodo('+t.id+')" style="background:none;border:none;color:var(--txt3);cursor:pointer;font-size:16px;padding:4px;appearance:none;-webkit-appearance:none;flex-shrink:0">&#128465;</button>'+
      '</div>'+
      '<div class="swipe-bg left">&#128465;</div>'+
    '</div>';
  }).join("");
  setTimeout(initSwipeTodo, 50);
}

// ---- AGENDA ----
function salvaAgenda(){
  var tit=document.getElementById("ag-tit").value.trim();
  var dt=document.getElementById("ag-data").value;
  var err=document.getElementById("agenda-err");
  err.classList.remove("on");
  if(!tit||!dt){err.classList.add("on");return;}
  var item={id:Date.now(),tit:tit,data:dt,
    ora:document.getElementById("ag-ora").value||"",
    luogo:document.getElementById("ag-luogo").value.trim()||"",
    note:document.getElementById("ag-note").value.trim()||"",
    notif:parseInt(document.getElementById("ag-notif").value)||0};
  var AG=lsG("ct_ag",[]);AG.push(item);AG.sort(function(a,b){return a.data>b.data?1:-1;});lsS("ct_ag",AG);
  // Schedula notifica
  if(item.notif>0)schedulaNotifAgenda(item);
  closeM("m-agenda");renderAgenda();notificaAgenda(item.tit,item.data,item.ora);
  ["ag-tit","ag-data","ag-ora","ag-luogo","ag-note"].forEach(function(id){var e=document.getElementById(id);if(e)e.value="";});
  toast("Appuntamento salvato","ok");
}
function delAgenda(id){
  var AG=lsG("ct_ag",[]).filter(function(x){return x.x!==id;});
  lsS("ct_ag",AG.filter(function(x){return x.id!==id;}));renderAgenda();
}


// ---- TEMI ----
var _TEMI_CFG={
  "":         {nome:"Notte",      emoji:"🌙", desc:"Blu scuro  predefinito",   bg:"linear-gradient(135deg,#0d1b2a,#1a3a5c)", colors:["#0d1b2a","#1a2f45","#2979ff","#ffffff"]},
  "light":    {nome:"Giorno",     emoji:"☀️",   desc:"Chiaro e nitido",            bg:"linear-gradient(135deg,#f0f4f8,#dce8f0)", colors:["#f0f4f8","#ffffff","#1565c0","#0d1b2a"]},
  "auto":     {nome:"Auto",       emoji:"📱", desc:"Segue le impostazioni del sistema", bg:"linear-gradient(135deg,#1a2a3a,#2a3a4a)", colors:["#0d1b2a","#f0f4f8","#2979ff","#c8a84b"]},
  "rosa":     {nome:"Rosa",       emoji:"🌸", desc:"Rosa vivo  petali animati",  bg:"linear-gradient(135deg,#2a0a18,#8a2040,#c0304a)", colors:["#2a0a18","#4a1828","#ff4d80","#fff0f4"]},
  "forestale":{nome:"Forestale",  emoji:"🌲", desc:"Grigio-verde uniforme", bg:"linear-gradient(135deg,#1c2b1c,#2e402e,#3d4a3d)", colors:["#1c1f1c","#2e332e","#6abf69","#e8ede8"]},
  "forestale-dark":{nome:"Forestale Notte", emoji:"🌲", desc:"Verde scuro profondo", bg:"linear-gradient(135deg,#0E1410,#18241B,#1D2E22)", colors:["#0E1410","#18241B","#4CAF50","#E1EBE3"]},
  "carabinieri":{nome:"Carabinieri",emoji:"⚜️", desc:"Divisa ufficiale  stemma",  bg:"linear-gradient(135deg,#080b10,#111828,#080b10)", colors:["#080b10","#111828","#c8a96e","#ffffff"]},
  "rosa-light":      {nome:"Rosa Giorno",       emoji:"🌸", desc:"Rosa chiaro  bianco e rosa",       bg:"linear-gradient(135deg,#fff5f8,#ffe0ea,#fcc0d0)", colors:["#fff5f8","#ffffff","#d63070","#3a0a18"]},
  "forestale-light": {nome:"Forestale Giorno",  emoji:"🌲", desc:"Verde chiaro  bianco e verde",     bg:"linear-gradient(135deg,#f4f8f4,#e4ede4,#c8e0c8)", colors:["#f4f8f4","#ffffff","#2e7d32","#0a1f0a"]},
  "carabinieri-light":{nome:"Carabinieri Giorno",emoji:"⚜️",  desc:"Avorio e bordeaux  elegante",      bg:"linear-gradient(135deg,#f5f5f0,#eaeae0,#d8ccc0)", colors:["#f5f5f0","#ffffff","#8b0000","#1a1208"]}
};
function setTema(t){
  if(t==="light") document.documentElement.setAttribute("data-theme","light");
  else if(t==="")  document.documentElement.removeAttribute("data-theme");
  else             document.documentElement.setAttribute("data-theme",t);
  lsS("ct_tema",t);
  aggTemaUI(t);
  aggThemeColor(t);
  _aggiornaAutoCustomTema(t);
  var cfg=_TEMI_CFG[t]||_TEMI_CFG[""];
  toast("Tema: "+cfg.nome+" &#10003;","ok");
}
function aprireTemapicker() {
  const TEMI_NOTTE = ['', 'rosa', 'forestale', 'carabinieri'];
  const TEMI_GIORNO = ['light', 'rosa-light', 'forestale-light', 'carabinieri-light'];
  const TEMI_SPECIALI = ['auto'];
  const cur = (_temaPending !== null) ? _temaPending : lsG('ct_tema', '');

  function buildGrid(arr, containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = arr.map(t => {
      const cfg = _TEMI_CFG[t] || _TEMI_CFG[''];
      const sel = t === cur;
      return `<div class="tema-card${sel ? ' sel' : ''}" onclick="prevTema('${t}');document.querySelectorAll('.tema-card').forEach(c=>c.classList.remove('sel'));this.classList.add('sel')"
        style="border-radius:12px;padding:10px 8px;text-align:center;cursor:pointer;border:2px solid ${sel ? 'var(--blue)' : 'var(--border)'};background:var(--bg2);transition:border .2s">
        <div style="font-size:26px;line-height:1;margin-bottom:4px">${cfg.emoji}</div>
        <div style="font-size:11px;font-weight:700;color:var(--txt)">${cfg.nome}</div>
      </div>`;
    }).join('');
  }

  buildGrid(TEMI_NOTTE, 'tema-grid-notte');
  buildGrid(TEMI_GIORNO, 'tema-grid-giorno');
  // Griglia speciali (auto) — crea il container se non esiste
  var specEl = document.getElementById('tema-grid-speciali');
  if(specEl) buildGrid(TEMI_SPECIALI, 'tema-grid-speciali');

  const btn = document.getElementById('btn-salva-tema');
  if (btn) { btn.style.opacity = '1'; btn.style.pointerEvents = 'auto'; }

  openM('m-tema');
}

function aggTemaUI(t){
  var cfg=_TEMI_CFG[t]||_TEMI_CFG[""];
  // Icona notte/giorno
  var isDay=t&&(t.indexOf("light")!==-1);
  var btnTh=document.getElementById("btn-th");
  if(btnTh)btnTh.innerHTML=isDay?"&#9728;":"&#127769;";
  var sel=document.getElementById("tema-select");if(sel)sel.value=t;
  var ico=document.getElementById("tema-ico");if(ico)ico.innerHTML=cfg.emoji;
  var desc=document.getElementById("tema-desc");if(desc)desc.textContent=cfg.nome;
  var prev=document.getElementById("tema-preview");if(prev)prev.style.background=cfg.bg;
  var pe=document.getElementById("tema-prev-emoji");if(pe)pe.innerHTML=cfg.emoji;
  var pn=document.getElementById("tema-prev-nome");if(pn)pn.textContent=cfg.nome;
  var pc=document.getElementById("tema-prev-colors");
  if(pc)pc.innerHTML=cfg.colors.map(function(c){
    return '<div style="width:18px;height:18px;border-radius:50%;background:'+c+';border:2px solid rgba(255,255,255,.35)"></div>';
  }).join("");
  // Evidenzia card inline
  var idMap = {'':'tcb-notte','light':'tcb-light','rosa':'tcb-rosa','forestale':'tcb-forestale',
    'carabinieri':'tcb-carabinieri','rosa-light':'tcb-rosa-light',
    'forestale-light':'tcb-forestale-light','carabinieri-light':'tcb-carabinieri-light'};
  document.querySelectorAll('.tema-card-big').forEach(function(c){ c.classList.remove('sel'); });
  var tcEl = document.getElementById(idMap[t]||'tcb-notte');
  if(tcEl) tcEl.classList.add('sel');
}
function caricaTema(){
  var t=lsG("ct_tema",null);
  if(t===null)t="";
  if(t==="auto") document.documentElement.setAttribute("data-theme","auto");
  else if(t==="light") document.documentElement.setAttribute("data-theme","light");
  else if(t)       document.documentElement.setAttribute("data-theme",t);
  else             document.documentElement.removeAttribute("data-theme");
  aggTemaUI(t);
  aggThemeColor(t);
  // Listener sistema per tema auto
  if(t==="auto" && window.matchMedia){
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    if(!window._autoThemeListener){
      window._autoThemeListener = function(){ aggThemeColor('auto'); };
      mq.addEventListener('change', window._autoThemeListener);
    }
  }
  // Listener per temi custom con variante chiara/scura
  _aggiornaAutoCustomTema(t);
  // Applica comportamento tema salvato
  _applicaComportamentoTema();
}

// Mappa tema base → variante chiara
var _TEMA_DARK_MAP  = {'':'', 'rosa':'rosa', 'forestale':'forestale-dark', 'carabinieri':'carabinieri', 'arma':'arma-dark'};
var _TEMA_LIGHT_MAP = {'':'light', 'rosa':'rosa-light', 'forestale':'forestale', 'carabinieri':'carabinieri-light', 'arma':'arma'};

function _aggiornaAutoCustomTema(t){
  if(!window.matchMedia) return;
  // Rimuovi listener precedente
  if(window._customThemeListener && window._customThemeMQ){
    window._customThemeMQ.removeEventListener('change', window._customThemeListener);
    window._customThemeListener = null;
  }
  // Temi che hanno variante chiara/scura
  var base = t ? t.replace('-light','') : '';
  var hasVariant = _TEMA_DARK_MAP.hasOwnProperty(base) && base !== '';
  if(!hasVariant) return;

  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  window._customThemeMQ = mq;
  window._customThemeListener = function(e){
    var saved = lsG('ct_tema', '');
    var savedBase = saved ? saved.replace('-light','') : '';
    if(!_TEMA_DARK_MAP.hasOwnProperty(savedBase) || savedBase === '') return;
    var next = e.matches ? _TEMA_DARK_MAP[savedBase] : _TEMA_LIGHT_MAP[savedBase];
    document.documentElement.setAttribute('data-theme', next || 'light');
    aggThemeColor(next);
  };
  mq.addEventListener('change', window._customThemeListener);
  // Applica subito in base allo stato corrente del sistema
  var isDark = mq.matches;
  var next = isDark ? _TEMA_DARK_MAP[base] : _TEMA_LIGHT_MAP[base];
  if(next !== t){
    document.documentElement.setAttribute('data-theme', next || 'light');
    aggThemeColor(next);
  }
}
function togTheme(){
  var cur=document.documentElement.getAttribute("data-theme")||"";
  // Mappa tema-notte ? tema-giorno e viceversa
  var dayMap={"":"light","light":"","rosa":"rosa-light","rosa-light":"rosa",
    "forestale":"forestale-light","forestale-light":"forestale",
    "carabinieri":"carabinieri-light","carabinieri-light":"carabinieri"};
  var next=dayMap.hasOwnProperty(cur)?dayMap[cur]:(cur.indexOf("-light")!==-1?cur.replace("-light",""):cur+"-light");
  prevTema(next);  // mostra anteprima
  lsS("ct_tema",next);  // salva subito per togTheme
  // Aggiorna icona tasto
  var isDay=next.indexOf("light")!==-1||next==="light";
  var btn=document.getElementById("btn-th");
  if(btn)btn.innerHTML=isDay?"&#9728;":"&#127769;";
}


// ── COMPORTAMENTO TEMA ──────────────────────────────────────────
// Mappa base → dark/light per comportamento sistema/orario
var _TEMA_BASE_MAP = {
  '':'', 'rosa':'rosa', 'forestale':'forestale', 'carabinieri':'carabinieri', 'arma':'arma',
  'light':'', 'rosa-light':'rosa', 'forestale-light':'forestale', 'forestale-dark':'forestale',
  'carabinieri-light':'carabinieri', 'arma-dark':'arma'
};
function _getTemaBase(t){
  var b = (t||'').replace('-light','');
  return _TEMA_BASE_MAP.hasOwnProperty(b) ? b : '';
}
function _applyTemaVariant(isDark){
  var t = lsG('ct_tema','');
  var base = _getTemaBase(t);
  if(!base) return;
  var next = isDark ? _TEMA_DARK_MAP[base] : _TEMA_LIGHT_MAP[base];
  if(next === undefined) return;
  if(next !== t){
    if(next) document.documentElement.setAttribute('data-theme', next);
    else document.documentElement.removeAttribute('data-theme');
    aggThemeColor(next);
  }
}

// Applica il tema dinamico rispettando la gerarchia: MANUALE > SISTEMA > ORARIO
function _applicaComportamentoTema(){
  var comp = lsG('ct_tema_comp','manuale');

  // Aggiorna UI selettore (hidden input + bottoni)
  var sel = document.getElementById('sel-tema-comportamento');
  if(sel) sel.value = comp;
  // Aggiorna bottoni comportamento tema
  ['manuale','sistema','orario'].forEach(function(c){
    var btn = document.getElementById('tcb-'+c);
    if(!btn) return;
    if(c === comp) {
      btn.style.borderColor = 'var(--blue)';
      btn.style.background = 'rgba(41,121,255,.12)';
    } else {
      btn.style.borderColor = 'var(--border)';
      btn.style.background = 'var(--bg2)';
    }
  });
  var desc = document.getElementById('tema-comp-desc');
  var descs = {
    manuale:'Scegli il tema manualmente dalle card sopra.',
    sistema:'Il tema cambia automaticamente con le impostazioni del dispositivo.',
    orario:'Tema scuro dalle 19:00 alle 07:00, chiaro il resto del giorno.'
  };
  if(desc) desc.textContent = descs[comp] || '';

  // Rimuovi listener automatici precedenti
  if(window._temaCompMQ){ try{ window._temaCompMQ.removeEventListener('change', window._temaCompFn); }catch(e){} window._temaCompMQ = null; }
  if(window._temaCompTimer){ clearInterval(window._temaCompTimer); window._temaCompTimer = null; }

  // 1. MANUALE — priorità assoluta: applica esattamente il tema salvato e non fare altro
  if(comp === 'manuale'){
    var tManuale = lsG('ct_tema', '');
    if(tManuale) document.documentElement.setAttribute('data-theme', tManuale);
    else document.documentElement.removeAttribute('data-theme');
    aggThemeColor(tManuale);
    return;
  }

  // Helper: aggiunge o rimuove '-dark' al nome base del tema corrente
  function _forzaDark(isDark){
    var t = lsG('ct_tema', '');
    var base = _getTemaBase(t);
    if(!base) return; // tema senza variante (notte/light base)
    var next = isDark ? _TEMA_DARK_MAP[base] : _TEMA_LIGHT_MAP[base];
    if(next === undefined) return;
    if(next) document.documentElement.setAttribute('data-theme', next);
    else document.documentElement.removeAttribute('data-theme');
    aggThemeColor(next);
  }

  // 2. SISTEMA — segue prefers-color-scheme
  if(comp === 'sistema' && window.matchMedia){
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    window._temaCompMQ = mq;
    window._temaCompFn = function(e){ _forzaDark(e.matches); };
    mq.addEventListener('change', window._temaCompFn);
    _forzaDark(mq.matches);
    return;
  }

  // 3. ORARIO — scuro dalle 19:00 alle 07:00
  if(comp === 'orario'){
    var _checkOrario = function(){
      var h = new Date().getHours();
      _forzaDark(h >= 19 || h < 7);
    };
    _checkOrario();
    window._temaCompTimer = setInterval(_checkOrario, 60000);
  }
}
function setTemaComportamento(comp){
  lsS('ct_tema_comp', comp);
  _applicaComportamentoTema();
  var labels = {manuale:'Manuale', sistema:'Segui sistema', orario:'Segui orario'};
  toast('Comportamento tema: '+(labels[comp]||comp), 'ok');
}

// ══════════════════════════════════════════════════════
// 4. FAB — Floating Action Button
// ══════════════════════════════════════════════════════
var _fabOpen = false;
function toggleFab(){
  _fabOpen = !_fabOpen;
  var btn = document.getElementById('fab-main');
  var items = document.getElementById('fab-items');
  if(btn){ btn.classList.toggle('open', _fabOpen); btn.setAttribute('aria-expanded', _fabOpen); }
  if(items) items.classList.toggle('open', _fabOpen);
  // Chiudi cliccando fuori
  if(_fabOpen){
    setTimeout(function(){
      document.addEventListener('click', _fabOutside, {once:true});
    }, 10);
  }
}
function closeFab(){
  _fabOpen = false;
  var btn = document.getElementById('fab-main');
  var items = document.getElementById('fab-items');
  if(btn){ btn.classList.remove('open'); btn.setAttribute('aria-expanded','false'); }
  if(items) items.classList.remove('open');
}
function _fabOutside(e){
  var slot = document.getElementById('fab-slot');
  if(slot && !slot.contains(e.target)) closeFab();
}
// Ripristina la pagina salvata dopo login/refresh
function _ripristinaPagina(){
  var pg = lsG('ct_pg', 'dash');
  var bnIdx = ['dash','cal','rep','imp'].indexOf(pg);
  if(bnIdx !== -1 && typeof vaiBN === 'function'){
    vaiBN(pg, bnIdx);
  } else {
    _aggFabVisibility('dash');
  }
}
// Nascondi FAB quando non si è sulla dashboard
function _aggFabVisibility(pg){
  var nav  = document.getElementById('bottom-nav');
  var wrap = document.getElementById('fab-wrap');
  var btn  = document.getElementById('fab-main');
  if(!btn) return;
  if(pg === 'dash'){
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        if(wrap){ wrap.style.display='flex'; wrap.style.pointerEvents='all'; }
        btn.style.display = 'flex';
        btn.classList.add('visible');
        if(nav) nav.classList.add('fab-active');
      });
    });
  } else {
    btn.classList.remove('visible');
    btn.style.display = 'none';
    if(wrap){ wrap.style.display='none'; wrap.style.pointerEvents='none'; }
    if(nav) nav.classList.remove('fab-active');
    closeFab();
  }
}
// ══════════════════════════════════════════════════════
// 1. SKELETON LOADERS
// ══════════════════════════════════════════════════════
function skeletonWidget(id, rows){
  var el = document.getElementById(id);
  if(!el) return;
  var r = rows || 3;
  el.innerHTML = Array(r).fill(0).map(function(_,i){
    return '<div class="sk-row"><div class="sk sk-circle"></div><div style="flex:1"><div class="sk sk-line w80"></div><div class="sk sk-line w40"></div></div></div>';
  }).join('');
}
function skeletonDash(){
  ['wpr-body','wmt-body','wsc-list','wag-list','wtd-list'].forEach(function(id){
    skeletonWidget(id, 2);
  });
}

// ══════════════════════════════════════════════════════
// 2. EMPTY STATES
// ══════════════════════════════════════════════════════
var _ES = {
  todo:    { svg:'<svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="12" y="8" width="40" height="48" rx="6" fill="var(--bg2)" stroke="var(--border)" stroke-width="2"/><rect x="20" y="20" width="24" height="3" rx="1.5" fill="var(--txt3)"/><rect x="20" y="28" width="18" height="3" rx="1.5" fill="var(--txt3)"/><rect x="20" y="36" width="20" height="3" rx="1.5" fill="var(--txt3)"/><circle cx="48" cy="48" r="10" fill="var(--green)"/><path d="M44 48l3 3 5-5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', title:'Tutto fatto!', sub:'Nessun promemoria aperto.\nGoditela.' },
  agenda:  { svg:'<svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="10" y="14" width="44" height="40" rx="6" fill="var(--bg2)" stroke="var(--border)" stroke-width="2"/><rect x="10" y="22" width="44" height="2" fill="var(--border)"/><rect x="20" y="8" width="4" height="12" rx="2" fill="var(--blue)"/><rect x="40" y="8" width="4" height="12" rx="2" fill="var(--blue)"/><circle cx="32" cy="38" r="8" fill="var(--bg2)" stroke="var(--border)" stroke-width="2"/><path d="M32 33v5l3 3" stroke="var(--txt2)" stroke-width="2" stroke-linecap="round"/></svg>', title:'Nessun appuntamento oggi', sub:'La giornata è tua.' },
  scadenze:{ svg:'<svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="22" fill="var(--bg2)" stroke="var(--border)" stroke-width="2"/><path d="M32 20v12l7 7" stroke="var(--green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="32" cy="32" r="2" fill="var(--green)"/></svg>', title:'Nessuna scadenza', sub:'Sei in regola con tutto.' },
  turni:   { svg:'<svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="8" y="16" width="48" height="36" rx="6" fill="var(--bg2)" stroke="var(--border)" stroke-width="2"/><path d="M8 26h48" stroke="var(--border)" stroke-width="2"/><rect x="16" y="8" width="4" height="12" rx="2" fill="var(--blue)"/><rect x="44" y="8" width="4" height="12" rx="2" fill="var(--blue)"/><path d="M24 38c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="var(--gold)" stroke-width="2" stroke-linecap="round"/><circle cx="32" cy="38" r="3" fill="var(--gold)"/></svg>', title:'Nessun turno oggi', sub:'Riposa, te lo sei guadagnato ☕' },
  notifiche:{ svg:'<svg width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M32 10c-11 0-18 8-18 18v10l-4 6h44l-4-6V28c0-10-7-18-18-18z" fill="var(--bg2)" stroke="var(--border)" stroke-width="2"/><path d="M28 48a4 4 0 008 0" stroke="var(--txt2)" stroke-width="2" stroke-linecap="round"/><line x1="32" y1="10" x2="32" y2="6" stroke="var(--txt3)" stroke-width="2" stroke-linecap="round"/></svg>', title:'Nessuna notifica', sub:'Tutto tranquillo.' }
};
function emptyState(tipo){
  var cfg = _ES[tipo] || {svg:'', title:'Nessun dato', sub:''};
  return '<div class="empty-state">'+cfg.svg+'<div class="es-title">'+cfg.title+'</div><div class="es-sub">'+cfg.sub.replace(/\n/g,'<br>')+'</div></div>';
}

// ══════════════════════════════════════════════════════
// 3. SWIPE ACTIONS sui Todo
// ══════════════════════════════════════════════════════
function initSwipeTodo(){
  var list = document.getElementById('todo-list');
  if(!list) return;
  list.querySelectorAll('.swipe-item').forEach(function(item){
    var startX = 0, curX = 0, swiping = false;
    var tid = parseInt(item.getAttribute('data-tid'));

    item.addEventListener('touchstart', function(e){
      startX = e.touches[0].clientX;
      curX = 0; swiping = true;
      item.classList.add('swiping');
    }, {passive:true});

    item.addEventListener('touchmove', function(e){
      if(!swiping) return;
      curX = e.touches[0].clientX - startX;
      // Limita lo swipe
      var clamped = Math.max(-80, Math.min(80, curX));
      item.style.transform = 'translateX('+clamped+'px)';
      // Mostra bg
      var bgL = item.previousElementSibling;
      var bgR = item.nextElementSibling;
      if(bgL && bgL.classList.contains('swipe-bg')) bgL.style.opacity = curX > 20 ? '1' : '0';
      if(bgR && bgR.classList.contains('swipe-bg')) bgR.style.opacity = curX < -20 ? '1' : '0';
    }, {passive:true});

    item.addEventListener('touchend', function(){
      swiping = false;
      item.classList.remove('swiping');
      item.style.transform = '';
      var bgL = item.previousElementSibling;
      var bgR = item.nextElementSibling;
      if(bgL) bgL.style.opacity = '0';
      if(bgR) bgR.style.opacity = '0';
      if(curX > 60){
        // Swipe destra → segna come fatto
        toggleTodo(tid);
      } else if(curX < -60){
        // Swipe sinistra → elimina
        delTodo(tid);
      }
    });
  });
}

// ---- IMPOSTAZIONI SEZIONI ESPANDIBILI ----
function toggleImpProfilo() {
  var card = document.getElementById('imp-profilo-card');
  var body = document.getElementById('imp-profilo-body');
  var chev = document.getElementById('imp-profilo-chevron');
  if (!card || !body) return;
  var isOpen = body.classList.toggle('open');
  card.classList.toggle('open', isOpen);
  if (chev) chev.classList.toggle('open', isOpen);
  if (isOpen) {
    // Popola i campi con i dati attuali
    var me = lsG('ct_me', null);
    if (!me) return;
    var pRep = document.getElementById('pf-rep');
    var pNuc = document.getElementById('pf-nuc');
    var pGrado = document.getElementById('pf-grado');
    var pAva = document.getElementById('pf-ava');
    if (pRep) pRep.value = me.reparto || '';
    if (pNuc) pNuc.value = me.nucleo || '';
    if (pGrado) pGrado.value = me.grado || '';
    if (pAva) pAva.value = me.ava || '';
    // Aggiorna preview avatar
    var prev = document.getElementById('pf-ava-prev');
    if (prev) {
      if (me.ava) { prev.style.backgroundImage='url('+me.ava+')'; prev.style.backgroundSize='cover'; prev.style.backgroundPosition='center'; prev.textContent=''; }
      else { prev.style.backgroundImage=''; prev.textContent='\u{1F464}'; }
    }
    // Aggiorna label grado
    if (me.grado && typeof prevGrado === 'function') prevGrado(me.grado, 'pf-grado');
    // Tipo reparto
    var tipoCorrente = me.tipo || me.tipoRep || 'ter';
    var pfTipoEl = document.getElementById('pf-tipo');
    if(pfTipoEl) pfTipoEl.value = tipoCorrente;
    // Resetta solo i pill dentro il form profilo impostazioni
    var pfTipoWrap = pfTipoEl ? pfTipoEl.parentElement : null;
    if(pfTipoWrap){
      pfTipoWrap.querySelectorAll('.trep-pill').forEach(function(p){ p.style.background='transparent'; p.style.color='var(--txt)'; p.style.fontWeight='600'; });
      var active = pfTipoWrap.querySelector('.trep-pill[onclick*="\''+tipoCorrente+'\'"]');
      if(active){ active.style.background='var(--blue)'; active.style.color='#fff'; active.style.fontWeight='800'; }
    }
  }
}
function toggleImpSec(id,arrId){
  var el=document.getElementById(id);if(!el)return;
  // supporta sia classe open (display block) sia max-height
  var isMH=el.style.maxHeight!==undefined&&el.getAttribute("style")&&el.getAttribute("style").indexOf("max-height")!==-1;
  if(isMH){
    var open=el.style.maxHeight&&el.style.maxHeight!=="0px"&&el.style.maxHeight!=="0";
    el.style.maxHeight=open?"0":"2000px";
    if(arrId){var a=document.getElementById(arrId);if(a)a.style.transform=open?"":"rotate(90deg)";}
  } else {
    el.classList.toggle("open");
    if(arrId){var a2=document.getElementById(arrId);if(a2)a2.style.transform=el.classList.contains("open")?"rotate(90deg)":"";}
  }
}

// ---- GESTIONE NOTIFICHE ----
function aggNotifStatus(){
  var el=document.getElementById("notif-status-txt"),tog=document.getElementById("tog-notif-master");
  if(!("Notification" in window)){if(el)el.textContent="Non supportate";return;}
  var p=Notification.permission;
  if(el){if(p==="granted")el.innerHTML="&#10003; Attive";else if(p==="denied")el.innerHTML="&#9940; Bloccate &#8212; sblocca nel browser";else el.textContent="Tocca per abilitare";}
  if(tog) tog.checked = (p==="granted");
  var prefs=lsG("ct_notif_prefs",{mattina:true,todo:true,agenda:true,festivi:true,preturno:true});
  ["mattina","todo","agenda","festivi"].forEach(function(k){
    var t=document.getElementById("tog-notif-"+k);
    if(t) t.checked = (prefs[k]!==false);
  });
  var pre=lsG("ct_notif_pre",60);
  var subEl=document.getElementById("sub-preturno");
  var labels={60:"1h prima",360:"6h prima",720:"12h prima",1440:"24h prima"};
  if(subEl) subEl.textContent = labels[pre] ? "Attivo: "+labels[pre] : (pre>0?(pre>=60?(pre/60)+"h":""+pre+"min")+" prima":"Disabilitato");
  // Evidenzia bottone attivo
  document.querySelectorAll(".notif-pre-btn").forEach(function(b){
    var isActive = parseInt(b.getAttribute("data-min")) === pre;
    b.classList.toggle("btn-p", isActive);
    b.classList.toggle("btn-g", !isActive);
  });
}
function toggleNotifMaster(){
  if(!("Notification" in window)){toast("Non supportato","err");return;}
  if(Notification.permission==="granted"){toast("Per revocare usa le impostazioni del browser","info");return;}
  if(Notification.permission==="denied"){toast("🚫 Notifiche bloccate — sblocca nelle impostazioni del browser","err");return;}
  Notification.requestPermission().then(function(r){
    aggNotifStatus();
    if(r==="granted"){
      toast("🔔 Notifiche abilitate!","ok");
      scheduleAllTodoNotif();
      lsG("ct_ag",[]).forEach(function(a){if(a.notif>0)schedulaNotifAgenda(a);});
      scheduleNotifMattutina();
      // Notifica di test immediata
      setTimeout(function(){
        new Notification("🔔 C-Turni — Notifiche attive",{
          body:"Riceverai avvisi per turni, to-do e appuntamenti.",
          icon:_NOTIF_ICON
        });
      },500);
    } else {
      toast("Notifiche bloccate","err");
    }
  });
}
function toggleNotifPref(key,btn){
  var prefs=lsG("ct_notif_prefs",{mattina:true,todo:true,agenda:true,festivi:true,preturno:true});
  prefs[key]=!prefs[key];lsS("ct_notif_prefs",prefs);
  if(btn)btn.classList.toggle("on",prefs[key]);
  _syncNotifPrefs();
  toast((prefs[key]?"✅ ":"🔕 ")+key+(prefs[key]?" attivo":" disattivato"),"ok");
}
function setPreturno(min){
  lsS("ct_notif_pre",min);aggNotifStatus();toggleImpSec("sec-preturno","arr-pre");
  _syncNotifPrefs();
  toast(min>0?"⏰ "+(min>=60?(min/60)+"h":""+min+"min")+" prima":"🔕 Pre-turno off","ok");
}
// Alias usato dai nuovi bottoni anticipo pre-turno
function setNotifPre(min){
  lsS("ct_notif_pre", min);
  _syncNotifPrefs();
  aggNotifStatus();
  // Rischedulazione push con il nuovo anticipo
  if(typeof schedulaPreTurniFirebase === 'function'){
    lsS("ct_push_scheduled", []); // reset per forzare rischedulazione
    setTimeout(schedulaPreTurniFirebase, 300);
  }
  var labels={60:"1h prima",360:"6h prima",720:"12h prima",1440:"24h prima"};
  toast("⏰ Notifica turno: "+(labels[min]||min+"min prima"),"ok");
}
// Salva preferenze notifiche nel profilo utente su Firestore
function _syncNotifPrefs(){
  if(!window.FirebaseModule) return;
  var sess=lsG("ct_session",null);
  if(!sess||!sess.userId) return;
  var me=lsG("ct_me",null);
  if(!me) return;
  me.notif_prefs=lsG("ct_notif_prefs",{});
  me.notif_pre=lsG("ct_notif_pre",60);
  lsS("ct_me",me);
  window.FirebaseModule.saveUserProfile(sess.userId,me,me.reparto).catch(function(){});
}

function inviaNotifTest(){
  if(!("Notification" in window)||Notification.permission!=="granted"){
    toast("🚫 Abilita prima le notifiche","err");return;
  }
  var me=lsG("ct_me",null);
  new Notification("🔔 C-Turni — Test notifica",{
    body:"Ciao "+(me?me.nome:"!")+" — le notifiche funzionano correttamente.",
    icon:_NOTIF_ICON
  });
  toast("🔔 Notifica inviata","ok");
}

// ---- FESTIVIT ----
function isFestivo(ds){
  var d=_parseDate(ds);
  if(d.getDay()===0)return true;
  var mm=("0"+(d.getMonth()+1)).slice(-2),gg=("0"+d.getDate()).slice(-2);
  if(["01-01","06-01","04-25","05-01","06-02","08-15","11-01","12-08","12-25","12-26"].indexOf(mm+"-"+gg)!==-1)return true;
  var y=d.getFullYear(),a=y%19,b=Math.floor(y/100),c=y%100,d2=Math.floor(b/4),e=b%4;
  var f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d2-g+15)%30;
  var i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451);
  var month=Math.floor((h+l-7*m+114)/31),day=((h+l-7*m+114)%31)+1;
  var pasqua=new Date(y,month-1,day),lp=new Date(y,month-1,day+1);
  return d.toDateString()===pasqua.toDateString()||d.toDateString()===lp.toDateString();
}
function checkFestivoTurno(t){
  if(!t) return;
  var me = lsG("ct_me", null);
  if(!me) return;
  var myPid = parseInt(localStorage.getItem('ct_my_pid')||'0');
  // Verifica che il turno appartenga all'utente
  if(t.pid !== me.id && t.pid !== myPid && !(me.uid && t.uid === me.uid)) return;

  var d = _parseDate(t.data);
  var isDomenica = (d.getDay() === 0);
  // Usa getNomeFestivo (esclude domeniche) per festività infrasettimanali
  var nomeFest = getNomeFestivo(t.data);
  // Patrono: leggi da impostazioni
  var patrono = lsG('ct_patrono', null);
  if(patrono && t.data === patrono && !isDomenica) nomeFest = nomeFest || 'Patrono';

  var tipiLavorativi = {mattina:1, ml:1, pomeriggio:1, pl:1, notte:1, sera:1};
  var tipiRiposo = {riposo:1, recupero:1};

  var matura = false;
  var motivo = '';

  if(nomeFest){
    // REGOLA 1: Festivo + Turno lavorativo → +1 recupero maturato
    if(tipiLavorativi[t.tipo]){
      matura = true;
      motivo = 'Lavoro festivo: ' + nomeFest;
    }
    // REGOLA 2: Festivo + Riposo + NON domenica → +1 recupero maturato
    else if(tipiRiposo[t.tipo] && !isDomenica){
      matura = true;
      motivo = 'Riposo festivo: ' + nomeFest;
    }
    // REGOLA 3: Festivo + Riposo + Domenica → Festività Pagata (nessun recupero)
    else if(tipiRiposo[t.tipo] && isDomenica){
      var keyPag = 'ct_festpag_' + t.id;
      if(!localStorage.getItem(keyPag)){
        localStorage.setItem(keyPag, '1');
        var prefs3 = lsG("ct_notif_prefs", {festivi:true});
        if(prefs3.festivi !== false) toast('📅 Festività Pagata: ' + nomeFest + ' (domenica)', 'ok');
      }
      return;
    }
  }

  if(!matura) return;

  var key = 'ct_rec_' + t.id;
  if(localStorage.getItem(key)) return; // già conteggiato
  localStorage.setItem(key, '1');

  var REC = lsG("ct_recuperi", []);
  REC.push({
    id: t.id,
    data: t.data,
    tipo: t.tipo,
    nomeFest: nomeFest,
    label: motivo,
    usato: false
  });
  lsS("ct_recuperi", REC);
  me.recuperiExtra = REC.filter(function(r){ return !r.usato; }).length;
  lsS("ct_me", me);
  var U = lsG("ct_u", []);
  for(var i=0; i<U.length; i++){
    if(U[i].id===me.id || U[i].uid===me.uid){ U[i].recuperiExtra = me.recuperiExtra; break; }
  }
  lsS("ct_u", U);
  if(window.FirebaseModule){
    var sess = lsG('ct_session', null);
    if(sess && sess.userId) window.FirebaseModule.saveUserProfile(sess.userId, me, me.reparto).catch(function(){});
  }
  var prefs = lsG("ct_notif_prefs", {festivi:true});
  if(prefs.festivi !== false) toast('🏅 +1 Recupero: ' + motivo, 'ok');
}

// ---- TODO ----
var _tdFiltro="tutti";
function schedulaNotifTodo(item){
  var prefs=lsG("ct_notif_prefs",{todo:true});if(prefs.todo===false)return;
  if(!item.data)return;
  var ora=item.ora||"08:00";
  var dt=new Date(item.data+"T"+ora+":00"),ms=dt-Date.now();if(ms<=0)return;
  var titolo="\u2705 C-Turni \u2014 "+item.tit;
  var body=(item.prio==="alta"?"\uD83D\uDD34 Alta priorit\u00E0 | ":"")+(item.note||"Promemoria di oggi");
  // Schedula push FCM — retry se FirebaseModule non ancora pronto
  function _doSchedule(){
    var sess=lsG("ct_session",null);
    if(sess&&sess.userId&&window.FirebaseModule&&typeof window.FirebaseModule.schedulePush==="function"){
      window.FirebaseModule.schedulePush(sess.userId,titolo,body,dt.toISOString()).catch(function(e){console.warn("schedulePush todo:",e.message);});
    } else {
      setTimeout(_doSchedule, 2000);
    }
  }
  _doSchedule();
  // Notifica locale se app aperta
  if("Notification" in window && Notification.permission==="granted"){
    setTimeout(function(){
      new Notification(titolo,{body:body,icon:_NOTIF_ICON});
    },Math.min(ms,2147483647));
  }
}
function scheduleAllTodoNotif(){lsG("ct_td",[]).forEach(function(t){if(!t.done)schedulaNotifTodo(t);});}
function salvaTodo(){
  var tit=document.getElementById("td-tit").value.trim();
  var err=document.getElementById("todo-err");err.classList.remove("on");
  if(!tit){err.classList.add("on");return;}
  var oraEl=document.getElementById("td-ora");
  var ora=oraEl?oraEl.value:"";
  var item={id:Date.now(),tit:tit,note:document.getElementById("td-note").value.trim(),
    prio:document.getElementById("td-prio").value,data:document.getElementById("td-data").value||"",
    ora:ora,ricor:document.getElementById("td-ricor").value||"",done:false};
  var condividi = document.getElementById('td-condividi') && document.getElementById('td-condividi').checked;
  if(condividi){
    var me=lsG('ct_me',null);
    item.condiviso=true; item.autore=(me?(me.nome||'')+(me.cognome?' '+me.cognome:''):'').trim(); item.autoreUid=me?me.uid:'';
    if(window.FirebaseModule) window.FirebaseModule.saveTodoCondiviso(item).catch(function(e){ toast('Errore condivisione: '+e.message,'err'); });
  }
  var TD=lsG("ct_td",[]);TD.push(item);lsS("ct_td",TD);
  if(window.FirebaseModule)window.FirebaseModule.saveTodo(TD);
  schedulaNotifTodo(item);
  if(ora&&item.data)_schedulaNotifPrecisa("\u23F0 To-Do: "+tit,item.data,ora);
  closeM("m-todo");renderTodo();
  var chk=document.getElementById('td-condividi');if(chk)chk.checked=false;
  ["td-tit","td-note","td-data","td-ora"].forEach(function(id){var e=document.getElementById(id);if(e)e.value="";});
  var rep=(typeof _reparto==='function')?_reparto():(lsG('ct_me',null)||{}).reparto||'?';
  toast(condividi?"\u2705 Condiviso nel reparto ["+rep+"]":"Promemoria salvato","ok");
}

// ---- AGENDA ----
function schedulaNotifAgenda(item){
  var prefs=lsG("ct_notif_prefs",{agenda:true});if(prefs.agenda===false)return;
  var dt=new Date(item.data+"T"+(item.ora||"08:00")+":00");
  var scheduleAt=new Date(dt.getTime()-((item.notif||0)*60000));
  var ms=scheduleAt-Date.now();if(ms<=0)return;
  var titoloAg="\uD83D\uDCC5 C-Turni \u2014 "+item.tit;
  var bodyAg=(item.ora?"Ore "+item.ora+" | ":"")+(item.luogo||"");
  function _doScheduleAg(){
    var sess=lsG("ct_session",null);
    if(sess&&sess.userId&&window.FirebaseModule&&typeof window.FirebaseModule.schedulePush==="function"){
      window.FirebaseModule.schedulePush(sess.userId,titoloAg,bodyAg,scheduleAt.toISOString()).catch(function(e){console.warn("schedulePush agenda:",e.message);});
    } else {
      setTimeout(_doScheduleAg, 2000);
    }
  }
  _doScheduleAg();
  if("Notification" in window && Notification.permission==="granted"){
    setTimeout(function(){
      new Notification(titoloAg,{body:bodyAg,icon:_NOTIF_ICON});
    },Math.min(ms,2147483647));
  }
}
function salvaAgenda(){
  var tit=document.getElementById("ag-tit").value.trim(),dt=document.getElementById("ag-data").value;
  var err=document.getElementById("agenda-err");err.classList.remove("on");
  if(!tit||!dt){err.classList.add("on");return;}
  var item={id:Date.now(),tit:tit,data:dt,ora:document.getElementById("ag-ora").value||"",
    luogo:document.getElementById("ag-luogo").value.trim()||"",note:document.getElementById("ag-note").value.trim()||"",
    notif:parseInt(document.getElementById("ag-notif").value)||0};
  var condividi = document.getElementById('ag-condividi') && document.getElementById('ag-condividi').checked;
  if(condividi){
    var me=lsG('ct_me',null);
    item.condiviso=true; item.autore=(me?(me.nome||'')+(me.cognome?' '+me.cognome:''):'').trim(); item.autoreUid=me?me.uid:'';
    if(window.FirebaseModule) window.FirebaseModule.saveAgendaCondivisa(item).catch(function(e){ toast('Errore condivisione: '+e.message,'err'); });
  }
  var AG=lsG("ct_ag",[]);AG.push(item);AG.sort(function(a,b){return a.data>b.data?1:-1;});lsS("ct_ag",AG);
  if(item.notif>0)schedulaNotifAgenda(item);
  if(window.FirebaseModule) window.FirebaseModule.saveAgenda(AG).catch(function(){});
  closeM("m-agenda");renderAgenda();
  var chk=document.getElementById('ag-condividi');if(chk)chk.checked=false;
  ["ag-tit","ag-data","ag-ora","ag-luogo","ag-note"].forEach(function(id){var e=document.getElementById(id);if(e)e.value="";});
  var rep2=(typeof _reparto==='function')?_reparto():(lsG('ct_me',null)||{}).reparto||'?';
  toast(condividi?"\u2705 Condiviso nel reparto ["+rep2+"]":"Appuntamento salvato","ok");
}
function delAgenda(id){
  var AG = lsG("ct_ag",[]).filter(function(x){return x.id!==id;});
  lsS("ct_ag", AG);
  if(window.FirebaseModule) window.FirebaseModule.deleteAgenda(id).catch(function(){});
  renderAgenda();
}

function rinviaAgenda(id){
  // Cerca prima in agenda personale, poi in condivisa
  var AG=lsG("ct_ag",[]);
  var a=AG.find(function(x){return x.id===id;});
  var isCondivisa = false;
  if(!a){
    var AGc=lsG("ct_ag_condivisa",[]);
    a=AGc.find(function(x){return x.id===id;});
    isCondivisa = !!a;
  }
  if(!a)return;
  var html=
    '<div id="m-rinvia-ag" style="display:flex;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:99999;align-items:flex-end;justify-content:center;backdrop-filter:blur(3px)">'
    +'<div style="background:var(--card);border-radius:24px 24px 0 0;width:100%;max-width:520px;padding:20px 20px calc(20px + env(safe-area-inset-bottom,0px));box-shadow:0 -8px 32px rgba(0,0,0,.4)">'
    +'<div style="width:36px;height:4px;background:var(--border2);border-radius:2px;margin:0 auto 14px"></div>'
    +'<div style="font-size:15px;font-weight:800;margin-bottom:14px">&#128336; Rinvia: '+a.tit+'</div>'
    +'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">'
    +'<button class="btn btn-g btn-sm" onclick="_rinviaAgRel('+id+',1,'+isCondivisa+')">+1 giorno</button>'
    +'<button class="btn btn-g btn-sm" onclick="_rinviaAgRel('+id+',3,'+isCondivisa+')">+3 giorni</button>'
    +'<button class="btn btn-g btn-sm" onclick="_rinviaAgRel('+id+',7,'+isCondivisa+')">+1 settimana</button>'
    +'</div>'
    +'<div class="fg"><label>Oppure scegli data e ora</label>'
    +'<input type="date" id="ra-data" class="fc" value="'+a.data+'" style="margin-bottom:8px">'
    +'<input type="time" id="ra-ora" class="fc" value="'+(a.ora||'')+'"></div>'
    +'<div style="display:flex;gap:10px;margin-top:4px">'
    +'<button class="btn btn-g" style="flex:1" onclick="document.getElementById(\'m-rinvia-ag\').remove()">Annulla</button>'
    +'<button class="btn btn-p" style="flex:1" onclick="_rinviaAgData('+id+','+isCondivisa+')">&#128336; Rinvia</button>'
    +'</div></div></div>';
  document.body.insertAdjacentHTML('beforeend',html);
}

function _rinviaAgRel(id,giorni,isCondivisa){
  if(isCondivisa){
    var AGc=lsG("ct_ag_condivisa",[]);
    var a=AGc.find(function(x){return x.id===id;});
    if(!a)return;
    var base=new Date(a.data+'T00:00:00');
    base.setDate(base.getDate()+giorni);
    a.data=base.toISOString().slice(0,10);
    lsS("ct_ag_condivisa",AGc);
    if(window.FirebaseModule)window.FirebaseModule.saveAgendaCondivisa(a).catch(function(){});
    var bs=document.getElementById('m-rinvia-ag');if(bs)bs.remove();
    renderAgendaPg();
    toast("&#128336; Rinviato al "+a.data,"ok");
    return;
  }
  var AG=lsG("ct_ag",[]);
  var a=AG.find(function(x){return x.id===id;});
  if(!a)return;
  var base=new Date(a.data+'T00:00:00');
  base.setDate(base.getDate()+giorni);
  a.data=base.toISOString().slice(0,10);
  AG.sort(function(x,y){return x.data>y.data?1:-1;});
  lsS("ct_ag",AG);
  if(window.FirebaseModule)window.FirebaseModule.saveAgenda(AG).catch(function(){});
  if(a.condiviso&&window.FirebaseModule)window.FirebaseModule.saveAgendaCondivisa(a).catch(function(){});
  if(a.notif>0)schedulaNotifAgenda(a);
  var bs=document.getElementById('m-rinvia-ag');if(bs)bs.remove();
  renderAgenda();
  if(typeof renderAgendaPg==='function') renderAgendaPg();
  toast("&#128336; Rinviato al "+a.data,"ok");
}

function _rinviaAgData(id,isCondivisa){
  var data=(document.getElementById('ra-data')||{}).value;
  var ora=(document.getElementById('ra-ora')||{}).value||'';
  if(!data){toast("Scegli una data","err");return;}
  if(isCondivisa){
    var AGc=lsG("ct_ag_condivisa",[]);
    var a=AGc.find(function(x){return x.id===id;});
    if(!a)return;
    a.data=data;if(ora)a.ora=ora;
    lsS("ct_ag_condivisa",AGc);
    if(window.FirebaseModule)window.FirebaseModule.saveAgendaCondivisa(a).catch(function(){});
    var bs=document.getElementById('m-rinvia-ag');if(bs)bs.remove();
    renderAgendaPg();
    toast("&#128336; Rinviato al "+data+(ora?" ore "+ora:""),"ok");
    return;
  }
  var AG=lsG("ct_ag",[]);
  var a=AG.find(function(x){return x.id===id;});
  if(!a)return;
  a.data=data;if(ora)a.ora=ora;
  AG.sort(function(x,y){return x.data>y.data?1:-1;});
  lsS("ct_ag",AG);
  if(window.FirebaseModule)window.FirebaseModule.saveAgenda(AG).catch(function(){});
  if(a.condiviso&&window.FirebaseModule)window.FirebaseModule.saveAgendaCondivisa(a).catch(function(){});
  if(a.notif>0)schedulaNotifAgenda(a);
  var bs=document.getElementById('m-rinvia-ag');if(bs)bs.remove();
  renderAgenda();
  if(typeof renderAgendaPg==='function') renderAgendaPg();
  toast("&#128336; Rinviato al "+data+(ora?" ore "+ora:""),"ok");
}
// ── Dettaglio appuntamento personale ──────────────────────────
function apriDettaglioAgenda(id){
  var AG = lsG('ct_ag',[]);
  var a = AG.find(function(x){ return x.id===id; });
  if(!a) return;
  var mN=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
  var d = new Date(a.data+'T00:00:00');
  var html = '<div id="m-det-ag" style="display:flex;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:99999;align-items:flex-end;justify-content:center;backdrop-filter:blur(3px)">'
    +'<div style="background:var(--card);border-radius:24px 24px 0 0;width:100%;max-width:520px;padding:20px 20px calc(20px + env(safe-area-inset-bottom,0px));box-shadow:0 -8px 32px rgba(0,0,0,.4)">'
    +'<div style="width:36px;height:4px;background:var(--border2);border-radius:2px;margin:0 auto 16px"></div>'
    +'<div style="font-size:18px;font-weight:900;margin-bottom:4px">'+a.tit+'</div>'
    +'<div style="font-size:13px;color:var(--txt2);margin-bottom:14px">&#128197; '+d.getDate()+' '+mN[d.getMonth()]+' '+d.getFullYear()+(a.ora?' &nbsp;&#128336; '+a.ora:'')+'</div>'
    +(a.luogo?'<div style="font-size:12px;color:var(--txt2);margin-bottom:8px">&#128205; '+a.luogo+'</div>':'')
    +(a.note?'<div style="font-size:12px;color:var(--txt2);margin-bottom:14px;padding:10px;background:var(--bg2);border-radius:10px">'+a.note+'</div>':'')
    +'<div style="display:flex;gap:10px;margin-top:8px">'
    +'<button class="btn btn-g" style="flex:1" onclick="document.getElementById(\'m-det-ag\').remove()">Chiudi</button>'
    +'<button class="btn btn-p" style="flex:1" onclick="document.getElementById(\'m-det-ag\').remove();rinviaAgenda('+id+')">&#128336; Rinvia</button>'
    +'<button class="btn btn-d btn-sm" style="width:auto" onclick="document.getElementById(\'m-det-ag\').remove();delAgenda('+id+')">&#128465;</button>'
    +'</div></div></div>';
  document.body.insertAdjacentHTML('beforeend', html);
}
function apriDettaglioAgendaCondivisa(id){
  var AG = lsG('ct_ag_condivisa',[]);
  var a = AG.find(function(x){ return x.id===id; });
  if(!a) return;
  var mN=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
  var d = new Date(a.data+'T00:00:00');
  var html = '<div id="m-det-ag-cond" style="display:flex;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:99999;align-items:flex-end;justify-content:center;backdrop-filter:blur(3px)">'
    +'<div style="background:var(--card);border-radius:24px 24px 0 0;width:100%;max-width:520px;padding:20px 20px calc(20px + env(safe-area-inset-bottom,0px));box-shadow:0 -8px 32px rgba(0,0,0,.4)">'
    +'<div style="width:36px;height:4px;background:var(--border2);border-radius:2px;margin:0 auto 16px"></div>'
    +'<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;color:var(--blue);margin-bottom:6px">&#128101; Impegno Reparto</div>'
    +'<div style="font-size:18px;font-weight:900;margin-bottom:4px">'+a.tit+'</div>'
    +'<div style="font-size:13px;color:var(--txt2);margin-bottom:14px">&#128197; '+d.getDate()+' '+mN[d.getMonth()]+' '+d.getFullYear()+(a.ora?' &nbsp;&#128336; '+a.ora:'')+'</div>'
    +(a.luogo?'<div style="font-size:12px;color:var(--txt2);margin-bottom:8px">&#128205; '+a.luogo+'</div>':'')
    +(a.note?'<div style="font-size:12px;color:var(--txt2);margin-bottom:8px;padding:10px;background:var(--bg2);border-radius:10px">'+a.note+'</div>':'')
    +(a.autore?'<div style="font-size:11px;color:var(--txt3);margin-bottom:14px">Aggiunto da: '+a.autore+'</div>':'')
    +'<div style="display:flex;gap:10px;margin-top:8px">'
    +'<button class="btn btn-g" style="flex:1" onclick="document.getElementById(\'m-det-ag-cond\').remove()">Chiudi</button>'
    +'<button class="btn btn-p" style="flex:1" onclick="document.getElementById(\'m-det-ag-cond\').remove();rinviaAgenda('+id+')">&#128336; Rinvia</button>'
    +'</div></div></div>';
  document.body.insertAdjacentHTML('beforeend', html);
}

// Filter chips agenda — struttura pronta, logica filtro da implementare
function filtraAgenda(tipo, btn) {
  document.querySelectorAll('.ag-chip').forEach(function(c){ c.classList.remove('on'); });
  if(btn) btn.classList.add('on');
  renderAgendaPg(tipo);
}

// Popola il Bento Box riepilogo in cima all'Agenda
function _aggiornaBentoAg() {
  var oggi = new Date().toISOString().slice(0,10);
  var mN = ["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
  var AG = lsG("ct_ag",[]).filter(function(x){ return x.data >= oggi; });
  var TD = lsG("ct_td",[]).filter(function(x){ return !x.done; });

  var nApp = document.getElementById('ag-bento-n-app');
  var nTodo = document.getElementById('ag-bento-n-todo');
  if(nApp) nApp.textContent = AG.length;
  if(nTodo) nTodo.textContent = TD.length;

  // Prossimo evento (appuntamento o todo con data)
  var prossimo = null;
  AG.forEach(function(a){ if(!prossimo || a.data < prossimo.data) prossimo = {tit:a.tit, data:a.data, tipo:'app'}; });
  TD.forEach(function(t){ if(t.data && (!prossimo || t.data < prossimo.data)) prossimo = {tit:t.tit, data:t.data, tipo:'todo'}; });

  var titEl = document.getElementById('ag-bento-prossimo-tit');
  var datEl = document.getElementById('ag-bento-prossimo-data');
  if(titEl && datEl) {
    if(prossimo) {
      var d = new Date(prossimo.data+"T00:00:00");
      titEl.textContent = (prossimo.tipo==='todo'?'✓ ':'📅 ') + prossimo.tit;
      datEl.textContent = d.getDate()+' '+mN[d.getMonth()]+' '+d.getFullYear();
    } else {
      titEl.textContent = 'Nessun evento imminente';
      datEl.textContent = '';
    }
  }
}

// Render agenda nella pagina dedicata (pag-ag)
function renderAgendaPg(filtro) {
  var el  = document.getElementById('agenda-list-pg');
  var el2 = document.getElementById('agenda-condivisa-list-pg');
  var w2  = document.getElementById('agenda-condivisa-wrap-pg');
  if(!el) return;
  var oggi = new Date().toISOString().slice(0,10);
  var AG = lsG("ct_ag",[]).filter(function(x){ return x.data >= oggi; });
  var mN = ["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
  if(!AG.length){
    el.innerHTML='<div style="text-align:center;color:var(--txt2);padding:40px;font-size:13px">Nessun appuntamento &#128197;</div>';
  } else {
    el.innerHTML = AG.map(function(a){
      var d = new Date(a.data+"T00:00:00");
      var ora = a.ora ? '<div style="font-size:11px;color:var(--txt2);margin-top:2px">&#128336; '+a.ora+'</div>' : '';
      var luogo = a.luogo ? '<div style="font-size:11px;color:var(--txt2);margin-top:2px">&#128205; '+a.luogo+'</div>' : '';
      var note = a.note ? '<div style="font-size:11px;color:var(--txt2);margin-top:2px;font-style:italic">'+a.note+'</div>' : '';
      return '<div class="ag-item" onclick="apriDettaglioAgenda('+a.id+')" style="cursor:pointer">'+
        '<div class="ag-item-date"><div class="ag-item-date-day">'+d.getDate()+'</div><div class="ag-item-date-mon">'+mN[d.getMonth()]+'</div></div>'+
        '<div class="ag-item-body"><div class="ag-item-title">'+a.tit+'</div>'+ora+luogo+note+'</div>'+
        '<div class="ag-item-snooze"><button class="ag-snooze-btn" onclick="event.stopPropagation();rinviaAgenda('+a.id+')" title="Rinvia">&#128336;</button></div>'+
        '<button onclick="event.stopPropagation();delAgenda('+a.id+')" style="background:none;border:none;color:var(--txt3);cursor:pointer;font-size:16px;appearance:none;-webkit-appearance:none;padding:10px 12px 10px 0;align-self:flex-start">&#128465;</button>'+
      '</div>';
    }).join('');
  }
  // Condivisi reparto — con dettagli completi e rinvia
  var AGcond = lsG('ct_ag_condivisa',[]).filter(function(x){ return x.data >= oggi; });
  if(el2 && w2){
    if(AGcond.length){
      w2.style.display='block';
      el2.innerHTML = AGcond.map(function(a){
        var d = new Date(a.data+"T00:00:00");
        var ora = a.ora ? '<div style="font-size:11px;color:var(--txt2);margin-top:2px">&#128336; '+a.ora+'</div>' : '';
        var luogo = a.luogo ? '<div style="font-size:11px;color:var(--txt2);margin-top:2px">&#128205; '+a.luogo+'</div>' : '';
        var note = a.note ? '<div style="font-size:11px;color:var(--txt2);margin-top:2px;font-style:italic">'+a.note+'</div>' : '';
        var autore = a.autore ? '<div style="font-size:10px;color:var(--txt3);margin-top:2px">&#128100; '+a.autore+'</div>' : '';
        return '<div class="ag-item" onclick="apriDettaglioAgendaCondivisa('+a.id+')" style="cursor:pointer">'+
          '<div class="ag-item-date"><div class="ag-item-date-day">'+d.getDate()+'</div><div class="ag-item-date-mon">'+mN[d.getMonth()]+'</div></div>'+
          '<div class="ag-item-body"><div class="ag-item-title">&#128101; '+a.tit+'</div>'+ora+luogo+note+autore+'</div>'+
          '<div class="ag-item-snooze"><button class="ag-snooze-btn" onclick="event.stopPropagation();rinviaAgenda('+a.id+')" title="Rinvia">&#128336;</button></div>'+
          '<button onclick="event.stopPropagation();delAgendaCondivisa('+a.id+')" style="background:none;border:none;color:var(--txt3);cursor:pointer;font-size:16px;appearance:none;-webkit-appearance:none;padding:10px 12px 10px 0;align-self:flex-start">&#128465;</button>'+
        '</div>';
      }).join('');
    } else { w2.style.display='none'; }
  }
  // Aggiorna bento box
  _aggiornaBentoAg();
  // Render anche i To-Do
  renderTodoAg('tutti');
}

// Filter chips agenda pagina
function filtraAgendaPg(tipo, btn) {
  document.querySelectorAll('.ag-chip').forEach(function(c){ c.classList.remove('on'); });
  if(btn) btn.classList.add('on');
  var secAg = document.getElementById('ag-section-agenda');
  var secTd = document.getElementById('ag-section-compiti');
  if(tipo === 'agenda')  { if(secAg) secAg.style.display=''; if(secTd) secTd.style.display='none'; }
  else if(tipo === 'compiti') { if(secAg) secAg.style.display='none'; if(secTd) secTd.style.display=''; }
  else { if(secAg) secAg.style.display=''; if(secTd) secTd.style.display=''; }
  renderAgendaPg(tipo);
}

// Render To-Do nella pagina Agenda
var _tdFiltroAg = 'tutti';
function filtraTodoAg(f) {
  _tdFiltroAg = f;
  ['tutti','oggi','alta'].forEach(function(k){
    var b = document.getElementById('tf-'+k+'-ag');
    if(b){ b.classList.toggle('on', k===f); }
  });
  renderTodoAg(f);
}
function renderTodoAg(filtro) {
  var el = document.getElementById('todo-list-ag');
  if(!el) return;
  var oggi = new Date().toISOString().slice(0,10);
  var TD = lsG("ct_td",[]);
  if(filtro === 'oggi') TD = TD.filter(function(t){ return t.data === oggi; });
  else if(filtro === 'alta') TD = TD.filter(function(t){ return t.prio === 'alta' && !t.done; });
  if(!TD.length){ el.innerHTML='<div style="text-align:center;color:var(--txt2);padding:32px;font-size:13px">Nessun compito &#9989;</div>'; return; }
  var mN = ["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
  var prioCol  = {alta:'#f2453d', media:'#ffd166', bassa:'#06d6a0'};
  var prioBg   = {alta:'rgba(242,69,61,.15)', media:'rgba(255,209,102,.15)', bassa:'rgba(6,214,160,.15)'};
  var prioIco  = {alta:'🔴', media:'🟡', bassa:'🟢'};
  el.innerHTML = TD.map(function(t){
    var col   = prioCol[t.prio]  || 'var(--blue)';
    var bg    = prioBg[t.prio]   || 'rgba(91,159,255,.12)';
    var ico   = prioIco[t.prio]  || '⚪';
    var dataStr = '';
    if(t.data){ var d=new Date(t.data+"T00:00:00"); dataStr='<span style="font-size:10px;background:var(--bg2);padding:2px 7px;border-radius:8px;color:var(--txt2)">&#128197; '+d.getDate()+' '+mN[d.getMonth()]+'</span>'; }
    var noteStr = t.note ? '<div style="font-size:11px;color:var(--txt2);margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+t.note+'</div>' : '';
    var done = t.done;
    return '<div style="background:var(--card);border:1.5px solid '+(done?'var(--border)':col+'44')+';border-radius:20px;padding:0;margin-bottom:10px;overflow:hidden;'+(done?'opacity:.55':'')+'">'+
      // Barra colore sinistra
      '<div style="display:flex;align-items:stretch">'+
        '<div style="width:5px;background:'+(done?'var(--border)':col)+';flex-shrink:0;border-radius:20px 0 0 20px"></div>'+
        '<div style="flex:1;padding:12px 12px 12px 14px;min-width:0">'+
          // Riga titolo + check
          '<div style="display:flex;align-items:flex-start;gap:10px">'+
            // Check button M3
            '<button onclick="toggleTodo('+t.id+');renderTodoAg(\''+(_tdFiltroAg||'tutti')+'\')" style="width:26px;height:26px;border-radius:50%;border:2px solid '+(done?'var(--green)':col)+';background:'+(done?'var(--green)':'transparent')+';color:#fff;font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;appearance:none;-webkit-appearance:none;transition:all .2s;margin-top:1px">'+(done?'✓':'')+'</button>'+
            '<div style="flex:1;min-width:0">'+
              '<div style="font-size:14px;font-weight:700;color:var(--txt);'+(done?'text-decoration:line-through;':'')+'white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+t.tit+'</div>'+
              noteStr+
              '<div style="display:flex;align-items:center;gap:6px;margin-top:6px;flex-wrap:wrap">'+
                '<span style="font-size:10px;font-weight:800;background:'+bg+';color:'+col+';padding:2px 8px;border-radius:8px;text-transform:uppercase">'+ico+' '+(t.prio||'—')+'</span>'+
                dataStr+
              '</div>'+
            '</div>'+
            // Azioni destra
            '<div style="display:flex;flex-direction:column;gap:2px;flex-shrink:0">'+
              '<button onclick="rinviaTodo('+t.id+')" title="Snooze" style="width:32px;height:32px;border-radius:10px;border:1px solid var(--border);background:var(--bg2);color:var(--blue);font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;appearance:none;-webkit-appearance:none;transition:background .15s">&#128336;</button>'+
              '<button onclick="delTodo('+t.id+');renderTodoAg(\''+(_tdFiltroAg||'tutti')+'\')" title="Elimina" style="width:32px;height:32px;border-radius:10px;border:1px solid var(--border);background:var(--bg2);color:var(--txt3);font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;appearance:none;-webkit-appearance:none;transition:background .15s">&#128465;</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  }).join('');
}

function renderAgenda(){
  var el=document.getElementById("agenda-list");if(!el)return;
  var AG=lsG("ct_ag",[]).filter(function(x){return x.data>=new Date().toISOString().slice(0,10);});
  if(!AG.length){el.innerHTML='<div style="text-align:center;color:var(--txt2);padding:40px;font-size:13px">Nessun appuntamento &#128197;</div>';return;}
  var mN=["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
  el.innerHTML=AG.map(function(a){
    var d=new Date(a.data+"T00:00:00");
    var dayNum=d.getDate();
    var monStr=mN[d.getMonth()];
    var ora=a.ora?'<div style="font-size:11px;color:var(--txt2);margin-top:2px">&#128336; '+a.ora+'</div>':"";
    var luogo=a.luogo?'<div style="font-size:11px;color:var(--txt2);margin-top:2px">&#128205; '+a.luogo+'</div>':"";
    var note=a.note?'<div style="font-size:11px;color:var(--txt2);margin-top:2px">'+a.note+'</div>':"";
    return '<div class="ag-item">'+
      '<div class="ag-item-date"><div class="ag-item-date-day">'+dayNum+'</div><div class="ag-item-date-mon">'+monStr+'</div></div>'+
      '<div class="ag-item-body">'+
        '<div class="ag-item-title">'+a.tit+'</div>'+
        ora+luogo+note+
      '</div>'+
      '<div class="ag-item-snooze">'+
        '<button class="ag-snooze-btn" onclick="event.stopPropagation();rinviaAgenda('+a.id+')" title="Rinvia">&#128336;</button>'+
      '</div>'+
      '<button onclick="delAgenda('+a.id+')" style="background:none;border:none;color:var(--txt3);cursor:pointer;font-size:16px;appearance:none;-webkit-appearance:none;padding:10px 12px 10px 0;align-self:flex-start">&#128465;</button>'+
    '</div>';
  }).join("");
}

// ---- TODO/AGENDA CONDIVISI ----
function renderTodoCondivisi(){
  var wrap=document.getElementById('todo-condivisi-wrap');
  var el=document.getElementById('todo-condivisi-list');
  if(!el)return;
  var TD=lsG('ct_td_condivisi',[]);
  if(!TD.length){if(wrap)wrap.style.display='none';return;}
  if(wrap)wrap.style.display='block';
  el.innerHTML=TD.map(function(t){
    var scad=t.data?'<span style="font-size:10px;color:var(--txt2);margin-left:6px">&#128197; '+t.data.split('-').reverse().join('/')+'</span>':"";
    var autore=t.autore?'<span style="font-size:10px;color:var(--txt2)"> — '+t.autore+'</span>':"";
    var prioCol={alta:'var(--red)',media:'var(--gold)',bassa:'var(--green)'}[t.prio]||'var(--txt2)';
    var prio=t.prio?'<span style="font-size:9px;font-weight:700;color:'+prioCol+';text-transform:uppercase;margin-left:6px">'+t.prio+'</span>':"";
    return '<div class="todo-item" style="opacity:'+(t.done?.5:1)+';flex-direction:column;align-items:stretch;gap:6px">'
      +'<div style="display:flex;align-items:flex-start;gap:8px">'
      +'<div style="flex:1;min-width:0"><div style="font-weight:700;font-size:13px">&#128101; '+t.tit+autore+'</div>'
      +(t.note?'<div style="font-size:11px;color:var(--txt2);margin-top:2px">'+t.note+'</div>':"")
      +'<div style="display:flex;align-items:center;flex-wrap:wrap;gap:4px;margin-top:4px">'+scad+prio+'</div>'
      +'</div>'
      +'<button onclick="delTodoCondiviso('+t.id+')" title="Completato/Elimina" style="background:none;border:none;color:var(--txt3);cursor:pointer;font-size:14px;appearance:none;-webkit-appearance:none;flex-shrink:0;padding:4px">&#128465;</button>'
      +'</div>'
      +'<div style="display:flex;gap:6px">'
      +'<button onclick="rinviaTodoCondiviso('+t.id+')" style="flex:1;background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:5px 8px;font-size:11px;font-weight:700;color:var(--blue);cursor:pointer;appearance:none;-webkit-appearance:none;">&#128336; Rinvia</button>'
      +'<button onclick="toggleTodoCondiviso('+t.id+')" style="flex:1;background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:5px 8px;font-size:11px;font-weight:700;color:'+(t.done?'var(--green)':'var(--txt2)')+';cursor:pointer;appearance:none;-webkit-appearance:none;">'+(t.done?'&#10003; Fatto':'&#9744; Segna fatto')+'</button>'
      +'</div>'
      +'</div>';
  }).join('');
}
function renderAgendaCondivisa(){
  var wrap=document.getElementById('agenda-condivisa-wrap');
  var el=document.getElementById('agenda-condivisa-list');
  if(!el)return;
  var AG=lsG('ct_ag_condivisa',[]).filter(function(x){return x.data>=new Date().toISOString().slice(0,10);});
  if(!AG.length){if(wrap)wrap.style.display='none';return;}
  if(wrap)wrap.style.display='block';
  var mN=["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
  el.innerHTML=AG.map(function(a){
    var d=new Date(a.data+"T00:00:00"),ds=d.getDate()+" "+mN[d.getMonth()]+" "+d.getFullYear();
    var ora=a.ora?'<span style="margin-left:6px;color:var(--blue)">&#128336; '+a.ora+'</span>':"";
    var autore=a.autore?'<span style="font-size:10px;color:var(--txt2)"> — '+a.autore+'</span>':"";
    return '<div class="ag-item" style="flex-direction:column;align-items:stretch;gap:6px">'
      +'<div style="display:flex;justify-content:space-between;align-items:flex-start">'
      +'<div><div style="font-weight:700;font-size:13px">&#128101; '+a.tit+autore+'</div>'
      +'<div style="font-size:11px;color:var(--txt2);margin-top:2px">&#128197; '+ds+ora+'</div>'
      +(a.luogo?'<div style="font-size:11px;color:var(--txt2);margin-top:2px">&#128205; '+a.luogo+'</div>':"")
      +(a.note?'<div style="font-size:11px;color:var(--txt2);margin-top:2px">'+a.note+'</div>':"")
      +'</div>'
      +'<button onclick="delAgendaCondivisa('+a.id+')" title="Elimina" style="background:none;border:none;color:var(--txt3);cursor:pointer;font-size:16px;appearance:none;-webkit-appearance:none">&#128465;</button>'
      +'</div>'
      +'<button onclick="rinviaAgenda('+a.id+')" style="background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:5px 8px;font-size:11px;font-weight:700;color:var(--blue);cursor:pointer;appearance:none;-webkit-appearance:none;width:100%;">&#128336; Rinvia impegno</button>'
      +'</div>';
  }).join('');
}
function delTodoCondiviso(id){
  // Aggiorna subito il localStorage locale
  var TD = lsG('ct_td_condivisi', []).filter(function(x){ return x.id !== id; });
  localStorage.setItem('ct_td_condivisi', JSON.stringify(TD));
  renderTodoCondivisi();
  if(window.FirebaseModule) window.FirebaseModule.deleteTodoCondiviso(id).catch(function(){});
}
function toggleTodoCondiviso(id){
  var TD = lsG('ct_td_condivisi', []);
  var t = TD.find(function(x){ return x.id === id; });
  if(!t) return;
  t.done = !t.done;
  localStorage.setItem('ct_td_condivisi', JSON.stringify(TD));
  renderTodoCondivisi();
  if(window.FirebaseModule) window.FirebaseModule.saveTodoCondiviso(t).catch(function(){});
}
function rinviaTodoCondiviso(id){
  var TD = lsG('ct_td_condivisi', []);
  var t = TD.find(function(x){ return x.id === id; });
  if(!t) return;
  var oggi = new Date().toISOString().slice(0,10);
  var dataBase = t.data && t.data >= oggi ? t.data : oggi;
  var html =
    '<div id="m-rinvia-tc" style="display:flex;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:99999;align-items:flex-end;justify-content:center;backdrop-filter:blur(3px)">'
    +'<div style="background:var(--card);border-radius:24px 24px 0 0;width:100%;max-width:520px;padding:20px 20px calc(20px + env(safe-area-inset-bottom,0px));box-shadow:0 -8px 32px rgba(0,0,0,.4)">'
    +'<div style="width:36px;height:4px;background:var(--border2);border-radius:2px;margin:0 auto 14px"></div>'
    +'<div style="font-size:15px;font-weight:800;margin-bottom:14px">&#128336; Rinvia: '+t.tit+'</div>'
    +'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">'
    +'<button class="btn btn-g btn-sm" onclick="_rinviaTCRel('+id+',1)">+1 giorno</button>'
    +'<button class="btn btn-g btn-sm" onclick="_rinviaTCRel('+id+',3)">+3 giorni</button>'
    +'<button class="btn btn-g btn-sm" onclick="_rinviaTCRel('+id+',7)">+1 settimana</button>'
    +'</div>'
    +'<div class="fg"><label>Oppure scegli data</label>'
    +'<input type="date" id="rtc-data" class="fc" value="'+dataBase+'"></div>'
    +'<div style="display:flex;gap:10px;margin-top:12px">'
    +'<button class="btn btn-g" style="flex:1" onclick="document.getElementById(\'m-rinvia-tc\').remove()">Annulla</button>'
    +'<button class="btn btn-p" style="flex:1" onclick="_rinviaTCData('+id+')">&#128336; Rinvia</button>'
    +'</div></div></div>';
  document.body.insertAdjacentHTML('beforeend', html);
}
function _rinviaTCRel(id, giorni){
  var TD = lsG('ct_td_condivisi', []);
  var t = TD.find(function(x){ return x.id === id; });
  if(!t) return;
  var oggi = new Date().toISOString().slice(0,10);
  var base = new Date((t.data && t.data >= oggi ? t.data : oggi)+'T00:00:00');
  base.setDate(base.getDate() + giorni);
  t.data = base.toISOString().slice(0,10);
  t.done = false;
  localStorage.setItem('ct_td_condivisi', JSON.stringify(TD));
  if(window.FirebaseModule) window.FirebaseModule.saveTodoCondiviso(t).catch(function(){});
  var bs = document.getElementById('m-rinvia-tc'); if(bs) bs.remove();
  renderTodoCondivisi();
  toast('&#128336; Rinviato al '+t.data, 'ok');
}
function _rinviaTCData(id){
  var data = (document.getElementById('rtc-data')||{}).value;
  if(!data){ toast('Scegli una data','err'); return; }
  var TD = lsG('ct_td_condivisi', []);
  var t = TD.find(function(x){ return x.id === id; });
  if(!t) return;
  t.data = data; t.done = false;
  localStorage.setItem('ct_td_condivisi', JSON.stringify(TD));
  if(window.FirebaseModule) window.FirebaseModule.saveTodoCondiviso(t).catch(function(){});
  var bs = document.getElementById('m-rinvia-tc'); if(bs) bs.remove();
  renderTodoCondivisi();
  toast('&#128336; Rinviato al '+data, 'ok');
}
function delAgendaCondivisa(id){
  // Aggiorna subito il localStorage locale
  var AG = lsG('ct_ag_condivisa', []).filter(function(x){ return x.id !== id; });
  localStorage.setItem('ct_ag_condivisa', JSON.stringify(AG));
  renderAgendaCondivisa();
  if(window.FirebaseModule) window.FirebaseModule.deleteAgendaCondivisa(id).catch(function(){});
}

// ---- FERIE ----
function stepFerie(d){
  var el=document.getElementById("ferie-saldo-n");if(!el)return;
  var n=Math.max(0,parseInt(el.textContent||"0")+d);
  el.textContent=n;el.style.color=n<5?"var(--red)":n<15?"var(--gold)":"var(--green)";
}
function salvaFerie(){
  var el=document.getElementById("ferie-saldo-n");if(!el)return;
  var me=lsG("ct_me",null);if(!me)return;
  me.ferie=parseInt(el.textContent||"0");lsS("ct_me",me);
  var U=lsG("ct_u",[]);for(var i=0;i<U.length;i++){if(U[i].id===me.id){U[i].ferie=me.ferie;break;}}lsS("ct_u",U);
  var ok=document.getElementById("ferie-ok");if(ok){ok.classList.add("on");setTimeout(function(){ok.classList.remove("on");},2000);}
  toast("Saldo ferie salvato &#10003;","ok");
}

// ---- PASSWORD ----
function cambiaPwd(){
  var old=document.getElementById("p-old"),nw=document.getElementById("p-new"),cf=document.getElementById("p-cf");
  var err=document.getElementById("pwd-err"),ok=document.getElementById("pwd-ok");
  if(err)err.classList.remove("on");if(ok)ok.classList.remove("on");
  var me=lsG("ct_me",null);if(!me)return;
  if(!old||old.value!==me.pw){if(err){err.textContent="Password attuale errata";err.classList.add("on");}return;}
  if(!nw||nw.value.length<4){if(err){err.textContent="Min 4 caratteri";err.classList.add("on");}return;}
  if(nw.value!==cf.value){if(err){err.textContent="Le password non coincidono";err.classList.add("on");}return;}
  me.pw=nw.value;
  lsS("ct_me",me);
  var U=lsG("ct_u",[]);
  for(var i=0;i<U.length;i++){if(U[i].id===me.id){U[i].pw=me.pw;break;}}
  lsS("ct_u",U);
  if(ok)ok.classList.add("on");
  old.value="";nw.value="";cf.value="";
  toast("Password aggiornata &#10003;","ok");
}

// ---- RESET ----
function resetAll(tipo){
  ctConfirm('⚠️ Sei sicuro? Operazione irreversibile.', {title:'Reset Dati', ico:'⚠️', ok:'Procedi', danger:true}).then(function(ok){
    if(!ok) return;
    var sess = lsG("ct_session", null);
    var uid = sess && sess.userId;
    var me = lsG("ct_me", null);
    var rep = (me && me.reparto) ? me.reparto.toLowerCase().replace(/\s+/g,'_') : null;
    var isPrivato = !rep || rep.startsWith('privato_');
    if(tipo==="t" || tipo==="tp"){
      if(typeof _stopListeners === 'function') _stopListeners();
      lsS("ct_t",[]);
      if(tipo==="tp"){ lsS("ct_p",[]); localStorage.removeItem('ct_my_pid'); }
      if(window.FirebaseModule && rep && !isPrivato){
        (async function(){
          try{
            var snap=await getDocs(collection(db,'reparti',rep,'turni'));
            var batch=[];
            snap.forEach(function(d){batch.push(deleteDoc(doc(db,'reparti',rep,'turni',d.id)));});
            await Promise.all(batch);
            if(tipo==="tp"){
              var snapP=await getDocs(collection(db,'reparti',rep,'persone'));
              var batchP=[];
              snapP.forEach(function(d){batchP.push(deleteDoc(doc(db,'reparti',rep,'persone',d.id)));});
              await Promise.all(batchP);
            }
          }catch(e){console.warn('resetAll Firebase:',e.message);}
          toast(tipo==="tp"?"Turni e persone eliminati":"Turni eliminati","ok");
          setTimeout(function(){ location.reload(); }, 1000);
        })();
      } else {
        toast(tipo==="tp"?"Turni e persone eliminati":"Turni eliminati","ok");
        if(typeof renderTurni==='function') renderTurni();
        if(typeof renderOggi==='function') renderOggi();
        if(typeof renderPers==='function') renderPers();
        if(typeof stats==='function') stats();
        if(typeof aggiornaWidget==='function') aggiornaWidget();
      }
    } else {
      var _doReset = function(){
        Object.keys(localStorage).filter(function(x){return x.startsWith("ct_");}).forEach(function(x){localStorage.removeItem(x);});
        toast("Reset completato. Disconnessione in corso...","ok");
        setTimeout(function(){location.reload();},1200);
      };
      if(window.FirebaseModule){
        (async function(){
          try{
            if(uid) await window.FirebaseModule.deleteUserData(uid, rep && !isPrivato ? rep : null);
            if(rep && !isPrivato){
              var snap=await getDocs(collection(db,'reparti',rep,'turni'));
              var b=[];
              snap.forEach(function(d){b.push(deleteDoc(doc(db,'reparti',rep,'turni',d.id)));});
              await Promise.all(b);
            }
          }catch(e){console.warn('resetAll Firebase:',e.message);}
          try{
            var fbAuth = window._fbAuth;
            if(fbAuth && fbAuth.currentUser){
              if(window._fbDeleteUser) await window._fbDeleteUser(fbAuth.currentUser);
            } else if(fbAuth && window._fbSignOut){
              await window._fbSignOut(fbAuth);
            }
          }catch(e){console.warn('resetAll deleteUser:',e.message);}
          _doReset();
        })();
      } else {
        _doReset();
      }
    }
  });
}


function _syncFerieFirebase(){
  var me=lsG("ct_me",null); if(!me) return;
  // Aggiorna licenzePool da ct_u se disponibile
  var U=lsG("ct_u",[]); var u=U.find(function(x){return x.id===me.id||x.uid===me.uid;});
  if(u&&u.licenzePool) me.licenzePool=u.licenzePool;
  me.recuperiExtra=(lsG("ct_recuperi",[])).filter(function(r){return !r.usato;}).length;
  me.ct_recuperi=lsG("ct_recuperi",[]);
  lsS("ct_me",me);
  if(window.FirebaseModule){
    var sess=lsG("ct_session",null);
    if(sess&&sess.userId){
      window.FirebaseModule.saveUserProfile(sess.userId,me,me.reparto).catch(function(){});
      window.FirebaseModule.savePersonale().catch(function(){});
    }
  }
}

function renderRecuperi(){
  var el=document.getElementById("rec-list");
  var nEl=document.getElementById("rec-extra-n");
  if(!el)return;
  var REC=lsG("ct_recuperi",[]);
  var nonUsati=REC.filter(function(r){return !r.usato;});
  if(nEl)nEl.textContent=nonUsati.length;
  if(!REC.length){
    el.innerHTML='<div style="font-size:12px;color:var(--txt2);padding:8px 0;text-align:center">'+
      'Nessun recupero maturato<br><span style="font-size:10px;opacity:.6">I recuperi si maturano lavorando nei giorni festivi (escluse le domeniche)</span></div>';
    return;
  }
  var tipoLbl={mattina:"Turno mattina",pomeriggio:"Turno pomeriggio",notte:"Turno notte"};
  el.innerHTML=REC.map(function(r,i){
    var lbl=r.label||("Recupero Riposo del "+(r.nomeFest||r.data));
    var sub=tipoLbl[r.tipo]||r.tipo;
    var colore=r.usato?"var(--txt3)":"var(--gold)";
    var badge=r.usato
      ? '<span style="font-size:9px;padding:2px 7px;border-radius:20px;background:rgba(255,255,255,.08);color:var(--txt3)">USUFRUITO</span>'
      : '<span style="font-size:9px;padding:2px 7px;border-radius:20px;background:rgba(212,175,55,.15);color:var(--gold)">DA USARE</span>';
    return '<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--bg2);border-radius:11px;margin-bottom:6px;border:1px solid '+(r.usato?"var(--border)":"rgba(212,175,55,.2)")+';transition:opacity .2s;'+(r.usato?"opacity:.5":"")+'">'+
      '<input type="checkbox" '+(r.usato?"checked":"")+' onchange="toggleRecupero('+i+',this)" style="width:17px;height:17px;cursor:pointer;flex-shrink:0;accent-color:var(--gold)">'+
      '<div style="flex:1;min-width:0">'+
        '<div style="font-size:13px;font-weight:700;color:'+colore+';margin-bottom:2px">&#127941; '+lbl+'</div>'+
        '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">'+
          '<span style="font-size:10px;color:var(--txt2)">'+sub+'</span>'+
          badge+
        '</div>'+
      '</div>'+
    '</div>';
  }).join("");
}
function toggleRecupero(idx,cb){
  var REC=lsG("ct_recuperi",[]);
  if(REC[idx])REC[idx].usato=cb.checked;
  lsS("ct_recuperi",REC);
  renderRecuperi();
  _syncFerieFirebase();
  toast(cb.checked?"&#10003; Recupero marcato come usufruito":"Recupero riattivato","ok");
}
function delRecuperi(){
  var REC=lsG("ct_recuperi",[]);
  var da_cancellare=REC.filter(function(r){return r.usato;}).length;
  if(!da_cancellare){toast("Nessun recupero smarcato da eliminare","err");return;}
  ctConfirm('Eliminare '+da_cancellare+' recupero/i smarcato/i?', {title:'Elimina Recuperi', ico:'🗑️', ok:'Elimina', danger:true}).then(function(ok){
    if(!ok) return;
    lsS("ct_recuperi",REC.filter(function(r){return !r.usato;}));
    var me=lsG("ct_me",null);
    if(me){me.recuperiExtra=lsG("ct_recuperi",[]).length;lsS("ct_me",me);}
    renderRecuperi();
    _syncFerieFirebase();
    toast("🗑️ "+da_cancellare+" recupero/i eliminato/i","ok");
  });
}

function aggRecuperoManuale(){
  var oggi = new Date().toISOString().slice(0,10);
  var html =
    '<div id="m-rec-manuale" style="display:flex;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:10000;align-items:flex-end;justify-content:center;backdrop-filter:blur(3px)">'
    +'<div style="background:var(--card);border-radius:24px 24px 0 0;width:100%;max-width:520px;padding:20px 20px calc(20px + env(safe-area-inset-bottom,0px));box-shadow:0 -8px 32px rgba(0,0,0,.4)">'
    +'<div style="width:36px;height:4px;background:var(--border2);border-radius:2px;margin:0 auto 16px"></div>'
    +'<div style="font-size:16px;font-weight:800;margin-bottom:16px">&#127941; Aggiungi recupero manuale</div>'
    +'<div class="fg"><label>Data del turno festivo</label>'
    +'<input type="date" id="rm-data" class="fc" value="'+oggi+'"></div>'
    +'<div class="fg"><label>Etichetta (opzionale)</label>'
    +'<input type="text" id="rm-label" class="fc" placeholder="es. Capodanno, Ferragosto\u2026" maxlength="40"></div>'
    +'<div style="display:flex;gap:10px;margin-top:4px">'
    +'<button class="btn btn-g" style="flex:1" onclick="document.getElementById(\'m-rec-manuale\').remove()">Annulla</button>'
    +'<button class="btn btn-p" style="flex:1" onclick="_salvaRecuperoManuale()">&#43; Aggiungi</button>'
    +'</div></div></div>';
  document.body.insertAdjacentHTML('beforeend', html);
}

function _salvaRecuperoManuale(){
  var data = (document.getElementById('rm-data')||{}).value;
  var label = ((document.getElementById('rm-label')||{}).value||'').trim();
  if(!data){toast("Inserisci una data","err");return;}
  var d = new Date(data+'T00:00:00');
  var mN=["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
  var dataFmt = d.getDate()+" "+mN[d.getMonth()]+" "+d.getFullYear();
  var REC = lsG("ct_recuperi",[]);
  REC.push({id:Date.now(),data:data,tipo:"manuale",label:label||("Recupero festivo del "+dataFmt),nomeFest:label||dataFmt,usato:false,manuale:true});
  lsS("ct_recuperi", REC);
  var me = lsG("ct_me", null);
  if(me){ me.recuperiExtra = REC.filter(function(r){return !r.usato;}).length; lsS("ct_me",me); }
  renderRecuperi();
  _syncFerieFirebase();
  document.getElementById('m-rec-manuale').remove();
  toast("&#127941; Recupero aggiunto","ok");
}

function aggAvaPreview(ava){
  var prev=document.getElementById("pf-ava-prev");
  if(!prev)return;
  if(ava){prev.style.backgroundImage="url("+ava+")";prev.style.backgroundSize="cover";prev.innerHTML="";}
  else{prev.style.backgroundImage="";prev.innerHTML="&#128100;";}
}

function prevGrado(val){
  if(!val){document.getElementById("pf-gr-txt").textContent="(invariato)";
    var ps=document.getElementById("pf-gr-prev");if(ps)ps.style.display="none";return;}
  var g=GR[val]||{nome:val,svg:""};
  document.getElementById("pf-gr-txt").textContent=g.nome+" ("+val+")";
  var ps=document.getElementById("pf-gr-prev");
  if(ps){ps.src=g.svg||"";ps.style.display=g.svg?"":"none";}
}

// ---- ORARI PRESET ----
var _ORARI_DEFAULT = {
  mattina:    {in:"06:00", out:"14:00"},
  pomeriggio: {in:"14:00", out:"22:00"},
  notte:      {in:"22:00", out:"06:00"},
  sera:       {in:"20:00", out:"02:00"},
  ml:         {in:"06:00", out:"16:00"},
  pl:         {in:"12:00", out:"22:00"},
  obbm:       {in:"07:00", out:"13:00"},
  obbp:       {in:"13:00", out:"19:00"}
};
var _ORARI_LABELS = {
  mattina:"🌅 Mattina (M)", pomeriggio:"☀️ Pomeriggio (P)",
  notte:"🌙 Notte (N)", sera:"🌙 Sera (S)",
  ml:"🌅 Mattina Lunga (ML)", pl:"☀️ Pomeriggio Lungo (PL)",
  obbm:"🔶 Obbligatorio Mattina (OBBM)", obbp:"🔷 Obbligatorio Pomeriggio (OBBP)"
};
function getOrariPreset(){
  return lsG("ct_orari", _ORARI_DEFAULT);
}

// ═══ TURNI PERSONALIZZATI ═══
var _TC_COLORI = {
  mattina:   'linear-gradient(135deg,#e65100,#bf360c)',
  pomeriggio:'linear-gradient(135deg,#f57f17,#e65100)',
  notte:     'linear-gradient(135deg,#1a237e,#0d1642)',
  verde:     'linear-gradient(135deg,#1b5e20,#2e7d32)',
  teal:      'linear-gradient(135deg,#006064,#00838f)',
  viola:     'linear-gradient(135deg,#4a148c,#7b1fa2)',
  rosa:      'linear-gradient(135deg,#880e4f,#c2185b)',
  grigio:    'linear-gradient(135deg,#37474f,#546e7a)'
};

function selTcCol(btn) {
  document.querySelectorAll('.tc-col-btn').forEach(function(b){
    b.style.border = '3px solid transparent';
    b.style.transform = 'scale(1)';
  });
  btn.style.border = '3px solid var(--txt)';
  btn.style.transform = 'scale(1.2)';
  var col = btn.getAttribute('data-col');
  var inp = document.getElementById('tc-col-sel');
  if(inp) inp.value = col;
}

function renderTurniCustom() {
  var el = document.getElementById('tc-list');
  if(!el) return;
  var TC = lsG('ct_turni_custom', []);
  if(!TC.length) {
    el.innerHTML = '<div style="text-align:center;color:var(--txt2);padding:16px;font-size:13px">Nessun turno personalizzato. Creane uno qui sotto.</div>';
    return;
  }
  el.innerHTML = TC.map(function(tc) {
    var bg = _TC_COLORI[tc.col] || _TC_COLORI.mattina;
    return '<div style="display:flex;align-items:center;gap:12px;padding:10px 12px;background:var(--card);border:1px solid var(--border);border-radius:14px;margin-bottom:8px">' +
      '<div style="width:44px;height:44px;border-radius:12px;background:'+bg+';display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">'+(tc.emoji||'⏰')+'</div>' +
      '<div style="flex:1;min-width:0">' +
        '<div style="font-size:13px;font-weight:700;color:var(--txt)">'+tc.nome+' <span style="font-size:10px;font-weight:800;background:var(--bg2);padding:2px 6px;border-radius:6px;color:var(--txt2)">'+tc.codice+'</span></div>' +
        '<div style="font-size:11px;color:var(--txt2);margin-top:2px">'+tc.oraIn+' – '+tc.oraFi+'</div>' +
      '</div>' +
      '<button onclick="editTurnoCustom('+tc.id+')" style="background:none;border:none;color:var(--blue);cursor:pointer;font-size:16px;padding:6px;appearance:none;-webkit-appearance:none">&#9998;</button>' +
      '<button onclick="delTurnoCustom('+tc.id+')" style="background:none;border:none;color:var(--txt3);cursor:pointer;font-size:16px;padding:6px;appearance:none;-webkit-appearance:none">&#128465;</button>' +
    '</div>';
  }).join('');
}

function salvaTurnoCustom() {
  var nome   = (document.getElementById('tc-nome')||{}).value.trim();
  var codice = ((document.getElementById('tc-codice')||{}).value||'').trim().toUpperCase();
  var oraIn  = (document.getElementById('tc-ora-in')||{}).value || '08:00';
  var oraFi  = (document.getElementById('tc-ora-fi')||{}).value || '16:00';
  var emoji  = (document.getElementById('tc-emoji')||{}).value.trim() || '⏰';
  var col    = (document.getElementById('tc-col-sel')||{}).value || 'mattina';
  var editId = parseInt((document.getElementById('tc-edit-id')||{}).value||'0')||0;

  if(!nome) { toast('Inserisci un nome per il turno','err'); return; }
  if(!codice || codice.length < 2) { toast('Inserisci un codice (min 2 caratteri)','err'); return; }

  var TC = lsG('ct_turni_custom', []);

  // Controlla duplicati codice (escludi se in edit)
  var dup = TC.find(function(x){ return x.codice === codice && x.id !== editId; });
  if(dup) { toast('Codice "'+codice+'" già usato','err'); return; }

  if(editId) {
    TC = TC.map(function(x){ return x.id === editId ? {id:editId,nome:nome,codice:codice,oraIn:oraIn,oraFi:oraFi,emoji:emoji,col:col} : x; });
    toast('Turno aggiornato ✓','ok');
  } else {
    TC.push({id:Date.now(),nome:nome,codice:codice,oraIn:oraIn,oraFi:oraFi,emoji:emoji,col:col});
    toast('Turno personalizzato aggiunto ✓','ok');
  }
  lsS('ct_turni_custom', TC);

  // Reset form
  ['tc-nome','tc-codice','tc-emoji'].forEach(function(id){ var el=document.getElementById(id); if(el) el.value=''; });
  var ei = document.getElementById('tc-edit-id'); if(ei) ei.value='';
  var oi = document.getElementById('tc-ora-in'); if(oi) oi.value='08:00';
  var of = document.getElementById('tc-ora-fi'); if(of) of.value='16:00';
  var cs = document.getElementById('tc-col-sel'); if(cs) cs.value='mattina';
  document.querySelectorAll('.tc-col-btn').forEach(function(b){ b.style.border='3px solid transparent'; b.style.transform='scale(1)'; });

  renderTurniCustom();
  _aggiungiOpzioniCustomAlSelect();
}

function editTurnoCustom(id) {
  var TC = lsG('ct_turni_custom', []);
  var tc = TC.find(function(x){ return x.id === id; });
  if(!tc) return;
  var set = function(elId, val){ var el=document.getElementById(elId); if(el) el.value=val; };
  set('tc-edit-id', tc.id);
  set('tc-nome', tc.nome);
  set('tc-codice', tc.codice);
  set('tc-ora-in', tc.oraIn);
  set('tc-ora-fi', tc.oraFi);
  set('tc-emoji', tc.emoji||'');
  set('tc-col-sel', tc.col||'mattina');
  // Evidenzia colore selezionato
  document.querySelectorAll('.tc-col-btn').forEach(function(b){
    var sel = b.getAttribute('data-col') === (tc.col||'mattina');
    b.style.border = sel ? '3px solid var(--txt)' : '3px solid transparent';
    b.style.transform = sel ? 'scale(1.2)' : 'scale(1)';
  });
}

function delTurnoCustom(id) {
  ctConfirm('Eliminare questo tipo di turno personalizzato?', {title:'Elimina Turno Custom', ico:'🗑️', ok:'Elimina', danger:true}).then(function(ok){
    if(!ok) return;
    var TC = lsG('ct_turni_custom', []).filter(function(x){ return x.id !== id; });
    lsS('ct_turni_custom', TC);
    renderTurniCustom();
    _aggiungiOpzioniCustomAlSelect();
    toast('Eliminato','ok');
  });
}

// Aggiunge le opzioni custom al select #mt-tipo nel modal turno
// Aggiunge bottoni turni custom nel modal turno (sostituisce il vecchio select)
function _aggiungiOpzioniCustomAlSelect() {
  // Rimuovi bottoni custom precedenti
  document.querySelectorAll('.btn-turno-r[data-custom]').forEach(function(b){ b.remove(); });
  var TC = lsG('ct_turni_custom', []);
  if(!TC.length) return;
  // Trova il contenitore dei bottoni rapidi (ultima riga)
  var container = document.querySelector('#m-turno .btn-turno-r:last-of-type');
  if(!container) return;
  var parent = container.parentElement;
  if(!parent) return;
  // Crea una nuova riga per i custom
  var row = document.createElement('div');
  row.style.cssText = 'display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:4px';
  TC.forEach(function(tc){
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'btn-turno-r';
    b.setAttribute('data-custom','1');
    b.textContent = (tc.emoji||'⏰')+' '+tc.codice;
    b.title = tc.nome;
    b.onclick = function(){ setTurnoRapido('custom', 'custom_'+tc.codice, b); };
    row.appendChild(b);
  });
  parent.appendChild(row);
}

// Apre il modal turni custom e carica la lista
function apriTurniCustom() {
  renderTurniCustom();
  openM('m-turni-custom');
}

function renderOrariPreset(){
  var o = getOrariPreset();
  var el = document.getElementById("orari-preset-list");
  if(!el) return;
  var keys = Object.keys(_ORARI_DEFAULT);
  var colori = {
    mattina:   {bg:"rgba(255,159,67,.18)",  border:"rgba(255,159,67,.5)",  ico:"rgba(255,159,67,.25)"},
    pomeriggio:{bg:"rgba(79,158,255,.18)",  border:"rgba(79,158,255,.5)",  ico:"rgba(79,158,255,.25)"},
    notte:     {bg:"rgba(167,139,250,.18)", border:"rgba(167,139,250,.5)", ico:"rgba(167,139,250,.25)"},
    sera:      {bg:"rgba(0,188,212,.18)",   border:"rgba(0,188,212,.5)",   ico:"rgba(0,188,212,.25)"},
    ml:        {bg:"rgba(255,159,67,.12)",  border:"rgba(255,159,67,.4)",  ico:"rgba(255,159,67,.18)"},
    pl:        {bg:"rgba(79,158,255,.12)",  border:"rgba(79,158,255,.4)",  ico:"rgba(79,158,255,.18)"}
  };
  var note = {
    notte: 'Nota: il turno notte attraversa la mezzanotte',
    sera:  'Nota: turno serale prolungato'
  };
  el.innerHTML = keys.map(function(k){
    var v = o[k] || _ORARI_DEFAULT[k];
    var c = colori[k] || {bg:"rgba(128,128,128,.15)",border:"rgba(128,128,128,.4)",ico:"rgba(128,128,128,.2)"};
    var nota = note[k] ? '<div style="margin-top:10px;padding:8px 10px;background:rgba(255,255,255,.05);border-radius:8px;font-size:11px;color:var(--txt3);display:flex;align-items:center;gap:6px"><span>&#9432;</span>'+note[k]+'</div>' : '';
    return '<div style="background:'+c.bg+';border:1.5px solid '+c.border+';border-radius:14px;padding:16px;margin-bottom:10px">'
      +'<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">'
        +'<div style="width:40px;height:40px;border-radius:10px;background:'+c.ico+';display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">'+_ORARI_LABELS[k].split(' ')[0]+'</div>'
        +'<div style="font-size:15px;font-weight:700;color:var(--txt)">'+_ORARI_LABELS[k].replace(/^[^\s]+\s/,'')+'</div>'
      +'</div>'
      +'<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">'
        +'<div style="flex:1;min-width:130px">'
          +'<div style="font-size:10px;font-weight:800;color:var(--txt2);text-transform:uppercase;letter-spacing:.8px;margin-bottom:6px">Inizio</div>'
          +'<input type="time" class="fc" id="or-in-'+k+'" value="'+v.in+'" style="padding:10px 12px;font-size:15px;font-weight:700">'
        +'</div>'
        +'<div style="color:var(--txt3);font-size:18px;padding-top:18px">&#8594;</div>'
        +'<div style="flex:1;min-width:130px">'
          +'<div style="font-size:10px;font-weight:800;color:var(--txt2);text-transform:uppercase;letter-spacing:.8px;margin-bottom:6px">Fine</div>'
          +'<input type="time" class="fc" id="or-out-'+k+'" value="'+v.out+'" style="padding:10px 12px;font-size:15px;font-weight:700">'
        +'</div>'
        +'<button class="btn btn-p btn-sm" style="width:auto;flex-shrink:0;margin-top:18px" onclick="salvaOrarioSingolo(\''+k+'\')">&#128190; Salva</button>'
      +'</div>'
      +nota
    +'</div>';
  }).join('');
}

function togOrarioRow(id){
  var body = document.getElementById(id);
  if(!body) return;
  var k = id.replace('or-body-','');
  var arr = document.getElementById('or-arr-'+k);
  var isOpen = body.style.maxHeight && body.style.maxHeight !== '0px';
  // chiudi tutti
  Object.keys(_ORARI_DEFAULT).forEach(function(kk){
    var b = document.getElementById('or-body-'+kk);
    var a = document.getElementById('or-arr-'+kk);
    if(b){ b.style.maxHeight = '0px'; }
    if(a){ a.style.transform = ''; }
  });
  if(!isOpen){
    body.style.maxHeight = '200px';
    if(arr) arr.style.transform = 'rotate(90deg)';
  }
}
function aggOrarioSub(k){
  var i = document.getElementById('or-in-'+k);
  var u = document.getElementById('or-out-'+k);
  var sub = document.getElementById('or-sub-'+k);
  if(i && u && sub) sub.textContent = i.value + ' → ' + u.value;
}
function salvaOrarioSingolo(k){
  var i = document.getElementById('or-in-'+k);
  var u = document.getElementById('or-out-'+k);
  if(!i || !u) return;
  var o = getOrariPreset();
  o[k] = {in: i.value, out: u.value};
  lsS('ct_orari', o);
  aggOrarioSub(k);
  // Sincronizza su Firebase per tutto il reparto (solo comandante/vice)
  var me = lsG('ct_me', null);
  if(me && (me.ruolo === 'comandante' || me.ruolo === 'vice') && window.FirebaseModule) {
    window.FirebaseModule.saveOrariPreset(o).catch(function(){});
  }
  // chiudi riga
  var body = document.getElementById('or-body-'+k);
  var arr = document.getElementById('or-arr-'+k);
  if(body) body.style.maxHeight = '0px';
  if(arr) arr.style.transform = '';
  var ok = document.getElementById('orari-ok');
  if(ok){ ok.classList.add('on'); setTimeout(function(){ ok.classList.remove('on'); }, 2500); }
  toast('Orario '+_ORARI_LABELS[k].replace(/^[^\s]+\s/,'')+' salvato ✓','ok');
}
function resetOrariPreset(){
  ctConfirm('Ripristinare gli orari di default?', {title:'Reset Orari', ico:'⏰', ok:'Ripristina'}).then(function(ok){
    if(!ok) return;
    lsS("ct_orari", _ORARI_DEFAULT);
    renderOrariPreset();
    toast('Orari ripristinati','ok');
  });
}
function orarioFromPreset(tipo){
  var o = getOrariPreset();
  var k = tipo === "ml" ? "ml" : tipo === "pl" ? "pl" : tipo;
  var v = o[k];
  if(!v) return tipo.charAt(0).toUpperCase()+tipo.slice(1);
  return v.in+"-"+v.out;
}

function salvaImp(){
  var u=lsG("ct_me",null);if(!u)return;
  var nRep  =document.getElementById("pf-rep");
  var nTipo =document.getElementById("pf-tipo");
  var nNuc  =document.getElementById("pf-nuc");
  var nGrado=document.getElementById("pf-grado");
  var nAva  =document.getElementById("pf-ava");
  // Salva sempre reparto e nucleo (anche se vuoti  non obbligatori)
  if(nRep)  u.reparto = nRep.value.trim();
  if(nNuc)  u.nucleo  = nNuc.value.trim();
  // Tipo reparto
  if(nTipo && nTipo.value){
    var newTipo = nTipo.value;
    if(newTipo !== u.tipo){
      var tipoLabel = {ter:"Territoriale", for:"Forestale", spe:"Speciale"};
      var oldLabel = tipoLabel[u.tipo] || u.tipo;
      var newLabel = tipoLabel[newTipo] || newTipo;
      if(oldLabel !== newLabel){
        u.tipo = newTipo;
      }
    }
  }
  if(window._tempAva){ u.ava=window._tempAva; window._tempAva=null; }
  else if(nAva && nAva.value.trim()) u.ava = nAva.value.trim();
  // Grado
  if(nGrado && nGrado.value && nGrado.value !== u.grado){
    var gOld=GR[u.grado]?GR[u.grado].nome:u.grado;
    var gNew=GR[nGrado.value]?GR[nGrado.value].nome:nGrado.value;
    u.grado=nGrado.value;
    toast("Promozione: "+gOld+" → "+gNew,"ok");
  }
  var ok1=lsS("ct_me",u);
  if(window.FirebaseModule)window.FirebaseModule.savePersonale();
  var U=lsG("ct_u",[]);
  for(var i=0;i<U.length;i++){if(U[i].id===u.id){U[i]=u;break;}}
  var ok2=lsS("ct_u",U);
  aggUI();
  if(ok1&&ok2){
    // aggUI() gia chiamata sopra
    var _u2=lsG("ct_me",null);
    if(_u2&&_u2.ava){
      var _hAva=document.getElementById("h-ava");
      if(_hAva){_hAva.style.backgroundImage="url("+_u2.ava+")";_hAva.style.backgroundSize="cover";_hAva.style.backgroundPosition="center";_hAva.innerHTML="";}
      var _tAva=document.getElementById("tess-ava");var _tInit=document.getElementById("tess-ava-init");
      if(_tAva){_tAva.src=_u2.ava;_tAva.style.display="block";}
      if(_tInit){_tInit.style.display="none";}
      var _iAva=document.getElementById("imp-ava");
      if(_iAva){_iAva.style.backgroundImage="url("+_u2.ava+")";_iAva.style.backgroundSize="cover";_iAva.style.backgroundPosition="center";_iAva.textContent="";}
    }
    var okEl=document.getElementById("pf-ok");
    if(okEl){okEl.classList.add("on");setTimeout(function(){okEl.classList.remove("on");},3000);}
    toast("Profilo aggiornato ✓","ok");
  }
  else{toast("Errore salvataggio","err");}
}

// ---- BACKUP & RIPRISTINO ----
var _backupDaConfermare = null;

function esportaBackup(){
  var me = lsG("ct_me", null);
  var dati = {
    versione: "2.4.8",
    data: new Date().toISOString(),
    utente: me ? me.nome : "sconosciuto",
    ct_me:       lsG("ct_me",     null),
    ct_u:        lsG("ct_u",      []),
    ct_t:        lsG("ct_t",      []),
    ct_p:        lsG("ct_p",      []),
    ct_td:       lsG("ct_td",     []),
    ct_ag:       lsG("ct_ag",     []),
    ct_recuperi: lsG("ct_recuperi",[]),
    ct_tema:     lsG("ct_tema",   ""),
    ct_notif_prefs: lsG("ct_notif_prefs", {}),
    ct_notif_pre:   lsG("ct_notif_pre",  60),
  };
  var json = JSON.stringify(dati, null, 2);
  var blob = new Blob([json], {type:"application/json"});
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement("a");
  var oggi = new Date();
  var nome = "cturni_backup_"
    + oggi.getFullYear()
    + ("0"+(oggi.getMonth()+1)).slice(-2)
    + ("0"+oggi.getDate()).slice(-2)
    + "_"
    + ("0"+oggi.getHours()).slice(-2)
    + ("0"+oggi.getMinutes()).slice(-2)
    + ".json";
  a.href = url; a.download = nome; a.click();
  URL.revokeObjectURL(url);
  // Salva data ultimo backup
  var lbl = oggi.getDate()+"/"+(oggi.getMonth()+1)+"/"+oggi.getFullYear()
    +" ore "+("0"+oggi.getHours()).slice(-2)+":"+("0"+oggi.getMinutes()).slice(-2);
  lsS("ct_last_backup", lbl);
  var el = document.getElementById("last-backup-date");
  if(el) el.textContent = lbl;
  toast("&#128190; Backup salvato: "+nome, "ok");
}

function importaBackup(input){
  if(!input.files||!input.files[0])return;
  var reader = new FileReader();
  reader.onload = function(e){
    try{
      var dati = JSON.parse(e.target.result);
      // Validazione base
      if(!dati.versione||!dati.data){
        toast("&#10060; File non valido  non  un backup C-Turni","err"); return;
      }
      _backupDaConfermare = dati;
      // Mostra anteprima
      var nTurni   = (dati.ct_t||[]).length;
      var nPersone = (dati.ct_p||[]).length;
      var nTodo    = (dati.ct_td||[]).length;
      var nAg      = (dati.ct_ag||[]).length;
      var nRec     = (dati.ct_recuperi||[]).length;
      var dataB    = dati.data ? new Date(dati.data).toLocaleString("it-IT") : "?";
      var body = document.getElementById("backup-preview-body");
      if(body) body.innerHTML =
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'+
      +'<div style="background:var(--bg);border-radius:9px;padding:10px;text-align:center">'
      +'<div style="font-size:20px;font-weight:900;color:var(--blue)">'+nTurni+'</div>'
      +'<div style="font-size:10px;color:var(--txt2)">Turni</div></div>'
      +'<div style="background:var(--bg);border-radius:9px;padding:10px;text-align:center">'
      +'<div style="font-size:20px;font-weight:900;color:var(--green)">'+nPersone+'</div>'
      +'<div style="font-size:10px;color:var(--txt2)">Personale</div></div>'
      +'<div style="background:var(--bg);border-radius:9px;padding:10px;text-align:center">'
      +'<div style="font-size:20px;font-weight:900;color:var(--gold)">'+nTodo+'</div>'
      +'<div style="font-size:10px;color:var(--txt2)">To-Do</div></div>'
      +'<div style="background:var(--bg);border-radius:9px;padding:10px;text-align:center">'
      +'<div style="font-size:20px;font-weight:900;color:var(--teal)">'+nRec+'</div>'
      +'<div style="font-size:10px;color:var(--txt2)">Recuperi</div></div>'
        +'</div>'
      +'<div style="margin-top:10px;font-size:11px;color:var(--txt2)">'
        +'&#128197; Salvato il: <strong style="color:var(--txt)">'+dataB+'</strong> '
        +'&nbsp;|&nbsp; Utente: <strong style="color:var(--txt)">'+( dati.utente||"")+'</strong>'
        +'</div>';
      var prev = document.getElementById("backup-preview");
      if(prev) prev.style.display = "block";
      // aggiorna sub
      var sub = document.getElementById("backup-sub");
      if(sub) sub.textContent = input.files[0].name;
      toast("&#128196; File caricato  controlla l\'anteprima","ok");
    }catch(ex){
      toast("&#10060; Errore lettura file: "+ex.message,"err");
    }
  };
  reader.readAsText(input.files[0]);
}

function confermaCricaBackup(){
  if(!_backupDaConfermare){toast("Nessun backup selezionato","err");return;}
  ctConfirm('⚠️ Tutti i dati attuali verranno sostituiti con il backup. Continuare?', {title:'Ripristina Backup', ico:'💾', ok:'Ripristina', danger:true}).then(function(ok){
    if(!ok) return;
    var d = _backupDaConfermare;
    if(d.ct_me)        lsS("ct_me",        d.ct_me);
    if(d.ct_u)         lsS("ct_u",         d.ct_u);
    if(d.ct_t)         lsS("ct_t",         d.ct_t);
    if(d.ct_p)         lsS("ct_p",         d.ct_p);
    if(d.ct_td)        lsS("ct_td",        d.ct_td);
    if(d.ct_ag)        lsS("ct_ag",        d.ct_ag);
    if(d.ct_recuperi)  lsS("ct_recuperi",  d.ct_recuperi);
    if(d.ct_tema!==undefined) lsS("ct_tema", d.ct_tema);
    if(d.ct_notif_prefs) lsS("ct_notif_prefs", d.ct_notif_prefs);
    if(d.ct_notif_pre!==undefined) lsS("ct_notif_pre", d.ct_notif_pre);
    _backupDaConfermare = null;
    toast("✅ Backup ripristinato! Ricarico...","ok");
    setTimeout(function(){location.reload();}, 1500);
  });
}

function annullaBackup(){
  _backupDaConfermare = null;
  var prev = document.getElementById("backup-preview");
  if(prev) prev.style.display = "none";
  var inp = document.getElementById("inp-backup");
  if(inp) inp.value = "";
  var sub = document.getElementById("backup-sub");
  if(sub) sub.textContent = "Ripristina da file .json salvato";
  toast("Operazione annullata","ok");
}

function aggLastBackupDate(){
  var lbl = lsG("ct_last_backup", null);
  var el  = document.getElementById("last-backup-date");
  if(el) el.textContent = lbl || "Mai effettuato";
}


// ---- EASTER EGG ----
var _eggTaps=0,_eggTimer=null,_eggLampTimer=null;
function eggTap(){
  _eggTaps++;
  var hint=document.getElementById("egg-hint");
  var dots=document.getElementById("egg-dots");
  if(_eggTimer)clearTimeout(_eggTimer);
  if(_eggTaps===1){if(hint)hint.textContent="Ancora...";if(dots)dots.innerHTML="&#9679;&#8226;&#8226;";}
  else if(_eggTaps===2){if(hint)hint.textContent="Un altro...";if(dots)dots.innerHTML="&#9679;&#9679;&#8226;";}
  else if(_eggTaps>=3){
    _eggTaps=0;
    if(hint)hint.textContent="C-Turni v3.5.0";
    var tema=lsG("ct_tema","")||"";
    var isFor=tema==="forestale"||tema==="forestale-light";
    // auto: verde forestale o bianco CC
    var carEl=document.getElementById("egg-car");
    if(carEl){
      carEl.style.filter=isFor?"hue-rotate(90deg) saturate(1.5)":"none";
      carEl.title=isFor?"Pattuglia Forestale":"Autovettura CC";
    }
    // motto
    var mottoEl=document.getElementById("egg-motto");
    if(mottoEl)mottoEl.textContent=isFor?"Pro Natura Opus et Vigilantia":"Nei Secoli Fedele";
    // badge
    var badgeEl=document.getElementById("egg-badge");
    if(badgeEl){
      badgeEl.innerHTML=isFor?"&#127794; Carabinieri Forestali &#127794;":"&#9884; Arma dei Carabinieri &#9884;";
      badgeEl.style.color=isFor?"#6abf69":"#c8a96e";
    }
    // lampeggianti forestale = verde/arancio, CC = blu/rosso
    var lamps=document.querySelectorAll(".egg-lamp");
    if(lamps.length>=3){
      if(isFor){
        lamps[0].style.background="#ff6600";lamps[0].style.boxShadow="0 0 12px #ff6600";
        lamps[1].style.background="#6abf69";lamps[1].style.boxShadow="0 0 12px #6abf69";
        lamps[2].style.background="#ff6600";lamps[2].style.boxShadow="0 0 12px #ff6600";
      } else {
        lamps[0].style.background="#0022ff";lamps[0].style.boxShadow="0 0 12px #0022ff";
        lamps[1].style.background="#8b0000";lamps[1].style.boxShadow="0 0 12px #8b0000";
        lamps[2].style.background="#0022ff";lamps[2].style.boxShadow="0 0 12px #0022ff";
      }
    }
    // Animazione lampeggio alternato
    if(_eggLampTimer)clearInterval(_eggLampTimer);
    var _lt=0;
    _eggLampTimer=setInterval(function(){
      _lt++;var l=document.querySelectorAll(".egg-lamp");
      if(!l.length){clearInterval(_eggLampTimer);return;}
      l[0].style.opacity=(_lt%2===0)?"1":"0.15";
      l[1].style.opacity="1";
      l[2].style.opacity=(_lt%2===0)?"0.15":"1";
    },350);
    var em=document.getElementById("m-egg");
    if(em){
      // Sposta al body per evitare stacking context da transform/filter degli antenati
      if(em.parentNode !== document.body) document.body.appendChild(em);
      em.style.cssText = "display:flex!important;position:fixed!important;inset:0!important;z-index:999999!important;background:rgba(0,0,0,.85)!important;align-items:flex-end!important;justify-content:center!important;";
      document.body.style.overflow="hidden";
    }
    return;
  }
  _eggTimer=setTimeout(function(){
    _eggTaps=0;
    if(hint)hint.textContent="C-Turni v3.5.0";
    if(dots)dots.innerHTML="&#8226;&#8226;&#8226;";
  },2000);
}


// ---- GRANDEZZA CARATTERI ----
function setFontSize(px, btn){
  var map={12:"sm",14:"md",16:"lg",18:"xl"};
  var key=map[px]||"md";
  document.documentElement.setAttribute("data-font", key);
  document.documentElement.style.setProperty("--fs-base", px+"px");
  lsS("ct_font", px);
  document.querySelectorAll(".font-sz-btn").forEach(function(b){b.classList.remove("sel");});
  if(btn) btn.classList.add("sel");
  var lbl=document.getElementById("font-size-lbl");
  var nomi={12:"Piccolo",14:"Normale",16:"Grande",18:"XL"};
  if(lbl) lbl.textContent = nomi[px]||px+"px";
  toast("Testo: "+(nomi[px]||px+"px")+" ?","ok");
}
function caricaFontSize(){
  var px=lsG("ct_font", 14);
  var map={12:"sm",14:"md",16:"lg",18:"xl"};
  var key=map[px]||"md";
  document.documentElement.setAttribute("data-font", key);
  document.documentElement.style.setProperty("--fs-base", px+"px");
  var lbl=document.getElementById("font-size-lbl");
  var nomi={12:"Piccolo",14:"Normale",16:"Grande",18:"XL"};
  if(lbl) lbl.textContent = nomi[px]||px+"px";
  document.querySelectorAll(".font-sz-btn").forEach(function(b){
    b.classList.toggle("sel", parseInt(b.getAttribute("data-sz"))===px);
  });
}


// ---- SALVA TEMA / FONT ----
var _temaPending = null;
var _fontPending = null;

function prevTema(t){
  _temaPending = t;
  // Mostra anteprima visiva immediata senza salvare
  if(t==="light") document.documentElement.setAttribute("data-theme","light");
  else if(t==="")  document.documentElement.removeAttribute("data-theme");
  else             document.documentElement.setAttribute("data-theme",t);
  aggTemaUI(t);
  aggThemeColor(t);
  // Abilita tasto salva
  var btn=document.getElementById("btn-salva-tema");
  if(btn){btn.style.opacity="1";btn.style.pointerEvents="auto";}
}

// Anteprima inline (sezione espandibile impostazioni)
function prevTemaInline(t) {
  _temaPending = t;
  // Applica anteprima visiva
  if(t==="light") document.documentElement.setAttribute("data-theme","light");
  else if(t==="")  document.documentElement.removeAttribute("data-theme");
  else             document.documentElement.setAttribute("data-theme",t);
  aggTemaUI(t);
  aggThemeColor(t);
  // Evidenzia card selezionata
  document.querySelectorAll('.tema-card-big').forEach(function(c){ c.classList.remove('sel'); });
  var idMap = {'':'tcb-notte','light':'tcb-light','rosa':'tcb-rosa','forestale':'tcb-forestale',
    'carabinieri':'tcb-carabinieri','rosa-light':'tcb-rosa-light',
    'forestale-light':'tcb-forestale-light','carabinieri-light':'tcb-carabinieri-light'};
  var el = document.getElementById(idMap[t]);
  if(el) el.classList.add('sel');
}

// Salva tema dalla sezione inline
function salvaTemaInline() {
  if(_temaPending === null) {
    // Nessuna modifica — salva il tema corrente
    _temaPending = lsG('ct_tema','');
  }
  lsS("ct_tema", _temaPending);
  var _tme=lsG("ct_me",null);
  if(_tme){ _tme.tema=_temaPending; lsS("ct_me",_tme);
    if(window.FirebaseModule){
      var _ts=lsG("ct_session",null);
      if(_ts&&_ts.userId) window.FirebaseModule.saveUserProfile(_ts.userId,_tme,_tme.reparto).catch(function(){});
    }
  }
  var cfg=_TEMI_CFG[_temaPending]||_TEMI_CFG[""];
  toast("&#10003; Tema \u201c"+cfg.nome+"\u201d salvato","ok");
  _temaPending=null;
  // Aggiorna UI impostazioni
  aggTemaUI(lsG("ct_tema","")||"");
}

function salvaTema(){
  if(_temaPending===null)return;
  lsS("ct_tema", _temaPending);
  // Salva tema su Firebase nel profilo utente
  var _tme=lsG("ct_me",null);
  if(_tme){ _tme.tema=_temaPending; lsS("ct_me",_tme);
    if(window.FirebaseModule){
      var _ts=lsG("ct_session",null);
      if(_ts&&_ts.userId) window.FirebaseModule.saveUserProfile(_ts.userId,_tme,_tme.reparto).catch(function(){});
    }
  }
  var btn=document.getElementById("btn-salva-tema");
  if(btn){btn.style.opacity=".5";btn.style.pointerEvents="none";}
  var cfg=_TEMI_CFG[_temaPending]||_TEMI_CFG[""];
  toast("&#10003; Tema \u201c"+cfg.nome+"\u201d salvato","ok");
  _temaPending=null;
}

function prevFontSize(px, btn){
  _fontPending = px;
  // Anteprima immediata
  var map={12:"sm",14:"md",16:"lg",18:"xl"};
  document.documentElement.setAttribute("data-font", map[px]||"md");
  document.documentElement.style.setProperty("--fs-base", px+"px");
  document.querySelectorAll(".font-sz-btn").forEach(function(b){b.classList.remove("sel");});
  if(btn) btn.classList.add("sel");
  var lbl=document.getElementById("font-size-lbl");
  var nomi={12:"Piccolo",14:"Normale",16:"Grande",18:"XL"};
  if(lbl) lbl.textContent=nomi[px]||px+"px";
  // Abilita tasto salva
  var btnS=document.getElementById("btn-salva-font");
  if(btnS){btnS.style.opacity="1";btnS.style.pointerEvents="auto";}
}

function salvaFontSize(){
  if(_fontPending===null)return;
  lsS("ct_font", _fontPending);
  var nomi={12:"Piccolo",14:"Normale",16:"Grande",18:"XL"};
  var btnS=document.getElementById("btn-salva-font");
  if(btnS){btnS.style.opacity=".5";btnS.style.pointerEvents="none";}
  toast("&#10003; Testo \u201c"+(nomi[_fontPending]||_fontPending+"px")+"\u201d salvato","ok");
  _fontPending=null;
}

// ---- GRADO PICKER ----
function apriGradoPicker(fieldId){
  window._gradoTarget=fieldId;
  renderGradoGrid();
  openM("m-grado-picker");
}

function renderGradoGrid(){
  var el=document.getElementById("grado-grid");
  if(!el)return;
  var currentVal=document.getElementById(window._gradoTarget).value||"";
  el.innerHTML=Object.keys(GR).map(function(k){
    var grado=GR[k];
    var sel=k===currentVal;
    return '<div class="grado-card'+(sel?' sel':'')+'" onclick="selezionaGrado(\''+k.replace(/'/g,"\\'")+ '\')" style="border-radius:12px;padding:12px;text-align:center;cursor:pointer;border:2px solid '+(sel?'var(--blue)':'var(--border)')+';background:var(--bg2);transition:border .2s;display:flex;flex-direction:column;gap:8px;align-items:center"><img src="'+grado.svg+'" style="height:36px;width:60px;object-fit:contain"><div style="font-size:11px;font-weight:700;color:var(--txt)">'+grado.nome+'</div></div>';
  }).join("");
}

function selezionaGrado(val) {
  var target = document.getElementById(window._gradoTarget);
  if(target) {
    target.value = val;
    var g = GR[val];
    // Aggiornamento dinamico della label corretta (Registrazione, Profilo, o Persona)
    var lbl = document.getElementById('lbl-' + window._gradoTarget);
    if(lbl) { lbl.textContent = g ? g.nome : val; lbl.style.color = 'var(--txt)'; }
    
    // Aggiorna la preview dell'immagine solo se siamo nel Profilo
    if(window._gradoTarget === 'pf-grado' && typeof prevGrado === 'function') {
      prevGrado(val);
    }
  }
  closeM('m-grado-picker');
}

function selezionaTipoReparto(targetId, val, btnEl) {
  // Aggiorna l'input nascosto
  var target = document.getElementById(targetId);
  if(target) target.value = val;
  
  // Resetta lo stile di tutti i bottoni fratelli
  var parent = btnEl.parentElement;
  var pills = parent.querySelectorAll('.trep-pill');
  pills.forEach(function(p) {
    p.style.background = 'transparent';
    p.style.color = 'var(--txt)';
    p.style.fontWeight = '600';
  });
  
  // Colora il bottone cliccato
  btnEl.style.background = 'var(--blue)';
  btnEl.style.color = '#fff';
  btnEl.style.fontWeight = '800';
}

// --- GESTIONE SELEZIONE PERSONALE IN-APP ---
window._persTarget = null;

function aggSel() {
  var P = lsG("ct_p", []);
  var listEl = document.getElementById("pers-picker-list");
  if(!listEl) return;
  
  if(P.length === 0) {
    listEl.innerHTML = '<div style="padding:30px 20px;text-align:center;color:var(--txt2);font-size:13px">Nessuna persona inserita.<br>Vai su "Personale" per aggiungerla.</div>';
    return;
  }

  listEl.innerHTML = P.map(function(p) {
    var g = GR[p.grado] || {nome: p.grado, svg: ""};
    var img = g.svg ? '<img src="'+g.svg+'" style="height:20px;object-fit:contain">' : '';
    // Escapi il nome per evitare errori se ci sono apostrofi (es. D'Angelo)
    var safeNome = p.nome.replace(/'/g, "\\'");
    return '<div onclick="selezionaPersona(\''+p.id+'\', \''+safeNome+'\')" style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid var(--border);cursor:pointer;transition:background .2s" onmousedown="this.style.background=\'var(--card2)\'" onmouseup="this.style.background=\'none\'">' +
           '<div style="width:38px;height:38px;border-radius:50%;background:var(--bg);border:1px solid var(--border2);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">&#128100;</div>' +
           '<div style="flex:1;min-width:0">' +
             '<div style="font-size:14px;font-weight:700;color:var(--txt)">' + p.nome + '</div>' +
             '<div style="font-size:11px;color:var(--txt2);display:flex;align-items:center;gap:6px;margin-top:2px">' + img + g.nome + '</div>' +
           '</div>' +
           '</div>';
  }).join('');
}

// --- GESTIONE DATE PICKER IN-APP ---
window._dateTarget = null;
var _dpDate = new Date();

function apriDatePicker(targetId) {
  window._dateTarget = targetId;
  var cur = document.getElementById(targetId).value;
  if(cur) {
    var pts = cur.split('-');
    _dpDate = new Date(pts[0], pts[1]-1, pts[2]);
  } else {
    _dpDate = new Date();
  }
  renderDatePicker();
  openM('m-datepicker');
}

function renderDatePicker() {
  var y = _dpDate.getFullYear();
  var m = _dpDate.getMonth();
  var mesi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  document.getElementById('dp-month-year').textContent = (mesi[m] + ' ' + y).toUpperCase();

  var firstDay = new Date(y, m, 1).getDay();
  if(firstDay === 0) firstDay = 7;
  var daysInMonth = new Date(y, m+1, 0).getDate();

  var html = '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;text-align:center;font-weight:800;margin-bottom:8px;font-size:11px;color:var(--txt2)"><div>LUN</div><div>MAR</div><div>MER</div><div>GIO</div><div>VEN</div><div>SAB</div><div>DOM</div></div>';
  html+='<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;row-gap:8px">';
  
  for(var i=1; i<firstDay; i++) html += '<div></div>';
  
  var oggiIso = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD
  var targetEl = document.getElementById(window._dateTarget);
  var curSel = targetEl ? targetEl.value : '';

  for(var d=1; d<=daysInMonth; d++) {
    var selDate = y + '-' + String(m+1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    var isSel = (curSel === selDate);
    var isOggi = (oggiIso === selDate);
    var bg = isSel ? 'var(--blue)' : (isOggi ? 'var(--card2)' : 'transparent');
    var col = isSel ? '#fff' : (isOggi ? 'var(--blue)' : 'var(--txt)');
    var fw = (isSel || isOggi) ? '800' : '500';
    html += '<div onclick="scegliDate(\''+selDate+'\')" style="aspect-ratio:1;display:flex;align-items:center;justify-content:center;border-radius:12px;background:'+bg+';color:'+col+';font-weight:'+fw+';cursor:pointer;font-size:14px;transition:all .2s" onmousedown="this.style.transform=\'scale(0.9)\'" onmouseup="this.style.transform=\'scale(1)\'">'+d+'</div>';
  }
  html += '</div>';
  document.getElementById('dp-grid').innerHTML = html;
}

function dpMese(dir) {
  _dpDate.setMonth(_dpDate.getMonth() + dir);
  renderDatePicker();
}

function scegliDate(dStr) {
  var t = document.getElementById(window._dateTarget);
  if(t) {
    t.value = dStr;
    var lbl = document.getElementById('lbl-' + window._dateTarget);
    if(lbl) lbl.textContent = dStr.split('-').reverse().join('/');
  }
  closeM('m-datepicker');
}
// -----------------------------------

function apriPersPicker(targetId, lblId) {
  window._persTarget = targetId;
  window._persLblId  = lblId || null;
  aggSel(); // Rigenera la lista aggiornata
  openM('m-pers-picker');
}

// ── Wrapper apriDatePicker per il nuovo form turno ────────────
// Usa il datepicker esistente ma aggiorna anche il bottone label
function apriDatePicker(hiddenId, lblId) {
  window._dateTarget = hiddenId;
  window._dateLblId  = lblId || ('lbl-' + hiddenId);
  var cur = (document.getElementById(hiddenId)||{}).value;
  if(cur) {
    var pts = cur.split('-');
    _dpDate = new Date(parseInt(pts[0]), parseInt(pts[1])-1, parseInt(pts[2]));
  } else {
    _dpDate = new Date();
  }
  renderDatePicker();
  openM('m-datepicker');
}

// Override scegliDate per aggiornare anche il bottone label
scegliDate = function(dStr) {
  var t = document.getElementById(window._dateTarget);
  if(t) t.value = dStr;
  var lblId = window._dateLblId || ('lbl-' + window._dateTarget);
  var lbl = document.getElementById(lblId);
  if(lbl) { lbl.textContent = dStr.split('-').reverse().join('/'); lbl.style.color = 'var(--txt)'; }
  closeM('m-datepicker');
};

// ── TIME PICKER IN-APP ────────────────────────────────────────
var _tp = { h:0, m:0, hiddenId:'', lblId:'', title:'' };

function apriTimePicker(hiddenId, lblId, title) {
  _tp.hiddenId = hiddenId;
  _tp.lblId    = lblId;
  _tp.title    = title || 'Orario';
  var cur = (document.getElementById(hiddenId)||{}).value || '';
  if(cur && cur.indexOf(':') > 0) {
    var pts = cur.split(':');
    _tp.h = parseInt(pts[0])||0;
    _tp.m = parseInt(pts[1])||0;
  } else {
    _tp.h = 0; _tp.m = 0;
  }
  var titleEl = document.getElementById('m-time-picker-title');
  if(titleEl) titleEl.textContent = '⏰ ' + _tp.title;
  _tpRender();
  openM('m-time-picker');
}
function _tpRender() {
  var hStr = String(_tp.h).padStart(2,'0');
  var mStr = String(_tp.m).padStart(2,'0');
  var hEl = document.getElementById('tp-h');
  var mEl = document.getElementById('tp-m');
  var hDisp = document.getElementById('tp-h-display');
  var mDisp = document.getElementById('tp-m-display');
  if(hEl) hEl.textContent = hStr;
  if(mEl) mEl.textContent = mStr;
  if(hDisp) hDisp.textContent = hStr;
  if(mDisp) mDisp.textContent = mStr;
}
function tpChangeH(d) {
  _tp.h = ((_tp.h + d) + 24) % 24;
  _tpRender();
  if(navigator.vibrate) navigator.vibrate(5);
}
function tpChangeM(d) {
  _tp.m = ((_tp.m + d) + 60) % 60;
  _tpRender();
  if(navigator.vibrate) navigator.vibrate(5);
}
function tpSetOra(h, m) {
  _tp.h = h; _tp.m = m;
  _tpRender();
  if(navigator.vibrate) navigator.vibrate(10);
}
function tpConferma() {
  var val = String(_tp.h).padStart(2,'0') + ':' + String(_tp.m).padStart(2,'0');
  var hidden = document.getElementById(_tp.hiddenId);
  if(hidden) hidden.value = val;
  var lbl = document.getElementById(_tp.lblId);
  if(lbl) { lbl.textContent = val; lbl.style.color = 'var(--txt)'; }
  closeM('m-time-picker');
  if(navigator.vibrate) navigator.vibrate(15);
}

function selezionaPersona(id, nome) {
  var target = document.getElementById(window._persTarget);
  if(target) {
    target.value = id;
    // Aggiorna label del bottone — supporta sia lbl- che _persLblId
    var lblId = window._persLblId || ('lbl-' + window._persTarget);
    var lbl = document.getElementById(lblId);
    if(lbl) { lbl.textContent = nome; lbl.style.color = 'var(--txt)'; }
    // Aggiorna anche mt-pers-sel per compatibilità con salvaTurno
    var sel = document.getElementById('mt-pers-sel');
    if(sel) sel.value = id;
  }
  closeM('m-pers-picker');
}

// Aggiorna il label del bottone persona nel form turno
function _aggiornaPersBtnLabel() {
  var persId = (document.getElementById('mt-pers')||{}).value;
  var btnLbl = document.getElementById('mt-pers-btn-lbl');
  if(!btnLbl) return;
  if(persId) {
    var P = lsG('ct_p', []);
    var p = P.find(function(x){ return String(x.id) === String(persId); });
    if(p) { btnLbl.textContent = p.nome; btnLbl.style.color = 'var(--txt)'; return; }
  }
  btnLbl.textContent = 'Scegli collega...';
  btnLbl.style.color = 'var(--txt2)';
}
// ------------------------------------------


// ---- CENTRO NOTIFICHE ----
var _notifTab="tutti";

function aggiungiNotifica(tipo,titolo,sub,ico,colore,extra){
  var NL=lsG("ct_notifiche",[]);
  var n=Object.assign({id:Date.now()+Math.random(),tipo:tipo,titolo:titolo,sub:sub||"",ico:ico||"&#128276;",colore:colore||"var(--blue)",ts:new Date().toISOString(),letta:false},extra||{});
  NL.unshift(n);
  if(NL.length>100)NL=NL.slice(0,100);
  lsS("ct_notifiche",NL);
  // Salva anche su Firebase per sync cross-device
  var sess=lsG("ct_session",null);
  if(sess&&sess.userId&&window.FirebaseModule&&typeof window.FirebaseModule.saveNotifica==="function"){
    window.FirebaseModule.saveNotifica(sess.userId, n).catch(function(){});
  }
  aggiornaBadgeNotif();
}

function aggiornaBadgeNotif(){
  var NL=lsG("ct_notifiche",[]);
  var n=NL.filter(function(x){return !x.letta;}).length;
  var b=document.getElementById("notif-badge");
  if(!b)return;
  if(n>0){b.style.display="block";b.textContent=n>99?"99+":n;}
  else b.style.display="none";
}

function apriNotifCenter(){
  renderNotifCenter();
  var dr=document.getElementById("notif-drawer");
  var ov=document.getElementById("notif-overlay");
  if(!dr)return;
  ov.style.display="block";
  // forza reflow prima di aggiungere .open
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      dr.classList.add("open");
      ov.classList.add("open");
    });
  });
  document.body.style.overflow="hidden";
}
function chiudiNotifCenter(){
  var dr=document.getElementById("notif-drawer");
  var ov=document.getElementById("notif-overlay");
  if(!dr)return;
  dr.classList.remove("open");
  ov.classList.remove("open");
  setTimeout(function(){ov.style.display="none";},320);
  document.body.style.overflow="";
}

function switchNotifTab(tab,btn){
  _notifTab=tab;
  document.querySelectorAll(".notif-pill").forEach(function(b){b.classList.remove("sel");});
  if(btn)btn.classList.add("sel");
  renderNotifCenter();
}

function renderNotifCenter(){
  var NL = lsG("ct_notifiche", []);
  var fbN = lsG("ct_notif_fb", []);
  fbN.forEach(function(fn){
    if(!NL.some(function(n){ return String(n.id)===String(fn.id); })) NL.push(fn);
  });
  NL.sort(function(a,b){ return new Date(b.ts)-new Date(a.ts); });

  var fl = _notifTab==="tutti" ? NL : NL.filter(function(n){ return n.tipo===_notifTab; });
  var nlette = fl.filter(function(n){ return !n.letta; }).length;
  var cnt = document.getElementById("nd-count");
  if(cnt) cnt.textContent = nlette>0 ? nlette+" non lette" : "Tutto letto \u2713";
  var el = document.getElementById("notif-center-list"); if(!el) return;

  if(!fl.length){
    el.innerHTML='<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 20px;gap:12px;text-align:center">'
      +'<div style="font-size:48px;opacity:.3">&#128276;</div>'
      +'<div style="font-size:15px;font-weight:700;color:var(--txt)">Nessuna notifica</div>'
      +'<div style="font-size:12px;color:var(--txt2);line-height:1.5">Le notifiche per turni, to-do e agenda appariranno qui</div>'
      +'</div>';
    return;
  }

  // Colori e icone per tipo — M3 Expressive
  var catCfg = {
    turni:   {label:"Turni",   bg:"rgba(41,121,255,.18)",  color:"var(--blue)",   ico:"&#128197;"},
    todo:    {label:"To-Do",   bg:"rgba(6,214,160,.18)",   color:"var(--green)",  ico:"&#9989;"},
    agenda:  {label:"Agenda",  bg:"rgba(212,175,55,.18)",  color:"var(--gold)",   ico:"&#128203;"},
    sistema: {label:"Sistema", bg:"rgba(150,150,150,.15)", color:"var(--txt2)",   ico:"&#9881;"}
  };

  el.innerHTML = fl.map(function(n){
    var isNuova = !n.letta;
    var cfg = catCfg[n.tipo] || catCfg.sistema;
    var ico = n.ico || cfg.ico;
    var azioni = "";
    if(n.azione === "approva_richiesta" && !n.letta){
      azioni = '<div class="notif-actions">'
        +'<button class="notif-btn-ok" onclick="event.stopPropagation();gestisciNotifAzione(\''+n.id+'\',\'approva\')">&#10003; Approva</button>'
        +'<button class="notif-btn-no" onclick="event.stopPropagation();gestisciNotifAzione(\''+n.id+'\',\'rifiuta\')">&#10005; Rifiuta</button>'
        +'</div>';
    }
    return '<div class="notif-item'+(isNuova?' non-letta':' letta')+'" data-nid="'+n.id+'" style="max-height:200px" onclick="segnaLetta(\''+n.id+'\',this)">'
      +'<div class="notif-ico" style="background:'+cfg.bg+';color:'+cfg.color+'">'+ico+'</div>'
      +'<div class="notif-body">'
        +'<div class="notif-cat">'
          +'<span style="color:'+cfg.color+';font-weight:800">'+cfg.label+'</span>'
          +'<span class="notif-time">'+fmtNT(n.ts)+'</span>'
        +'</div>'
        +'<div class="notif-title">'+n.titolo+'</div>'
        +(n.sub?'<div class="notif-sub">'+n.sub+'</div>':'')
        +azioni
      +'</div>'
      +(isNuova?'<div class="notif-dot"></div>':'')
    +'</div>';
  }).join("");

  el.querySelectorAll(".notif-item").forEach(function(card){
    _bindSwipeDismiss(card);
  });
}

function _bindSwipeDismiss(card){
  var startX=0, startY=0, curX=0, dragging=false, threshold=80;
  card.addEventListener("touchstart",function(e){
    startX=e.touches[0].clientX; startY=e.touches[0].clientY; dragging=true; curX=0;
    card.style.transition="none";
  },{passive:true});
  card.addEventListener("touchmove",function(e){
    if(!dragging)return;
    curX=e.touches[0].clientX-startX;
    var curY=e.touches[0].clientY-startY;
    if(Math.abs(curY)>Math.abs(curX)+10){dragging=false;card.style.transform="";return;}
    card.style.transform="translateX("+curX+"px)";
    card.style.opacity=String(1-Math.min(Math.abs(curX)/threshold,1)*0.6);
  },{passive:true});
  card.addEventListener("touchend",function(){
    if(!dragging)return; dragging=false;
    card.style.transition="";
    if(Math.abs(curX)>=threshold){
      var dir=curX>0?"swipe-out-right":"swipe-out-left";
      card.classList.add(dir);
      setTimeout(function(){
        card.classList.add("collapsing");
        card.style.maxHeight=card.offsetHeight+"px";
        requestAnimationFrame(function(){ card.style.maxHeight="0"; });
        setTimeout(function(){
          var nid=card.dataset.nid;
          _rimuoviNotifica(nid);
          card.remove();
          aggiornaBadgeNotif();
        },300);
      },200);
    } else {
      card.style.transform=""; card.style.opacity="";
    }
  });
}

function _rimuoviNotifica(id){
  var NL=lsG("ct_notifiche",[]).filter(function(n){return String(n.id)!==String(id);});
  lsS("ct_notifiche",NL);
  // Rimuovi da Firebase — cerca sia per id numerico che per doc id stringa
  if(window.FirebaseModule && typeof window.FirebaseModule.deleteNotifica==="function"){
    window.FirebaseModule.deleteNotifica(id).catch(function(){});
  }
  // Rimuovi anche da ct_notif_fb
  var fbN=lsG("ct_notif_fb",[]).filter(function(n){return String(n.id)!==String(id);});
  lsS("ct_notif_fb",fbN);
}

function gestisciNotifAzione(nid, azione){
  var NL=lsG("ct_notifiche",[]);
  var n=NL.find(function(x){return String(x.id)===String(nid);});
  if(!n)return;
  if(azione==="approva" && n.targetUid) nucleoApprova(n.targetUid);
  if(azione==="rifiuta" && n.targetUid) nucleoNega(n.targetUid);
  segnaLetta(nid, document.querySelector('[data-nid="'+nid+'"]'));
  renderNotifCenter();
}

function fmtNT(ts){
  var d=new Date(ts),now=new Date(),diff=Math.floor((now-d)/1000);
  if(diff<60)return "Adesso";
  if(diff<3600)return Math.floor(diff/60)+" min fa";
  if(diff<86400)return Math.floor(diff/3600)+" ore fa";
  return d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
}

function segnaLetta(id,el){
  // Aggiorna localStorage
  var NL=lsG("ct_notifiche",[]);
  for(var i=0;i<NL.length;i++){if(String(NL[i].id)===String(id)){NL[i].letta=true;break;}}
  lsS("ct_notifiche",NL);
  // Aggiorna anche ct_notif_fb
  var fbN=lsG("ct_notif_fb",[]);
  for(var j=0;j<fbN.length;j++){if(String(fbN[j].id)===String(id)){fbN[j].letta=true;break;}}
  lsS("ct_notif_fb",fbN);
  // Aggiorna su Firestore
  if(window.FirebaseModule && typeof window.FirebaseModule.segnaNotificaLetta==="function"){
    window.FirebaseModule.segnaNotificaLetta(id).catch(function(){});
  }
  if(el){el.classList.remove("non-letta");el.classList.add("letta");}
  aggiornaBadgeNotif();
}

function segnaLetteTutte(){
  var NL=lsG("ct_notifiche",[]);
  NL.forEach(function(n){n.letta=true;});
  lsS("ct_notifiche",NL);
  // Aggiorna anche ct_notif_fb
  var fbN=lsG("ct_notif_fb",[]);
  fbN.forEach(function(n){n.letta=true;});
  lsS("ct_notif_fb",fbN);
  // Aggiorna su Firestore tutte le notifiche
  if(window.FirebaseModule){
    NL.concat(fbN).forEach(function(n){
      if(typeof window.FirebaseModule.segnaNotificaLetta==="function")
        window.FirebaseModule.segnaNotificaLetta(n.id).catch(function(){});
    });
  }
  renderNotifCenter();aggiornaBadgeNotif();
  toast("&#10003; Tutte segnate come lette","ok");
}

function cancellaNotifLette(){
  var NL=lsG("ct_notifiche",[]);
  var fbN=lsG("ct_notif_fb",[]);
  var lette=NL.filter(function(n){return n.letta;});
  var fbLette=fbN.filter(function(n){return n.letta;});
  var tot=lette.length+fbLette.length;
  if(!tot){ toast("Nessuna notifica letta da eliminare","warn"); return; }
  lsS("ct_notifiche",NL.filter(function(n){return !n.letta;}));
  lsS("ct_notif_fb",fbN.filter(function(n){return !n.letta;}));
  if(window.FirebaseModule){
    lette.concat(fbLette).forEach(function(n){
      if(typeof window.FirebaseModule.deleteNotifica==="function")
        window.FirebaseModule.deleteNotifica(n.id).catch(function(){});
    });
  }
  renderNotifCenter();aggiornaBadgeNotif();
  toast("&#128465; "+tot+" notifiche eliminate","ok");
}
function segnaTutteLette(){segnaLetteTutte();}
function salvaNuovoAnnoLic(){_confermaAggiungiAnno();}

// -- Hook turni --
function notificaTurno(pnome, tipo, data) {
  var me = lsG('ct_me', null);
  // Non notificare se l'utente si è autoassegnato il turno
  // (il turno è dell'utente loggato E non è comandante/vice che assegna ad altri)
  var myNome = me ? ((me.nome||'') + ' ' + (me.cognome||'')).trim().toLowerCase() : '';
  var turnoNome = (pnome||'').toLowerCase().trim();
  var isSelf = myNome && turnoNome && (myNome === turnoNome || turnoNome.indexOf(myNome) !== -1 || myNome.indexOf(turnoNome) !== -1);
  var isCom = me && (me.ruolo === 'comandante' || me.ruolo === 'vice');
  // Se è autoassegnazione (non comandante che assegna ad altri) → non notificare
  if(isSelf && !isCom) return;
  var mN=["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
  var d=new Date(data+"T00:00:00");
  var ds=d.getDate()+" "+mN[d.getMonth()];
  var tl={mattina:"Mattina",pomeriggio:"Pomeriggio",notte:"Notte",riposo:"Riposo",ferie:"Ferie",
    recupero:"Recupero",licenza:"Licenza",permesso:"Permesso",corso:"Corso",
    obbm:"Obbligatorio Mattina",obbp:"Obbligatorio Pomeriggio"}[tipo]||tipo;
  aggiungiNotifica("turni","Turno assegnato",pnome+"  "+tl+" del "+ds,"&#128197;","var(--blue)");
}

// -- Hook to-do --
function notificaTodo(titolo,priorita){
  var pl={alta:"Alta &#128308;",media:"Media &#129000;",bassa:"Bassa &#128994;"}[priorita]||priorita;
  aggiungiNotifica("todo","Nuovo promemoria",titolo+"  Priorit\u00e0 "+pl,"&#9989;","var(--green)");
}

// -- Hook agenda --
function notificaAgenda(titolo,data,ora){
  var mN=["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
  var d=new Date(data+"T00:00:00");
  var ds=d.getDate()+" "+mN[d.getMonth()];
  aggiungiNotifica("agenda","Nuovo appuntamento",titolo+"  "+ds+(ora?" ore "+ora:""),"&#128203;","var(--gold)");
}


// -- MINI MENU AVATAR ------------------------------

function chiudiAvaMenu(){
  var m=document.getElementById("ava-menu");
  if(m)m.style.display="none";
}
// Toggle visibilit password
function togPwd(id, btn) {
  var inp = document.getElementById(id);
  if (!inp) return;
  var show = inp.type === 'password';
  inp.type = show ? 'text' : 'password';
  if (btn) btn.innerHTML = show ? '&#128065;' : '&#128064;';
}
document.addEventListener("click",function(e){
  var wrap=document.getElementById("ava-wrap");
  if(wrap&&!wrap.contains(e.target)) chiudiAvaMenu();
});
// -------------------------------------------------
function aggUI(){
  try{
    var u = lsG("ct_me", null);
    if(!u) return;
    // Recupero foto robusto: ct_me → ct_session → ct_p → ct_users
    if(!u.ava || !u.ava.startsWith('http')) {
      var _sess = lsG('ct_session', null);
      if(_sess && (_sess.ava || _sess.fotoURL) && (_sess.ava||_sess.fotoURL).startsWith('http'))
        u.ava = _sess.ava || _sess.fotoURL;
    }
    if(!u.ava || !u.ava.startsWith('http')) {
      var _myPidAv = localStorage.getItem('ct_my_pid');
      var _Pav = lsG('ct_p', []);
      var _pMeAv = _Pav.find(function(p){ return p.uid === u.uid || String(p.id) === String(_myPidAv); });
      if(_pMeAv && _pMeAv.ava && _pMeAv.ava.startsWith('http')) u.ava = _pMeAv.ava;
    }
    if(!u.ava || !u.ava.startsWith('http')) {
      var _fbUsAv = lsG('ct_users', []);
      var _fbMeAv = _fbUsAv.find(function(x){ return x.uid === u.uid || x.email === (lsG('ct_session',null)||{}).email; });
      if(_fbMeAv && _fbMeAv.ava && _fbMeAv.ava.startsWith('http')) u.ava = _fbMeAv.ava;
    }
    // Persisti se trovata
    if(u.ava && u.ava.startsWith('http')) {
      var _ctMe = lsG('ct_me', null);
      if(_ctMe && (!_ctMe.ava || !_ctMe.ava.startsWith('http'))) {
        _ctMe.ava = u.ava;
        lsS('ct_me', _ctMe);
      }
    }

    var g  = GR[u.grado] || {nome:u.grado,col:"#8faac8",svg:""};
    var tp = u.tipo || "ter";
    var tpT = tp === "for" || tp === "forestale" ? "Forestale" : tp === "spe" || tp === "speciale" ? "Speciale" : "Territoriale";

    // Header in alto
    var hNome = document.getElementById("h-nome");
    if(hNome) hNome.textContent = u.nome || "";
    var hGr = document.getElementById("h-gr");
    if(hGr) hGr.textContent = g.nome || "";
    var hTipo = document.getElementById("h-tipo");
    if(hTipo) hTipo.textContent = tpT;
    var hAva = document.getElementById("h-ava");
    if(hAva){
      if(u.ava && u.ava.length > 5){
        hAva.style.backgroundImage="url("+u.ava+")";
        hAva.style.backgroundSize="cover";
        hAva.style.backgroundPosition="center";
        hAva.innerHTML="";
      } else {
        hAva.style.backgroundImage="";
        hAva.innerHTML="&#128100;";
      }
    }

    // Rendi cliccabile per aprire mini-menu (non logout)
    var hAvaWrap = document.getElementById("h-ava-wrap") || (hAva ? hAva.parentElement : null);
    if(hAvaWrap){
      hAvaWrap.style.cursor = "pointer";
    }

    // Tesserino
    var nome  = (u.nome || "").trim();
    var cogn  = (u.cognome || "").trim();
    var rep   = u.reparto || "";

    var sign = document.getElementById("tess-sign");
    if(sign){ sign.textContent = (nome+" "+cogn).trim() || nome || cogn || ""; }

    var elNome = document.getElementById("tess-nome");
    if(elNome) elNome.textContent = (nome || "-").toUpperCase();

    var elCogn = document.getElementById("tess-cognome");
    if(elCogn) elCogn.textContent = (cogn || "-").toUpperCase();

    var elGr = document.getElementById("tess-grado");
    if(elGr) elGr.textContent = g.nome || (u.grado || "-");

    var elRep2 = document.getElementById("tess-rep");
    if(elRep2) elRep2.textContent = u.reparto || "-";

    // Firma titolare
    var elSign = document.getElementById("tess-sign");
    if(elSign) elSign.textContent = ((nome||"")+" "+(cogn||"")).trim() || "-";

    // Foto / placeholder
    var tessAva = document.getElementById("tess-ava");
    var tessPlaceholder = document.getElementById("tess-ava-placeholder");
    if(tessAva && u.ava){ tessAva.src=u.ava; tessAva.style.display="block"; if(tessPlaceholder)tessPlaceholder.style.display="none"; }
    else { if(tessAva)tessAva.style.display="none"; if(tessPlaceholder)tessPlaceholder.style.display=""; }

    // Data rilascio: leggi da ct_me, se mancante genera oggi e salva
    var elRil = document.getElementById("tess-rilascio");
    if(elRil){
      if(!u.rilasciatoIl){
        u.rilasciatoIl = new Date().toLocaleDateString("it-IT");
        lsS("ct_me", u);
        // Sincronizza su Firebase se disponibile
        if(window.FirebaseModule) window.FirebaseModule.savePersonale();
      }
      elRil.textContent = u.rilasciatoIl;
    }

    var elTipo = document.getElementById("tess-tipo");
    if(elTipo) elTipo.textContent = tpT;
    var elSpec = document.getElementById("tess-spec");
    if(elSpec) elSpec.textContent = tpT.toUpperCase();

    var elRep = document.getElementById("tess-rep");
    if(elRep) elRep.textContent = rep || "";

    // SVG grado nel tesserino
    var elSvg = document.getElementById("tess-grado-svg");
    if(elSvg){
      if(g.svg){
        elSvg.innerHTML = '<img src="'+g.svg+'" alt="">';
      } else {
        elSvg.innerHTML = '';
      }
    }

    var tAva  = document.getElementById("tess-ava");
    var tInit = document.getElementById("tess-ava-init");
    if(tAva && tInit){
      if(u.ava){
        tAva.src = u.ava;
        tAva.style.display = "block";
        tInit.style.display = "none";
      } else {
        tAva.style.display = "none";
        var ini = (nome || "?").charAt(0).toUpperCase();
        tInit.textContent = ini || "?";
        tInit.style.display = "block";
      }
    }
      // Profilo card impostazioni
    var impNome=document.getElementById('imp-nome');var impSub=document.getElementById('imp-sub');var impAva=document.getElementById('imp-ava');
    if(impNome){var _n=((u.nome||'')+' '+(u.cognome||'')).trim()||u.nome||'';impNome.textContent=_n||'\u2014';impNome.style.display='block';}
    if(impSub){var _r=(u.reparto||'').replace(/_/g,' ');var _g=u.grado?(GR[u.grado]?GR[u.grado].nome:u.grado):'';var _tp=u.tipo==='for'||u.tipo==='forestale'?'Forestale':u.tipo==='spe'||u.tipo==='speciale'?'Speciale':u.tipo==='radiomobile'?'Radiomobile':u.tipo||'Territoriale';var _ruoloLbl=u.ruolo==='comandante'?'&#128081; Comandante':u.ruolo==='vice'?'&#11088; Vice Comandante':'';var _s=(_r&&_g)?_r+' \u00b7 '+_g:(_r||_g||'\u2014');_s+=_tp?' \u00b7 '+_tp:'';if(_ruoloLbl)_s+=' \u00b7 '+_ruoloLbl;impSub.innerHTML=_s;impSub.style.display='block';}
    if(impAva){if(u.ava){impAva.style.backgroundImage='url('+u.ava+')';impAva.style.backgroundSize='cover';impAva.style.backgroundPosition='center';impAva.textContent='';}else{impAva.style.backgroundImage='';impAva.textContent='\u{1F464}';}}
    // Mostra sezione Gestione Membri per Comandante (incluso admin)
    var gms = document.getElementById('gestione-membri-section');
    var isCom = (u.ruolo === 'comandante' || u.ruolo === 'vice') || (u.id === 1);
    if(gms) gms.style.display = 'none'; // gestione spostata in pag-membri
    // Mostra bottone Approvazione Militari solo per comandante
    var btnNucleo = document.getElementById('btn-gestione-nucleo');
    if(btnNucleo) btnNucleo.style.display = isCom ? 'flex' : 'none';
    // Nascondi intera sezione Gestione Reparto per gli addetti
    var secGestRep = document.getElementById('sec-gestione-reparto');
    if(secGestRep) secGestRep.style.display = isCom ? 'block' : 'none';
    // Tasto invita collega: visibile solo se in un reparto
    var btnInvita = document.getElementById('btn-invita-collega');
    if(btnInvita) btnInvita.style.display = (u && u.reparto) ? 'inline-flex' : 'none';
    // Aggiorna orari preset (renderDash è chiamato dall'hook aggUI)
    if(typeof renderOrariPreset === 'function') renderOrariPreset();
    // Aggiorna stato reparto in impostazioni
    if(typeof aggiornaStatoReparto === 'function') aggiornaStatoReparto();

    // Sincronizza toggle tesserino e dino con le preferenze salvate
    var prefs = lsG('ct_prefs', {});
    var togTess = document.getElementById('tog-tesserino');
    if(togTess) togTess.checked = prefs.tesserino !== false; // default ON
    var tessSt = document.getElementById('tess-sticky');
    if(tessSt) tessSt.style.display = 'none'; // Task 6: tesserino rimosso dalla dashboard
    // Popola tesserino in Impostazioni > Profilo (Task 6)
    // Copia il contenuto e rimuove gli id per evitare duplicati nel DOM
    var tessImp = document.getElementById('tess-sticky-imp');
    var tessOrig = document.getElementById('tess-sticky');
    if(tessImp && tessOrig) {
      tessImp.innerHTML = tessOrig.innerHTML;
      // Rimuovi tutti gli id dalla copia per evitare duplicati
      tessImp.querySelectorAll('[id]').forEach(function(el){ el.removeAttribute('id'); });
    }
    var togDino = document.getElementById('tog-dino');
    if(togDino) togDino.checked = !!prefs.dino;
    var togSuoni = document.getElementById('tog-suoni');
    if(togSuoni) togSuoni.checked = prefs.suoni !== false; // default ON
    var togConfetti = document.getElementById('tog-confetti');
    if(togConfetti) togConfetti.checked = prefs.confetti !== false; // default ON
    var togSnooze = document.getElementById('tog-snooze');
    if(togSnooze) togSnooze.checked = prefs.snooze !== false; // default ON
    // Comportamento tema
    _applicaComportamentoTema();

  }catch(e){
    console.warn("aggUI err", e);
  }
}

// ---- NOVITÀ VERSIONE ----
var _APP_VERSION = '4.1';
function _checkNovita(){
  localStorage.setItem('ct_novita_v4', _APP_VERSION);
}
function chiudiNovita(){
  localStorage.setItem('ct_novita_v4', _APP_VERSION);
  closeM('m-novita');
}

// ---- SALVA PROFILO (vecchia versione rimossa — usa quella sotto) ----
// BUG FIX: questa funzione era duplicata e usava 'pf-foto' (inesistente).
// La versione corretta è definita più avanti e usa 'pf-ava-file'.

// ---- CAMBIO PASSWORD ----
function cambiaPassword(){
  var u=lsG("ct_me",null);if(!u)return;
  var old=document.getElementById("pw-old").value;
  var nw=document.getElementById("pw-new").value;
  var nw2=document.getElementById("pw-new2").value;
  var errEl=document.getElementById("pw-err");
  var okEl=document.getElementById("pw-ok");
  errEl.classList.remove("on");okEl.classList.remove("on");
  if(!old||!nw||!nw2){errEl.textContent="Compila tutti i campi";errEl.classList.add("on");return;}
  if(old!==u.pw){errEl.textContent="Password attuale errata";errEl.classList.add("on");return;}
  if(nw.length<4){errEl.textContent="La nuova password deve avere almeno 4 caratteri";errEl.classList.add("on");return;}
  if(nw!==nw2){errEl.textContent="Le nuove password non coincidono";errEl.classList.add("on");return;}
  u.pw=nw;
  lsS("ct_me",u);
  var U=lsG("ct_u",[]);
  for(var i=0;i<U.length;i++){if(U[i].id===u.id){U[i].pw=nw;break;}}
  lsS("ct_u",U);
  document.getElementById("pw-old").value="";
  document.getElementById("pw-new").value="";
  document.getElementById("pw-new2").value="";
  okEl.classList.add("on");
  setTimeout(function(){okEl.classList.remove("on");},3000);
  // Aggiorna anche Firebase Auth se disponibile
  try {
    var _fbAuth = window._fbAuth;
    if(_fbAuth && _fbAuth.currentUser && typeof _fbAuth.currentUser.updatePassword === "function"){
      _fbAuth.currentUser.updatePassword(nw).catch(function(e){
        console.warn("Firebase updatePassword:", e.message);
      });
    } else if(window._fbUpdatePassword && _fbAuth && _fbAuth.currentUser){
      window._fbUpdatePassword(_fbAuth.currentUser, nw).catch(function(e){
        console.warn("Firebase updatePassword:", e.message);
      });
    }
  } catch(e){ console.warn("Firebase pw update skip:", e); }
  toast("Password aggiornata","ok");
}

// ---- STATS ----
function stats(){
  var T=lsG("ct_t",[]),P=lsG("ct_p",[]);
  var sp=document.getElementById("st-p"); if(sp) sp.textContent=P.length;
  var st=document.getElementById("st-t"); if(st) st.textContent=T.length;
  var n=0,f=0;
  for(var i=0;i<T.length;i++){
    if(T[i].tipo==="notte")n++;
    if(T[i].tipo==="ferie"||T[i].tipo==="licenza")f++;
  }
  var sn=document.getElementById("st-n"); if(sn) sn.textContent=n;
  var sf=document.getElementById("st-f"); if(sf) sf.textContent=f;
}

// ---- RENDER TABELLE ----
function renderOggi(){
  var oggi=_oggi();
  var T=lsG("ct_t",[]).filter(function(t){return t.data===oggi;});
  var tb=document.getElementById("tb-oggi");
  if(!T.length){tb.innerHTML="<tr><td colspan=\"4\" class=\"empty\">Nessun turno oggi</td></tr>";return;}
  var P=lsG("ct_p",[]);
  tb.innerHTML=T.map(function(t){
    var p=P.find(function(x){return x.id===t.pid;});
    var gn=(p&&GR[p.grado])?GR[p.grado].nome:(p?p.grado:"");
    return "<tr><td><strong>"+t.pnome+"</strong></td><td style=\"font-size:11px\">"+gn+"</td>"+
      "<td>"+tbdg(t.tipo,t.codice)+"</td><td style=\"font-size:11px\">"+t.orario+"</td></tr>";
  }).join("");
}
function renderTurni(){
  var tb=document.getElementById("tb-turni");
  var arr=lsG("ct_t",[]).slice().sort(function(a,b){return b.data.localeCompare(a.data);});
  if(!arr.length){tb.innerHTML="<tr><td colspan=\"7\" class=\"empty\">Nessun turno inserito</td></tr>";return;}
  var P=lsG("ct_p",[]);
  tb.innerHTML=arr.map(function(t){
    var p=P.find(function(x){return x.id===t.pid;});
    var grado=p&&p.grado?'<span style="font-size:10px;color:var(--txt2)">'+p.grado+'</span>':'';
    return "<tr class=\"t-"+t.tipo+"\"><td><strong>"+t.pnome+"</strong><br>"+grado+"</td><td>"+fmtD(t.data)+"</td>"+
      "<td>"+tbdg(t.tipo,t.codice)+"</td><td style=\"font-size:11px\">"+t.orario+"</td>"+
      "<td style=\"font-size:11px;color:var(--txt2)\">"+(t.codice||"")+"</td>"+
      "<td><button class=\"btn btn-d btn-xs\" onclick=\"delT("+t.id+")\">"+"&#128465;</button></td></tr>";
  }).join("");
}
// Bollino verificato/placeholder accanto al nome
// Un profilo è "verificato" se: ha uid proprio, oppure è l'utente loggato (ct_my_pid), oppure esiste in ct_u con stesso nome
function _badgeP(p){
  if(!p) return '';
  // Ha uid diretto → verificato
  if(p.uid) return '<span class="badge-verificato" title="Registrato su C-Turni">&#10003;</span>';
  // È l'utente loggato (match per pid salvato)
  var myPid = localStorage.getItem('ct_my_pid');
  if(myPid && String(p.id) === String(myPid)){
    return '<span class="badge-verificato" title="Registrato su C-Turni">&#10003;</span>';
  }
  // Cerca in ct_u per nome — match robusto case-insensitive
  var U = lsG('ct_u', []);
  var pn = (p.nome||'').toLowerCase().trim();
  // Normalizza: rimuove spazi multipli
  pn = pn.replace(/\s+/g,' ');
  var found = U.some(function(u){
    var c = (u.cognome||'').toLowerCase().trim();
    var n = (u.nome||'').toLowerCase().trim();
    // Tutte le combinazioni possibili
    var varianti = [
      (c+' '+n).replace(/\s+/g,' ').trim(),
      (n+' '+c).replace(/\s+/g,' ').trim(),
      c, n
    ].filter(function(v){ return v.length > 1; });
    return varianti.some(function(v){ return v === pn; });
  });
  if(found) return '<span class="badge-verificato" title="Registrato su C-Turni">&#10003;</span>';
  // È un placeholder senza uid → non registrato
  if(p.placeholder) return '<span class="badge-placeholder" title="Non ancora registrato su C-Turni">&#9711;</span>';
  // Profilo importato senza corrispondenza → non registrato
  return '<span class="badge-placeholder" title="Non ancora registrato su C-Turni">&#9711;</span>';
}

// Sincronizza ct_my_pid: se l'utente è loggato ma ct_my_pid non è impostato,
// cerca in ct_p un profilo con nome corrispondente a ct_me
function _syncMyPid(){
  try {
    var myPid = localStorage.getItem('ct_my_pid');
    var me = lsG('ct_me', null);
    if(!me) return;
    var uid = me.uid || me.id;
    // Se ct_my_pid è già impostato, verifica che esista ancora in ct_p
    var P = lsG('ct_p', []);
    if(myPid){
      var exists = P.some(function(p){ return String(p.id) === String(myPid); });
      if(exists) return; // già ok
    }
    // Cerca per uid diretto
    var byUid = P.find(function(p){ return p.uid && (p.uid === uid || p.uid === me.uid); });
    if(byUid){ localStorage.setItem('ct_my_pid', String(byUid.id)); return; }
    // Cerca per nome+cognome (match robusto)
    var n = (me.nome||'').toLowerCase().trim();
    var c = (me.cognome||'').toLowerCase().trim();
    var varianti = [
      (c+' '+n).replace(/\s+/g,' ').trim(),
      (n+' '+c).replace(/\s+/g,' ').trim(),
      c, n
    ].filter(function(v){ return v.length > 1; });
    var byNome = P.find(function(p){
      var pn = (p.nome||'').toLowerCase().trim().replace(/\s+/g,' ');
      return varianti.some(function(v){ return v === pn || pn === v; });
    });
    if(byNome){ localStorage.setItem('ct_my_pid', String(byNome.id)); }
  } catch(e){ console.warn('_syncMyPid:', e); }
}

function renderPers(){
  _syncMyPid();
  var tb=document.getElementById("tb-pers");
  var P=lsG("ct_p",[]);
  // Filtra voci legenda o placeholder (non utenti reali)
  P = P.filter(function(p){
    if(!p.nome) return false;
    var n = (p.nome||"").toLowerCase();
    if(n.indexOf("legenda")===0 || n.indexOf("persona")===0) return false;
    if(p.tipo==="legenda") return false;
    return true;
  });
  // Aggiungi utenti Firebase approvati che non sono già in ct_p
  var me = lsG('ct_me', null);
  var myRep = (me && me.reparto) ? me.reparto.toLowerCase() : '';
  var fbUsers = lsG('ct_users', []);
  fbUsers.forEach(function(u){
    if(!u.uid || !u.nome) return;
    if(u.stato === 'pending' || u.stato === 'rejected') return;
    var uRep = (u.reparto||'').toLowerCase();
    if(myRep && uRep !== myRep) return;
    // Controlla se già presente in ct_p tramite uid
    var exists = P.some(function(p){ return p.uid === u.uid; });
    if(!exists){
      P.push({
        id: u.id || u.uid,
        nome: ((u.cognome||'') + ' ' + (u.nome||'')).trim() || u.nome,
        grado: u.grado || '',
        reparto: u.reparto || '',
        uid: u.uid,
        ava: u.ava || '',
        ferieRes: u.ferieRes || u.ferie || 30,
        _fromFirebase: true
      });
    } else {
      // Aggiorna foto e dati da Firebase anche se già presente in ct_p
      for(var _pi=0;_pi<P.length;_pi++){
        if(P[_pi].uid===u.uid){
          if(u.ava) P[_pi].ava=u.ava;
          if(u.grado) P[_pi].grado=u.grado;
          break;
        }
      }
    }
  });
  if(!P.length){tb.innerHTML="<tr><td colspan=\"7\" class=\"empty\">Nessuna persona inserita</td></tr>";return;}
  var T=lsG("ct_t",[]);
  tb.innerHTML=P.map(function(p){
    var g=GR[p.grado]||{nome:p.grado,svg:""};
    var tc=T.filter(function(t){return t.pid===p.id;}).length;
    var si=g.svg?"<img src=\""+g.svg+"\" style=\"width:50px;height:30px;object-fit:contain\">":"";
    var fr=(p.ferieRes!==undefined?p.ferieRes:30);
    var frC=fr>10?"var(--teal)":fr>0?"var(--gold)":"var(--red)";
    var _isVerif = p.uid || String(p.id) === String(localStorage.getItem('ct_my_pid'));
    var statoLabel = _isVerif
      ? '<span class="sb ok">Attivo</span>'
      : '<span class="sb" style="background:rgba(255,159,67,.15);color:var(--orange)">&#9711; Non registrato</span>';
    var delBtn = p._fromFirebase ? '' : "<button class=\"btn btn-d btn-xs\" onclick=\"delP("+p.id+")\">&#128465;</button>";
    return "<tr><td><strong>"+p.nome+"</strong>"+_badgeP(p)+"</td><td style=\"font-size:11px\">"+g.nome+"</td>"+
      "<td>"+si+"</td><td style=\"font-size:11px\">"+(p.reparto||"")+"</td>"+
      "<td>"+statoLabel+"</td><td>"+tc+"</td>"+
      "<td style=\"font-weight:800;color:"+frC+"\">"+fr+"</td>"+
      "<td>"+delBtn+"</td></tr>";
  }).join("");
}

// ---- CRUD ----
function salvaPersona(){
  var n=document.getElementById("mp-nome").value.trim();
  var g=document.getElementById("mp-grado").value;
  var r=(document.getElementById("mp-rep")||{value:''}).value.trim();
  if(!n){toast("Inserisci il nome","err");return;}
  if(!g){toast("Seleziona il grado","err");return;}
  var P=lsG("ct_p",[]);
  P.push({id:Date.now(),nome:n,grado:g,reparto:r||'',ferieRes:30});
  lsS("ct_p",P);
  if(window.FirebaseModule)window.FirebaseModule.savePersona();
  renderPers();aggSel();stats();closeM("m-persona");
  document.getElementById("mp-nome").value="";
  document.getElementById("mp-grado").value="";
  var lblGrado=document.getElementById("lbl-mp-grado");
  if(lblGrado)lblGrado.textContent="Seleziona grado...";
  if(document.getElementById("mp-rep"))document.getElementById("mp-rep").value="";
  toast("Persona aggiunta","ok");
}
function salvaTurno(){
  // Controllo ruolo: solo comandante, vice o l'utente stesso può salvare turni
  var _me = lsG('ct_me', null);
  var _isCom = _me && (_me.ruolo === 'comandante' || _me.ruolo === 'vice' || _me.id === 1);
  // Leggi persona: prima da mt-pers (hidden), poi da mt-pers-sel (select legacy)
  var _pSel=document.getElementById("mt-pers-sel");
  if(_pSel&&_pSel.value)document.getElementById("mt-pers").value=_pSel.value;
  var pid=parseInt(document.getElementById("mt-pers").value);
  if(!_isCom && pid) {
    var _myPidCheck = parseInt(localStorage.getItem('ct_my_pid')||'0');
    var _isMe = (_myPidCheck && pid === _myPidCheck)
             || (_me && pid === _me.id)
             || (_me && _me.uid && String(pid) === String(_me.uid));
    if(!_isMe) {
      toast("Puoi modificare solo i tuoi turni personali","err");
      return;
    }
  }
  var dt=document.getElementById("mt-data").value;
  var tp=document.getElementById("mt-tipo").value;
  if(!pid){toast("Seleziona una persona","err");return;}
  if(!dt){toast("Seleziona la data","err");return;}
  if(!tp){toast("Seleziona il tipo di turno","err");return;}
  var _customCodice = null;
  if(tp && tp.indexOf('custom_') === 0) {
    _customCodice = tp.replace('custom_','');
    var _tcList = lsG('ct_turni_custom',[]);
    var _tcItem = _tcList.find(function(x){ return x.codice === _customCodice; });
    tp = _tcItem ? 'custom' : tp;
  }
  var P=lsG("ct_p",[]);var p=P.find(function(x){return x.id===pid;});
  var OR={mattina:"06:00-14:00",pomeriggio:"14:00-22:00",notte:"22:00-06:00",
    riposo:"Riposo",ferie:"Ferie",licenza:"Licenza",recupero:"Recupero",permesso:"Permesso",corso:"Corso"};
  var _oraIn=document.getElementById("mt-ora-in"),_oraFi=document.getElementById("mt-ora-fi");
  var _orario=(_oraIn&&_oraIn.value&&_oraFi&&_oraFi.value)?(_oraIn.value+"-"+_oraFi.value):(OR[tp]||tp);
  var T=lsG("ct_t",[]);
  var _codEl=document.getElementById("mt-turno-codice");
  var _cod=_codEl&&_codEl.value?_codEl.value:null;
  var _catEv = ['riposo','ferie','recupero','licenza','permesso','937','104','ls','fest'].indexOf(tp) !== -1 ? 'personale' : 'servizio';
  var _nt = {id:Date.now(),pid:pid,pnome:p.nome,data:dt,tipo:tp,
    orario:_orario,note:document.getElementById("mt-note").value,codice:_customCodice||_cod,categoria_evento:_catEv};
  // push gestito dopo
  if(tp==="ferie"){
    // Scala pool licenze della persona (cerca per id numerico O uid Firebase)
    var _me=lsG("ct_me",null);
    var _myPid=localStorage.getItem('ct_my_pid');
    // Determina il pid reale della persona da scalare
    var _pidScala=pid;
    // Se il turno è assegnato all'utente loggato (per uid o per pid), usa ct_my_pid
    if(_me&&(_myPid&&String(pid)===String(_myPid)||(_me.uid&&String(pid)===String(_me.uid))||String(pid)===String(_me.id))){
      _pidScala=parseInt(_myPid)||_me.id;
    }
    var _Pf=lsG("ct_p",[]);
    for(var _fi=0;_fi<_Pf.length;_fi++){
      if(_Pf[_fi].id===_pidScala||String(_Pf[_fi].id)===String(_pidScala)||(_Pf[_fi].uid&&_Pf[_fi].uid===String(pid))){
        var _pool=(_Pf[_fi].licenzePool||[]).slice().sort(function(a,b){return a.anno-b.anno;});
        // Fallback: usa pool da ct_u se ct_p non ha il pool
        if(!_pool.length&&_me&&(String(_Pf[_fi].id)===String(_me.id)||_Pf[_fi].uid===_me.uid)){
          _pool=getFeriePool(_me.id);
        }
        var _da=1;
        for(var _pi=0;_pi<_pool.length&&_da>0;_pi++){
          var _sc=Math.min(_pool[_pi].giorni,_da);
          _pool[_pi].giorni-=_sc;_da-=_sc;
        }
        _Pf[_fi].licenzePool=_pool;
        _Pf[_fi].ferieRes=_pool.reduce(function(s,x){return s+x.giorni;},0);
        _Pf[_fi].ferie=_Pf[_fi].ferieRes;
        if(_me&&(String(_me.id)===String(_Pf[_fi].id)||_me.uid===_Pf[_fi].uid)){
          _me.ferie=_Pf[_fi].ferieRes;_me.ferieRes=_Pf[_fi].ferieRes;lsS("ct_me",_me);
          saveFeriePool(_me.id,_pool);
        }
        break;
      }
    }
    lsS("ct_p",_Pf);
    renderFeriePool();
  }
  // 937 → scala festività soppresse dell'utente loggato
  if(tp==="937"){
    var _me937=lsG("ct_me",null);
    var _myPid937=localStorage.getItem('ct_my_pid');
    // Scala solo se il turno è dell'utente loggato
    var _isMe937=_me937&&(String(pid)===String(_me937.id)||(_me937.uid&&String(pid)===String(_me937.uid))||String(pid)===String(_myPid937));
    if(_me937&&_isMe937){
      var _anno937=new Date(dt+'T00:00:00').getFullYear()||new Date().getFullYear();
      var _FS=lsG("ct_fest_sopp",[]);
      var _usate937=_FS.filter(function(f){return f.uid===_me937.id&&f.anno===_anno937&&f.usato;}).length;
      if(_usate937<4){
        _FS.push({id:Date.now(),uid:_me937.id,anno:_anno937,data:dt,nota:'Licenza 937',usato:true});
        lsS("ct_fest_sopp",_FS);
        renderFestSopp();
        toast("\uD83C\uDF89 Festivit\u00E0 soppressa scalata per "+_anno937,"ok");
      } else {
        toast("Hai gi\u00E0 usato tutte e 4 le festivit\u00E0 soppresse per il "+_anno937,"warn");
      }
    }
  }
  var _eid=document.getElementById("mt-edit-id");
  if(_eid&&_eid.value){
    var _eidV=parseInt(_eid.value);
    T=T.filter(function(x){return x.id!==_eidV;});
    _eid.value="";
  }
  T.push(_nt);
  lsS("ct_t",T);
  if(window.FirebaseModule)window.FirebaseModule.saveTurni(T);
  renderTurni();renderOggi();stats();aggiornaWidget();
  closeM("m-turno");
  closeM("m-giorno");
  // Riapri la vista del giorno SOLO se il turno è stato aggiunto dal calendario
  if(_nt.data && window._turnoFromCalendar) {
    window._turnoFromCalendar = false;
    if(typeof apriSheetGiorno === 'function') {
      var sgData = document.getElementById('sg-data');
      if(sgData) sgData.value = _nt.data;
      mostraGiorno(_nt.data);
    }
  }
  window._turnoFromCalendar = false;
  checkFestivoTurno(_nt);
  notificaTurno(_nt.pnome,_nt.tipo,_nt.data);
  document.getElementById("mt-tipo").value="";document.getElementById("mt-note").value="";
  var _ri=document.getElementById("mt-ora-in"),_rf=document.getElementById("mt-ora-fi");
  if(_ri)_ri.value="";if(_rf)_rf.value="";
  var _rc=document.getElementById("mt-turno-codice");if(_rc)_rc.value="";
  document.querySelectorAll(".btn-turno-r").forEach(function(b){b.classList.remove("sel");});
  // Reset label bottoni
  var lblOraIn=document.getElementById("mt-ora-in-btn-lbl"); if(lblOraIn){lblOraIn.textContent="Inizio";lblOraIn.style.color="var(--txt2)";}
  var lblOraFi=document.getElementById("mt-ora-fi-btn-lbl"); if(lblOraFi){lblOraFi.textContent="Fine";lblOraFi.style.color="var(--txt2)";}
  var lblPers=document.getElementById("mt-pers-btn-lbl"); if(lblPers){lblPers.textContent="Scegli collega...";lblPers.style.color="var(--txt2)";}
  var lblData=document.getElementById("mt-data-btn-lbl"); if(lblData){lblData.textContent="Seleziona data...";lblData.style.color="var(--txt2)";}
  var persH=document.getElementById("mt-pers"); if(persH)persH.value="";
  toast("Turno salvato","ok");
}
function delP(id){
  ctConfirm('Eliminare questa persona e tutti i suoi turni?', {title:'Elimina Persona', ico:'👤', ok:'Elimina', danger:true}).then(function(ok){
    if(!ok) return;
    lsS("ct_p",lsG("ct_p",[]).filter(function(p){return p.id!==id;}));
    lsS("ct_t",lsG("ct_t",[]).filter(function(t){return t.pid!==id;}));
    renderPers();renderTurni();renderOggi();stats();aggSel();toast("Eliminato","ok");
  });
}
function delT(id){
  // Controllo ruolo: solo comandante/vice o il proprietario del turno
  var _me = lsG('ct_me', null);
  var _myPid = parseInt(localStorage.getItem('ct_my_pid')||'0');
  var _isCom = _me && (_me.ruolo === 'comandante' || _me.ruolo === 'vice' || _me.id === 1);
  if(!_isCom) {
    var _turno = lsG('ct_t',[]).find(function(t){ return t.id===id; });
    if(_turno && _turno.pid !== _myPid) {
      toast("Puoi eliminare solo i tuoi turni","err");
      return;
    }
  }
  ctConfirm('Eliminare questo turno?', {title:'Elimina Turno', ico:'📅', ok:'Elimina', danger:true}).then(function(ok){
    if(!ok) return;
    lsS("ct_t",lsG("ct_t",[]).filter(function(t){return t.id!==id;}));
    if(window.FirebaseModule) window.FirebaseModule.deleteTurno(id);
    renderTurni();renderOggi();stats();toast("Eliminato","ok");
  });
}
function aggSel(){
  var P=lsG("ct_p",[]);
  var me = lsG('ct_me', null);
  var myRep = (me && me.reparto) ? me.reparto.toLowerCase() : '';
  // Aggiungi utenti Firebase non presenti in ct_p
  var fbUsers = lsG('ct_users', []);
  fbUsers.forEach(function(u){
    if(!u.uid || !u.nome) return;
    if(u.stato === 'pending' || u.stato === 'rejected') return;
    if(myRep && u.reparto && u.reparto.toLowerCase() !== myRep) return;
    var exists = P.some(function(p){ return p.uid === u.uid; });
    if(!exists){
      P.push({ id: u.id || u.uid, nome: ((u.cognome||'') + ' ' + (u.nome||'')).trim() || u.nome, grado: u.grado || '', reparto: u.reparto || '', uid: u.uid, ava: u.ava || '', _fromFirebase: true });
    }
  });
  // Collega placeholder Excel e Firebase, poi assicura presenza utente
  if(me && me.nome) {
    if(me.uid) _collegaPlaceholder(me.nome, me.cognome||'', me.uid, me.reparto||'');
    _syncMyPid();
    var myPid2 = parseInt(localStorage.getItem('ct_my_pid')||'0');
    P = lsG('ct_p', []);
    // Re-aggiungi utenti Firebase dopo il collegamento
    fbUsers.forEach(function(u){
      if(!u.uid || !u.nome) return;
      if(u.stato === 'pending' || u.stato === 'rejected') return;
      if(myRep && u.reparto && u.reparto.toLowerCase() !== myRep) return;
      var exists = P.some(function(p){ return p.uid === u.uid; });
      if(!exists){
        P.push({ id: u.id || u.uid, nome: ((u.cognome||'') + ' ' + (u.nome||'')).trim() || u.nome, grado: u.grado || '', reparto: u.reparto || '', uid: u.uid, ava: u.ava || '', _fromFirebase: true });
      }
    });
    var meInLista = P.some(function(p){
      return (myPid2 && p.id === myPid2) || p.id === me.id || (me.uid && p.uid === me.uid);
    });
    if(!meInLista) {
      var nuovoMe = { id: myPid2 || me.id || Date.now(), nome: ((me.cognome||'') + ' ' + (me.nome||'')).trim() || me.nome, grado: me.grado || '', reparto: me.reparto || '', uid: me.uid || '', ava: me.ava || '', ferieRes: 30, _isMe: true };
      var Ppers = lsG('ct_p', []);
      Ppers.push(nuovoMe);
      lsS('ct_p', Ppers);
      localStorage.setItem('ct_my_pid', String(nuovoMe.id));
      if(window.FirebaseModule) window.FirebaseModule.savePersona().catch(function(){});
      P.unshift(nuovoMe);
    } else {
      P = P.map(function(p){
        if((myPid2 && p.id === myPid2) || p.id === me.id || (me.uid && p.uid === me.uid)) return Object.assign({}, p, {_isMe: true});
        return p;
      });
    }
  }
  var listEl=document.getElementById("pers-picker-list");
  if(!listEl)return;
  // Deduplicazione finale prima di renderizzare
  var vistiAgg = {};
  P = P.filter(function(p){
    var key = p.uid || (p.nome||'').toLowerCase().trim();
    if(vistiAgg[key]) return false;
    vistiAgg[key] = true;
    return true;
  });
  listEl.innerHTML=P.map(function(p){
    var gn=GR[p.grado]?GR[p.grado].nome:p.grado;
    var svg=GR[p.grado]?GR[p.grado].svg:"";
    var isMeLabel = p._isMe ? ' <span style="font-size:10px;background:rgba(91,159,255,.2);color:var(--blue);border-radius:8px;padding:1px 6px">Tu</span>' : '';
    return '<div class="pers-card" onclick="selezionaPersona(\''+p.id+'\',\''+p.nome.replace(/'/g,"\\'")+'\')" style="padding:14px 16px;border-bottom:1px solid var(--border);display:flex;gap:12px;align-items:center;cursor:pointer;transition:background .2s" onmouseover="this.style.background=\'var(--card2)\'" onmouseout="this.style.background=\'transparent\'">'+
      (svg?'<img src="'+svg+'" style="height:32px;width:50px;object-fit:contain;flex-shrink:0">':'<div style="width:50px;height:32px;display:flex;align-items:center;justify-content:center;font-size:22px">&#128100;</div>')+
      '<div style="flex:1;min-width:0"><div style="font-weight:700;color:var(--txt);font-size:14px">'+p.nome+isMeLabel+_badgeP(p)+'</div><div style="font-size:12px;color:var(--txt2)">'+gn+'</div></div>'+
    '</div>';
  }).join("");
}

// ---- CALENDARIO ----
var cMO=new Date().getMonth(),cYR=new Date().getFullYear();
function renderCal(){
  var mN=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno",
          "Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
  var gN=["Lun","Mar","Mer","Gio","Ven","Sab","Dom"];
  var og=new Date();
  var nG=new Date(cYR,cMO+1,0).getDate();
  var off=(new Date(cYR,cMO,1).getDay()+6)%7;
  var T=lsG("ct_t",[]);
  var cols={mattina:"#ffb300",pomeriggio:"#ff6d00",notte:"#7c4dff",riposo:"#c8102e",
    ferie:"#00c853",licenza:"#00c853",recupero:"#00c853",permesso:"#00c853",corso:"#00c853",
    ml:"#ffb300",pl:"#ff6d00"};
  var h="";
  h+="<div style=\"background:var(--card);border:1px solid var(--border);border-radius:14px;overflow:hidden;margin-bottom:12px\">";
  h+="<div style=\"padding:12px 14px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between\">";
  h+="<button class=\"btn btn-g btn-sm\" onclick=\"prevMese()\">&#8249;</button>";
  h+="<strong style=\"font-size:14px\">"+mN[cMO]+" "+cYR+"</strong>";
  h+="<button class=\"btn btn-g btn-sm\" onclick=\"nextMese()\">&#8250;</button>";
  h+="</div>";
  h+="<div class=\"cal-grid\" style=\"background:var(--bg2);padding:6px 6px 0\">";
  gN.forEach(function(g){h+="<div style=\"text-align:center;font-size:9px;font-weight:700;color:var(--txt2);padding:2px\">"+g+"</div>";});
  h+="</div>";
  h+="<div class=\"cal-grid\" style=\"padding:6px;gap:3px\">";
  for(var i=0;i<off;i++)h+="<div class=\"cal-cell empty\"></div>";
  for(var g=1;g<=nG;g++){
    var ds=cYR+"-"+pad(cMO+1)+"-"+pad(g);
    var tg=T.filter(function(t){return t.data===ds;});
    var isO=(g===og.getDate()&&cMO===og.getMonth()&&cYR===og.getFullYear());
    h+="<div class=\"cal-cell"+(isO?" today":"")+"\" onclick=\"mostraGiorno('"+ds+"')\">";
    h+="<div style=\"display:flex;align-items:center;justify-content:space-between\">";
    h+="<div class=\"cal-day-n\" style=\""+(isO?"color:var(--blue);font-weight:800":"")+"\">"+g+"</div>";
    h+="<button type=\"button\" onclick=\"event.stopPropagation();apriNuovoTurno('"+ds+"')\" style=\"background:none;border:none;color:var(--txt3);font-size:14px;line-height:1;padding:0 1px;cursor:pointer;appearance:none;-webkit-appearance:none\">+</button>";
    h+="</div>";
    tg.slice(0,2).forEach(function(t){
      var c=cols[t.tipo]||"#aaa";
      h+="<div class=\"cal-badge\" style=\"background:"+c+"22;color:"+c+"\">"+
        (t.codice||t.pnome.split(" ")[0])+"</div>";
    });
    if(tg.length>2)h+="<div style=\"font-size:7px;color:var(--txt2)\">+"+(tg.length-2)+"</div>";
    h+="</div>";
  }
  h+="</div></div>";
  document.getElementById("cal-wrap").innerHTML=h;
}
function prevMese(){cMO--;if(cMO<0){cMO=11;cYR--;}renderCal();}
function nextMese(){cMO++;if(cMO>11){cMO=0;cYR++;}renderCal();}

// Tab Todo/Agenda nel calendario
var _calTab = 'todo';
function calTab(tab) {
  _calTab = tab;
  var isTodo = tab === 'todo';
  document.getElementById('cal-panel-todo').style.display = isTodo ? '' : 'none';
  document.getElementById('cal-panel-agenda').style.display = isTodo ? 'none' : '';
  var btnTodo = document.getElementById('cal-tab-todo');
  var btnAg = document.getElementById('cal-tab-agenda');
  if(btnTodo) { btnTodo.style.background = isTodo ? 'var(--blue)' : 'transparent'; btnTodo.style.color = isTodo ? '#fff' : 'var(--txt2)'; btnTodo.style.fontWeight = isTodo ? '700' : '600'; }
  if(btnAg) { btnAg.style.background = isTodo ? 'transparent' : 'var(--blue)'; btnAg.style.color = isTodo ? 'var(--txt2)' : '#fff'; btnAg.style.fontWeight = isTodo ? '600' : '700'; }
}
function mostraGiorno(ds){
  var mN=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno",
          "Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
  var d=_parseDate(ds);
  var tit=d.getDate()+" "+mN[d.getMonth()]+" "+d.getFullYear();
  var T=lsG("ct_t",[]).filter(function(t){return t.data===ds;});
  var P=lsG("ct_p",[]);
  var me=lsG("ct_me",null);
  var myPid=parseInt(localStorage.getItem("ct_my_pid")||"0");

  // Ordina per grado
  T.sort(function(a,b){
    var pa=P.find(function(x){return x.id===a.pid;});
    var pb=P.find(function(x){return x.id===b.pid;});
    return _gradoPrio(pa?pa.grado:'') - _gradoPrio(pb?pb.grado:'');
  });

  var _fbUsers = lsG('ct_users', []);

  // ── Card 1: prospetto turni del giorno (raggruppati per tipo) ──
  var myT = T.find(function(t){ return t.pid===myPid || (me&&t.uid&&t.uid===(me.uid||me.id)); });
  var mgTurnoEl = document.getElementById('mg-turno');
  if(mgTurnoEl){
    var colMap={
      mattina:'#ff6d00',ml:'#ff8c00',pomeriggio:'#e65100',pl:'#d84000',
      notte:'#7c4dff',sera:'#5c35cc',
      riposo:'#00c853',ferie:'#00bcd4',recupero:'#d4af37',permesso:'#e91e63',
      corso:'#2979ff',licenza:'#00bcd4','937':'#00bcd4','104':'#9c27b0',
      ls:'#607d8b',fest:'#ff9800',esame:'#795548',custom:'#546e7a'
    };
    var tipoLabel={
      mattina:'Mattina',ml:'Mattina Lunga',pomeriggio:'Pomeriggio',pl:'Pomeriggio Lungo',
      notte:'Notte',sera:'Sera',
      riposo:'Riposo',ferie:'Ferie',recupero:'Recupero',permesso:'Permesso',
      corso:'Corso',licenza:'Lic. Studio','937':'Lic. 937','104':'Art. 104',
      ls:'Donaz./Malattia',fest:'Festivo',esame:'Esame',custom:'Custom'
    };

    // Raggruppa per tipo — normalizza usando codice con mapping ESATTO (===)
    var _codiceToTipoExact = {
      'M':'mattina', 'ML':'ml', 'P':'pomeriggio', 'PL':'pl',
      'N':'notte', 'S':'sera', 'R':'riposo', 'RR':'recupero',
      'L':'ferie', 'LICSTU':'licenza', 'ESAME':'esame', 'CORSO':'corso',
      'FEST':'fest', '104':'104', 'LS':'ls', '937':'937'
    };
    var gruppi = {};
    T.forEach(function(t){
      // Usa il codice per determinare il tipo esatto (ML ≠ M, PL ≠ P)
      var tipo = t.tipo || 'altro';
      if(t.codice && _codiceToTipoExact[t.codice] !== undefined){
        tipo = _codiceToTipoExact[t.codice];
      }
      if(!gruppi[tipo]) gruppi[tipo] = [];
      gruppi[tipo].push(t);
    });

    var html = '<div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.7px;color:var(--txt2);margin-bottom:12px">&#128203; Prospetto turni</div>';

    if(!T.length){
      html += '<div style="font-size:13px;color:var(--txt2);text-align:center;padding:12px 0">Nessun turno inserito</div>';
      html += '<button onclick="chiudiSheetGiorno();apriNuovoTurno(\''+ds+'\')" style="width:100%;margin-top:10px;background:var(--blue);color:#fff;border:none;border-radius:14px;padding:12px;font-size:13px;font-weight:700;cursor:pointer;appearance:none;-webkit-appearance:none;">&#10133; Aggiungi turno</button>';
    } else {
      Object.keys(gruppi).forEach(function(tipo){
        var col = colMap[tipo] || 'var(--blue)';
        var lbl = tipoLabel[tipo] || tipo;
        var persone = gruppi[tipo];
        // Orario: usa quello salvato, oppure il preset per quel tipo esatto
        var orario = persone[0].orario && persone[0].orario.indexOf('-')>0 ? persone[0].orario : '';
        if(!orario && typeof getOrariPreset === 'function'){
          var _op = getOrariPreset();
          var _pk = tipo; // tipo è già normalizzato (ml, pl, mattina, ecc.)
          if(_op[_pk]) orario = _op[_pk].in + '-' + _op[_pk].out;
        }

        html += '<div style="background:'+col+'18;border:1.5px solid '+col+'44;border-radius:16px;padding:12px 14px;margin-bottom:10px">';
        // Header tipo
        html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">';
        html += '<div style="width:10px;height:10px;border-radius:50%;background:'+col+';flex-shrink:0"></div>';
        html += '<div style="font-size:13px;font-weight:800;color:var(--txt)">'+lbl+'</div>';
        if(orario) html += '<div style="font-size:11px;color:var(--txt2);margin-left:auto">&#128336; '+orario+'</div>';
        html += '</div>';

        // Persone nel gruppo
        html += '<div style="display:flex;flex-wrap:wrap;gap:8px">';
        persone.forEach(function(t){
          var isMe = t.pid===myPid || (me&&t.uid&&t.uid===(me.uid||me.id));
          var p = P.find(function(x){return x.id===t.pid;});
          var uFb = _fbUsers.find(function(u){return u.uid&&p&&u.uid===p.uid;});
          var ava = (uFb&&uFb.ava)?uFb.ava:(p&&p.ava?p.ava:'');
          var nome = t.pnome || (p?p.nome:'') || '?';
          var nomeCorto = nome.split(' ')[0] || nome;

          html += '<div style="display:flex;align-items:center;gap:6px;padding:6px 10px 6px 6px;border-radius:20px;'+
            (isMe
              ? 'background:'+col+';border:2px solid #fff;box-shadow:0 0 0 2px '+col+';'
              : 'background:var(--bg2);border:1.5px solid var(--border);')+
            '">';
          // Avatar
          if(ava){
            html += '<div style="width:24px;height:24px;border-radius:50%;background:url(\''+ava+'\') center/cover;flex-shrink:0;border:1px solid rgba(255,255,255,.3)"></div>';
          } else {
            html += '<div style="width:24px;height:24px;border-radius:50%;background:'+(isMe?'rgba(255,255,255,.25)':'var(--bg)')+';display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0">&#128100;</div>';
          }
          html += '<div style="font-size:12px;font-weight:'+(isMe?'800':'600')+';color:'+(isMe?'#fff':'var(--txt)')+'">'+nome+(isMe?' ★':'')+'</div>';
          html += '</div>';
        });
        html += '</div>';

        // Tasto modifica: il mio turno sempre, o qualsiasi turno se sono comandante/vice
        var _meCheck = lsG('ct_me', null);
        var _isCom = _meCheck && (_meCheck.ruolo === 'comandante' || _meCheck.ruolo === 'vice');
        if(_isCom) {
          // Comandante/vice: bottone modifica su ogni turno del gruppo
          gruppi[tipo].forEach(function(t){
            var p = P.find(function(x){return x.id===t.pid;});
            var nomeBtn = t.pnome || (p ? p.nome : '') || '?';
            html += '<button onclick="apriModificaTurnoGiorno('+t.id+')" style="margin-top:6px;margin-right:6px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);border-radius:10px;padding:6px 12px;font-size:11px;font-weight:700;color:'+(col==='var(--blue)'?'var(--blue)':'#fff')+';cursor:pointer;appearance:none;-webkit-appearance:none;">&#9998; '+nomeBtn+'</button>';
          });
        } else if(myT && gruppi[tipo].some(function(t){ return t.pid===myPid || (me&&t.uid&&t.uid===(me.uid||me.id)); })){
          html += '<button onclick="apriModificaTurnoGiorno('+myT.id+')" style="margin-top:10px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);border-radius:10px;padding:6px 12px;font-size:11px;font-weight:700;color:'+(col==='var(--blue)'?'var(--blue)':'#fff')+';cursor:pointer;appearance:none;-webkit-appearance:none;">&#9998; Modifica il mio turno</button>';
        }
        html += '</div>';
      });
    }
    mgTurnoEl.innerHTML = html;
  }

  // ── Card 3: To-Do del giorno ──
  var mgTodoEl = document.getElementById('mg-todo');
  if(mgTodoEl){
    var TD=lsG("ct_td",[]).filter(function(t){ return t.data===ds; });
    var tdHtml='<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">';
    tdHtml+='<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;color:var(--txt2)">&#9989; To-Do del giorno</div>';
    tdHtml+='<button onclick="chiudiSheetGiorno();openM(\'m-todo\')" style="background:none;border:none;font-size:11px;font-weight:700;color:var(--blue);cursor:pointer;padding:0;appearance:none;-webkit-appearance:none;">+ Nuovo</button>';
    tdHtml+='</div>';
    if(!TD.length){
      tdHtml+='<div style="font-size:12px;color:var(--txt2);text-align:center;padding:8px 0">Nessun promemoria per questo giorno</div>';
    } else {
      TD.forEach(function(t){
        var prioCol={alta:'var(--red)',media:'var(--gold)',bassa:'var(--green)'}[t.prio]||'var(--txt2)';
        tdHtml+='<div style="display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">';
        tdHtml+='<button onclick="toggleTodo('+t.id+');mostraGiorno(\''+ds+'\')" style="width:24px;height:24px;border-radius:50%;border:2px solid '+(t.done?'var(--green)':'var(--border2)')+';background:'+(t.done?'var(--green)':'none')+';color:#fff;font-size:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;appearance:none;-webkit-appearance:none;">'+(t.done?'&#10003;':'')+'</button>';
        tdHtml+='<div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:700;color:var(--txt);'+(t.done?'text-decoration:line-through;opacity:.5':'')+'">'+(t.tit||'')+'</div>';
        if(t.note) tdHtml+='<div style="font-size:11px;color:var(--txt2);margin-top:2px">'+(t.note)+'</div>';
        tdHtml+='<div style="font-size:10px;font-weight:700;color:'+prioCol+';margin-top:3px;text-transform:uppercase">'+t.prio+'</div>';
        tdHtml+='</div></div>';
      });
    }
    mgTodoEl.innerHTML=tdHtml;
  }

  // ── Aggiorna header e data nascosta ──
  var sgTit=document.getElementById('sg-tit');
  if(sgTit) sgTit.innerHTML='&#128197; '+tit;
  var sgData=document.getElementById('sg-data');
  if(sgData) sgData.value=ds;

  // ── Compatibilità: aggiorna anche i vecchi elementi se esistono ──
  var mgTitOld=document.getElementById('mg-tit');
  if(mgTitOld) mgTitOld.innerHTML='&#128197; '+tit;
  var mtData=document.getElementById('mt-data');
  if(mtData) mtData.value=ds;
  var lblMtData=document.getElementById('lbl-mt-data');
  if(lblMtData) lblMtData.textContent=ds.split('-').reverse().join('/');

  // ── Apri lo sheet (non il vecchio modal) ──
  if(typeof apriSheetGiorno==='function') {
    apriSheetGiorno();
  } else {
    openM("m-giorno");
  }
}

// ---- REPORT ----
function renderRep(){
  var T=lsG("ct_t",[]),P=lsG("ct_p",[]);
  var w=document.getElementById("rep-wrap");
  // Periodo selector
  var selHTML='<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">';
  selHTML+='<button class="btn btn-sm" id="rp-m" onclick="setRepPer(\'m\')" style="width:auto">Mensile</button>';
  selHTML+='<button class="btn btn-sm" id="rp-s" onclick="setRepPer(\'s\')" style="width:auto">Semestrale</button>';
  selHTML+='<button class="btn btn-sm" id="rp-a" onclick="setRepPer(\'a\')" style="width:auto">Annuale</button>';
  selHTML+='<select id="rp-sel-mese" class="fc" style="width:auto;padding:8px 10px;font-size:12px" onchange="renderRepData()">';
  var mN=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
  var now=new Date();
  for(var mi=0;mi<12;mi++)selHTML+='<option value="'+mi+'"'+(mi===now.getMonth()?' selected':'')+'>'+mN[mi]+'</option>';
  selHTML+='</select></div>';
  w.innerHTML=selHTML+'<div id="rep-data"></div>';
  if(!window._repPer)window._repPer='m';
  document.getElementById("rp-"+window._repPer).classList.add("btn-p");
  renderRepData();
}
function setRepPer(p){
  window._repPer=p;
  ["m","s","a"].forEach(function(x){var b=document.getElementById("rp-"+x);if(b){b.className="btn btn-sm"+(x===p?" btn-p":"");}});
  renderRepData();
}
function renderRepData(){
  var T=lsG("ct_t",[]);
  var P=lsG("ct_p",[]).slice(); // copia

  // Aggiungi utenti Firebase non ancora in ct_p
  var fbUsers=lsG('ct_users',[]);
  fbUsers.forEach(function(u){
    if(!u.uid||!u.nome)return;
    if(u.stato==='pending'||u.stato==='rejected')return;
    var exists=P.some(function(p){return p.uid===u.uid;});
    if(!exists){
      P.push({
        id:u.uid,
        nome:((u.cognome||'')+' '+(u.nome||'')).trim()||u.nome,
        uid:u.uid,
        _fromFirebase:true
      });
    }
  });

  var d=document.getElementById("rep-data");if(!d)return;
  var per=window._repPer||"m";
  var now=new Date(),anno=now.getFullYear();
  var mesSel=parseInt((document.getElementById("rp-sel-mese")||{value:now.getMonth()}).value);

  var Tf=T.filter(function(t){
    var dt=new Date(t.data+"T00:00:00");
    if(per==="m")return dt.getFullYear()===anno&&dt.getMonth()===mesSel;
    if(per==="s"){var m=dt.getMonth();return dt.getFullYear()===anno&&(mesSel<6?(m<6):(m>=6));}
    return dt.getFullYear()===anno;
  });
  if(!Tf.length){d.innerHTML='<div style="padding:30px;text-align:center;color:var(--txt2);font-size:13px">Nessun dato nel periodo selezionato</div>';return;}

  var conti={mattina:0,pomeriggio:0,notte:0,riposo:0,recupero:0,ferie:0,licenza:0,permesso:0,corso:0};
  var conti1515=0;
  Tf.forEach(function(t){
    if(conti[t.tipo]!==undefined)conti[t.tipo]++;
    if(t.codice==="1515")conti1515++;
  });
  var lbl={mattina:"Mattine (M/ML)",pomeriggio:"Pomeriggi (P/PL)",notte:"Notti",riposo:"Riposi (R)",
    recupero:"Recuperi (RR)",ferie:"Licenze (L)",licenza:"Lic.Studio",permesso:"Permessi",corso:"Corsi"};
  var cl={mattina:"#ffb300",pomeriggio:"#ff6d00",notte:"#7c4dff",riposo:"#00c853",
    recupero:"#d4af37",ferie:"#00bcd4",licenza:"#00bcd4",permesso:"#e91e8c",corso:"#2979ff"};
  // Cards contatori
  var h='<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:14px">';
  Object.keys(conti).forEach(function(k){
    if(!conti[k]&&k!=="mattina"&&k!=="pomeriggio"&&k!=="ferie")return;
    var extra=(k==="mattina"&&conti1515)?' <span style="font-size:10px;color:var(--txt2)">(di cui 1515: '+conti1515+')</span>':"";
    h+='<div style="background:var(--card);border:1px solid var(--border);border-radius:12px;padding:12px">';
    h+='<div style="font-size:10px;font-weight:700;color:'+cl[k]+';text-transform:uppercase;margin-bottom:4px">'+lbl[k]+'</div>';
    h+='<div style="font-size:22px;font-weight:900">'+conti[k]+extra+'</div></div>';
  });
  h+='</div>';
  // Barre per persona — mostra tutti con almeno 1 turno nel periodo
  if(P.length){
    h+='<div style="background:var(--card);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-bottom:14px">';
    h+='<div style="padding:11px 14px;border-bottom:1px solid var(--border);font-weight:700;font-size:13px">&#128101; Carico per persona</div>';
    var totT=Tf.length||1;

    // Indice turni per pid (stringa) e per pnome normalizzato
    var tByPid={}, tByNome={};
    Tf.forEach(function(t){
      var k=String(t.pid);
      if(!tByPid[k])tByPid[k]=[];
      tByPid[k].push(t);
      if(t.pnome){
        var n=t.pnome.toLowerCase().replace(/\s+/g,' ').trim();
        if(!tByNome[n])tByNome[n]=[];
        tByNome[n].push(t);
      }
    });

    P.forEach(function(p){
      // Raccoglie turni senza duplicati
      var visti={}, turniP=[];
      function addT(arr){(arr||[]).forEach(function(t){if(!visti[t.id]){visti[t.id]=true;turniP.push(t);}});}

      // 1. Per id numerico
      addT(tByPid[String(p.id)]);
      // 2. Per uid Firebase
      if(p.uid) addT(tByPid[String(p.uid)]);
      // 3. Per nome esatto
      var pn=p.nome.toLowerCase().replace(/\s+/g,' ').trim();
      addT(tByNome[pn]);
      // 4. Per nome invertito (Nome Cognome ↔ Cognome Nome)
      var parti=pn.split(' ');
      if(parti.length>=2){
        var inv=parti.slice(1).join(' ')+' '+parti[0];
        addT(tByNome[inv]);
      }

      if(!turniP.length)return;
      var pc=turniP.length;
      var pct=Math.round(pc/totT*100);
      var tipiP={};
      turniP.forEach(function(t){tipiP[t.tipo]=(tipiP[t.tipo]||0)+1;});
      h+='<div style="padding:10px 14px;border-bottom:1px solid var(--border)">';
      h+='<div style="display:flex;justify-content:space-between;margin-bottom:5px"><span style="font-size:12px;font-weight:700">'+p.nome+'</span><span style="font-size:12px;font-weight:700;color:var(--blue)">'+pc+' turni</span></div>';
      h+='<div style="height:8px;background:var(--border);border-radius:4px;margin-bottom:4px">';
      h+='<div style="height:100%;width:'+pct+'%;background:var(--blue);border-radius:4px"></div></div>';
      var bk='';Object.keys(tipiP).forEach(function(k){
        var c2=cl[k]||'#888';var l2=lbl[k]||k;
        bk+='<span style="font-size:9px;background:'+c2+'22;color:'+c2+';border:1px solid '+c2+'44;border-radius:10px;padding:1px 5px;margin-right:3px">'+l2+': '+tipiP[k]+'</span>';
      });
      h+='<div style="margin-top:3px">'+bk+'</div></div>';
    });
    h+='</div>';
  }
  // Grafico a barre SVG semplice
  var svgH=120,svgW=320,pad=30,barW2=Math.floor((svgW-pad*2)/9)-4;
  var keys=Object.keys(conti).filter(function(k){return conti[k]>0;});
  var maxV=Math.max.apply(null,keys.map(function(k){return conti[k];}));
  if(keys.length&&maxV>0){
    h+='<div style="background:var(--card);border:1px solid var(--border);border-radius:12px;padding:14px;overflow-x:auto">';
    h+='<div style="font-size:12px;font-weight:700;margin-bottom:10px">&#128202; Distribuzione turni</div>';
    h+='<svg viewBox="0 0 '+(pad*2+keys.length*(barW2+6))+' '+(svgH+30)+'" style="width:100%;max-width:500px">';
    keys.forEach(function(k,i){
      var bh=Math.round((conti[k]/maxV)*(svgH-10));
      var x=pad+i*(barW2+6);var y=svgH-bh;
      h+='<rect x="'+x+'" y="'+y+'" width="'+barW2+'" height="'+bh+'" rx="3" fill="'+cl[k]+'" opacity=".85"/>';
      h+='<text x="'+(x+barW2/2)+'" y="'+(y-3)+'" text-anchor="middle" font-size="9" fill="'+cl[k]+'">'+conti[k]+'</text>';
      var abbr=k.substring(0,3);
      h+='<text x="'+(x+barW2/2)+'" y="'+(svgH+14)+'" text-anchor="middle" font-size="8" fill="var(--txt2)">'+abbr+'</text>';
    });
    h+='</svg></div>';
  }
  d.innerHTML=h;
}

// ---- STRAORDINARI (RIMOSSI — Task 3) ----
// Stub per retrocompatibilità con eventuali chiamate residue
function straordCambiaMese(delta) {}
function renderStraord() {}

// ---- CONDIVISIONE TURNI SETTIMANALI (WhatsApp) ----
// apriSheetWA: condivide i turni del giorno corrente (chiamato dallo sheet-giorno) o settimanali
function apriSheetWA(){
  // Se c'è una data selezionata nello sheet-giorno, condividi quel giorno
  var sgData = document.getElementById('sg-data');
  var ds = sgData && sgData.value ? sgData.value : null;
  if(ds){
    _condividiGiornoWA(ds);
  } else {
    condividiTurniWA();
  }
}
function _condividiGiornoWA(ds){
  var me = lsG('ct_me', null);
  var T = lsG('ct_t', []).filter(function(t){ return t.data === ds; });
  var P = lsG('ct_p', []);
  var mN = ["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
  var d = new Date(ds + 'T00:00:00');
  var gN = ["Dom","Lun","Mar","Mer","Gio","Ven","Sab"];
  var dataLabel = gN[d.getDay()] + ' ' + d.getDate() + ' ' + mN[d.getMonth()] + ' ' + d.getFullYear();
  var tipoLabel = {
    mattina:'🌅 Mattina', ml:'🌅 Mattina Lunga', pomeriggio:'☀️ Pomeriggio', pl:'☀️ Pomeriggio Lungo',
    notte:'🌙 Notte', riposo:'💤 Riposo', recupero:'🔄 Recupero', ferie:'🏖️ Ferie',
    permesso:'🕐 Permesso', corso:'🎓 Corso', licenza:'📚 Licenza'
  };
  var righe = [];
  righe.push('📅 *Turni ' + dataLabel + '*');
  righe.push('-----------------');
  if(!T.length){
    righe.push('Nessun turno inserito');
  } else {
    // Raggruppa per tipo
    var gruppi = {};
    T.forEach(function(t){
      var tipo = t.tipo || 'altro';
      if(!gruppi[tipo]) gruppi[tipo] = [];
      var p = P.find(function(x){ return x.id === t.pid; });
      var nome = t.pnome || (p ? p.nome : '') || '?';
      gruppi[tipo].push(nome + (t.orario ? ' (' + t.orario + ')' : ''));
    });
    Object.keys(gruppi).forEach(function(tipo){
      righe.push('*' + (tipoLabel[tipo] || tipo) + '*: ' + gruppi[tipo].join(', '));
    });
  }
  righe.push('-----------------');
  righe.push('_Inviato da C-Turni_');
  var testo = righe.join('\n');
  var url = 'https://wa.me/?text=' + encodeURIComponent(testo);
  if(navigator.share){
    navigator.share({ title: 'Turni ' + dataLabel, text: testo }).catch(function(){ window.open(url, '_blank'); });
  } else {
    window.open(url, '_blank');
  }
}
function condividiTurniWA() {
  var me = lsG("ct_me", null);
  if(!me) { toast("Accedi prima", "err"); return; }

  var oggi = new Date();
  // Trova luned della settimana corrente
  var lun = new Date(oggi);
  lun.setDate(oggi.getDate() - ((oggi.getDay() + 6) % 7));

  var T = lsG("ct_t", []);
  var mN = ["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
  var gN = ["Dom","Lun","Mar","Mer","Gio","Ven","Sab"];
  var tipoLabel = {
    mattina:"\uD83C\uDF05 Mattina (06-14)", ml:"\uD83C\uDF05 Mattina Lunga (06-16)",
    pomeriggio:"\u2600\uFE0F Pomeriggio (14-22)", pl:"\u2600\uFE0F Pomeriggio Lungo (14-24)",
    notte:"\uD83C\uDF19 Notte (22-06)", riposo:"\uD83D\uDCA4 Riposo",
    recupero:"\uD83D\uDD04 Recupero", ferie:"\uD83C\uDFD6\uFE0F Ferie",
    permesso:"\uD83D\uDD50 Permesso", corso:"\uD83C\uDF93 Corso", licenza:"\uD83D\uDCDA Licenza"
  };

  var righe = [];
  righe.push("\uD83D\uDCC5 *Turni " + me.nome + " " + me.cognome + "*");
  righe.push("Settimana " + ("0"+lun.getDate()).slice(-2) + "/" + ("0"+(lun.getMonth()+1)).slice(-2) +
             "  " + (function(){ var d=new Date(lun); d.setDate(d.getDate()+6); return ("0"+d.getDate()).slice(-2)+"/"+("0"+(d.getMonth()+1)).slice(-2); })());
  righe.push("-----------------");

  for(var i = 0; i < 7; i++) {
    var giorno = new Date(lun);
    giorno.setDate(lun.getDate() + i);
    var ds = giorno.toISOString().slice(0, 10);
    var turno = null;
    for(var j = 0; j < T.length; j++) {
      if(_isMyTurno(T[j], me) && T[j].data === ds) { turno = T[j]; break; }
    }
    var gLabel = gN[giorno.getDay()] + " " + ("0"+giorno.getDate()).slice(-2) + " " + mN[giorno.getMonth()];
    var tLabel = turno ? (tipoLabel[turno.tipo] || turno.tipo) : "\uD83D\uDCA4 Riposo";
    if(turno && turno.orario && turno.orario !== "Riposo") tLabel += " (" + turno.orario + ")";
    righe.push("*" + gLabel + "*: " + tLabel);
  }
  righe.push("-----------------");
  righe.push("_Inviato da C-Turni_");

  var testo = righe.join("\n");
  var url = "https://wa.me/?text=" + encodeURIComponent(testo);

  // Prova Web Share API prima (pi nativa su mobile)
  if(navigator.share) {
    navigator.share({ title: "I miei turni", text: testo })
      .catch(function(){ window.open(url, "_blank"); });
  } else {
    window.open(url, "_blank");
  }
}

// ---- IMPORT EXCEL ----
var _xlsWb=null;
function importXL(file){
  if(!file)return;
  if(!file.name.match(/\.xlsx?$/i)){toast("Seleziona un file .xlsx","err");return;}
  var r=new FileReader();
  r.onload=function(e){
    try{
      _xlsWb=XLSX.read(e.target.result,{type:"array"});
      var fogli=_xlsWb.SheetNames;
      // Mostra sempre il modal selezione (1 o più fogli)
      var lista=document.getElementById("fogli-lista");
      lista.innerHTML=fogli.map(function(sn,i){
        var rows=XLSX.utils.sheet_to_json(_xlsWb.Sheets[sn],{header:1,defval:""});
        var nRighe=Math.max(0,rows.length-1);
        return '<label style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--bg2);border-radius:10px;cursor:pointer;border:1px solid var(--border)">'+
          '<input type="checkbox" checked data-foglio="'+sn+'" style="width:17px;height:17px;accent-color:var(--blue);cursor:pointer;flex-shrink:0">'+
          '<div style="flex:1">'+
            '<div style="font-weight:700;font-size:13px">&#128196; '+sn+'</div>'+
            '<div style="font-size:10px;color:var(--txt2)">'+nRighe+' righe dati</div>'+
          '</div>'+
          '<span style="font-size:10px;padding:2px 8px;border-radius:20px;background:rgba(41,121,255,.15);color:var(--blue)">Foglio '+(i+1)+'</span>'+
        '</label>';
      }).join("");
      openM("m-fogli");
    }catch(ex){toast("Errore lettura file: "+ex.message,"err");}
  };
  r.readAsArrayBuffer(file);
}
function toggleTuttiF(){
  var boxes=document.querySelectorAll("#fogli-lista input[type=checkbox]");
  var tuttiOn=Array.from(boxes).every(function(b){return b.checked;});
  boxes.forEach(function(b){b.checked=!tuttiOn;});
}
function confermImportF(modoSost){
  if(!_xlsWb){closeM("m-fogli");return;}
  var boxes=document.querySelectorAll("#fogli-lista input[type=checkbox]");
  var selezionati=Array.from(boxes).filter(function(b){return b.checked;}).map(function(b){return b.getAttribute("data-foglio");});
  if(!selezionati.length){toast("Seleziona almeno un foglio","err");return;}

  // Chiudi modal immediatamente
  closeM("m-fogli");
  setTimeout(function(){ closeM("m-fogli"); }, 80);

  var dateDaRimuovere={};
  if(modoSost){
    selezionati.forEach(function(sn){
      var rows=XLSX.utils.sheet_to_json(_xlsWb.Sheets[sn],{header:1,defval:""});
      var anno=new Date().getFullYear(),mese=null;
      var mM={"gen":0,"gennaio":0,"jan":0,"january":0,
    "feb":1,"febbraio":1,"february":1,
    "mar":2,"marzo":2,"march":2,
    "apr":3,"aprile":3,"april":3,
    "mag":4,"maggio":4,"may":4,
    "giu":5,"giugno":5,"jun":5,"june":5,
    "lug":6,"luglio":6,"jul":6,"july":6,
    "ago":7,"agosto":7,"aug":7,"august":7,
    "set":8,"settembre":8,"sep":8,"september":8,
    "ott":9,"ottobre":9,"oct":9,"october":9,
    "nov":10,"novembre":10,"november":10,
    "dic":11,"dicembre":11,"dec":11,"december":11,
    "01":0,"02":1,"03":2,"04":3,"05":4,"06":5,
    "07":6,"08":7,"09":8,"10":9,"11":10,"12":11};
      (function(){
        var _tok=sn.toLowerCase().replace(/[-_/\\.,]/g," ").split(/\s+/);
        Object.keys(mM).forEach(function(k){
          if(mese!==null)return;
          _tok.forEach(function(t){if(t===k||t.indexOf(k)===0)mese=mM[k];});
        });
        if(mese===null)Object.keys(mM).forEach(function(k){if(sn.toLowerCase().indexOf(k)!==-1)mese=mM[k];});
      })();
      for(var i=0;i<Math.min(8,rows.length);i++){
        rows[i].forEach(function(cel){
          var n=parseInt(cel);
          if(!isNaN(n)&&n>2000&&n<2100)anno=n;
          if(!isNaN(n)&&n>=1&&n<=12&&mese===null)mese=n-1;
        });
      }
      if(mese===null)mese=new Date().getMonth();
      dateDaRimuovere[anno+"-"+("0"+(mese+1)).slice(-2)]=true;
    });

    // Rimuovi dal localStorage
    var T=lsG("ct_t",[]);
    T=T.filter(function(t){ return !dateDaRimuovere[t.data.substring(0,7)]; });
    lsS("ct_t",T);

    // Rimuovi da Firebase (async, non blocca)
    if(window.FirebaseModule && window.FirebaseModule.deleteTurniMesi) {
      window.FirebaseModule.deleteTurniMesi(Object.keys(dateDaRimuovere)).catch(function(e){ console.warn('deleteTurniMesi:', e.message); });
    }
  }

  var tot=0;
  selezionati.forEach(function(sn){
    tot+=parseSheet(XLSX.utils.sheet_to_json(_xlsWb.Sheets[sn],{header:1,defval:""}),sn);
  });

  document.getElementById("xi").value="";
  _xlsWb=null;
  // Deduplicazione ct_p: rimuovi persone con stesso nome normalizzato
  var _Pall = lsG("ct_p",[]);
  var _seen = {};
  _Pall = _Pall.filter(function(p){
    var k = (p.nome||'').toLowerCase().replace(/\s+/g,' ').trim();
    if(!k) return false;
    if(_seen[k]){
      // Tieni quello con uid (più completo)
      if(p.uid && !_seen[k].uid){ _seen[k].uid = p.uid; }
      return false;
    }
    _seen[k] = p;
    return true;
  });
  lsS("ct_p", _Pall);
  // Salva turni su Firebase (sia in modalità aggiungi che sostituisci)
  if(window.FirebaseModule) window.FirebaseModule.saveTurni(lsG("ct_t",[])).catch(function(e){ console.warn('saveTurni post-import:', e.message); });
  renderTurni();renderOggi();renderPers();stats();aggSel();aggiornaWidget();
  var _me3=lsG('ct_me',null);
  if(_me3&&typeof renderWidgetProssimo==='function') renderWidgetProssimo(_me3);
  var modo=modoSost?"sostituiti":"aggiunti";
  toast("&#9989; "+tot+" turni "+modo+" da "+selezionati.length+" foglio/i","ok");
  // Notifica import turni
  if(tot > 0) {
    aggiungiNotifica("turni","Turni importati","&#128229; "+tot+" turni "+modo+" da Excel ("+selezionati.length+" foglio/i)","&#128229;","var(--teal)");
  }
}
function parseSheet(rows, sn) {

  // ── Rilevamento anno e mese ──────────────────────────────────

  var anno = new Date().getFullYear(), mese = null;

  var mM = {"gen":0,"gennaio":0,"jan":0,"january":0,

    "feb":1,"febbraio":1,"february":1,"mar":2,"marzo":2,"march":2,

    "apr":3,"aprile":3,"april":3,"mag":4,"maggio":4,"may":4,

    "giu":5,"giugno":5,"jun":5,"june":5,"lug":6,"luglio":6,"jul":6,"july":6,

    "ago":7,"agosto":7,"aug":7,"august":7,"set":8,"settembre":8,"sep":8,"september":8,

    "ott":9,"ottobre":9,"oct":9,"october":9,"nov":10,"novembre":10,"november":10,

    "dic":11,"dicembre":11,"dec":11,"december":11,

    "01":0,"02":1,"03":2,"04":3,"05":4,"06":5,"07":6,"08":7,"09":8,"10":9,"11":10,"12":11};

  (function(){

    var _tok = sn.toLowerCase().replace(/[-_/\\.,]/g," ").split(/\s+/);

    Object.keys(mM).forEach(function(k){

      if(mese!==null)return;

      _tok.forEach(function(t){if(t===k||t.indexOf(k)===0)mese=mM[k];});

    });

    if(mese===null)Object.keys(mM).forEach(function(k){if(sn.toLowerCase().indexOf(k)!==-1)mese=mM[k];});

  })();

  // Cerca anno nelle prime 8 righe

  for(var i=0;i<Math.min(8,rows.length);i++){

    rows[i].forEach(function(v){

      var n=parseInt(v);

      if(!isNaN(n)&&n>2000&&n<2100)anno=n;

      if(!isNaN(n)&&n>=1&&n<=12&&mese===null)mese=n-1;

    });

  }

  if(mese===null)mese=new Date().getMonth();



  // ── STEP 1: Trova riga ancora "Grado" / "Cognome e Nome" ────

  var anchorIdx = -1;

  for(var i=0;i<rows.length;i++){

    var colA = String(rows[i][0]||'').trim().toLowerCase();

    var colB = String(rows[i][1]||'').trim().toLowerCase();

    if(colA === 'grado' && colB.indexOf('cognome') !== -1 && colB.indexOf('nome') !== -1){

      anchorIdx = i; break;

    }

  }

  // Fallback: cerca solo "grado" in colA

  if(anchorIdx < 0){

    for(var i=0;i<rows.length;i++){

      if(String(rows[i][0]||'').trim().toLowerCase() === 'grado'){ anchorIdx = i; break; }

    }

  }

  if(anchorIdx < 0){ console.warn('parseSheet: riga ancora non trovata'); return 0; }



  // ── STEP 2: Offset esatto ────────────────────────────────────

  // ancora+1 = lettere giorni (L,M,M,G,V,S,D)

  // ancora+2 = numeri giorni (1,2,3,...31)

  // ancora+3 = prima riga dati personale

  var giorniRow = anchorIdx + 2;

  var dataStart = anchorIdx + 3;



  if(giorniRow >= rows.length){ console.warn('parseSheet: riga giorni fuori range'); return 0; }



  // Mappa colonna -> numero giorno

  var colD = {};

  var giorniR = rows[giorniRow];

  for(var c=2; c<giorniR.length; c++){

    var n = parseInt(giorniR[c]);

    if(!isNaN(n) && n>=1 && n<=31) colD[c] = n;

  }



  // ── STEP 3: Codici turno ─────────────────────────────────────

  // -- STEP 3: Codici turno ----------------------------------------------
  var cM2 = {"M":"mattina","ML":"ml","1515":"mattina","P":"pomeriggio","PL":"pl",
    "N":"notte","NL":"notte","S":"sera","R":"riposo","RR":"recupero","L":"ferie","LICSTU":"licenza",
    "104":"permesso","937":"permesso","FEST":"permesso","CORSO":"corso","LS":"permesso","ESAME":"corso"};

  // Usa preset configurabili dall'utente
  var _op = (typeof getOrariPreset === 'function') ? getOrariPreset() : {};
  function _orario(tipo){
    var k = tipo;
    var v = _op[k];
    if(v) return v.in+"-"+v.out;
    if(tipo==="mattina") return "06:00-14:00";
    if(tipo==="pomeriggio") return "14:00-22:00";
    if(tipo==="notte") return "22:00-06:00";
    if(tipo==="sera") return "20:00-02:00";
    if(tipo==="ml") return "06:00-16:00";
    if(tipo==="pl") return "12:00-22:00";
    return tipo.charAt(0).toUpperCase()+tipo.slice(1);
  }
  var oM = {
    "mattina":    _orario("mattina"),
    "ml":         _orario("ml"),
    "pomeriggio": _orario("pomeriggio"),
    "pl":         _orario("pl"),
    "notte":      _orario("notte"),
    "sera":       _orario("sera"),
    "riposo":"Riposo","recupero":"Recupero","ferie":"Ferie","licenza":"Lic. Studio","permesso":"Permesso","corso":"Corso"
  };



  // ── STEP 4: Matching utente loggato ─────────────────────────

  var session = null;

  try { session = JSON.parse(localStorage.getItem('ct_session')||'null'); } catch(e){}

  var loggedFullName = session ? ((session.cognome||'')+' '+(session.nome||'')).trim().toLowerCase() : '';

  var loggedUid = session ? (session.userId||'') : '';



  var tot = 0;

  var P = lsG("ct_p",[]);

  var T = lsG("ct_t",[]);



  // ── STEP 5: Ciclo righe dati ─────────────────────────────────

  for(var i=dataStart; i<rows.length; i++){

    var r = rows[i];

    var colA = String(r[0]||'').trim();

    var colB = String(r[1]||'').trim();



    // Stop condition: legenda

    if(colA.toLowerCase().indexOf('legenda') === 0) break;



    // Salta righe vuote o "Persona"

    if(!colA && !colB) continue;

    if(!colB || colB.toLowerCase().indexOf('persona') !== -1) continue;



    var gR = colA;

    var nR = colB;



    // Pulizia nome tramite parseGradoNome

    var _pg = (typeof parseGradoNome === 'function') ? parseGradoNome(gR, nR) : {grado: gR, nome: nR};

    nR = _pg.nome;

    if(!nR || nR.length < 2) continue;

    // Salta voci legenda (es. "M = Mattina", "P = Pomeriggio")
    if(/^[A-Z]{1,3}\s*=/.test(nR) || /^[A-Z]{1,3}\s*=/.test(colB)) continue;

    // Salta se il nome contiene "legenda"
    if(nR.toLowerCase().indexOf('legenda') !== -1 || colA.toLowerCase().indexOf('legenda') !== -1) break;



    // Trova persona — match robusto per evitare doppioni
    var nRnorm = nR.toLowerCase().replace(/\s+/g,' ').trim();
    var persona = P.find(function(x){
      return x.nome.toLowerCase().replace(/\s+/g,' ').trim() === nRnorm;
    }) || null;
    if(!persona){
      // Controlla anche per uid (utente Firebase già collegato)
      var fbU = lsG('ct_users',[]);
      var fbMatch = fbU.find(function(u){
        if(!u.nome) return false;
        var un = ((u.cognome||'')+' '+(u.nome||'')).toLowerCase().replace(/\s+/g,' ').trim();
        var un2 = ((u.nome||'')+' '+(u.cognome||'')).toLowerCase().replace(/\s+/g,' ').trim();
        return un === nRnorm || un2 === nRnorm;
      });
      if(fbMatch){
        // Usa la persona Firebase esistente invece di creare un placeholder
        persona = P.find(function(x){ return x.uid === fbMatch.uid; });
      }
      if(!persona){
        persona = {id: Date.now()+Math.floor(Math.random()*9999), nome: nR, grado: _pg.grado, reparto: '', ferieRes: 30, uid: fbMatch?fbMatch.uid:null, placeholder: true};
        P.push(persona);
      }
    } else {
      // Aggiorna grado se mancante
      if(!persona.grado && _pg.grado) persona.grado = _pg.grado;
    }



    // ── Matching utente loggato ──────────────────────────────

    if(loggedFullName && loggedUid){
      var excelName = nR.toLowerCase().replace(/\s+/g,' ').trim();
      // Costruisci tutte le varianti del nome loggato per match robusto
      var _sess2 = null; try { _sess2 = JSON.parse(localStorage.getItem('ct_session')||'null'); } catch(e){}
      var _me2 = null; try { _me2 = JSON.parse(localStorage.getItem('ct_me')||'null'); } catch(e){}
      var _n2 = ((_sess2&&_sess2.nome)||(_me2&&_me2.nome)||'').toLowerCase().trim();
      var _c2 = ((_sess2&&_sess2.cognome)||(_me2&&_me2.cognome)||'').toLowerCase().trim();
      var varianti = [
        loggedFullName.replace(/\s+/g,' ').trim(),  // cognome nome (da session)
        (_n2+' '+_c2).replace(/\s+/g,' ').trim(),   // nome cognome
        (_c2+' '+_n2).replace(/\s+/g,' ').trim(),   // cognome nome
        _n2, _c2                                     // solo nome o solo cognome
      ].filter(function(v){ return v.length > 1; });
      var matched = varianti.some(function(v){
        return excelName === v || excelName.indexOf(v) !== -1 || v.indexOf(excelName) !== -1;
      });
      if(matched){
        localStorage.setItem('ct_my_pid', String(persona.id));
        localStorage.setItem('ct_my_uid', loggedUid);
        if(window.FirebaseModule) window.FirebaseModule.linkPersonaToUser(loggedUid, persona.id, nR);
      }
    }



    // ── Estrai turni ────────────────────────────────────────

    Object.keys(colD).forEach(function(col){

      var raw = String(r[parseInt(col)]||'').trim().toUpperCase();

      if(!raw) return;

      var tipo = cM2[raw]; if(!tipo) return;

      var ds = anno+'-'+pad(mese+1)+'-'+pad(colD[col]);

      var dup = T.some(function(t){ return t.pid===persona.id && t.data===ds; });

      if(!dup){

        T.push({id:Date.now()+Math.floor(Math.random()*99999), pid:persona.id,

          pnome:persona.nome, data:ds, tipo:tipo, orario:oM[tipo]||tipo, note:'', codice:raw});

        tot++;

        if(tipo==='ferie'||raw==='L'){
          // Scala pool licenze solo per la persona collegata all'utente loggato
          var _meImp=lsG("ct_me",null);
          var _myPidImp=localStorage.getItem('ct_my_pid');
          var _isMeImp=_meImp&&(String(persona.id)===String(_myPidImp)||(_meImp.uid&&persona.uid===_meImp.uid)||String(persona.id)===String(_meImp.id));
          if(_isMeImp){
            var _poolImp=getFeriePool(_meImp.id);
            var _daImp=1;
            for(var _pii=0;_pii<_poolImp.length&&_daImp>0;_pii++){
              var _scImp=Math.min(_poolImp[_pii].giorni,_daImp);
              _poolImp[_pii].giorni-=_scImp;_daImp-=_scImp;
            }
            saveFeriePool(_meImp.id,_poolImp);
          } else {
            // Per altri utenti scala solo ferieRes in ct_p
            for(var _fi=0;_fi<P.length;_fi++){
              if(P[_fi].id===persona.id){P[_fi].ferieRes=Math.max(0,(P[_fi].ferieRes||30)-1);break;}
            }
          }
        }

        if(tipo==='937'||raw==='937'){
          var _me937i=lsG("ct_me",null);
          var _myPid937i=localStorage.getItem('ct_my_pid');
          var _isMe937i=_me937i&&(String(persona.id)===String(_myPid937i)||(_me937i.uid&&persona.uid===_me937i.uid)||String(persona.id)===String(_me937i.id));
          if(_isMe937i){
            var _anno937i=new Date(ds+'T00:00:00').getFullYear()||new Date().getFullYear();
            var _FSi=lsG("ct_fest_sopp",[]);
            var _usate937i=_FSi.filter(function(f){return f.uid===_me937i.id&&f.anno===_anno937i&&f.usato;}).length;
            if(_usate937i<4){
              _FSi.push({id:Date.now()+Math.random(),uid:_me937i.id,anno:_anno937i,data:ds,nota:'Licenza 937 (import)',usato:true});
              lsS("ct_fest_sopp",_FSi);
            }
          }
        }

      }

    });

  }



  lsS("ct_p",P); lsS("ct_t",T); return tot;

}
function normG(t){
  t=(t||"").toUpperCase().trim();
  // Varianti estese con e senza punti, abbreviazioni comuni Excel Carabinieri
  var m=[
    // Ufficiali generali
    ["GENERALE","Gen."],["GEN.","Gen."],["GEN ","Gen."],
    // Ufficiali superiori
    ["COLONNELLO","Col."],["COL.","Col."],["COL ","Col."],
    ["TENENTE COLONNELLO","Ten.Col."],["TEN.COL.","Ten.Col."],["T.COL.","Ten.Col."],["TEN COL","Ten.Col."],
    ["MAGGIORE","Magg."],["MAGG.","Magg."],["MAG.","Magg."],["MAGG ","Magg."],
    // Ufficiali inferiori
    ["CAPITANO","Cap."],["CAP.","Cap."],["CAP ","Cap."],
    ["TENENTE","Ten."],["TEN.","Ten."],["TEN ","Ten."],
    ["SOTTOTENENTE","S.Ten."],["S.TEN.","S.Ten."],["S TEN","S.Ten."],
    // Sottufficiali
    ["LUOGOTENENTE","Luog."],["LUOG.","Luog."],["LGT.","Luog."],["LGT ","Luog."],
    ["MARESCIALLO MAGGIORE","Mar.Magg."],["MAR.MAGG.","Mar.Magg."],["M.MAG.","Mar.Magg."],["MAR MAGG","Mar.Magg."],
    ["MARESCIALLO CAPO","Mar.Cap."],["MAR.CAP.","Mar.Cap."],["M.CAP.","Mar.Cap."],["MAR CAP","Mar.Cap."],
    ["MARESCIALLO ORDINARIO","Mar.Ord."],["MAR.ORD.","Mar.Ord."],["M.ORD.","Mar.Ord."],["MAR ORD","Mar.Ord."],
    ["MARESCIALLO","Mar."],["MAR.","Mar."],["MAR ","Mar."],
    // Graduati
    ["BRIGADIERE CAPO","Brig.Ca."],["BRIG.CA.","Brig.Ca."],["B.CA.","Brig.Ca."],["BRIG CA","Brig.Ca."],
    ["BRIGADIERE","Brig."],["BRIG.","Brig."],["BRIG ","Brig."],
    ["VICE BRIGADIERE","V.Brig."],["V.BRIG.","V.Brig."],["V BRIG","V.Brig."],["VB.","V.Brig."],
    // Appuntati
    ["APPUNTATO SCELTO","App.Sc."],["APP.SC.","App.Sc."],["A.SC.","App.Sc."],["APP SC","App.Sc."],
    ["APPUNTATO","App."],["APP.","App."],["APP ","App."],
    // Carabinieri
    ["CARABINIERE SCELTO","Car.Sc."],["CAR.SC.","Car.Sc."],["C.SC.","Car.Sc."],["CAR SC","Car.Sc."],
    ["CARABINIERE","Car."],["CAR.","Car."],["CC.","Car."],["C.C.","Car."]
  ];
  for(var i=0;i<m.length;i++){if(t.indexOf(m[i][0])!==-1)return m[i][1];}
  return "";
}
// Estrae grado e nome pulito da una stringa che potrebbe contenerli entrambi
function parseGradoNome(gCol, nCol){
  var grado=normG(gCol);
  var nome=nCol.trim();
  if(!grado){
    // Prova a estrarlo dal campo nome (es. "Mar.Cap. ROSSI MARIO")
    grado=normG(nome);
    if(grado){
      // Rimuovi il prefisso del grado dal nome
      var nU=nome.toUpperCase();
      var grMap=[
        "MARESCIALLO MAGGIORE","MARESCIALLO CAPO","MARESCIALLO ORDINARIO","MARESCIALLO",
        "BRIGADIERE CAPO","BRIGADIERE","VICE BRIGADIERE",
        "APPUNTATO SCELTO","APPUNTATO","CARABINIERE SCELTO","CARABINIERE",
        "LUOGOTENENTE","SOTTOTENENTE","TENENTE COLONNELLO","TENENTE","CAPITANO","MAGGIORE","COLONNELLO","GENERALE",
        "MAR.MAGG.","MAR.CAP.","MAR.ORD.","MAR.","BRIG.CA.","BRIG.","V.BRIG.",
        "APP.SC.","APP.","CAR.SC.","CAR.","LGT.","TEN.COL.","S.TEN.","TEN.","CAP.","MAGG.","COL.","GEN.",
        "M.MAG.","M.CAP.","M.ORD.","B.CA.","VB.","A.SC.","C.SC.","CC."
      ];
      for(var j=0;j<grMap.length;j++){
        var gk=grMap[j];
        if(nU.indexOf(gk)===0){nome=nome.substring(gk.length).trim();break;}
        // Con spazio dopo
        if(nU.indexOf(gk+" ")===0){nome=nome.substring(gk.length+1).trim();break;}
      }
    }
  }
  return {grado:grado||"Car.",nome:nome};
}
function doExport(){
  var T=lsG("ct_t",[]);if(!T.length){toast("Nessun turno da esportare","warn");return;}
  var P=lsG("ct_p",[]);
  var d=T.map(function(t){
    var p=P.find(function(x){return x.id===t.pid;});
    return{Nome:t.pnome,Grado:p?p.grado:"",Reparto:p?p.reparto:"",
      Data:fmtD(t.data),Codice:t.codice||"",Tipo:cap(t.tipo),Orario:t.orario};
  });
  var ws=XLSX.utils.json_to_sheet(d);var wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,"Turni");
  XLSX.writeFile(wb,"cturni_"+new Date().toISOString().slice(0,10)+".xlsx");
  toast("Excel scaricato","ok");
}

// ---- NAVIGAZIONE ----
// ════ GESTIONE NUCLEO (pagina dedicata Comandante) ════

// Carica utenti da Firebase Firestore
async function _caricaMembriFirebase(wrap, me) {
  // ct_users è già aggiornato in tempo reale dal listener onSnapshot
  // Usiamo direttamente quello come fonte principale
  var users = lsG('ct_users', []);
  if(users.length > 0) {
    _renderMembriWrap(wrap, me, users);
    return;
  }
  // Fallback: prova a caricare da Firestore direttamente
  try {
    var rep = (me && me.reparto) ? me.reparto : null;
    if(!rep) throw new Error('reparto non disponibile');
    var { getFirestore, collection, getDocs } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
    var db = getFirestore();
    var snapshot = await getDocs(collection(db, 'reparti', rep, 'utenti'));
    users = [];
    snapshot.forEach(function(doc) { users.push(doc.data()); });
    localStorage.setItem('ct_users', JSON.stringify(users));
    _renderMembriWrap(wrap, me, users);
  } catch(e) {
    console.warn('_caricaMembriFirebase fallback ct_u:', e.message);
    users = lsG('ct_u', []);
    _renderMembriWrap(wrap, me, users);
  }
}

function renderGestioneNucleo() {

  var wrap = document.getElementById('pg-membri-wrap');

  if (!wrap) return;

  var me = lsG('ct_me', null);

  var isCom = me && ((me.ruolo === 'comandante' || me.ruolo === 'vice') || (me.id === 1));

  if (!isCom) { wrap.innerHTML = '<p style="color:var(--txt2)">Accesso riservato al Comandante o Vice.</p>'; return; }

  // Usa sempre _caricaMembriFirebase (legge ct_users già aggiornato dal listener)
  wrap.innerHTML = '<div style="text-align:center;padding:40px;color:var(--txt2)">&#128260; Caricamento...</div>';
  _caricaMembriFirebase(wrap, me);
}

function _renderMembriWrap(wrap, me, U) {
  // Popola card admin info
  var adminCard = document.getElementById('admin-info-card');
  if (adminCard && me) {
    adminCard.style.display = 'block';
    var nEl = document.getElementById('admin-info-nome');
    var sEl = document.getElementById('admin-info-sub');
    if (nEl) nEl.textContent = ((me.nome||'') + ' ' + (me.cognome||'')).trim() || '';
    if (sEl) { var gn=(typeof GR!=='undefined'&&GR[me.grado])?GR[me.grado].nome:(me.grado||''); sEl.textContent=gn+(me.reparto?'  '+me.reparto:''); }
  }
  var pending  = U.filter(function(u){ return u.stato === 'pending'; });

  var approved = U.filter(function(u){ return u.stato === 'approved' && u.id !== 1; });

  var sospesi  = U.filter(function(u){ return u.stato === 'sospeso'; });



  function gradoNome(g){ return (typeof GR !== 'undefined' && GR[g]) ? GR[g].nome : (g || ''); }



  function cardMembro(u, azioni) {

    var gn = gradoNome(u.grado);

    var rep = u.reparto || '';

    var html = '<div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:14px 16px;margin-bottom:10px">';

    html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">';

    html += '<div style="width:42px;height:42px;border-radius:10px;background:var(--bg2);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">';

    html += u.ava ? '<img src="'+u.ava+'" style="width:42px;height:42px;border-radius:10px;object-fit:cover">' : '&#128100;';

    html += '</div>';

    html += '<div style="flex:1;min-width:0">';

    html += '<div style="font-weight:700;font-size:14px;color:var(--txt)">'+(u.nome||'')+(u.cognome?' '+u.cognome:'')+'</div>';

    html += '<div style="font-size:12px;color:var(--txt2);margin-top:2px">'+gn+' &middot; '+rep+'</div>';

    html += '</div>';

    // Badge stato

    var badgeCol = u.stato==='pending'?'#f59e0b':u.stato==='approved'?'#22c55e':u.stato==='sospeso'?'#ef4444':'#8faac8';

    var badgeTxt = u.stato==='pending'?'In attesa':u.stato==='approved'?'Approvato':u.stato==='sospeso'?'Sospeso':'';

    html += '<div style="background:'+badgeCol+'22;color:'+badgeCol+';border:1px solid '+badgeCol+'44;border-radius:20px;padding:3px 10px;font-size:11px;font-weight:700;flex-shrink:0">'+badgeTxt+'</div>';

    html += '</div>';

    // Azioni

    html += '<div style="display:flex;gap:8px;flex-wrap:wrap">';

    html += azioni;

    html += '</div></div>';

    return html;

  }



  var html = '';



  // ── Richieste in attesa ──

  html += '<div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;color:var(--txt2);margin-bottom:8px">Richieste in attesa <span style="background:var(--blue);color:#fff;border-radius:20px;padding:1px 8px;font-size:10px">'+pending.length+'</span></div>';

  if (pending.length === 0) {

    html += '<div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:16px;text-align:center;color:var(--txt2);font-size:13px;margin-bottom:18px">Nessuna richiesta in attesa &#10003;</div>';

  } else {

    pending.forEach(function(u) {

      var uid = u.uid || u.id;
      var az = '<button class="btn btn-p btn-sm" onclick="nucleoApprova(\'+uid+\')">&amp;#10003; Approva</button>'
             + '<button class="btn btn-d btn-sm" onclick="nucleoNega(\'+uid+\')">&amp;#10005; Nega</button>';

      html += cardMembro(u, az);

    });

  }



  // ── Membri approvati ──

  html += '<div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;color:var(--txt2);margin:18px 0 8px">Membri attivi <span style="background:var(--green,#22c55e);color:#fff;border-radius:20px;padding:1px 8px;font-size:10px">'+approved.length+'</span></div>';

  if (approved.length === 0) {

    html += '<div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:16px;text-align:center;color:var(--txt2);font-size:13px;margin-bottom:18px">Nessun membro attivo</div>';

  } else {

    approved.forEach(function(u) {

      var uid = u.uid || u.id;
      var az = '<button class="btn btn-sm" style="background:rgba(239,68,68,.12);color:#ef4444;border:1px solid rgba(239,68,68,.3)" onclick="nucleoSospendi(\''+uid+'\')">&#9208; Sospendi</button>'

             + '<button class="btn btn-d btn-sm" onclick="nucleoRimuovi(\''+uid+'\')">&#128465; Rimuovi</button>';

      html += cardMembro(u, az);

    });

  }



  // ── Sospesi ──

  if (sospesi.length > 0) {

    html += '<div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;color:var(--txt2);margin:18px 0 8px">Sospesi <span style="background:#ef4444;color:#fff;border-radius:20px;padding:1px 8px;font-size:10px">'+sospesi.length+'</span></div>';

    sospesi.forEach(function(u) {

      var uid = u.uid || u.id;
      var az = '<button class="btn btn-p btn-sm" onclick="nucleoApprova(\''+uid+'\')">&#9654; Riattiva</button>'

             + '<button class="btn btn-d btn-sm" onclick="nucleoRimuovi(\''+uid+'\')">&#128465; Rimuovi</button>';

      html += cardMembro(u, az);

    });

  }



  wrap.innerHTML = html;

}



function _nucleoSalva(uid, stato) {
  // Aggiorna ct_users locale
  var U = lsG('ct_users', []);
  for(var i = 0; i < U.length; i++) {
    if(U[i].uid === uid || String(U[i].id) === String(uid)) {
      U[i].stato = stato;
      break;
    }
  }
  localStorage.setItem('ct_users', JSON.stringify(U));
  // Aggiorna su Firestore tramite FirebaseModule
  if(typeof window.FirebaseModule !== 'undefined') {
    window.FirebaseModule.aggiornaStatoUtente(uid, stato).catch(function(e){
      console.warn('nucleoSalva Firebase:', e.message);
    });
  }
  renderGestioneNucleo();
}

function nucleoApprova(uid)  { _nucleoSalva(uid,'approved'); toast('Membro approvato','ok'); }

function nucleoNega(uid)     { _nucleoSalva(uid,'rejected'); toast('Richiesta negata','err'); }

function nucleoSospendi(uid) { _nucleoSalva(uid,'sospeso');  toast('Membro sospeso','ok'); }

function nucleoRimuovi(uid)  {
  ctConfirm('Rimuovere questo membro dal reparto?', {title:'Rimuovi Membro', ico:'👤', ok:'Rimuovi', danger:true}).then(function(ok){
    if(!ok) return;
    var U = lsG('ct_users', []);
    U = U.filter(function(u){ return u.uid !== uid && String(u.id) !== String(uid); });
    localStorage.setItem('ct_users', JSON.stringify(U));
    if(typeof window.FirebaseModule !== 'undefined') {
      window.FirebaseModule.aggiornaStatoUtente(uid, 'rejected').catch(function(e){
        console.warn('nucleoRimuovi Firebase:', e.message);
      });
    }
    renderGestioneNucleo();
    toast('Membro rimosso','ok');
  });
}


// Ordine pagine per determinare direzione animazione
var _pgOrder = ['dash','pers','cal','rep','straord','imp','membri'];
var _pgCurrent = 'dash';

function vai(pg, btn) {
  var oldIdx = _pgOrder.indexOf(_pgCurrent);
  var newIdx = _pgOrder.indexOf(pg);
  var dir = newIdx >= oldIdx ? 'pg-enter-right' : 'pg-enter-left';
  _pgCurrent = pg;
  lsS('ct_pg', pg);

  document.querySelectorAll(".nv").forEach(function(n){ n.classList.remove("on"); });
  if(btn) btn.classList.add("on");
  document.querySelectorAll(".pag").forEach(function(p){ p.classList.remove("on","pg-enter-right","pg-enter-left","pg-enter-up"); });
  var el = document.getElementById("pag-"+pg);
  if(el){ el.classList.add("on", dir); }
  chiMenu();
  // FAB: visibile SOLO sulla dashboard — gestito qui per coprire tutti i percorsi di navigazione
  _aggFabVisibility(pg);
  if(pg==="pers"){ renderPers(); if(typeof _renderStatoComando==='function') _renderStatoComando(); }
  if(pg==="cal") { renderCal(); renderTodo(); renderAgenda(); renderTodoCondivisi(); renderAgendaCondivisa(); }
  if(pg==="ag")  { renderAgendaPg(); renderTodoAg(_tdFiltroAg||'tutti'); }
  if(pg==="rep") renderRep();
  if(pg==="straord") { renderStraord(); }
  if(pg==="imp"){ aggUI(); caricaSaldoFerie(); aggNotifStatus(); aggTemaUI(lsG("ct_tema","")||""); aggLastBackupDate(); caricaFontSize(); if(typeof GSync!=='undefined'&&GSync.ui) GSync.ui.renderPanel(); }
  if(pg==="todo"){ renderTodo(); filtraTodo(_tdFiltro); renderTodoCondivisi(); }
  if(pg==="agenda") { renderAgenda(); renderAgendaCondivisa(); }
  if(pg==="membri") renderGestioneNucleo();
}

// ── Genera reparto_id dai 3 campi registrazione + suggerimento reparti esistenti ──
var _aggRepartoTimer = null;
function aggiornaRepartoId() {
  var tipo = (document.getElementById('reg-tipo-struttura')||{}).value || '';
  var spec = (document.getElementById('reg-specialita')||{}).value || '';
  var sede = ((document.getElementById('reg-sede')||{}).value || '').trim().toLowerCase().replace(/\s+/g,'_');
  var id = [tipo, spec, sede].filter(Boolean).join('_');
  var prev = document.getElementById('reg-reparto-preview');
  var inp = document.getElementById('reg-reparto');
  if(prev) prev.textContent = id || '—';
  if(inp) inp.value = id;

  // Suggerimento: cerca reparti esistenti su Firebase quando l'ID è completo (tutti e 3 i campi)
  var hint = document.getElementById('reg-reparto-hint');
  if(!hint) return;
  if(!tipo || !spec || !sede) { hint.style.display = 'none'; return; }

  clearTimeout(_aggRepartoTimer);
  _aggRepartoTimer = setTimeout(async function() {
    hint.style.display = 'none';
    if(!window.FirebaseModule) return;
    try {
      var existing = await window.FirebaseModule.getUsersByReparto(id);
      if(existing.length > 0) {
        // Reparto già esistente → mostra info rassicurante
        var cmd = existing.find(function(u){ return (u.ruolo === 'comandante' || u.ruolo === 'vice') && u.stato === 'approved'; });
        hint.innerHTML = '&#9989; Reparto già registrato. Potrai unirti dopo l\'approvazione del Comandante' + (cmd ? ' (<strong>' + (cmd.grado||'') + ' ' + cmd.nome + ' ' + cmd.cognome + '</strong>)' : '') + '.';
        hint.style.background = 'rgba(6,214,160,.08)';
        hint.style.borderColor = 'rgba(6,214,160,.3)';
        hint.style.color = 'var(--green)';
      } else {
        // Reparto nuovo → avvisa che diventerà comandante
        hint.innerHTML = '&#128640; Nuovo reparto: sarai il primo iscritto e diventerai automaticamente <strong>Comandante</strong>.';
        hint.style.background = 'rgba(41,121,255,.07)';
        hint.style.borderColor = 'rgba(41,121,255,.2)';
        hint.style.color = 'var(--blue)';
      }
      hint.style.display = 'block';
    } catch(e) { hint.style.display = 'none'; }
  }, 600);
}

// ── Genera reparto_id per trasferimento ──
function aggiornaTrasferimentoId() {
  var tipo = (document.getElementById('trasf-tipo-struttura')||{}).value || '';
  var spec = (document.getElementById('trasf-specialita')||{}).value || '';
  var sede = ((document.getElementById('trasf-sede')||{}).value || '').trim().toLowerCase().replace(/\s+/g,'_');
  var id = [tipo, spec, sede].filter(Boolean).join('_');
  var prev = document.getElementById('trasf-reparto-preview');
  if(prev) prev.textContent = id || '—';
}

// ── Mostra schermata pending ──
function _showPendingScreen(profile) {
  var ov = document.getElementById('overlay-pending');
  if(!ov) return;
  var info = document.getElementById('pending-reparto-info');
  if(info) {
    var rep = (profile.reparto || '').replace(/_/g,' ');
    info.innerHTML = '&#128205; Reparto: <strong>' + rep + '</strong><br>&#128100; ' + (profile.nome||'') + ' ' + (profile.cognome||'') + ' &middot; ' + (profile.grado||'') + '<br>&#128336; Registrato il ' + (profile.registratoIl ? new Date(profile.registratoIl).toLocaleDateString('it-IT') : '—');
  }
  ov.style.display = 'flex';
  var pgApp = document.getElementById('pg-app');
  if(pgApp) { pgApp.classList.remove('on'); pgApp.style.display='none'; }
}

// ── Richiesta trasferimento reparto ──
async function richiestaTrasfRep() {
  var tipo = (document.getElementById('trasf-tipo-struttura')||{}).value || '';
  var spec = (document.getElementById('trasf-specialita')||{}).value || '';
  var sede = ((document.getElementById('trasf-sede')||{}).value || '').trim().toLowerCase().replace(/\s+/g,'_');
  if(!tipo || !spec || !sede) { toast('Compila tutti i campi del trasferimento', 'err'); return; }
  var nuovoReparto = [tipo, spec, sede].join('_');
  var session = lsG('ct_session', null);
  if(!session || !session.userId) { toast('Sessione non trovata, rieffettua il login','err'); return; }
  if(!await ctConfirm('Confermi il trasferimento a "' + nuovoReparto.replace(/_/g,' ') + '"?<br><small>Perderai immediatamente l\'accesso al reparto attuale.</small>', {title:'Trasferimento', ico:'🏠', ok:'Conferma', danger:false})) return;
  try {
    ctSpinner(true, 'Trasferimento in corso...');
    var me = lsG('ct_me', null);
    if(!me) { ctSpinner(false); toast('Profilo non trovato', 'err'); return; }

    // ── Legge del pioniere: se il reparto non esiste o non ha un Comandante → diventa Comandante ──
    var isPioniere = false;
    if(window.FirebaseModule) {
      try {
        var esistenti = await window.FirebaseModule.getUsersByReparto(nuovoReparto);
        var haCmd = esistenti.some(function(u){
          return u.ruolo === 'comandante' && (u.stato === 'approved' || u.stato === 'approvato');
        });
        isPioniere = (esistenti.length === 0 || !haCmd);
      } catch(e) {
        isPioniere = true;
      }
    } else {
      isPioniere = true;
    }

    me.reparto = nuovoReparto;
    if(isPioniere) {
      me.stato = 'approved';
      me.ruolo = 'comandante';
    } else {
      me.stato = 'pending';
      me.ruolo = 'addetto';
    }

    if(window.FirebaseModule) {
      await window.FirebaseModule.saveUserProfile(me.uid || session.userId, me, nuovoReparto);
    }
    // Aggiorna sessione — PRESERVA userId e altri campi critici
    session.reparto = nuovoReparto;
    session.ruolo = me.ruolo;
    session.stato = me.stato;
    lsS('ct_session', session);
    lsS('ct_me', me);

    // Pulisci lista colleghi e turni del vecchio reparto
    lsS('ct_p', []);
    lsS('ct_t', []);
    localStorage.removeItem('ct_my_pid');

    if(isPioniere) {
      ctSpinner(false);
      toast('Sei il primo del reparto "' + nuovoReparto.replace(/_/g,' ') + '". Sei il Comandante!', 'ok');
      // Ricarica dati Firebase del nuovo reparto
      if(window.FirebaseModule) {
        try {
          await window.FirebaseModule.loadReparto(nuovoReparto);
        } catch(e) { /* non bloccante */ }
      }
      if(typeof aggUI === 'function') aggUI();
      if(typeof renderDash === 'function') renderDash();
      if(typeof vaiBN === 'function') vaiBN('dash', 0);
    } else {
      ctSpinner(false);
      toast('Trasferimento richiesto. Attendi approvazione.', 'ok');
      _showPendingScreen(me);
    }
  } catch(e) {
    ctSpinner(false);
    toast('Errore trasferimento: ' + e.message, 'err');
  }
}

// Bottom Nav handler
var _bnOrder = ['dash','ag','cal','imp'];
function vaiBN(pg, idx) {
  console.log('[Nav] vaiBN chiamata:', pg);
  document.querySelectorAll(".bn-item").forEach(function(b){ b.classList.remove("on"); });
  var bnEl = document.getElementById("bn-"+pg);
  if(bnEl) bnEl.classList.add("on");

  document.querySelectorAll(".pag").forEach(function(p){ p.classList.remove("on"); });
  var target = document.getElementById("pag-"+pg);
  if(target){
    target.classList.add("on");
    target.scrollTop = 0;
    console.log('[Nav] Pagina mostrata: pag-'+pg);
  } else {
    console.warn('[Nav] Pagina non trovata: pag-'+pg);
  }

  _pgCurrent = pg;
  lsS('ct_pg', pg);
  chiMenu();
  _aggFabVisibility(pg);
  if(typeof window._updateDinoVisibility === 'function') window._updateDinoVisibility();
  // Ferma orologio Focus quando si lascia la dashboard
  if(pg !== 'dash' && window._focusClockTimer){
    clearInterval(window._focusClockTimer);
    window._focusClockTimer = null;
  }

  if(pg==='dash'){
    renderDash();
    if(typeof aggiornaFocus === 'function') aggiornaFocus();
  }  if(pg==='imp'){
    aggUI();
    caricaSaldoFerie();
    aggNotifStatus();
    aggTemaUI(lsG("ct_tema","")||"");
    if(typeof renderOrariPreset === 'function') renderOrariPreset();
    if(typeof renderTurniCustomImp === 'function') renderTurniCustomImp();
  }
  if(pg==="pers"){ renderPers(); if(typeof _renderStatoComando==='function') _renderStatoComando(); }
  if(pg==="cal") { renderCal(); renderTodo(); renderAgenda(); renderTodoCondivisi(); renderAgendaCondivisa(); }
  if(pg==="ag")  { renderAgendaPg(); renderTodoAg(_tdFiltroAg||'tutti'); }
  if(pg==="rep") renderRep();
  if(pg==="todo"){ renderTodo(); filtraTodo(_tdFiltro); renderTodoCondivisi(); }
  if(pg==="agenda") { renderAgenda(); renderAgendaCondivisa(); }
  closeFab();
}

function togMenu(){ /* sidebar rimossa */ }
function chiMenu(){
  var o=document.getElementById("ovl");
  if(o) o.classList.remove("on");
}
/* togTheme rimossa (duplicata) */


function filtra(id,q){
  q=q.toLowerCase();
  document.querySelectorAll("#"+id+" tr").forEach(function(r){
    r.style.display=r.textContent.toLowerCase().indexOf(q)!==-1?"":"none";
  });
}
function tbdg(tipo,cod){
  var t=tipo||"altro";
  return "<span class=\"tb "+t+"\">"+( cod||cap(tipo||""))+"</span>";
}
function fmtD(ds){try{return _parseDate(ds).toLocaleDateString("it-IT");}catch(e){return ds;}}
function cap(s){return s?s.charAt(0).toUpperCase()+s.slice(1):"";}
function pad(n){return n<10?"0"+n:""+n;}
// ── Vibrazione aptica sicura ──────────────────────────────────
window.haptic = function(type) {
  if (!navigator.vibrate) return;
  try {
    if (type === 'light')   navigator.vibrate(15);
    else if (type === 'success') navigator.vibrate([15, 60, 20]);
    else if (type === 'error')   navigator.vibrate([50, 50, 50]);
    else                    navigator.vibrate(15);
  } catch(e) {}
};

// ── Snackbar M3 (alias showToast) ────────────────────────────
window.showToast = function(msg, isError) {
  var x = document.getElementById('ct-snackbar');
  if (!x) {
    x = document.createElement('div');
    x.id = 'ct-snackbar';
    document.body.appendChild(x);
  }
  x.textContent = msg;
  x.style.borderLeftColor = isError ? 'var(--red)' : 'var(--green)';
  // reset animazione
  x.className = '';
  void x.offsetWidth;
  x.className = 'show';
  window.haptic(isError ? 'error' : 'success');
  clearTimeout(x._hideTimer);
  x._hideTimer = setTimeout(function(){ x.className = x.className.replace('show','').trim(); }, 3000);
};

function toast(msg,tipo){
  var d=document.createElement("div");
  var tc=tipo==="ok"?" ok":tipo==="err"?" err":tipo==="warn"?" warn":"";
  d.className="noti"+tc;
  var ico=tipo==="ok"?"&#10003;":tipo==="err"?"&#10007;":tipo==="warn"?"&#9888;":"&#8505;";
  d.innerHTML="<span>"+ico+"</span><span>"+msg+"</span>";
  document.getElementById("noti").appendChild(d);
  setTimeout(function(){d.style.opacity="0";},3000);
  setTimeout(function(){d.remove();},3300);
  // Feedback aptico
  window.haptic(tipo === 'err' ? 'error' : tipo === 'ok' ? 'success' : 'light');
  // Suono UI
  if(typeof _playUiSound === 'function') {
    if(tipo === 'ok')   _playUiSound('save');
    if(tipo === 'err')  _playUiSound('error');
  }
}






function apriProfilo(){
  var me=lsG('ct_me',null);if(!me)return;
  var pNome=document.getElementById('pf-nome');
  var pRep=document.getElementById('pf-rep');
  var pNuc=document.getElementById('pf-nuc');
  var pGrado=document.getElementById('pf-grado');
  if(pNome)pNome.value=me.nome||'';
  if(pRep)pRep.value=me.reparto||'';
  if(pNuc)pNuc.value=me.nucleo||'';
  if(pGrado)pGrado.value=me.grado||'';
  document.getElementById('pf-pw').value='';
  var prev=document.getElementById('pf-ava-prev');
  if(prev){
    if(me.ava){
      prev.style.backgroundImage='url('+me.ava+')';
      prev.style.backgroundSize='cover';
      prev.style.backgroundPosition='center';
      prev.textContent='';
    }else{
      prev.textContent='\u{1F464}';
    }
  }
  var errEl=document.getElementById('pf-err');
  if(errEl)errEl.classList.remove('on');
  openM('m-profilo');
}

function salvaProfilo(){
  var me=lsG('ct_me',null);if(!me)return;
  var nome=document.getElementById('pf-nome').value.trim();
  var rep=document.getElementById('pf-rep').value.trim();
  var nuc=document.getElementById('pf-nuc').value.trim();
  var grado=document.getElementById('pf-grado').value;
  var pw=document.getElementById('pf-pw').value;
  var errEl=document.getElementById('pf-err');
  errEl.classList.remove('on');
  if(!nome){errEl.textContent='Il nome non può essere vuoto';errEl.classList.add('on');return;}
  me.nome=nome;me.reparto=rep;me.nucleo=nuc;me.grado=grado;
  if(pw)me.pw=pw;
  var fEl=document.getElementById('pf-ava-file');

  // Funzione finale: aggiorna localStorage e UI SOLO dopo conferma Firebase
  var _salvaConFoto = function(dataUrl){
    var session=lsG('ct_session',null);
    var uid=session&&session.userId?session.userId:null;
    if(!uid || !window.FirebaseModule){
      // Nessun Firebase: salva solo in locale
      if(dataUrl) me.ava = dataUrl;
      _completaSalvataggio(me);
      return;
    }
    // Se c'è una nuova foto base64, caricala su Storage e ottieni l'URL reale
    if(dataUrl && dataUrl.startsWith('data:')){
      toast('Caricamento foto...','ok');
      ctSpinner(true, 'Salvataggio profilo...');
      window.FirebaseModule.uploadFotoProfilo(uid, dataUrl)
        .then(function(fotoUrl){
          if(fotoUrl) me.ava = fotoUrl;
          return window.FirebaseModule.saveUserProfile(uid, me, me.reparto);
        })
        .then(function(){
          return window.FirebaseModule.savePersonale();
        })
        .then(function(){
          // SOLO dopo il successo di Firestore aggiorna localStorage e UI
          _completaSalvataggio(me);
        })
        .catch(function(e){
          ctSpinner(false);
          console.warn('salvaProfilo Firebase:', e.message);
          toast('Errore salvataggio: '+e.message,'err');
        });
    } else {
      // Nessuna foto nuova: salva profilo direttamente
      ctSpinner(true, 'Salvataggio profilo...');
      window.FirebaseModule.saveUserProfile(uid, me, me.reparto)
        .then(function(){
          return window.FirebaseModule.savePersonale();
        })
        .then(function(){
          _completaSalvataggio(me);
        })
        .catch(function(e){
          ctSpinner(false);
          console.warn('salvaProfilo Firebase:', e.message);
          toast('Errore salvataggio: '+e.message,'err');
        });
    }
  };

  // Aggiorna localStorage, ct_u, ct_p, DOM e mostra toast
  function _completaSalvataggio(profilo){
    ctSpinner(false);
    lsS('ct_me', profilo);
    // Aggiorna ct_session con il nuovo URL foto (persiste al refresh)
    var sess = lsG('ct_session', null);
    if(sess){
      if(profilo.ava) { sess.ava = profilo.ava; sess.fotoURL = profilo.ava; }
      lsS('ct_session', sess);
    }
    var U=lsG('ct_u',[]);
    for(var i=0;i<U.length;i++){if(U[i].id===profilo.id||U[i].uid===profilo.uid){U[i]=Object.assign({},U[i],profilo);break;}}
    lsS('ct_u',U);
    // Aggiorna ct_p — usa uid, id E nome per trovare il profilo
    var P=lsG('ct_p',[]);
    var aggiornato = false;
    for(var j=0;j<P.length;j++){
      if(P[j].uid===profilo.uid || P[j].id===profilo.id){
        if(profilo.ava) P[j].ava = profilo.ava;
        P[j].nome = profilo.nome;
        P[j].grado = profilo.grado;
        aggiornato = true;
        break;
      }
    }
    // Se non trovato per uid/id, cerca per nome
    if(!aggiornato && profilo.nome){
      var nomeNorm = ((profilo.cognome||'')+' '+(profilo.nome||'')).trim().toLowerCase();
      for(var k=0;k<P.length;k++){
        if((P[k].nome||'').toLowerCase() === nomeNorm || (P[k].nome||'').toLowerCase() === (profilo.nome||'').toLowerCase()){
          if(profilo.ava) P[k].ava = profilo.ava;
          P[k].uid = profilo.uid || P[k].uid;
          break;
        }
      }
    }
    lsS('ct_p',P);
    if(typeof _syncAvaAllSections === 'function') _syncAvaAllSections(profilo.ava||null);
    aggUI();
    closeM('m-profilo');
    toast('Profilo aggiornato ✓','ok');
  }

  // Avvia il flusso con o senza nuova foto
  var fEl = document.getElementById('pf-ava-file');
  if(fEl && fEl.files[0]) {
    // Nuova foto da file: ridimensiona e carica
    _ridimensionaFoto(fEl.files[0], function(dataUrl) {
      if(dataUrl) window._tempAva = dataUrl;
      _salvaConFoto(dataUrl || null);
    });
  } else if(window._tempAva) {
    var d = window._tempAva; window._tempAva = null;
    _salvaConFoto(d);
  } else {
    // Controlla URL manuale nel campo testo
    var nAvaEl = document.getElementById('pf-ava');
    var urlManuale = nAvaEl && nAvaEl.value.trim() ? nAvaEl.value.trim() : null;
    if(urlManuale) me.ava = urlManuale;
    _salvaConFoto(null);
  }
}

// Aggiorna foto in tutte le sezioni immediatamente
function _syncAvaAllSections(avaUrl){
  // Header avatar
  var hAva = document.getElementById('h-ava');
  if(hAva){
    if(avaUrl){ hAva.style.backgroundImage='url('+avaUrl+')'; hAva.style.backgroundSize='cover'; hAva.style.backgroundPosition='center'; hAva.innerHTML=''; }
    else { hAva.style.backgroundImage=''; hAva.innerHTML='&#128100;'; }
  }
  // Impostazioni avatar
  var impAva = document.getElementById('imp-ava');
  if(impAva){
    if(avaUrl){ impAva.style.backgroundImage='url('+avaUrl+')'; impAva.style.backgroundSize='cover'; impAva.style.backgroundPosition='center'; impAva.textContent=''; }
    else { impAva.style.backgroundImage=''; impAva.textContent='👤'; }
  }
  // Profilo preview
  var pfPrev = document.getElementById('pf-ava-prev');
  if(pfPrev){
    if(avaUrl){ pfPrev.style.backgroundImage='url('+avaUrl+')'; pfPrev.style.backgroundSize='cover'; pfPrev.style.backgroundPosition='center'; pfPrev.textContent=''; }
    else { pfPrev.style.backgroundImage=''; pfPrev.textContent='👤'; }
  }
  // Tesserino
  var tessAva = document.getElementById('tess-ava');
  var tessPlaceholder = document.getElementById('tess-ava-placeholder');
  if(tessAva && avaUrl){ tessAva.src=avaUrl; tessAva.style.display='block'; if(tessPlaceholder)tessPlaceholder.style.display='none'; }
  else if(tessAva){ tessAva.style.display='none'; if(tessPlaceholder)tessPlaceholder.style.display=''; }
  // Widget oggi avatar
  var wAva = document.getElementById('w-ava');
  if(wAva){
    if(avaUrl){ wAva.style.backgroundImage='url('+avaUrl+')'; wAva.style.backgroundSize='cover'; wAva.style.backgroundPosition='center'; wAva.innerHTML=''; }
    else { wAva.style.backgroundImage=''; }
  }
}
/* ============================================================
   MEGA-PATCH JS  c_turni_v3.1.0
   ============================================================ */

/* ---------- LS HELPERS (alias sicuri) ---------- */
function lsG(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch(e) { return d; } }
function lsS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch(e) { return false; } }

/* ---------- MAPPA CITT ? COORDINATE (meteo) ---------- */
var METEO_CITTA = {
  'roma': [41.9028, 12.4964], 'milano': [45.4654, 9.1859], 'napoli': [40.8518, 14.2681],
  'torino': [45.0703, 7.6869], 'firenze': [43.7696, 11.2558], 'bologna': [44.4949, 11.3426],
  'venezia': [45.4408, 12.3155], 'genova': [44.4056, 8.9463], 'palermo': [38.1157, 13.3615],
  'bari': [41.1171, 16.8719], 'catania': [37.5079, 15.0830], 'verona': [45.4386, 10.9928],
  'messina': [38.1938, 15.5540], 'padova': [45.4064, 11.8768], 'trieste': [45.6496, 13.7768],
  'brescia': [45.5416, 10.2118], 'taranto': [40.4644, 17.2470], 'prato': [43.8777, 11.1023],
  'reggio calabria': [38.1096, 15.6474], 'modena': [44.6471, 10.9252],
  'reggio emilia': [44.6989, 10.6297], 'perugia': [43.1107, 12.3908],
  'livorno': [43.5485, 10.3106], 'ravenna': [44.4184, 12.2035], 'cagliari': [39.2238, 9.1217],
  'foggia': [41.4621, 15.5446], 'rimini': [44.0678, 12.5695], 'salerno': [40.6824, 14.7681],
  'ferrara': [44.8381, 11.6198], 'sassari': [40.7259, 8.5557], 'quaregna': [45.5800, 8.2400],
  'caserta': [41.0742, 14.3328], 'giugliano': [40.9303, 14.1951], 'avellino': [40.9146, 14.7908],
  'benevento': [41.1297, 14.7829], 'cosenza': [39.3086, 16.2519], 'catanzaro': [38.9100, 16.5874]
};

// Icone meteo animate con SVG (Task 1)
var _SVG_SOLE = '<svg width="40" height="40" viewBox="0 0 100 100"><circle cx="50" cy="50" r="20" fill="#FFD166"/><g class="meteo-sun-rays" stroke="#FFD166" stroke-width="6" stroke-linecap="round"><line x1="50" y1="10" x2="50" y2="20"/><line x1="50" y1="80" x2="50" y2="90"/><line x1="10" y1="50" x2="20" y2="50"/><line x1="80" y1="50" x2="90" y2="50"/><line x1="22" y1="22" x2="29" y2="29"/><line x1="78" y1="78" x2="71" y2="71"/><line x1="22" y1="78" x2="29" y2="71"/><line x1="78" y1="22" x2="71" y2="29"/></g></svg>';
var _SVG_PIOGGIA = '<svg width="40" height="40" viewBox="0 0 100 100"><path class="meteo-cloud" d="M30,60 a15,15 0 0,1 10,-28 a20,20 0 0,1 35,10 a15,15 0 0,1 -5,28 z" fill="#8faac8"/><g stroke="#5b9fff" stroke-width="4" stroke-linecap="round"><line class="meteo-rain-drop" x1="40" y1="65" x2="35" y2="80"/><line class="meteo-rain-drop" x1="55" y1="65" x2="50" y2="80"/><line class="meteo-rain-drop" x1="70" y1="65" x2="65" y2="80"/></g></svg>';
var _SVG_NUVOLOSO = '<svg width="40" height="40" viewBox="0 0 100 100"><path class="meteo-cloud" d="M20,65 a18,18 0 0,1 12,-32 a22,22 0 0,1 40,8 a18,18 0 0,1 -4,24 z" fill="#8faac8"/></svg>';
var _SVG_NEVE = '<svg width="40" height="40" viewBox="0 0 100 100"><path class="meteo-cloud" d="M25,55 a15,15 0 0,1 10,-28 a20,20 0 0,1 35,10 a15,15 0 0,1 -5,28 z" fill="#c8d8e8"/><g fill="#fff" stroke="#a0b8d0" stroke-width="1"><circle class="meteo-rain-drop" cx="38" cy="72" r="3"/><circle class="meteo-rain-drop" cx="52" cy="72" r="3"/><circle class="meteo-rain-drop" cx="66" cy="72" r="3"/></g></svg>';
var _SVG_TEMPORALE = '<svg width="40" height="40" viewBox="0 0 100 100"><path class="meteo-cloud" d="M20,55 a18,18 0 0,1 12,-32 a22,22 0 0,1 40,8 a18,18 0 0,1 -4,24 z" fill="#546e7a"/><polygon class="meteo-rain-drop" points="52,58 44,75 50,75 46,90 60,68 53,68 58,58" fill="#FFD166"/></svg>';
var _SVG_NEBBIA = '<svg width="40" height="40" viewBox="0 0 100 100"><g class="meteo-cloud" stroke="#8faac8" stroke-width="5" stroke-linecap="round"><line x1="15" y1="40" x2="85" y2="40"/><line x1="20" y1="55" x2="80" y2="55"/><line x1="25" y1="70" x2="75" y2="70"/></g></svg>';
var _SVG_PARZIALE = '<svg width="40" height="40" viewBox="0 0 100 100"><circle cx="35" cy="42" r="14" fill="#FFD166"/><g stroke="#FFD166" stroke-width="4" stroke-linecap="round"><line x1="35" y1="20" x2="35" y2="26"/><line x1="35" y1="58" x2="35" y2="64"/><line x1="13" y1="42" x2="19" y2="42"/><line x1="51" y1="42" x2="57" y2="42"/></g><path class="meteo-cloud" d="M38,62 a12,12 0 0,1 8,-22 a16,16 0 0,1 28,8 a12,12 0 0,1 -4,20 z" fill="#8faac8"/></svg>';

var METEO_WMO = {
  0:  _SVG_SOLE,
  1:  _SVG_PARZIALE,
  2:  _SVG_NUVOLOSO,
  3:  _SVG_NUVOLOSO,
  45: _SVG_NEBBIA,
  48: _SVG_NEBBIA,
  51: _SVG_PIOGGIA,
  53: _SVG_PIOGGIA,
  55: _SVG_PIOGGIA,
  61: _SVG_PIOGGIA,
  63: _SVG_PIOGGIA,
  65: _SVG_PIOGGIA,
  71: _SVG_NEVE,
  73: _SVG_NEVE,
  75: _SVG_NEVE,
  77: _SVG_NEVE,
  80: _SVG_PIOGGIA,
  81: _SVG_PIOGGIA,
  82: _SVG_TEMPORALE,
  85: _SVG_NEVE,
  86: _SVG_NEVE,
  95: _SVG_TEMPORALE,
  96: _SVG_TEMPORALE,
  99: _SVG_TEMPORALE
};
var METEO_DESC = {
  0:'Sereno', 1:'Quasi sereno', 2:'Parzialmente nuvoloso', 3:'Coperto',
  45:'Nebbia', 48:'Nebbia gelata', 51:'Pioggerella', 53:'Pioggerella', 55:'Pioggerella intensa',
  61:'Pioggia', 63:'Pioggia moderata', 65:'Pioggia intensa', 71:'Neve leggera',
  73:'Neve', 75:'Neve intensa', 77:'Nevischio', 80:'Rovesci', 81:'Rovesci moderati',
  82:'Rovesci violenti', 85:'Neve', 86:'Neve intensa', 95:'Temporale', 96:'Temporale', 99:'Temporale forte'
};

/* ---------- WIDGET CONF ---------- */
var WIDGET_DEF = {
  'squadra-turni': { label: "&#128101; Squadra &amp; Turni",  default: true },
  settimana:       { label: "&#128197; Turni Settimana",       default: true },
  prossimo:        { label: "&#9200; Prossimo turno",          default: true },
  alert:           { label: "&#128680; Alert",                 default: true },
  scadenze:        { label: "&#128197; Scadenze",              default: true },
  agenda:          { label: "&#128467; Agenda oggi",           default: true },
  todo:            { label: "&#9989; To-Do",                   default: true },
  dino:            { label: "&#129430; Dino Game",             default: false }
};

function getWidgetCfg() {
  var saved = lsG('ct_dash_widgets', null);
  if (!saved) {
    var def = {};
    Object.keys(WIDGET_DEF).forEach(function(k){ def[k] = WIDGET_DEF[k].default; });
    return def;
  }
  // Rimuovi chiavi non più presenti in WIDGET_DEF (widget eliminati)
  Object.keys(saved).forEach(function(k){ if(!(k in WIDGET_DEF)) delete saved[k]; });
  // Aggiungi chiavi nuove con valore default
  Object.keys(WIDGET_DEF).forEach(function(k){ if (!(k in saved)) saved[k] = WIDGET_DEF[k].default; });
  return saved;
}

var WIDGET_ID_MAP = {
  'squadra-turni': 'widget-squadra-turni',
  settimana:       'widget-settimana',
  prossimo:        'widget-prossimo',
  alert:           'widget-alert',
  scadenze:        'widget-scadenze',
  agenda:          'widget-agenda',
  todo:            'widget-todo',
  dino:            'widget-dino-dash'
};

function getWidgetOrder() {
  var saved = lsG('ct_dash_order', null);
  var allKeys = Object.keys(WIDGET_DEF);
  if (!saved) return allKeys;
  // Aggiungi chiavi nuove non ancora presenti nell'ordine salvato
  allKeys.forEach(function(k) { if (saved.indexOf(k) < 0) saved.push(k); });
  return saved;
}

function saveWidgetOrder(order) {
  lsS('ct_dash_order', order);
}

// ══════════════════════════════════════════════════════════════
// WIDGET CUSTOMIZATION — Dimensione, Forma, Colonne, Righe
// ══════════════════════════════════════════════════════════════

function getWidgetSizes()  { return lsG('ct_dash_sizes',  {}); }
function getWidgetShapes() { return lsG('ct_dash_shapes', {}); }
function getWidgetSpans()  { return lsG('ct_dash_spans',  {}); }

function saveWidgetSize(k, v)  { var d=getWidgetSizes();  d[k]=v; lsS('ct_dash_sizes',  d); }
function saveWidgetShape(k, v) { var d=getWidgetShapes(); d[k]=v; lsS('ct_dash_shapes', d); }
function saveWidgetSpan(k, v)  { var d=getWidgetSpans();  d[k]=v; lsS('ct_dash_spans',  d); }

// Numero di colonne della griglia (2 o 3)
function getGridCols() { return lsG('ct_dash_cols', 2); }
function setGridCols(n) {
  lsS('ct_dash_cols', n);
  var c = document.getElementById('wdg-container');
  if(c) c.style.gridTemplateColumns = 'repeat(' + n + ', 1fr)';
  applyWidgetSizes();
}

function applyWidgetSizes() {
  var sizes  = getWidgetSizes();
  var shapes = getWidgetShapes();
  var spans  = getWidgetSpans();
  var cols   = getGridCols();
  // Aggiorna griglia
  var c = document.getElementById('wdg-container');
  if(c) c.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';

  Object.keys(WIDGET_ID_MAP).forEach(function(k) {
    var el = document.getElementById(WIDGET_ID_MAP[k]);
    if(!el) return;
    // Dimensione
    el.classList.remove('wdg-size-s', 'wdg-size-m', 'wdg-size-l');
    el.classList.add('wdg-size-' + (sizes[k] || 'm'));
    // Forma
    el.classList.remove('wdg-shape-round', 'wdg-shape-default', 'wdg-shape-sharp');
    el.classList.add('wdg-shape-' + (shapes[k] || 'default'));
    // Span — clamp al numero di colonne disponibili
    var sp = spans[k] || {col:1, row:1};
    var colSpan = Math.min(sp.col || 1, cols);
    el.style.gridColumn = 'span ' + colSpan;
    el.style.gridRow    = 'span ' + (sp.row || 1);
  });
}

function cycleWidgetSize(key) {
  var cur = getWidgetSizes()[key] || 'm';
  saveWidgetSize(key, cur==='s'?'m':cur==='m'?'l':'s');
  applyWidgetSizes(); renderDopList();
  if(navigator.vibrate) navigator.vibrate(10);
}
function cycleWidgetShape(key) {
  var cur = getWidgetShapes()[key] || 'default';
  saveWidgetShape(key, cur==='round'?'default':cur==='default'?'sharp':'round');
  applyWidgetSizes(); renderDopList();
  if(navigator.vibrate) navigator.vibrate(10);
}
function cycleWidgetCol(key) {
  var sp = getWidgetSpans()[key] || {col:1,row:1};
  var cols = getGridCols();
  // Cicla: 1 → 2 → (3 se griglia a 3) → 1
  var maxCol = cols;
  sp.col = (sp.col || 1) >= maxCol ? 1 : (sp.col || 1) + 1;
  saveWidgetSpan(key, sp);
  applyWidgetSizes(); renderDopList();
  if(navigator.vibrate) navigator.vibrate(10);
}
function cycleWidgetRow(key) {
  var sp = getWidgetSpans()[key] || {col:1,row:1};
  sp.row = (sp.row || 1) >= 2 ? 1 : 2;
  saveWidgetSpan(key, sp);
  applyWidgetSizes(); renderDopList();
  if(navigator.vibrate) navigator.vibrate(10);
}

function applyWidgetOrder() {
  var order = getWidgetOrder();
  var container = document.getElementById('wdg-container');
  if (!container) return;
  order.forEach(function(k) {
    var el = document.getElementById(WIDGET_ID_MAP[k]);
    if (el) container.appendChild(el);
  });
  applyWidgetSizes();
}

function moveWidget(key, dir) {
  var order = getWidgetOrder();
  var idx = order.indexOf(key);
  if (idx < 0) return;
  var newIdx = idx + dir;
  if (newIdx < 0 || newIdx >= order.length) return;
  order.splice(idx, 1);
  order.splice(newIdx, 0, key);
  saveWidgetOrder(order);
  applyWidgetOrder();
  renderDopList();
}

function toggleDashOrganizza(btn) {
  var panel = document.getElementById('dash-organizza-panel');
  var isOpen = panel.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  if (isOpen) renderDopList();
}

function renderDopList() {
  var el = document.getElementById('dop-list');
  if (!el) return;
  var order  = getWidgetOrder();
  var cfg    = getWidgetCfg();
  var sizes  = getWidgetSizes();
  var spans  = getWidgetSpans();
  var cols   = getGridCols();

  // Selettore colonne griglia — bottoni visivi con SVG
  var gridHtml = '<div class="dop-grid-sel">'
    + '<span class="dop-grid-lbl">&#9783; Colonne griglia</span>'
    + [1,2,3].map(function(n){
        var rects = Array(n).fill(0).map(function(_,i){
          var w = Math.floor(26/n)-2;
          var x = 1 + i*(w+2);
          return '<rect x="'+x+'" y="2" width="'+w+'" height="12" rx="2" fill="currentColor"/>';
        }).join('');
        return '<button class="dop-grid-btn' + (cols===n?' active':'') + '" onclick="setGridCols('+n+')" title="'+n+' colonne">'
          + '<svg width="30" height="16" viewBox="0 0 30 16">'+rects+'</svg>'
          + '<span>'+n+'</span>'
          + '</button>';
      }).join('')
    + '</div>';

  // Lista widget — ogni riga ha 4 preset visivi
  var listHtml = order.map(function(k) {
    var on    = cfg[k];
    var label = WIDGET_DEF[k] ? WIDGET_DEF[k].label : k;
    var sp    = spans[k] || {col:1, row:1};
    var sz    = sizes[k] || 'm';

    // Preset: compatto / normale / largo / grande
    // Ogni preset è un mini-rettangolo SVG che mostra visivamente la forma
    var presets = [
      { id:'compact', col:1, row:1, size:'s',
        svg:'<rect x="1" y="4" width="12" height="8" rx="2" fill="currentColor"/>' },
      { id:'normal',  col:1, row:1, size:'m',
        svg:'<rect x="1" y="2" width="12" height="12" rx="2" fill="currentColor"/>' },
      { id:'wide',    col:Math.min(2,cols), row:1, size:'m',
        svg:'<rect x="1" y="4" width="22" height="8" rx="2" fill="currentColor"/>' },
      { id:'full',    col:cols, row:2, size:'l',
        svg:'<rect x="1" y="1" width="22" height="14" rx="2" fill="currentColor"/>' }
    ];

    var activePre = 'normal';
    if(sz==='s') activePre = 'compact';
    else if(sz==='l' && sp.row>=2) activePre = 'full';
    else if((sp.col||1)>=2) activePre = 'wide';

    var titles = { compact:'Compatto', normal:'Normale', wide:'Largo', full:'Grande' };

    return '<div class="dop-item" draggable="true" data-wid="' + k + '">'
      + '<span class="dop-handle">&#8801;</span>'
      + '<span class="dop-label">' + label + '</span>'
      + '<div class="dop-presets">'
      + presets.map(function(p){
          return '<button class="dop-preset-btn' + (activePre===p.id?' active':'') + '" '
            + 'title="' + titles[p.id] + '" '
            + 'onclick="applyWidgetPreset(\'' + k + '\',\'' + p.id + '\',' + p.col + ',' + p.row + ',\'' + p.size + '\')">'
            + '<svg width="26" height="16" viewBox="0 0 26 16">' + p.svg + '</svg>'
            + '</button>';
        }).join('')
      + '</div>'
      + '<button class="dop-toggle' + (on ? ' on' : '') + '" onclick="toggleWidgetDash(\'' + k + '\',this)"></button>'
      + '</div>';
  }).join('');

  el.innerHTML = gridHtml + listHtml;
  initDopDrag();
}

// Applica preset combinato (span + size) in un click
function applyWidgetPreset(key, presetId, col, row, size) {
  var cols = getGridCols();
  saveWidgetSpan(key, { col: Math.min(col, cols), row: row });
  saveWidgetSize(key, size);
  applyWidgetSizes();
  renderDopList();
  if(navigator.vibrate) navigator.vibrate(12);
}

function initDopDrag() {
  var items = document.querySelectorAll('#dop-list .dop-item');
  var dragSrc = null;
  items.forEach(function(item) {
    item.addEventListener('dragstart', function(e) {
      dragSrc = this; this.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });
    item.addEventListener('dragend', function() {
      this.classList.remove('dragging');
      document.querySelectorAll('#dop-list .dop-item').forEach(function(i){ i.classList.remove('drag-over'); });
    });
    item.addEventListener('dragover', function(e) {
      e.preventDefault();
      if (this !== dragSrc) {
        document.querySelectorAll('#dop-list .dop-item').forEach(function(i){ i.classList.remove('drag-over'); });
        this.classList.add('drag-over');
      }
    });
    item.addEventListener('drop', function(e) {
      e.preventDefault();
      if (!dragSrc || dragSrc === this) return;
      var srcKey = dragSrc.dataset.wid, dstKey = this.dataset.wid;
      var order = getWidgetOrder();
      var si = order.indexOf(srcKey), di = order.indexOf(dstKey);
      if (si < 0 || di < 0) return;
      order.splice(si, 1); order.splice(di, 0, srcKey);
      saveWidgetOrder(order); applyWidgetOrder(); renderDopList();
    });
    item.addEventListener('touchstart', function(e) {
      dragSrc = this; this.classList.add('dragging');
    }, {passive:true});
    item.addEventListener('touchmove', function(e) {
      e.preventDefault();
      var y = e.touches[0].clientY;
      var els = Array.from(document.querySelectorAll('#dop-list .dop-item'));
      els.forEach(function(i){ i.classList.remove('drag-over'); });
      var target = els.find(function(i) {
        if (i === dragSrc) return false;
        var r = i.getBoundingClientRect();
        return y >= r.top && y <= r.bottom;
      });
      if (target) target.classList.add('drag-over');
    }, {passive:false});
    item.addEventListener('touchend', function() {
      this.classList.remove('dragging');
      var target = document.querySelector('#dop-list .dop-item.drag-over');
      if (target && dragSrc && target !== dragSrc) {
        var srcKey = dragSrc.dataset.wid, dstKey = target.dataset.wid;
        var order = getWidgetOrder();
        var si = order.indexOf(srcKey), di = order.indexOf(dstKey);
        if (si >= 0 && di >= 0) {
          order.splice(si, 1); order.splice(di, 0, srcKey);
          saveWidgetOrder(order); applyWidgetOrder(); renderDopList();
        }
      }
      document.querySelectorAll('#dop-list .dop-item').forEach(function(i){ i.classList.remove('drag-over'); });
      dragSrc = null;
    });
  });
}


/* ---------- RENDER DASHBOARD CENTRALE ---------- */
function renderDash() {
  var me = lsG("ct_me", null);
  if (!me) return;
  _syncMyPid();
  // Skeleton durante sync Firebase
  if(window._widgetSyncPending) skeletonDash();
  var cfg = getWidgetCfg();
  aggiornaWidget();
  aggiornaHeroCard();
  aggiornaSquadra();
  renderWidgetMeteo(me); // meteo sempre — popola la Hero Card
  if (cfg.prossimo)        renderWidgetProssimo(me);
  if (cfg.alert)           renderWidgetAlert();
  if (cfg.scadenze)        renderWidgetScadenze();
  if (cfg.agenda)          renderWidgetAgenda();
  if (cfg.todo)            renderWidgetTodo();
  if (cfg.settimana)       renderWidgetSettimana(me);  // Hero Card aggiornata ogni minuto per l'Active Ring
  if(window._heroRingTimer) clearInterval(window._heroRingTimer);
  window._heroRingTimer = setInterval(aggiornaHeroCard, 60000);
  var map = {
    'squadra-turni':'widget-squadra-turni', settimana:'widget-settimana',
    prossimo:'widget-prossimo', alert:'widget-alert', scadenze:'widget-scadenze',
    agenda:'widget-agenda', todo:'widget-todo', dino:'widget-dino-dash', squadra:'widget-squadra'
  };
  Object.keys(map).forEach(function(k) {
    var el = document.getElementById(map[k]);
    if (!el) return;
    if (!cfg[k]) { el.style.display = "none"; return; }
    if (k !== "turno") el.style.display = "block";
  });
  // Dino: mostra solo se abilitato E sulla home
  var dinoCfg = cfg['dino'];
  var dinoEl = document.getElementById('widget-dino-dash');
  if(dinoEl) dinoEl.style.display = dinoCfg ? '' : 'none';
  applyWidgetOrder();
  renderDashWidgetToggles();
  var panel = document.getElementById('dash-organizza-panel');
  if (panel && panel.classList.contains('open')) renderDopList();
  // Effetti premium — avvia dopo che il DOM è aggiornato
  setTimeout(initPremiumEffects, 50);
}

/* ---------- WIDGET PROSSIMO TURNO ---------- */
function renderWidgetProssimo(me) {
  var el = document.getElementById('widget-prossimo');
  if (!el) return;
  var oggi = _oggi();
  var T = lsG('ct_t', []);
  var futuri = T.filter(function(t){
    return _isMyTurno(t, me) && t.data > oggi && !['riposo','ferie','recupero'].includes(t.tipo);
  });
  futuri.sort(function(a,b){ return a.data > b.data ? 1 : -1; });
  var wp = document.getElementById('wp-tipo');
  var wd = document.getElementById('wp-data');
  var wg = document.getElementById('wp-giorni');
  if (!futuri.length) {
    if (wp) wp.textContent = 'Nessun turno in programma';
    if (wd) wd.textContent = '';
    if (wg) wg.textContent = '';
    return;
  }
  var pross = futuri[0];
  var tipoLabel = {mattina:"&#9728; Mattina",pomeriggio:"&#9728; Pomeriggio",notte:"&#127769; Notte",corso:"&#127891; Corso",permesso:"&#128203; Permesso"};
  var d = new Date(pross.data + 'T00:00:00');
  var now = new Date(); now.setHours(0,0,0,0);
  var diff = Math.round((d - now) / 86400000);
  var mN = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];
  if (wp) wp.innerHTML = tipoLabel[pross.tipo] || pross.tipo;
  if (wd) wd.textContent = d.getDate() + ' ' + mN[d.getMonth()] + ' ' + d.getFullYear() + (pross.orario ? '  ' + pross.orario : '');
  if (wg) wg.textContent = diff;
}

/* ---------- WIDGET SETTIMANA ---------- */
function renderWidgetSettimana(me) {
  var el = document.getElementById('w-settimana-list');
  if(!el) return;
  if(!me) { el.innerHTML = ''; return; }

  var now = new Date();
  // Lunedì della settimana corrente
  var lun = new Date(now);
  lun.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  lun.setHours(0,0,0,0);

  var T = lsG('ct_t', []);
  var giorniNomi = ['Lun','Mar','Mer','Gio','Ven','Sab','Dom'];
  var colori = {
    mattina:'#FF8C00', ml:'#FF8C00',
    pomeriggio:'#E91E63', pl:'#E91E63',
    notte:'#1565C0', sera:'#1565C0',
    riposo:'#37474F', recupero:'#37474F',
    ferie:'#00897B', licenza:'#00897B',
    permesso:'#7B1FA2', '937':'#7B1FA2', '104':'#7B1FA2',
    ls:'#C62828', fest:'#F57F17', corso:'#1976D2', esame:'#1976D2'
  };

  var html = '<div class="wdg-settimana-grid">';
  for(var i = 0; i < 7; i++) {
    var giorno = new Date(lun);
    giorno.setDate(lun.getDate() + i);
    var ds = giorno.getFullYear()+'-'+('0'+(giorno.getMonth()+1)).slice(-2)+'-'+('0'+giorno.getDate()).slice(-2);
    var isOggi = ds === (now.getFullYear()+'-'+('0'+(now.getMonth()+1)).slice(-2)+'-'+('0'+now.getDate()).slice(-2));
    var mioT = T.find(function(t){ return _isMyTurno(t, me) && t.data === ds; });
    var tipo = mioT ? (_codiceToTipo[mioT.codice] || mioT.tipo || 'riposo') : 'riposo';
    var sigla = mioT ? (mioT.codice || (_TURNO_SIGLA[tipo] || tipo.slice(0,2).toUpperCase())) : 'R';
    var col = colori[tipo] || '#37474F';
    var orario = mioT && mioT.orario ? mioT.orario.replace('-','\n') : '';

    html += '<div class="wdg-sett-day' + (isOggi ? ' wdg-sett-oggi' : '') + '">';
    html += '<div class="wdg-sett-nome">' + giorniNomi[i] + '</div>';
    html += '<div class="wdg-sett-num' + (isOggi ? ' wdg-sett-num-oggi' : '') + '">' + giorno.getDate() + '</div>';
    html += '<div class="wdg-sett-chip" style="background:' + col + '22;color:' + col + ';border:1px solid ' + col + '55">' + sigla + '</div>';
    if(orario) html += '<div class="wdg-sett-ora">' + orario + '</div>';
    html += '</div>';
  }
  html += '</div>';
  el.innerHTML = html;
}

/* ---------- WIDGET METEO ---------- */
var _meteoCache = null;
function renderWidgetMeteo(me){
  // Usa città configurata dall'utente, altrimenti deriva dal reparto
  var cittaCustom = lsG('ct_meteo_citta', null);
  var query;
  if(cittaCustom && cittaCustom.trim()) {
    query = cittaCustom.trim().toLowerCase();
  } else {
    var reparto=(me.reparto||'').toLowerCase().trim();
    var SKIP=['stazione','compagnia','reparto','nucleo','distaccamento','comando','gruppo','sezione','centro','di','della','del','dei'];
    var parole=reparto.split(/[\s,]+/).filter(function(p){return p.length>2&&SKIP.indexOf(p)<0;});
    query=parole[0]||reparto.split(' ')[0]||'roma';
  }

  var cacheKey='ct_meteo_'+query;
  var cached=lsG(cacheKey,null);
  if(cached&&cached.ts&&(Date.now()-cached.ts<1800000)){
    _aggiornaUIMeteo(cached.data);
    var cEl=document.getElementById('wm-citta');
    if(cEl)cEl.textContent=cached.citta;
    var heroCitta=document.getElementById('hero-meteo-citta');
    if(heroCitta)heroCitta.textContent=cached.citta||'';
    return;
  }

  var geoUrl='https://geocoding-api.open-meteo.com/v1/search?name='
    +encodeURIComponent(query)+'&count=1&language=it&countryCode=IT';

  fetch(geoUrl).then(function(r){return r.json();}).then(function(geo){
    if(!geo.results||!geo.results.length)throw new Error('citta non trovata');
    var loc=geo.results[0];
    var lat=loc.latitude,lon=loc.longitude,nomeCitta=loc.name;
    // Aggiorna città nel widget e nella Hero Card
    var cEl=document.getElementById('wm-citta');
    if(cEl)cEl.textContent=nomeCitta;
    var heroCitta=document.getElementById('hero-meteo-citta');
    if(heroCitta)heroCitta.textContent=nomeCitta;
    var meteoUrl='https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lon
      +'&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&wind_speed_unit=kmh&timezone=Europe%2FRome';
    return fetch(meteoUrl).then(function(r){return r.json();}).then(function(data){
      lsS(cacheKey,{ts:Date.now(),data:data,citta:nomeCitta});
      _aggiornaUIMeteo(data);
    });
  }).catch(function(){
    var el=document.getElementById('wm-desc');
    if(el)el.textContent='Meteo non disponibile';
    var heroDesc=document.getElementById('hero-meteo-desc');
    if(heroDesc)heroDesc.textContent='—';
  });
}

function _aggiornaUIMeteo(data) {
  var c = data.current;
  var wc = c.weather_code;
  var icoHtml = METEO_WMO[wc] || '<span class="meteo-cloud">🌤️</span>';
  var temp = Math.round(c.temperature_2m) + '°C';
  var desc = METEO_DESC[wc] || '';
  var umi  = c.relative_humidity_2m;
  var vento = Math.round(c.wind_speed_10m);

  // Widget meteo separato (se visibile)
  var icoEl = document.getElementById('wm-ico');
  if(icoEl) icoEl.innerHTML = icoHtml;
  var tempEl = document.getElementById('wm-temp'); if(tempEl) tempEl.textContent = temp;
  var descEl = document.getElementById('wm-desc'); if(descEl) descEl.textContent = desc;
  var umiEl  = document.getElementById('wm-umi');  if(umiEl)  umiEl.textContent  = umi;
  var ventoEl= document.getElementById('wm-vento');if(ventoEl)ventoEl.textContent= vento;

  // Hero Card — meteo compatto
  var heroIco  = document.getElementById('hero-meteo-ico');
  var heroTemp = document.getElementById('hero-meteo-temp');
  var heroDesc = document.getElementById('hero-meteo-desc');
  var heroUmi  = document.getElementById('hero-meteo-umi');
  var heroVento= document.getElementById('hero-meteo-vento');
  // Estrai solo l'emoji dall'html dell'icona
  var icoText = icoHtml.replace(/<[^>]+>/g,'').trim() || '🌤️';
  if(heroIco)   heroIco.textContent  = icoText;
  if(heroTemp)  heroTemp.textContent = temp;
  if(heroDesc)  heroDesc.textContent = desc;
  if(heroUmi)   heroUmi.textContent  = umi;
  if(heroVento) heroVento.textContent= vento;
}

function salvaMeteoCity() {
  var el = document.getElementById('imp-meteo-citta');
  if(!el) return;
  var citta = el.value.trim();
  lsS('ct_meteo_citta', citta);
  // Salva su Firebase nel profilo utente
  var me = lsG('ct_me', null);
  if(me) {
    me.meteoCitta = citta;
    lsS('ct_me', me);
    if(window.FirebaseModule) {
      var session = lsG('ct_session', null);
      var uid = session && session.userId ? session.userId : null;
      if(uid) {
        window.FirebaseModule.saveUserProfile(uid, me, me.reparto).catch(function(e){ console.warn('salvaMeteoCity:', e.message); });
        window.FirebaseModule.savePersonale().catch(function(e){});
      }
    }
  }
  // Invalida cache e ricarica meteo
  localStorage.removeItem('ct_meteo_' + citta.toLowerCase());
  var me2 = lsG('ct_me', null);
  if(me2) renderWidgetMeteo(me2);
  toast('Città meteo salvata: ' + (citta || 'automatica'), 'ok');
}

function aggiornaPreviewMeteo(val) {
  var el = document.getElementById('imp-meteo-preview');
  if(el) el.textContent = val ? 'Meteo per: ' + val : 'Lascia vuoto per usare il reparto';
}

function caricaImpostazioniMeteo() {
  var citta = lsG('ct_meteo_citta', null);
  // Prova anche da profilo Firebase
  var me = lsG('ct_me', null);
  if(!citta && me && me.meteoCitta) citta = me.meteoCitta;
  var el = document.getElementById('imp-meteo-citta');
  if(el && citta) { el.value = citta; aggiornaPreviewMeteo(citta); }
}

/* ---------- WIDGET ALERT ---------- */
function renderWidgetAlert() {
  var me = lsG('ct_me', null); if (!me) return;
  var ALERTS = lsG('ct_alerts', []);
  var oggi = new Date().toISOString().slice(0,10);
  // Filtra: solo attivi (nessuna data fine, o data fine >= oggi)
  var attivi = ALERTS.filter(function(a){ return !a.fine || a.fine >= oggi; });
  var el = document.getElementById('widget-alert');
  var list = document.getElementById('wale-list');
  if (!attivi.length) { if (el) el.style.display = 'none'; return; }
  if (el) el.style.display = 'block';
  var tipoIco = { info:"&#8505;", warn:"&#9888;", danger:"&#128680;" };
  if (list) list.innerHTML = attivi.slice(0,3).map(function(a){
    return '<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">'
      + '<span style="font-size:16px">' + (tipoIco[a.tipo]||'&#128197;') + '</span>'
      + '<span style="font-size:12px;color:var(--txt);flex:1">' + a.msg + '</span>'
      + '<button onclick="delAlert(' + a.id + ')" style="background:none;border:none;color:var(--txt3);font-size:14px;cursor:pointer;padding:0;appearance:none;-webkit-appearance:none">&#128465;</button></div>';
  }).join('');
  // Aggiorna lista nel modale
  var alLista = document.getElementById('al-lista');
  if (alLista) alLista.innerHTML = attivi.length
    ? attivi.map(function(a){
        return '<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid var(--border)">'
          + '<span>' + (tipoIco[a.tipo]||'&#128197;') + '</span>'
          + '<span style="flex:1;font-size:12px">' + a.msg + (a.fine ? ' <span style="color:var(--txt2);font-size:10px">fino ' + a.fine + '</span>' : '') + '</span>'
          + '<button onclick="delAlert(' + a.id + ');renderWidgetAlert()" style="background:none;border:none;color:var(--red);font-size:13px;cursor:pointer;appearance:none;-webkit-appearance:none">&#128465;</button></div>';
      }).join('')
    : '<div style="font-size:12px;color:var(--txt2)">Nessuno</div>';
}

function salvaAlert() {
  var msg = document.getElementById('al-msg').value.trim();
  var err = document.getElementById('alert-err');
  err.classList.remove('on');
  if (!msg) { err.classList.add('on'); return; }
  var ALERTS = lsG('ct_alerts', []);
  ALERTS.push({ id: Date.now(), msg: msg, tipo: document.getElementById('al-tipo').value,
    fine: document.getElementById('al-fine').value || null, ts: Date.now() });
  lsS('ct_alerts', ALERTS);
  document.getElementById('al-msg').value = '';
  document.getElementById('al-fine').value = '';
  renderWidgetAlert();
  toast('Alert aggiunto', 'ok');
}

function delAlert(id) {
  lsS('ct_alerts', lsG('ct_alerts', []).filter(function(a){ return a.id !== id; }));
  renderWidgetAlert();
}

/* ---------- WIDGET SCADENZE ---------- */
function renderWidgetScadenze() {
  var el = document.getElementById('wsc-list');
  if (!el) return;
  var oggi = new Date().toISOString().slice(0,10);
  var SC = lsG('ct_scadenze', []).filter(function(s){ return s.data >= oggi; });
  SC.sort(function(a,b){ return a.data > b.data ? 1 : -1; });
  if (!SC.length) { el.innerHTML = emptyState('scadenze'); return; }
  var now = new Date(); now.setHours(0,0,0,0);
  el.innerHTML = SC.slice(0,4).map(function(s){
    var d = new Date(s.data + 'T00:00:00');
    var diff = Math.round((d - now) / 86400000);
    var col = diff <= 7 ? 'var(--red)' : diff <= 30 ? 'var(--gold)' : 'var(--txt2)';
    var badge = diff <= 7 ? '<span style="background:var(--red);color:#fff;font-size:9px;font-weight:700;padding:1px 6px;border-radius:20px;margin-left:6px">&#9888; ' + diff + 'gg</span>' : '';
    return '<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border)">'
      +'<div style="flex:1;min-width:0"><div style="font-size:12px;font-weight:700;color:var(--txt)">' + s.tit + badge + '</div>'
      + '<div style="font-size:10px;color:' + col + ';margin-top:2px">&#128197; ' + s.data + (diff === 0 ? ' oggi!' : diff === 1 ? ' domani!' : ' tra ' + diff + ' gg') + '</div></div>'
      + '<button onclick="delScadenza(' + s.id + ')" style="background:none;border:none;color:var(--txt3);font-size:14px;cursor:pointer;padding:0;appearance:none;-webkit-appearance:none;flex-shrink:0">&#128465;</button></div>';
  }).join('');
}

function salvaScadenza() {
  var tit = document.getElementById('sc-tit').value.trim();
  var data = document.getElementById('sc-data').value;
  var err = document.getElementById('scad-err');
  err.classList.remove('on');
  if (!tit || !data) { err.classList.add('on'); return; }
  var ora = document.getElementById('sc-ora').value;
  var item = { id: Date.now(), tit: tit, data: data, ora: ora, note: document.getElementById('sc-note').value.trim() };
  var SC = lsG('ct_scadenze', []);
  SC.push(item);
  lsS('ct_scadenze', SC);
  // Schedula notifica browser precisa
  if (ora) _schedulaNotifPrecisa('⏰ Scadenza: ' + tit, data, ora);
  ['sc-tit','sc-data','sc-ora','sc-note'].forEach(function(id){ var e = document.getElementById(id); if(e) e.value = ''; });
  closeM('m-scadenza');
  renderWidgetScadenze();
  toast('Scadenza salvata', 'ok');
}

function delScadenza(id) {
  lsS('ct_scadenze', lsG('ct_scadenze', []).filter(function(s){ return s.id !== id; }));
  renderWidgetScadenze();
}

/* ---------- WIDGET AGENDA OGGI ---------- */
function renderWidgetAgenda() {
  var el = document.getElementById('wag-list');
  if (!el) return;
  var oggi = new Date().toISOString().slice(0,10);
  var AG = lsG('ct_ag', []).filter(function(a){ return a.data === oggi; });
  if (!AG.length) { el.innerHTML = emptyState('agenda'); return; }
  el.innerHTML = AG.map(function(a){
    var mapsLink = a.luogo
      ? ' <a href="https://www.google.com/maps/search/' + encodeURIComponent(a.luogo) + '" target="_blank" style="font-size:10px;color:var(--blue);text-decoration:none">&#128205; Maps</a>'
      : '';
    return '<div style="padding:6px 0;border-bottom:1px solid var(--border)">'
      + '<div style="font-size:12px;font-weight:700;color:var(--txt)">' + a.tit + (a.ora ? ' <span style="color:var(--blue);font-size:11px">&#9201; ' + a.ora + '</span>' : '') + '</div>'
      + (a.luogo ? '<div style="font-size:11px;color:var(--txt2);margin-top:2px">&#128205; ' + a.luogo + mapsLink + '</div>' : '') + '</div>';
  }).join('');
}

function vaiAgenda() { closeM('m-agenda'); document.querySelectorAll('.nv').forEach(function(b){ b.classList.remove('on'); }); vaiAgendaPage(); }
function vaiAgendaPage() {
  vaiBN('cal', 2);
  setTimeout(function(){ calTab('agenda'); }, 50);
}
function vaiTodo() {
  vaiBN('cal', 2);
  setTimeout(function(){ calTab('todo'); }, 50);
}

/* ---------- WIDGET TODO ---------- */
function renderWidgetTodo() {
  var el = document.getElementById('wtd-list');
  if (!el) return;
  var TD = lsG('ct_td', []).filter(function(t){ return !t.done; });
  TD.sort(function(a,b){ var p={alta:0,media:1,bassa:2}; return (p[a.prio]||1)-(p[b.prio]||1); });
  if (!TD.length) { el.innerHTML = emptyState('todo'); return; }
  var pLbl = {alta:'&#128308; Alta',media:'&#128993; Media',bassa:'&#128994; Bassa'};
  el.innerHTML = TD.slice(0,3).map(function(t){
    return '<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border)">'
      + '<button onclick="toggleTodo(' + t.id + ');renderWidgetTodo()" style="width:22px;height:22px;border-radius:50%;border:2px solid var(--border);background:none;cursor:pointer;appearance:none;-webkit-appearance:none;flex-shrink:0"></button>'
      +'<div style="flex:1;min-width:0"><div style="font-size:12px;font-weight:700;color:var(--txt)">' + t.tit + '</div>'
      + '<span style="font-size:9px;color:var(--txt2)">' + (pLbl[t.prio]||'') + (t.data ? ' &#128197; ' + t.data + (t.ora ? ' &#9201; ' + t.ora : '') : '') + '</span></div></div>';
  }).join('');
}

/* ---------- WIDGET STATISTICHE ---------- */
function renderWidgetStats(me) {
  var T = lsG('ct_t', []).filter(function(t){ return t.pid === me.id; });
  var now = new Date(); now.setHours(0,0,0,0);
  var OPERATIVI = ['mattina','pomeriggio','notte'];
  var ORE = { mattina:8, pomeriggio:8, notte:8 };

  // % presenze settimana (lun-dom corrente)
  var dow = now.getDay() || 7; // 1=lun..7=dom
  var lunedi = new Date(now); lunedi.setDate(now.getDate() - dow + 1);
  var giorni7 = [];
  for (var i=0;i<7;i++){ var d=new Date(lunedi); d.setDate(lunedi.getDate()+i); giorni7.push(d.toISOString().slice(0,10)); }
  var presSettimana = T.filter(function(t){ return giorni7.indexOf(t.data)>=0 && OPERATIVI.indexOf(t.tipo)>=0; }).length;
  var percSett = Math.round(presSettimana / 7 * 100);

  // % presenze mese corrente
  var anno = now.getFullYear(), mese = now.getMonth();
  var giorniMese = new Date(anno, mese+1, 0).getDate();
  var presMese = T.filter(function(t){
    var d = new Date(t.data+'T00:00:00');
    return d.getFullYear()===anno && d.getMonth()===mese && OPERATIVI.indexOf(t.tipo)>=0;
  }).length;
  var percMese = Math.round(presMese / giorniMese * 100);

  // Ore medie turno
  var operT = T.filter(function(t){ return OPERATIVI.indexOf(t.tipo)>=0; });
  var mediaOre = operT.length ? (operT.reduce(function(s,t){ return s + (ORE[t.tipo]||8); },0) / operT.length).toFixed(1) : '';

  var wss = document.getElementById('wst-sett');
  var wsm = document.getElementById('wst-mese');
  var wso = document.getElementById('wst-ore');
  if (wss) wss.textContent = percSett + '%';
  if (wsm) wsm.textContent = percMese + '%';
  if (wso) wso.textContent = mediaOre;
}

/* ---------- TOGGLES WIDGET IN IMPOSTAZIONI ---------- */
function renderDashWidgetToggles() {
  var el = document.getElementById('dash-widget-toggles');
  if (!el) return;
  var cfg = getWidgetCfg();
  el.innerHTML = Object.keys(WIDGET_DEF).map(function(k, i) {
    var on = cfg[k];
    return '<div class="imp-row"' + (i>0?' style="border-top:1px solid var(--border)"':'') + '>'
      + '<div class="imp-row-ico" style="background:rgba(41,121,255,.1)">' + WIDGET_DEF[k].label.split(' ')[0] + '</div>'
      + '<div class="imp-row-body"><div class="imp-row-title">' + WIDGET_DEF[k].label + '</div></div>'
      + '<button class="imp-toggle' + (on?' on':'') + '" onclick="toggleWidgetDash(\'' + k + '\',this)"></button></div>';
  }).join('');
}

function toggleWidgetDash(k, btn) {
  var cfg = getWidgetCfg();
  cfg[k] = !cfg[k];
  lsS('ct_dash_widgets', cfg);
  btn.classList.toggle('on', cfg[k]);
  // Sincronizza dino con ct_prefs
  if(k === 'dino') {
    var prefs = lsG('ct_prefs', {});
    prefs.dino = cfg[k];
    lsS('ct_prefs', prefs);
    var tog = document.getElementById('tog-dino');
    if(tog) tog.checked = cfg[k];
    if(cfg[k]) {
      if(typeof window._updateDinoVisibility === 'function') window._updateDinoVisibility();
      if(typeof window.initDinoGame === 'function') setTimeout(window.initDinoGame, 200);
    } else {
      var w = document.getElementById('widget-dino-dash');
      if(w) w.style.display = 'none';
    }
  }
  renderDash();
}

/* ---------- NOTIFICA BROWSER PRECISA (sveglia) ---------- */
function _schedulaNotifPrecisa(titolo, data, ora) {
  var dt = new Date(data + 'T' + ora + ':00');
  var ms = dt - Date.now();
  if (ms <= 0) return;
  // Schedula push FCM subito con orario preciso
  var sess=lsG("ct_session",null);
  if(sess&&sess.userId&&window.FirebaseModule)
    window.FirebaseModule.schedulePush(sess.userId,titolo,'\u23F0 Promemoria C-Turni',dt.toISOString()).catch(function(){});
  // Notifica locale se app aperta
  if('Notification' in window && Notification.permission==='granted'){
    setTimeout(function(){
      new Notification(titolo, { body: '\u23F0 Promemoria C-Turni', icon: _NOTIF_ICON });
    }, Math.min(ms, 2147483647));
  }
}

/* ---------- SALVA TODO con sveglia ---------- */
// Estendi salvaTodo per supportare reset campo ora dopo salvataggio
var _origSalvaTodo = salvaTodo;
salvaTodo = function() {
  var oraEl = document.getElementById('td-ora');
  _origSalvaTodo();
  if (oraEl) oraEl.value = '';
};

/* ---------- MODIFICA ORARIO TURNO ---------- */
function apriModTurno(id) {
  var T = lsG('ct_t', []);
  var t = T.find(function(x){ return x.id === id; });
  if (!t) return;
  document.getElementById('mmt-id').value = id;
  // Imposta tipo via button grid
  var tipo = t.tipo || 'mattina';
  document.getElementById('mmt-tipo').value = tipo;
  // Evidenzia il bottone corretto
  document.querySelectorAll('#m-mod-turno .btn-turno-r').forEach(function(b){ b.classList.remove('sel'); });
  // Mappa tipo → codice bottone
  var tipoMap = {mattina:'M',ml:'ML',pomeriggio:'P',pl:'PL',notte:'N',sera:'S',riposo:'R',recupero:'RR',ferie:'L','104':'104','937':'937',licenza:'LICSTU',esame:'ESAME',ls:'LS',fest:'FEST',permesso:'PERM',corso:'CORSO'};
  var cod = tipoMap[tipo];
  if(cod) {
    document.querySelectorAll('#m-mod-turno .btn-turno-r').forEach(function(b){
      if(b.textContent.trim() === cod) b.classList.add('sel');
    });
  }
  // Imposta orario
  var orario = t.orario || '';
  var parts = orario.split('-');
  var oraIn = parts[0] ? parts[0].trim() : '';
  var oraFi = parts[1] ? parts[1].trim() : '';
  // Se vuoto, usa preset
  if(!oraIn || !oraFi) {
    var preset = getOrariPreset()[tipo === 'ml' ? 'ml' : tipo === 'pl' ? 'pl' : tipo];
    if(preset) { oraIn = preset.in; oraFi = preset.out; }
  }
  var inHid = document.getElementById('mmt-ora-in');
  var fiHid = document.getElementById('mmt-ora-fi');
  var inLbl = document.getElementById('mmt-ora-in-btn-lbl');
  var fiLbl = document.getElementById('mmt-ora-fi-btn-lbl');
  if(inHid) inHid.value = oraIn;
  if(fiHid) fiHid.value = oraFi;
  if(inLbl) { inLbl.textContent = oraIn || 'Inizio'; inLbl.style.color = oraIn ? 'var(--txt)' : 'var(--txt2)'; }
  if(fiLbl) { fiLbl.textContent = oraFi || 'Fine'; fiLbl.style.color = oraFi ? 'var(--txt)' : 'var(--txt2)'; }
  document.getElementById('mmt-note').value = t.note || '';
  openM('m-mod-turno');
}

// Seleziona tipo turno nel modal modifica
function setModTurnoTipo(tipo, codice, btn) {
  document.getElementById('mmt-tipo').value = tipo;
  document.querySelectorAll('#m-mod-turno .btn-turno-r').forEach(function(b){ b.classList.remove('sel'); });
  if(btn) btn.classList.add('sel');
  // Aggiorna orario con preset se i campi sono vuoti
  var inHid = document.getElementById('mmt-ora-in');
  var fiHid = document.getElementById('mmt-ora-fi');
  var inLbl = document.getElementById('mmt-ora-in-btn-lbl');
  var fiLbl = document.getElementById('mmt-ora-fi-btn-lbl');
  if(inHid && !inHid.value) {
    var preset = getOrariPreset()[tipo === 'ml' ? 'ml' : tipo === 'pl' ? 'pl' : tipo];
    if(preset) {
      inHid.value = preset.in; fiHid.value = preset.out;
      if(inLbl) { inLbl.textContent = preset.in; inLbl.style.color = 'var(--txt)'; }
      if(fiLbl) { fiLbl.textContent = preset.out; fiLbl.style.color = 'var(--txt)'; }
    }
  }
}

function salvaModTurno() {
  var id = parseInt(document.getElementById('mmt-id').value);
  var T = lsG('ct_t', []);
  var oraIn = (document.getElementById('mmt-ora-in')||{}).value || '';
  var oraFi = (document.getElementById('mmt-ora-fi')||{}).value || '';
  var orario = (oraIn && oraFi) ? oraIn + '-' + oraFi : '';
  for (var i=0; i<T.length; i++) {
    if (T[i].id === id) {
      T[i].tipo = document.getElementById('mmt-tipo').value;
      T[i].orario = orario;
      T[i].note = document.getElementById('mmt-note').value.trim();
      break;
    }
  }
  lsS('ct_t', T);
  if(window.FirebaseModule) window.FirebaseModule.saveTurni(T);
  closeM('m-mod-turno');
  renderTurni(); aggiornaWidget(); renderDash(); renderOggi();
  if(typeof renderCal === 'function') renderCal();
  toast('Turno aggiornato', 'ok');
}

// Aggiorna hint orario nel modal modifica turno
function aggOraMod(tipo) {
  var o = getOrariPreset();
  var k = tipo === 'ml' ? 'ml' : tipo === 'pl' ? 'pl' : tipo;
  var preset = o[k];
  var hint = document.getElementById('mmt-orario-hint');
  if(hint) hint.textContent = preset ? '(preset: ' + preset.in + '–' + preset.out + ')' : '';
  // Se l'orario è vuoto, precompila con il preset
  var orEl = document.getElementById('mmt-orario');
  if(orEl && !orEl.value && preset) orEl.value = preset.in + '-' + preset.out;
}

function eliminaTurnoMod() {
  var id = parseInt(document.getElementById('mmt-id').value);
  if(!id) return;
  ctConfirm('Eliminare questo turno?', {title:'Elimina Turno', ico:'📅', ok:'Elimina', danger:true}).then(function(ok){
    if(!ok) return;
    var T = lsG('ct_t', []).filter(function(x){ return x.id !== id; });
    lsS('ct_t', T);
    if(window.FirebaseModule) window.FirebaseModule.deleteTurno(id);
    closeM('m-mod-turno');
    renderTurni(); aggiornaWidget(); renderDash(); renderOggi(); stats();
    toast('Turno eliminato', 'ok');
  });
}

/* ---------- FESTIVIT SOPPRESSE ---------- */
function renderFestSopp() {
  var el = document.getElementById('fest-sopp-list');
  var nEl = document.getElementById('fest-sopp-n');
  if (!el) return;
  var me = lsG('ct_me', null); if (!me) return;
  var anno = new Date().getFullYear();
  var FS = lsG('ct_fest_sopp', []).filter(function(f){ return f.uid === me.id && f.anno === anno; });
  var usate = FS.filter(function(f){ return f.usato; }).length;
  var rimaste = 4 - usate;
  if (nEl) { nEl.textContent = rimaste; nEl.style.color = rimaste <= 0 ? 'var(--red)' : 'var(--teal)'; }
  if (!FS.length) { el.innerHTML = '<div style="font-size:11px;color:var(--txt2)">Nessuna fruizione registrata (' + anno + ')</div>'; return; }
  el.innerHTML = FS.map(function(f){
    return '<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border)">'
      + '<button onclick="toggleFestSopp(' + f.id + ')" style="width:20px;height:20px;border-radius:50%;border:2px solid var(--' + (f.usato?'green':'border') + ');background:' + (f.usato?'var(--green)':'none') + ';cursor:pointer;appearance:none;-webkit-appearance:none;flex-shrink:0"></button>'
      + '<div style="flex:1;font-size:12px;color:var(--txt)">' + f.data + (f.nota ? '  ' + f.nota : '') + '</div>'
      + '<button onclick="delFestSopp(' + f.id + ')" style="background:none;border:none;color:var(--txt3);font-size:13px;cursor:pointer;appearance:none;-webkit-appearance:none">&#128465;</button></div>';
  }).join('');
}

function aggFestSopp() {
  var me = lsG('ct_me', null); if (!me) return;
  var anno = new Date().getFullYear();
  var FS = lsG('ct_fest_sopp', []);
  var usate = FS.filter(function(f){ return f.uid === me.id && f.anno === anno && f.usato; }).length;
  if (usate >= 4) { toast('Hai gi usato tutte e 4 le festivit soppresse per il ' + anno, 'err'); return; }
  var oggi = new Date().toISOString().slice(0,10);
  FS.push({ id: Date.now(), uid: me.id, anno: anno, data: oggi, nota: '', usato: false });
  lsS('ct_fest_sopp', FS);
  renderFestSopp();
  toast('Festivit soppressa aggiunta', 'ok');
}

function toggleFestSopp(id) {
  var FS = lsG('ct_fest_sopp', []);
  for (var i=0;i<FS.length;i++){ if(FS[i].id===id){ FS[i].usato=!FS[i].usato; break; } }
  lsS('ct_fest_sopp', FS);
  renderFestSopp();
}

function delFestSopp(id) {
  lsS('ct_fest_sopp', lsG('ct_fest_sopp', []).filter(function(f){ return f.id !== id; }));
  renderFestSopp();
}

/* ---------- GERARCHIA: APPROVAZIONE PERSONALE ---------- */
// Estendi renderPers per mostrare i pending e il tasto approva/rifiuta
var _origRenderPers = renderPers;
renderPers = function() {
  _origRenderPers();
  var me = lsG('ct_me', null); if (!me) return;
  var isCom = (me.ruolo === 'comandante' || me.ruolo === 'vice') && (me.stato === 'attivo' || me.stato === 'approved' || me.stato === 'approvato');
  if (!isCom) return;
  var U = lsG('ct_u', []);
  var pending = U.filter(function(u){ return u.reparto && u.reparto.toLowerCase() === (me.reparto||'').toLowerCase() && (u.stato === 'pending' || u.stato === 'pending_com'); });
  if (!pending.length) return;
  var cont = document.getElementById('tb-pers');
  if (!cont) return;
  var header = '<tr style="background:rgba(255,180,0,.08)"><td colspan="8" style="font-size:11px;font-weight:700;color:var(--gold);padding:8px 10px">? In attesa di approvazione (' + pending.length + ')</td></tr>';
  var rows = pending.map(function(u){
    return '<tr style="opacity:.75">'
      + '<td>' + u.nome + '</td><td>' + u.grado + '</td><td></td><td>' + (u.reparto||'') + '</td>'
      + '<td><span style="background:rgba(255,180,0,.15);color:var(--gold);padding:2px 8px;border-radius:20px;font-size:10px;font-weight:700">' + (u.stato==='pending_com'?'&#9203; Com. richiesto':'? Pending') + '</span></td>'
      + '<td colspan="3" style="text-align:right">'
      + '<button onclick="approvaUtente(' + u.id + ')" style="background:rgba(0,200,83,.15);color:var(--green);border:1px solid rgba(0,200,83,.3);border-radius:8px;padding:4px 10px;font-size:11px;cursor:pointer;appearance:none;-webkit-appearance:none;margin-right:4px">? Approva</button>'
      + '<button onclick="rifiutaUtente(' + u.id + ')" style="background:rgba(200,16,46,.1);color:var(--red);border:1px solid rgba(200,16,46,.3);border-radius:8px;padding:4px 10px;font-size:11px;cursor:pointer;appearance:none;-webkit-appearance:none">? Rifiuta</button>'
      + '</td></tr>';
  }).join('');
  cont.innerHTML = header + rows + cont.innerHTML;
};

function approvaUtente(id) {
  // Aggiorna ct_u (locale legacy)
  var U = lsG('ct_u', []);
  var approvatoUid = null;
  for (var i=0;i<U.length;i++){
    if (U[i].id === id) {
      var wasComReq = U[i].stato === 'pending_com';
      U[i].stato = 'approved';
      approvatoUid = U[i].uid || null;
      if (wasComReq) {
        U[i].ruolo = 'comandante';
        var me = lsG('ct_me', null);
        if (me) { for(var j=0;j<U.length;j++){ if(U[j].id===me.id){ U[j].ruolo='addetto'; break; } } }
      }
      break;
    }
  }
  lsS('ct_u', U);
  // Aggiorna anche ct_users (Firebase cache)
  var CU = lsG('ct_users', []);
  for (var k=0;k<CU.length;k++){
    if (CU[k].id === id || (approvatoUid && CU[k].uid === approvatoUid)) {
      CU[k].stato = 'approved';
      break;
    }
  }
  localStorage.setItem('ct_users', JSON.stringify(CU));
  // Aggiorna su Firebase
  if(window.FirebaseModule && approvatoUid) {
    window.FirebaseModule.aggiornaStatoUtente(approvatoUid, 'approved').catch(function(e){ console.warn('approvaUtente Firebase:', e.message); });
  }
  var NOTS = lsG('ct_notif_app', []);
  NOTS.push({ id: Date.now(), ts: Date.now(), letta: false, msg: '✅ Utente approvato', tipo: 'info', targetId: id });
  lsS('ct_notif_app', NOTS);
  aggiornaBadgeNotif();
  renderPers();
  toast('Utente approvato', 'ok');
}

function rifiutaUtente(id) {
  lsS('ct_u', lsG('ct_u', []).filter(function(u){ return u.id !== id; }));
  var CU = lsG('ct_users', []);
  localStorage.setItem('ct_users', JSON.stringify(CU.filter(function(u){ return u.id !== id; })));
  renderPers();
  toast('Utente rifiutato e rimosso', 'ok');
}

/* ---------- MODIFICA ORARIO (tasto inline in tabella turni) ---------- */
// Aggiunge pulsante modifica nella renderTurni  hook
var _origRenderTurni = typeof renderTurni !== 'undefined' ? renderTurni : null;
if (_origRenderTurni) {
  renderTurni = function() {
    _origRenderTurni();
    // Aggiunge pulsante modifica accanto ad ogni riga
    var rows = document.querySelectorAll('#tb-turni tr:not(.empty-row)');
    rows.forEach(function(row) {
      var lastTd = row.querySelector('td:last-child');
      if (lastTd && !lastTd.querySelector('.mod-btn')) {
        var idAttr = row.getAttribute('data-id');
        if (idAttr) {
          var btn = document.createElement('button');
          btn.className = 'mod-btn';
          btn.innerHTML = '&#128190;';
          btn.style.cssText = 'background:none;border:none;cursor:pointer;font-size:14px;padding:0 4px;appearance:none;-webkit-appearance:none';
          btn.onclick = function(){ apriModTurno(parseInt(idAttr)); };
          lastTd.appendChild(btn);
        }
      }
    });
  };
}

/* ---------- GOOGLE CALENDAR - Aggiungi turno ---------- */
function aggiungiTurnoCalendar(turnoId) {
  var T = lsG('ct_t', []);
  var t = T.find(function(x) { return x.id === turnoId; });
  if (!t) { toast('Turno non trovato', 'err'); return; }
  var orari = {
    mattina:    { start: '060000', end: '140000' },
    pomeriggio: { start: '140000', end: '220000' },
    notte:      { start: '220000', end: '060000' },
    riposo:     { start: '080000', end: '200000' },
    ferie:      { start: '080000', end: '200000' },
    recupero:   { start: '080000', end: '200000' },
    permesso:   { start: '080000', end: '200000' },
    licenza:    { start: '080000', end: '200000' },
    corso:      { start: '080000', end: '200000' }
  };
  var o = orari[t.tipo] || { start: '080000', end: '200000' };
  // Se orario personalizzato (es. "07:00-15:00"), usalo
  if (t.orario && t.orario.indexOf('-') > 0) {
    var parts = t.orario.split('-');
    o.start = parts[0].replace(':', '') + '00';
    o.end   = parts[1].replace(':', '') + '00';
  }
  var dateParts = t.data.split('-'); // YYYY-MM-DD
  var dateStr = dateParts.join('');  // YYYYMMDD
  var startDt = dateStr + 'T' + o.start;
  var endDate = t.data;
  // Se notte, fine  giorno dopo
  if (t.tipo === 'notte') {
    var d = new Date(t.data + 'T00:00:00');
    d.setDate(d.getDate() + 1);
    endDate = d.toISOString().split('T')[0];
  }
  var endDt = endDate.replace(/-/g,'') + 'T' + o.end;
  var tipoLabel = { mattina:'Mattina', pomeriggio:'Pomeriggio', notte:'Notte',
    riposo:'Riposo', ferie:'Ferie/Licenza', recupero:'Recupero', permesso:'Permesso',
    licenza:'Licenza Studio', corso:'Corso/Esame' };
  var titolo = (tipoLabel[t.tipo] || t.tipo) + (t.codice ? ' (' + t.codice + ')' : '') + '  ' + t.pnome;
  var dettagli = 'Turno C-Turni' + (t.note ? '\nNote: ' + t.note : '');
  var url = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
    + '&text=' + encodeURIComponent(titolo)
    + '&dates=' + encodeURIComponent(startDt) + '%2F' + encodeURIComponent(endDt)
    + '&details=' + encodeURIComponent(dettagli);
  window.open(url, '_blank');
  toast('Apertura Google Calendar...', 'ok');
}

function esportaMeseCalendar() {
  var T = lsG('ct_t', []);
  var now = new Date();
  var anno = now.getFullYear(), mese = now.getMonth();
  var turniMese = T.filter(function(t) {
    var d = new Date(t.data + 'T00:00:00');
    return d.getFullYear() === anno && d.getMonth() === mese;
  });
  if (!turniMese.length) { toast('Nessun turno nel mese corrente', 'err'); return; }
  // Apri i primi 5 turni (limite browser popup)
  var count = Math.min(turniMese.length, 5);
  turniMese.slice(0, count).forEach(function(t) { aggiungiTurnoCalendar(t.id); });
  if (turniMese.length > 5) toast('Aperti i primi 5 turni. Ripeti per gli altri.', 'ok');
  else toast('Apertura ' + count + ' turni su Google Calendar...', 'ok');
}

/* ---------- GOOGLE TASKS EXPORT (Agenda) - mantenuto per compatibilit ---------- */
function esportaAgendaGoogleTasks() {
  var AG = lsG('ct_ag', []);
  if (!AG.length) { toast('Nessun appuntamento da esportare', 'err'); return; }
  AG.slice(0,5).forEach(function(a) {
    var titolo = a.tit + (a.luogo ? ' @ ' + a.luogo : '');
    var dateParts = a.data.split('-');
    var dateStr = dateParts.join('');
    var ora = (a.ora || '08:00').replace(':', '') + '00';
    var d = new Date(a.data + 'T00:00:00');
    d.setHours(parseInt(a.ora ? a.ora.split(':')[0] : 8) + 1);
    var endOra = d.getHours().toString().padStart(2,'0') + (a.ora ? a.ora.split(':')[1] : '00') + '00';
    var url = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
      + '&text=' + encodeURIComponent(titolo)
      + '&dates=' + encodeURIComponent(dateStr + 'T' + ora) + '%2F' + encodeURIComponent(dateStr + 'T' + endOra)
      + '&details=' + encodeURIComponent(a.note || '');
    window.open(url, '_blank');
  });
  toast('Apertura Google Calendar...', 'ok');
}

/* ---------- AGENDA: aggiunge link Google Maps alla renderAgenda esistente ---------- */
var _origRenderAgenda = renderAgenda;
renderAgenda = function() {
  _origRenderAgenda();
  // Arricchisce ogni item con link Maps se ha luogo
  var items = document.querySelectorAll('.ag-item');
  items.forEach(function(item) {
    var luogoEl = item.querySelector('[data-luogo]');
    if (luogoEl && !luogoEl.querySelector('.maps-link')) {
      var luogo = luogoEl.getAttribute('data-luogo');
      if (luogo) {
        var a = document.createElement('a');
        a.className = 'maps-link';
        a.href = 'https://www.google.com/maps/search/' + encodeURIComponent(luogo);
        a.target = '_blank';
        a.style.cssText = 'font-size:10px;color:var(--blue);text-decoration:none;margin-left:6px';
        a.innerHTML = '&#128205; Maps';
        luogoEl.appendChild(a);
      }
    }
  });
};

/* ---------- GITHUB GIST BACKUP ---------- */
// Offuscamento minimale: XOR con chiave fissa (non crittografia forte, ma non plain text)

/* ---------- HOOK su aggUI: chiama renderDash dopo login ---------- */
var _origAggUI = aggUI;
aggUI = function() {
  if(typeof GSync!=='undefined'&&GSync.ui&&GSync.ui.renderPanel)GSync.ui.renderPanel();
  _origAggUI();
  renderDash();
  renderFestSopp();
  renderDashWidgetToggles();
};



/* ============================================================
   FINE MEGA-PATCH JS
   ============================================================ */



// 6B SINGOLO  Auto-orari turni
var ORARI_TURNO={"mattina":"06:00&#8211;14:00","ml":"06:00&#8211;14:00","pomeriggio":"14:00&#8211;22:00","pl":"14:00&#8211;22:00","notte":"22:00&#8211;06:00","sera":"20:00&#8211;24:00"};
document.querySelectorAll("select[id*='tipo']").forEach(s=>s.onchange=function(){var t=this.value;var e=document.querySelector("input[id*='orario']");if(e&&ORARI_TURNO[t])e.value=ORARI_TURNO[t];});

// ---- GUIDA INTERATTIVA ----
var _GUIDE = {
  turni: {
    titolo: "&#128197; Turni",
    azione: {label:"&#10133; Nuovo turno", fn:"openM('m-turno')"},
    passi: [
      {ico:"&#9312;", tit:"Apri il form", txt:"Vai su <strong>Dashboard</strong> e premi il pulsante <strong>+ Turno</strong>, oppure tocca un giorno nel Calendario."},
      {ico:"&#9313;", tit:"Seleziona la persona", txt:"Scegli il collega dal menu a tendina o usa il pulsante &#128269; per cercare per nome."},
      {ico:"&#9314;", tit:"Scegli il tipo", txt:"Usa i <strong>bottoni rapidi</strong> (M, P, N, S, RR) oppure il menu a tendina per tutti i tipi disponibili."},
      {ico:"&#9315;", tit:"Imposta data e orario", txt:"La data è precompilata con oggi. L'orario si compila automaticamente in base al tipo scelto, ma puoi modificarlo."},
      {ico:"&#9316;", tit:"Salva", txt:"Premi <strong>&#128190; Salva</strong>. Il turno appare subito nel calendario e nel widget della dashboard."},
      {ico:"&#9998;", tit:"Modificare un turno", txt:"Nel Calendario tocca il giorno &#8594; tocca il turno &#8594; premi &#9998; Modifica. Puoi cambiare tipo, orario e note."},
      {ico:"&#128465;", tit:"Eliminare un turno", txt:"Apri il turno come sopra e premi &#128465; Elimina. L'operazione è irreversibile."}
    ]
  },
  persone: {
    titolo: "&#128101; Persone",
    azione: {label:"&#10133; Aggiungi persona", fn:"openM('m-persona')"},
    passi: [
      {ico:"&#9312;", tit:"Vai su Personale", txt:"Dal menu laterale seleziona <strong>Personale</strong>."},
      {ico:"&#9313;", tit:"Aggiungi un collega", txt:"Premi <strong>+ Aggiungi</strong>. Inserisci nome, cognome, grado e reparto."},
      {ico:"&#9314;", tit:"Foto profilo", txt:"Tocca l'avatar per caricare una foto. Puoi ritagliarla direttamente nell'app."},
      {ico:"&#9315;", tit:"Salva", txt:"Premi <strong>&#128190; Salva</strong>. La persona è ora disponibile per l'assegnazione turni."},
      {ico:"&#9998;", tit:"Modificare", txt:"Tocca la card del collega &#8594; premi &#9998;. Puoi aggiornare tutti i dati inclusa la foto."},
      {ico:"&#128465;", tit:"Rimuovere", txt:"Tocca la card &#8594; premi &#128465; Elimina. I turni già assegnati rimangono nello storico."}
    ]
  },
  ferie: {
    titolo: "&#127958; Ferie & Licenze",
    azione: null,
    passi: [
      {ico:"&#8505;", tit:"Come funziona", txt:"Ogni persona ha un <strong>pool di giorni</strong> per anno. I giorni scalano automaticamente quando assegni un turno di tipo <strong>Ferie/Licenza (L)</strong>."},
      {ico:"&#9312;", tit:"Aggiungere giorni", txt:"Vai su <strong>Impostazioni &#8594; Ferie &amp; Licenze</strong>. Premi <strong>+ Anno</strong> e inserisci l'anno e i giorni disponibili per ogni persona."},
      {ico:"&#9313;", tit:"Ordine di consumo", txt:"I giorni vengono scalati partendo dall'anno più vecchio (<em>FIFO</em>). Se l'anno corrente è esaurito si passa al successivo."},
      {ico:"&#9314;", tit:"Saldo residuo", txt:"Il saldo aggiornato  visibile nella card di ogni persona in <strong>Personale</strong> e nel widget statistiche."},
      {ico:"937", tit:"Licenza 937", txt:"Funziona come le ferie ma con codice <strong>937</strong>. Scalano dallo stesso pool."},
      {ico:"&#128218;", tit:"Licenza Studio", txt:"Codice <strong>LICSTU</strong>. Non scala dal pool ferie — è un tipo separato."}
    ]
  },
  calendario: {
    titolo: "&#128467; Calendario",
    azione: {label:"&#128467; Apri calendario", fn:"vai('cal',null)"},
    passi: [
      {ico:"&#8592;&#8594;", tit:"Navigare i mesi", txt:"Usa le frecce <strong>&#8592; &#8594;</strong> in alto per spostarti tra i mesi."},
      {ico:"&#127752;", tit:"Leggere i colori", txt:"Ogni tipo di turno ha un colore diverso. Tocca la legenda in basso per vedere la mappa colori."},
      {ico:"&#128197;", tit:"Toccare un giorno", txt:"Tocca qualsiasi giorno per vedere i dettagli dei turni assegnati in quella data."},
      {ico:"&#128197;", tit:"Aggiungere dal calendario", txt:"Tocca un giorno &#8594; premi <strong>+ Aggiungi turno</strong> per aprire il form precompilato con quella data."},
      {ico:"&#128196;", tit:"Esportare in PDF", txt:"Premi il pulsante <strong>&#128196; PDF</strong> in alto a destra per esportare il mese corrente."},
      {ico:"&#128467;", tit:"Esportare su Google Calendar", txt:"Premi <strong>&#128467; Google</strong> per esportare i turni del mese come eventi Google Calendar."}
    ]
  },
  widget: {
    titolo: "&#128202; Dashboard & Widget",
    azione: {label:"&#128202; Vai alla Dashboard", fn:"vai('dash',null)"},
    passi: [
      {ico:"&#128202;", tit:"Cosa sono i widget", txt:"I widget sono i blocchi informativi nella schermata principale: turno oggi, prossimi turni, meteo, statistiche, agenda, scadenze e to-do."},
      {ico:"&#9881;", tit:"Attivare/disattivare", txt:"Vai su <strong>Impostazioni &#8594; Widget Dashboard</strong> e usa i toggle per mostrare o nascondere ogni widget."},
      {ico:"&#8597;", tit:"Riordinare", txt:"Nella Dashboard premi <strong>&#9881; Organizza</strong> in alto a destra. Trascina i widget o usa i pulsanti &#8597; per cambiare l'ordine."},
      {ico:"&#10024;", tit:"Animazioni turno", txt:"Il widget <em>Il tuo turno oggi</em> si anima in base al tipo di turno: pulse per mattina/pomeriggio, breathe per notte/riposo, shimmer per ferie, e cos via."},
      {ico:"&#128100;", tit:"Avatar e colleghi", txt:"Il widget mostra il tuo avatar, il tuo nome e in basso i colleghi che lavorano con te oggi."}
    ]
  },
  notifiche: {
    titolo: "&#128276; Notifiche",
    azione: null,
    passi: [
      {ico:"&#9312;", tit:"Abilitare le notifiche", txt:"Vai su <strong>Impostazioni &#8594; Notifiche</strong> e attiva il toggle principale. Il browser chiederà il permesso &mdash; premi <strong>Consenti</strong>."},
      {ico:"&#9313;", tit:"Avviso pre-turno", txt:"Imposta quanti minuti prima dell'inizio turno vuoi ricevere l'avviso (15, 30, 60 minuti o personalizzato)."},
      {ico:"&#127749;", tit:"Notifica mattutina", txt:"Ogni mattina alle 06:00 ricevi un riepilogo del tuo turno del giorno."},
      {ico:"&#9989;", tit:"Promemoria To-Do", txt:"Attiva il toggle <em>Promemoria To-Do</em> per ricevere una notifica il giorno della scadenza alle 08:00."},
      {ico:"&#128197;", tit:"Appuntamenti agenda", txt:"Attiva <em>Appuntamenti agenda</em> per ricevere avvisi prima di ogni appuntamento (tempo configurabile per ogni evento)."},
      {ico:"&#127894;", tit:"Turno festivo", txt:"Attiva <em>Turno festivo rilevato</em> per ricevere una notifica quando lavori in un giorno festivo e maturare un recupero."}
    ]
  },
  todo: {
    titolo: "&#9989; To-Do & Agenda",
    azione: {label:"&#9989; Vai ai To-Do", fn:"vai('cal',null)"},
    passi: [
      {ico:"&#9312;", tit:"Aggiungere un promemoria", txt:"Vai su <strong>To-Do</strong> &#8594; premi <strong>+ Aggiungi</strong>. Inserisci il testo, la priorità (alta/media/bassa) e una data opzionale."},
      {ico:"&#10004;", tit:"Completare", txt:"Tocca il cerchio a sinistra del promemoria per segnarlo come fatto. Appare barrato nella lista."},
      {ico:"&#128257;", tit:"Ricorrenza", txt:"Puoi impostare un promemoria come <em>giornaliero</em> o per un giorno specifico della settimana."},
      {ico:"&#128197;", tit:"Agenda", txt:"Vai su <strong>Agenda</strong> per gli appuntamenti con data, ora e luogo. Puoi esportarli su Google Tasks."},
      {ico:"&#128276;", tit:"Notifiche", txt:"Se le notifiche sono abilitate, ricevi un avviso alla scadenza del to-do e prima dell'appuntamento in agenda."}
    ]
  },
  tesserino: {
    titolo: "&#128100; Tesserino digitale",
    azione: {label:"&#129338; Apri tesserino", fn:"vai('tess',null)"},
    passi: [
      {ico:"&#9312;", tit:"Accedere al tesserino", txt:"Vai su <strong>Impostazioni &#8594; Tesserino</strong> oppure cerca il pulsante nella dashboard."},
      {ico:"&#128247;", tit:"Aggiungere la foto", txt:"Premi sull'area foto per caricare un'immagine. Puoi ritagliarla con l'editor integrato  il ritaglio viene applicato esattamente come lo imposti."},
      {ico:"&#127894;", tit:"Grado e dati", txt:"Il grado, nome, cognome e reparto vengono presi automaticamente dal tuo profilo. Puoi modificarli nelle impostazioni profilo."},
      {ico:"&#128424;", tit:"Stampare / salvare", txt:"Premi <strong>&#128424; Stampa</strong> per aprire la finestra di stampa del browser. Seleziona <em>Salva come PDF</em> per ottenere il file."},
      {ico:"&#128271;", tit:"Timbro e firma", txt:"Il tesserino include un timbro tondo sovrapposto alla firma dell'autorità rilasciante per un aspetto realistico."}
    ]
  },
  orari: {
    titolo: "&#9200; Orari Turni",
    azione: {label:"&#9881; Vai a Impostazioni", fn:"vaiBN('imp',3)"},
    passi: [
      {ico:"&#8505;", tit:"Cosa sono", txt:"Gli orari preset sono i valori di default usati quando inserisci un turno. Puoi personalizzarli per ogni tipo: Mattina, Pomeriggio, Notte, Sera, ML, PL."},
      {ico:"&#9312;", tit:"Aprire la sezione", txt:"Vai su <strong>Impostazioni &#8594; Orari Turni</strong>. Vedrai la lista di tutti i tipi di turno con l'orario attuale."},
      {ico:"&#128070;", tit:"Modificare un orario", txt:"Tocca la riga del turno che vuoi modificare  si espande mostrando i campi <strong>Inizio</strong> e <strong>Fine</strong>."},
      {ico:"&#128190;", tit:"Salvare", txt:"Modifica gli orari e premi <strong>&#128190; Salva</strong> sulla riga. L'orario viene salvato immediatamente."},
      {ico:"&#8635;", tit:"Ripristinare i default", txt:"Premi <strong>&#8635; Ripristina default</strong> in fondo alla sezione per tornare agli orari standard."}
    ]
  },
  backup: {
    titolo: "&#128190; Backup & Import",
    azione: {label:"&#128190; Vai a Backup", fn:"toggleImpSec('sec-backup','arr-bkp')"},
    passi: [
      {ico:"&#128228;", tit:"Esportare il backup", txt:"Vai su <strong>Impostazioni &#8594; Dati & Backup</strong> &#8594; premi <strong>&#128228; Esporta backup</strong>. Viene scaricato un file JSON con tutti i dati."},
      {ico:"&#128229;", tit:"Importare un backup", txt:"Premi <strong>&#128229; Importa backup</strong> e seleziona il file JSON precedentemente esportato. I dati vengono ripristinati completamente."},
      {ico:"&#128202;", tit:"Importare da Excel", txt:"Premi <strong>&#128202; Importa da Excel</strong> per caricare un file .xlsx con i turni. Le colonne devono contenere: nome, cognome, data, tipo turno."},
      {ico:"&#9888;", tit:"Attenzione", txt:"L'importazione <strong>sovrascrive</strong> i dati esistenti. Esegui sempre un backup prima di importare."},
      {ico:"&#128465;", tit:"Reset completo", txt:"In <strong>Zona Pericolosa</strong> puoi eliminare tutti i dati. L'operazione è irreversibile — fai prima un backup."}
    ]
  }
};

function guidaApri(id) {
  var g = _GUIDE[id];
  if (!g) return;
  document.getElementById('guida-titolo').textContent = g.titolo;
  var html = '<div style="display:flex;flex-direction:column;gap:14px;padding-bottom:4px">';
  g.passi.forEach(function(p) {
    html += '<div style="display:flex;gap:12px;align-items:flex-start">' +
      '<div style="font-size:22px;flex-shrink:0;line-height:1.3">' + p.ico + '</div>' +
      '<div>' +
        '<div style="font-weight:700;font-size:13px;color:var(--txt);margin-bottom:3px">' + p.tit + '</div>' +
        '<div style="font-size:12px;color:var(--txt2);line-height:1.6">' + p.txt + '</div>' +
      '</div>' +
    '</div>';
  });
  html += '</div>';
  document.getElementById('guida-corpo').innerHTML = html;
  var btn = document.getElementById('guida-btn-azione');
  if (g.azione) {
    btn.style.display = 'inline-flex';
    btn.textContent = g.azione.label;
    btn.onclick = function() { closeM('m-guida'); try { eval(g.azione.fn); } catch(e){} };
  } else {
    btn.style.display = 'none';
  }
  openM('m-guida');
}

// --------------------------------------------------------------------------
//  SISTEMA UNIFICATO: ASCENSORE MODALI, NOTIFICHE E PARSER EXCEL SMART
// --------------------------------------------------------------------------

var _zTop = 19000;

// Funzione Universale Apertura Modali (L'Ascensore)
function openM(id) {
    var m = document.getElementById(id);
    if (!m) return;
    // Assegna z-index crescente — ogni modal aperto sta sopra il precedente
    _zTop += 10;
    m.style.zIndex = _zTop;
    m.classList.add('on');
    if (id === 'm-turno') {
        _aggiornaPersBtnLabel();
        _aggiungiOpzioniCustomAlSelect();
        var _dtInp = document.getElementById('mt-data');
        var _dtLbl = document.getElementById('mt-data-btn-lbl');
        if(_dtInp && !_dtInp.value) {
          var oggi = new Date().toLocaleDateString('en-CA');
          _dtInp.value = oggi;
          if(_dtLbl){ _dtLbl.textContent = oggi.split('-').reverse().join('/'); _dtLbl.style.color='var(--txt)'; }
        }
    }
    if (id === 'm-mod-turno') {
        // Aggiungi bottoni turni custom al modal modifica
        document.querySelectorAll('#m-mod-turno .btn-turno-r[data-custom]').forEach(function(b){ b.remove(); });
        var TC = lsG('ct_turni_custom', []);
        if(TC.length) {
          var lastRow = document.querySelector('#m-mod-turno .btn-turno-r:last-of-type');
          if(lastRow && lastRow.parentElement) {
            var customRow = document.createElement('div');
            customRow.style.cssText = 'display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:4px';
            TC.forEach(function(tc){
              var b = document.createElement('button');
              b.type = 'button';
              b.className = 'btn-turno-r';
              b.setAttribute('data-custom','1');
              b.textContent = (tc.emoji||'⏰')+' '+tc.codice;
              b.title = tc.nome;
              b.onclick = function(){ setModTurnoTipo('custom_'+tc.codice, tc.codice, b); };
              customRow.appendChild(b);
            });
            lastRow.parentElement.appendChild(customRow);
          }
        }
    }
    if (id === 'm-avatar-editor') {
        setTimeout(_aveDraw, 100);
    }
    if (id === 'm-todo') {
        // Reset campi e bottoni priorità
        ['td-tit','td-note','td-data','td-ora'].forEach(function(fid){
          var el=document.getElementById(fid); if(el) el.value='';
        });
        var tdNote = document.getElementById('td-note'); if(tdNote) tdNote.value='';
        var tdRicor = document.getElementById('td-ricor'); if(tdRicor) tdRicor.value='';
        var tdCond = document.getElementById('td-condividi'); if(tdCond) tdCond.checked=false;
        // Reset label pickers
        var dl=document.getElementById('td-data-btn-lbl'); if(dl){dl.textContent='Seleziona...';dl.style.color='var(--txt2)';}
        var ol=document.getElementById('td-ora-btn-lbl');  if(ol){ol.textContent='—';ol.style.color='var(--txt2)';}
        // Reset priorità a bassa (default)
        document.querySelectorAll('#m-todo .tipo-rep-btn').forEach(function(b){ b.classList.remove('sel'); });
        var pb=document.getElementById('td-prio-bassa'); if(pb) pb.classList.add('sel');
        var pi=document.getElementById('td-prio'); if(pi) pi.value='bassa';
        var err=document.getElementById('todo-err'); if(err) err.classList.remove('on');
    }
    if (id === 'm-agenda') {
        // Reset campi
        ['ag-tit','ag-data','ag-ora','ag-luogo','ag-note'].forEach(function(fid){
          var el=document.getElementById(fid); if(el) el.value='';
        });
        var agNote = document.getElementById('ag-note'); if(agNote) agNote.value='';
        var agCond = document.getElementById('ag-condividi'); if(agCond) agCond.checked=false;
        // Reset label pickers
        var adl=document.getElementById('ag-data-btn-lbl'); if(adl){adl.textContent='Seleziona...';adl.style.color='var(--txt2)';}
        var aol=document.getElementById('ag-ora-btn-lbl');  if(aol){aol.textContent='—';aol.style.color='var(--txt2)';}
        // Reset avviso a "Nessuno"
        document.querySelectorAll('#m-agenda .tipo-rep-btn').forEach(function(b){ b.classList.remove('sel'); });
        var an0=document.getElementById('ag-notif-0'); if(an0) an0.classList.add('sel');
        var ani=document.getElementById('ag-notif'); if(ani) ani.value='0';
        var aerr=document.getElementById('agenda-err'); if(aerr) aerr.classList.remove('on');
    }
    // Fix tastiera mobile: scroll input in vista al focus
    setTimeout(function(){
      m.querySelectorAll('input,textarea,select').forEach(function(el){
        el.addEventListener('focus', function(){
          setTimeout(function(){ el.scrollIntoView({behavior:'smooth',block:'center'}); }, 300);
        }, {once:false, passive:true});
      });
    }, 100);
}

// Funzione Universale Chiusura Modali
function closeM(id) {
    var m = document.getElementById(id);
    if (m) m.classList.remove('on');
    if (id === 'm-avatar-editor') _aveBound = false;
    if (id === 'm-egg') {
      if(typeof _eggLampTimer !== 'undefined' && _eggLampTimer){ clearInterval(_eggLampTimer); _eggLampTimer=null; }
      var _em = document.getElementById('m-egg');
      if(_em) _em.style.cssText = "display:none!important;";
      document.body.style.overflow = "";
      return;
    }
    if (id === 'm-turno') {
        var _tit = document.querySelector('#m-turno .mtit');
        if (_tit) _tit.textContent = '? Nuovo Turno';
        var _eid = document.getElementById('mt-edit-id'); if (_eid) _eid.value = '';
    }
}

// Funzione per chiudere il menu azioni rapide (+)
function chiudiMenuRapido() {
    var f = document.getElementById('fab-ctx');
    var o = document.getElementById('fab-over');
    if (f) f.classList.remove('on');
    if (o) {
        o.style.opacity = '0';
        setTimeout(function() { o.style.display = 'none'; }, 300);
    }
}

// Inizializzazione al caricamento del documento
window.addEventListener('DOMContentLoaded', function() {

    // 1. Forza i picker e le notifiche in primo piano
    var ids = ['m-datepicker', 'm-pers-picker', 'm-grado-picker', 'm-tema', 'm-fogli', 'm-avatar-editor', 'm-giorno', 'm-turno', 'm-todo', 'm-agenda', 'm-turni-custom', 'notif-drawer', 'notif-overlay'];
    ids.forEach(function(id) {
        var el = document.getElementById(id);
        if (el) {
            document.body.appendChild(el);
            if (id === 'notif-drawer')         el.style.zIndex = '100005';
            else if (id === 'notif-overlay')   el.style.zIndex = '100004';
            else if (id === 'm-avatar-editor') el.style.zIndex = '100003';
            else if (id === 'm-turno')         el.style.zIndex = '100002';
            else if (id === 'm-giorno')        el.style.zIndex = '100001';
            else if (id === 'm-todo')          el.style.zIndex = '100002';
            else if (id === 'm-agenda')        el.style.zIndex = '100002';
            else                               el.style.zIndex = '100000';
        }
    });

    // Carica opzioni turni custom nel select
    if(typeof _aggiungiOpzioniCustomAlSelect === 'function') _aggiungiOpzioniCustomAlSelect();

    // 2. PARSER EXCEL INTELLIGENTE
    window.parseSheet = function(rows, sn) {
        var anno = new Date().getFullYear(), mese = null;
        var mM = {"gen":0,"gennaio":0,"jan":0,"january":0,"feb":1,"febbraio":1,"mar":2,"marzo":2,"apr":3,"aprile":3,"mag":4,"maggio":4,"giu":5,"giugno":5,"lug":6,"luglio":6,"ago":7,"agosto":7,"set":8,"settembre":8,"ott":9,"ottobre":9,"nov":10,"novembre":10,"dic":11,"dicembre":11,"01":0,"02":1,"03":2,"04":3,"05":4,"06":5,"07":6,"08":7,"09":8,"10":9,"11":10,"12":11};

        var tokens = sn.toLowerCase().replace(/[-_\/\\.,]/g, ' ').split(/\s+/);
        Object.keys(mM).forEach(function(k) {
            if (mese !== null) return;
            tokens.forEach(function(t) { if (t === k || t.indexOf(k) === 0) mese = mM[k]; });
        });

        for (var i = 0; i < Math.min(8, rows.length); i++) {
            rows[i].forEach(function(v) {
                var n = parseInt(v);
                if (!isNaN(n) && n > 2000 && n < 2100) anno = n;
                if (!isNaN(n) && n >= 1 && n <= 12 && mese === null) mese = n - 1;
            });
        }
        if (mese === null) mese = new Date().getMonth();

        var hR = -1;
        for (var i = 0; i < Math.min(15, rows.length); i++) {
            var cnt = 0;
            rows[i].forEach(function(v) { var n = parseInt(v); if (!isNaN(n) && n >= 1 && n <= 31) cnt++; });
            if (cnt >= 20) { hR = i; break; }
        }
        if (hR < 0) return 0;

        var idxGrado = 0, idxNome = 1;
        for (var scan = Math.max(0, hR - 3); scan <= hR; scan++) {
            if (!rows[scan]) continue;
            rows[scan].forEach(function(v, idx) {
                var s = String(v).toLowerCase().trim();
                if (s === 'grado' || s.indexOf('grado ') === 0) idxGrado = idx;
                if (s.indexOf('nome') !== -1 || s.indexOf('cognome') !== -1) idxNome = idx;
            });
        }

        var colD = {};
        rows[hR].forEach(function(v, idx) { var n = parseInt(v); if (!isNaN(n) && n >= 1 && n <= 31) colD[idx] = n; });

        var cM2 = {"M":"mattina","ML":"mattina","1515":"mattina","P":"pomeriggio","PL":"pomeriggio","N":"notte","NL":"notte","R":"riposo","RR":"recupero","L":"ferie","LICSTU":"licenza","104":"permesso","937":"permesso","FEST":"permesso","CORSO":"corso","LS":"permesso","ESAME":"corso"};
        // Usa preset configurabili se disponibili, altrimenti fallback hardcoded
        var _op = (typeof getOrariPreset === 'function') ? getOrariPreset() : {};
        var oM  = {
          "mattina":    (_op.mattina    ? _op.mattina.in+"-"+_op.mattina.out       : "06:00-14:00"),
          "pomeriggio": (_op.pomeriggio ? _op.pomeriggio.in+"-"+_op.pomeriggio.out : "14:00-22:00"),
          "notte":      (_op.notte      ? _op.notte.in+"-"+_op.notte.out           : "22:00-06:00"),
          "riposo":"Riposo","recupero":"Recupero","ferie":"Ferie",
          "licenza":"Lic. Studio","permesso":"Permesso","corso":"Corso"
        };

        var tot = 0;
        var P = lsG('ct_p', []);
        var T = lsG('ct_t', []);
        var _COD = {};
        Object.keys(cM2).forEach(function(k) { _COD[k] = true; });

        for (var i = hR + 1; i < rows.length; i++) {
            var r  = rows[i];
            var nR = String(r[idxNome]  || '').trim();
            var gR = String(r[idxGrado] || '').trim();

            // A. Stop su legenda
            if(nR.toLowerCase().indexOf('legenda') !== -1 || gR.toLowerCase().indexOf('legenda') !== -1) break;

            // B. Salta righe vuote o troppo corte
            if (!nR || nR.length < 3) continue;
            if (_COD[nR.toUpperCase()]) continue;

            var _pgPre = typeof parseGradoNome === 'function' ? parseGradoNome(gR, nR) : {grado: gR, nome: nR};
            nR = _pgPre.nome;

            // C. Crea placeholder se non trovata — verrà collegato all'uid reale alla registrazione
            var persona = P.find(function(x) { return x.nome.toLowerCase() === nR.toLowerCase(); }) || null;
            if (!persona) {
                persona = {id: Date.now() + Math.floor(Math.random() * 9999), nome: nR, grado: _pgPre.grado, reparto: '', ferieRes: 30, uid: null, placeholder: true};
                P.push(persona);
            }
            Object.keys(colD).forEach(function(col) {
                var raw = String(r[parseInt(col)] || '').trim().toUpperCase();
                if (!raw) return;
                var tipo = cM2[raw];
                if (!tipo) return;
                var ds  = anno + '-' + pad(mese + 1) + '-' + pad(colD[col]);
                var dup = T.some(function(t) { return t.pid === persona.id && t.data === ds; });
                if (!dup) {
                    var _catEv = ['riposo','ferie','recupero','licenza','permesso','937','104','ls','fest'].indexOf(tipo) !== -1 ? 'personale' : 'servizio';
                    T.push({id: Date.now() + Math.floor(Math.random() * 99999), pid: persona.id, pnome: persona.nome, data: ds, tipo: tipo, orario: oM[tipo] || tipo, note: '', codice: raw, categoria_evento: _catEv});
                    tot++;
                }
            });
        }
        lsS('ct_p', P);
        lsS('ct_t', T);
        // Sincronizza su Firebase dopo import Excel
        if(window.FirebaseModule) {
          window.FirebaseModule.saveTurni(T).catch(function(e){ console.warn('saveTurni post-import:', e.message); });
          window.FirebaseModule.savePersonale().catch(function(e){ console.warn('savePersonale post-import:', e.message); });
        }
        return tot;
    };
});

// --- LOGICA TASK 4: INSERIMENTO RAPIDO ---

// Variabile globale per ricordare il giorno cliccato
var _giornoSelezionato = "";

// 1. Funzione che imposta gli orari in base al bottone cliccato
function setR(tipo) {
    var inpIn = document.getElementById('r-ora-in');
    var inpFi = document.getElementById('r-ora-fi');
    if (tipo === 'M') { inpIn.value = "06:00"; inpFi.value = "14:00"; }
    else if (tipo === 'P') { inpIn.value = "14:00"; inpFi.value = "22:00"; }
    else if (tipo === 'N') { inpIn.value = "22:00"; inpFi.value = "06:00"; }
    else if (tipo === 'R') { inpIn.value = ""; inpFi.value = ""; toast("Segnato come Riposo"); }
}

// 2. Funzione per salvare il turno rapido
function salvaTurnoRapido() {
    var pSel = document.getElementById('r-pers-sel').innerText;
    var oraIn = document.getElementById('r-ora-in').value;
    var oraFi = document.getElementById('r-ora-fi').value;
    if (pSel === "Scegli...") { toast("Seleziona un collega!", "err"); return; }
    console.log("Salvataggio:", pSel, _giornoSelezionato, oraIn, oraFi);
    toast("Turno salvato con successo!");
    closeM('m-rapido');
}

// TASK A: PONTE CALENDARIO - TURNO NATIVO
function apriNuovoTurno(ds) {
    closeM('m-giorno');
    _giornoSelezionato = ds || '';
    window._turnoFromCalendar = true; // flag: aperto dal calendario
    var inp = document.getElementById('mt-data');
    var btnLbl = document.getElementById('mt-data-btn-lbl');
    if(inp) inp.value = ds || new Date().toLocaleDateString('en-CA');
    if(btnLbl && inp && inp.value) { btnLbl.textContent = inp.value.split('-').reverse().join('/'); btnLbl.style.color='var(--txt)'; }
    // Reset tipo
    var tipoHidden = document.getElementById('mt-tipo');
    if(tipoHidden) tipoHidden.value = '';
    document.querySelectorAll('.btn-turno-r').forEach(function(b){ b.classList.remove('sel'); });
    // Reset orari
    ['mt-ora-in','mt-ora-fi'].forEach(function(id){
      var h = document.getElementById(id); if(h) h.value='';
      var l = document.getElementById(id+'-btn-lbl'); if(l){l.textContent=id==='mt-ora-in'?'Inizio':'Fine';l.style.color='var(--txt2)';}
    });
    // Popola persona
    _aggiornaPersBtnLabel();
    openM('m-turno');
}

function setTurnoRapido(tipo, codice, btn) {
    _aggiornaPresetOra();
    // Scrivi tipo e codice negli hidden
    var tipoH = document.getElementById('mt-tipo');
    if(tipoH) tipoH.value = tipo;
    var codH = document.getElementById('mt-turno-codice');
    if(codH) codH.value = codice || '';
    // Evidenzia bottone
    document.querySelectorAll('.btn-turno-r').forEach(function(b){ b.classList.remove('sel'); });
    if(btn) btn.classList.add('sel');
    // Applica orari dal preset e aggiorna label bottoni
    var ore = _PRESET_ORA[codice];
    var oraIn = ore ? ore[0] : '';
    var oraFi = ore ? ore[1] : '';
    var hIn = document.getElementById('mt-ora-in');
    var hFi = document.getElementById('mt-ora-fi');
    if(hIn) hIn.value = oraIn;
    if(hFi) hFi.value = oraFi;
    var lblIn = document.getElementById('mt-ora-in-btn-lbl');
    var lblFi = document.getElementById('mt-ora-fi-btn-lbl');
    if(lblIn){ lblIn.textContent = oraIn || 'Inizio'; lblIn.style.color = oraIn ? 'var(--txt)' : 'var(--txt2)'; }
    if(lblFi){ lblFi.textContent = oraFi || 'Fine';   lblFi.style.color = oraFi ? 'var(--txt)' : 'var(--txt2)'; }
}

function popolaSelectPersone() {
    var sel = document.getElementById('mt-pers-sel'); if (!sel) return;
    var P = lsG('ct_p', []);
    var me = lsG('ct_me', null);
    var myRep = (me && me.reparto) ? me.reparto.toLowerCase() : '';
    // Aggiungi utenti Firebase non presenti in ct_p
    var fbUsers = lsG('ct_users', []);
    fbUsers.forEach(function(u){
        if(!u.uid || !u.nome) return;
        if(u.stato === 'pending' || u.stato === 'rejected') return;
        if(myRep && u.reparto && u.reparto.toLowerCase() !== myRep) return;
        var exists = P.some(function(p){ return p.uid === u.uid; });
        if(!exists){
            P.push({ id: u.id || u.uid, nome: ((u.cognome||'') + ' ' + (u.nome||'')).trim() || u.nome, grado: u.grado || '', uid: u.uid, _fromFirebase: true });
        }
    });
    // Assicura presenza utente loggato — senza creare duplicati
    if(me && me.nome) {
        var myPid2 = parseInt(localStorage.getItem('ct_my_pid')||'0');
        var meInLista = P.some(function(p){
            return (myPid2 && p.id === myPid2)
                || p.id === me.id
                || (me.uid && p.uid === me.uid)
                || (p.nome||'').toLowerCase() === ((me.cognome||'')+' '+(me.nome||'')).trim().toLowerCase()
                || (p.nome||'').toLowerCase() === ((me.nome||'')+' '+(me.cognome||'')).trim().toLowerCase();
        });
        if(!meInLista) {
            // Crea profilo solo se davvero non esiste in nessuna forma
            var nuovoMe = { id: myPid2 || me.id || Date.now(), nome: ((me.cognome||'') + ' ' + (me.nome||'')).trim() || me.nome, grado: me.grado || '', reparto: me.reparto || '', uid: me.uid || '', ava: me.ava || '', ferieRes: 30, _isMe: true };
            var Ppers = lsG('ct_p', []);
            // Doppio check su ct_p fresco prima di aggiungere
            var giàEsiste = Ppers.some(function(p){
                return (p.uid && p.uid === me.uid) || p.id === me.id || (myPid2 && p.id === myPid2);
            });
            if(!giàEsiste) {
                Ppers.push(nuovoMe);
                lsS('ct_p', Ppers);
                localStorage.setItem('ct_my_pid', String(nuovoMe.id));
                if(window.FirebaseModule) window.FirebaseModule.savePersona().catch(function(){});
            }
            P.unshift(nuovoMe);
        } else {
            P = P.map(function(p){
                if((myPid2 && p.id === myPid2) || p.id === me.id || (me.uid && p.uid === me.uid)) return Object.assign({}, p, {_isMe: true});
                return p;
            });
        }
    }
    // Deduplicazione finale — rimuovi profili con stesso uid o stesso nome
    var visti = {};
    P = P.filter(function(p){
        var key = p.uid || (p.nome||'').toLowerCase().trim();
        if(visti[key]) return false;
        visti[key] = true;
        return true;
    });
    var cur = document.getElementById('mt-pers').value;
    sel.innerHTML = '<option value="">Scegli collega...</option>' +
        P.map(function(p){
            var verificato = (p.uid) ? ' ✓' : (p.placeholder ? ' ○' : '');
            var isMeLabel = p._isMe ? ' (Tu)' : '';
            var label = p.nome + (p.grado ? ' (' + p.grado + ')' : '') + verificato + isMeLabel;
            return '<option value="' + p.id + '"' + (p.id == cur ? ' selected' : '') + '>' + label + '</option>';
        }).join('');
    sel.onchange = function(){ document.getElementById('mt-pers').value = this.value; };
}

var _PRESET_ORA = {
    M:      null, ML:     null,
    P:      null, PL:     null,
    N:      null, S:      null,
    R:      null, RR:     null, L:      null, LICSTU: null,
    ESAME:  null, '104':  null, '937':  null, LS:     null,
    FEST:   null, CORSO:  null,
    OBBM:   ['07:00','13:00'],
    OBBP:   ['13:00','19:00']
};
// Aggiorna _PRESET_ORA dai preset configurabili
function _aggiornaPresetOra(){
  var o = (typeof getOrariPreset === 'function') ? getOrariPreset() : {};
  _PRESET_ORA.M    = o.mattina    ? [o.mattina.in,    o.mattina.out]    : ['06:00','14:00'];
  _PRESET_ORA.ML   = o.ml         ? [o.ml.in,         o.ml.out]         : ['06:00','16:00'];
  _PRESET_ORA.P    = o.pomeriggio ? [o.pomeriggio.in, o.pomeriggio.out] : ['14:00','22:00'];
  _PRESET_ORA.PL   = o.pl         ? [o.pl.in,         o.pl.out]         : ['12:00','22:00'];
  _PRESET_ORA.N    = o.notte      ? [o.notte.in,      o.notte.out]      : ['22:00','06:00'];
  _PRESET_ORA.S    = o.sera       ? [o.sera.in,       o.sera.out]       : ['20:00','02:00'];
  _PRESET_ORA.OBBM = o.obbm       ? [o.obbm.in,       o.obbm.out]       : ['07:00','13:00'];
  _PRESET_ORA.OBBP = o.obbp       ? [o.obbp.in,       o.obbp.out]       : ['13:00','19:00'];
}
var _PRESET_TIPO = {
    M:'mattina', ML:'ml', P:'pomeriggio', PL:'pl', N:'notte', S:'sera',
    R:'riposo', RR:'recupero', L:'ferie', LICSTU:'licenza',
    ESAME:'corso', '104':'permesso', '937':'permesso',
    LS:'permesso', FEST:'permesso', CORSO:'corso',
    OBBM:'obbm', OBBP:'obbp'
};
function eliminaTurnoDaGiorno(tid, ds) {
    ctConfirm('Eliminare questo turno?', {title:'Elimina Turno', ico:'📅', ok:'Elimina', danger:true}).then(function(ok){
      if(!ok) return;
      var T = lsG("ct_t", []).filter(function(x){ return x.id !== tid; });
      lsS("ct_t", T);
      renderTurni(); renderOggi(); stats(); aggiornaWidget();
      if (typeof renderCal === "function") renderCal();
      toast("Turno eliminato", "ok");
      // Riapri la vista giornaliera aggiornata
      var T2 = lsG("ct_t", []).filter(function(x){ return x.data === ds; });
      if (T2.length > 0) { mostraGiorno(ds); }
      else { closeM("m-giorno"); }
    });
}

function apriModificaTurnoGiorno(tid) {
    var T=lsG("ct_t",[]);
    var t=T.find(function(x){return x.id===tid;});
    if(!t)return;
    closeM("m-giorno");
    if(typeof chiudiSheetGiorno === 'function') chiudiSheetGiorno();
    // Usa apriModTurno che gestisce già tutto il nuovo UI
    apriModTurno(tid);
    // Aggiorna titolo con nome persona e data
    var P=lsG("ct_p",[]);
    var p=P.find(function(x){return x.id===t.pid;});
    var nomeTit = p ? p.nome : (t.pnome||'');
    var mN=["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
    var dParts = t.data ? t.data.split('-') : [];
    var dataTit = dParts.length===3 ? dParts[2]+' '+mN[parseInt(dParts[1])-1] : t.data;
    var titEl = document.querySelector('#m-mod-turno .mtit');
    if(titEl) titEl.innerHTML = '&#9998; ' + nomeTit + ' &mdash; ' + dataTit;
}

function aggOraNativaDaTipo(tipo) {
    var ini = document.getElementById('mt-ora-in');
    var fin = document.getElementById('mt-ora-fi');
    if (!ini || !fin) return;
    // Turno personalizzato
    if(tipo && tipo.indexOf('custom_') === 0) {
      var codice = tipo.replace('custom_','');
      var TC = lsG('ct_turni_custom', []);
      var tc = TC.find(function(x){ return x.codice === codice; });
      if(tc){ ini.value = tc.oraIn; fin.value = tc.oraFi; }
      return;
    }
    // Usa preset configurabili
    var _op = (typeof getOrariPreset === 'function') ? getOrariPreset() : {};
    var k = tipo === 'ml' ? 'ml' : tipo === 'pl' ? 'pl' : tipo;
    var v = _op[k];
    if(v){ ini.value = v.in; fin.value = v.out; }
    else {
      var mapTipo = { mattina:['06:00','14:00'], pomeriggio:['14:00','22:00'], notte:['22:00','06:00'], sera:['20:00','02:00'] };
      if(mapTipo[tipo]){ ini.value = mapTipo[tipo][0]; fin.value = mapTipo[tipo][1]; }
      else { ini.value = ''; fin.value = ''; }
    }
}


// ── FOTO PROFILO — riscritta v4.1 ────────────────────────────
// Flusso: selezione file → editor crop → salva con profilo

var _ave = { img:null, x:0, y:0, scale:1, lx:0, ly:0, pd:0, prevId:'pf-ava-prev' };

function prevFotoFile(input) {
  if(!input || !input.files || !input.files[0]) return;
  _ave.prevId = input.id === 'mpf-ava-file' ? 'mpf-ava-prev' : 'pf-ava-prev';
  var reader = new FileReader();
  reader.onload = function(e) {
    var img = new Image();
    img.onload = function() {
      _ave.img = img;
      var minSide = Math.min(img.width, img.height);
      _ave.scale = 300 / minSide;
      _ave.x = (300 - img.width  * _ave.scale) / 2;
      _ave.y = (300 - img.height * _ave.scale) / 2;
      _aveDraw();
      _aveBindEvents();
      openM('m-avatar-editor');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(input.files[0]);
}

function _aveDraw() {
  var cv = document.getElementById('ava-editor-canvas');
  if(!cv || !_ave.img) return;
  var ctx = cv.getContext('2d');
  cv.width = 300; cv.height = 300;
  ctx.clearRect(0, 0, 300, 300);
  ctx.drawImage(_ave.img, _ave.x, _ave.y, _ave.img.width * _ave.scale, _ave.img.height * _ave.scale);
}

function confermaAvatarCrop() {
  if(!_ave.img) { closeM('m-avatar-editor'); return; }
  var cv = document.createElement('canvas');
  cv.width = 300; cv.height = 300;
  var ctx = cv.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 300, 300);
  ctx.drawImage(_ave.img, _ave.x, _ave.y, _ave.img.width * _ave.scale, _ave.img.height * _ave.scale);
  var data = cv.toDataURL('image/jpeg', 0.75);
  window._tempAva = data;
  var prev = document.getElementById(_ave.prevId);
  if(prev) {
    prev.style.backgroundImage = 'url(' + data + ')';
    prev.style.backgroundSize = 'cover';
    prev.style.backgroundPosition = 'center';
    prev.textContent = '';
  }
  closeM('m-avatar-editor');
  toast('Foto ritagliata ✓', 'ok');
}

var _aveBound = false;
function _aveBindEvents() {
  if(_aveBound) return;
  _aveBound = true;
  var cv = document.getElementById('ava-editor-canvas');
  if(!cv) return;
  var ptrs = {};
  function dist(p) {
    var k = Object.keys(p);
    if(k.length < 2) return 0;
    return Math.hypot(p[k[0]].x - p[k[1]].x, p[k[0]].y - p[k[1]].y);
  }
  function getXY(e) {
    var r = cv.getBoundingClientRect();
    return { x: (e.clientX - r.left) * (300/r.width), y: (e.clientY - r.top) * (300/r.height) };
  }
  cv.addEventListener('pointerdown', function(e) {
    e.preventDefault(); cv.setPointerCapture(e.pointerId);
    ptrs[e.pointerId] = getXY(e);
    if(Object.keys(ptrs).length === 1) { _ave.lx = ptrs[e.pointerId].x; _ave.ly = ptrs[e.pointerId].y; }
    else { _ave.pd = dist(ptrs); }
  }, {passive:false});
  cv.addEventListener('pointermove', function(e) {
    e.preventDefault();
    if(!ptrs[e.pointerId]) return;
    ptrs[e.pointerId] = getXY(e);
    var k = Object.keys(ptrs);
    if(k.length === 1) {
      var cx = ptrs[e.pointerId].x, cy = ptrs[e.pointerId].y;
      _ave.x += cx - _ave.lx; _ave.y += cy - _ave.ly;
      _ave.lx = cx; _ave.ly = cy; _aveDraw();
    } else if(k.length >= 2) {
      var nd = dist(ptrs);
      if(_ave.pd > 0) {
        var ns = Math.max(0.2, Math.min(6, _ave.scale * (nd/_ave.pd)));
        _ave.x = 150 - (150 - _ave.x) * (ns/_ave.scale);
        _ave.y = 150 - (150 - _ave.y) * (ns/_ave.scale);
        _ave.scale = ns; _aveDraw();
      }
      _ave.pd = nd;
    }
  }, {passive:false});
  function ep(e) { delete ptrs[e.pointerId]; if(!Object.keys(ptrs).length) _ave.pd = 0; }
  cv.addEventListener('pointerup', ep);
  cv.addEventListener('pointercancel', ep);
}

function _ridimensionaFoto(file, cb) {
  var reader = new FileReader();
  reader.onload = function(e) {
    var img = new Image();
    img.onload = function() {
      var SIZE = 300;
      var cv = document.createElement('canvas');
      cv.width = SIZE; cv.height = SIZE;
      var ctx = cv.getContext('2d');
      var side = Math.min(img.width, img.height);
      var sx = (img.width - side) / 2;
      var sy = (img.height - side) / 2;
      ctx.drawImage(img, sx, sy, side, side, 0, 0, SIZE, SIZE);
      cb(cv.toDataURL('image/jpeg', 0.75));
    };
    img.onerror = function() { cb(null); };
    img.src = e.target.result;
  };
  reader.onerror = function() { cb(null); };
  reader.readAsDataURL(file);
}

// ── GOOGLE SYNC MODULE ──
// Feature: google-sync
var GSync = {
  auth: {},
  state: {},
  calendar: {},
  tasks: {},
  ui: {}
};

// ── GSync.state ──
(function() {
  var KEY = 'ct_gsync';

  function _default() {
    return {
      accessToken: null,
      tokenExpiry: null,
      calendarMappings: [],
      taskMappings: [],
      lastSync: null
    };
  }

  GSync.state.load = function() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return _default();
      var parsed = JSON.parse(raw);
      var d = _default();
      return {
        accessToken:      parsed.accessToken      !== undefined ? parsed.accessToken      : d.accessToken,
        tokenExpiry:      parsed.tokenExpiry       !== undefined ? parsed.tokenExpiry       : d.tokenExpiry,
        calendarMappings: Array.isArray(parsed.calendarMappings) ? parsed.calendarMappings : d.calendarMappings,
        taskMappings:     Array.isArray(parsed.taskMappings)     ? parsed.taskMappings     : d.taskMappings,
        lastSync:         parsed.lastSync          !== undefined ? parsed.lastSync          : d.lastSync
      };
    } catch(e) {
      return _default();
    }
  };

  GSync.state.save = function(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch(e) {
      console.error('[GSync] state.save error:', e);
    }
  };

  GSync.state.setCalendarMapping = function(localId, remoteId) {
    var s = GSync.state.load();
    var idx = s.calendarMappings.findIndex(function(m) { return m.localId === localId; });
    if (idx >= 0) {
      s.calendarMappings[idx].remoteId = remoteId;
    } else {
      s.calendarMappings.push({ localId: localId, remoteId: remoteId });
    }
    GSync.state.save(s);
  };

  GSync.state.setTaskMapping = function(localId, remoteId) {
    var s = GSync.state.load();
    var idx = s.taskMappings.findIndex(function(m) { return m.localId === localId; });
    if (idx >= 0) {
      s.taskMappings[idx].remoteId = remoteId;
    } else {
      s.taskMappings.push({ localId: localId, remoteId: remoteId });
    }
    GSync.state.save(s);
  };

  GSync.state.removeCalendarMapping = function(localId) {
    var s = GSync.state.load();
    s.calendarMappings = s.calendarMappings.filter(function(m) { return m.localId !== localId; });
    GSync.state.save(s);
  };

  GSync.state.removeTaskMapping = function(localId) {
    var s = GSync.state.load();
    s.taskMappings = s.taskMappings.filter(function(m) { return m.localId !== localId; });
    GSync.state.save(s);
  };

  GSync.state.getCalendarRemoteId = function(localId) {
    var s = GSync.state.load();
    var m = s.calendarMappings.find(function(m) { return m.localId === localId; });
    return m ? m.remoteId : null;
  };

  GSync.state.getTaskRemoteId = function(localId) {
    var s = GSync.state.load();
    var m = s.taskMappings.find(function(m) { return m.localId === localId; });
    return m ? m.remoteId : null;
  };
})();

// -- GSync.saveClientId --
GSync.saveClientId = function(value) {
  if (!value || !value.trim()) {
    if (typeof toast === 'function') toast('Client ID non valido', 'err');
    return false;
  }
  localStorage.setItem('ct_gsync_client_id', value.trim());
  if (typeof toast === 'function') toast('Client ID salvato', 'ok');
  return true;
};

// -- GSync.auth --
(function() {
  var _gisLoaded = false;
  var _gisLoading = null;

  GSync.auth.loadGIS = function() {
    if (_gisLoaded && window.google && window.google.accounts) return Promise.resolve();
    if (_gisLoading) return _gisLoading;
    _gisLoading = new Promise(function(resolve, reject) {
      var s = document.createElement('script');
      s.src = 'https://accounts.google.com/gsi/client';
      s.async = true; s.defer = true;
      s.onload = function() { _gisLoaded = true; resolve(); };
      s.onerror = function() { _gisLoading = null; reject(new Error('GIS load failed')); };
      document.head.appendChild(s);
    });
    return _gisLoading;
  };

  GSync.auth.isTokenValid = function() {
    var s = GSync.state.load();
    return !!(s.accessToken && s.tokenExpiry && s.tokenExpiry > Date.now());
  };

  GSync.auth.getToken = function() {
    if (GSync.auth.isTokenValid()) return Promise.resolve(GSync.state.load().accessToken);
    var clientId = localStorage.getItem('ct_gsync_client_id');
    if (!clientId) return Promise.reject(new Error('Client ID non configurato'));
    return GSync.auth.loadGIS().then(function() {
      return new Promise(function(resolve, reject) {
        var client = window.google.accounts.oauth2.initTokenClient({
          client_id: clientId,
          scope: 'https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/tasks',
          callback: function(resp) {
            if (resp.error) { reject(new Error(resp.error)); return; }
            var s = GSync.state.load();
            s.accessToken = resp.access_token;
            s.tokenExpiry = Date.now() + (resp.expires_in || 3600) * 1000;
            GSync.state.save(s);
            if (typeof GSync.ui.updateConnectionStatus === 'function') GSync.ui.updateConnectionStatus();
            resolve(resp.access_token);
          }
        });
        client.requestAccessToken({ prompt: '' });
      });
    });
  };

  GSync.auth.revokeToken = function() {
    var s = GSync.state.load();
    var token = s.accessToken;
    s.accessToken = null; s.tokenExpiry = null;
    GSync.state.save(s);
    if (token && window.google && window.google.accounts) {
      window.google.accounts.oauth2.revoke(token, function() {});
    }
    if (typeof GSync.ui.updateConnectionStatus === 'function') GSync.ui.updateConnectionStatus();
    return Promise.resolve();
  };
})();

// -- GSync.calendar --
(function() {
  var CAL_API = 'https://www.googleapis.com/calendar/v3/calendars/primary/events';
  var COLOR_MAP = { mattina: '5', pomeriggio: '6', notte: '3' };

  GSync.calendar.turnoToEvent = function(turno) {
    var colorId = COLOR_MAP[turno.tipo] || '2';
    var orario = turno.orario || turno.ora || '08:00-16:00';
    var times = orario.split('-');
    var startT = times[0] || '08:00';
    var endT   = times[1] || '16:00';
    var startH = parseInt(startT.split(':')[0], 10);
    var endH   = parseInt(endT.split(':')[0], 10);
    var endDate = turno.data;
    if (endH < startH) {
      var d = new Date(turno.data + 'T00:00:00');
      d.setDate(d.getDate() + 1);
      endDate = d.toISOString().slice(0, 10);
    }
    return {
      summary: '[C-TURNI] ' + turno.tipo,
      description: (turno.pnome || '') + ' -- ' + turno.tipo,
      colorId: colorId,
      start: { dateTime: turno.data + 'T' + startT + ':00', timeZone: 'Europe/Rome' },
      end:   { dateTime: endDate   + 'T' + endT   + ':00', timeZone: 'Europe/Rome' }
    };
  };

  GSync.calendar.upsertEvent = function(turno, token) {
    var remoteId = GSync.state.getCalendarRemoteId(turno.id);
    var payload = GSync.calendar.turnoToEvent(turno);
    var url = remoteId ? CAL_API + '/' + encodeURIComponent(remoteId) : CAL_API;
    var method = remoteId ? 'PATCH' : 'POST';
    return fetch(url, {
      method: method,
      headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function(r) {
      if (r.status === 401) {
        var s = GSync.state.load(); s.accessToken = null; s.tokenExpiry = null; GSync.state.save(s);
        throw new Error('401');
      }
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function(data) {
      GSync.state.setCalendarMapping(turno.id, data.id);
      return data.id;
    });
  };

  GSync.calendar.syncAll = function() {
    var me = (typeof lsG === 'function') ? lsG('ct_me', {}) : {};
    var turni = (typeof lsG === 'function') ? lsG('ct_t', []) : [];
    var miei = turni.filter(function(t) { return t.pid === me.id; });
    return GSync.auth.getToken().then(function(token) {
      var created = 0, updated = 0, errors = 0;
      var chain = Promise.resolve();
      miei.forEach(function(t) {
        chain = chain.then(function() {
          var isNew = !GSync.state.getCalendarRemoteId(t.id);
          return GSync.calendar.upsertEvent(t, token).then(function() {
            if (isNew) created++; else updated++;
          }).catch(function(e) { console.error('[GSync] cal upsert:', e); errors++; });
        });
      });
      return chain.then(function() {
        var s = GSync.state.load(); s.lastSync = new Date().toISOString(); GSync.state.save(s);
        if (typeof toast === 'function') toast('Calendar: ' + created + ' creati, ' + updated + ' aggiornati' + (errors ? ', ' + errors + ' errori' : ''), errors ? 'warn' : 'ok');
        return { created: created, updated: updated, errors: errors };
      });
    }).catch(function(e) {
      console.error('[GSync] calendar.syncAll:', e);
      if (typeof toast === 'function') toast('Errore sync Calendar: ' + e.message, 'err');
      throw e;
    });
  };
})();

// -- GSync.tasks --
(function() {
  var TASKS_API = 'https://www.googleapis.com/tasks/v1/lists/@default/tasks';

  GSync.tasks.todoToTask = function(todo) {
    var t = { title: todo.tit, status: todo.done ? 'completed' : 'needsAction' };
    if (todo.note) t.notes = todo.note;
    if (todo.scad) { try { t.due = new Date(todo.scad).toISOString(); } catch(e) {} }
    return t;
  };

  GSync.tasks.upsertTask = function(todo, token) {
    var remoteId = GSync.state.getTaskRemoteId(todo.id);
    var payload = GSync.tasks.todoToTask(todo);
    var url = remoteId ? TASKS_API + '/' + encodeURIComponent(remoteId) : TASKS_API;
    var method = remoteId ? 'PATCH' : 'POST';
    return fetch(url, {
      method: method,
      headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function(r) {
      if (r.status === 401) {
        var s = GSync.state.load(); s.accessToken = null; s.tokenExpiry = null; GSync.state.save(s);
        throw new Error('401');
      }
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function(data) {
      GSync.state.setTaskMapping(todo.id, data.id);
      return data.id;
    });
  };

  GSync.tasks.syncAll = function() {
    var todos = (typeof lsG === 'function') ? lsG('ct_td', []) : [];
    return GSync.auth.getToken().then(function(token) {
      var created = 0, updated = 0, errors = 0;
      var chain = Promise.resolve();
      todos.forEach(function(td) {
        chain = chain.then(function() {
          var isNew = !GSync.state.getTaskRemoteId(td.id);
          return GSync.tasks.upsertTask(td, token).then(function() {
            if (isNew) created++; else updated++;
          }).catch(function(e) { console.error('[GSync] task upsert:', e); errors++; });
        });
      });
      return chain.then(function() {
        var s = GSync.state.load(); s.lastSync = new Date().toISOString(); GSync.state.save(s);
        if (typeof toast === 'function') toast('Tasks: ' + created + ' creati, ' + updated + ' aggiornati' + (errors ? ', ' + errors + ' errori' : ''), errors ? 'warn' : 'ok');
        return { created: created, updated: updated, errors: errors };
      });
    }).catch(function(e) {
      console.error('[GSync] tasks.syncAll:', e);
      if (typeof toast === 'function') toast('Errore sync Tasks: ' + e.message, 'err');
      throw e;
    });
  };
})();

// -- GSync.ui --
(function() {
  var PANEL_ID = 'gsync-panel';

  GSync.ui.renderPanel = function() { /* pannello OAuth rimosso */ };

  GSync.ui.updateConnectionStatus = function() {
    var el = document.getElementById('gsync-status');
    var lastEl = document.getElementById('gsync-last-sync');
    if (!el) return;
    var s = GSync.state.load();
    var hasClient = !!localStorage.getItem('ct_gsync_client_id');
    var btns = ['gsync-btn-cal','gsync-btn-tasks','gsync-btn-all'];
    if (!s.accessToken) {
      el.textContent = String.fromCodePoint(9899) + ' Non connesso'; el.style.color = 'var(--txt2)';
    } else if (s.tokenExpiry <= Date.now()) {
      el.textContent = String.fromCodePoint(128993) + ' Token scaduto'; el.style.color = 'var(--gold)';
    } else {
      el.textContent = String.fromCodePoint(128994) + ' Connesso'; el.style.color = 'var(--green)';
    }
    btns.forEach(function(id) { var b = document.getElementById(id); if (b) b.disabled = !hasClient; });
    if (lastEl && s.lastSync) lastEl.textContent = 'Ultima sync: ' + new Date(s.lastSync).toLocaleString('it-IT');
  };

  GSync.ui.setLoading = function(active) {
    var btns = ['gsync-btn-cal','gsync-btn-tasks','gsync-btn-all','gsync-btn-disc'];
    btns.forEach(function(id) { var b = document.getElementById(id); if (b) b.disabled = active; });
    var el = document.getElementById('gsync-status');
    if (active && el) { el.textContent = String.fromCodePoint(9203) + ' Sincronizzazione in corso...'; el.style.color = 'var(--txt2)'; }
  };

  GSync.ui._syncCal = function() {
    GSync.ui.setLoading(true);
    GSync.calendar.syncAll().finally(function() { GSync.ui.setLoading(false); GSync.ui.updateConnectionStatus(); });
  };

  GSync.ui._syncTasks = function() {
    GSync.ui.setLoading(true);
    GSync.tasks.syncAll().finally(function() { GSync.ui.setLoading(false); GSync.ui.updateConnectionStatus(); });
  };

  GSync.ui._syncAll = function() {
    GSync.ui.setLoading(true);
    GSync.calendar.syncAll().then(function() { return GSync.tasks.syncAll(); })
      .finally(function() { GSync.ui.setLoading(false); GSync.ui.updateConnectionStatus(); });
  };

  GSync.ui._disconnect = function() {
    ctConfirm('Disconnettere Google? I mapping esistenti verranno mantenuti.', {title:'Disconnetti Google', ico:'🔌', ok:'Disconnetti', danger:true}).then(function(ok){
      if(!ok) return;
      GSync.auth.revokeToken().then(function() {
        GSync.ui.updateConnectionStatus();
        if (typeof toast === 'function') toast('Disconnesso da Google', 'ok');
      });
    });
  };
})();


// ═══════════════════════════════════════════════════════════════════

// SYNC MODULE  write-through localStorage + GitHub Gist (AES-256-GCM)




// ═══════════════════════════════════════════════════════════════════

// AUTH MODULE  login, registrazione, sessione, ruoli

// ═══════════════════════════════════════════════════════════════════

var AuthModule = (function() {

  var DEBUG_USER = 'admin';

  var DEBUG_PASS = 'admin';

  var DEBUG_USER2 = 'debug';

  var DEBUG_PASS2 = 'debug';



  // ── SHA-256 → hex string ──

  async function _hashPassword(pass) {

    var enc = new TextEncoder();

    var buf = await crypto.subtle.digest('SHA-256', enc.encode(pass));

    return Array.from(new Uint8Array(buf)).map(function(b) { return b.toString(16).padStart(2, '0'); }).join('');

  }



  // ── Validate @carabinieri.it email ──

  function _validateEmail(email) {

    return typeof email === 'string' && email.toLowerCase().endsWith('@carabinieri.it');

  }



  // ── Session helpers ──

  function _saveSession(obj) {

    localStorage.setItem('ct_session', JSON.stringify(obj));

  }



  function _clearSession() {

    localStorage.removeItem('ct_session');

  }



  function getSession() {

    try {

      var s = localStorage.getItem('ct_session');

      if (!s) return null;

      var obj = JSON.parse(s);

      if (!obj || !obj.userId) return null;

      return obj;

    } catch(e) { return null; }

  }



  // ── Users CRUD ──

  function _getUsers() {

    try {

      return JSON.parse(localStorage.getItem('ct_users') || '[]') || [];

    } catch(e) { return []; }

  }



  function _saveUsers(users) {

    localStorage.setItem('ct_users', JSON.stringify(users));

    if(window.FirebaseModule)window.FirebaseModule.saveUsers(users);

  }



  function _findUser(email) {

    return _getUsers().find(function(u) { return u.email.toLowerCase() === email.toLowerCase(); }) || null;

  }



  // ── Show/hide overlay ──

  function _showOverlay(panel) {
    // Nascondi splash quando si mostra il login
    if(window._splashEmergencyTimer){ clearTimeout(window._splashEmergencyTimer); window._splashEmergencyTimer=null; }
    if(typeof window._hideSplash === 'function') window._hideSplash();
    var overlay   = document.getElementById('auth-overlay');

    var loginPanel = document.getElementById('auth-login');

    var regPanel   = document.getElementById('auth-register');

    var tabLogin   = document.getElementById('tab-login');

    var tabReg     = document.getElementById('tab-register');

    if (overlay) overlay.style.display = 'flex';

    var isLogin = (panel === 'login');

    if (loginPanel) loginPanel.style.display = isLogin ? 'block' : 'none';

    if (regPanel)   regPanel.style.display   = isLogin ? 'none'  : 'block';

    if (tabLogin)  { tabLogin.classList.toggle('active', isLogin); }

    if (tabReg)    { tabReg.classList.toggle('active', !isLogin); }

  }



  function _hideOverlay() {
    // Nascondi splash quando l'utente è loggato
    if(window._splashEmergencyTimer){ clearTimeout(window._splashEmergencyTimer); window._splashEmergencyTimer=null; }
    if(typeof window._hideSplash === 'function') window._hideSplash();
    var overlay = document.getElementById('auth-overlay');

    if (overlay) overlay.style.display = 'none';
    var pgApp = document.getElementById('pg-app');
    if(pgApp){ pgApp.style.display='flex'; pgApp.classList.add('on'); }
    // Forza reflow per garantire che pg-app sia visibile prima di qualsiasi animazione
    if(pgApp) void pgApp.offsetHeight;

  }



  function _showAuthError(panelId, msg) {

    var el = document.getElementById(panelId);

    if (el) { el.textContent = msg; el.style.display = 'block'; }

  }



  function _clearAuthError(panelId) {

    var el = document.getElementById(panelId);

    if (el) { el.textContent = ''; el.style.display = 'none'; }

  }



  return {

    // ── Init: check session on page load ──

    init: function() {

      var session = getSession();

      if (!session) {

        _showOverlay('login');

      } else {

        _hideOverlay();

        if (session.isDebug) {

          var banner = document.getElementById('debug-banner');

          if (banner) banner.style.display = 'flex';

        }

        if(window.FirebaseModule)window.FirebaseModule.onSessionRestore(session);

        AuthModule.renderGestioneMemebri();

      }

    },



    showLogin: function() { _showOverlay('login'); },

    showRegister: function() { _showOverlay('register'); },



    getSession: getSession,



    isComandante: function() {

      var s = getSession();

      return s && s.ruolo === 'comandante';

    },



    // ── Login ──

    login: async function(email, pass) {
      _clearAuthError('auth-login-err');



      // Debug bypass

      if (email === DEBUG_USER && pass === DEBUG_PASS) {

        _saveSession({

          userId: 'admin',

          ruolo: 'comandante',

          reparto: 'Debug',

          nome: 'Admin',

          cognome: 'Debug',

          loginAt: new Date().toISOString(),

          isDebug: true

        });

                // Popola ct_me con i dati reali PRIMA di mostrare la dashboard
        var _U = lsG('ct_u', []);
        var _adm = null;
        for (var _di = 0; _di < _U.length; _di++) {
          if (_U[_di].id === 1) { _adm = _U[_di]; break; }
        }
        if (_adm) { lsS('ct_me', _adm); }
        else {
          lsS('ct_me', {id:1,nome:'Gerry',cognome:'Scotti',pw:'admin',
            grado:'Gen.',ruolo:'comandante',reparto:'Varazze',
            nucleo:'Stazione Varazze',tipo:'ter',stato:'approved',ava:null});
        }

        _hideOverlay();

        var banner = document.getElementById('debug-banner');
        if (banner) banner.style.display = 'flex';

        if (typeof aggUI === 'function') aggUI();
        _ripristinaPagina();

        return;

      }

      // Debug bypass 2 (addetto)
      if (email === DEBUG_USER2 && pass === DEBUG_PASS2) {
        _saveSession({
          userId: 'debug2',
          ruolo: 'addetto',
          reparto: 'Debug',
          nome: 'Debug',
          cognome: 'Addetto',
          loginAt: new Date().toISOString(),
          isDebug: true
        });
        lsS('ct_me', {id:2,nome:'Debug',cognome:'Addetto',pw:'debug',
          grado:'',ruolo:'addetto',reparto:'Debug',
          nucleo:'Debug Nucleo',tipo:'ter',stato:'approved',ava:null});
        _hideOverlay();
        var banner2 = document.getElementById('debug-banner');
        if (banner2) banner2.style.display = 'flex';
        if (typeof aggUI === 'function') aggUI();
        _ripristinaPagina();
        return;
      }





      // ── Firebase Authentication ──────────────────────────────

      try {

        var fbAuth = window._fbAuth;
        if (!fbAuth) { _showAuthError('auth-login-err', 'Errore: Firebase non pronto. Ricarica la pagina.'); return; }
        _showAuthError('auth-login-err', 'Connessione in corso...');
        var cred = await window._fbSignIn(fbAuth, email, pass);
        var fbUser = cred.user;
        _showAuthError('auth-login-err', 'Caricamento profilo...');
        var profile = await window.FirebaseModule.getUserProfile(fbUser.uid);
        if (!profile) {
          // Prova a estrarre nome e cognome dall'email (formato nome.cognome@...)
          var emailLocal = fbUser.email ? fbUser.email.split('@')[0] : '';
          var emailParts = emailLocal.split('.');
          var nomeFromEmail = emailParts[0] ? (emailParts[0].charAt(0).toUpperCase()+emailParts[0].slice(1)) : emailLocal;
          var cognomeFromEmail = emailParts[1] ? (emailParts[1].charAt(0).toUpperCase()+emailParts[1].slice(1)) : '';
          profile = { email: fbUser.email, nome: fbUser.displayName || nomeFromEmail,
                      cognome: cognomeFromEmail, ruolo: 'addetto', stato: 'approved', reparto: 'default' };
        }
        // Fix profili vecchi: nome="emanuele.culatto" senza cognome separato
        if(profile.nome && !(profile.cognome && profile.cognome.trim())){
          var _nm = profile.nome;
          if(_nm.indexOf('.') !== -1){
            var _pts = _nm.split('.');
            profile.nome = _pts[0].charAt(0).toUpperCase()+_pts[0].slice(1).toLowerCase();
            profile.cognome = _pts[1] ? (_pts[1].charAt(0).toUpperCase()+_pts[1].slice(1).toLowerCase()) : '';
          } else if(_nm.indexOf(' ') !== -1){
            var _sps = _nm.trim().split(/\s+/);
            profile.nome = _sps[0];
            profile.cognome = _sps.slice(1).join(' ');
          }
        }
        if (profile.stato === 'pending') {
          _showAuthError('auth-login-err', 'Account in attesa di approvazione del Comandante.');
          await window._fbSignOut(fbAuth); return;
        }
        if (profile.stato === 'rejected') {
          _showAuthError('auth-login-err', 'Account non approvato. Contattare il Comandante.');
          await window._fbSignOut(fbAuth); return;
        }
        _saveSession({
          userId: fbUser.uid, email: fbUser.email,
          ruolo: profile.ruolo || 'addetto',
          reparto: profile.reparto || '',
          nome: profile.nome || '', cognome: profile.cognome || '',
          loginAt: new Date().toISOString(), isDebug: false
        });
        // Salva profilo in ct_me per uso locale dell'app
        // Assicura che me.id sia sempre valorizzato (per confronto con pid nei turni)
        if(!profile.id) profile.id = profile.uid || fbUser.uid;
        profile.uid = fbUser.uid;
        lsS('ct_me', profile);
        // Check stato pending: mostra schermata attesa invece della dashboard
        if (profile.stato === 'pending') {
          _hideOverlay();
          if(typeof _showPendingScreen === 'function') _showPendingScreen(profile);
          return;
        }
        _hideOverlay();
        if (typeof aggUI === 'function') aggUI();
        if (typeof aggiornaWidget === 'function') aggiornaWidget();
        if (typeof renderWidgetProssimo === 'function') renderWidgetProssimo(profile);
        AuthModule.renderGestioneMemebri();
        _ripristinaPagina();
        if(window.FirebaseModule) window.FirebaseModule.onLogin(AuthModule.getSession()).catch(function(e){ console.warn('onLogin bg:', e.message); });
      } catch(fbErr) {
        var msg = fbErr.code === 'auth/invalid-credential' || fbErr.code === 'auth/wrong-password' || fbErr.code === 'auth/user-not-found'
          ? 'Credenziali non valide'
          : fbErr.code === 'auth/too-many-requests' ? 'Troppi tentativi. Riprova tra qualche minuto.'
          : fbErr.code === 'auth/network-request-failed' ? 'Errore di rete. Controlla la connessione.'
          : (fbErr.code ? fbErr.code : fbErr.message);
        _showAuthError('auth-login-err', msg); return;

      }

    },

    // ── Register ──

    register: async function(dati) {

      _clearAuthError('auth-reg-err');

      var nome = (dati.nome || '').trim();

      var cognome = (dati.cognome || '').trim();

      var email = (dati.email || '').trim();

      var pass = dati.password || '';

      var reparto = (dati.reparto || '').trim();

      var ruolo = dati.ruolo || 'addetto';
      var grado = (dati.grado || '').trim();
      var tipo  = (dati.tipo  || 'ter').trim();
      var modalita = dati.modalita || 'reparto';



      if (!nome || !cognome || !email || !pass) {

        _showAuthError('auth-reg-err', 'Compila tutti i campi'); return;

      }
      if (modalita === 'reparto' && !reparto) {
        _showAuthError('auth-reg-err', 'Seleziona il reparto o scegli "Solo per me"'); return;
      }

      if (!_validateEmail(email)) {

        _showAuthError('auth-reg-err', 'Email deve essere @carabinieri.it'); return;

      }



            try {

        var fbAuth = window._fbAuth;

        if (!fbAuth) throw new Error('Firebase Auth non inizializzato');

        var regCred = await window._fbCreateUser(fbAuth, email, pass);

        var fbUid = regCred.user.uid;

        // Reparto finale: privato se modalità personale
        var repartoFinale = (modalita === 'privato' || !reparto) ? ('privato_' + fbUid) : reparto;

        // Determina stato e ruolo: logica pioniere
        var ruoloFinale = 'addetto';
        var stato = 'approved';
        if (!_isPrivato(repartoFinale)) {
          // Se registrazione da link invito → sempre addetto+pending (il reparto ha già un comandante)
          if (window._joinInviteReparto) {
            ruoloFinale = 'addetto';
            stato = 'pending';
            window._joinInviteReparto = null; // reset flag
          } else {
            // Se nessun comandante approvato esiste → primo iscritto diventa comandante approved
            var existingUsers = await window.FirebaseModule.getUsersByReparto(repartoFinale);

            var hasCmdApproved = existingUsers.some(function(u) {

              return u.ruolo === 'comandante' && u.stato === 'approved';

            });

            // Pioniere: nessun utente nel reparto → comandante approved
            var isPioniere = existingUsers.length === 0 || !hasCmdApproved;
            ruoloFinale = isPioniere ? 'comandante' : 'addetto';
            stato = isPioniere ? 'approved' : 'pending';
          }
        }



        // Salva profilo su Firestore

        var newProfile = {

          uid: fbUid, email: email, nome: nome, cognome: cognome,

          ruolo: ruoloFinale, grado: grado, tipo: tipo, stato: stato, reparto: repartoFinale,

          registratoIl: new Date().toISOString()

        };

        await window.FirebaseModule.saveUserProfile(fbUid, newProfile, repartoFinale);

        // Collega placeholder Excel: cerca in ct_p un profilo con stesso nome e uid null
        _collegaPlaceholder(nome, cognome, fbUid, repartoFinale);



        // Aggiorna anche ct_users locale

        var localUsers = _getUsers();

        localUsers.push(Object.assign({ passwordHash: '' }, newProfile));

        localStorage.setItem('ct_users', JSON.stringify(localUsers));



        if (stato === 'approved') {

          await AuthModule.login(email, pass);

        } else {

          _showAuthError('auth-reg-err', 'Registrazione completata. Attendi l\'approvazione del Comandante.');

          setTimeout(function() { _showOverlay('login'); }, 3000);

        }

      } catch(fbErr) {

        var regMsg = fbErr.code === 'auth/email-already-in-use' ? 'Email gia\' registrata'

          : (fbErr.code === 'auth/weak-password' ? 'Password troppo corta (min. 6 caratteri)' : fbErr.message);

        _showAuthError('auth-reg-err', regMsg); return;

      }


    },



    // ── Logout ──

    logout: function() {
      // Pulisci sessione locale prima (non aspettare Firebase)
      _clearSession();
      localStorage.removeItem('ct_me');
      var pgApp = document.getElementById('pg-app');
      if(pgApp){ pgApp.classList.remove('on'); pgApp.style.display='none'; }
      var banner = document.getElementById('debug-banner');
      if (banner) banner.style.display = 'none';
      _showOverlay('login');
      // Poi fai signout Firebase in background (non blocca)
      try { if(window.FirebaseModule) window.FirebaseModule.signOut(); } catch(e){ console.warn('signOut err:', e); }
    },



    // ── Render Gestione Membri section (called from aggUI) ──


    renderGestioneMembri: function() { AuthModule.renderGestioneMemebri(); },
    renderGestioneMemebri: function() {

      var container = document.getElementById('pg-membri-wrap') || document.getElementById('gestione-membri-section');
      if (!container) return;

      var session = getSession();
      var me = lsG('ct_me', null);
      var ruoloMe = (me && me.ruolo) || (session && session.ruolo) || '';
      var hasAccess = ruoloMe === 'comandante' || ruoloMe === 'vice';

      if (!session || !hasAccess) {
        container.innerHTML = '<p style="color:var(--txt2);font-size:13px;text-align:center;padding:32px">Solo il Comandante o il Vice possono gestire i membri.</p>';
        return;
      }

      container.style.display = 'block';

      var users = _getUsers();
      var pending  = users.filter(function(u) { return u.stato === 'pending'; });
      var approved = users.filter(function(u) { return u.stato === 'approved' && u.email !== session.userId; });

      var html = '<h3 style="margin:0 0 12px;font-size:1rem;color:var(--blue)">&#128101; Gestione Membri</h3>';

      // ── Richieste in attesa ──
      html += '<div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--txt2);margin-bottom:8px">Richieste in attesa</div>';

      if (pending.length === 0) {
        html += '<p style="color:var(--txt2);font-size:.9rem;margin-bottom:16px">Nessuna richiesta in attesa</p>';
      } else {
        pending.forEach(function(u) {
          var regDate = u.registratoIl ? new Date(u.registratoIl).toLocaleDateString('it-IT') : '-';
          var uid_key = u.uid || u.email;
          var repLabel = (u.reparto||'').replace(/_/g,' ');
          html += '<div style="background:var(--bg2);border-radius:12px;padding:12px;margin-bottom:8px">';
          html += '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px">';
          html += '<div><div style="font-weight:600">' + (u.grado||'') + ' ' + u.nome + ' ' + u.cognome + '</div>';
          html += '<div style="font-size:.8rem;color:var(--txt2)">' + u.email + ' · ' + regDate + '</div>';
          html += '<div style="font-size:.75rem;color:var(--blue);margin-top:2px">&#128205; ' + repLabel + '</div></div>';
          html += '<div style="display:flex;gap:6px;flex-wrap:wrap">';
          html += '<button class="btn btn-p" style="padding:6px 12px;font-size:.82rem" onclick="AuthModule._approva(\'' + uid_key + '\')">&#10003; Approva</button>';
          html += '<button class="btn" style="padding:6px 12px;font-size:.82rem;background:rgba(200,16,46,.15);color:var(--red);border:1px solid rgba(200,16,46,.3)" onclick="AuthModule._rifiuta(\'' + uid_key + '\')">&#10005; Rifiuta</button>';
          html += '</div></div></div>';
        });
      }

      // ── Membri approvati con gestione ruolo ──
      if (approved.length > 0) {
        html += '<div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--txt2);margin:16px 0 8px">Membri approvati</div>';
        approved.forEach(function(u) {
          var uid_key = u.uid || u.email;
          var ruoloBadge = u.ruolo === 'comandante'
            ? '<span style="font-size:10px;background:rgba(200,16,46,.15);color:var(--red);padding:2px 7px;border-radius:20px;font-weight:700">&#128081; Comandante</span>'
            : u.ruolo === 'vice'
            ? '<span style="font-size:10px;background:rgba(255,159,67,.15);color:var(--orange);padding:2px 7px;border-radius:20px;font-weight:700">&#11088; Vice</span>'
            : '<span style="font-size:10px;background:rgba(91,159,255,.12);color:var(--blue);padding:2px 7px;border-radius:20px;font-weight:700">Addetto</span>';
          html += '<div style="background:var(--bg2);border-radius:12px;padding:10px 12px;margin-bottom:6px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">';
          html += '<div><div style="font-weight:600;font-size:.9rem">' + (u.grado||'') + ' ' + u.nome + ' ' + u.cognome + '</div>';
          html += '<div style="margin-top:3px">' + ruoloBadge + '</div></div>';
          // Solo il comandante può cambiare ruoli (non il vice)
          if (ruoloMe === 'comandante' && u.ruolo !== 'comandante') {
            html += '<select onchange="AuthModule._cambiaRuolo(\'' + uid_key + '\',this.value)" style="padding:5px 8px;border-radius:8px;background:var(--card);border:1px solid var(--border);color:var(--txt);font-size:.82rem;cursor:pointer">';
            html += '<option value="">-- Cambia ruolo --</option>';
            html += '<option value="vice"' + (u.ruolo==='vice'?' selected':'') + '>&#11088; Vice Comandante</option>';
            html += '<option value="addetto"' + (u.ruolo==='addetto'?' selected':'') + '>Addetto</option>';
            html += '<option value="comandante">&#128081; Trasferisci Comando</option>';
            html += '</select>';
          }
          // FIX: il Comandante può eliminare qualsiasi membro (non se stesso)
          if (ruoloMe === 'comandante' && u.ruolo !== 'comandante') {
            html += '<button class="btn btn-sm" style="padding:6px 10px;font-size:.78rem;background:rgba(200,16,46,.12);color:var(--red);border:1px solid rgba(200,16,46,.25);margin-left:4px" onclick="AuthModule._eliminaMembro(\'' + uid_key + '\')">&#128465; Elimina</button>';
          }
          html += '</div>';
        });
      }

      if(container) container.innerHTML = html;

    },



    // ── Approve member ──

    _approva: async function(uid) {
      var users = _getUsers();
      var u = users.find(function(x) { return x.uid === uid || x.email === uid; });
      if (!u) { if(typeof toast==='function') toast('Utente non trovato', 'err'); return; }
      u.stato = 'approved';
      _saveUsers(users);
      try {
        if(window.FirebaseModule) await window.FirebaseModule.saveUserProfile(u.uid || uid, u, u.reparto);
      } catch(e) { console.warn('_approva Firebase:', e.message); }
      AuthModule.renderGestioneMemebri();
      if (typeof toast === 'function') toast((u.nome||'') + ' ' + (u.cognome||'') + ' approvato', 'ok');
    },

    // ── Reject member ──

    _rifiuta: async function(uid) {
      var users = _getUsers();
      var u = users.find(function(x) { return x.uid === uid || x.email === uid; });
      if (!u) { if(typeof toast==='function') toast('Utente non trovato', 'err'); return; }
      u.stato = 'rejected';
      _saveUsers(users);
      try {
        if(window.FirebaseModule) await window.FirebaseModule.saveUserProfile(u.uid || uid, u, u.reparto);
      } catch(e) { console.warn('_rifiuta Firebase:', e.message); }
      AuthModule.renderGestioneMemebri();
      if (typeof toast === 'function') toast((u.nome||'') + ' ' + (u.cognome||'') + ' rifiutato', 'ok');
    },



    // ── Cambia ruolo membro (solo comandante può farlo) ──

    _cambiaRuolo: async function(uid, nuovoRuolo) {
      if(!nuovoRuolo) return;
      var session = getSession();
      if(!session) return;
      var me = lsG('ct_me', null);
      if(!me || me.ruolo !== 'comandante') { toast('Solo il Comandante può cambiare i ruoli', 'err'); return; }

      var users = _getUsers();
      var target = users.find(function(u){ return u.uid === uid || u.email === uid; });
      if(!target || target.stato !== 'approved') { toast('Utente non valido', 'err'); return; }

      var nomeTarget = (target.grado||'') + ' ' + target.nome + ' ' + target.cognome;

      if(nuovoRuolo === 'comandante') {
        if(!await ctConfirm('Trasferire il comando a <strong>' + nomeTarget + '</strong>?<br><small>Diventerai Addetto.</small>', {title:'Trasferisci Comando', ico:'🎖️', ok:'Trasferisci', danger:true})) return;
        users.forEach(function(u){
          if(u.uid === me.uid || u.email === session.userId) u.ruolo = 'addetto';
        });
        session.ruolo = 'addetto';
        me.ruolo = 'addetto';
        lsS('ct_session', session);
        lsS('ct_me', me);
        try { if(window.FirebaseModule) await window.FirebaseModule.saveUserProfile(me.uid||session.userId, me, me.reparto); } catch(e){}
      } else if(nuovoRuolo === 'vice') {
        if(!await ctConfirm('Nominare <strong>' + nomeTarget + '</strong> come Vice Comandante?', {title:'Nomina Vice', ico:'⭐', ok:'Nomina'})) return;
      } else {
        if(!await ctConfirm('Rimuovere il ruolo speciale a <strong>' + nomeTarget + '</strong>?', {title:'Rimuovi Ruolo', ico:'⬇️', ok:'Rimuovi', danger:true})) return;
      }

      target.ruolo = nuovoRuolo;
      _saveUsers(users);
      try {
        if(window.FirebaseModule) await window.FirebaseModule.saveUserProfile(target.uid||uid, target, target.reparto);
      } catch(e){ console.warn('_cambiaRuolo Firebase:', e.message); }

      // Se il target è l'utente corrente (es. riceve il comando), aggiorna sessione locale
      if(target.uid === me.uid || target.email === session.userId) {
        session.ruolo = nuovoRuolo;
        me.ruolo = nuovoRuolo;
        lsS('ct_session', session);
        lsS('ct_me', me);
      }

      toast(nomeTarget + ' → ' + (nuovoRuolo === 'comandante' ? 'Comandante' : nuovoRuolo === 'vice' ? 'Vice Comandante' : 'Addetto'), 'ok');
      AuthModule.renderGestioneMemebri();
      if(typeof aggUI === 'function') aggUI();
    },

    // ── Elimina membro (solo Comandante) ──
    _eliminaMembro: async function(uid) {
      var users = _getUsers();
      var u = users.find(function(x) { return x.uid === uid || x.email === uid; });
      if (!u) { if(typeof toast==='function') toast('Utente non trovato', 'err'); return; }
      var nome = (u.nome||'') + ' ' + (u.cognome||'');
      if(!await ctConfirm('Eliminare definitivamente <strong>' + nome.trim() + '</strong> dal reparto?<br><small>Questa azione non è reversibile.</small>', {title:'Elimina Membro', ico:'🗑️', ok:'Elimina', danger:true})) return;
      // Rimuovi dalla lista locale
      var newUsers = users.filter(function(x) { return x.uid !== uid && x.email !== uid; });
      _saveUsers(newUsers);
      // Rimuovi da Firebase
      try {
        if(window.FirebaseModule) {
          var session = getSession();
          if(session && session.reparto) {
            var repId = session.reparto.toLowerCase().replace(/\s+/g,'_');
            await window.FirebaseModule.deleteUserFromReparto(u.uid || uid, repId);
          }
        }
      } catch(e) { console.warn('_eliminaMembro Firebase:', e.message); }
      AuthModule.renderGestioneMemebri();
      if(typeof aggUI === 'function') aggUI();
      if(typeof toast === 'function') toast(nome.trim() + ' eliminato', 'ok');
    },

    // ── Transfer comandante role (legacy, mantenuto per compatibilità) ──

    _trasferisciRuolo: async function() {

      var sel = document.getElementById('transfer-role-sel');

      if (!sel || !sel.value) return;

      var targetEmail = sel.value;

      var session = getSession();

      if (!session) return;

      var users = _getUsers();

      var target = users.find(function(u) { return u.email === targetEmail; });

      if (!target || target.stato !== 'approved') { if (typeof toast === 'function') toast('Utente non valido', 'err'); return; }
      if(!await ctConfirm('Trasferire il ruolo Comandante a <strong>' + target.nome + ' ' + target.cognome + '</strong>?', {title:'Trasferisci Comando', ico:'🎖️', ok:'Trasferisci', danger:true})) return;

      users.forEach(function(u) {

        if (u.email === session.userId) u.ruolo = 'addetto';

        if (u.email === targetEmail) u.ruolo = 'comandante';

      });

      _saveUsers(users);

      // Update current session

      session.ruolo = 'addetto';

      _saveSession(session);

      if (typeof toast === 'function') toast('Ruolo trasferito a ' + target.nome, 'ok');

      AuthModule.renderGestioneMemebri();

      if (typeof aggUI === 'function') aggUI();

    }

  };

})();





// ═══════════════════════════════════════════════════════════
// DINO GAME — minigioco canvas con emoji
// ═══════════════════════════════════════════════════════════
(function(){

  var _dinoInited = false;
  var _dinoRunning = false;
  var _dinoRaf = null;

  // Costanti fisiche
  var GROUND_RATIO = 0.80;   // y del suolo come % dell'altezza canvas
  var GRAVITY      = 0.7;
  var JUMP_VY      = -12;
  var BASE_SPEED   = 4;
  var MAX_SPEED    = 13;
  var ACCEL        = 0.0015;  // incremento velocità per frame

  // Stato gioco
  var state = {};

  function resetState(cw, ch) {
    var ground = Math.floor(ch * GROUND_RATIO);
    state = {
      score:    0,
      speed:    BASE_SPEED,
      over:     false,
      started:  false,
      ground:   ground,
      // Dino
      dx:       Math.floor(cw * 0.12),
      dy:       ground,
      vy:       0,
      onGround: true,
      // Ostacoli
      obstacles: [],
      nextObs:   90,
      // Nuvole decorative
      clouds: [
        { x: cw * 0.4, y: ch * 0.15 },
        { x: cw * 0.75, y: ch * 0.08 },
        { x: cw * 0.9, y: ch * 0.22 }
      ],
      frame: 0
    };
  }

  // Dimensioni emoji in px (canvas units)
  var DINO_W = 34, DINO_H = 34;
  var OBS_W  = 26, OBS_H  = 32;

  function draw(ctx, cw, ch) {
    var s = state;

    // Sfondo
    ctx.clearRect(0, 0, cw, ch);

    // Cielo sfumato più ricco
    var grad = ctx.createLinearGradient(0, 0, 0, s.ground);
    grad.addColorStop(0, 'rgba(5,10,20,0.95)');
    grad.addColorStop(0.6, 'rgba(10,20,50,0.5)');
    grad.addColorStop(1, 'rgba(41,121,255,0.06)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, cw, s.ground);

    // Stelle (statiche, decorative)
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    [[cw*0.15,ch*0.12],[cw*0.3,ch*0.06],[cw*0.55,ch*0.18],[cw*0.7,ch*0.05],[cw*0.85,ch*0.14],[cw*0.95,ch*0.09]].forEach(function(p){
      ctx.fillRect(p[0], p[1], 1.5, 1.5);
    });

    // Suolo con doppia linea
    ctx.strokeStyle = 'rgba(91,159,255,0.25)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, s.ground + DINO_H * 0.1);
    ctx.lineTo(cw, s.ground + DINO_H * 0.1);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, s.ground + DINO_H * 0.1 + 3);
    ctx.lineTo(cw, s.ground + DINO_H * 0.1 + 3);
    ctx.stroke();

    // Nuvole
    ctx.font = '16px serif';
    ctx.globalAlpha = 0.3;
    s.clouds.forEach(function(c) {
      ctx.fillText('☁️', c.x, c.y);
    });
    ctx.globalAlpha = 1;

    // Punteggio con sfondo
    var scoreStr = Math.floor(s.score).toString().padStart(5, '0');
    ctx.font = 'bold 14px -apple-system, monospace';
    ctx.fillStyle = 'rgba(255,255,255,0.65)';
    ctx.textAlign = 'right';
    ctx.fillText(scoreStr, cw - 10, 20);
    ctx.textAlign = 'left';

    // Velocità indicatore (barra sottile in alto)
    if(s.started && !s.over){
      var speedPct = (s.speed - BASE_SPEED) / (MAX_SPEED - BASE_SPEED);
      ctx.fillStyle = 'rgba(91,159,255,0.3)';
      ctx.fillRect(0, 0, cw * speedPct, 2);
    }

    // Dino — flip orizzontale per farlo correre verso destra
    ctx.save();
    ctx.scale(-1, 1);
    ctx.font = DINO_W + 'px serif';
    ctx.fillText('🦖', -(s.dx + DINO_W * 0.5), s.dy + DINO_H * 0.15);
    ctx.restore();

    // Ostacoli a terra
    ctx.font = OBS_W + 'px serif';
    s.obstacles.forEach(function(o) {
      if(o.flying){
        // Pterodattilo volante
        ctx.save();
        ctx.scale(-1,1);
        ctx.font = (OBS_W+4) + 'px serif';
        ctx.fillText('🦅', -(o.x + OBS_W * 0.5), o.y);
        ctx.restore();
      } else {
        ctx.fillText('🌵', o.x - OBS_W * 0.5, s.ground + OBS_H * 0.15);
      }
    });

    // Schermata iniziale
    if (!s.started && !s.over) {
      ctx.fillStyle = 'rgba(0,0,0,0.35)';
      ctx.fillRect(cw/2 - 100, ch/2 - 28, 200, 44);
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      ctx.font = 'bold 14px -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('🦖  Tocca per iniziare', cw / 2, ch / 2 - 4);
      ctx.font = '11px -apple-system, sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.fillText('Spazio / Tap per saltare', cw / 2, ch / 2 + 14);
      ctx.textAlign = 'left';
    }

    // Game Over
    if (s.over) {
      ctx.fillStyle = 'rgba(0,0,0,0.55)';
      ctx.fillRect(0, 0, cw, ch);
      // Box centrato
      var bw = 200, bh = 80;
      var bx = (cw - bw) / 2, by = (ch - bh) / 2;
      ctx.fillStyle = 'rgba(20,30,50,0.95)';
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(bx, by, bw, bh, 14) : ctx.rect(bx, by, bw, bh);
      ctx.fill();
      ctx.strokeStyle = 'rgba(91,159,255,0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 17px -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('💀 Game Over', cw / 2, by + 26);
      ctx.font = '12px -apple-system, sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.75)';
      ctx.fillText('Punteggio: ' + Math.floor(s.score), cw / 2, by + 46);
      ctx.fillText('Tocca per riprovare', cw / 2, by + 64);
      ctx.textAlign = 'left';
    }
  }

  function update(cw) {
    var s = state;
    if (!s.started || s.over) return;

    s.frame++;
    s.score += s.speed * 0.04;
    s.speed = Math.min(MAX_SPEED, BASE_SPEED + s.frame * ACCEL);

    // Fisica dino
    s.vy += GRAVITY;
    s.dy += s.vy;
    if (s.dy >= s.ground) {
      s.dy = s.ground;
      s.vy = 0;
      s.onGround = true;
    }

    // Nuvole
    s.clouds.forEach(function(c) {
      c.x -= s.speed * 0.25;
      if (c.x < -30) c.x = cw + 30;
    });

    // Spawn ostacoli (cactus + pterodattilo dopo score 200)
    s.nextObs--;
    if (s.nextObs <= 0) {
      var canSpawnFlying = s.score > 200 && Math.random() < 0.3;
      if(canSpawnFlying){
        // Pterodattilo: vola a 2 altezze diverse
        var flyH = s.ground - DINO_H * (Math.random() < 0.5 ? 1.8 : 3.2);
        s.obstacles.push({ x: cw + OBS_W, flying: true, y: flyH });
      } else {
        s.obstacles.push({ x: cw + OBS_W, flying: false });
      }
      var interval = Math.floor(55 + Math.random() * 55 - s.speed * 1.5);
      s.nextObs = Math.max(30, interval);
    }

    // Muovi ostacoli
    s.obstacles = s.obstacles.filter(function(o) {
      o.x -= s.speed;
      return o.x > -OBS_W;
    });

    // Collisione AABB (hitbox ridotta del 30% per fairness)
    var margin = 0.30;
    var dLeft  = s.dx - DINO_W * (0.5 - margin);
    var dRight = s.dx + DINO_W * (0.5 - margin);
    var dTop   = s.dy - DINO_H * (1 - margin * 0.5);
    var dBot   = s.dy + DINO_H * 0.15;

    for (var i = 0; i < s.obstacles.length; i++) {
      var o = s.obstacles[i];
      var oLeft  = o.x - OBS_W * (0.5 - margin);
      var oRight = o.x + OBS_W * (0.5 - margin);
      var oTop, oBot;
      if(o.flying){
        oTop = o.y - (OBS_W+4) * 0.8;
        oBot = o.y + (OBS_W+4) * 0.15;
      } else {
        oTop   = s.ground - OBS_H * (1 - margin * 0.5);
        oBot   = s.ground + OBS_H * 0.15;
      }
      if (dRight > oLeft && dLeft < oRight && dBot > oTop && dTop < oBot) {
        gameOver();
        return;
      }
    }
  }

  function gameOver() {
    state.over = true;
    _dinoRunning = false;
    cancelAnimationFrame(_dinoRaf);

    var hi = parseInt(localStorage.getItem('ct_dino_hi') || '0', 10);
    var sc = Math.floor(state.score);
    if (sc > hi) {
      localStorage.setItem('ct_dino_hi', sc);
      hi = sc;
    }
    // Aggiorna il display record
    var recEl = document.getElementById('dino-record');
    if (recEl) recEl.textContent = hi;

    // Salva su Firebase e mostra leaderboard reparto
    _dinoSaveScore(sc);
  }

  function _dinoSaveScore(sc) {
    try {
      var sess = lsG('ct_session', null);
      var me = lsG('ct_me', null);
      if(!sess || !sess.userId || !window.FirebaseModule) return;
      var rep = (me && me.reparto) ? me.reparto : null;
      if(!rep || rep.startsWith('privato_')) return;
      var nome = me ? ((me.nome||'') + ' ' + (me.cognome||'')).trim() : 'Anonimo';
      // Salva solo se è un nuovo record personale
      window.FirebaseModule.saveDinoScore(sess.userId, nome, sc, rep)
        .then(function(){
          return window.FirebaseModule.getDinoLeaderboard(rep);
        })
        .then(function(top5){
          if(!top5 || !top5.length) return;
          _dinoShowLeaderboard(top5, sc);
        })
        .catch(function(){});
    } catch(e) {}
  }

  function _dinoShowLeaderboard(top5, myScore) {
    // Rimuovi eventuale leaderboard precedente
    var old = document.getElementById('dino-lb-popup');
    if(old) old.remove();
    var html = '<div id="dino-lb-popup" style="position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:rgba(10,20,40,.97);border:1px solid rgba(91,159,255,.4);border-radius:16px;padding:14px 18px;z-index:99999;min-width:220px;max-width:300px;box-shadow:0 8px 32px rgba(0,0,0,.6)">'
      +'<div style="font-size:13px;font-weight:800;color:var(--gold,#ffd166);margin-bottom:10px;text-align:center">🏆 Top Reparto</div>';
    top5.forEach(function(s,i){
      var isMe = s.score === myScore;
      html += '<div style="display:flex;align-items:center;gap:8px;padding:4px 0;'+(isMe?'color:#5b9fff;font-weight:800':'color:rgba(255,255,255,.8)')+'">'
        +'<span style="font-size:12px;width:18px;text-align:center">'+(i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1)+'.')+' </span>'
        +'<span style="flex:1;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+s.nome+'</span>'
        +'<span style="font-size:13px;font-weight:900">'+s.score+'</span>'
        +'</div>';
    });
    html += '<button onclick="document.getElementById(\'dino-lb-popup\').remove()" style="width:100%;margin-top:10px;background:rgba(255,255,255,.1);border:none;border-radius:8px;padding:6px;font-size:11px;color:rgba(255,255,255,.7);cursor:pointer;appearance:none;-webkit-appearance:none">Chiudi</button></div>';
    document.body.insertAdjacentHTML('beforeend', html);
    setTimeout(function(){ var lb = document.getElementById('dino-lb-popup'); if(lb) lb.remove(); }, 7000);
  }

  function loop(ctx, cw, ch) {
    update(cw);
    draw(ctx, cw, ch);
    if (!state.over) {
      _dinoRaf = requestAnimationFrame(function() { loop(ctx, cw, ch); });
    }
  }

  // Variabili di contesto condivise tra jump e loop
  var _ctx = null, _cw = 0, _ch = 0;

  function jump() {
    if (state.over) {
      resetState(_cw, _ch);
      state.started = true;
      if (_dinoRaf) { cancelAnimationFrame(_dinoRaf); _dinoRaf = null; }
      _dinoRunning = false;
      return;
    }
    if (!state.started) {
      state.started = true;
    }
    if (state.onGround) {
      state.vy = JUMP_VY;
      state.onGround = false;
    }
  }

  // Flag per evitare listener duplicati
  var _dinoListenerAdded = false;

  // ── API pubblica ──
  window.initDinoGame = function() {
    var canvas = document.getElementById('dino-canvas');
    if (!canvas) return;

    // Controlla dimensioni reali — se 0 il canvas è ancora nascosto
    var rect = canvas.getBoundingClientRect();
    if (rect.width < 10 || rect.height < 10) {
      _dinoInited = false;
      setTimeout(function() { window.initDinoGame(); }, 200);
      return;
    }

    if (_dinoInited) return;
    _dinoInited = true;

    // Ferma eventuale loop precedente
    if (_dinoRaf) { cancelAnimationFrame(_dinoRaf); _dinoRaf = null; }
    _dinoRunning = false;

    var dpr = window.devicePixelRatio || 1;
    _cw = rect.width;
    _ch = rect.height;
    canvas.width  = Math.round(_cw * dpr);
    canvas.height = Math.round(_ch * dpr);
    _ctx = canvas.getContext('2d');
    _ctx.scale(dpr, dpr);

    resetState(_cw, _ch);
    draw(_ctx, _cw, _ch);

    var hi = parseInt(localStorage.getItem('ct_dino_hi') || '0', 10);
    var recEl = document.getElementById('dino-record');
    if (recEl) recEl.textContent = hi;

    function onInput(e) {
      if (e && e.preventDefault) e.preventDefault();
      jump();
      // Avvia il loop se il gioco è partito e il loop non sta girando
      if (state.started && !state.over && !_dinoRaf) {
        _dinoRunning = true;
        loop(_ctx, _cw, _ch);
      }
    }

    // Aggiungi listener direttamente sul canvas (senza cloneNode)
    canvas.onclick     = onInput;
    canvas.ontouchstart = onInput;

    if (!_dinoListenerAdded) {
      _dinoListenerAdded = true;
      document.addEventListener('keydown', function(e) {
        if (e.code === 'Space' || e.code === 'ArrowUp') {
          var w = document.getElementById('widget-dino-dash');
          if (w && w.style.display !== 'none') onInput(e);
        }
      });
    }
  };

  // ── Integrazione con il toggle delle impostazioni ──
  // Sovrascrive l'onchange del toggle per aggiungere initDinoGame
  document.addEventListener('DOMContentLoaded', function() {
    _applyDinoPrefs();
  });
  // Fallback se DOMContentLoaded già passato
  if (document.readyState !== 'loading') {
    setTimeout(_applyDinoPrefs, 400);
  }

  function _applyDinoPrefs() {
    var prefs = lsG('ct_prefs', {});
    var tog    = document.getElementById('tog-dino');
    var enabled = prefs.dino === true;
    if (tog) tog.checked = enabled;

    // Aggiorna visibilità widget dashboard
    _updateDinoVisibility();

    // Aggiorna anche il widget system (mostra/nascondi nel wdg-container)
    var cfg = lsG('ct_dash_widgets', {});
    cfg.dino = enabled;
    lsS('ct_dash_widgets', cfg);

    // Se abilitato, inizializza il gioco
    if (enabled) {
      setTimeout(function() { window.initDinoGame(); }, 300);
    }

    if (tog) {
      tog.onchange = function() {
        var v = this.checked;
        var s = lsG('ct_prefs', {});
        s.dino = v;
        lsS('ct_prefs', s);
        // Aggiorna widget system
        var c = lsG('ct_dash_widgets', {});
        c.dino = v;
        lsS('ct_dash_widgets', c);
        _updateDinoVisibility();
        if (v) {
          _dinoInited = false;
          setTimeout(function() { window.initDinoGame(); }, 150);
        } else {
          if (_dinoRaf) cancelAnimationFrame(_dinoRaf);
          _dinoRunning = false;
        }
        // Aggiorna pannello organizza se aperto
        if(typeof renderDopList === 'function') renderDopList();
      };
    }
  }

  // Mostra il widget dino nel dashboard solo se abilitato e sulla home
  window._updateDinoVisibility = function() {
    var prefs = lsG('ct_prefs', {});
    var widget = document.getElementById('widget-dino-dash');
    if (!widget) return;
    var onHome = (typeof _pgCurrent !== 'undefined' ? _pgCurrent : lsG('ct_pg','dash')) === 'dash';
    var enabled = prefs.dino === true;
    var shouldShow = enabled && onHome;
    widget.style.display = shouldShow ? '' : 'none';
    if (shouldShow) {
      // Reset stato gioco
      _dinoInited = false;
      if (_dinoRaf) { cancelAnimationFrame(_dinoRaf); _dinoRaf = null; }
      _dinoRunning = false;
      // Aspetta 2 frame di paint prima di misurare il canvas
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          window.initDinoGame();
        });
      });
    }
  };

})();


// ═══════════════════════════════════════════════════════════════
// EFFETTI PREMIUM — Glass Shimmer, Ripple Pulse, Magnetic Snap,
// Live Pulse, Glass Spotlight, SVG Draw-in, Frost Reveal
// ═══════════════════════════════════════════════════════════════

// ── 2. GLASS SHIMMER ──────────────────────────────────────────
function _startGlassShimmer() {
  if(window._shimmerTimer) clearInterval(window._shimmerTimer);
  window._shimmerTimer = setInterval(function() {
    var card = document.getElementById('hero-card');
    if(!card) return;
    card.classList.remove('shimmer');
    // forza reflow per riavviare l'animazione
    void card.offsetWidth;
    card.classList.add('shimmer');
    setTimeout(function(){ card.classList.remove('shimmer'); }, 950);
  }, 10000);

  // Anche al ritorno in foreground (visibilitychange)
  document.removeEventListener('visibilitychange', _onVisibilityShimmer);
  document.addEventListener('visibilitychange', _onVisibilityShimmer);
}
function _onVisibilityShimmer() {
  if(document.visibilityState === 'visible') {
    var card = document.getElementById('hero-card');
    if(!card) return;
    card.classList.remove('shimmer');
    void card.offsetWidth;
    card.classList.add('shimmer');
    setTimeout(function(){ card.classList.remove('shimmer'); }, 950);
  }
}

// ── 3. RIPPLE PULSE ───────────────────────────────────────────
function _checkRipplePulse() {
  var me = lsG('ct_me', null);
  if(!me) return;
  var now = new Date();
  var oggi = now.getFullYear()+'-'+('0'+(now.getMonth()+1)).slice(-2)+'-'+('0'+now.getDate()).slice(-2);
  var T = lsG('ct_t', []);
  var mioTurno = T.find(function(t){ return _isMyTurno(t, me) && t.data === oggi; });
  if(!mioTurno || !mioTurno.orario || mioTurno.orario.indexOf('-') < 0) return;

  var parts = mioTurno.orario.split('-');
  var sp = parts[0].trim().split(':');
  var startMin = parseInt(sp[0])*60 + parseInt(sp[1]||0);
  var nowMin = now.getHours()*60 + now.getMinutes();

  // Scatta entro 1 minuto dall'inizio turno
  if(nowMin === startMin || nowMin === startMin + 1) {
    var lastRipple = window._lastRippleMin || -99;
    if(nowMin !== lastRipple) {
      window._lastRippleMin = nowMin;
      _fireRipplePulse();
    }
  }
}
function _fireRipplePulse() {
  var circle = document.querySelector('.hero-tonal-circle');
  if(!circle) return;
  var ripple = document.createElement('div');
  ripple.className = 'hero-ripple';
  // Colore basato sull'atmosfera corrente
  var atm = document.body.getAttribute('data-atmosfera') || 'riposo';
  var colors = {
    alba:'rgba(255,209,102,0.5)', tramonto:'rgba(255,107,53,0.5)',
    crepuscolo:'rgba(0,229,255,0.5)', eclissi:'rgba(255,23,68,0.5)',
    oasi:'rgba(6,214,160,0.5)', riposo:'rgba(91,159,255,0.4)'
  };
  ripple.style.background = colors[atm] || colors.riposo;
  circle.appendChild(ripple);
  setTimeout(function(){ ripple.remove(); }, 1250);
  // Vibrazione leggera
  if(navigator.vibrate) navigator.vibrate([30, 50, 30]);
}

// ── 4. MAGNETIC SNAP ──────────────────────────────────────────
function _initMagneticSnap() {
  var container = document.getElementById('wdg-container');
  if(!container) return;

  var dragEl = null;
  var dragOverEl = null;

  container.addEventListener('dragstart', function(e) {
    dragEl = e.target.closest('.wdg-wrap');
    if(!dragEl) return;
    dragEl.classList.add('dragging-active');
    e.dataTransfer.effectAllowed = 'move';
  }, true);

  container.addEventListener('dragend', function(e) {
    if(!dragEl) return;
    dragEl.classList.remove('dragging-active');
    dragEl.classList.add('snap-in');
    dragEl.classList.add('snap-glow');
    setTimeout(function(){
      if(dragEl) { dragEl.classList.remove('snap-in'); dragEl.classList.remove('snap-glow'); }
      dragEl = null;
    }, 500);
    if(navigator.vibrate) navigator.vibrate(15);
  }, true);

  // Touch drag
  container.addEventListener('touchstart', function(e) {
    var el = e.target.closest('.wdg-wrap');
    if(!el) return;
    dragEl = el;
    dragEl.classList.add('dragging-active');
  }, {passive:true, capture:true});

  container.addEventListener('touchend', function() {
    if(!dragEl) return;
    dragEl.classList.remove('dragging-active');
    dragEl.classList.add('snap-in');
    dragEl.classList.add('snap-glow');
    setTimeout(function(){
      if(dragEl) { dragEl.classList.remove('snap-in'); dragEl.classList.remove('snap-glow'); }
      dragEl = null;
    }, 500);
    if(navigator.vibrate) navigator.vibrate(15);
  }, {passive:true, capture:true});
}

// ── 6. GLASS SPOTLIGHT ────────────────────────────────────────
function _initGlassSpotlight() {
  document.querySelectorAll('.bento-card').forEach(function(card) {
    // Evita duplicati
    if(card.querySelector('.glass-spotlight')) return;
    var spot = document.createElement('div');
    spot.className = 'glass-spotlight';
    card.appendChild(spot);

    card.addEventListener('touchstart', function(e) {
      var rect = card.getBoundingClientRect();
      var t = e.touches[0];
      spot.style.left = (t.clientX - rect.left) + 'px';
      spot.style.top  = (t.clientY - rect.top)  + 'px';
      card.classList.add('spotlight-active');
    }, {passive:true});

    card.addEventListener('touchend', function() {
      card.classList.remove('spotlight-active');
    }, {passive:true});

    card.addEventListener('touchcancel', function() {
      card.classList.remove('spotlight-active');
    }, {passive:true});

    // Mouse (desktop)
    card.addEventListener('mousedown', function(e) {
      var rect = card.getBoundingClientRect();
      spot.style.left = (e.clientX - rect.left) + 'px';
      spot.style.top  = (e.clientY - rect.top)  + 'px';
      card.classList.add('spotlight-active');
    });
    card.addEventListener('mouseup',    function(){ card.classList.remove('spotlight-active'); });
    card.addEventListener('mouseleave', function(){ card.classList.remove('spotlight-active'); });
  });
}

// ── 7. SVG DRAW-IN ────────────────────────────────────────────
function _animateHeroIcon() {
  var ico = document.getElementById('hero-tonal-ico');
  if(!ico) return;
  ico.classList.remove('drawing');
  void ico.offsetWidth; // reflow
  ico.classList.add('drawing');
  setTimeout(function(){ ico.classList.remove('drawing'); }, 520);
}

// ── 8. FROST REVEAL ───────────────────────────────────────────
function _frostReveal() {
  // Hero Card
  var hero = document.getElementById('hero-card');
  if(hero) {
    hero.classList.add('frost-hidden');
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        hero.classList.remove('frost-hidden');
        hero.classList.add('frost-reveal');
        setTimeout(function(){ hero.classList.remove('frost-reveal'); }, 650);
      });
    });
  }

  // Widget cards — staggered
  var widgets = document.querySelectorAll('#wdg-container .wdg-wrap');
  widgets.forEach(function(w, i) {
    w.classList.add('frost-hidden');
    var delay = 80 + i * 55;
    setTimeout(function(){
      requestAnimationFrame(function(){
        w.classList.remove('frost-hidden');
        w.classList.add('frost-reveal');
        setTimeout(function(){ w.classList.remove('frost-reveal'); }, 600);
      });
    }, delay);
  });
}

// ── INIT GLOBALE — chiamato da renderDash ─────────────────────
function initPremiumEffects() {
  _startGlassShimmer();
  _initMagneticSnap();
  _initGlassSpotlight();
  _animateHeroIcon();
  _frostReveal();

  // Ripple pulse: controlla ogni minuto
  if(window._rippleTimer) clearInterval(window._rippleTimer);
  window._rippleTimer = setInterval(_checkRipplePulse, 60000);
  // Controlla subito al caricamento
  _checkRipplePulse();
}

// ── fine app.js ──
