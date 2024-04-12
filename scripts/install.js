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
  // Paramétros
  await saveDocument('params', {
    editable: true,
    name: 'Whatsapp principal',
    value: '72556828',
  });
  await saveDocument('params', {
    editable: true,
    name: 'Banco',
    value: 'Banco Unión',
  });
  await saveDocument('params', {
    editable: false,
    name: 'Código QR',
    value: '',
  });
  await saveDocument('params', {
    editable: true,
    name: 'Whatsapp Bot',
    value: '62312843',
  });
  await saveDocument('params', {
    editable: true,
    name: 'Cuenta bancaria(Transferencias)',
    value: '1000000342334',
  });
  await saveDocument('delivery_types', {
    name: 'Encomienda',
    state: true,
  });
  await saveDocument('delivery_types', {
    name: 'Domicilio (de 1 a 3 días habiles)',
    state: false,
  });
  await saveDocument('delivery_types', {
    name: 'En tienda (10% de descuento)',
    state: true,
  });
  await saveDocument('delivery_types', {
    name: 'Punto de entrega',
    state: true,
  });
  await saveDocument('users', {
    email: 'admin@admin.com',
    name: 'Administrador',
    password: await bcrypt.hash('admin', 10),
    phone: '72556828',
    roles: [{ name: 'Administrador' }],
  });
  console.log('Base de datos inicializada correctamente');
  process.exit(1);
};

main();
