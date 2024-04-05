const dotenv = require('dotenv');
const firestore = require('firebase/firestore');
const bcrypt = require('bcrypt');
const firebase = require('firebase/app');
dotenv.config();

const configFirebase = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = firebase.initializeApp(configFirebase);
const db = firestore.getFirestore(app);

const saveDocument = async (collectionParam, data) => {
  try {
    const savedDocument = await firestore.addDoc(
      firestore.collection(db, collectionParam),
      data,
    );
    return savedDocument;
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  await saveDocument('users', {
    email: 'felix@felix.com',
    name: 'Felix Mamani',
    password: await bcrypt.hash('felix', 10),
    phone: '77777777',
    roles: [{ name: 'Administrador' }],
  });
};

main();
