export const projects = [
  {
    id: 1,
    link: "dubai expo exhibition",
    type: "competition",
    realized: true,
    year: "2021",
    img: "bg_dubai.png",
  },
  {
    id: 2,
    link: "helsinki park design",
    type: "competition",
    realized: false,
    year: "2020",
    img: "bg_park.png",
    subProjects: [
      {
        id: 1,
        title: "PARK DESIGN",
        subtitle: "FORMER AIRPORT",
        details: {
          type: "comeptition design",
          date: "08.2020",
          "co-authors": "Jolma Architects",
        },
        bigImgs: [
          "Rento/Main_1.jpg",
          "Rento/Main_2.jpg",
          "Rento/Main_3.jpg",
          "Rento/Main_4.jpg",
        ],
        imgs: [],
        desc: [
          "The Rento project, or Malmi Rentoasemapuisto, was made in cooperation with the Finnish studio Jolma Architects, where I completed my internship in 2020.",
          "The scope of the study was the area of the former Malmi airport in Helsinki, which the city designated for multi-family housing. The project focused on the development of an innovative park in the center of the estate.",
          "The park was a symbiotic synthesis of recreational, ecological and social functions.",
          "The activities were grouped along the main route, the axis of which was marked by the former airport runways. Historic infrastructure buildings were transformed into modern cultural centers.",
          "The green and blue network of the park consisted of the various biotopes characteristic of the wild nature of Finland. They fulfilled the functions of ecosystems, inter alia, by creating extensive retention basins.",
        ],
      },
    ],
  },
  {
    id: 3,
    link: "computational design",
    type: "university projects",
    realized: false,
    year: "2022",
    img: "bg_comp.jpg",
    subProjects: [
      {
        id: 1,
        title: "GENERATIVE",
        subtitle: "APARTMENT BUILDING",
        details: {
          type: "academic project",
          date: "06.2022",
          "co-authors": "experimental design attendees",
        },
        bigImgs: ["Parametric/mieszkania-zmiana3.webp"],
        imgs: [],
        desc: [
          "<b>Generative apartment block</b>",
          "Can architectural design be automated? This was the question for our team during the classes of Experimental Design.",
          "The automation covers all the steps from placement optimization to apartment layout and facade design. The script was designed to be used on various plot sizes and locations producing the results automatically. The task was completed using Rhino + Grasshopper programming.",
          "The team was divided into four subteams automating four stages of point block design – massing, floor divisions, apartment design and facade design. We’ve decided to treat this design process as semi-linear, meaning all the major steps happened one after another, yet most of them included some form of feedback-loop-driven optimization.",
          "As I participated mostly in work of the group D3, the following images are focusing on the apartments design.",
          "<b>To see the process for the whole building, please visit:<b>",
          "<a href='experimentaldesign2022.wordpress.com' target='blank'>experimentaldesign2022</a>",
        ],
      },
      {
        id: 2,
        title: "OTHER",
        subtitle: "COMPUTATIONAL DESIGN",
        details: {
          type: "academic project",
          date: "2021-2022",
          "co-authors": "other class attendees",
        },
        bigImgs: [],
        imgs: [],
        desc: [
          "<b>Computational design</b>",
          "Simultaneously, I have got the chance to attend Digital Fabrication and Computational Design courses. We have designed a range of models and scripts including an organic lichens-inspired tile, optimization scripts and small acoustic panels.",
        ],
      },
    ],
  },
  {
    id: 4,
    link: "hotel projects",
    type: "university projects",
    realized: false,
    year: "2019 | 2021",
    img: "bg_hotel.png",
    subProjects: [
      {
        id: 1,
        title: "PEACE",
        subtitle: "WARSAW HOTEL",
        details: {
          type: "academic course project",
          date: "11-2021",
          "final grade": "5 out of 5",
        },
        desc: [],
        bigImgs: [],
        imgs: [],
      },
      {
        id: 2,
        title: "GREEN VIEW",
        subtitle: "HOTEL „TARGOWA”",
        details: {
          type: "academic course project",
          date: "11-2021",
          "final grade": "5 out of 5",
        },
        desc: [
          "The hotel building is an architectural infill between the existing tenement houses. In front of the main façade, there is a historic Łódź Park, Źródliska, known among the inhabitants for its industrial history.",
          "The glazed front elevation allows to open a lounge on the ground floor, a restaurant on the first floor and hotel rooms on the other floors with a view of greenery. To strengthen this connection, each floor has extensive, rounded balconies.",
          "The shape of the building and balconies has been designed to protect the existing high greenery on the plot. In this way, the curving façade flows around the trees, further connecting the plot to the park.",
          "In the backyard there are parking lots and two garden terazzes with a quiet space to rest",
        ],
        bigImgs: [],
        imgs: [],
      },
    ],
  },
  {
    id: 5,
    link: "interior design",
    type: "job-realated projects",
    realized: false,
    year: "2020 - 2022",
    img: "bg_interior.png",
    subProjects: [
      {
        id: 1,
        title: "EXHIBITION",
        subtitle: "EXPO 2020, DUBAI",
        details: {
          fullname:
            "the competition for temporary exhibition of Lodzkie Region Zone in Polish Pavilion at Expo 2020 Dubai, UAE",
          competition: "1st place = realized project",
          co_authors: "Martyna Piech",
          date: "04-11-2021",
          investor: "Marshal’s Office of the Lodzkie Region",
        },
        bigImgs: [],
        imgs: [],
        desc: [
          "The competition was organized by the Marshal's Office of the Lodz Region and the Lodz University of Technology to select the best exhibition design. <u>The conceptual design prepared by us won first place, thus being transferred to the implementation stage. After the competition, in close cooperation with the Office, we specified the design for the executive tender.</u>",
          "The main inspiration for the project was the golden autumn among the fields, referring to the time of the exhibition, distorted by the reversed direction of gravity.The centre of the composition was an immersive zone with a rectangular shape of four LED screens, on which shots from the Voivodeship were be displayed.",
          "Around it, the space was divided into two parts - traditional, related to culture and folklore, and modern, representing the enterprises of the region.",
        ],
      },
    ],
  },
  {
    id: 6,
    link: "publications",
    type: "university / private initiative",
    realized: false,
    year: "2019 - 2021",
    img: "bg_publications.png",
    subProjects: [
      {
        id: 1,
        title: "EXHIBITION",
        subtitle: "EXPO 2020, DUBAI",
        details: {
          fullname:
            "the competition for temporary exhibition of Lodzkie Region Zone in Polish Pavilion at Expo 2020 Dubai, UAE",
          competition: "1st place = realized project",
          co_authors: "Martyna Piech",
          date: "04-11-2021",
          investor: "Marshal’s Office of the Lodzkie Region",
        },
        bigImgs: ["dubai/Floorplan.png"],
        imgs: [
          {
            title: "Entrence view",
            src: "dubai/entrance-view.jpg",
          },
          {
            title: "Modern zone 1",
            src: "dubai/modern-zone-1.jpg",
          },
          {
            title: "Modern zone 2",
            src: "dubai/modern-zone-2.jpg",
          },
          {
            title: "Modern zone 3",
            src: "dubai/modern-zone-3.jpg",
          },
          {
            title: "Traditional zone 1",
            src: "dubai/traditional-zone-1.jpg",
          },
          {
            title: "Traditional zone 2",
            src: "dubai/Traditional zone 2.jpg",
          },
        ],
        desc: [
          "The competition was organized by the Marshal's Office of the Lodz Region and the Lodz University of Technology to select the best exhibition design. <u>The conceptual design prepared by us won first place, thus being transferred to the implementation stage. After the competition, in close cooperation with the Office, we specified the design for the executive tender.</u>",
          "The main inspiration for the project was the golden autumn among the fields, referring to the time of the exhibition, distorted by the reversed direction of gravity.The centre of the composition was an immersive zone with a rectangular shape of four LED screens, on which shots from the Voivodeship were be displayed.",
          "Around it, the space was divided into two parts - traditional, related to culture and folklore, and modern, representing the enterprises of the region.",
        ],
      },
    ],
  },
  {
    id: 7,
    link: "ukraine expedition",
    type: "university",
    realized: false,
    year: "2019",
    img: "bg_hucu.png",
    subProjects: [
      {
        id: 1,
        title: "EXPEDITION",
        subtitle: "HUCULSZCZYZNA 2019",
        details: {
          fullname:
            "21st Scientific Expedition of Architecture Students of Lodz University of Technology to the Eastern Carpathians in Ukraine – “THE HUTSUL LANDS 2019”",
          type: "scientific expedition -> conferences -> publication -> 1st place in nationwide competition as the best students' expedition of 2019",
          date: "07.2019",
          co_authors: "Scientific Architecture circle IX„Piętro”",
        },
        bigImgs: [],
        imgs: [
          {
            title: "Photo by Gabriela Potoniec",
            src: "Hucu/Gallery/Photo by Gabriela Potoniec (2).jpg",
          },
          {
            title: "Photo by Gabriela Potoniec",
            src: "Hucu/Gallery/Photo by Gabriela Potoniec.jpg",
          },
          {
            title: "Photo by Roksana Nowicka",
            src: "Hucu/Gallery/Photo by Roksana Nowicka.jpg",
          },
          {
            title: "Photo by Wojciech Pardała",
            src: "Hucu/Gallery/Photo by Wojciech Pardała.jpg",
          },
          {
            title: "Sketch of the building",
            src: "Hucu/Gallery/Sketch of the building.jpg",
          },
          {
            title: "Sketch",
            src: "Hucu/Gallery/Sketch.jpg",
          },
        ],
        desc: [
          "The competition was organized by the Marshal's Office of the Lodz Region and the Lodz University of Technology to select the best exhibition design. <u>The conceptual design prepared by us won first place, thus being transferred to the implementation stage. After the competition, in close cooperation with the Office, we specified the design for the executive tender.</u>",
          "The main inspiration for the project was the golden autumn among the fields, referring to the time of the exhibition, distorted by the reversed direction of gravity.The centre of the composition was an immersive zone with a rectangular shape of four LED screens, on which shots from the Voivodeship were be displayed.",
          "Around it, the space was divided into two parts - traditional, related to culture and folklore, and modern, representing the enterprises of the region.",
        ],
      },
    ],
  },
];
