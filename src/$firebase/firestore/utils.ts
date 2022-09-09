import {collection, CollectionReference, DocumentData } from "firebase/firestore";
import { firestore } from "../main";

/**
 * 
 * @param collectionName Name of the collection
 * @returns The collection reference
 */

export const createCollection = <T = DocumentData>(collectionName: string) => {
    return collection(firestore, collectionName) as CollectionReference<T>
}