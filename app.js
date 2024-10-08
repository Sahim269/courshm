const btnafficheCat = document.getElementById('afficheCat')
const sousCat = document.getElementById('sousCat')
const iconfleche = document.getElementById('iconfleche')

function afficheCat(){
    if(sousCat.style.opacity === '0'){
        sousCat.style.opacity = '1'
        sousCat.style.height = 'auto'
    }else{
        sousCat.style.opacity = '0'
        sousCat.style.height = '0px'
    }
}
function cacherCat(){
    sousCat.style.height = '0px'
    sousCat.style.opacity = '0'
}
btnafficheCat.addEventListener('click',afficheCat)
document.addEventListener('click',function(event){
    if(!sousCat.contains(event.target) &&  sousCat.style.opacity !== '0' && event.target !== btnafficheCat){
        cacherCat()
    }
})
document.addEventListener('keydown',function(event){
    if(event.key === 'Escape'){
        cacherCat()
    }
})    
// 
// 
// 
// ACTIVATION RECHERCHE
const inpRech = document.getElementById('inpRech')
const rech_sec = document.querySelector('.rech-sec')
const affichage1 = document.querySelector('.affichage1')
const body = document.body

inpRech.addEventListener('click',function(){
    affichage1.style.display = "none"
    rech_sec.style.display = "flex"
    affichageCourHtml.style.display = "none"
    affichageCourjs.style.display = "none"
    affichageCourCSS.style.display = "none"
    document.querySelector('.cont-btn').style.display = "none"
})

function back_acc(){
    affichage1.style.display = "block"
    rech_sec.style.display = "none"
    affichageCourHtml.style.display = "none"
    affichageCourjs.style.display = "none"
    affichageCourCSS.style.display = "none"
    inpRech.value = ""
    document.querySelector('.cont-btn').style.display = "none"
}

// 
// 
// 
// EFFET DE DEFILEMNT
function animdefil(){
    const anim = document.querySelectorAll('.anim')
    const decl = window.innerHeight

    anim.forEach(function(anime){
        animeTop = anime.getBoundingClientRect().top

        if(animeTop<decl){
            anime.classList.add('visible')
        }
        // else{
        //     anime.classList.remove('visible')
        // }
    })
}

window.addEventListener('scroll',animdefil)
// 
// 
// 
// RECHERCHE INPUT
function recherche(){
    const termRech = inpRech.value.toLowerCase()
    // const text3 = document.querySelectorAll('.lien-cour div p')
    const lien_courH = document.querySelectorAll('.lien-cour')
    const nbrobt = document.querySelector('.nbrobt')
    let cpt = 0

    lien_courH.forEach(function(lien){
        const text1 = lien.querySelectorAll('p')
        const text2 = lien.querySelectorAll('h2')
        let cont = false

        text1.forEach(function(txt1){
            const rech1 = txt1.textContent.toLowerCase()
            if(rech1.includes(termRech)){
                cont = true
            }
        })

        text2.forEach(function(txt2){
            const rech2 = txt2.textContent.toLowerCase()
            if(rech2.includes(termRech)){
                cont = true
            }
        })

        if(cont){
            lien.style.display = "flex"
            cpt++
        }else{
            lien.style.display = "none"
        }

        if(cpt != 0 && inpRech.value !=""){
            nbrobt.textContent = `${cpt} Resultat(s) obtenu pour "${termRech}"`
        }else if(cpt===0){
            nbrobt.textContent = `Aucun resultat pour "${termRech}"`
        }else{
            nbrobt.textContent = ""
        }
       

    })

}

inpRech.addEventListener('input',recherche)
// 
// 
// 
// CONTROLE CAROUSSEL 
const contcarousel = document.querySelector('.cont-carousel')
const btnprec = document.querySelector('.btnprec')
const btnnext = document.querySelector('.btnnext')
let current = 1
let temps

function next(){
    if(current<3){
        contcarousel.style.transform = `translateX(-${current*100}%)`
        current++
        // console.log(current)
        // clearTimeout(temps)
    }else{
        // clearTimeout(temps)
        contcarousel.style.transform = `translateX(0%)`
        current = 1
        // console.log(current)
    }
}

function back(){
    if(current>0){
        current--
        contcarousel.style.transform = `TranslateX(-${current*100}%)`
        // console.log(current)
        // clearTimeout(temps)  
    }else{
        btnprec.style.display = "none"
    }
}

btnnext.addEventListener('click',next)
btnprec.addEventListener('click',back)

// function autoDef(){
//     temps = setTimeout(function(){
//         next()
//         autoDef()
//     },15000)
// }
// autoDef()
// 
// 
// 
// LOADER DE CHARGEMENT
const chargmt = document.querySelector('.chargmt')

window.addEventListener('DOMContentLoaded',function(){
    chargmt.style.display = "flex"
    setTimeout(function(){
        chargmt.style.opacity = "0"
    },1500)
    
    setTimeout(function(){
        chargmt.style.display = "none"
        body.classList.toggle('noscroll')
    },2000)
    // localStorage.setItem('pageLoaded', 'true');
})

// console.log(localStorage.getItem('pageLoaded'))
// 
// 
//Toggle details
const det = document.querySelectorAll('.det')
const plsmn = document.querySelectorAll('.plsmn')
    
det.forEach(function(deta,key){
    deta.addEventListener('click',function(){
        if(plsmn[key].textContent === "remove"){
            plsmn[key].textContent = "add"
        }else{
            plsmn[key].textContent ="remove"
        }
    })
})

// 
// 
// 
// affichage cour 
// POUR HTML
let cour = 0
const lien_courH = document.querySelectorAll('.lien-courH')
const Courhtml = document.querySelectorAll('.Courhtml')
const baseHtml = document.querySelectorAll('.baseHtml')

const buttonprec = document.getElementById('buttonprec')
const buttonext = document.getElementById('buttonext')

const tousLesCours = document.querySelectorAll('.lien-cour')
const nbrobt = document.querySelector('.nbrobt')

const affichageCourHtml = document.querySelector('.affichageCourHtml')
const affichageCourCSS = document.querySelector('.affichageCourCSS')
const affichageCourjs = document.querySelector('.affichageCourjs')

const inpburger = document.getElementById('burger')

baseHtml.forEach(function(html,cle1){
    html.addEventListener('click',function(){
        affichage1.style.display = "none"
        affichageCourCSS.style.display = "none"
        affichageCourjs.style.display = "none"
        affichageCourHtml.style.display = "flex"
        document.querySelector('.cont-btn').style.display = "flex"
        rech_sec.style.display = "none"
        buttonprec.style.display = "none"
        Courhtml.forEach(function(htmlcr,cle1){
            cour = 0
            if(cle1 != cour){
                htmlcr.style.display = "none"
                htmlcr.classList.remove('animcour')
            }else{
                htmlcr.style.display = "flex"
                htmlcr.classList.add('animcour')
                menuMobil.classList.remove('afficheMenu')
                body.classList.remove('noscroll')
                // inpburger.checked = "false"
                console.log(inpburger)
            }
        })
    })
})

lien_courH.forEach(function(lien,cle0){
    lien.addEventListener('click',function(){
        tousLesCours.forEach(function(crh){
            crh.style.display = "flex"
            nbrobt.textContent = ""
        })
        affichageCourHtml.style.display = "flex"
        affichageCourCSS.style.display = "none"
        affichageCourjs.style.display = "none"
        affichage1.style.display = "none"
        rech_sec.style.display = "none"
        document.querySelector('.cont-btn').style.display = "flex"
        inpRech.value = ""
        // console.log('oui')
        Courhtml.forEach(function(coure,cleH){
            if(cleH === cle0){
                cour = cle0
                coure.style.display = "flex"
                coure.classList.add('animcour')
                if(cle0 != 0){
                    buttonprec.style.display = "block"        
                }else{
                    buttonprec.style.display = "none"
                }
            }else{
                coure.style.display = "none"
                coure.classList.remove('animcour')
            }
        })
    })
})
// 
// 
// 
// AFFICHAGE COUR CSS
const lien_courCSS = document.querySelectorAll('.lien-courCSS')
const courCSS = document.querySelectorAll('.courCSS')
const baseCSS = document.querySelectorAll('.baseCSS')

baseCSS.forEach(function(lienCSS){
    lienCSS.addEventListener('click',function(){
        affichage1.style.display = "none"
        affichageCourHtml.style.display = "none"
        affichageCourjs.style.display = "none"
        affichageCourCSS.style.display = "flex"
        rech_sec.style.display = "none"
        document.querySelector('.cont-btn').style.display = "flex"
        buttonprec.style.display = "none"
        courCSS.forEach(function(cssCour,cle1){
            cour = 0
            if(cle1 != cour){
                cssCour.style.display = "none"
                cssCour.classList.remove('animcour')
            }else{
                cssCour.style.display = "flex"
                cssCour.classList.add('animcour')
                menuMobil.classList.remove('afficheMenu')
                body.classList.remove('noscroll')
            }
        })
    })
})

lien_courCSS.forEach(function(lienCSS,cle1){
    lienCSS.addEventListener('click',function(){
        tousLesCours.forEach(function(crh){
            crh.style.display = "flex"
            nbrobt.textContent = ""
        })
        affichageCourCSS.style.display = "flex"
        affichageCourHtml.style.display = "none"
        affichageCourjs.style.display = "none"
        affichage1.style.display = "none"
        document.querySelector('.cont-btn').style.display = "flex"
        rech_sec.style.display = "none"
        inpRech.value = ""
        courCSS.forEach(function(coursCSS,cle2){
            if(cle2 === cle1){
                cour = cle1
                coursCSS.style.display = "flex"
                courCSS.classList.add('animcour')
                if(cle1 != 0){
                    buttonprec.style.display = "block"        
                }else{
                    buttonprec.style.display = "none"
                }
            }else{
                coursCSS.style.display = "none"
                courCSS.classList.remove('animcour')
            }
        })
    })
})

// 
// 
// POUR CSS
const basejs = document.querySelectorAll('.basejs')
const  lien_courjs = document.querySelectorAll('.lien-courjs')
const  courjs = document.querySelectorAll('.courjs')


basejs.forEach(function(lienjs){
    lienjs.addEventListener('click',function(){
        affichage1.style.display = "none"
        rech_sec.style.display = "none"
        affichageCourHtml.style.display = "none"
        affichageCourCSS.style.display = "none"
        affichageCourjs.style.display = "flex"
        document.querySelector('.cont-btn').style.display = "flex"
        buttonprec.style.display = "none"
        courjs.forEach(function(jscour,cle1){
            cour = 0
            if(cle1 != cour){
                jscour.style.display = "none"
                jscour.classList.remove('animcour')
            }else{
                jscour.style.display = "flex"
                jscour.classList.add('animcour')
                body.classList.remove('noscroll')
                menuMobil.classList.remove('afficheMenu')
            }
        })
    })
})

lien_courjs.forEach(function(lienjs,cle1){
    lienjs.addEventListener('click',function(){
        tousLesCours.forEach(function(crh){
            crh.style.display = "flex"
            nbrobt.textContent = ""
        })
        affichageCourCSS.style.display = "none"
        affichage1.style.display = "none"
        rech_sec.style.display = "none"
        affichageCourHtml.style.display = "none"
        affichageCourjs.style.display = "flex"
        document.querySelector('.cont-btn').style.display = "flex"
        inpRech.value = ""
        courjs.forEach(function(jscour,cle2){
            if(cle2 === cle1){
                cour = cle1
                jscour.style.display = "flex"
                jscour.classList.add('animcour')
                if(cle1 != 0){
                    buttonprec.style.display = "block"        
                }else{
                    buttonprec.style.display = "none"
                }
            }else{
                jscour.style.display = "none"
                jscour.classList.remove('animcour')
            }
        })
    })
})

buttonext.addEventListener('click',function(){
    cour++
    if(affichageCourHtml.style.display === "flex"){
        Courhtml.forEach(function(crhtml,cle){
            if(cour<=6){
                if(cle === cour){
                    // alert(cour)
                    crhtml.style.display ="flex"
                    setTimeout(function(){
                        crhtml.classList.add('animcour')
                    },1000)
                    buttonprec.style.display = "block"
                }else{
                    // alert(cour)
                    crhtml.classList.remove('animcour')
                    crhtml.style.display = "none"
                }
            }else{
                cour= 6
            }
        })
    }else if(affichageCourCSS.style.display === "flex"){
        courCSS.forEach(function(crCSS,cle){
            if(cour<=6){
                if(cle === cour){
                    // alert(cour)
                    crCSS.style.display ="flex"
                    setTimeout(function(){
                        crCSS.classList.add('animcour')
                    },1500)
                    buttonprec.style.display = "block"
                }else{
                    crCSS.classList.remove('animcour')
                    // alert(cour)
                    crCSS.style.display = "none"
                }
            }else{
                cour= 6
            }
        })
    }else if(affichageCourjs.style.display === "flex"){
        courjs.forEach(function(crjs,cle){
            if(cour<=6){
                if(cle === cour){
                    // alert(cour)
                    crjs.style.display ="flex"
                    setTimeout(function(){
                        crjs.classList.add('animcour')
                    },1500)
                    buttonprec.style.display = "block"
                }else{
                    // alert(cour)
                    crjs.classList.remove('animcour')
                    crjs.style.display = "none"
                }
            }else{
                cour= 6
            }
        })
    }
})

buttonprec.addEventListener('click',function(){
    cour--
    if(affichageCourHtml.style.display === "flex"){
        Courhtml.forEach(function(crhtml,cle){
            if(cour>=0){
                if(cle === cour){
                    crhtml.style.display ="flex"
                    setTimeout(function(){
                        crhtml.classList.add('animcour')
                    },1000)
                    if(cour===0){
                        buttonprec.style.display = "none"
                    }
                }else{
                    crhtml.style.display = "none"
                    crhtml.classList.remove('animcour')
                }
            }else{
                cour = 0
            }
        })
    }else if(affichageCourCSS.style.display === "flex"){
        courCSS.forEach(function(crCSS,cle){
            if(cour>=0){
                if(cle === cour){
                    setTimeout(function(){
                        crCSS.classList.add('animcour')
                    },1000)
                    crCSS.style.display ="flex"
                    if(cour===0){
                        buttonprec.style.display = "none"
                    }
                }else{
                    crCSS.classList.remove('animcour')
                    crCSS.style.display = "none"
                }
            }else{
                cour = 0
            }
        })
    }else if(affichageCourjs.style.display === "flex"){
        courjs.forEach(function(jscour,cle){
            if(cour>=0){
                if(cle === cour){
                    jscour.style.display ="flex"
                    setTimeout(function(){
                        jscour.classList.add('animcour')
                    },1000)
                    if(cour===0){
                        buttonprec.style.display = "none"
                    }
                }else{
                    jscour.style.display = "none"
                    jscour.classList.remove('animcour')
                }
            }else{
                cour = 0
            }
        })
    }
})
// 
// 
// 
// BOUTON COPIER
const btncpy = document.querySelectorAll('.btncpy')
const cpycont = document.querySelectorAll('.cpycont')
// console.log(btncpy.length)
// console.log(cpycont.length)
btncpy.forEach(function(cpy,cle){
    cpy.addEventListener('click',function(){
        cpycont.forEach(function(elem,cle2){
            if(cle === cle2){
                const range = document.createRange()
                range.selectNodeContents(elem)
                const selection = window.getSelection()
                selection.removeAllRanges()
                selection.addRange(range)
                succeful = document.execCommand('copy')
                // alert(selection)
                selection.removeAllRanges()
                // cpy.classList.add('material-icons')
                cpy.textContent = "check_circle"
                cpy.style.background = "#41a21a"
                cpy.setAttribute('title','ok')
                setTimeout(function(){
                    // cpy.classList.remove('material-icons')
                    cpy.style.background = "black"
                    cpy.setAttribute('title','copy')
                    cpy.textContent = "content_paste"
                },2000)
            }
        })
    })
})

// 
// 
// 
// JAVA SCRIPT POUR LES TELEPHONES MOBILES

// 
// 
// AFFICHAGE MENU MOBIL

const burger = document.querySelector('.affichemenumobil')
const menuMobil = document.querySelector('.menuMobil')

function affichemenuMob(){
    menuMobil.classList.toggle('afficheMenu')
    body.classList.toggle('noscroll')
}

// 
// 
// AFFICHE ET CACHER RECHERCHE MOBILE

const inpRech2 = document.getElementById('inpRech2')
const cont_rech = document.querySelector('.cont-rech')
const btncloserech = document.querySelector('.btncloserech')
const lienVersCours = document.querySelector('.lienVersCours')

// inpRech2.addEventListener('click',function(){
//     cont_rech.classList.add('afficheRechMobil')
//     lienVersCours.style.display = "none"
// })
// btncloserech.addEventListener('click',function(){
//     cont_rech.classList.remove('afficheRechMobil')
//     lienVersCours.style.display = "flex"
// })