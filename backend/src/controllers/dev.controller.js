const axios = require('axios')
const Dev = require('../models/dev')

const parseStringAsArray = require('../utils/parse-string-as-array')

// index, show, store, update, destroy

module.exports = {
  async index(req, res) {
    const devs = await Dev.find()
    return res.status(200).json({ devs })
  },

  async show(req, res) {
    const { id } = req.params
    const dev = await Dev.findOne({ _id: id })
    return res.status(200).json({ dev })
  },

  async store (req, res) {
    const { github_username, techs, latitude, longitude } = req.body
    
    // Validar se ja existe dev ou nao
    const dev = await Dev.findOne({ github_username })

    if (!dev) {
      const data = await axios.get(`https://api.github.com/users/${github_username}`)
      const { name = login, bio, avatar_url } = data.data
    
      const techsArr = parseStringAsArray(techs)
    
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      }
    
      let bodyCreate = {
        github_username,
        name,
        bio,
        avatar_url,
        techs: techsArr,
        location
      }
      const dev = await Dev.create(bodyCreate)
    
      return res.status(201).json({ data: dev })
    } else {
      return res.status(409).json({ message: 'ja existe usuario registrado', dev })
    }
  },

  async update(req, res) {
    const { id } = req.params
    
    const { techs, latitude, longitude } = req.body

    const techsArr = parseStringAsArray(techs)

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
    }

    // Validar se ja existe dev ou nao
    const dev = await Dev.findById(id)

    if (!dev) {
      return res.status(404).json({ message: 'usuario nao encontrado', dev })
    } else {
      let bodyUpdate = {
        techs,
        latitude,
        longitude
      }

      let udpate = await Dev.update({ _id: id }, bodyUpdate, { multi: false })

      return res.status(200).json({ udpate })
    }
  },

  async delete(req, res) {
    const { id } = req.params
    
    // Validar se ja existe dev ou nao
    const dev = await Dev.findById(id)

    if (!dev) {
      return res.status(404).json({ message: 'usuario nao encontrado', dev })
    } else {
      let del = await Dev.remove({ _id: id }) 
      return res.status(200).json({ del })
    }
  }

}