#pragma strict
var anim:Animator;
var box:BoxCollider2D;
function Start () {
	anim=GetComponent(Animator);
	 box=GetComponent(BoxCollider2D);
}

function die () {
	box.enabled=false;
	anim.SetTrigger("die");
}

function killobj () {
	Destroy(gameObject);
}

function OnTriggerEnter2D(other:Collider2D){
	Destroy(gameObject);
}