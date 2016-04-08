#pragma strict
static var puntos : int;
static var vidas : int;
function Start () {
    puntos = 0;
    vidas = 3;
}

function Update () {
    Debug.Log("Puntos " + puntos);
    Debug.Log("Vidas " + vidas);
}