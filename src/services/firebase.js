import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc, getDocs, getFirestore, updateDoc, doc } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { firebaseConfig } from './firebaseConfig'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const auth = getAuth(app)

export const logIn = async (dataUser) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, dataUser.email, dataUser.password)
    return userCredential.user
  } catch (error) {
    console.error('Error logging in: ', error)
    throw error
  }
}

export const addProject = async (formData) => {
  console.log('Form in addproject', formData)
  try {
    const docRef = await addDoc(collection(db, 'projects'), formData)
    console.log('Document written with ID: ', docRef.id)
    await updateDoc(doc(db, 'projects', docRef.id), { id: docRef.id })
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export const getProjects = async () => {
  const querySnapshot = await getDocs(collection(db, 'projects'))
  const arrayProducts = []

  querySnapshot.forEach((doc) => {
    const data = doc.data()
    arrayProducts.push({ id: doc.id, ...data })
  })

  return arrayProducts
}

export const uploadImage = async (image, project) => {
  console.log(project, image)
  if (image === undefined) {
    throw new Error('Image is undefined')
  }

  try {
    const storage = getStorage()
    const storageRef = ref(storage, `${project}/${image.name}`)
    await uploadBytes(storageRef, image)
    const imageURL = await getDownloadURL(storageRef)
    return imageURL
  } catch (e) {
    console.error('Error uploading image: ', e)
    throw e // Re-lanzar el error para que pueda ser manejado por el código que llama a esta función
  }
}
