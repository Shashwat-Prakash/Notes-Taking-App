const yargs = require("yargs");
const notes = require("./notes");
// const val = yargs.argv;
// console.log(val);

// Adding a Note with Title and Body
yargs.command({
  command: "add",
  describe: "Add a new Note...",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
    date: {
      describe: "Note Date",
      demandOption: false,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "read",
  describe: "Reading a Note...",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List all Notes...",
  handler: function () {
    notes.listNotes();
  },
});

yargs.parse();
