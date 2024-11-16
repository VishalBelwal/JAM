import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
    {
        senderId: {
            type: String,
            requires: true,
        },
        receiverId: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema)