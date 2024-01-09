const express = require("express")
const router = express.Router()
const Film = require('../model/video')

router.get('/', async (req, res) => {
    try {
        const films = await Film.find().sort({ data: -1 }); 
        await res.json(films);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



router.post('/', async(req, res)=>{
    const film = new Film({
        pageTitle: req.body.pageTitle,
        filmName: req.body.filmName,
        description: req.body.description,
        url: req.body.url,
        key: req.body.key,
        poster1: req.body.poster1,
        poster1: req.body.poster1,
        video: req.body.video,
        views: req.body.views,
        data: req.body.views
    })
    try{
        const newFilm = film.save()
        await res.status(201).json(newFilm)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
})


router.get('/:url', async (req, res) => {
    try {
        const filmUrl = req.params.url;

        const film = await Film.findOne({ url: filmUrl }); 
        if (!film) {
            return res.status(404).json({ error: 'Film not found' });
        }
        film.views += 1;
        await film.save();

        res.json(film);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router
