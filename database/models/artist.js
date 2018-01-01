const mongoose = require('mongoose');
const ArtistSchema = require('../schemas/artist');

const Artist = mongoose.model('artist', ArtistSchema, 'artists');

module.exports = Artist;
