import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc, getDocs, getFirestore, updateDoc, doc, query, orderBy } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { firebaseConfig } from './firebaseConfig'
import { clearProjectsCache, readProjectsCache, writeProjectsCache } from './projectsCache'

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
  const docRef = await addDoc(collection(db, 'projects'), formData)
  console.log('Document written with ID: ', docRef.id)
  await updateDoc(doc(db, 'projects', docRef.id), { id: docRef.id })
  clearProjectsCache()
}

/**
 * Lista proyectos desde caché (localStorage) si existe; si no, desde Firestore y guarda en caché.
 * @param {{ forceRefresh?: boolean }} options - Si forceRefresh es true, ignora la caché.
 */
export const getProjects = async (options = {}) => {
  const { forceRefresh = false } = options

  if (!forceRefresh) {
    const cached = readProjectsCache()
    if (cached) {
      return cached
    }
  }

  const q = query(collection(db, 'projects'), orderBy('id', 'desc'))
  const querySnapshot = await getDocs(q)
  const arrayProducts = []

  querySnapshot.forEach((docSnap) => {
    const data = docSnap.data()
    arrayProducts.push({ id: docSnap.id, ...data })
  })

  writeProjectsCache(arrayProducts)
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
    throw e
  }
}
