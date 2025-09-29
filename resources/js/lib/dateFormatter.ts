import moment from 'moment';

export function dateFormatter(date: string, formatter = "YYYY-MM-DD HH:mm:ss") {
    return moment(date).format(formatter);
}