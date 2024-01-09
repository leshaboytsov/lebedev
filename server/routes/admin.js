const path = require('path');
const fs = require('fs');
const { finished } = require('stream/promises');
const Film = require('../model/video');
const serverURL = 'http://localhost:8000';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../admin/admin.html'));
});

router.post('/addFilm', async (req, res) => {
  const { pageTitle, filmName, description, url, key, views, data } = req.body;
  const mp4File = req.files.mp4;
  const posterFile1 = req.files.poster1;
  const posterFile2 = req.files.poster2;

  try {
    if (!mp4File || !mp4File.data || !posterFile1 || !posterFile1.data || !posterFile2 || !posterFile2.data) {
      throw new Error('Не найден файл или данные файла');
    }

    // Создаем путь для сохранения видеофайла
    const videoDestinationPath = path.join(__dirname, `../film/${filmName}/video/`, `${filmName}.mp4`);
    const videoURL = `${serverURL}/film/${filmName}/video/${filmName}.mp4`;
    // Проверяем, существует ли видеофайл
    if (!fs.existsSync(videoDestinationPath)) {
      await fs.promises.mkdir(path.dirname(videoDestinationPath), { recursive: true });
    }

    // Создаем поток для записи видеофайла
    const videoWriteStream = fs.createWriteStream(videoDestinationPath);

    // Записываем данные буфера видеофайла
    for (let offset = 0; offset < mp4File.data.length; offset += 8192) {
      const chunk = mp4File.data.slice(offset, offset + 8192);
      videoWriteStream.write(chunk);
    }

    // Завершаем поток записи видеофайла
    videoWriteStream.end();

    // Ожидаем завершения записи видеофайла
    await finished(videoWriteStream);

    // Создаем путь для сохранения файла постера 1
    const poster1DestinationPath = path.join(__dirname, `../film/${filmName}/posters/`, `${filmName}_poster1.jpg`);
    const poster1URL = `${serverURL}/film/${filmName}/posters/${filmName}_poster1.jpg`;

    // Проверяем, существует ли файл постера
    if (!fs.existsSync(poster1DestinationPath)) {
      await fs.promises.mkdir(path.dirname(poster1DestinationPath), { recursive: true });
    }

    // Создаем поток для записи файла постера
    const poster1WriteStream = fs.createWriteStream(poster1DestinationPath);

    // Записываем данные буфера файла постера
    for (let offset = 0; offset < posterFile1.data.length; offset += 8192) {
      const chunk = posterFile1.data.slice(offset, offset + 8192);
      poster1WriteStream.write(chunk);
    }

    // Завершаем поток записи файла постера
    poster1WriteStream.end();

    // Ожидаем завершения записи файла постера
    await finished(poster1WriteStream);


     // Создаем путь для сохранения файла постера 2
     const poster2DestinationPath = path.join(__dirname, `../film/${filmName}/posters/`, `${filmName}_poster2.jpg`);
     const poster2URL = `${serverURL}/film/${filmName}/posters/${filmName}_poster2.jpg`;

     // Проверяем, существует ли файл постера
     if (!fs.existsSync(poster2DestinationPath)) {
       await fs.promises.mkdir(path.dirname(poster2DestinationPath), { recursive: true });
     }
 
     // Создаем поток для записи файла постера
     const poster2WriteStream = fs.createWriteStream(poster2DestinationPath);
 
     // Записываем данные буфера файла постера
     for (let offset = 0; offset < posterFile2.data.length; offset += 8192) {
       const chunk = posterFile2.data.slice(offset, offset + 8192);
       poster2WriteStream.write(chunk);
     }
 
     // Завершаем поток записи файла постера
     poster2WriteStream.end();
 
     // Ожидаем завершения записи файла постера
     await finished(poster2WriteStream);
    

    // Создаем новый фильм в базе данных
    const film = new Film({
      pageTitle,
      filmName,
      description,
      url,
      key,
      views,
      data,
      video: videoURL,
      poster1: poster1URL,
      poster2:poster2URL
    });

    const newFilm = await film.save();
    res.status(201).json(newFilm);
  } catch (err) {
    console.error('Ошибка при обработке запроса:', err);
    res.status(400).json({ message: 'Ошибка при обработке запроса' });
  }
});

module.exports = router;
