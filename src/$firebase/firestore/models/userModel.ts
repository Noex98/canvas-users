import { createCollection } from "../utils";
import { IUser,IUserRaw } from "../../../types";
import { 
    deleteDoc,
    doc,
    getDocs, 
    onSnapshot,
    setDoc,
} from "firebase/firestore";

const name = 'users';

export class userModel {

    static ref = createCollection<IUserRaw>(name)

    /**
     * @returns An array of all documents in the collection
     */

    static async getAllDocs() {
        const snapshot = await getDocs(this.ref);
        return snapshot.docs.map(doc => doc.data());
    }

    /**
     * @param dataHandler Handles the data everytime data is updated
     * @returns An unsubscribe function
     */

    static startObserver(dataHandler: (data:IUser[] ) => void){
        return onSnapshot(this.ref,
            data => {
                dataHandler(data.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                })));
            },
            err => {
                console.log(err);
            }
        )
    }

    /**
     * @param data The user data
     * @param id Document ID, if omitted it will be auto generated
     * @returns A Promise resolved once the data has been successfully written to the backend (note that it won't resolve while you're offline).
     */

    static async setDoc(data: IUserRaw, id?: string){
        console.log(this.ref);
        return await setDoc(doc(this.ref), data);
    }

    /**
     * 
     * @param id ID of the doc to be deleted
     * @returns A Promise resolved once the document has been successfully deleted from the backend (note that it won't resolve while you're offline).
     */

    static async deleteDoc(id: string){
        return await deleteDoc(doc(this.ref, id))
    }
}