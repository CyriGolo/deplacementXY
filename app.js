function deplacerElement(element, pointA, pointB) {
    let xA = pointA.x;
    let yA = pointA.y;

    let xB = pointB.x;
    let yB = pointB.y;
  
    let diffX = xB - xA;
    let diffY = yB - yA;
  
    element.style.position = "absolute";
    element.style.left = xA + "px";
    element.style.top = yA + "px";
  
    let vitesse = 100;
  
    let distance = Math.sqrt(diffX * diffX + diffY * diffY);
    let temps = distance / vitesse * 1000;
  
    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      let elapsedTime = currentTime - startTime;
      let pourcentage = Math.min(elapsedTime / temps, 1);
      let newX = xA + diffX * pourcentage;
      let newY = yA + diffY * pourcentage;
      element.style.left = newX + "px";
      element.style.top = newY + "px";
      if (pourcentage < 1) {
        requestAnimationFrame(animation);
      }
    }
  
    requestAnimationFrame(animation);
}
  
  let element = document.querySelector("img");
  let pointA = { x: 0, y: 0 };
  let pointB = { x: 300, y: 200 };
  
  deplacerElement(element, pointA, pointB);