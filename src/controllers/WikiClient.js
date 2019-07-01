import wiki from 'wikijs';
import { WIKI_URL } from 'react-native-dotenv';

export default wiki({ apiUrl: WIKI_URL });
