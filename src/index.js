import {
    Engine,
    Scene,
    MeshBuilder,
    Vector3,
    ArcRotateCamera,
    HemisphericLight
} from "babylonjs";

const initGame = () =>
{
    const canvas = document.getElementById("babylon-canvas");

    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);

    const camera = new ArcRotateCamera(
        "camera",
        0,
        Math.PI / 3,
        10.0,
        new Vector3(0, 0, 0),
        scene
    );
    camera.attachControl(canvas, true);

    const light = new HemisphericLight("light", new Vector3(0, 10, 0), scene);

    BABYLON.SceneLoader.ImportMesh("", "https://models.babylonjs.com/", "haunted_house.glb", scene, function (meshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        scene.createDefaultEnvironment();

    });

    engine.runRenderLoop(function () {
        scene.render();
    });
}
;

initGame();
