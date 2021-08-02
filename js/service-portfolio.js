'use strict';

var gProjs = [{
    id: "101",
    name: "MineSweeper",
    title: "This is a minesweeper game",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "img/portfolio/minesweeper.jpg",
    publishedAt: '02/08/2021',
    labels: ["Matrixes", "keyboard events"],
    gitHubUrl: "https://morvainer.github.io/minesweeper/"
},
{
    id: "102",
    name: "TouchNums",
    title: "This is TouchNums game",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "img/portfolio/touchnums.jpg",
    publishedAt: '02/08/2021',
    labels: ["Matrixes", "keyboard events"],
    gitHubUrl: "https://morvainer.github.io/touchnums/"
},
{
    id: "103",
    name: "PacMan",
    title: "This is Pacman game",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "img/portfolio/pacman.jpg",
    publishedAt: '02/08/2021',
    labels: ["Matrixes", "keyboard events"],
    gitHubUrl: "https://morvainer.github.io/pacman/"
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