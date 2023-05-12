import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  deleteDoc, 
  updateDoc, 
  query, 
  where, 
  getDoc 
} from "firebase/firestore";

import { db, app } from "./config";

type Data = { 
  [key: string]: any 
};

type QueryOperator = "<" | "<=" | "==" | ">=" | ">" | "!=";

interface FirestoreFunctions {

  createData: (
    collectionName: string, 
    data: Data, 
    callback?: (id: string | null) => void
  ) => Promise<string | null>;
  
  createOrUpdateData: (
    collectionName: string, 
    id: string | null,
    data: Data, 
    callbackCreate?: (id: string | null) => void,
    callbackUpdate?: (success: boolean) => void
  ) => void;

  readAllData: (
    collectionName: string, 
    callback?: (data: Data[] | null) => void
  ) => Promise<Data[] | null>;

  readDataByCondition: (
    collectionName: string, 
    field: string, 
    operator: QueryOperator, 
    value: any, 
    callback?: (data: Data[] | null) => void
  ) => Promise<Data[] | null>;
  
  readData: (
    collectionName: string, 
    id: string, 
    callback?: (data: Data | null) => void
  ) => Promise<Data | null>;
  
  updateData: (
    collectionName: string, 
    id: string, 
    data: Data, 
    callback?: (success: boolean) => void
  ) => Promise<boolean>;

  updateAndReadData: (
    collectionName: string,
    id: string,
    data: Record<string, any>,
    callback?: (data: Record<string, any> | null) => void,
  ) => Promise<Record<string, any> | null>;
  
  deleteData: (
    collectionName: string, 
    id: string, 
    callback?: (success: boolean) => void
  ) => Promise<boolean>;

}

export const FirestoreFunctions: FirestoreFunctions = {

  createData: async (collectionName, data, callback) => {
    
    try {

      const docRef = await addDoc(collection(db, collectionName), data);
      const id = docRef.id;

      if (callback) callback(id);

      return id

    } catch (error) {

      console.log("Error adding document: ", error);
      if (callback) callback(null);
      return null;

    }

  },

  createOrUpdateData: async (collectionName, id, data, callbackCreate, callbackUpdate) => {

    if(!id) {

      FirestoreFunctions.createData(collectionName, data, callbackCreate);

    } else {

      FirestoreFunctions.updateData(collectionName, id, data, callbackUpdate);

    }

  },

  readAllData: async (collectionName, callback) => {

    try {

      const querySnapshot = await getDocs(collection(db, collectionName));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      if (callback) callback(data);

      return data;

    } catch (error) {

      console.log("Error getting documents: ", error);
      if (callback) callback(null);
      return null;

    }

  },

  readDataByCondition: async (collectionName, field, operator, value, callback) => {

    try {

      const q = query(collection(db, collectionName), where(field, operator, value));
      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      if (callback) callback(data);

      return data

    } catch (error) {

      console.log("Error getting documents by condition: ", error);
      if (callback) callback(null);
      return null;

    }

  },

  readData: async (collectionName, id, callback) => {

    try {

      const docRef = doc(db, collectionName, id);
      const docSnapshot = await getDoc(docRef);

      if (!docSnapshot.exists()) {
        return null;
      }

      const data = { 
        id: docSnapshot.id, 
        ...docSnapshot.data() 
      };

      if (callback) callback(data);

      return data;

    } catch (error) {

      console.log("Error getting document: ", error);
      if (callback) callback(null);
      return null;

    }

  },

  updateData: async (collectionName, id, data, callback) => {

    try {

      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, data);

      if (callback) callback(true);

      return true;

    } catch (error) {

      console.log("Error updating document: ", error);
      if (callback) callback(false);
      return false;

    }

  },

  updateAndReadData: async (collectionName, id, data, callback) => {

    try {
      
      const docRef = doc(db, collectionName, id);

      await updateDoc(docRef, data);

      const docSnapshot = await getDoc(docRef);

      const updatedData = {
        id: docSnapshot.id,
        ...docSnapshot.data(),
      };

      if (callback) callback(updatedData);

      return updatedData;

    } catch (error) {

      console.log('Error updating document:', error);

      if (callback) callback(null);

      return null;

    }

  },

  deleteData: async (collectionName, id, callback) => {

    try {

      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);

      if (callback) callback(true);

      return true;

    } catch (error) {

      console.log("Error deleting document: ", error);
      if (callback) callback(false);
      return false;

    }

  },

}