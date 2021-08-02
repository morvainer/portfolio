'use strict';

var gProjs = [{
    id: "101",
    name: "MineSweeper",
    title: "This is a minesweeper game",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "img/portfolio/minesweeper.jpg",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
},
{
    id: "102",
    name: "MineSweeper2",
    title: "This is a minesweeper2 game",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "img/portfolio/minesweeper.jpg",
    publishedAt: 1448693940002,
    labels: ["Matrixes", "keyboard events"],
}
];



function getProjbyId(projId) {
    // debugger;
    var proj = gProjs.find(function (proj) {//returns the project itself
        console.log('the proj(getProjbyId2)is: ', proj);
        return projId === proj.id;
    });
    console.log('the proj(getProjbyId)is: ', proj);
    return proj;

}