import mongoose, { mongo } from "mongoose";

/**
 * 0 = disconenected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongoConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongoConnection.isConnected) {
    console.log("estamos conectados");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;
    if (mongoConnection.isConnected === 1) {
      console.log("Usando coneccion");
      return;
    }

    await disconnect();
  }

  await mongoose.connect(process.env.DB_URL || "");
  mongoConnection.isConnected = 1;
  console.log("conectado a MongoDb:", process.env.DB_URL);
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === "development") return;
  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();
  console.log("desconectado de la Base");
};
