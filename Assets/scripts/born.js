#pragma strict

var prefab: GameObject;
var prefab2: GameObject;
var prefab3: GameObject;
var amount: int=10;
var stop: boolean=false;
function Start () {
	var x=[-20, -13, -6, 6, 13, 20];
	var z=[5, 10, 15, 20, 25, 30];
	for(var i=0;i<amount;i++){
	
	if(stop==false) {
		var r = Quaternion.identity;
		r.eulerAngles=new Vector3(0, 0, z[Random.Range(0, z.Length)]);
		
		var obj:GameObject=Instantiate(
		
		prefab, 
		new Vector2( x[Random.Range(0, x.Length)], 16),
		r);
		obj.name="enemy";
		
		yield WaitForSeconds(1);
		
		var obj2:GameObject=Instantiate(
		
		prefab2, 
		new Vector2( x[Random.Range(0, x.Length)], 16),
		r);
		obj2.name="enemy2";
		
		yield WaitForSeconds(1);
		
		var obj3:GameObject=Instantiate(
		
		prefab3, 
		new Vector3( x[Random.Range(0, x.Length)], 16),
		r);
		obj3.name="enemy3";}
		
		yield WaitForSeconds(1);}
}
function Update () {

}

//y=15
//x=-20 -14 -8 -2 4 10