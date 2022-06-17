let tableWidth = 80;
let tableHeight = 35;
let tableLegMargin = 1.6;
let tableTopHeight = 8;
let tableDepth = tableWidth / 3;
///
let tableTopProperties = {
    width: tableWidth,
    height: tableTopHeight,
    depth: tableDepth
};

let tableTop = Shapes.Cube(tableTopProperties);

let tableLegProperties = {
    width: tableWidth / 20,
    height: tableHeight - tableTopProperties.height + 1,
    depth: tableWidth / 20
}
let tableLegBackLeft = Shapes.Cube(tableLegProperties);
tableLegBackLeft.moveUp(0 - tableHeight + (tableLegProperties.height / 2) + (tableTopProperties.height / 2));
tableLegBackLeft.moveRight(0 - (tableWidth / 2) + (tableLegProperties.width / 2) + tableLegMargin);
tableLegBackLeft.moveBack(0 + (tableDepth / 2) - (tableLegProperties.depth / 2) - tableLegMargin);
let tableLegBackRight = Shapes.Cube(tableLegProperties);
tableLegBackRight.moveUp(0 - tableHeight + (tableLegProperties.height / 2) + (tableTopProperties.height / 2));
tableLegBackRight.moveRight(0 + (tableWidth / 2) - (tableLegProperties.width / 2) - tableLegMargin);
tableLegBackRight.moveBack(0 + (tableDepth / 2) - (tableLegProperties.depth / 2) - tableLegMargin);
let tableLegFrontLeft = Shapes.Cube(tableLegProperties);
tableLegFrontLeft.moveUp(0 - tableHeight + (tableLegProperties.height / 2) + (tableTopProperties.height / 2));
tableLegFrontLeft.moveRight(0 - (tableWidth / 2) + (tableLegProperties.width / 2) + tableLegMargin);
tableLegFrontLeft.moveBack(0 - (tableDepth / 2) + (tableLegProperties.depth / 2) + tableLegMargin);
let tableLegFrontRight = Shapes.Cube(tableLegProperties);
tableLegFrontRight.moveUp(0 - tableHeight + (tableLegProperties.height / 2) + (tableTopProperties.height / 2));
tableLegFrontRight.moveRight(0 + (tableWidth / 2) - (tableLegProperties.width / 2) - tableLegMargin);
tableLegFrontRight.moveBack(0 - (tableDepth / 2) + (tableLegProperties.depth / 2) + tableLegMargin);
let table = Shapes.unionArray([tableTop, tableLegBackLeft, tableLegBackRight, tableLegFrontLeft, tableLegFrontRight]);
Shapes.meshAdditions(table);
table.moveUp(tableHeight);
scene.add(table);
// Utils.addAnimation(() => { table.rotation.y += 0.01; });