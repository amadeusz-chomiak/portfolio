import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'

const db = admin.firestore()

export const cooperationRequestNotification = functions.firestore.document('cooperationRequest/{id}').onCreate(async (snapshot, context) => {
  const data = snapshot.data()

  const notification: admin.messaging.NotificationMessagePayload = {
    title: 'Nowy klient',
    body: `Napisał ${data.request}`
  }
  
  try {
    const snapshotAdmin = await db.doc('user/amadeusz').get()
    const sendTokens = snapshotAdmin?.data()?.pushTokens
    if(!sendTokens) return console.error('no tokens registered')
    admin.messaging().sendToDeviceGroup(sendTokens, {notification}).then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
    });
  } catch (error) {
    console.error(error)
  }
  finally {
    return
  }

})