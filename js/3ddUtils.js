export class Utils {
    constructor(Shapes, animationArr, STLLoader, lights) {
        this.Shapes = Shapes;
        this.animationArr = animationArr;
        this.separateExport = false;
        this.STLLoader = STLLoader;
        this.lights = lights;
        this.scene = {};
    }
    addAnimation(animationCallback) {
        this.animationArr.push(animationCallback);
    }
    test() {
        console.log(THREE);
    }
    getRandomNumber(min, max) {
        min = min || 0;
        max = max || 1;
        return Math.random() * (max - min) + min;
    }
    random(min, max) {
        this.getRandomNumber.apply(this, arguments);
    }
    pointsToAngle(x1, y1, x2, y2, returnInRadians) {
        returnInRadians = returnInRadians || false;
        let result = Math.atan2(y2 - y1, x2 - x1);
        if (returnInRadians) {
            return result;
        }
        return result * (180 / Math.PI);
    }
    getPointsFromDistanceAngle(distance, angle) {
        return {
            x: (distance * Math.cos(this.Shapes.degToRad(angle))),
            y: (distance * Math.sin(this.Shapes.degToRad(angle)))
        };
    }
    getPointsDistance(x1, y1, x2, y2) {
        x2 = x2 || 0;
        y2 = y2 || 0;
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
    getRandomAngles(count, min, max, minGap) {
        minGap = minGap || 0;
        if (max - min <= minGap) {
            minGap = max - min;
            minGap = minGap >= 1 ? minGap - 1 : 0;
        }
        let arr = [];
        while (count > 0) {
            let num = this.getRandomNumber(min, max);
            let minGapBreached = false;
            for (let i = 0; i < arr.length; i++) {
                if ((num == arr[i]) || ((num < arr[i]) && (num + minGap >= arr[i])) || ((num > arr[i]) && (num - minGap <=arr[i]))) {
                    minGapBreached = true;
                    break;
                } 
            }
            if (!minGapBreached) {
                arr.push(num);
                count--;
            }
        }
    
        return arr;
    }
    addArrowHelpers(obj, addToScene) {
        addToScene = addToScene === false ? false : true;

        let geometry = obj.geometry;
        var position = geometry.getAttribute('position');
        var normal = geometry.getAttribute('normal');
        let helpers = [];
        for (let i = 0; i < position.array.length; i += 3) {
            let dir = new THREE.Vector3(normal.array[i], normal.array[i + 1], normal.array[i + 2]);
            let origin = new THREE.Vector3(position.array[i], position.array[i + 1], position.array[i + 2]);
    
            // console.log("dir", dir);
            // console.log("origin", origin);
            var helper = new THREE.ArrowHelper(dir, origin, 3, 0x00ff00);
            helper.position.copy(origin);
            if (addToScene) {
                this.scene.add(helper);
            }
            else {
                helpers.push(helper);
            }
        }

        return addToScene ? true : helpers;
    }
}

