const Dev = require('../models/dev')

const parseStringAsArray = require('../utils/parse-string-as-array')

module.exports = {

  async index (req, res) {
    const { latitude, longitude, techs } = req.query

    const techsArr = parseStringAsArray(techs)
    console.log('techsArr: ', techsArr)

    const devs = await Dev.find({
      techs: { $in: techsArr }, // Filtrar por tecnologias
      // location: {
      //   // Buscar todos os devs num raio de 10km
      //   $near: {
      //     $geometry: {
      //       type: 'Point',
      //       coordinates: [longitude, latitude]
      //     },
      //     $maxDistance: 10000
      //   }
      // }
    })

    console.log('devs: ', devs)

    return res.status(200).json({ devs })
  }

}
