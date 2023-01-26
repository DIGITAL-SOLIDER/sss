AFRAME.registerComponent("flying-target", {
    init: function () {
      var id1 = `hurdle${1}`;

      var posX1 = 6
      var posY1 = 3
      var posZ1 = -7
  
      var position1 = { x: posX1, y: posY1, z: posZ1 };
  
      this.flyingtarget1(id1, position1);

      var id2 = `hurdle${2}`;

      var posX2 = 3
      var posY2 = 6
      var posZ2 = -3
  
      var position2 = { x: posX2, y: posY2, z: posZ2 };
  
      this.flyingtarget2(id2, position2);

      var id3 = `hurdle${3}`;

      var posX3 = -3
      var posY3 = 7
      var posZ3 = -4
  
      var position3 = { x: posX3, y: posY3, z: posZ3 };
  
      this.flyingtarget3(id3, position3);

      var id4 = `hurdle${4}`;

      var posX4 = -1
      var posY4 = 4
      var posZ4 = -1
  
      var position4 = { x: posX4, y: posY4, z: posZ4 };
  
      this.flyingtarget4(id4, position4);
    },
    flyingtarget1: (id1, position1) => {
      var OceanEl = document.querySelector("#ocean");
  
      var tEl1 = document.createElement("a-entity");

      tEl1.setAttribute("id", id1);
  
      tEl1.setAttribute("position", position1);
      tEl1.setAttribute("scale", { x: 0.0500, y: 0.0500, z: 0.0500 });
      tEl1.setAttribute("gltf-model", "./assets/balloon/scene.gltf");
  
      tEl1.setAttribute("static-body",
        {shape:"sphere",
          sphereRadius:20
        }
      )

      tEl1.setAttribute("game-play", {
        elementId1: `#${id1}`,
      });

      OceanEl.appendChild(tEl1);
    },
    flyingtarget1: (id2, position2) => {
      var OceanEl2 = document.querySelector("#ocean");
  
      var tEl2 = document.createElement("a-entity");

      tEl2.setAttribute("id", id2);
  
      tEl2.setAttribute("position", position2);
      tEl2.setAttribute("scale", { x: 0.0500, y: 0.0500, z: 0.0500 });
      tEl2.setAttribute("gltf-model", "./assets/balloon/scene.gltf");
  
      tEl2.setAttribute("static-body",
        {shape:"sphere",
          sphereRadius:20
        }
      )

      tEl2.setAttribute("game-play", {
        elementId2: `#${id2}`,
      });

      OceanEl2.appendChild(tEl2);
    },
    flyingtarget1: (id3, position3) => {
      var OceanEl3 = document.querySelector("#ocean");
  
      var tEl3 = document.createElement("a-entity");

      tEl3.setAttribute("id", id3);
  
      tEl3.setAttribute("position", position3);
      tEl3.setAttribute("scale", { x: 0.0500, y: 0.0500, z: 0.0500 });
      tEl3.setAttribute("gltf-model", "./assets/balloon/scene.gltf");
  
      tEl3.setAttribute("static-body",
        {shape:"sphere",
          sphereRadius:20
        }
      )

      tEl3.setAttribute("game-play", {
        elementId3: `#${id3}`,
      });

      OceanEl3.appendChild(tEl3);
    },
    flyingtarget1: (id4, position4) => {
      var OceanEl4 = document.querySelector("#ocean");
  
      var tEl4 = document.createElement("a-entity");

      tEl4.setAttribute("id", id4);
  
      tEl4.setAttribute("position", position4);
      tEl4.setAttribute("scale", { x: 0.0500, y: 0.0500, z: 0.0500 });
      tEl4.setAttribute("gltf-model", "./assets/balloon/scene.gltf");
  
      tEl4.setAttribute("static-body",
        {shape:"sphere",
          sphereRadius:20
        }
      )

      tEl4.setAttribute("game-play", {
        elementId4: `#${id4}`,
      });

      OceanEl4.appendChild(tEl4);
    },
  });