var APP_DATA = {
  "scenes": [
    {
      "id": "0-edu_hub",
      "name": "edu_Hub",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.268920525143443,
        "pitch": -0.27478018884842115,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.073060880825917,
          "pitch": -0.23103040147588239,
          "rotation": 0,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance",
      "name": "entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.1394849716734896,
        "pitch": -0.3931236202642445,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.7770189196222397,
          "pitch": 0.05538653920855907,
          "rotation": 0,
          "target": "0-edu_hub"
        },
        {
          "yaw": -0.17528701681014525,
          "pitch": -0.07153090615547342,
          "rotation": 0,
          "target": "2-entrance1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrance1",
      "name": "entrance1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.2906921718278497,
        "pitch": -0.20427673132346058,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.915801522995647,
          "pitch": 0.20016270580471307,
          "rotation": 0,
          "target": "1-entrance"
        },
        {
          "yaw": -0.07051240199658437,
          "pitch": -0.18562034191312904,
          "rotation": 0,
          "target": "3-entrance2"
        },
        {
          "yaw": 1.4976868870295625,
          "pitch": -0.07292291760855107,
          "rotation": 0,
          "target": "5-entrance1_right"
        },
        {
          "yaw": -1.6055225332344634,
          "pitch": 0.009837181254297889,
          "rotation": 0,
          "target": "45-boys_walkway8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entrance2",
      "name": "entrance2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.1282282715751073,
        "pitch": -0.4381219941443337,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 3.130116316685628,
          "pitch": 0.1747428466141976,
          "rotation": 0,
          "target": "2-entrance1"
        },
        {
          "yaw": -0.06473136205710972,
          "pitch": -0.18778452115440203,
          "rotation": 0,
          "target": "4-main-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-main-entrance",
      "name": "main entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.099030015960766,
          "pitch": 0.18596774939252292,
          "rotation": 0,
          "target": "3-entrance2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-entrance1_right",
      "name": "entrance1_right",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -3.092541275747001,
          "pitch": 0.1433177360998208,
          "rotation": 0,
          "target": "2-entrance1"
        },
        {
          "yaw": -0.07350896744598856,
          "pitch": -0.15158900039534728,
          "rotation": 0,
          "target": "6-entrance1_right1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-entrance1_right1",
      "name": "entrance1_right1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.20124714844424219,
        "pitch": -0.20354088062846465,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -3.0777979156389303,
          "pitch": 0.2158414758570526,
          "rotation": 0,
          "target": "5-entrance1_right"
        },
        {
          "yaw": 0.07304592282265432,
          "pitch": -0.08741028086150315,
          "rotation": 0,
          "target": "7-entrance1_right2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-entrance1_right2",
      "name": "entrance1_right2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.037399912542731784,
        "pitch": -0.18064253155775845,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.0824602839866202,
          "pitch": -0.07445762505836839,
          "rotation": 0,
          "target": "8-entrance1_right3"
        },
        {
          "yaw": 3.094025275333478,
          "pitch": 0.18901935260488756,
          "rotation": 0,
          "target": "6-entrance1_right1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-entrance1_right3",
      "name": "entrance1_right3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.01884751289976805,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.01690799913969343,
          "pitch": -0.06581222420958,
          "rotation": 0,
          "target": "9-entrance1_right4"
        },
        {
          "yaw": 3.1064143409749763,
          "pitch": 0.23493156494042822,
          "rotation": 0,
          "target": "7-entrance1_right2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-entrance1_right4",
      "name": "entrance1_right4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3080076081054557,
          "pitch": 0.03927835462079088,
          "rotation": 0,
          "target": "10-entrance1_right5"
        },
        {
          "yaw": -2.7840786269051456,
          "pitch": 0.20603868397931713,
          "rotation": 0,
          "target": "8-entrance1_right3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-entrance1_right5",
      "name": "entrance1_right5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.5397016481899684,
        "pitch": -0.10143413112700372,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.2627256035449932,
          "pitch": -0.07546419284046735,
          "rotation": 0,
          "target": "11-entrance1_right6"
        },
        {
          "yaw": 2.899338984447546,
          "pitch": 0.1958448954655445,
          "rotation": 0,
          "target": "9-entrance1_right4"
        },
        {
          "yaw": -1.2827003774190224,
          "pitch": 0.04711290999903106,
          "rotation": 0,
          "target": "14-entrance1_right5_gh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-entrance1_right6",
      "name": "entrance1_right6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.27025068180331857,
        "pitch": -0.2942182100345434,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.08255867712550291,
          "pitch": -0.018122434821677302,
          "rotation": 0,
          "target": "12-entrance1_right7"
        },
        {
          "yaw": 3.0668877787259294,
          "pitch": 0.1521475651317239,
          "rotation": 0,
          "target": "10-entrance1_right5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-entrance1_right7",
      "name": "entrance1_right7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.5207025619003325,
        "pitch": -0.19227342029699201,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.08669760381680547,
          "pitch": -0.07474380405845338,
          "rotation": 0,
          "target": "13-entrance1_right8"
        },
        {
          "yaw": 3.113384207568898,
          "pitch": 0.1974464749485474,
          "rotation": 0,
          "target": "11-entrance1_right6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-entrance1_right8",
      "name": "entrance1_right8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.062142989700847195,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -3.0471424284564375,
          "pitch": 0.19182759376078629,
          "rotation": 0,
          "target": "12-entrance1_right7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-entrance1_right5_gh",
      "name": "entrance1_right5_gh",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.185218614497364,
        "pitch": -0.050885220157113054,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.7444482296961645,
          "pitch": 0.20099661962062854,
          "rotation": 0,
          "target": "10-entrance1_right5"
        },
        {
          "yaw": 0.0501860369329723,
          "pitch": -0.07668838999963334,
          "rotation": 0,
          "target": "15-entrance1_right5_gh1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-entrance1_right5_gh1",
      "name": "entrance1_right5_gh1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 3.1322107510635737,
          "pitch": 0.21354805021343637,
          "rotation": 0,
          "target": "14-entrance1_right5_gh"
        },
        {
          "yaw": -0.027738329260309058,
          "pitch": -0.08768224216165521,
          "rotation": 0,
          "target": "16-entrance1_right5_gh2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-entrance1_right5_gh2",
      "name": "entrance1_right5_gh2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.40605619332115417,
        "pitch": -0.05851800318068001,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -3.0992668957677996,
          "pitch": 0.13840531056742833,
          "rotation": 0,
          "target": "15-entrance1_right5_gh1"
        },
        {
          "yaw": 0.03175276511320568,
          "pitch": -0.09891194339996545,
          "rotation": 0,
          "target": "17-entrance1_right5_gh3"
        },
        {
          "yaw": -1.9476139335276237,
          "pitch": 0.07875706475646638,
          "rotation": 0,
          "target": "26-circket_gh_ent"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-entrance1_right5_gh3",
      "name": "entrance1_right5_gh3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.102466042142485,
          "pitch": 0.1891047452995771,
          "rotation": 0,
          "target": "16-entrance1_right5_gh2"
        },
        {
          "yaw": -0.03532845048889932,
          "pitch": -0.12300055338261018,
          "rotation": 0,
          "target": "18-entrance1_right5_gh3_left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-entrance1_right5_gh3_left",
      "name": "entrance1_right5_gh3_left",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 3.1290884431070776,
          "pitch": 0.19219697685216275,
          "rotation": 0,
          "target": "17-entrance1_right5_gh3"
        },
        {
          "yaw": -1.5114834135815052,
          "pitch": 0.01692311538917224,
          "rotation": 0,
          "target": "19-entrance1_right5_gh3_left1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-entrance1_right5_gh3_left1",
      "name": "entrance1_right5_gh3_left1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.039541848964631754,
        "pitch": 0.09380829759129128,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 3.1403651134388557,
          "pitch": 0.18306792660310478,
          "rotation": 0,
          "target": "18-entrance1_right5_gh3_left"
        },
        {
          "yaw": 0.009711286670487596,
          "pitch": -0.057843791759161434,
          "rotation": 0,
          "target": "20-entrance1_right5_gh3_left2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-entrance1_right5_gh3_left2",
      "name": "entrance1_right5_gh3_left2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.29633530887398507,
        "pitch": -0.05075893529707365,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -3.1193631267980084,
          "pitch": 0.17346323119828355,
          "rotation": 0,
          "target": "19-entrance1_right5_gh3_left1"
        },
        {
          "yaw": 0.01131052645752817,
          "pitch": -0.0006904244783854097,
          "rotation": 0,
          "target": "21-entrance1_right5_gh3_left3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-entrance1_right5_gh3_left3",
      "name": "entrance1_right5_gh3_left3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.1353520644403794,
        "pitch": -0.04325243713353544,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -3.113284461379468,
          "pitch": 0.15286851944042112,
          "rotation": 0,
          "target": "20-entrance1_right5_gh3_left2"
        },
        {
          "yaw": 0.03181372492959689,
          "pitch": -0.034076323269356834,
          "rotation": 0,
          "target": "22-entrance1_right5_gh3_left4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-entrance1_right5_gh3_left4",
      "name": "entrance1_right5_gh3_left4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.6663064582693004,
        "pitch": 0.053416746736406395,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 3.0056818022877145,
          "pitch": 0.15822485283018928,
          "rotation": 0,
          "target": "21-entrance1_right5_gh3_left3"
        },
        {
          "yaw": -1.2534230825944555,
          "pitch": -0.10080162139147042,
          "rotation": 0,
          "target": "23-mess-walkway"
        },
        {
          "yaw": -0.11780184842391428,
          "pitch": -0.09990193761142407,
          "rotation": 0,
          "target": "35-boys_walkway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-mess-walkway",
      "name": "mess walkway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.011782097235302658,
          "pitch": -0.16920294399194447,
          "rotation": 0,
          "target": "24-mess-walkway1"
        },
        {
          "yaw": -2.539869717081107,
          "pitch": 0.16807047178195056,
          "rotation": 0,
          "target": "22-entrance1_right5_gh3_left4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-mess-walkway1",
      "name": "mess walkway1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.008520829402654,
        "pitch": -0.18279382286724122,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -3.134445601974292,
          "pitch": 0.4485780193253177,
          "rotation": 0,
          "target": "23-mess-walkway"
        },
        {
          "yaw": -1.4536871903049864,
          "pitch": -0.05127548457274855,
          "rotation": 0,
          "target": "25-mess-walkway2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-mess-walkway2",
      "name": "mess walkway2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.037399912542735336,
        "pitch": -0.33584245303696747,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 3.0577098172305686,
          "pitch": 0.2035366399249412,
          "rotation": 0,
          "target": "24-mess-walkway1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-circket_gh_ent",
      "name": "circket_gh_ent",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06760135318996241,
          "pitch": -0.04112177451149002,
          "rotation": 0,
          "target": "16-entrance1_right5_gh2"
        },
        {
          "yaw": 2.8158640120939715,
          "pitch": 0.13757089785928756,
          "rotation": 0,
          "target": "49-cric_admin_block3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-cric1",
      "name": "cric1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09247159526706028,
          "pitch": -0.21779369124929282,
          "rotation": 0,
          "target": "28-cric1-midd"
        },
        {
          "yaw": -2.481432783181324,
          "pitch": 0.21898684516442302,
          "rotation": 0,
          "target": "26-circket_gh_ent"
        },
        {
          "yaw": -0.9125619236004834,
          "pitch": -0.0438508971266387,
          "rotation": 0,
          "target": "50-cric_admin_block4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-cric1-midd",
      "name": "cric1 midd",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1261202138476563,
          "pitch": 0.029030496471474265,
          "rotation": 0,
          "target": "49-cric_admin_block3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-cric_mainroad_out",
      "name": "cric_mainroad_out",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6195679768067492,
          "pitch": -0.004130098128303672,
          "rotation": 5.497787143782138,
          "target": "47-cric_admin_block1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-second_way_to_admin",
      "name": "second_way_to_admin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "31-second_way_to_admin1",
      "name": "second_way_to_admin1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "32-second_way_to_admin2",
      "name": "second_way_to_admin2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "33-admin_ent",
      "name": "admin_ent",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "34-admin_ent1",
      "name": "admin_ent1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "35-boys_walkway",
      "name": "boys_walkway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.097384882249573,
          "pitch": 0.08300076738806439,
          "rotation": 0,
          "target": "22-entrance1_right5_gh3_left4"
        },
        {
          "yaw": -0.05982001132301917,
          "pitch": 0.04245049124573441,
          "rotation": 0,
          "target": "36-boys_walkway1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-boys_walkway1",
      "name": "boys_walkway1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.02356035879819629,
          "pitch": 0.09395526329126902,
          "rotation": 0,
          "target": "37-boys_walkway2"
        },
        {
          "yaw": 3.128264621744787,
          "pitch": 0.05136731102928671,
          "rotation": 0,
          "target": "35-boys_walkway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-boys_walkway2",
      "name": "boys_walkway2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.5670340591397576,
        "pitch": 0.11703600636138134,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.6889107194331032,
          "pitch": 0.03047142430877159,
          "rotation": 0,
          "target": "38-boys_walkway3"
        },
        {
          "yaw": -2.6415297999309058,
          "pitch": 0.06764427240653603,
          "rotation": 0,
          "target": "36-boys_walkway1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-boys_walkway3",
      "name": "boys_walkway3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03446151296353683,
          "pitch": 0.010505556098046043,
          "rotation": 0,
          "target": "39-boys_walkway4"
        },
        {
          "yaw": -3.052015420348349,
          "pitch": 0.01543249432087812,
          "rotation": 6.283185307179586,
          "target": "37-boys_walkway2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-boys_walkway4",
      "name": "boys_walkway4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.389403162184344,
          "pitch": -0.020805574796101567,
          "rotation": 0,
          "target": "40-boys_walkway_to_event"
        },
        {
          "yaw": -0.14657757336170896,
          "pitch": 0.0448483822362995,
          "rotation": 0,
          "target": "41-boys_walkway5"
        },
        {
          "yaw": 3.1170673237844744,
          "pitch": -0.02120410863113875,
          "rotation": 0,
          "target": "38-boys_walkway3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-boys_walkway_to_event",
      "name": "boys_walkway_to_event",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.030419688436476022,
        "pitch": -0.3231288875177043,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.8371377328833507,
          "pitch": 0.045467103831878575,
          "rotation": 5.497787143782138,
          "target": "39-boys_walkway4"
        },
        {
          "yaw": -0.07804581622954032,
          "pitch": -0.02683461706277157,
          "rotation": 0,
          "target": "54-event_cent1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-boys_walkway5",
      "name": "boys_walkway5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.7195030793935899,
        "pitch": -0.018202989375485146,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.008523135655137182,
          "pitch": 0.00977005743143522,
          "rotation": 0,
          "target": "43-boys_walkway6"
        },
        {
          "yaw": 2.888989191163697,
          "pitch": 0.008142342468691055,
          "rotation": 0,
          "target": "39-boys_walkway4"
        },
        {
          "yaw": -1.1359243098991207,
          "pitch": -0.05686868607517326,
          "rotation": 0,
          "target": "42-boys_walkway_admin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-boys_walkway_admin",
      "name": "boys_walkway_admin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.7260932126529855,
          "pitch": 0.06234918395699829,
          "rotation": 0,
          "target": "41-boys_walkway5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-boys_walkway6",
      "name": "boys_walkway6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.055548987795194904,
        "pitch": -0.05404178172283025,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 3.087817965200834,
          "pitch": 0.03417633079385496,
          "rotation": 0,
          "target": "41-boys_walkway5"
        },
        {
          "yaw": -0.09823382197865271,
          "pitch": 0.06245254207661688,
          "rotation": 0,
          "target": "44-boys_walkway7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-boys_walkway7",
      "name": "boys_walkway7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.14509274224237778,
          "pitch": 0.006873821533798008,
          "rotation": 0,
          "target": "45-boys_walkway8"
        },
        {
          "yaw": 3.046907155762864,
          "pitch": 0.023947739704075488,
          "rotation": 0,
          "target": "43-boys_walkway6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-boys_walkway8",
      "name": "boys_walkway8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.4607846157530417,
        "pitch": 0.028251103916069553,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.519751254914441,
          "pitch": 0.04391554879519077,
          "rotation": 0,
          "target": "2-entrance1"
        },
        {
          "yaw": -2.3064849544226913,
          "pitch": 0.07738770173099319,
          "rotation": 0,
          "target": "44-boys_walkway7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-cric_admin_block",
      "name": "cric_admin_block",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.8642752988996776,
        "pitch": -0.22265352903735547,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.22182363596635035,
          "pitch": 0.04871904750993039,
          "rotation": 5.497787143782138,
          "target": "47-cric_admin_block1"
        },
        {
          "yaw": -3.1262073774973693,
          "pitch": 0.013072529705675962,
          "rotation": 0.7853981633974483,
          "target": "52-cric_admin_block6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-cric_admin_block1",
      "name": "cric_admin_block1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.699226435695639,
          "pitch": 0.03589110549746444,
          "rotation": 0,
          "target": "46-cric_admin_block"
        },
        {
          "yaw": -0.12670829529406902,
          "pitch": 0.033036686899400536,
          "rotation": 5.497787143782138,
          "target": "48-cric_admin_block2"
        },
        {
          "yaw": 0.2767183314576904,
          "pitch": 0.00662720035193054,
          "rotation": 7.853981633974483,
          "target": "29-cric_mainroad_out"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-cric_admin_block2",
      "name": "cric_admin_block2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8782945190594873,
          "pitch": 0.015361666429848597,
          "rotation": 0,
          "target": "47-cric_admin_block1"
        },
        {
          "yaw": -0.11862812218380725,
          "pitch": 0.07655349676435641,
          "rotation": 0,
          "target": "49-cric_admin_block3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-cric_admin_block3",
      "name": "cric_admin_block3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8050412831535994,
          "pitch": 0.07828684755684634,
          "rotation": 0.7853981633974483,
          "target": "48-cric_admin_block2"
        },
        {
          "yaw": 2.5096584918746716,
          "pitch": 0.027386902534068724,
          "rotation": 0,
          "target": "26-circket_gh_ent"
        },
        {
          "yaw": 0.13411326756766329,
          "pitch": 0.041667211682129945,
          "rotation": 0,
          "target": "50-cric_admin_block4"
        },
        {
          "yaw": -1.23257668396624,
          "pitch": -0.009763797268902863,
          "rotation": 0,
          "target": "28-cric1-midd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-cric_admin_block4",
      "name": "cric_admin_block4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09126333573586543,
          "pitch": 0.052724333685659985,
          "rotation": 0,
          "target": "51-cric_admin_block5"
        },
        {
          "yaw": -2.981652532489157,
          "pitch": 0.021271208796957097,
          "rotation": 0,
          "target": "49-cric_admin_block3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-cric_admin_block5",
      "name": "cric_admin_block5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7895434006387116,
          "pitch": 0.053024388203343875,
          "rotation": 0,
          "target": "50-cric_admin_block4"
        },
        {
          "yaw": -0.1158160812525395,
          "pitch": 0.016641014413927735,
          "rotation": 5.497787143782138,
          "target": "52-cric_admin_block6"
        },
        {
          "yaw": 2.6085720787576587,
          "pitch": -0.09319851042823046,
          "rotation": 17.27875959474387,
          "target": "54-event_cent1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-cric_admin_block6",
      "name": "cric_admin_block6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1747961474276316,
          "pitch": 0.04906426694796551,
          "rotation": 0,
          "target": "46-cric_admin_block"
        },
        {
          "yaw": -2.9135470503790906,
          "pitch": 0.007024194604564826,
          "rotation": 0,
          "target": "51-cric_admin_block5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-event_cent",
      "name": "event_cent",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9750225631495582,
          "pitch": -0.04646048646816325,
          "rotation": 0,
          "target": "40-boys_walkway_to_event"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-event_cent1",
      "name": "event_cent1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1135259347587265,
          "pitch": -0.021608586265026375,
          "rotation": 0,
          "target": "51-cric_admin_block5"
        },
        {
          "yaw": -1.948268742640371,
          "pitch": -0.02341742086959897,
          "rotation": 0,
          "target": "40-boys_walkway_to_event"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
