import { Schema, model, models } from "mongoose";

const ClientSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  messages: [
    {
      subject: { type: String, required: true },
      body: { type: String, required: true },
      receivedAt: { type: Date, default: Date.now() },
    },
  ],
});

const Client = models.Client ?? model("Client", ClientSchema);

type ClientType = {
  name: string;
  email: string;
  phone: string;
  messages: Array<{
    subject: string;
    body: string;
    receivedAt: Date;
  }>;
};

export { Client, type ClientType };
