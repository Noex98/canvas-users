import { createCollection } from "../utils";
import { User } from "../../../types";
import { 
    doc,
    getDocs, 
    onSnapshot,
    setDoc
} from "firebase/firestore";

const name = 'users';

export class userModel {

    static ref = createCollection<User>(name)

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

    static startObserver(dataHandler: (data:User[] ) => void){
        return onSnapshot(this.ref, 
            data => {
                dataHandler(data.docs.map(doc => doc.data()));
            },
            err => {
                console.log(err);
            }
        )
    }

    /**
     * @param data The user data
     * @param id Document ID, if omitted it will be auto generated
     */

    static setDoc(data: User, id?: string){
        setDoc(doc(this.ref, id), data)
    }
}