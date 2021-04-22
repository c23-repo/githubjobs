// packages
const express = require("express");
const cors = require("cors");
// internal code

const server = express();
server.use(cors());
const PORT = process.env.PORT ? process.env.PORT : 3000;

server.listen(PORT, () => {
  console.log(`server listen on port: ${PORT}`);
});

const jobs = [
  { title: "Director of Ops", salary: "100000", company: "Amazon" },
  { title: "SDE", salary: "130000", company: "Audible" },
];

const { getJobs } = require("./Services");

// GET /jobs
server.get("/jobs", (req, res) => {
  const { tech } = req.query;
  if (tech == undefined) {
    return res.status(400).send("not a valid endpoint. set to tech query");
  }
  getJobs(tech).then((jobs) => res.send(jobs));
  console.log("success");
});

server.get("/", (req, res) => {
  console.log("home route");
});

// getJobs("Python").then((pyJobs) => console.log(pyJobs[0]))
// getJobs("Java").then((javaJobs) => console.log(javaJobs[0]))
