import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from './config'

export async function getProducts(filters) {
  const ref = collection(db, 'products')
  let q = ref

  const conditions = []
  if (filters.size) conditions.push(where('size', '==', filters.size))
  if (filters.material) conditions.push(where('material', '==', filters.material))
  if (filters.color) conditions.push(where('color', '==', filters.color))

  if (conditions.length > 0) {
    q = query(ref, ...conditions)
  }

  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}