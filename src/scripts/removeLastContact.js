import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const data = JSON.parse(await readContacts());
    if (data.length > 0) {
      data.pop();
      writeContacts(data);
    } else {
      return data;
    }
  } catch (e) {
    console.error(e);
  }
};

removeLastContact();