str=""
display=(event)=>{
    str=str+event.target.getAttribute("id")
    document.getElementsByTagName("input")[0].value=str
    console.log(str);
}

equal=()=>{
    str=eval(str)
    document.getElementsByTagName("input")[0].value=str
}

back=()=>{
    str=""
    document.getElementsByTagName("input")[0].value=str
}

document.getElementsByTagName("button")[0].addEventListener("click",display)
document.getElementsByTagName("button")[1].addEventListener("click",display)
document.getElementsByTagName("button")[2].addEventListener("click",display)
document.getElementsByTagName("button")[3].addEventListener("click",display)
document.getElementsByTagName("button")[4].addEventListener("click",display)
document.getElementsByTagName("button")[5].addEventListener("click",display)
document.getElementsByTagName("button")[6].addEventListener("click",display)
document.getElementsByTagName("button")[7].addEventListener("click",display)
document.getElementsByTagName("button")[8].addEventListener("click",display)
document.getElementsByTagName("button")[9].addEventListener("click",display)
document.getElementsByTagName("button")[10].addEventListener("click",display)
document.getElementsByTagName("button")[11].addEventListener("click",display)
document.getElementsByTagName("button")[12].addEventListener("click",display)
document.getElementsByTagName("button")[13].addEventListener("click",display)

document.getElementsByTagName("button")[14].addEventListener("click",back)
document.getElementsByTagName("button")[15].addEventListener("click",equal)




