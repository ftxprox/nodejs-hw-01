import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from './createFakeContact.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts = createFakeContact()) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts), 'utf-8');
    console.log('Data written succesfully');
  } catch (e) {
    console.error(e);
  }
};