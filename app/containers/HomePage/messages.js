/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  contactus: {
    id: `${scope}.contactUs`,
    defaultMessage: 'Contact Us',
  },
  ouroffices: {
    id: `${scope}.ourOffices`,
    defaultMessage: 'Our offices',
  },
});
