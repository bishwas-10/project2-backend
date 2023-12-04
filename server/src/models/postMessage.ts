import mongoose, { SchemaType } from "mongoose";

interface Posts {
  title: string;
  creator: string;
  location: string;
  description: string;
  selectedFile: string;
  likeCount: number;
  createdAt: Date;
}
const messageSchema = new mongoose.Schema<Posts>({
  title: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default:""
  },
  selectedFile: {
    type: String,
    default:null
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const postMessage = mongoose.model("postmessage", messageSchema);

export default postMessage;
