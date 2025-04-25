import express from "express";
import multer from "multer";
import cors from "cors";
import path from "path";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json()); // Добавляем поддержку JSON

// Настройка multer для сохранения файлов
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Сохраняем файлы в корневую папку uploads
    const uploadDir = path.join(process.cwd(), "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

// Создаем папку uploads, если её нет
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// Маршрут для загрузки файлов и текста
app.post("/upload", upload.single("file"), (req, res) => {
  const text = req.body.text;
  const file = req.file;

  // Если нет ни текста, ни файла
  if (!text?.trim() && !file) {
    return res.status(400).json({ error: "No data provided" });
  }

  console.log("Received text:", text);
  if (file) {
    console.log("Received file:", file);
  }

  // Возвращаем информацию о файле, тексте и обновленную базу данных
  res.json({
    success: true,
    data: {
      text: text || null,
      file: file
        ? {
            filename: file.originalname,
            size: file.size,
            path: file.path,
          }
        : null,
    },
    // Пример обновленной базы данных
    companies: [
      {
        id: 1,
        name: "Начни карьеру в ИТ",
        imageUrl:
          "https://cdn-it.fut.ru/api/storage/api/files/show-img/3481cc66-fece-4a4c-85e8-ba7b50251c2c_small.webp",
        description:
          "На стажировке тебя ждет полное погружение в ИТ-индустрию. С первого дня ты будешь работать с реальными задачами и набираться опыта, а ментор и коллеги будут поддерживать тебя и делиться своей экспертизой",
        tags: [
          { id: 1, text: "Удаленка" },
          { id: 2, text: "Берут выпускников" },
          { id: 3, text: "Гибкий график" },
        ],
        deadline: "10 марта",
        places: 8,
      },
      {
        id: 2,
        name: "Озон",
        imageUrl: "/company/sapka_dlia_kataloga_small.png",
        description:
          "Стань частью крупнейшей IT-экосистемы страны, участвуй в реальных задачах, решение которых принесет пользу клиентам и нашим сотрудникам",
        tags: [
          { id: 1, text: "Удаленка" },
          { id: 2, text: "Гибкий график" },
          { id: 3, text: "Оффлайн" },
        ],
        deadline: "31 декабря",
        places: 10,
      },
      {
        id: 3,
        name: "Сбер",
        imageUrl:
          "https://it.fut.ru/api/storage/api/files/show-img/c1b7b1f3-62d1-4cdc-a55f-886da21e9341_small.webp",
        description:
          "Работайте в крупнейшем банке России над инновационными финансовыми технологиями",
        tags: [
          { id: 1, text: "Оффлайн" },
          { id: 2, text: "Соцпакет" },
          { id: 3, text: "Карьера" },
        ],
        deadline: "20 февраля",
        places: 15,
      },
    ],
  });
});

// Проксируем все остальные запросы к json-server
app.use((req, res, next) => {
  if (req.path !== "/upload") {
    // Здесь будет логика проксирования к json-server
    next();
  }
});

app.listen(3100, () => console.log("Mock upload server running on port 3100"));
