const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

beforeAll(async () => {
  if (mongoose.connection.readyState === 1) {
    console.log('Using existing database connection for tests');
    return;
  }

  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  console.log("uri::::::::::::::::", uri);

  await mongoose.disconnect(); // Ensure previous connections are closed before creating a new one
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('MongoDB connected for tests');
});


afterAll(async () => {
 
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
});

afterEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
});
