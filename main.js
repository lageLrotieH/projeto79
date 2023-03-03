var nomes=[]
function enviar(){
    var n1=document.getElementById("nome1").value
    var n2=document.getElementById("nome2").value
    var n3=document.getElementById("nome3").value
    var n4=document.getElementById("nome4").value
    nomes.push(n1,n2,n3,n4)
    document.getElementById("mostrarnomes").innerHTML=nomes

}
function organizar(){
    nomes.sort()
    document.getElementById("mostrarnomes").innerHTML=nomes
}