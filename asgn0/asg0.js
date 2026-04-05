function drawVector(v, color) {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');

    var cx = canvas.width / 2;
    var cy = canvas.height / 2;

    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + v.elements[0] * 20, cy - v.elements[1] * 20);
    ctx.stroke();
}

function clearCanvas() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function main() {
    clearCanvas();
}

function handleDrawEvent() {
    clearCanvas();

    var x1 = parseFloat(document.getElementById('x1').value);
    var y1 = parseFloat(document.getElementById('y1').value);
    var x2 = parseFloat(document.getElementById('x2').value);
    var y2 = parseFloat(document.getElementById('y2').value);

    var v1 = new Vector3([x1, y1, 0]);
    var v2 = new Vector3([x2, y2, 0]);

    drawVector(v1, "red");
    drawVector(v2, "blue");
}

function angleBetween(v1, v2) {
    var dot = Vector3.dot(v1, v2);
    var mag1 = v1.magnitude();
    var mag2 = v2.magnitude();
    var cosAlpha = dot / (mag1 * mag2);

    if (cosAlpha > 1) cosAlpha = 1;
    if (cosAlpha < -1) cosAlpha = -1;

    var angleRad = Math.acos(cosAlpha);
    return angleRad * 180 / Math.PI;
}

function areaTriangle(v1, v2) {
    var cross = Vector3.cross(v1, v2);
    return cross.magnitude() / 2;
}

function handleDrawOperationEvent() {
    clearCanvas();

    var x1 = parseFloat(document.getElementById('x1').value);
    var y1 = parseFloat(document.getElementById('y1').value);
    var x2 = parseFloat(document.getElementById('x2').value);
    var y2 = parseFloat(document.getElementById('y2').value);

    var v1 = new Vector3([x1, y1, 0]);
    var v2 = new Vector3([x2, y2, 0]);

    drawVector(v1, "red");
    drawVector(v2, "blue");

    var op = document.getElementById('operation').value;
    var scalar = parseFloat(document.getElementById('scalar').value);

    if (op === "add") {
        var v3 = new Vector3(v1.elements);
        v3.add(v2);
        drawVector(v3, "green");
    } else if (op === "sub") {
        var v3 = new Vector3(v1.elements);
        v3.sub(v2);
        drawVector(v3, "green");
    } else if (op === "mul") {
        var v3 = new Vector3(v1.elements);
        var v4 = new Vector3(v2.elements);
        v3.mul(scalar);
        v4.mul(scalar);
        drawVector(v3, "green");
        drawVector(v4, "green");
    } else if (op === "div") {
        var v3 = new Vector3(v1.elements);
        var v4 = new Vector3(v2.elements);
        v3.div(scalar);
        v4.div(scalar);
        drawVector(v3, "green");
        drawVector(v4, "green");
    } else if (op === "magnitude") {
        console.log("Magnitude v1:", v1.magnitude());
        console.log("Magnitude v2:", v2.magnitude());
    } else if (op === "normalize") {
        var v3 = new Vector3(v1.elements);
        var v4 = new Vector3(v2.elements);
        v3.normalize();
        v4.normalize();
        drawVector(v3, "green");
        drawVector(v4, "green");
    } else if (op === "angle") {
        console.log("Angle:", angleBetween(v1, v2));
    } else if (op === "area") {
        console.log("Area of the triangle:", areaTriangle(v1, v2));
    }
}