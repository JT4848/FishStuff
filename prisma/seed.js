const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const seed = async () => {
  console.log("Creating fish");

  await prisma.fish.create({
    data:{
      name: "Snook",
      minSize: "28 inches",
      maxSize: "33 inches",
      edibility: "Excellent",
      measurement: "Total length",
      bagLimit: 1,
      photo: "https://th.bing.com/th/id/R.61b3da27850fcba77bf8652a446317ac?rik=7BRoROTc%2b%2fYGIg&riu=http%3a%2f%2fwww.floridasportsman.com%2fwp-content%2fuploads%2f2018%2f08%2fThis-happy-angler-caught-this-big-snook-while-fishing-with-Capt.-Jim-Huddleston-Inshore-Sportfishing-Charters-out-of-Palm-Harbor-1024x759.jpg&ehk=BozSq3MMWdlNmwzVJFqoZCt0tRrcsBYVx8gVkb20br0%3d&risl=&pid=ImgRaw&r=0",
      saltwater: true,
      freshwater: true
    }
  })

  await prisma.fish.create({
    data:{
      name: "Dolphin",
      minSize: "No minimum size",
      maxSize: "No maximum size",
      edibility: "Excellent",
      bagLimit: 10,
      photo: "https://www.saltstrong.com/wp-content/uploads/best-mahi-pics-1.jpg",
      saltwater: true,
      synonyms: "mahi-mahi, dorado"
    }
  })

  await prisma.fish.create({
    data:{
      name: "Hardhead Catfish",
      minSize: "No minimum size",
      maxSize: "No maximum size",
      edibility: "Poor",
      photo: "https://i0.wp.com/mexican-fish.com/wp-content/uploads/F728-Hardhead-Catfish-2A.jpg?fit=1511%2C681&ssl=1",
      saltwater: true
    }
  })

  await prisma.fish.create({
    data:{
      name: "Goliath Grouper",
      illegal: true,
      photo: "https://th.bing.com/th/id/R.15e3247b55cd57338e7db7ce97b54a90?rik=STzKlHgmHj10vA&riu=http%3a%2f%2fwww.xray-mag.com%2fsites%2fdefault%2ffiles%2fatlantic_goliath_grouper.jpg&ehk=H%2fkR0RYSfhWF6NVUnyYjUwa%2bAHBmnc6tf1eK6plawRg%3d&risl=&pid=ImgRaw&r=0",
    }
  })

  await prisma.fish.create({
    data:{
      name: "Hogfish",
      minSize: "14 inches",
      maxSize: "No maximum size",
      measurement: "Fork length",
      edibility: "Excellent",
      bagLimit: 5,
      photo: "https://gotonecharters.com/wp-content/uploads/2019/09/hog-snapper-hogfish-fishing-29.jpg",
      saltwater: true
    }
  })

  await prisma.fish.create({
    data:{
      name: "Largemouth bass",
      minSize: "No minimum size",
      maxSize: "16 inches",
      measurement: "Total length",
      bagLimit: 5,
      edibility: "Excellent",
      photo: "https://fishingrefined.com/wp-content/uploads/2020/01/A-largemouth-bass-caught-in-a-pond-in-Maine.jpg",
      freshwater: true
    }
  })

  await prisma.fish.create({
    data:{
      name: "Bowfin",
      edibility: "Poor",
      photo: "https://th.bing.com/th/id/R.91c27214b5069cfa81134094b4652736?rik=ThMxS2%2fXe0J5cA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-nFM5BiqILq4%2fUJ1sAPK5BSI%2fAAAAAAAAMXk%2fr3j2uNW1TmU%2fs1600%2fbowfin%2bamia%2bbiggest%2bfish%2bin%2bthe%2bworld%2bever%2bcaught%2brecord%2bbig%2bhuge%2bfishes%2brecords%2blargest%2bIGFA%2bmonster%2bfishing%2bocean%2bsea%2bgiant%2bimages%2blb%2bpound%2bpictures%2busa%2bamerica%2bcanada.jpg&ehk=0eQ6cinvHS1aBmGTS2ZObMV3X%2f4VvrpI9IG%2fW8m%2bUHs%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
      freshwater: true,
      synonyms: "Mudfish"
    }
  })

  await prisma.fish.create({
    data:{
      name: "Clown knifefish",
      edibility: "Poor",
      photo: "https://th.bing.com/th/id/R.c5c8817baab87b44c9bab29fc11838c2?rik=y7VEd3PgzHK%2bBQ&pid=ImgRaw&r=0",
    }
  })

  await prisma.fish.create({
    data:{
      name: "Black crappie",
      minSize: "No minimum size",
      maxSize: "No maximum size",
      bagLimit: 25,
      edibility: "Excellent",
      photo: "https://s.hdnux.com/photos/04/36/50/1174022/3/1200x0.jpg",
      freshwater: true
    }
  })

  await prisma.fish.create({
    data:{
      name: "Tarpon",
      illegal: true,
      photo: "https://th.bing.com/th/id/OIP.b_AtHGeC79t8abs3_zxDigHaFF?pid=ImgDet&rs=1",
      saltwater: true,
      freshwater: true
    }
  })

  console.log("fish have been created");
}
seed();
