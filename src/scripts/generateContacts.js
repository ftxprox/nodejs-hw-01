import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    const newContacts = Array.from({ length: number }, createFakeContact);
    
    await writeContacts([...contacts, ...newContacts]);

    console.log(`Successfully generated ${number} new contacts.`);
  } catch (error) {
    console.error('Error generating contacts:', error.message);
  }
};

generateContacts(5);