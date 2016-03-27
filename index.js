// пример многоугольников
var examples = {
  first: [
    { x: 60,  y: 60  },
    { x: 180, y: 0   },
    { x: 300, y: 60  },
    { x: 300, y: 300 },
    { x: 240, y: 180 },
    { x: 210, y: 180 },
    { x: 180, y: 240 },
    { x: 150, y: 180 },
    { x: 120, y: 180 },
    { x: 60,  y: 300 },
  ],
  second: [
    { x: 30,  y: 240 },
    { x: 330, y: 240 },
    { x: 330, y: 210 },
    { x: 270, y: 90  },
    { x: 210, y: 270 },
    { x: 210, y: 90  },
    { x: 180, y: 60  },
    { x: 150, y: 90  },
    { x: 150, y: 270 },
    { x: 90,  y: 90  },
    { x: 30,  y: 210 }
  ]
};
/*
  first: [
    { x: 10,  y: 70  },
    { x: 70,  y: 70  },
    { x: 10,  y: 10  },
    { x: 70,  y: 10  },
  ],
  second: [
    { x: 30,  y: 50  },
    { x: 50,  y: 50  },
    { x: 30,  y: 30  },
    { x: 50,  y: 30  }
  ]
};

  first: [
    { x: 10,  y: 70  },
    { x: 70,  y: 70  },
    { x: 10,  y: 10  },
    { x: 70,  y: 10  },
  ],
  second: [
    { x: 30,  y: 50  },
    { x: 50,  y: 50  },
    { x: 50,  y: 30  },
    { x: 30,  y: 30  }
  ]
};*/


function drawPath(data, container, color) {
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  var str = 'M' + data[0].x + ',' + data[0].y+' ';
  str += data.slice(1).map(function (point) {
    return 'L' + point.x + ',' + point.y;
  }).join(' ');
  str += 'L' + data[0].x + ',' + data[0].y+' ';
  path.setAttribute('d', str);
  path.style.fill = color;
  container.appendChild(path);
}

drawPath(examples.first, document.querySelector('svg.base'), 'navy');
drawPath(examples.second, document.querySelector('svg.base'), 'yellow');

intersects(examples.first, examples.second).forEach(function (p) {
  drawPath(p, document.querySelector('svg.intersections'), 'red');
})
