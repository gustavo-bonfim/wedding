import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);
dayjs.locale('pt-br');
