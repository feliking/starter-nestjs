import { BadRequestException } from '@nestjs/common';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
} from 'firebase/firestore';
import { configFirebase } from 'src/admin/constants';
export function FirestoreService() {
  const app = initializeApp(configFirebase);
  const db = getFirestore(app);

  console.log(configFirebase);

  // Functions
  const getDocuments = async (collectionParam) => {
    try {
      const result = [];
      const data = await getDocs(collection(db, collectionParam));
      data.forEach((item) => {
        result.push({ id: item.id, ...item.data() });
      });
      return result;
    } catch (error) {
      throw new BadRequestException(
        'Ocurrió un error al obtener la información',
      );
    }
  };

  const getDocument = async (collectionParam, id) => {
    try {
      const document = await getDoc(doc(db, collectionParam, id));
      return { id: document.id, ...document.data() };
    } catch (error) {
      throw new BadRequestException(
        'Ocurrió un error al obtener la información del documento',
      );
    }
  };

  const saveDocument = async (collectionParam, data) => {
    try {
      const savedDocument = await addDoc(collection(db, collectionParam), data);
      return savedDocument;
    } catch (error) {
      throw new BadRequestException('Ocurrió un error al guardar el documento');
    }
  };

  const updateDocument = async (collectionParam, id, data) => {
    try {
      await updateDoc(doc(db, collectionParam, id), data);
    } catch (error) {
      throw new BadRequestException(
        'Ocurrió un error al actualizar el documento',
      );
    }
  };

  const deleteDocument = async (collectionParam, id) => {
    try {
      await deleteDoc(doc(db, collectionParam, id));
    } catch (error) {
      throw new BadRequestException('Ocurrió un error al borrar el documento');
    }
  };

  const customQuery = async (queryParam: any) => {
    const result: any = [];
    const querySnapshot = await getDocs(query(queryParam));
    querySnapshot.forEach((item: any) => {
      result.push({ id: item.id, ...item.data() });
    });
    return result;
  };

  return {
    db,
    getDocuments,
    getDocument,
    saveDocument,
    updateDocument,
    deleteDocument,
    customQuery,
  };
}
