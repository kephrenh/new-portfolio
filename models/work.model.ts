import { Schema, model, models } from "mongoose";

const WorkSchema = new Schema({
  title: { type: String },
  github: { url: { type: String } },
  demo: { url: { type: String } },
  imageSrc: { type: String },
  description: { type: String },
  stack: [{ type: String }],
});

const Work = models.Work ?? model("Work", WorkSchema);

export default Work;
