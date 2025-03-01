import { db } from "./firebase"
import { addDoc, collection,getDocs } from "firebase/firestore";
import { IFormInput, ArrayTasksProps, Task } from '@/app/types/types';


export const  addTask = async (taks:IFormInput) => {
  try {
    const docRef = await addDoc(collection(db, "tasks"), taks);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const getTasks = async (): Promise<ArrayTasksProps> => {
  try {
    const tasksCollectionRef = collection(db, "tasks");
    const querySnapshot = await getDocs(tasksCollectionRef);
    
    const tasks: Task[] = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        user: data.user ?? "",
        date: data.date ?? "",
        resume: data.resume ?? "",
      };
    });

    return { tasks };
  } catch (e) {
    console.error("Error fetching tasks:", e);
    return { tasks: [] }; 
  }
};

