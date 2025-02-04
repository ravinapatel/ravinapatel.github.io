// keys must match the ids in data files
const projectImages = {
  'shareable-assets': {                                                                       // UX
    thumbnail: require('../Images/portfolio/ux/thumbnails/shareable-assets.png'),
    banner: require('../Images/portfolio/ux/shareable-assets/banner.png'),
    gradient: require('../Images/portfolio/ux/shareable-assets/gradient.png')
  },
  'profile': {
    thumbnail: require('../Images/portfolio/ux/thumbnails/profile.png'),
    banner: require('../Images/portfolio/ux/profile/banner.png'),
    gradient: require('../Images/portfolio/ux/profile/gradient.png')
  },
  'resell': {
    thumbnail: require('../Images/portfolio/ux/thumbnails/resell.png'),
    banner: require('../Images/portfolio/ux/resell/banner.png'),
    gradient: require('../Images/portfolio/ux/resell/gradient.png')
  },
  'exceed': {
    thumbnail: require('../Images/portfolio/ux/thumbnails/exceed.png'),
    banner: require('../Images/portfolio/ux/exceed/banner.png'),
    gradient: require('../Images/portfolio/ux/exceed/gradient.png')
  },
  'simplay': { thumbnail: require('../Images/portfolio/cs/simplay.png') },                  // CODE
  'code': { thumbnail: require('../Images/portfolio/cs/fractals-gif.gif') },
  'connect4': { thumbnail: require('../Images/portfolio/cs/board-gif.gif') },
  'fractals': { thumbnail: require('../Images/portfolio/cs/fractals-gif.gif') },
  'invaders': { thumbnail: require('../Images/portfolio/cs/invaders-gif.gif') },
  'pixel': { thumbnail: require('../Images/portfolio/cs/pixel_gif_og.gif') },
  'weather': { thumbnail: require('../Images/portfolio/cs/brella.png') },
  'memory': { thumbnail: require('../Images/portfolio/cs/memory.gif') },
  'critter': { thumbnail: require('../Images/portfolio/cs/critterworld.gif') },
  'fallen-flame': { thumbnail: require('../Images/portfolio/cs/fallen-flame.png') },

  'art': { thumbnail: require('../Images/portfolio/art/feels.jpg') },                       // LINE ART
  'feels': { thumbnail: require('../Images/portfolio/art/feels.jpg') },
  'moonlight': { thumbnail: require('../Images/portfolio/art/moonlight.jpg') },
  'doodle': { thumbnail: require('../Images/portfolio/art/doodle.jpg') },
  'head-back': { thumbnail: require('../Images/portfolio/art/head-back.jpg') },
  'tylenol': { thumbnail: require('../Images/portfolio/art/tylenol.jpg') },
  'building-sketch': { thumbnail: require('../Images/portfolio/art/building-sketch.jpg') },
  'faded': { thumbnail: require('../Images/portfolio/art/Faded.jpg') },
  'shmoke': { thumbnail: require('../Images/portfolio/art/shmoke.jpg') },
  'lexi': { thumbnail: require('../Images/portfolio/art/lexi.jpg') },
  'arch': { thumbnail: require('../Images/portfolio/art/arch.png') },

  'affection': { thumbnail: require('../Images/portfolio/art/affection.png') },             // WATERCOLOR ART
  'bird': { thumbnail: require('../Images/portfolio/art/bird.jpg') },
  'birds': { thumbnail: require('../Images/portfolio/art/birds.jpg') },
  'falling-water': { thumbnail: require('../Images/portfolio/art/Falling-Water.jpg') },
  'mistletoe': { thumbnail: require('../Images/portfolio/art/Mistletoe.jpg') },
  'red-purple': { thumbnail: require('../Images/portfolio/art/red-purple.jpg') },
  'sunset': { thumbnail: require('../Images/portfolio/art/Sunset.jpg') },
  'winter': { thumbnail: require('../Images/portfolio/art/Winter.jpg') },

  'fool': { thumbnail: require('../Images/portfolio/art/fool.png') },                       // OTHER ART
  'wallflower': { thumbnail: require('../Images/portfolio/art/wallflower.png') },
  'cacti': { thumbnail: require('../Images/portfolio/art/cacti.jpg') },
  'henna': { thumbnail: require('../Images/portfolio/art/Henna.jpg') },
  'sunset-sketch': { thumbnail: require('../Images/portfolio/art/Sunset-Sketch.jpg') },
  'wood-mandala': { thumbnail: require('../Images/portfolio/art/wood.jpg') },

  'motion': { thumbnail: require('../Images/portfolio/motion/bouncy-fruit.gif') },          // MOTION
  'bouncy-fruit': { thumbnail: require('../Images/portfolio/motion/bouncy-fruit.gif') },
  'smokey-cabin': { thumbnail: require('../Images/portfolio/motion/smokey-cabin.gif') },
  'starry-night': { thumbnail: require('../Images/portfolio/motion/starry-night.gif') },
  'red-sky': { thumbnail: require('../Images/portfolio/motion/red-sky.gif') },

  'toggle': { thumbnail: require('../Images/portfolio/digital/toggle.gif') },               // DIGITAL
  'cards-light': { thumbnail: require('../Images/portfolio/digital/cards-light.png') },
  'cards-dark': { thumbnail: require('../Images/portfolio/digital/cards-dark.png') },
  'cherries': { thumbnail: require('../Images/portfolio/digital/cherries.png') },
  'print': { thumbnail: require('../Images/portfolio/digital/print.png') },
  'holo-sticker': { thumbnail: require('../Images/portfolio/digital/holo-sticker.png') },

  'hiphop': { thumbnail: require('../Images/about/hip-hop.png') },                          // ABOUT
  'duo': { thumbnail: require('../Images/about/duo.png') },
  'sew': { thumbnail: require('../Images/about/sew.jpg') },
  'painting': { thumbnail: require('../Images/about/painting.jpg') },
  'react': { thumbnail: require('../Images/about/react.png') },
  'raas': { thumbnail: require('../Images/about/raas.JPG') },
  'uke': { thumbnail: require('../Images/about/uke.jpg') },
  'bnat': { thumbnail: require('../Images/about/bnat.png') },

}

export function getProjectImage(projectID, imageType) {
  return projectImages[projectID][imageType]
}