const { nanoid } = require("nanoid");

let notes = [];

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;
  const id = nanoid();
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    id,
    title,
    createdAt,
    updatedAt,
    tags,
    body,
  };

  notes.push(newNote);

  const response = h.response({
    status: "success",
    message: "Catatan berhasil ditambahkan",
    data: {
      noteId: id,
    },
  });
  response.code(201);
  return response;
};

const getAllNotesHandler = (request, h) => {
  const response = h.response({
    status: "success",
    data: {
      notes,
    },
  });
  response.code(200);
  return response;
};

const getNoteByIdHandler = (request, h) => {
  const { id } = request.params;
  const note = notes.find((note) => note.id === id);

  if (note) {
    return h
      .response({
        status: "success",
        data: {
          note,
        },
      })
      .code(200);
  }

  return h
    .response({
      status: "fail",
      message: "Catatan tidak ditemukan",
    })
    .code(404);
};

const editNoteByIdHandler = (request, h) => {
  const { id } = request.params;
  const { title, tags, body } = request.payload;
  const updatedAt = new Date().toISOString();

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };

    return h
      .response({
        status: "success",
        message: "Catatan berhasil diperbarui",
      })
      .code(200);
  }

  return h
    .response({
      status: "fail",
      message: "Gagal memperbarui catatan. Id tidak ditemukan",
    })
    .code(404);
};

const deleteNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    return h
      .response({
        status: "success",
        message: "Catatan berhasil dihapus",
      })
      .code(200);
  }

  return h
    .response({
      status: "fail",
      message: "Catatan gagal dihapus. Id tidak ditemukan",
    })
    .code(404);
};

module.exports = {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
};
