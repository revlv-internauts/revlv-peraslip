import moment from 'moment';

export function dateFormatter(date: string, formatter = "YYYY-MM-DD") {
    return moment(date).format(formatter);
}