gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDProjectile2Objects1= [];
gdjs.NewSceneCode.GDProjectile2Objects2= [];
gdjs.NewSceneCode.GDProjectileObjects1= [];
gdjs.NewSceneCode.GDProjectileObjects2= [];
gdjs.NewSceneCode.GDsuperTextObjects1= [];
gdjs.NewSceneCode.GDsuperTextObjects2= [];
gdjs.NewSceneCode.GDEndObjects1= [];
gdjs.NewSceneCode.GDEndObjects2= [];
gdjs.NewSceneCode.GDEnemy2Objects1= [];
gdjs.NewSceneCode.GDEnemy2Objects2= [];
gdjs.NewSceneCode.GDScoreObjects1= [];
gdjs.NewSceneCode.GDScoreObjects2= [];
gdjs.NewSceneCode.GDRedPlayerShip1Objects1= [];
gdjs.NewSceneCode.GDRedPlayerShip1Objects2= [];
gdjs.NewSceneCode.GDGreenLaser10Objects1= [];
gdjs.NewSceneCode.GDGreenLaser10Objects2= [];
gdjs.NewSceneCode.GDRedLaser03Objects1= [];
gdjs.NewSceneCode.GDRedLaser03Objects2= [];
gdjs.NewSceneCode.GDWinObjects1= [];
gdjs.NewSceneCode.GDWinObjects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};


gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDRedPlayerShip1Objects1Objects = Hashtable.newFrom({"RedPlayerShip1": gdjs.NewSceneCode.GDRedPlayerShip1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDRedLaser03Objects1Objects = Hashtable.newFrom({"RedLaser03": gdjs.NewSceneCode.GDRedLaser03Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDRedLaser03Objects1Objects = Hashtable.newFrom({"RedLaser03": gdjs.NewSceneCode.GDRedLaser03Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.NewSceneCode.GDEnemy2Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.NewSceneCode.GDEnemy2Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDProjectileObjects1Objects = Hashtable.newFrom({"Projectile": gdjs.NewSceneCode.GDProjectileObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDProjectile2Objects1Objects = Hashtable.newFrom({"Projectile2": gdjs.NewSceneCode.GDProjectile2Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDProjectile2Objects1Objects = Hashtable.newFrom({"Projectile2": gdjs.NewSceneCode.GDProjectile2Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.NewSceneCode.GDEnemy2Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDProjectileObjects1Objects = Hashtable.newFrom({"Projectile": gdjs.NewSceneCode.GDProjectileObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDRedPlayerShip1Objects1Objects = Hashtable.newFrom({"RedPlayerShip1": gdjs.NewSceneCode.GDRedPlayerShip1Objects1});gdjs.NewSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedLaser03"), gdjs.NewSceneCode.GDRedLaser03Objects1);
gdjs.copyArray(runtimeScene.getObjects("RedPlayerShip1"), gdjs.NewSceneCode.GDRedPlayerShip1Objects1);

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDRedPlayerShip1Objects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDRedLaser03Objects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDRedLaser03Objects1 */
/* Reuse gdjs.NewSceneCode.GDRedPlayerShip1Objects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDRedPlayerShip1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDRedPlayerShip1Objects1[i].separateFromObjectsList(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDRedLaser03Objects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.NewSceneCode.GDEnemy2Objects1);

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy2Objects1Objects) == 0;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("End"), gdjs.NewSceneCode.GDEndObjects1);
gdjs.copyArray(runtimeScene.getObjects("Win"), gdjs.NewSceneCode.GDWinObjects1);
/* Reuse gdjs.NewSceneCode.GDEnemy2Objects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDEndObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEndObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDWinObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDWinObjects1[i].hide();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy2Objects1Objects, 694, gdjs.randomInRange(50, 500), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.NewSceneCode.GDEnemy2Objects1);

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDEnemy2Objects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDEnemy2Objects1[i].getVariableNumber(gdjs.NewSceneCode.GDEnemy2Objects1[i].getVariables().get("Timer")) > 100 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDEnemy2Objects1[k] = gdjs.NewSceneCode.GDEnemy2Objects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDEnemy2Objects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDEnemy2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("RedPlayerShip1"), gdjs.NewSceneCode.GDRedPlayerShip1Objects1);
gdjs.NewSceneCode.GDProjectileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDProjectileObjects1Objects, (( gdjs.NewSceneCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDEnemy2Objects1[0].getPointX("")), (( gdjs.NewSceneCode.GDEnemy2Objects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDEnemy2Objects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDProjectileObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDProjectileObjects1[i].setZOrder(5);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDProjectileObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDProjectileObjects1[i].addForceTowardObject((gdjs.NewSceneCode.GDRedPlayerShip1Objects1.length !== 0 ? gdjs.NewSceneCode.GDRedPlayerShip1Objects1[0] : null), 200, 1);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemy2Objects1[i].returnVariable(gdjs.NewSceneCode.GDEnemy2Objects1[i].getVariables().get("Timer")).setNumber(0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.NewSceneCode.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.NewSceneCode.GDScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("superText"), gdjs.NewSceneCode.GDsuperTextObjects1);
{for(var i = 0, len = gdjs.NewSceneCode.GDsuperTextObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDsuperTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemy2Objects1[i].returnVariable(gdjs.NewSceneCode.GDEnemy2Objects1[i].getVariables().get("Timer")).add(1);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDsuperTextObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDsuperTextObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDEnemy2Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDEnemy2Objects1[0].getVariables()).get("Timer"))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDScoreObjects1[i].setString("Kills: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedPlayerShip1"), gdjs.NewSceneCode.GDRedPlayerShip1Objects1);

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDRedPlayerShip1Objects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDRedPlayerShip1Objects1[i].getVariableNumber(gdjs.NewSceneCode.GDRedPlayerShip1Objects1[i].getVariables().get("a")) == 0 ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDRedPlayerShip1Objects1[k] = gdjs.NewSceneCode.GDRedPlayerShip1Objects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDRedPlayerShip1Objects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDRedPlayerShip1Objects1 */
gdjs.NewSceneCode.GDProjectile2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDProjectile2Objects1Objects, ((( gdjs.NewSceneCode.GDRedPlayerShip1Objects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDRedPlayerShip1Objects1[0].getPointX("")) + 40), (( gdjs.NewSceneCode.GDRedPlayerShip1Objects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDRedPlayerShip1Objects1[0].getPointY("")) + 30, "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDProjectile2Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDProjectile2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDProjectile2Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDProjectile2Objects1[i].addPolarForce((( gdjs.NewSceneCode.GDRedPlayerShip1Objects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDRedPlayerShip1Objects1[0].getAngle()), 800, 1);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDProjectile2Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDProjectile2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDRedPlayerShip1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDRedPlayerShip1Objects1[i].returnVariable(gdjs.NewSceneCode.GDRedPlayerShip1Objects1[i].getVariables().get("a")).add(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedPlayerShip1"), gdjs.NewSceneCode.GDRedPlayerShip1Objects1);

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDRedPlayerShip1Objects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDRedPlayerShip1Objects1[i].getVariableNumber(gdjs.NewSceneCode.GDRedPlayerShip1Objects1[i].getVariables().get("a")) > 10 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDRedPlayerShip1Objects1[k] = gdjs.NewSceneCode.GDRedPlayerShip1Objects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDRedPlayerShip1Objects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDRedPlayerShip1Objects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDRedPlayerShip1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDRedPlayerShip1Objects1[i].returnVariable(gdjs.NewSceneCode.GDRedPlayerShip1Objects1[i].getVariables().get("a")).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedPlayerShip1"), gdjs.NewSceneCode.GDRedPlayerShip1Objects1);

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDRedPlayerShip1Objects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDRedPlayerShip1Objects1[i].getVariableNumber(gdjs.NewSceneCode.GDRedPlayerShip1Objects1[i].getVariables().get("a")) > 0 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDRedPlayerShip1Objects1[k] = gdjs.NewSceneCode.GDRedPlayerShip1Objects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDRedPlayerShip1Objects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDRedPlayerShip1Objects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDRedPlayerShip1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDRedPlayerShip1Objects1[i].returnVariable(gdjs.NewSceneCode.GDRedPlayerShip1Objects1[i].getVariables().get("a")).add(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.NewSceneCode.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Projectile2"), gdjs.NewSceneCode.GDProjectile2Objects1);

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDProjectile2Objects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy2Objects1Objects, 30, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDEnemy2Objects1 */
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.NewSceneCode.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemy2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Projectile"), gdjs.NewSceneCode.GDProjectileObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedPlayerShip1"), gdjs.NewSceneCode.GDRedPlayerShip1Objects1);

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDProjectileObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDRedPlayerShip1Objects1Objects, 20, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("End"), gdjs.NewSceneCode.GDEndObjects1);
/* Reuse gdjs.NewSceneCode.GDRedPlayerShip1Objects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDRedPlayerShip1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDRedPlayerShip1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDEndObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEndObjects1[i].hide(false);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 10;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.NewSceneCode.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Projectile2"), gdjs.NewSceneCode.GDProjectile2Objects1);
gdjs.copyArray(runtimeScene.getObjects("RedPlayerShip1"), gdjs.NewSceneCode.GDRedPlayerShip1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Win"), gdjs.NewSceneCode.GDWinObjects1);
{for(var i = 0, len = gdjs.NewSceneCode.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemy2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDRedPlayerShip1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDRedPlayerShip1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDProjectile2Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDProjectile2Objects1[i].deleteFromScene(runtimeScene);
}
}{}{for(var i = 0, len = gdjs.NewSceneCode.GDWinObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDWinObjects1[i].hide(false);
}
}}

}


{


{
}

}


};

gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDProjectile2Objects1.length = 0;
gdjs.NewSceneCode.GDProjectile2Objects2.length = 0;
gdjs.NewSceneCode.GDProjectileObjects1.length = 0;
gdjs.NewSceneCode.GDProjectileObjects2.length = 0;
gdjs.NewSceneCode.GDsuperTextObjects1.length = 0;
gdjs.NewSceneCode.GDsuperTextObjects2.length = 0;
gdjs.NewSceneCode.GDEndObjects1.length = 0;
gdjs.NewSceneCode.GDEndObjects2.length = 0;
gdjs.NewSceneCode.GDEnemy2Objects1.length = 0;
gdjs.NewSceneCode.GDEnemy2Objects2.length = 0;
gdjs.NewSceneCode.GDScoreObjects1.length = 0;
gdjs.NewSceneCode.GDScoreObjects2.length = 0;
gdjs.NewSceneCode.GDRedPlayerShip1Objects1.length = 0;
gdjs.NewSceneCode.GDRedPlayerShip1Objects2.length = 0;
gdjs.NewSceneCode.GDGreenLaser10Objects1.length = 0;
gdjs.NewSceneCode.GDGreenLaser10Objects2.length = 0;
gdjs.NewSceneCode.GDRedLaser03Objects1.length = 0;
gdjs.NewSceneCode.GDRedLaser03Objects2.length = 0;
gdjs.NewSceneCode.GDWinObjects1.length = 0;
gdjs.NewSceneCode.GDWinObjects2.length = 0;

gdjs.NewSceneCode.eventsList0(runtimeScene);
return;

}

gdjs['NewSceneCode'] = gdjs.NewSceneCode;
