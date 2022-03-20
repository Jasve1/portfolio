export const PROJECTS = [
    {
        id: 'project1',
        title: 'Space Crash',
        pages: [
            {
                num: 1,
                dscrp: 'Space Crash is an infinite runner meets Space Invaders meets Cell Damage that I made in Unity. All the 3D meshes I made in Blender and for the background I used a free asset made by Dogmatic. I created the game out of frustration for this whole corona situation. I just wanted to destroy stuff and was inspired by the feeling of senseless destruction that is also present in a game like Cell Damage or GTA. The spiders in the game represent all the bad thoughts in my brain.',
                roles: ['Game Design', 'Game Development', '3D Modeling', 'UI Design'],
            },
            {
                num: 2,
                gallery: [
                    {
                        imgSrcHR: 'space_crash_img1.png',
                        imgSrcLR: '',
                        alt: 'Scene from Space Crash',
                        descrp: 'When you hit the spiders with your laser cannon they will be pushed back and if you hit them enough times they explode into small squares. This feedback is to give you the feeling of really hitting and destroying something.'
                    },
                    {
                        imgSrcHR: 'space_crash_img2.png',
                        imgSrcLR: '',
                        alt: 'Scene from Space Crash',
                        descrp: 'The enemies have very saturated colours to stand out from the less saturated ground. For example the first spiders you meet are red to make them look dangerous.'
                    },
                    {
                        imgSrcHR: 'space_crash_img3.png',
                        imgSrcLR: '',
                        alt: 'Scene from Space Crash',
                        descrp: 'The score is displayed in the top right corner and on the “level completed” screen in the end so you know how many spiders you destroyed.'
                    },
                    {
                        imgSrcHR: 'space_crash_img4.png',
                        imgSrcLR: '',
                        alt: 'Scene from Space Crash',
                        descrp: 'If you run into the spiders the camera shakes violently to put emphasis on the fact that you crashed.'
                    }
                ]
            }
        ]
    },
    {
        id: 'project2',
        title: '3D Oni Sculpture',
        pages: [
            {
                num: 1,
                dscrp: 'Initially creating this monster was to practice blender but as I went along I got an idea for a game. You play as this monster and everybody hates, fears you and wants you to die. Except this one cult. They want you to destroy the world because they think the world is sinful. So now you, as a player, have a choice. Join the cult, destroy the world and be the monster everyone already thinks you are or try to do good things to change people’s minds.',
                roles: ['Character Design', '3D Modeling'],
            },
            {
                num: 2,
                gallery: [
                    {
                        imgSrcHR: 'oni_img1.png',
                        imgSrcLR: '',
                        alt: '3D Oni sculpture',
                        descrp: 'The game I imagine for this monster is a game where you play as the monster in a world where everybody hates and fears you. Everybody, except this one cult. They want you to destroy the world because they think it is filled with sin. So now you, the player, have a choice. Join the cult, destroy the world and be the monster everyone already thinks you are or try to do good things to change people’s minds.'
                    },
                    {
                        imgSrcHR: 'oni_img2.png',
                        imgSrcLR: '',
                        alt: '3D Oni sculpture',
                        descrp: 'The 3D model is made in Blender by sculpting basic shapes. After the sculpting process I had to retopologize it so I could animate the model. It was a long and tedious process that I could have optimized if I had copied the basic shapes before sculpting them and then wrapped them around the sculpted model.'
                    },
                    {
                        imgSrcHR: 'oni_img3.png',
                        imgSrcLR: '',
                        alt: '3D Oni sculpture',
                        descrp: 'The character needs to look like he could destroy anything because you will be able to do so in the game. His people live in small humble tribes which his clothes should reflect.'
                    }
                ]
            }
        ]
    },
    {
        id: 'project3',
        title: 'Cooling Plant App',
        pages: [
            {
                num: 1,
                dscrp: 'For a school assignment I had to create an app for a cooling plant with 4 tanks focusing on Donald Norman’s Design Principles. The app is meant to be operated by an engineer while she walks around the plant.',
                roles: ['UI Design', 'UX'],
            },
            {
                num: 2,
                gallery: [
                    {
                        imgSrcHR: 'cooling_app_img1.png',
                        imgSrcLR: '',
                        alt: 'Front page',
                        descrp: 'The tanks are shown in the way they appear in the real world and there is a compass in the middle so the engineer can figure out where the tanks are relative to her while walking around outside.'
                    },
                    {
                        imgSrcHR: 'cooling_app_img2.png',
                        imgSrcLR: '',
                        alt: 'Transfer modal',
                        descrp: 'When two tanks have been chosen a message will appear asking you how much you want to transfer.'
                    },
                    {
                        imgSrcHR: 'cooling_app_img3.png',
                        imgSrcLR: '',
                        alt: 'Ongoing transfer',
                        descrp: 'A pipe shows between the two transfering tanks to signify an ongoing transfer.'
                    },
                    {
                        imgSrcHR: 'cooling_app_img4.png',
                        imgSrcLR: '',
                        alt: 'Change temprature',
                        descrp: 'If a tank’s material is too hot or too cold the thermometer button will pulsate red or blue colour.'
                    }
                ]
            }
        ]
    }
];
