
import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(datatime) {
      if (!datatime) {
        return "-";
      }
      return moment(datatime).fromNow();
      // return datetime ? moment(datetime).fromNow() : '-'
    },
  },
}

export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    }
  }
}
